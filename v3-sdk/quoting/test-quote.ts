import { quote } from "./src/libs/quote";


async function main() {
    try {
        console.log('Starting quote test...');
        console.log('Fetching quote...');
        
        const quotedAmount = await quote();
        
        console.log('Quote successful!');
        console.log('Quoted amount:', quotedAmount);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// スクリプトを実行
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });