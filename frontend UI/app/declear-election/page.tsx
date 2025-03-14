"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react"


const page = () => {
  const FormSchema = z.object({
    name: z.string().nonempty({ message: "Enter Election Name" }),
    level: z.string().nonempty({ message: "Select Election Level" }),
    startDate: z.string().nonempty({ message: "Select Election Start Date" }),
    endDate: z.string().nonempty({ message: "Select Election End Date" }),
    status: z.string().nonempty({ message: "Select Election Status" }),
    allowedLocation: z.string().nonempty({ message: "Select Election Location" })
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      level: "",
      startDate: "",
      endDate: "",
      status: "upcomming",
      allowedLocation: ""
    }
  })
  const { state } = useSidebar();
  const options = [
    { id: "apple", label: "Apple" },
    { id: "banana", label: "Banana" },
    { id: "cherry", label: "Cherry" },
  ];
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  }
  return (
    <div className={`h-[100vh] flex justify-center items-start ${state === "expanded" ? "w-[80vw]" : "w-[99vw]"} `}>
      <div className="w-full lg:w-[50vw]  bg-white px-6 py-[4rem] shadow-lg rounded-lg border border-[#3E7ADC]">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#3E7ADC]">Declear Election</h2>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a province" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="local">Local Level</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-start gap-[6rem]">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col ">
                      <FormLabel className="text-[#3E7ADC]">Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild className=" flex">
                          <FormControl>
                            <div
                              role="button"
                              tabIndex={0}
                              className={cn(
                                "w-[240px] px-3 py-2 border rounded-md text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined} // Convert string to Date
                            onSelect={(date) => field.onChange(date ? date.toISOString() : "")} // Convert Date to string
                            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col ">
                      <FormLabel className="text-[#3E7ADC]">End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild className=" flex">
                          <FormControl>
                            <div
                              role="button"
                              tabIndex={0}
                              className={cn(
                                "w-[240px] px-3 py-2 border rounded-md text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined} // Convert string to Date
                            onSelect={(date) => field.onChange(date ? date.toISOString() : "")} // Convert Date to string
                            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Election Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="upcomming" className="text-gray-500">Upcomming</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="allowedLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">Polling Locations</FormLabel>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild className="w-full">
                        <Button variant="outline" className="flex justify-start text-gray-500 items-center gap-2">
                          {selected.length > 0
                            ? selected.map((id) => options.find((o) => o.id === id)?.label).join(", ")
                            : "Select options"}
                          <ChevronDownIcon className="size-4 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[47vw]">
                        {options.map((option) => (
                          <DropdownMenuCheckboxItem
                            key={option.id}
                            checked={selected.includes(option.id)}
                            onCheckedChange={() => toggleSelection(option.id)}
                          >
                            {option.label}
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>

  )
}

export default page