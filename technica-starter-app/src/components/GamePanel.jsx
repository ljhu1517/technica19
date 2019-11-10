import React from "react";

class GamePanel extends React.Component {
  render() {
    return (
      <div className="gamepanel">
        {this.props.children}        
        <Game />
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBlows: 0,
      currentBlow: 0,
      numTurns: 1,
      maxBlows: Math.floor(Math.random() * 11) + 1,
      enabled: true,
      canIKeepClicking: "yes",
      money: 0, 
      moneyStatus: " ", 
      turnsStatus: " ",
      financialProfile: " "
    };
  }

  handleClick(currBlow, maxBlows, enabled, currMoney) {
    if (enabled) {
      if (currBlow < maxBlows) {
        this.setState({
          currentBlow: currBlow + 1
        });
      } else {
        this.setState({
          canIKeepClicking: "NO",
          enabled: false
        });
        this.handleFinalDisplay()
      }
    }
  }

  handleGetMoney(currBlow, currMoney, enabled, currTurns) {
    if (enabled) {
      this.setState({
        currentBlow: 0,
        money: currMoney + currBlow,
        maxBlows: Math.floor(Math.random() * 11) + 1,
        enabled: true,
        canIKeepClicking: "yes",
        numTurns: currTurns + 1
      });
    }
  }

  handleFinalDisplay(finalMoney) {
    this.setState({
        moneyStatus: `You made $${this.state.money}`,
        turnsStatus: `in ${this.state.numTurns} turn(s)`
    })

    if(finalMoney < 5) {
        this.setState({
            financialProfile: "Type: Low risk \n You prefer investments that are not vulnerable to the fluctuations of the market and produce steady, predictable returns.  While this is a great strategy to be able to plan out your future, you might not see the highest returns on your money with only low risk investments. Try to balance your portfolio with a split between low-risk and medium/high-risk investments, increasing the proportion of low risk investments as you approach retirement."
        })
    } else if (finalMoney >= 5 &&  finalMoney < 10) {
        this.setState({
            financialProfile: "Type: Growth \n You are comfortable with the idea of high-risk, high-reward with your investments. Look to stocks of emerging companies, growing industries, and developing markets. The right choice could result in huge returns. Keep in mind, this also leaves you vulnerable to the risk of making a wrong choice. You can mitigate this through thorough research and diversification of your risk factors. As the old adage goes, don’t put all your eggs in one basket! You should invest in multiple industries or economies so in the event one goes downhill, you still have other options."
        })
    } else {
        this.setState({ 
            financialProfile: "Type: Involved \n You enjoy looking at the details to try to get the best returns possible. Be careful not to get too lost in the details though! You should be research into industries and companies so that when you invest, you’re investing in the value of the company growing not just the stock price. This is the principle Warren Buffet uses, and it seems to be working out pretty well for him."
        })
    }
  }

  render() {
    return (
      <div className="GamePanel">
        <link rel="stylesheet" type="text/css" href="style.css" />
        <script type="text/javascript" src="balloon.js"></script>

        <div id="balloon">
          <img
            src="https://cdn10.bigcommerce.com/s-o0d6ce9f7h/products/5987/images/5810/29-hot-pink__35902.1502547464.1280.1280.png?c=2"
            style={{
                width:'120px'
            }}
            onClick={() =>
              this.handleClick(
                this.state.currentBlow,
                this.state.maxBlows,
                this.state.enabled,
                this.state.canIKeepClicking,
                this.state.money
              )
            }
          />
          <p>money this round: {this.state.currentBlow}</p>
          {/* <p>max blows: {this.state.maxBlows}</p> */}
          <p>keep clicking? {this.state.canIKeepClicking}</p>
          <p>money earned: {this.state.money}</p>
          <p> {this.state.moneyStatus}</p>
          <p> {this.state.turnsStatus}</p>
          <p> {this.state.financialProfile} </p>
          <button
            style={{
                width:'175px',
                height: '75px'
            }}
            onClick={() =>
              this.handleGetMoney(
                this.state.currentBlow,
                this.state.money,
                this.state.enabled,
                this.state.numTurns
              )
            }
          >
            get $$$
          </button>
        </div>
      </div>
    );
  }
}

export default GamePanel;
