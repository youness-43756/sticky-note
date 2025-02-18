export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-full flex items-center justify-center my-6">
            {children}
        </div>
    );
}