import AnotherForm from "@/components/AnotherForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Video from "@/components/Video";
import Proceso from "@/components/Proceso";

export default function Contactanos() {
    

    return (
        <>
            <div>
                <main>

                    <Navbar/>
                    <Proceso/>
                    <AnotherForm />
                    <Video/>
                    <Card/>
                    <Footer />

                </main>
            </div>
        </>
    );
}