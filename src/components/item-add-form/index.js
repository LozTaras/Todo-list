import React ,{Component} from 'react';

import './item-add-form.css'

class ItemAddForm extends Component {
		state = {
			label: ''
		}

		onAdd = (evt) => {
				evt.preventDefault();
				this.props.onAdd(this.state.label);		

				this.setState({
					label: ''
				});	
		}

		onLabelChange = (evt) => {
			this.setState({
				label: evt.target.value
			});			
		}

		render() {
				return (
						<form 
									className="item-add-form d-flex"
									onSubmit={ this.onAdd } >
								<input type="text"
											 className="form-control"
											 onChange={ this.onLabelChange } 
											 placeholder="What needs to be done" 
											 value={ this.state.label } />
								<button 
									  className="btn btn-outline-secondary" >
										Add Item
								</button>
						</form>
				);
		}    
}

export default ItemAddForm;