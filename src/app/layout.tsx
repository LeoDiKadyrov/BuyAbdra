import type { Metadata } from "next";
import { Montserrat, Russo_One, Rubik_Glitch, Rubik_Burned, Rubik_Vinyl } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["cyrillic"],
  variable: '--font-montserrat',
});

const russoOne = Russo_One({ 
  weight: '400',
  subsets: ["cyrillic"],
  variable: '--font-russo',
});

const rubikGlitch = Rubik_Glitch({
  weight: '400',
  subsets: ["cyrillic"],
  variable: '--font-glitch',
});

const rubikBurned = Rubik_Burned({
  weight: '400',
  subsets: ["cyrillic"],
  variable: '--font-burned',
});

const rubikVinyl = Rubik_Vinyl({
  weight: '400',
  subsets: ["cyrillic"],
  variable: '--font-vinyl',
});

export const metadata: Metadata = {
  title: "Курс 'Как стать Абдрой'",
  description: "Единственный курс, который научит вас быть настолько глупым, что вы станете миллионером!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${russoOne.variable} ${rubikGlitch.variable} ${rubikBurned.variable} ${rubikVinyl.variable}`}>
        {children}
      </body>
    </html>
  );
}
