import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SearchSection from "./(ststic)/header-sections/search";
import { Ellipsis } from 'lucide-react';

export default function Home() {
  return (
    <div className="">
      <SearchSection classes={"flex md:hidden mt-4"} />
    </div>
  )
}
