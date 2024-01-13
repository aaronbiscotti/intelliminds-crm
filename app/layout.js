import './globals.css'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-700">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
}