import { getGifs } from "../../helpers/getGifs";
describe("Prueba con getGifs Fetch", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("CS GO");
    expect(gifs.length).toBe(10);
  });
  test("Debe de traer 0 elementos si esta vacio", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
