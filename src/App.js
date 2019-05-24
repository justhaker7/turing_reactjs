import React , {Component}from 'react'
import './App.css'
import Box from './Box'
import Insert from './Insert'
import data from './data'

class App extends Component{
  constructor(){
    super()
		this.state = {
			data: data,
      boxesArr: [],
			inputVal: '',
			code: 'first',
			inputValArr: [],
			output: ''
    }
		this.handleChange = this.handleChange.bind(this)
		this.startMachine = this.startMachine.bind(this)
		this.onInserted = this.onInserted.bind(this)
  }	

	handleChange(event){
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	

	onInserted(){
		let turnArr = this.state.inputVal.split('')
		let finalArr = turnArr.map((val, index, arr) => {
			return <Box value={val} key={index} clsName='box' keyForChild={index} />
		})
		this.setState({ inputValArr: finalArr })
	}

	startMachine(){
		let dataSt1 = this.state.data[0]
		let dataSt2 = this.state.data[1]
		let dataSt3 = this.state.data[2]
		let codeSt = this.state.code
		let inputArr = this.state.inputValArr
		let finalComponents = [...inputArr]
		let arraing = [...inputArr]
		let extraAr = [...inputArr]
		let outputArr = []
		
		if(codeSt === 'first'){
			/* ////// ///////// here will be my changing ////// ///////*/
			function delay(){
				return new Promise(resolve => setTimeout(resolve, 1000))
			}		

			const delayedLog = async (item, index) => {
				try{
					arraing[index] = <Box clsName="isChange" value={extraAr[index].props.value} />
					this.setState({inputValArr: arraing})
					outputArr +=`${item} q1 => q0 ... \n ${item} => ${dataSt1[item]}\n`
					this.setState({output: outputArr})
					await delay()
					arraing[index] = <Box clsName="box" value={dataSt1[item]} />
					this.setState({inputValArr: arraing})
					outputArr += `${item} => q0 ... \n`
					this.setState({output: outputArr})
					await delay()
					finalComponents[index] = <Box clsName='change' value={dataSt1[item]} />
					this.setState({inputValArr: finalComponents})
					await delay()
				}catch(e){
					console.log(e instanceof TypeError)
					console.log(e.message)
					console.log(e.name)
					console.log(e.lineNumber)
					console.log(e.fileName)
				}
				
			}

			const processArray = async () => {
				for(let i = 0; i < inputArr.length; i++){
					for(let key in dataSt1){
						if(key === inputArr[i].props.value){
							await delayedLog(key, i)
						}
					}
				}
				outputArr += `the end ... \n`
				this.setState({output: outputArr})
			}

			processArray()

			/*//////////////////////////// end /////////////////////////////*/

		}else if(codeSt === 'second'){

			function delay(){
				return new Promise(resolve => setTimeout(resolve, 1000))
			}		

			const delayedLog = async (item, index) => {
				try{
					arraing[index] = <Box clsName="isChange" value={extraAr[index].props.value} />
					this.setState({inputValArr: arraing})
					outputArr +=`${item} q1 => q0 ... \n ${item} => ${dataSt2[item]} \n`
					this.setState({output: outputArr})
					await delay()
					arraing[index] = <Box clsName="box" value={dataSt2[item]} />
					this.setState({inputValArr: arraing})
					await delay()
					outputArr +=`${item} => q0 ... \n`
					this.setState({output: outputArr})
					finalComponents[index] = <Box clsName='change' value={dataSt2[item]} />
					this.setState({inputValArr: finalComponents})
					await delay()
				}catch(e){
					console.log(e instanceof TypeError)
					console.log(e.message)
					console.log(e.name)
					console.log(e.lineNumber)
					console.log(e.fileName)
				}
				
			}

			const processArray = async () => {
				for(let i = 0; i < inputArr.length; i++){
					for(let key in dataSt2){
						if(key === inputArr[i].props.value){
							await delayedLog(key, i)
						}
					}
				}
				outputArr += `the end ... \n`
				this.setState({output: outputArr})
			}

			processArray()

		}else if(codeSt === 'third'){
				function delay(){
				return new Promise(resolve => setTimeout(resolve, 1000))
			}		

			const delayedLog = async (item, index) => {
				try{
					arraing[index] = <Box clsName="isChange" value={extraAr[index].props.value} />
					this.setState({inputValArr: arraing})
					outputArr +=`${item} q1 => q0 ... \n ${item} => ${dataSt3[item]} \n`
					this.setState({output: outputArr})
					await delay()
					arraing[index] = <Box clsName="box" value={dataSt3[item]} />
					this.setState({inputValArr: arraing})
					outputArr +=`${item} => q0 ... \n`
					this.setState({output: outputArr})
					await delay()
					finalComponents[index] = <Box clsName='change' value={dataSt3[item]} />
					this.setState({inputValArr: finalComponents})
					await delay()
				}catch(e){
					console.log(e instanceof TypeError)
					console.log(e.message)
					console.log(e.name)
					console.log(e.lineNumber)
					console.log(e.fileName)
				}
				
			}

			const processArray = async () => {
				for(let i = 0; i < inputArr.length; i++){
					for(let key in dataSt3){
						if(key === inputArr[i].props.value){
							await delayedLog(key, i)
						}
					}
				}
				outputArr += `the end ... \n`
				this.setState({output: outputArr})
			}

			processArray()
		}
	}
  
  render(){
    return(
			<Insert 
				handleChange={this.handleChange}
				onInserted={this.onInserted}
				data={this.state}
				startMachine={this.startMachine}
			/>
    )
  }

}

export default App
