import Navbar from "./_components/navbar";

const MarketingLayout = ({ children 
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full">
            <main className="h-full pt-40">
                <Navbar />
                {children}
            </main>
        </div>
     );
}
 
export default MarketingLayout;