import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");
describe("Pruebas con el GifGrid", () => {
  const category = "CS GO";
  /*let wrapper = shallow(<GifGrid category={category}/>);
  beforeEach(() => {
    //jest.clearAllMocks();
    wrapper = shallow(<GifGrid category={category}/>);
  });*/
  test("Debe funcionar correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [{id:'abc',url:'https://localhost/cualquier/cosa.jpg',title:'Cualquier cosa'}]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    let wrapper = shallow(<GifGrid category={category} />);
    //expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
