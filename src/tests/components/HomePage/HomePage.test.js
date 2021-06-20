import { React } from 'react';
import { HomePage } from '../../../components/HomePage/HomePage';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';

describe('<HomePage /> tests', () => {
    
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;

    beforeEach(() => {
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        spyOnUseSelector.mockReturnValue([{ 
            postId: 1,
            id: 1,
            name: 'id labore ex et quam laborum',
            email: 'Eliseo@gardner.biz',
            body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' 
        }]);

        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        mockDispatch = jest.fn();
        spyOnUseDispatch.mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Component must properly render', () => {

        const wrapper = shallow(<HomePage />);
        expect(wrapper).toMatchSnapshot();

    });

});
