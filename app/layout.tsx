import './globals.css'

export const metadata = {
  title: 'ANAS GANA',
  description: "Portfolio d'ingénieur logiciel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}