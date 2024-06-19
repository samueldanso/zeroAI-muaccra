// Importing necessary modules from Hardhat
const hre = require('hardhat')

async function main() {
	const [deployer] = await ethers.getSigners() // Get the deployer's wallet address
	console.log('Deploying contracts with the account:', deployer.address)

	// Deploying contracts
	const AgentFactory = await ethers.getContractFactory('AgentFactory')
	const agentFactory = await AgentFactory.deploy()
	await agentFactory.deployed()

	const NFTFactory = await ethers.getContractFactory('NFTFactory')
	const nftFactory = await NFTFactory.deploy()
	await nftFactory.deployed()

	const PayableNFT = await ethers.getContractFactory('PayableNFT')
	const payableNFT = await PayableNFT.deploy()
	await payableNFT.deployed()

	const Session = await ethers.getContractFactory('Session')
	const session = await Session.deploy()
	await session.deployed()

	// Log the contract addresses
	console.log('AgentFactory deployed to:', agentFactory.address)
	console.log('NFTFactory deployed to:', nftFactory.address)
	console.log('PayableNFT deployed to:', payableNFT.address)
	console.log('Session deployed to:', session.address)
}

// Run the main function and handle any errors
main()
	.then(() => process.exit(0)) // Exit the process if successful
	.catch((error) => {
		console.error(error) // Log any errors
		process.exit(1) // Exit the process with an error code
	})
