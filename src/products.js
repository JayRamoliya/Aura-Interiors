
const products = [
    { 
      id: 1, 
      name: "Handmade Peacock LED Wall Art Elegant 3D Sculpture", 
      category: "ledwallart", 
      price: "₹3,499", 
      image: "/led/Handmade Peacock LED Wall Art Elegant 3D Sculpture.jpg", 
      link: "https://amzn.to/4iUkNBm" 
    },
    { 
      id: 2, 
      name: "Handmade Peacock LED Wall Art Elegant", 
      category: "ledwallart", 
      price: "₹3,433", 
      image: "/led/Handmade Peacock LED Wall Art Elegant.jpg", 
      link: "https://amzn.to/3FZv1le" 
    },
    { 
      id: 3, 
      name: "Futuristic Minimalist Gaming Setup with Blue LED Circuit Design", 
      category: "room", 
      price: "₹1,614", 
      image: "/led/Futuristic Minimalist Gaming Setup with Blue LED Circuit Design.jpg", 
      link: "https://amzn.to/4ca8DSd" 
    },
    { 
      id: 4, 
      name: "Classic Black and White Bedroom Ideas", 
      category: "bedroom", 
      price: "₹1,189", 
      image: "/room/Classic Black and White Bedroom Ideas.jpg", 
      link: "https://amzn.to/41TQm8k" 
    },
    { 
      id: 5, 
      name: "Auromin Bird On Tree Branch Metal Wall Art", 
      category: "ledwallart", 
      price: "₹1,189", 
      image: "/led/Auromin Bird On Tree Branch Metal Wall Art.jpg", 
      link: "https://amzn.to/3QWEk7R" 
    },
    { 
      id: 6, 
      name: "CROCODILE Kitchen Sink with ANTI SCRATCH", 
      category: "kitchen",   
      price: "₹19,999", 
      image: "/kitchen/CROCODILE Kitchen Sink with ANTI SCRATCH.jpg", 
      link: "https://amzn.to/4jgfv2V" 
    },
    { 
      id: 7, 
      name: "NextGen Stainless Steel Kitchen", 
      category: "kitchen",   
      price: "₹15,999", 
      image: "/kitchen/NextGen Stainless Steel Kitchen.jpg", 
      link: "https://amzn.to/3E67pLk" 
    },
    { 
      id: 8, 
      name: "ZOLMIX Premium High Grade Stainless Steel Waterfall Kitchen", 
      category: "kitchen", 
      price: "₹11,999", 
      image: "/kitchen/ZOLMIX Premium High Grade Stainless Steel Waterfall Kitchen.jpg", 
      link: "https://amzn.to/42qk0Ci" 
    },
    { 
      id: 9, 
      name: "Dining Table with Chair for Living Room", 
      category: "dining", 
      price: "₹17,678", 
      image: "/dining/Dining Table with Chair for Living Room.jpg", 
      link: "https://amzn.to/4litFm4" 
    },
    { 
      id: 9, 
      name: "MoonWooden Solid Sheesham Wood CNC Design Dining Table", 
      category: "dining", 
      price: "₹16,398", 
      image: "/dining/MoonWooden Solid Sheesham Wood CNC Design Dining Table.jpg", 
      link: "https://amzn.to/4hYMNT8" 
    },
    { 
      id: 10, 
      name: "Modern Furniture Solid Sheesham Wood 4 Seater", 
      category: "dining", 
      price: "₹16,498", 
      image: "/dining/Modern Furniture Solid Sheesham Wood 4 Seater.jpg", 
      link: "https://amzn.to/4hYMNT8" 
    },
    { 
      id: 11, 
      name: "Wall Lamp 16 Watt 3In1 Led Light Decorative Wall Light", 
      category: "Wall Decor", 
      price: "₹950", 
      image: "/wall decor/1.jpg", 
      link: "https://amzn.to/4jSFBZS" 
    },
    { 
      id: 12, 
      name: "LED Wall Acrylic Flower Ganesh Light 4 Action", 
      category: "Wall Decor", 
      price: "₹1,050", 
      image: "/wall decor/2.jpg", 
      link: "https://amzn.to/43CKPnE" 
    },
    { 
      id: 13, 
      name: "Lamp master Flower Ganpati LED Wall Light", 
      category: "Wall Decor", 
      price: "₹1,209", 
      image: "/wall decor/3.jpg", 
      link: "https://amzn.to/4kEbMxk" 
    },
    { 
      id: 14, 
      name: "Lamp master Flower Om LED Wall Light", 
      category: "Wall Decor", 
      price: "₹1,109", 
      image: "/wall decor/4.jpg", 
      link: "https://amzn.to/4jI6OhM" 
    },
    { 
      id: 15, 
      name: "Lamp master acrylic Peacock Wall Light Home Decorative Lights", 
      category: "Wall Decor", 
      price: "₹1,009", 
      image: "/wall decor/5.jpg", 
      link: "https://amzn.to/3HvBWDG" 
    },
    { 
      id: 16, 
      name: "ATORSE Dried Flower Bouquet for Vase Floral", 
      category: "Wall Decor", 
      price: "₹802", 
      image: "/wall decor/6.jpg", 
      link: "https://amzn.to/4l17wI2" 
    },
    { 
      id: 17, 
      name: "LASER ART Ethereal Hanuman LED Backlit Table Lamp", 
      category: "Wall Decor", 
      price: "₹832", 
      image: "/wall decor/7.jpg", 
      link: "https://amzn.to/4kY3wrM" 
    },
    { 
      id: 18, 
      name: "Luteti Moving Sand Art Table Lamp", 
      category: "Wall Decor", 
      price: "₹1,199", 
      image: "/wall decor/8.jpg", 
      link: "https://amzn.to/4koxc16" 
    },
    { 
      id: 19, 
      name: "ATORSE Wall Clock Easy to Read Decorative Wall Decor", 
      category: "Wall Decor", 
      price: "₹4,568", 
      image: "/wall decor/9.jpg", 
      link: "https://amzn.to/3ZmM33S" 
    },
    { 
      id: 20, 
      name: "Lamper Fanora Peacock Design Wall Light for Home Decor", 
      category: "Wall Decor", 
      price: "₹944", 
      image: "/wall decor/10.jpg", 
      link: "https://amzn.to/4mSELyZ" 
    },
    { 
      id: 21, 
      name: "VAH- Kya Bat Hai !! Ganeshji Wall Lamps for Home Decoration", 
      category: "Wall Decor", 
      price: "₹701", 
      image: "/wall decor/11.jpg", 
      link: "https://amzn.to/3TgBD26" 
    },
    { 
      id: 22, 
      name: "Smartway -18Watt Wall led Lamp Tree Branch", 
      category: "Wall Decor", 
      price: "₹791", 
      image: "/wall decor/12.jpg", 
      link: "https://amzn.to/45dkC02" 
    },
    { 
      id: 23, 
      name: "Light Up Cherry Blossom Tree Lights With 48 LED", 
      category: "Light Decor", 
      price: "₹491", 
      image: "/light decor/1.jpg", 
      link: "https://amzn.to/43FwiYh" 
    },
    { 
      id: 24, 
      name: "Boho Wall Art , Minimalist Wall Art", 
      category: "Wall Decor", 
      price: "₹491", 
      image: "/wall decor/13.jpg", 
      link: "https://amzn.to/3ZQdfZ5" 
    },
    { 
      id: 25, 
      name: "Zzudis Set of 6 Minimalist Abstract Art Print Poster", 
      category: "Wall Decor", 
      price: "₹591", 
      image: "/wall decor/14.jpg", 
      link: "https://amzn.to/4kAoLQn" 
    },
  ];

  
export default products;
