interface ClassesProps {
    classes?: string,
    pathname?: string
}
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from "lucide-react";
import clsx from 'clsx';

export default function SearchSection({ classes, pathname }: ClassesProps) {
    return (
        <div className={clsx("flex md:space-x-4 space-x-2 w-full lg:max-w-xl md:max-w-md", classes && classes, pathname === "/auth/login" || pathname === "/auth/register" ? "md:hidden" : "")}>
            <Button variant="primary">
                <Plus />
            </Button>
            <Input type="text" placeholder="Search..." />
        </div>)
}
