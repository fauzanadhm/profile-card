import Navbar from "@components/navbar/navbar.js";
import "@styles/global.css";

export const metadata = {
  title: "A. Fauzan Adhima",
  description: "File Latihan (masih pemula)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
