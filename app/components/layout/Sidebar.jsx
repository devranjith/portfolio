import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react"; // Icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop,setIsDesktop] = useState(false)

  useEffect(()=>{
    const checkScreen= ()=>{
        setIsDesktop(window.innerWidth > 1024)
    }
    checkScreen()
    window.addEventListener("resize",checkScreen)

    return () => window.removeEventListener("resize", checkScreen)

  },[])

  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "About", icon: <User size={20} /> },
    { name: "Work", icon: <Briefcase size={20} /> },
    { name: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <>
      <button 
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence mode="wait">
        {(isOpen || isDesktop) && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-screen w-50  text-white z-40 p-6 flex flex-col border-r"
          >
            <div className="text-2xl font-bold mb-10">Portfolio.</div>
            
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-tranparent hover:underline transition-colors"
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;