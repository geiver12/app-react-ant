// app/SearchBar.js
import { Input} from 'antd';
import './SearchBar.css'
const { Search } = Input;

// En las props tenemos los métodos necesarios para interactuar con nuestros usuarios:
function SearchBar(props) {
	return (
			<div className="SearchBar">
				<Search placeholder="input search text" onClick={e => props.handleClick(e)} onChange={e => props.handleChange(e)}/>
			</div>
		);
}

export default SearchBar;