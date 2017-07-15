import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Below is from Code School
class RobotBox extends React.Component {
  render() {
    return <div>Hello From React</div>;
  }
};

let target = document.getElementById('robot-app');

ReactDOM.render( 
  <RobotBox />, document.getElementById('robot-app')
);
// end code School

// code school 1.7 starts

class StoryBox extends React.Component {
	render() {
		const now = new Date();
						// new Date is a way to call in the current date
		const topicsList = ['HTML', 'JS', "React"];
		// variables in react must be const instead
		return (
			// JSX code goes inside return(){}

			<div>
				<p> Current time: {now.toTimeString()}</p>
				<ul>
					{topicsList.map( topic => <li> {topic.length}
					 </li>
					 // topic is basically a stand in for the array values passed through from topicsList
						)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<StoryBox />, document.getElementById('story-box')
	// how you tell the above code to go into the ID in your html doc
);

// BELOW = FORMULA TO CREATE NEW REACT COMPONENT
class NewComponent extends React.Component {
	render() {
		return ( 
			<div> CODE GOES HERE</div>
			);		
	}
}




// BELOW MAKING 2 COMPONENTS. First make the one nested inside the other, so start with Comment. Then you can invoke it inside CommentBox
class Comment extends React.Component {
	render() {
		return (
			<div className = "comment">
				<p className = "comment-header"> {this.props.author} </p>
					{/* this.props creates a reusable type of variable that will house the corresponding property for this specific comment*/}
				<p className = "comment-body"> 
					{this.props.body}
				</p>
				<div className = "comment-footer">
					<a href = "#" className = "comment-footer-delete"> Delete comment</a>
				</div>
			</div>

			);
	}
}

ReactDOM.render(
	<Comment />, document.getElementById('comment')
);

// CommentBox created below
class CommentBox extends React.Component {
	render() {
		return(
			<div className = "comment-box">
				<h3>Comments</h3>
				<h4> 2 comments</h4>
				<div className = "comment-list">
					<Comment author = "Person McGee" body = "McGee's comment goes here!"/>
					<Comment author = "El Duderino" body = "if you're not into the brevity thing"/>
				{/* This is how you comment in JSX*/}
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<CommentBox/>, document.getElementById('comment-box')
);


// MAPPING AN ARRAY TO JSX
// Will normally use this menthod instead of hard coding in the content like on line 96-97

// first need to create Cat react component
class Cat extends React.Component{
	render() {
		return(
			<div className="cat"> 
				<p className="cat-header"> {this.props.author} </p>
				<p className="cat-body"> {this.props.body} </p>
				<div className="cat-footer">
					<a href="#" className="cat-footer-delete"> Delete This Cat </a>
				</div>
			</div>
		);
	}
}
ReactDOM.render(
	<Cat />, document.getElementById('cat')
);

// then create CatBox react component
class CatBox extends React.Component {
	render() {
		const cats = this._getCats();
		return(
			<div className="cat-box">
				<h3>Cats Comments</h3>
				<h4 className="cat-count">{this._getCatsTitle(cats.length)}</h4>
				<div className="cat-list">
					{cats}
					{/* {cats} above is the prop hat populates the catList array into the the cat-box html div*/ }
				</div>
			</div>
		);
	}

// underscore distinguishes custom user-made methods from native React methods
	_getCats() {
	// above is new method that will return array of jsx elements
		const catList = [
			{ id: 1, author: 'Jeff Lebowski', body: 'It really tied the room together.' },
			{ id: 2, author: 'Walter', body: 'Take the ringer!' }
		];

		return catList.map((cat) => {
		// line above returns an array of catList
		// above, each element of catList is passed through as an argument called cat
			return (
				<Cat 
				// with a new component (Comment) built for each element in commentList
					author={cat.author}	body={cat.body}	key={cat.id}	/>
					// Here we use the argument (called comment) to access the properties of each element in commentList, therby passing them through as props. IMPORTANT: you always need a KEY element to keep track of the id of each element in your array commentList
			);
			
		});
			
	}

	// below is new method to adjust grammar (singuler vs plural) of the h4 based on how many cats there are
	
	_getCatsTitle(catCount) {
		if (catCount === 0){
			return `No cats yet`;
		} else if (catCount === 1){
			return `1 cat`;
		} else {
			return `${catCount}  cats`
		}
	}
}

ReactDOM.render(
	<CatBox/>, document.getElementById('cat-box')
);
