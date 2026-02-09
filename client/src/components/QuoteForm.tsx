import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function QuoteForm() {
  const createInquiry = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <Card className="border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden bg-white">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-400" />
      
      <CardHeader className="space-y-2 pb-6">
        <CardTitle className="text-2xl font-bold text-slate-900">Get a Free Quote</CardTitle>
        <CardDescription className="text-slate-500">
          Fill in your details and we'll call you back within 24 hours.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} className="h-11 rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20 bg-slate-50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="h-11 rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20 bg-slate-50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How can we help?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="I need a gas hob installation..." 
                      className="min-h-[120px] rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20 bg-slate-50 resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold rounded-lg bg-primary hover:bg-orange-600 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              disabled={createInquiry.isPending}
            >
              {createInquiry.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Request Quote"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
