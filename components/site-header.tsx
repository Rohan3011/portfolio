import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-transparent backdrop-blur">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link title="Resume" href={siteConfig.contact.resume} download>
              <div
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "font-normal animate-out slide-in-from-left-1"
                )}
              >
                <span className="text-xl">My resume</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
