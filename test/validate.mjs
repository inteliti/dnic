import { validate } from "../dist/index.js";
import * as fs from 'fs';

const d = console.log

let dnis = fs.readFileSync("test/dnis.txt", "utf8").split(/[\r]/)

dnis.map(i => i.trim()).forEach(dni => {
	let ok = validate(dni)
	d(`validate( ${dni} ) = ${ok}`)
})
