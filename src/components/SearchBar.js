import React from 'react';


class SearchBar extends React.Component{
state={
    term:''
};

onInputChange=(event)=>{
this.setState({term:event.target.value})
};

onFormSubmit =(event) =>{
event.preventDefault(); //while user submit(click enter) page does not refresh

//callback from parent component app
this.props.onFormSubmit(this.state.term);

};

render()
{
return (
<div className="ui segment search-bar"> 
  <form onSubmit={this.onFormSubmit} className="ui form">
   <div className="field">
       <label>Video search</label>
        <input 
        onChange={this.onInputChange} 
        type="text" 
        value={this.state.term}/>
   </div>
  </form>
</div>
);
}

}
export default SearchBar;