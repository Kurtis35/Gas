import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      return await apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "We've received your message and will get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive"
      });
    }
  });

  return (
    <div className="pt-40 pb-32 dark:bg-emerald-950/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-6xl lg:text-8xl font-display font-black text-slate-900 dark:text-white mb-8 leading-[0.9]">
              Let's <br />
              <span className="text-gradient italic font-bold">Connect.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-16 max-w-lg">
              Have a question or need a quote? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-black text-xl mb-1 dark:text-white">Phone</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">+27 (0) 72 870 9882</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-black text-xl mb-1 dark:text-white">Email</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">info@gordonsbaygas.co.za</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-black text-xl mb-1 dark:text-white">Location</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Gordon's Bay, Cape Town, ZA</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] dark:bg-emerald-900/10 rounded-[3rem] overflow-hidden">
            <CardHeader className="p-12 pb-6">
              <CardTitle className="text-3xl font-black dark:text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-12 pt-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-black uppercase tracking-widest text-[10px] text-slate-400">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-14 rounded-2xl border-emerald-50 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/30 focus-visible:ring-emerald-500" {...field} />
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
                          <FormLabel className="font-black uppercase tracking-widest text-[10px] text-slate-400">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="h-14 rounded-2xl border-emerald-50 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/30 focus-visible:ring-emerald-500" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-black uppercase tracking-widest text-[10px] text-slate-400">Required Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 rounded-2xl border-emerald-50 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/30 focus-visible:ring-emerald-500">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-2xl border-emerald-100 dark:border-emerald-900">
                            <SelectItem value="electrical">Electrical Services</SelectItem>
                            <SelectItem value="gas">Gas Services</SelectItem>
                            <SelectItem value="plumbing">Plumbing Services</SelectItem>
                            <SelectItem value="pest">Beetle & Pest Control</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-black uppercase tracking-widest text-[10px] text-slate-400">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            className="min-h-[160px] rounded-[2rem] border-emerald-50 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/30 focus-visible:ring-emerald-500 resize-none p-6"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-16 rounded-[2rem] text-lg font-black bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-500/20 text-white" disabled={mutation.isPending}>
                    {mutation.isPending ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
