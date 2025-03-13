"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useSidebar } from "@/components/ui/sidebar"
import { useEffect } from "react"


const FormSchema = z.object({
  locationName: z.string().nonempty({ message: "Please enter location name" }),
  province: z.string().nonempty({ message: "Please select a province" }),
  district: z.string().nonempty({ message: "Please select a district" }),
  municipality: z.string().nonempty({ message: "Please select a municipality" }),
  ward: z.string().nonempty({ message: "Please select a ward" }),
})

const provinces = [
  { id: "1", name: "Province 1" },
  { id: "2", name: "Madhesh Province" },
  { id: "3", name: "Bagmati Province" },
  { id: "4", name: "Gandaki Province" },
  { id: "5", name: "Lumbini Province" },
  { id: "6", name: "Karnali Province" },
  { id: "7", name: "Sudurpashchim Province" }
]

// Placeholder districts, municipalities, and wards (replace with real data)
const districts = [
  { id: "1", name: "Kathmandu" },
  { id: "2", name: "Bhaktapur" },
  { id: "3", name: "Lalitpur" },
]

const municipalities = [
  { id: "1", name: "Kathmandu Metropolitan City" },
  { id: "2", name: "Lalitpur Metropolitan City" },
  { id: "3", name: "Bhaktapur Municipality" },
]

const wards = Array.from({ length: 32 }, (_, i) => ({ id: `${i + 1}`, name: `Ward ${i + 1}` }))

const Page = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      locationName: "",
      province: "",
      district: "",
      municipality: "",
      ward: "",
    },
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("Form Submitted:", data)
  }
  const { state } = useSidebar()

  return (
    <div className={`h-[100vh] flex justify-center items-center ${state === "expanded" ? "w-[80vw]" : "w-[99vw]"} `}>
      <div className="w-full lg:w-[50vw]  bg-white px-6 py-[4rem] shadow-lg rounded-lg border border-[#3E7ADC]">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#3E7ADC]">Location Form</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Grid Layout */}
            <div className="flex flex-col gap-4">
              {/* Location Name */}
              <FormField
                control={form.control}
                name="locationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">Location Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Province */}
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">Province</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a province" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {provinces.map((province) => (
                          <SelectItem key={province.id} value={province.id}>
                            {province.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* District */}
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">District</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a district" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {districts.map((district) => (
                          <SelectItem key={district.id} value={district.id}>
                            {district.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Municipality */}
              <FormField
                control={form.control}
                name="municipality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">Municipality</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a municipality" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {municipalities.map((municipality) => (
                          <SelectItem key={municipality.id} value={municipality.id}>
                            {municipality.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Ward */}
              <FormField
                control={form.control}
                name="ward"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#3E7ADC]">Ward</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a ward" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {wards.map((ward) => (
                          <SelectItem key={ward.id} value={ward.id}>
                            {ward.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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

export default Page
