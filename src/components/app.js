import React, { Component } from 'react';

import axios from 'axios';
import _ from 'lodash';

import NavBar from './navbar';
import SearchBar from './search_bar';
import Profile from './profile';
import RepoList from './repo_list';

const CLIENT_ID = 'bcb99a1963e7b8075177';
const CLIENT_SECRET = 'c24e8f36b999f9aa302b5225774d3ab27d456f33';
const API_URL = 'https://api.github.com/users';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            user: null,
            repos: null,
        };
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.submit = this.submit.bind(this);
        // This will load getProfile after 300 mili second.
        this.getProfile = _.debounce(this.getProfile, 300).bind(this);
    }

    render () {
        const userId = this.state.term;
        return(
            <div >
                <NavBar />
                <div className="container">
                    <SearchBar term={this.state.term} submitForm={this.submit} handleChange={this.handleSearchTermChange}/>
                    <br />
                    <Profile user={this.state.user} />
                    <br />
                    <RepoList repos={this.state.repos} />
                </div>
            </div>
        );
    }

    handleSearchTermChange(event) {
		this.setState({term: event.target.value}, this.getProfile);
	}

	submit(event) {
		event.preventDefault();
		this.getProfile(this.state.term);
	}

	getProfile() {
        const username = this.state.term;
        // get profile 
        const profile_url = `${API_URL}/${username}?client_id=${CLIENT_ID}&&client_secret=${CLIENT_SECRET}`;
        // get repos
        const repos_url = `${API_URL}/${username}/repos?client_id=${CLIENT_ID}&&client_secret=${CLIENT_SECRET}`
		axios.get(profile_url)
			.then(userResponse => {
                axios.get(repos_url)
                .then(repoResponse => {
                    this.setState({repos: repoResponse.data});
                });
                this.setState({user: userResponse.data});
			})
			.catch(err => {
				console.log(`Nooooo!!!! ${this.state.term}\n` + err);
			});
	}

}
