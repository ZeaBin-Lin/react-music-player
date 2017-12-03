import React from 'react'
import Header from './components/Header'
import Progress from './components/Progress'

let duration = null;
export default class Root extends React.Component{
  constructor(){
    super()
    this.state = {
      progress: 20
    }
  }
  componentDidMount() {
		$("#player").jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
				}).jPlayer('play');
			},
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		});
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
      duration = e.jPlayer.status.duration
			this.setState({
				progress: e.jPlayer.status.currentPercentAbsolute
			});
		});
	}
	componentWillUnmout() {
		$("#player").unbind($.jPlayer.event.timeupdate);
	}
	counterHandler() {
		this.setState({
			count: this.state.count + 1
		});
	}
  progressBarClickHandler (progress) {
    $('#player').jPlayer('play', duration * progress)
  }
  render () {
    return (
      <div>
        <Header />
        <Progress
            progress={this.state.progress}
            onProgressBarClick={this.progressBarClickHandler}>
        </Progress>
      </div>
    )
  }
}