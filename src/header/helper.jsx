import ContactUsButton from "./contact-us-button/contact-us-button";

export function useNavBarItems() {
  const navBar = [
    {
      name: "Home",
      isComponent: false,
      to: "/",
    },
    {
      name: "About Us",
      isComponent: false,
      to: "/about-us",
    },
    {
      name: "Products",
      isComponent: false,
      isAccordion: true,
      children: [
        {
          name: "Chemicals",
        },
        {
          name: "Machinery",
        },
      ],
      to: "/#",
    },
    {
      name: "Contact Us",
      isComponent: true,
      component: <ContactUsButton to="/contact-us" />,
      to: "/contact-us",
    },
  ];

  return navBar;
}
