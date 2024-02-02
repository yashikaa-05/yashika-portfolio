import Layout from '@/Components/Global/Layout';
import Navbar from '@/Components/Global/Navbar';
import Contactt from '@/Components/LandingPage/Contactt';
import About from '@/Components/LandingPage/About';

export default function Home() {
    return (
        <Layout>
            <About />
            <Contactt />
        </Layout>
    )
}