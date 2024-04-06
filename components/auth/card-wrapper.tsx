import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"

interface CardWrapperProps {
    title?: string,
    backButtonHref: string,
    backButtonLabel: string,
    children: React.ReactNode
}

export default function CardWrapper({ title, backButtonHref, backButtonLabel, children }: CardWrapperProps) {
    return (
        <Card className="w-[95%] sm:w-4/5 md:max-w-lg shadow-md">
            <CardHeader className="text-3xl text-center font-medium">{title}</CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <Button variant="link" size="sm" className="w-full" asChild>
                    <Link href={backButtonHref} className="text-sm">{backButtonLabel}</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
