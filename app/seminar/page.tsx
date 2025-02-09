"use client"
import Navbar from "@/components/Navbar"
import SeminarPage from "./seminar"

export default function Seminar() {
  return(
    <div className="bg-slate-50 overflow-x-hidden">
      <Navbar />
      <SeminarPage />
    </div>
  )
}