# Hedera HBAR Transfer Script

A simple Node.js script to send HBAR from one Hedera account to another using environment variables. This script connects to **Hedera Mainnet** and transfers **100 HBAR** from a sender to a receiver.

---

## 📦 Requirements

- Node.js v16 or later
- A `.env` file with the required Hedera credentials

---

## 📁 Setup

1. **Clone the repo / Download the script**

2. **Install dependencies:**

```bash
    npm install
````
3. **Create a .env file:**

```bash
    HEDERA_ACCOUNT_ID=         # Your sender account ID
    HEDERA_PRIVATE_KEY=          # Your private key
    RECEIVER_ACCOUNT_ID=       # Recipient's account ID
````

4. **Run script:**
```bash
    node index.js
````
