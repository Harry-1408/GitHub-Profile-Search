import React from 'react';


const SearchBar = (props) => {

		return (
			//search bar
    		<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<form className="input-group" onSubmit={props.submitForm}>
						<input type="text" className="form-control" placeholder="Enter GitHub Usename" value={props.term}
							onChange={props.handleChange}/>
						<span className="input-group-btn">
							<button className="btn btn-primary" type="submit">Search</button>
						</span>
					</form>
				</div>
			</div>
		);
};

export default SearchBar;
