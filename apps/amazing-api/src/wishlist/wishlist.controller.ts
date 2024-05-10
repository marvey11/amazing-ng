import { Controller, Get } from "@nestjs/common";

interface TestData {
  id: string;
  name: string;
}

const testData: TestData[] = [
  {
    id: "abc",
    name: "Wishist #1",
  },
  {
    id: "def",
    name: "Wishist #2",
  },
];

@Controller("wishlists")
export class WishlistController {
  @Get()
  findAll() {
    return testData;
  }
}
