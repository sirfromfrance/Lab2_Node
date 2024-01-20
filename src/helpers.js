/**
 * A util method for safety parse your data to JSON :]
 * @param {any} data - your data which you wanna safety parse into JSON
 * @param {any} fallback - for catch purpose
 * @returns
 */
function json(data) 
{
    this.end(JSON.stringify(data))
}

const helpers = {json}
export default helpers; 