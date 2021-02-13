
export const LOG = (content, logType = 'string') => {

    const timeStamp = new Date().toLocaleTimeString();

    switch (logType) {
        case 'string':
            console.log(`${timeStamp} - ${content}`);        
            break;

        case 'table':
            console.table(content);        
            break;
    
        default:
            break;
    }
}