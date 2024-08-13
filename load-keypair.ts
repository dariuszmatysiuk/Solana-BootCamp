import { Keypair } from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

console.log("SECRET_KEY: ", process.env.SECRET_KEY);
const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("Keypair generated:", keypair.publicKey.toBase58());
console.log("Private key generated:", keypair.secretKey.toString());
