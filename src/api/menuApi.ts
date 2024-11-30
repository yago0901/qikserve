//import axios from "axios";

interface MenuItem {
  id: number;
  name: string;
  description?: string | null;
  alcoholic: number;
  price: number;
  position: number;
  visible: 1 | 0; 
  availabilityType: string;
  sku: string;
  images?: { id: number; image: string }[];
  modifiers?: Modifier[]; 
  available: boolean;
}

interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: Item[]; 
}

interface Item {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: 1 | 0; 
  availabilityType: string;
  available: boolean; 
}

interface MenuSection {
  id: number;
  name: string;
  alcoholic?: number;
  description?: string | null; 
  position: number;
  visible: 1 | 0;
  items: MenuItem[];
  images: { id: number; image: string }[];
}


export interface Menu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: MenuSection[];
}

//const API_URL = "https://cdn-dev.preoday.com/challenge/menu";

const fakeResponse: Menu = {
  id: 14730,
  name: "FE TEST",
  type: "MENU",
  collapse: 0,
  sections: [
    {
      id: 242403,
      name: "Burgers",
      description: null,
      position: 0,
      visible: 1,
      images: [
        {
          id: 1550,
          image:
            "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png",
        },
      ],
      items: [
        {
          id: 1625701,
          name: "Hard Core",
          description:
            "180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.",
          alcoholic: 0,
          price: 33.0,
          position: 0,
          visible: 1,
          availabilityType: "AVAILABLE_NOW",
          sku: "I1625701",
          images: [
            {
              id: 108305,
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png",
            },
          ],
          available: true,
        },
        {
          id: 1625702,
          name: "Smash Brooks",
          description:
            "100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.",
          alcoholic: 0,
          price: 33.0,
          position: 1000,
          visible: 1,
          availabilityType: "AVAILABLE_NOW",
          sku: "I1625702",
          modifiers: [
            {
              id: 1101202,
              name: "Choose a size",
              minChoices: 1,
              maxChoices: 1,
              items: [
                {
                  id: 7476054,
                  name: "1 meat",
                  price: 33.0,
                  maxChoices: 1,
                  position: 0,
                  visible: 1,
                  availabilityType: "AVAILABLE_NOW",
                  available: true,
                },
                {
                  id: 7476055,
                  name: "2 meats",
                  price: 35.0,
                  maxChoices: 1,
                  position: 1000,
                  visible: 1,
                  availabilityType: "AVAILABLE_NOW",
                  available: true,
                },
                {
                  id: 7476056,
                  name: "3 meats",
                  price: 37.0,
                  maxChoices: 1,
                  position: 2000,
                  visible: 1,
                  availabilityType: "AVAILABLE_NOW",
                  available: true,
                },
              ],
            },
          ],
          images: [
            {
              id: 108307,
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png",
            },
          ],
          available: true,
        },
      ],
    },
    {
      id: 242404,
      name: "Drinks",
      position: 1000,
      visible: 1,
      images: [
        {
          id: 1551,
          image:
            "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
        },
      ],
      items: [
        {
          id: 1625705,
          name: "Caipirinha",
          description: "with sugar cane liquor",
          alcoholic: 1,
          price: 13.0,
          position: 0,
          visible: 1,
          availabilityType: "AVAILABLE_NOW",
          sku: "I1625705",
          available: true,
        },
        {
          id: 1625705,
          name: "Red Label",
          alcoholic: 1,
          price: 13.0,
          position: 0,
          visible: 1,
          availabilityType: "AVAILABLE_NOW",
          sku: "I1625705",
          available: true,
        },
        {
          id: 1625705,
          name: "Smirnoff",
          alcoholic: 1,
          price: 10.0,
          position: 0,
          visible: 1,
          availabilityType: "AVAILABLE_NOW",
          sku: "I1625705",
          available: true,
        },
        {
          id: 1625705,
          name: "Pink Lemonade",          
          description: "Lemonade whipped with cherries and berries.",
          alcoholic: 1,
          price: 12.0,
          position: 0,
          visible: 1,
          availabilityType: "AVAILABLE_NOW",
          sku: "I1625705",
          available: true,
        },
      ],
    },
  ],
};

export const fetchMenuDetails = async (): Promise<Menu> => {
  try {
    /*const response = await axios.get<Menu>(API_URL);
    return response.data;*/
    return fakeResponse;
  } catch (error) {
    console.error("Error fetching menu details:", error);
    throw new Error("Failed to fetch menu details");
  }
};
