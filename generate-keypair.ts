import { addKeypairToEnvFile } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

addKeypairToEnvFile(keypair, "SECRET_KEY");

console.log("Keypair generated:", keypair.publicKey.toBase58());
console.log("Private key generated:", keypair.secretKey.toString());
