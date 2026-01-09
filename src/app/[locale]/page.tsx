// import Hero from "@/components/sections/Hero/Hero";
// import About from "@/components/sections/About/About";
// import Services from "@/components/sections/Services/Services";
// import Contact from "@/components/sections/Contact/Contact";
import styles from "./page.module.css";
import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer/Footer";
import ComingSoon from "@/components/sections/ComingSoon/ComingSoon";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* <Hero />
        <Services />
        <About />
        <Contact /> */}
        <ComingSoon />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
