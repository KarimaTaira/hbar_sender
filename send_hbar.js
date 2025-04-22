require('dotenv').config();
const { Client, Hbar, TransferTransaction } = require('@hashgraph/sdk');

const client = Client.forMainnet().setOperator(
  process.env.HEDERA_ACCOUNT_ID,
  process.env.HEDERA_PRIVATE_KEY
);

async function sendHBAR() {
  const sender = process.env.HEDERA_ACCOUNT_ID;
  const receiver = process.env.RECEIVER_ACCOUNT_ID;

  if (!receiver) {
    console.error('Missing RECEIVER_ACCOUNT_ID in .env');
    return;
  }

  try {
    const tx = await new TransferTransaction()
      .addHbarTransfer(sender, new Hbar(-100))
      .addHbarTransfer(receiver, new Hbar(100))
      .execute(client);

    const receipt = await tx.getReceipt(client);

    if (receipt.status.toString() === 'SUCCESS') {
      console.log(`✅ Transaction successful: ${tx.transactionId}`);
    } else {
      console.error(`❌ Transaction failed: ${receipt.status.toString()}`);
    }
  } catch (err) {
    console.error(`⚠️ Error:`, err);
  }

  process.exit();
}

sendHBAR();
