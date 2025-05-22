
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // Get the redirect path or default to home
  const from = location.state?.from?.pathname || "/";

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      await login(values.email, values.password);
      
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
      
      // Navigate to the page they were trying to access or home
      navigate(from, { replace: true });
    } catch (error: any) {
      console.error("Login error:", error);
      
      let errorMessage = "Failed to log in";
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMessage = "Invalid email or password";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many failed login attempts. Please try again later.";
      }
      
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
      <div className="absolute top-6 left-6 z-50">
        <Link to="/" className="flex items-center">
          <span className="text-netflix-red font-bold text-4xl transform -skew-x-12">
            NETFLIX
          </span>
        </Link>
      </div>
      
      <div className="w-full max-w-md bg-black bg-opacity-80 rounded-md p-8 border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-6">Sign In</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your email" 
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-netflix-red" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="Enter your password" 
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-netflix-red" />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-netflix-red hover:bg-netflix-red/90 text-white font-medium py-3 rounded"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
        
        <div className="mt-4 text-gray-500 flex justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" />
            <span className="text-sm">Remember me</span>
          </label>
          <a href="#" className="text-sm hover:underline">Need help?</a>
        </div>
        
        <div className="mt-10 text-gray-500">
          <p className="text-base">
            New to Netflix? <Link to="/register" className="text-white hover:underline">Sign up now</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
