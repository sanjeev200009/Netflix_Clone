
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const registerSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      setLoading(true);
      await register(values.email, values.password);
      
      toast({
        title: "Account created!",
        description: "You've successfully registered an account.",
      });
      
      // Navigate to login page
      navigate("/login");
    } catch (error: any) {
      console.error("Registration error:", error);
      
      let errorMessage = "Failed to create an account";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email is already in use";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak";
      }
      
      toast({
        title: "Registration Failed",
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
        <h1 className="text-3xl font-bold text-white mb-6">Sign Up</h1>
        
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
                      placeholder="Create a password" 
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Confirm Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="Confirm your password" 
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
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>
        </Form>
        
        <div className="mt-10 text-gray-500">
          <p className="text-base">
            Already have an account? <Link to="/login" className="text-white hover:underline">Sign in</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
