const helperCaveConfig = { serverId: 2150, active: true };

const helperCaveHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_2150() {
    return helperCaveConfig.active ? "OK" : "ERR";
}

console.log("Module helperCave loaded successfully.");