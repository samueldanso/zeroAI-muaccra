import type { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-ignition-ethers'

import * as dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
	solidity: '0.8.20',
	networks: {
		sepolia: {
			url: process.env.ALCHEMY_PROJECT_URL || '',
			accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
		},
	},
}

export default config
