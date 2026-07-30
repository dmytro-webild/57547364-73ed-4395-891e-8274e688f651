import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Products",
    "href": "#products"
  },
  {
    "name": "Science",
    "href": "#science"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  { name: "Products", href: "/products" },

];

  return (
    <StyleProvider buttonVariant="default" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Oxyhelp"
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3GdLzVph1aPQWDuyELHp7aLXPvp/uploaded-1785413081584-gutrqly7.png"
      ctaButton={{
        text: "Book Meeting",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Certifications",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2026 Oxyhelp Lifetech."
      rightText="High standard hyperbaric manufacturing."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
