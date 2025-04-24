'use client'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#fefaf7] min-h-screen">
      {/* Sidebar */}
      <aside className="bg-[#ED5C01] w-[212px] p-4 flex flex-col gap-6 text-white rounded-r-xl top-[34px] left-[26px]">
        <h2 className="text-center font-bold text-lg bg-white text-[#062D3E] py-2 rounded">Shop-First</h2>
        <a href="/product-list" className="bg-[#062D3E] py-2 px-3 rounded-xl flex items-center gap-2 hover:bg-[#001d6f]">
          <span>🗂</span> Products
        </a>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  )
}
