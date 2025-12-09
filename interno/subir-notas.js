
const condiciones = {
    1: "Libre",
    2: "Regular",
    3: "Promoción TP",
    4: "Ap. Directa",
}

const datosComision3 = [
    {legajo: 61028, condicion: 4, nota: 10},
    {legajo: 61032, condicion: 4, nota: 10},
    {legajo: 61037, condicion: 2, nota:  0},
    {legajo: 61096, condicion: 4, nota: 10},
    {legajo: 61113, condicion: 2, nota:  0},
    {legajo: 61118, condicion: 2, nota:  0},
    {legajo: 61129, condicion: 2, nota:  0},
    {legajo: 61136, condicion: 2, nota:  0},
    {legajo: 61139, condicion: 2, nota:  0},
    {legajo: 61141, condicion: 2, nota:  0},
    {legajo: 61197, condicion: 4, nota: 10},
    {legajo: 61200, condicion: 2, nota:  0},
    {legajo: 61203, condicion: 2, nota:  0},
    {legajo: 61214, condicion: 4, nota: 10},
    {legajo: 61221, condicion: 2, nota:  0},
    {legajo: 61248, condicion: 4, nota: 10},
    {legajo: 61271, condicion: 4, nota: 10},
    {legajo: 61312, condicion: 4, nota: 10},
    {legajo: 61318, condicion: 1, nota:  0},
    {legajo: 61319, condicion: 2, nota:  0},
    {legajo: 61445, condicion: 4, nota: 10},
    {legajo: 61450, condicion: 4, nota: 10},
    {legajo: 61473, condicion: 4, nota: 10},
    {legajo: 61478, condicion: 4, nota: 10},
    {legajo: 61562, condicion: 2, nota:  0},
    {legajo: 61572, condicion: 2, nota:  0},
    {legajo: 61579, condicion: 2, nota:  0},
    {legajo: 61595, condicion: 2, nota:  0},
    {legajo: 61596, condicion: 2, nota:  0},
    {legajo: 61624, condicion: 2, nota:  0},
    {legajo: 61626, condicion: 2, nota:  0},
    {legajo: 61627, condicion: 2, nota:  0},
    {legajo: 61667, condicion: 4, nota: 10},
    {legajo: 61668, condicion: 1, nota:  0},
    {legajo: 61676, condicion: 2, nota:  0},
    {legajo: 61679, condicion: 2, nota:  0},
    {legajo: 61793, condicion: 4, nota: 10},
    {legajo: 61794, condicion: 4, nota: 10},
    {legajo: 61818, condicion: 2, nota:  0},
    {legajo: 61862, condicion: 2, nota:  0},
    {legajo: 61956, condicion: 4, nota: 10},
    {legajo: 62053, condicion: 2, nota:  0},
    {legajo: 62055, condicion: 4, nota: 10},
    {legajo: 62093, condicion: 2, nota:  0},
    {legajo: 62172, condicion: 2, nota:  0},
    {legajo: 62263, condicion: 4, nota: 10},
    {legajo: 62555, condicion: 4, nota: 10}
];

// Datos de la Comisión 5
const datosComision5 = [
    {legajo: 61041, condicion: 4, nota: 10},
    {legajo: 61042, condicion: 2, nota:  0},
    {legajo: 61048, condicion: 2, nota:  0},
    {legajo: 61050, condicion: 4, nota: 10},
    {legajo: 61051, condicion: 4, nota: 10},
    {legajo: 61052, condicion: 2, nota:  0},
    {legajo: 61053, condicion: 2, nota:  0},
    {legajo: 61060, condicion: 4, nota: 10},
    {legajo: 61064, condicion: 4, nota: 10},
    {legajo: 61072, condicion: 2, nota:  0},
    {legajo: 61122, condicion: 2, nota:  0},
    {legajo: 61125, condicion: 4, nota: 10},
    {legajo: 61128, condicion: 4, nota: 10},
    {legajo: 61140, condicion: 2, nota:  0},
    {legajo: 61189, condicion: 2, nota:  0},
    {legajo: 61218, condicion: 2, nota:  0},
    {legajo: 61226, condicion: 4, nota: 10},
    {legajo: 61227, condicion: 4, nota: 10},
    {legajo: 61247, condicion: 2, nota:  0},
    {legajo: 61252, condicion: 2, nota:  0},
    {legajo: 61290, condicion: 4, nota: 10},
    {legajo: 61314, condicion: 2, nota:  0},
    {legajo: 61328, condicion: 4, nota: 10},
    {legajo: 61340, condicion: 4, nota: 10},
    {legajo: 61345, condicion: 2, nota:  0},
    {legajo: 61422, condicion: 4, nota: 10},
    {legajo: 61437, condicion: 1, nota:  0},
    {legajo: 61491, condicion: 4, nota: 10},
    {legajo: 61496, condicion: 2, nota:  0},
    {legajo: 61535, condicion: 2, nota:  0},
    {legajo: 61588, condicion: 2, nota:  0},
    {legajo: 61611, condicion: 2, nota:  0},
    {legajo: 61644, condicion: 2, nota:  0},
    {legajo: 61652, condicion: 4, nota: 10},
    {legajo: 61671, condicion: 4, nota: 10},
    {legajo: 61673, condicion: 4, nota: 10},
    {legajo: 61680, condicion: 4, nota: 10},
    {legajo: 61688, condicion: 4, nota: 10},
    {legajo: 61732, condicion: 4, nota: 10},
    {legajo: 61848, condicion: 2, nota:  0},
    {legajo: 61858, condicion: 1, nota:  0},
    {legajo: 61905, condicion: 2, nota:  0},
    {legajo: 61908, condicion: 2, nota:  0},
    {legajo: 61912, condicion: 2, nota:  0},
    {legajo: 61914, condicion: 2, nota:  0},
    {legajo: 61962, condicion: 2, nota:  0},
    {legajo: 61985, condicion: 4, nota: 10},
    {legajo: 61988, condicion: 4, nota: 10},
    {legajo: 62104, condicion: 2, nota:  0},
    {legajo: 62136, condicion: 4, nota: 10},
    {legajo: 62564, condicion: 0, nota:  0}
];

function buscarLegajo(legajo, selector) {
    const inputLegajo = document.querySelector(`input[name="legajo"][value="${legajo}"]`);
    if (!inputLegajo) return false;
    
    const fila = inputLegajo.closest('tr');
    if (!fila) return false;

    const selectCondicion = fila.querySelector(selector);
    if (!selectCondicion) return false;

    return selectCondicion;
}

function asignarCondicion(legajo, condicion) {
    let destino = buscarLegajo(legajo, 'select[name="nota"]');
    if (!destino) return false;

    destino.selectedIndex = condicion;
    return true;
}

function asignarNotaFinal(legajo, nota) {
    let destino = buscarLegajo(legajo, 'input[name="nota"]');
    if (!destino) return false;

    destino.value = nota;
    return true;
}

function registrarDatos(datosComision, modo) {
    let exitosos = 0, fallidos = 0;

    console.log(`== Asignando ${modo} ==`);
    datosComision.forEach(({ legajo, condicion, nota }) => {
        let ok = true;
        if(modo === "condicion") {
            ok = asignarCondicion(legajo, condicion);
            console.log(` - ${legajo}  ${ok ? "✅" : "❌"} Condición ${condiciones[condicion]}`);
        }
        if (modo === "nota") {
            ok = asignarNotaFinal(legajo, nota);
            console.log(` - ${legajo}  ${ok ? "✅" : "❌"} Nota ${String(nota).padStart(2)}`);
        }
        if (ok) { exitosos++ } else { fallidos++ }
    });

    console.log(`> ${exitosos} exitosas, ${fallidos} fallidos`);
}

function determinarComision() {
    const tituloTabla = document.querySelector('.tituloTabla');
    if (!tituloTabla) return null;

    const textoTitulo = tituloTabla.textContent || tituloTabla.innerText;
    const match = textoTitulo.match(/Comisión (\d+)/);
    if (match) return parseInt(match[1]);
    return null;
}

function determinarModo() {
    if (document.querySelector('select[name="nota"]')) return "condicion";
    if (document.querySelector('input[name="nota"]'))  return "nota";
    return null;
}

function aplicarDatos() {
    const modo     = determinarModo();
    const comision = determinarComision();
    if (!modo || !comision) {
        console.error(`No se pudo determinar el modo ${modo} o la comisión ${comision}.`);
        return;
    }
    console.log(`=== Aplicando ${modo.toUpperCase()} datos de Comisión ${comision} ===`);
    registrarDatos(comision === 3 ? datosComision3 : datosComision5, modo);
}

aplicarDatos();