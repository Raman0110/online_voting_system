import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Delete, Edit, Edit2, Edit2Icon, Edit3, Edit3Icon, EditIcon, Eye, LucideEdit, LucideEdit2, Trash, ViewIcon } from "lucide-react"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function VoterTable() {
  return (
    <>
      <h1 className="text-center py-8 text-2xl">Voter List</h1>
      <div className="w-[95%] mx-auto overflow-x-auto">
        <Table className="w-full table-fixed border border-gray-200">
          <TableHeader>
            <TableRow className="bg-[#004AAD] hover:bg-[#004AAD]">
              <TableHead className="w-[25%] min-w-0 text-white">Location Name</TableHead>
              <TableHead className="w-[25%] min-w-0  text-white">District</TableHead>
              <TableHead className="w-[25%] min-w-0  text-white">Coverage</TableHead>
              <TableHead className="w-[25%] min-w-0 text-right  text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice} className="border-b">
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-8">
                    <Eye className="text-green-500 cursor-pointer" size={22} />
                    <LucideEdit className="cursor-pointer text-[#004AAD]" size={22} />
                    <Trash className="cursor-pointer text-red-500" size={22} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
