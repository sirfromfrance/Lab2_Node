/**
 * A util method for safety parse your data to JSON :]
 * @param {any} data - your data which you wanna safety parse into JSON
 * @param {any} fallback - for catch purpose
 * @returns
 */
function safeJSON(data, fallback)
{
    try{
return JSON.parse(data)
    }
    catch{
        return fallback; 
    }
}
export {safeJSON};