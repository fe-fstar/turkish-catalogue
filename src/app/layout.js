import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "Turkish Catalogue"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
