#!/usr/bin/env node

import { TradiverseCli } from '@tradiverse/cli-lib';
import axios from 'axios';

const authToken = process.env.SPACE_AUTH_TOKEN;
const httpRequest = async r => (await axios(r))?.data;

const cli = new TradiverseCli({ authToken, httpRequest });

const { operationId, result } = await cli.handleCli(process.argv.slice(2));

switch (operationId) {

    // apply custom formatting to cli here based on operationId
    // case '':
    //     break;

    default:
        console.log(typeof result === 'string' ? result : JSON.stringify(result, null, 2));
}