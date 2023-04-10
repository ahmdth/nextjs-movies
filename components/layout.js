import { useEffect } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  useEffect(() => {
    document.documentElement.classList.add(localStorage.getItem('theme') || 'dark');
  }, [])

  return (
    <div className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-50 flex flex-row">
      <Sidebar />
      <div className="flex-1 lg:ml-16 mb-16 lg:mb-0">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}