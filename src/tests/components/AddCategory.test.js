import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas con AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de funcionar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
  test("NO Debe de postear la informacion on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
