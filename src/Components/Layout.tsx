import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MiniDrawer from './MiniDrawer';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        // <div className="flex flex-col h-screen">
        //     <Navbar />
        //     <div className="flex flex-1 mt-17"> {/* Added mt-16 to provide space below the navbar */}
        //         <Sidebar />
        //         <main className="flex-1 p-6 lg:ml-64 lg:p-12">
        //             {children}
        //         </main>
        //     </div>
        // </div>
        <MiniDrawer>{children}</MiniDrawer>
    );
}

export default Layout;
