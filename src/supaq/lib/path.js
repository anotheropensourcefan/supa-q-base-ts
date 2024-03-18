const regTs = /(.*)\.ts$/;
const regJs = /(.*)\.js$/;
export async function getPath(fullPath) {
    const matchTs = fullPath.match(regTs);
    const matchJs = fullPath.match(regJs);
    let path = null, command = null;
    if (matchJs) {
        path = matchJs[1];
    }
    else {
        if (matchTs) {
            path = matchTs[1];
        }
        else {
            path = fullPath;
        }
        command = `tsc ${path}.ts --target es2022 --moduleResolution node --strict false --skipLibCheck`;
    }
    return { path, command };
}
