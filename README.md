<a href="/">
  <img alt="ZeroAI" src="./ui/public/screenshot1.png" width="100%" />
  <h1 align="center">ZeroAI</h1>
</a>

<p align="center">
 Making Information Accessible Anywhere, for Everyone with Zero Internet
</p>

<p align="center">
  <a href="https://zero-ai-gray.vercel.app/">Demo</a> |
  <a href="https://zero-ai.gitbook.io/zeroai-documentation">Docs</a>

## Overview

ZeroAI is a decentralized solution that provides offline access to AI agents, empowering millions of users in remote or underserved areas with limited internet connectivity to access vital information and knowledge via SMS and voice. It leverages Filecoin for secure storage, NFTs for content access, and integrates with The Graph for reliable data management and connectivity.

## Features

- **User-Friendly SMS Chats :** Easily ask questions and receive intelligent answers via text messages.
- **Offline AI Access:** AI agents provide responses via SMS, even without the internet.
- **Decentralized Marketplace:** Securely publish and share AI-driven content using Filecoin for storage.
- **Decentralized Storage:** Content is securely stored on Filecoin for decentralized management.
- **Secure Data Access:** Uses NFT contracts to ensure only authorized users can access and decrypt data.
- **Simple Addressing:** Access AI agents via short, memorable names (ENS names) or phone numbers.
- **Monetization for Content Creators:** Enables creators to monetize their data by publishing content on the marketplace and securing it with NFTs.

## Tech Stack

- [Solidity](https://soliditylang.org/): Smart contract language for the ZeroAI platform.
- [Hardhat](https://hardhat.org/): Development environment for smart contracts.
- [Lit Protocol](https://litprotocol.com/): Lit is an internet native security and identity network.
- [Filecoin](https://filecoin.io/): Secure storage for AI content.
- [The Graph](https://thegraph.com/): Decentralized data management and querying.
- [Apollo Client](https://www.apollographql.com/docs/react/): GraphQL client for the ZeroAI platform.
- [Express](https://expressjs.com/): Server-side framework for the ZeroAI platform.
- [React](https://reactjs.org/): Frontend framework for user interfaces.
- [Next.js](https://nextjs.org/): React framework for server-side rendering.
- [Tailwind CSS](https://tailwindcss.com/): CSS framework for styling.
- [Chakra UI](https://chakra-ui.com/): UI framework for the ZeroAI interface.
- [Langchain](https://github.com/hwchase17/langchain): Framework for language model management.
- [OpenAI](https://openai.com/): AI language model platform.
- [Stability AI](https://stability.ai/): AI platform for the image generation.
- [Twilio](https://www.twilio.com/): Communication API platform for the SMS messaging.

## How it Works

1. **Content Publishing and Storage:**

   - **Decentralized Marketplace:** Creators publish content on the ZeroAI marketplace, stored securely on Filecoin.
   - **NFT Integration:** Each content piece is linked to an NFT, ensuring only NFT holders can decrypt and access it via the Lit Protocol.

2. **AI Agents and Content Consumption:**

   - **Vectorization and Embedding:** AI agents access, vectorize, and embed published content into their knowledge bases for intelligent responses.
   - **IPNS and FVM Logging:** AI agents update knowledge base pointers using IPNS and log indexed vector hashes on a smart contract on the Filecoin Virtual Machine (FVM).

3. **User Interaction via SMS:**

   - **SMS Queries:** Users interact with AI agents by sending queries via SMS through Twilio to the ZeroAI backend.
   - **Simple Addressing:** AI agents are accessible through short names (ENS names) or phone numbers.

4. **Backend Processing and AI Responses:**

   - **Query Handling:** The backend matches user queries with the appropriate AI agent, which performs similarity checks with its knowledge base.
   - **Response Generation:** The AI agent generates and sends a natural language response to the user via SMS.

5. **Data Management and Security:**
   - **Secure Storage:** Data, including content and user interactions, is securely stored on Filecoin.
   - **NFT-based Access Control:** NFTs ensure only authorized users can access and decrypt content.

## Contracts

| **Contract**              | **Description**                                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                           |
| [**AgentFactory.sol**]()  | Deploys a new AI agent by cloning the `AgentTemplate.sol`.                                                                                                                                                   |
| [**AgentTemplate.sol**]() | The base contract for creating AI agents.                                                                                                                                                                    |
| [**NFTFactory.sol**]()    | Deploys new NFTs used to token-gate datasets. AI agents can consume these datasets after minting/paying for the NFTs.                                                                                        |
| [**PayableNFT.sol**]()    | NFT Contract representing a published data. It is used as an access condition while encrypting documents with Lit Protocol. So users can get access to an AI by paying and minting an NFT from the contract. |

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/samueldanso/zeroai-muaccra.git
cd zeroai-muaccra
```

2. Install the dependencies:

```bash
cd backend
pnpm install
cd ../ui
pnpm install
cd subgraph
pnpm install
```

3. Configure the environment variables:

```bash
cd contracts
cp .env.example .env
cd ../ui
cp .env.example .env
```

4. Compile the smart contracts:

```bash
cd contracts
npx hardhat compile
```

5. Deploy the smart contracts to Sepolia testnet:

```bash
cd contracts
npx hardhat run scripts/deploy.js --network sepolia
```

6. Start the backend server:

```bash
cd backend
pnpm start
```

7. Run the app:

```bash
cd ui
pnpm run dev
```

Open your browser and navigate to http://localhost:3000 to access the ZeroAI interface.

## Contributing

We welcome contributions to the ZeroAI project. If you have any ideas or suggestions for improving the project, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
