
import { Button } from '@/components/ui/button'
import clsx from 'clsx';
import { LogInIcon } from "lucide-react";
import Link from 'next/link';



export default function RegisterSection({ pathname }: {
    pathname?: string
}) {
    return (
        <div className={clsx("flex", pathname === "/auth/login" || pathname === "/auth/register" ? "hidden" : "")}>
            <Button>
                <Link href="/auth/login">
                    <span className='md:block hidden'>Log In/ Sign up</span> <LogInIcon className='md:hidden block' />
                </Link>
            </Button>
        </div>)
}
