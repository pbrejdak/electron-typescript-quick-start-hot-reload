import * as url from 'url';
import * as path from 'path';

export default class Helper {
    static getWindowPath(env: string): string {
        if (env == 'production') {
            const urlObj: url.UrlObject = {
                pathname: path.join(__dirname, `client`, `index.html`),
                protocol: "file:",
                slashes: true
            }
            return url.format(urlObj);
        } else {
            const urlObj: url.UrlObject = {
                pathname: 'localhost:4200',
                protocol: "http:",
                slashes: true
            }
            return url.format(urlObj);
        }
    }
}