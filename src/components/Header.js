// app/SearchBar.js
import { Button, Avatar } from 'antd';
import './Header.css'


// En las props tenemos los métodos necesarios para interactuar con nuestros usuarios:
function Header(props) {
	return (
		<div className="menu">
			<div className="container">
				<Avatar size={64} src={process.env.PUBLIC_URL + '/logo.jpeg'} alt="logo" />
				<div className="right">
					<Button type="text" className="button" onClick={props.characters}>
						Characters
    				</Button>
					<Button type="text" className="button" onClick={props.locations}>
						Locations
		    		</Button>
					<Button type="text" className="button" onClick={props.episodes}>
						Episodes
    				</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;