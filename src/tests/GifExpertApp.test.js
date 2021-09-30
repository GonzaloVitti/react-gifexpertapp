import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";
describe("Pruebas con GifExpertApp", () => {
  test("Deberia de funcionar correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Deberia de mostrar una lista de categorias", () => {
    const categories = ["CS GO", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
