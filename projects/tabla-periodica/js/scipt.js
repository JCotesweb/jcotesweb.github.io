// Datos completos de los elementos químicos con información detallada
const elementosData = {
    1: { simbolo: 'H', nombre: 'Hidrógeno', masa: '1.008', uso: 'Combustible, producción de amoníaco, hidrogenación', tipo: 'no-metales', col: 1, row: 1, configuracion: '1s¹', estado: 'Gas', descubridor: 'Henry Cavendish (1766)' },
    2: { simbolo: 'He', nombre: 'Helio', masa: '4.003', uso: 'Globos, refrigeración criogénica, buceo profundo', tipo: 'gases-nobles', col: 18, row: 1, configuracion: '1s²', estado: 'Gas', descubridor: 'Pierre Janssen (1868)' },
    3: { simbolo: 'Li', nombre: 'Litio', masa: '6.941', uso: 'Baterías, medicamentos psiquiátricos, aleaciones', tipo: 'metales-alcalinos', col: 1, row: 2, configuracion: '[He] 2s¹', estado: 'Sólido', descubridor: 'Johan Arfvedson (1817)' },
    4: { simbolo: 'Be', nombre: 'Berilio', masa: '9.012', uso: 'Aleaciones aeroespaciales, instrumentos de precisión', tipo: 'alcalinoterreos', col: 2, row: 2, configuracion: '[He] 2s²', estado: 'Sólido', descubridor: 'Louis Vauquelin (1798)' },
    5: { simbolo: 'B', nombre: 'Boro', masa: '10.811', uso: 'Vidrio borosilicato, detergentes, semiconductores', tipo: 'metaloides', col: 13, row: 2, configuracion: '[He] 2s² 2p¹', estado: 'Sólido', descubridor: 'Joseph Gay-Lussac (1808)' },
    6: { simbolo: 'C', nombre: 'Carbono', masa: '12.011', uso: 'Grafito, diamante, materiales compuestos, vida orgánica', tipo: 'no-metales', col: 14, row: 2, configuracion: '[He] 2s² 2p²', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    7: { simbolo: 'N', nombre: 'Nitrógeno', masa: '14.007', uso: 'Fertilizantes, explosivos, conservación de alimentos', tipo: 'no-metales', col: 15, row: 2, configuracion: '[He] 2s² 2p³', estado: 'Gas', descubridor: 'Daniel Rutherford (1772)' },
    8: { simbolo: 'O', nombre: 'Oxígeno', masa: '15.999', uso: 'Respiración, combustión, medicina, soldadura', tipo: 'no-metales', col: 16, row: 2, configuracion: '[He] 2s² 2p⁴', estado: 'Gas', descubridor: 'Joseph Priestley (1774)' },
    9: { simbolo: 'F', nombre: 'Flúor', masa: '18.998', uso: 'Pasta dental, teflón, refrigerantes', tipo: 'halogenos', col: 17, row: 2, configuracion: '[He] 2s² 2p⁵', estado: 'Gas', descubridor: 'Henri Moissan (1886)' },
    10: { simbolo: 'Ne', nombre: 'Neón', masa: '20.180', uso: 'Letreros luminosos, láseres, refrigeración', tipo: 'gases-nobles', col: 18, row: 2, configuracion: '[He] 2s² 2p⁶', estado: 'Gas', descubridor: 'William Ramsay (1898)' },
    11: { simbolo: 'Na', nombre: 'Sodio', masa: '22.990', uso: 'Sal de mesa, conservantes, lámparas de vapor', tipo: 'metales-alcalinos', col: 1, row: 3, configuracion: '[Ne] 3s¹', estado: 'Sólido', descubridor: 'Humphry Davy (1807)' },
    12: { simbolo: 'Mg', nombre: 'Magnesio', masa: '24.305', uso: 'Aleaciones ligeras, fuegos artificiales, suplementos', tipo: 'alcalinoterreos', col: 2, row: 3, configuracion: '[Ne] 3s²', estado: 'Sólido', descubridor: 'Humphry Davy (1808)' },
    13: { simbolo: 'Al', nombre: 'Aluminio', masa: '26.982', uso: 'Latas, aviones, construcción, utensilios de cocina', tipo: 'otros-metales', col: 13, row: 3, configuracion: '[Ne] 3s² 3p¹', estado: 'Sólido', descubridor: 'Hans Christian Ørsted (1825)' },
    14: { simbolo: 'Si', nombre: 'Silicio', masa: '28.086', uso: 'Semiconductores, chips, vidrio, hormigón', tipo: 'metaloides', col: 14, row: 3, configuracion: '[Ne] 3s² 3p²', estado: 'Sólido', descubridor: 'Jöns Jacob Berzelius (1824)' },
    15: { simbolo: 'P', nombre: 'Fósforo', masa: '30.974', uso: 'Fertilizantes, cerillas, fuegos artificiales, detergentes', tipo: 'no-metales', col: 15, row: 3, configuracion: '[Ne] 3s² 3p³', estado: 'Sólido', descubridor: 'Hennig Brand (1669)' },
    16: { simbolo: 'S', nombre: 'Azufre', masa: '32.065', uso: 'Ácido sulfúrico, vulcanización del caucho, fungicidas', tipo: 'no-metales', col: 16, row: 3, configuracion: '[Ne] 3s² 3p⁴', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    17: { simbolo: 'Cl', nombre: 'Cloro', masa: '35.453', uso: 'Desinfectantes, PVC, blanqueadores', tipo: 'halogenos', col: 17, row: 3, configuracion: '[Ne] 3s² 3p⁵', estado: 'Gas', descubridor: 'Carl Wilhelm Scheele (1774)' },
    18: { simbolo: 'Ar', nombre: 'Argón', masa: '39.948', uso: 'Soldadura, bombillas incandescentes, conservación', tipo: 'gases-nobles', col: 18, row: 3, configuracion: '[Ne] 3s² 3p⁶', estado: 'Gas', descubridor: 'Lord Rayleigh (1894)' },
    19: { simbolo: 'K', nombre: 'Potasio', masa: '39.098', uso: 'Fertilizantes, jabones, vidrio, medicina', tipo: 'metales-alcalinos', col: 1, row: 4, configuracion: '[Ar] 4s¹', estado: 'Sólido', descubridor: 'Humphry Davy (1807)' },
    20: { simbolo: 'Ca', nombre: 'Calcio', masa: '40.078', uso: 'Cemento, yeso, huesos, dientes, suplementos', tipo: 'alcalinoterreos', col: 2, row: 4, configuracion: '[Ar] 4s²', estado: 'Sólido', descubridor: 'Humphry Davy (1808)' },
    21: { simbolo: 'Sc', nombre: 'Escandio', masa: '44.956', uso: 'Aleaciones de alta tecnología, lámparas de haluro', tipo: 'metales-transicion', col: 3, row: 4, configuracion: '[Ar] 3d¹ 4s²', estado: 'Sólido', descubridor: 'Lars Fredrik Nilson (1879)' },
    22: { simbolo: 'Ti', nombre: 'Titanio', masa: '47.867', uso: 'Aviones, implantes médicos, pinturas, deportes', tipo: 'metales-transicion', col: 4, row: 4, configuracion: '[Ar] 3d² 4s²', estado: 'Sólido', descubridor: 'William Gregor (1791)' },
    23: { simbolo: 'V', nombre: 'Vanadio', masa: '50.942', uso: 'Aceros especiales, catalizadores, baterías', tipo: 'metales-transicion', col: 5, row: 4, configuracion: '[Ar] 3d³ 4s²', estado: 'Sólido', descubridor: 'Andrés Manuel del Río (1801)' },
    24: { simbolo: 'Cr', nombre: 'Cromo', masa: '51.996', uso: 'Acero inoxidable, cromado, curtido de cuero', tipo: 'metales-transicion', col: 6, row: 4, configuracion: '[Ar] 3d⁵ 4s¹', estado: 'Sólido', descubridor: 'Louis Vauquelin (1797)' },
    25: { simbolo: 'Mn', nombre: 'Manganeso', masa: '54.938', uso: 'Acero, baterías alcalinas, fertilizantes', tipo: 'metales-transicion', col: 7, row: 4, configuracion: '[Ar] 3d⁵ 4s²', estado: 'Sólido', descubridor: 'Johan Gottlieb Gahn (1774)' },
    26: { simbolo: 'Fe', nombre: 'Hierro', masa: '55.845', uso: 'Acero, construcción, herramientas, hemoglobina', tipo: 'metales-transicion', col: 8, row: 4, configuracion: '[Ar] 3d⁶ 4s²', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    27: { simbolo: 'Co', nombre: 'Cobalto', masa: '58.933', uso: 'Aleaciones, imanes, baterías, medicina nuclear', tipo: 'metales-transicion', col: 9, row: 4, configuracion: '[Ar] 3d⁷ 4s²', estado: 'Sólido', descubridor: 'Georg Brandt (1735)' },
    28: { simbolo: 'Ni', nombre: 'Níquel', masa: '58.693', uso: 'Acero inoxidable, monedas, baterías, catalizadores', tipo: 'metales-transicion', col: 10, row: 4, configuracion: '[Ar] 3d⁸ 4s²', estado: 'Sólido', descubridor: 'Axel Fredrik Cronstedt (1751)' },
    29: { simbolo: 'Cu', nombre: 'Cobre', masa: '63.546', uso: 'Cables eléctricos, tuberías, monedas, aleaciones', tipo: 'metales-transicion', col: 11, row: 4, configuracion: '[Ar] 3d¹⁰ 4s¹', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    30: { simbolo: 'Zn', nombre: 'Zinc', masa: '65.409', uso: 'Galvanizado, aleaciones, suplementos, baterías', tipo: 'metales-transicion', col: 12, row: 4, configuracion: '[Ar] 3d¹⁰ 4s²', estado: 'Sólido', descubridor: 'Andreas Marggraf (1746)' },
    31: { simbolo: 'Ga', nombre: 'Galio', masa: '69.723', uso: 'Semiconductores, LEDs, termómetros de alta temperatura', tipo: 'otros-metales', col: 13, row: 4, configuracion: '[Ar] 3d¹⁰ 4s² 4p¹', estado: 'Sólido', descubridor: 'Paul-Émile Lecoq de Boisbaudran (1875)' },
    32: { simbolo: 'Ge', nombre: 'Germanio', masa: '72.640', uso: 'Semiconductores, fibra óptica, detectores infrarrojos', tipo: 'metaloides', col: 14, row: 4, configuracion: '[Ar] 3d¹⁰ 4s² 4p²', estado: 'Sólido', descubridor: 'Clemens Winkler (1886)' },
    33: { simbolo: 'As', nombre: 'Arsénico', masa: '74.922', uso: 'Semiconductores, conservantes de madera, pesticidas', tipo: 'metaloides', col: 15, row: 4, configuracion: '[Ar] 3d¹⁰ 4s² 4p³', estado: 'Sólido', descubridor: 'Alberto Magno (1250)' },
    34: { simbolo: 'Se', nombre: 'Selenio', masa: '78.960', uso: 'Fotocélulas, fotocopiadoras, suplementos, shampoos', tipo: 'no-metales', col: 16, row: 4, configuracion: '[Ar] 3d¹⁰ 4s² 4p⁴', estado: 'Sólido', descubridor: 'Jöns Jacob Berzelius (1817)' },
    35: { simbolo: 'Br', nombre: 'Bromo', masa: '79.904', uso: 'Retardantes de llama, medicinas, fotografía', tipo: 'halogenos', col: 17, row: 4, configuracion: '[Ar] 3d¹⁰ 4s² 4p⁵', estado: 'Líquido', descubridor: 'Antoine Jérôme Balard (1826)' },
    36: { simbolo: 'Kr', nombre: 'Kriptón', masa: '83.798', uso: 'Lámparas de descarga, láseres, ventanas aislantes', tipo: 'gases-nobles', col: 18, row: 4, configuracion: '[Ar] 3d¹⁰ 4s² 4p⁶', estado: 'Gas', descubridor: 'William Ramsay (1898)' },
    37: { simbolo: 'Rb', nombre: 'Rubidio', masa: '85.468', uso: 'Investigación, fotocélulas, relojes atómicos', tipo: 'metales-alcalinos', col: 1, row: 5, configuracion: '[Kr] 5s¹', estado: 'Sólido', descubridor: 'Robert Bunsen (1861)' },
    38: { simbolo: 'Sr', nombre: 'Estroncio', masa: '87.620', uso: 'Fuegos artificiales rojos, medicina nuclear, vidrio', tipo: 'alcalinoterreos', col: 2, row: 5, configuracion: '[Kr] 5s²', estado: 'Sólido', descubridor: 'William Cruickshank (1787)' },
    39: { simbolo: 'Y', nombre: 'Itrio', masa: '88.906', uso: 'Láseres, superconductores, televisores, LEDs', tipo: 'metales-transicion', col: 3, row: 5, configuracion: '[Kr] 4d¹ 5s²', estado: 'Sólido', descubridor: 'Johan Gadolin (1794)' },
    40: { simbolo: 'Zr', nombre: 'Circonio', masa: '91.224', uso: 'Reactores nucleares, implantes, joyería', tipo: 'metales-transicion', col: 4, row: 5, configuracion: '[Kr] 4d² 5s²', estado: 'Sólido', descubridor: 'Martin Heinrich Klaproth (1789)' },
    41: { simbolo: 'Nb', nombre: 'Niobio', masa: '92.906', uso: 'Superconductores, aceros especiales, joyería', tipo: 'metales-transicion', col: 5, row: 5, configuracion: '[Kr] 4d⁴ 5s¹', estado: 'Sólido', descubridor: 'Charles Hatchett (1801)' },
    42: { simbolo: 'Mo', nombre: 'Molibdeno', masa: '95.940', uso: 'Aceros de alta resistencia, catalizadores, lubricantes', tipo: 'metales-transicion', col: 6, row: 5, configuracion: '[Kr] 4d⁵ 5s¹', estado: 'Sólido', descubridor: 'Carl Wilhelm Scheele (1778)' },
    43: { simbolo: 'Tc', nombre: 'Tecnecio', masa: '98.000', uso: 'Medicina nuclear, inhibidor de corrosión', tipo: 'metales-transicion', col: 7, row: 5, configuracion: '[Kr] 4d⁵ 5s²', estado: 'Sólido', descubridor: 'Emilio Segrè (1937)' },
    44: { simbolo: 'Ru', nombre: 'Rutenio', masa: '101.07', uso: 'Catalizadores, aleaciones de platino, electrónicos', tipo: 'metales-transicion', col: 8, row: 5, configuracion: '[Kr] 4d⁷ 5s¹', estado: 'Sólido', descubridor: 'Karl Ernst Claus (1844)' },
    45: { simbolo: 'Rh', nombre: 'Rodio', masa: '102.91', uso: 'Catalizadores automotrices, joyería, espejos', tipo: 'metales-transicion', col: 9, row: 5, configuracion: '[Kr] 4d⁸ 5s¹', estado: 'Sólido', descubridor: 'William Hyde Wollaston (1803)' },
    46: { simbolo: 'Pd', nombre: 'Paladio', masa: '106.42', uso: 'Catalizadores, joyería, odontología, electrónicos', tipo: 'metales-transicion', col: 10, row: 5, configuracion: '[Kr] 4d¹⁰', estado: 'Sólido', descubridor: 'William Hyde Wollaston (1803)' },
    47: { simbolo: 'Ag', nombre: 'Plata', masa: '107.87', uso: 'Joyería, monedas, fotografía, electrónicos', tipo: 'metales-transicion', col: 11, row: 5, configuracion: '[Kr] 4d¹⁰ 5s¹', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    48: { simbolo: 'Cd', nombre: 'Cadmio', masa: '112.41', uso: 'Baterías recargables, pigmentos, galvanoplastia', tipo: 'metales-transicion', col: 12, row: 5, configuracion: '[Kr] 4d¹⁰ 5s²', estado: 'Sólido', descubridor: 'Karl Samuel Leberecht Hermann (1817)' },
    49: { simbolo: 'In', nombre: 'Indio', masa: '114.82', uso: 'Pantallas LCD, soldaduras, aleaciones especiales', tipo: 'otros-metales', col: 13, row: 5, configuracion: '[Kr] 4d¹⁰ 5s² 5p¹', estado: 'Sólido', descubridor: 'Ferdinand Reich (1863)' },
    50: { simbolo: 'Sn', nombre: 'Estaño', masa: '118.71', uso: 'Latas, soldaduras, aleaciones, recubrimientos', tipo: 'otros-metales', col: 14, row: 5, configuracion: '[Kr] 4d¹⁰ 5s² 5p²', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    51: { simbolo: 'Sb', nombre: 'Antimonio', masa: '121.76', uso: 'Retardantes de llama, semiconductores, aleaciones', tipo: 'metaloides', col: 15, row: 5, configuracion: '[Kr] 4d¹⁰ 5s² 5p³', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    52: { simbolo: 'Te', nombre: 'Telurio', masa: '127.60', uso: 'Aleaciones, semiconductores, células solares', tipo: 'metaloides', col: 16, row: 5, configuracion: '[Kr] 4d¹⁰ 5s² 5p⁴', estado: 'Sólido', descubridor: 'Franz-Joseph Müller von Reichenstein (1782)' },
    53: { simbolo: 'I', nombre: 'Yodo', masa: '126.90', uso: 'Desinfectantes, medicina, fotografía, suplementos', tipo: 'halogenos', col: 17, row: 5, configuracion: '[Kr] 4d¹⁰ 5s² 5p⁵', estado: 'Sólido', descubridor: 'Bernard Courtois (1811)' },
    54: { simbolo: 'Xe', nombre: 'Xenón', masa: '131.29', uso: 'Lámparas de xenón, anestesia, propulsión espacial', tipo: 'gases-nobles', col: 18, row: 5, configuracion: '[Kr] 4d¹⁰ 5s² 5p⁶', estado: 'Gas', descubridor: 'William Ramsay (1898)' },
    55: { simbolo: 'Cs', nombre: 'Cesio', masa: '132.91', uso: 'Relojes atómicos, fotocélulas, catalizadores', tipo: 'metales-alcalinos', col: 1, row: 6, configuracion: '[Xe] 6s¹', estado: 'Sólido', descubridor: 'Robert Bunsen (1860)' },
    56: { simbolo: 'Ba', nombre: 'Bario', masa: '137.33', uso: 'Rayos X, fuegos artificiales verdes, perforación', tipo: 'alcalinoterreos', col: 2, row: 6, configuracion: '[Xe] 6s²', estado: 'Sólido', descubridor: 'Humphry Davy (1808)' },
    57: { simbolo: 'La', nombre: 'Lantano', masa: '138.91', uso: 'Catalizadores, óptica, aleaciones especiales', tipo: 'lantanidos', col: 3, row: 6, configuracion: '[Xe] 5d¹ 6s²', estado: 'Sólido', descubridor: 'Carl Gustaf Mosander (1839)' },
    // Elementos de transición del periodo 6
    72: { simbolo: 'Hf', nombre: 'Hafnio', masa: '178.49', uso: 'Reactores nucleares, superaleaciones, electrónicos', tipo: 'metales-transicion', col: 4, row: 6, configuracion: '[Xe] 4f¹⁴ 5d² 6s²', estado: 'Sólido', descubridor: 'Dirk Coster (1923)' },
    73: { simbolo: 'Ta', nombre: 'Tantalio', masa: '180.95', uso: 'Capacitores, implantes médicos, aleaciones', tipo: 'metales-transicion', col: 5, row: 6, configuracion: '[Xe] 4f¹⁴ 5d³ 6s²', estado: 'Sólido', descubridor: 'Anders Gustaf Ekeberg (1802)' },
    74: { simbolo: 'W', nombre: 'Tungsteno', masa: '183.84', uso: 'Filamentos, herramientas de corte, aleaciones', tipo: 'metales-transicion', col: 6, row: 6, configuracion: '[Xe] 4f¹⁴ 5d⁴ 6s²', estado: 'Sólido', descubridor: 'Juan José Elhuyar (1783)' },
    75: { simbolo: 'Re', nombre: 'Renio', masa: '186.21', uso: 'Superaleaciones, catalizadores, filamentos', tipo: 'metales-transicion', col: 7, row: 6, configuracion: '[Xe] 4f¹⁴ 5d⁵ 6s²', estado: 'Sólido', descubridor: 'Ida Noddack (1925)' },
    76: { simbolo: 'Os', nombre: 'Osmio', masa: '190.23', uso: 'Aleaciones de alta dureza, plumas estilográficas', tipo: 'metales-transicion', col: 8, row: 6, configuracion: '[Xe] 4f¹⁴ 5d⁶ 6s²', estado: 'Sólido', descubridor: 'Smithson Tennant (1803)' },
    77: { simbolo: 'Ir', nombre: 'Iridio', masa: '192.22', uso: 'Catalizadores, electrodos, aleaciones de platino', tipo: 'metales-transicion', col: 9, row: 6, configuracion: '[Xe] 4f¹⁴ 5d⁷ 6s²', estado: 'Sólido', descubridor: 'Smithson Tennant (1803)' },
    78: { simbolo: 'Pt', nombre: 'Platino', masa: '195.08', uso: 'Catalizadores, joyería, medicina, electrónicos', tipo: 'metales-transicion', col: 10, row: 6, configuracion: '[Xe] 4f¹⁴ 5d⁹ 6s¹', estado: 'Sólido', descubridor: 'Antonio de Ulloa (1748)' },
    79: { simbolo: 'Au', nombre: 'Oro', masa: '196.97', uso: 'Joyería, electrónicos, inversión, odontología', tipo: 'metales-transicion', col: 11, row: 6, configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    80: { simbolo: 'Hg', nombre: 'Mercurio', masa: '200.59', uso: 'Termómetros, lámparas, amalgamas dentales', tipo: 'metales-transicion', col: 12, row: 6, configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', estado: 'Líquido', descubridor: 'Conocido desde la antigüedad' },
    81: { simbolo: 'Tl', nombre: 'Talio', masa: '204.38', uso: 'Detectores infrarrojos, vidrios especiales, pesticidas', tipo: 'otros-metales', col: 13, row: 6, configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', estado: 'Sólido', descubridor: 'William Crookes (1861)' },
    82: { simbolo: 'Pb', nombre: 'Plomo', masa: '207.20', uso: 'Baterías, blindaje contra radiación, soldaduras', tipo: 'otros-metales', col: 14, row: 6, configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', estado: 'Sólido', descubridor: 'Conocido desde la antigüedad' },
    83: { simbolo: 'Bi', nombre: 'Bismuto', masa: '208.98', uso: 'Medicina, cosméticos, aleaciones de bajo punto de fusión', tipo: 'otros-metales', col: 15, row: 6, configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', estado: 'Sólido', descubridor: 'Claude François Geoffroy (1753)' },
    84: { simbolo: 'Po', nombre: 'Polonio', masa: '209.00', uso: 'Fuentes de calor espaciales, eliminadores de estática', tipo: 'metaloides', col: 16, row: 6, configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', estado: 'Sólido', descubridor: 'Marie y Pierre Curie (1898)' },
    85: { simbolo: 'At', nombre: 'Astato', masa: '210.00', uso: 'Investigación médica, estudios de radiactividad', tipo: 'halogenos', col: 17, row: 6, configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', estado: 'Sólido', descubridor: 'Dale R. Corson (1940)' },
    86: { simbolo: 'Rn', nombre: 'Radón', masa: '222.00', uso: 'Radioterapia, detección de terremotos', tipo: 'gases-nobles', col: 18, row: 6, configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', estado: 'Gas', descubridor: 'Friedrich Ernst Dorn (1900)' },
    // Periodo 7
    87: { simbolo: 'Fr', nombre: 'Francio', masa: '223.00', uso: 'Investigación científica, estudios atómicos', tipo: 'metales-alcalinos', col: 1, row: 7, configuracion: '[Rn] 7s¹', estado: 'Sólido', descubridor: 'Marguerite Perey (1939)' },
    88: { simbolo: 'Ra', nombre: 'Radio', masa: '226.00', uso: 'Radioterapia, luminiscencia, investigación', tipo: 'alcalinoterreos', col: 2, row: 7, configuracion: '[Rn] 7s²', estado: 'Sólido', descubridor: 'Marie y Pierre Curie (1898)' },
    89: { simbolo: 'Ac', nombre: 'Actinio', masa: '227.00', uso: 'Investigación nuclear, fuentes de neutrones', tipo: 'actinidos', col: 3, row: 7, configuracion: '[Rn] 6d¹ 7s²', estado: 'Sólido', descubridor: 'André-Louis Debierne (1899)' },
    // Elementos superpesados
    104: { simbolo: 'Rf', nombre: 'Rutherfordio', masa: '267.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 4, row: 7, configuracion: '[Rn] 5f¹⁴ 6d² 7s²', estado: 'Sólido', descubridor: 'Albert Ghiorso (1964)' },
    105: { simbolo: 'Db', nombre: 'Dubnio', masa: '270.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 5, row: 7, configuracion: '[Rn] 5f¹⁴ 6d³ 7s²', estado: 'Sólido', descubridor: 'Albert Ghiorso (1967)' },
    106: { simbolo: 'Sg', nombre: 'Seaborgio', masa: '271.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 6, row: 7, configuracion: '[Rn] 5f¹⁴ 6d⁴ 7s²', estado: 'Sólido', descubridor: 'Albert Ghiorso (1974)' },
    107: { simbolo: 'Bh', nombre: 'Bohrio', masa: '270.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 7, row: 7, configuracion: '[Rn] 5f¹⁴ 6d⁵ 7s²', estado: 'Sólido', descubridor: 'Peter Armbruster (1981)' },
    108: { simbolo: 'Hs', nombre: 'Hassio', masa: '277.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 8, row: 7, configuracion: '[Rn] 5f¹⁴ 6d⁶ 7s²', estado: 'Sólido', descubridor: 'Peter Armbruster (1984)' },
    109: { simbolo: 'Mt', nombre: 'Meitnerio', masa: '276.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 9, row: 7, configuracion: '[Rn] 5f¹⁴ 6d⁷ 7s²', estado: 'Sólido', descubridor: 'Peter Armbruster (1982)' },
    110: { simbolo: 'Ds', nombre: 'Darmstadtio', masa: '281.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 10, row: 7, configuracion: '[Rn] 5f¹⁴ 6d⁸ 7s²', estado: 'Sólido', descubridor: 'Peter Armbruster (1994)' },
    111: { simbolo: 'Rg', nombre: 'Roentgenio', masa: '280.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 11, row: 7, configuracion: '[Rn] 5f¹⁴ 6d⁹ 7s²', estado: 'Sólido', descubridor: 'Peter Armbruster (1994)' },
    112: { simbolo: 'Cn', nombre: 'Copernicio', masa: '285.00', uso: 'Investigación científica, estudios nucleares', tipo: 'metales-transicion', col: 12, row: 7, configuracion: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', estado: 'Sólido', descubridor: 'Sigurd Hofmann (1996)' },
    113: { simbolo: 'Nh', nombre: 'Nihonio', masa: '284.00', uso: 'Investigación científica, estudios nucleares', tipo: 'otros-metales', col: 13, row: 7, configuracion: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', estado: 'Sólido', descubridor: 'RIKEN (2004)' },
    114: { simbolo: 'Fl', nombre: 'Flerovio', masa: '289.00', uso: 'Investigación científica, estudios nucleares', tipo: 'otros-metales', col: 14, row: 7, configuracion: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', estado: 'Sólido', descubridor: 'Yuri Oganessian (1999)' },
    115: { simbolo: 'Mc', nombre: 'Moscovio', masa: '288.00', uso: 'Investigación científica, estudios nucleares', tipo: 'otros-metales', col: 15, row: 7, configuracion: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', estado: 'Sólido', descubridor: 'Yuri Oganessian (2003)' },
    116: { simbolo: 'Lv', nombre: 'Livermorio', masa: '293.00', uso: 'Investigación científica, estudios nucleares', tipo: 'otros-metales', col: 16, row: 7, configuracion: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', estado: 'Sólido', descubridor: 'Yuri Oganessian (2000)' },
    117: { simbolo: 'Ts', nombre: 'Teneso', masa: '294.00', uso: 'Investigación científica, estudios nucleares', tipo: 'halogenos', col: 17, row: 7, configuracion: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', estado: 'Sólido', descubridor: 'Yuri Oganessian (2010)' },
    118: { simbolo: 'Og', nombre: 'Oganesón', masa: '294.00', uso: 'Investigación científica, estudios nucleares', tipo: 'gases-nobles', col: 18, row: 7, configuracion: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', estado: 'Sólido', descubridor: 'Yuri Oganessian (2002)' },
    
    // Lantánidos (separados en la fila 9)
    58: { simbolo: 'Ce', nombre: 'Cerio', masa: '140.12', uso: 'Catalizadores, aleaciones, pulido de vidrio', tipo: 'lantanidos', col: 4, row: 9, configuracion: '[Xe] 4f¹ 5d¹ 6s²', estado: 'Sólido', descubridor: 'Jöns Jacob Berzelius (1803)' },
    59: { simbolo: 'Pr', nombre: 'Praseodimio', masa: '140.91', uso: 'Imanes, aleaciones, colorantes de vidrio', tipo: 'lantanidos', col: 5, row: 9, configuracion: '[Xe] 4f³ 6s²', estado: 'Sólido', descubridor: 'Carl Auer von Welsbach (1885)' },
    60: { simbolo: 'Nd', nombre: 'Neodimio', masa: '144.24', uso: 'Imanes permanentes, láseres, aleaciones', tipo: 'lantanidos', col: 6, row: 9, configuracion: '[Xe] 4f⁴ 6s²', estado: 'Sólido', descubridor: 'Carl Auer von Welsbach (1885)' },
    61: { simbolo: 'Pm', nombre: 'Prometio', masa: '145.00', uso: 'Baterías nucleares, investigación médica', tipo: 'lantanidos', col: 7, row: 9, configuracion: '[Xe] 4f⁵ 6s²', estado: 'Sólido', descubridor: 'Charles Coryell (1945)' },
    62: { simbolo: 'Sm', nombre: 'Samario', masa: '150.36', uso: 'Imanes, absorción de neutrones, láseres', tipo: 'lantanidos', col: 8, row: 9, configuracion: '[Xe] 4f⁶ 6s²', estado: 'Sólido', descubridor: 'Paul-Émile Lecoq de Boisbaudran (1879)' },
    63: { simbolo: 'Eu', nombre: 'Europio', masa: '151.96', uso: 'Fósforos de televisión, billetes, láseres', tipo: 'lantanidos', col: 9, row: 9, configuracion: '[Xe] 4f⁷ 6s²', estado: 'Sólido', descubridor: 'Eugène-Anatole Demarçay (1896)' },
    64: { simbolo: 'Gd', nombre: 'Gadolinio', masa: '157.25', uso: 'Resonancia magnética, aleaciones, detectores', tipo: 'lantanidos', col: 10, row: 9, configuracion: '[Xe] 4f⁷ 5d¹ 6s²', estado: 'Sólido', descubridor: 'Jean Charles Galissard de Marignac (1880)' },
    65: { simbolo: 'Tb', nombre: 'Terbio', masa: '158.93', uso: 'Fósforos verdes, aleaciones, dispositivos magneto-ópticos', tipo: 'lantanidos', col: 11, row: 9, configuracion: '[Xe] 4f⁹ 6s²', estado: 'Sólido', descubridor: 'Carl Gustaf Mosander (1843)' },
    66: { simbolo: 'Dy', nombre: 'Disprosio', masa: '162.50', uso: 'Imanes, barras de control nuclear, aleaciones', tipo: 'lantanidos', col: 12, row: 9, configuracion: '[Xe] 4f¹⁰ 6s²', estado: 'Sólido', descubridor: 'Paul-Émile Lecoq de Boisbaudran (1886)' },
    67: { simbolo: 'Ho', nombre: 'Holmio', masa: '164.93', uso: 'Imanes, láseres médicos, calibración magnética', tipo: 'lantanidos', col: 13, row: 9, configuracion: '[Xe] 4f¹¹ 6s²', estado: 'Sólido', descubridor: 'Per Teodor Cleve (1878)' },
    68: { simbolo: 'Er', nombre: 'Erbio', masa: '167.26', uso: 'Amplificadores de fibra óptica, láseres, aleaciones', tipo: 'lantanidos', col: 14, row: 9, configuracion: '[Xe] 4f¹² 6s²', estado: 'Sólido', descubridor: 'Carl Gustaf Mosander (1843)' },
    69: { simbolo: 'Tm', nombre: 'Tulio', masa: '168.93', uso: 'Rayos X portátiles, láseres, investigación médica', tipo: 'lantanidos', col: 15, row: 9, configuracion: '[Xe] 4f¹³ 6s²', estado: 'Sólido', descubridor: 'Per Teodor Cleve (1879)' },
    70: { simbolo: 'Yb', nombre: 'Iterbio', masa: '173.05', uso: 'Aleaciones, láseres, relojes atómicos', tipo: 'lantanidos', col: 16, row: 9, configuracion: '[Xe] 4f¹⁴ 6s²', estado: 'Sólido', descubridor: 'Jean Charles Galissard de Marignac (1878)' },
    71: { simbolo: 'Lu', nombre: 'Lutecio', masa: '174.97', uso: 'Catalizadores, detectores PET, investigación', tipo: 'lantanidos', col: 17, row: 9, configuracion: '[Xe] 4f¹⁴ 5d¹ 6s²', estado: 'Sólido', descubridor: 'Georges Urbain (1907)' },
    
    // Actínidos (separados en la fila 10)
    90: { simbolo: 'Th', nombre: 'Torio', masa: '232.04', uso: 'Combustible nuclear, aleaciones, mantillas de gas', tipo: 'actinidos', col: 4, row: 10, configuracion: '[Rn] 6d² 7s²', estado: 'Sólido', descubridor: 'Jöns Jacob Berzelius (1829)' },
    91: { simbolo: 'Pa', nombre: 'Protactinio', masa: '231.04', uso: 'Investigación nuclear, datación radiométrica', tipo: 'actinidos', col: 5, row: 10, configuracion: '[Rn] 5f² 6d¹ 7s²', estado: 'Sólido', descubridor: 'Kasimir Fajans (1913)' },
    92: { simbolo: 'U', nombre: 'Uranio', masa: '238.03', uso: 'Combustible nuclear, armas nucleares, blindaje', tipo: 'actinidos', col: 6, row: 10, configuracion: '[Rn] 5f³ 6d¹ 7s²', estado: 'Sólido', descubridor: 'Martin Heinrich Klaproth (1789)' },
    93: { simbolo: 'Np', nombre: 'Neptunio', masa: '237.00', uso: 'Investigación nuclear, detectores de neutrones', tipo: 'actinidos', col: 7, row: 10, configuracion: '[Rn] 5f⁴ 6d¹ 7s²', estado: 'Sólido', descubridor: 'Edwin McMillan (1940)' },
    94: { simbolo: 'Pu', nombre: 'Plutonio', masa: '244.00', uso: 'Armas nucleares, reactores, generadores espaciales', tipo: 'actinidos', col: 8, row: 10, configuracion: '[Rn] 5f⁶ 7s²', estado: 'Sólido', descubridor: 'Glenn T. Seaborg (1940)' },
    95: { simbolo: 'Am', nombre: 'Americio', masa: '243.00', uso: 'Detectores de humo, fuentes de neutrones', tipo: 'actinidos', col: 9, row: 10, configuracion: '[Rn] 5f⁷ 7s²', estado: 'Sólido', descubridor: 'Glenn T. Seaborg (1944)' },
    96: { simbolo: 'Cm', nombre: 'Curio', masa: '247.00', uso: 'Generadores termoeléctricos, investigación espacial', tipo: 'actinidos', col: 10, row: 10, configuracion: '[Rn] 5f⁷ 6d¹ 7s²', estado: 'Sólido', descubridor: 'Glenn T. Seaborg (1944)' },
    97: { simbolo: 'Bk', nombre: 'Berkelio', masa: '247.00', uso: 'Investigación científica, síntesis de elementos', tipo: 'actinidos', col: 11, row: 10, configuracion: '[Rn] 5f⁹ 7s²', estado: 'Sólido', descubridor: 'Glenn T. Seaborg (1949)' },
    98: { simbolo: 'Cf', nombre: 'Californio', masa: '251.00', uso: 'Fuentes de neutrones, análisis de materiales', tipo: 'actinidos', col: 12, row: 10, configuracion: '[Rn] 5f¹⁰ 7s²', estado: 'Sólido', descubridor: 'Glenn T. Seaborg (1950)' },
    99: { simbolo: 'Es', nombre: 'Einstenio', masa: '252.00', uso: 'Investigación científica, síntesis de elementos', tipo: 'actinidos', col: 13, row: 10, configuracion: '[Rn] 5f¹¹ 7s²', estado: 'Sólido', descubridor: 'Albert Ghiorso (1952)' },
    100: { simbolo: 'Fm', nombre: 'Fermio', masa: '257.00', uso: 'Investigación científica, estudios nucleares', tipo: 'actinidos', col: 14, row: 10, configuracion: '[Rn] 5f¹² 7s²', estado: 'Sólido', descubridor: 'Albert Ghiorso (1952)' },
    101: { simbolo: 'Md', nombre: 'Mendelevio', masa: '258.00', uso: 'Investigación científica, estudios nucleares', tipo: 'actinidos', col: 15, row: 10, configuracion: '[Rn] 5f¹³ 7s²', estado: 'Sólido', descubridor: 'Albert Ghiorso (1955)' },
    102: { simbolo: 'No', nombre: 'Nobelio', masa: '259.00', uso: 'Investigación científica, estudios nucleares', tipo: 'actinidos', col: 16, row: 10, configuracion: '[Rn] 5f¹⁴ 7s²', estado: 'Sólido', descubridor: 'Albert Ghiorso (1958)' },
    103: { simbolo: 'Lr', nombre: 'Lawrencio', masa: '262.00', uso: 'Investigación científica, estudios nucleares', tipo: 'actinidos', col: 17, row: 10, configuracion: '[Rn] 5f¹⁴ 7s² 7p¹', estado: 'Sólido', descubridor: 'Albert Ghiorso (1961)' }
};

// Mapeo de tipos de elementos a colores CSS
const tipoClases = {
    'metales-alcalinos': 'var(--metales-alcalinos)',
    'alcalinoterreos': 'var(--alcalinoterreos)',
    'metales-transicion': 'var(--metales-transicion)',
    'otros-metales': 'var(--otros-metales)',
    'metaloides': 'var(--metaloides)',
    'no-metales': 'var(--no-metales)',
    'halogenos': 'var(--halogenos)',
    'gases-nobles': 'var(--gases-nobles)',
    'lantanidos': 'var(--lantanidos)',
    'actinidos': 'var(--actinidos)'
};

// Variables globales para controlar filtros y búsquedas
let filtroActual = '';
let busquedaActual = '';

/**
 * Crea un elemento químico DOM con toda su información
 */
function crearElemento(numero, elemento) {
    const div = document.createElement('div');
    div.className = 'elemento';
    div.style.backgroundColor = tipoClases[elemento.tipo];
    div.style.gridColumn = elemento.col;
    div.style.gridRow = elemento.row;
    div.style.animationDelay = `${Math.random() * 2}s`;
    div.dataset.numero = numero;
    div.dataset.tipo = elemento.tipo;
    div.dataset.nombre = elemento.nombre.toLowerCase();
    div.dataset.simbolo = elemento.simbolo.toLowerCase();
    
    div.innerHTML = `
        <span class="numero">${numero}</span>
        <span class="simbolo">${elemento.simbolo}</span>
        <span class="masa">${elemento.masa}</span>
    `;

    // Event listeners para interactividad
    div.addEventListener('mouseenter', (e) => mostrarTooltip(e, elemento, numero));
    div.addEventListener('mouseleave', ocultarTooltip);
    div.addEventListener('mousemove', (e) => actualizarPosicionTooltip(e));
    div.addEventListener('click', () => {
        div.classList.add('brillar');
        setTimeout(() => div.classList.remove('brillar'), 800);
    });

    return div;
}

/**
 * Muestra el tooltip con información detallada del elemento
 */
function mostrarTooltip(e, elemento, numero) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = `
        <div class="tooltip-header">
            ${elemento.nombre} 
            <span class="tooltip-simbolo">${elemento.simbolo}</span>
        </div>
        <div class="tooltip-info">
            <strong>Número atómico:</strong> ${numero}<br>
            <strong>Masa atómica:</strong> ${elemento.masa} u<br>
            <strong>Configuración electrónica:</strong> ${elemento.configuracion}<br>
            <strong>Estado:</strong> ${elemento.estado}<br>
            <strong>Descubridor:</strong> ${elemento.descubridor}<br>
            <strong>Usos principales:</strong> ${elemento.uso}
        </div>
    `;
    tooltip.style.display = 'block';
    actualizarPosicionTooltip(e);
}

/**
 * Actualiza la posición del tooltip siguiendo el cursor
 */
function actualizarPosicionTooltip(e) {
    const tooltip = document.getElementById('tooltip');
    const rect = tooltip.getBoundingClientRect();
    let left = e.pageX + 15;
    let top = e.pageY + 15;
    
    // Ajustar si el tooltip se sale de la pantalla
    if (left + rect.width > window.innerWidth) {
        left = e.pageX - rect.width - 15;
    }
    if (top + rect.height > window.innerHeight + window.scrollY) {
        top = e.pageY - rect.height - 15;
    }
    
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

/**
 * Oculta el tooltip
 */
function ocultarTooltip() {
    document.getElementById('tooltip').style.display = 'none';
}

/**
 * Crea espacios vacíos para dar autenticidad a la tabla periódica
 */
function crearEspaciosVacios() {
    const tablaPeriodica = document.getElementById('tablaPeriodica');
    
    // Espacios vacíos en el periodo 1 (entre H y He)
    for (let col = 2; col <= 17; col++) {
        const espacio = document.createElement('div');
        espacio.className = 'espacio-vacio';
        espacio.style.gridColumn = col;
        espacio.style.gridRow = 1;
        tablaPeriodica.appendChild(espacio);
    }
    
    // Espacios vacíos en el periodo 2 (entre Be y B)
    for (let col = 3; col <= 12; col++) {
        const espacio = document.createElement('div');
        espacio.className = 'espacio-vacio';
        espacio.style.gridColumn = col;
        espacio.style.gridRow = 2;
        tablaPeriodica.appendChild(espacio);
    }
    
    // Espacios vacíos en el periodo 3 (entre Mg y Al)
    for (let col = 3; col <= 12; col++) {
        const espacio = document.createElement('div');
        espacio.className = 'espacio-vacio';
        espacio.style.gridColumn = col;
        espacio.style.gridRow = 3;
        tablaPeriodica.appendChild(espacio);
    }
    
    // Espacio entre La y Hf en el periodo 6
    const espacioLantanidos = document.createElement('div');
    espacioLantanidos.className = 'espacio-vacio';
    espacioLantanidos.style.gridColumn = 4;
    espacioLantanidos.style.gridRow = 6;
    tablaPeriodica.appendChild(espacioLantanidos);
    
    // Espacio entre Ac y Rf en el periodo 7
    const espacioActinidos = document.createElement('div');
    espacioActinidos.className = 'espacio-vacio';
    espacioActinidos.style.gridColumn = 4;
    espacioActinidos.style.gridRow = 7;
    tablaPeriodica.appendChild(espacioActinidos);
}

/**
 * Función de búsqueda que permite encontrar elementos por nombre, símbolo o número
 */
function buscarElementos(termino) {
    busquedaActual = termino.toLowerCase().trim();
    const elementos = document.querySelectorAll('.elemento');
    let elementosEncontrados = 0;
    
    elementos.forEach(elemento => {
        const numero = elemento.dataset.numero;
        const nombre = elemento.dataset.nombre;
        const simbolo = elemento.dataset.simbolo;
        
        const coincide = 
            numero.includes(busquedaActual) ||
            nombre.includes(busquedaActual) ||
            simbolo.includes(busquedaActual);
        
        if (busquedaActual === '' || coincide) {
            elemento.classList.remove('oculto');
            if (busquedaActual !== '' && coincide) {
                elemento.classList.add('destacado');
                elementosEncontrados++;
            } else {
                elemento.classList.remove('destacado');
            }
        } else {
            elemento.classList.add('oculto');
            elemento.classList.remove('destacado');
        }
    });
    
    // Aplicar filtro de tipo si está activo
    if (filtroActual) {
        filtrarPorTipo(filtroActual);
    }
}

/**
 * Función de filtrado por tipo de elemento
 */
function filtrarPorTipo(tipo) {
    filtroActual = tipo;
    const elementos = document.querySelectorAll('.elemento');
    
    elementos.forEach(elemento => {
        const tipoElemento = elemento.dataset.tipo;
        
        if (tipo === '' || tipoElemento === tipo) {
            // Solo mostrar si no está oculto por búsqueda
            if (!busquedaActual || !elemento.classList.contains('oculto')) {
                elemento.classList.remove('oculto');
            }
        } else {
            elemento.classList.add('oculto');
            elemento.classList.remove('destacado');
        }
    });
}

/**
 * Limpia todos los filtros y búsquedas activas
 */
function limpiarFiltros() {
    busquedaActual = '';
    filtroActual = '';
    
    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach(elemento => {
        elemento.classList.remove('oculto', 'destacado');
    });
    
    document.getElementById('busqueda').value = '';
    document.getElementById('filtroTipo').value = '';
}

/**
 * Anima todos los elementos de la tabla periódica
 */
function animarTodosElementos() {
    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('brillar');
            setTimeout(() => el.classList.remove('brillar'), 800);
        }, index * 50);
    });
}

/**
 * Muestra mensaje informativo temporal
 */
function mostrarMensajeInfo(texto) {
    const mensaje = document.createElement('div');
    mensaje.className = 'info-hint';
    mensaje.innerHTML = texto;
    document.body.appendChild(mensaje);
    
    setTimeout(() => {
        mensaje.style.opacity = '0';
        mensaje.style.transition = 'opacity 1s ease';
        setTimeout(() => mensaje.remove(), 1000);
    }, 5000);
}

/**
 * Inicialización de la tabla periódica
 */
function inicializarTabla() {
    const tablaPeriodica = document.getElementById('tablaPeriodica');
    
    // Crear espacios vacíos primero para mantener la estructura
    crearEspaciosVacios();
    
    // Crear todos los elementos químicos
    for (const [numero, elemento] of Object.entries(elementosData)) {
        tablaPeriodica.appendChild(crearElemento(numero, elemento));
    }
    
    // Configurar event listeners para controles
    const inputBusqueda = document.getElementById('busqueda');
    const selectFiltro = document.getElementById('filtroTipo');
    const btnLimpiar = document.getElementById('limpiarFiltros');
    
    // Búsqueda en tiempo real
    inputBusqueda.addEventListener('input', (e) => {
        buscarElementos(e.target.value);
    });
    
    // Filtrado por tipo
    selectFiltro.addEventListener('change', (e) => {
        filtrarPorTipo(e.target.value);
    });
    
    // Botón limpiar filtros
    btnLimpiar.addEventListener('click', limpiarFiltros);
    
    // Botón modo quiz
    const btnQuiz = document.getElementById('modoQuiz');
    btnQuiz.addEventListener('click', () => {
        window.location.href = 'quiz.html';
    });
    
    // Event listeners para elementos de la leyenda
    const leyendaItems = document.querySelectorAll('.leyenda-item');
    leyendaItems.forEach(item => {
        item.addEventListener('click', () => {
            const tipo = item.dataset.tipo;
            selectFiltro.value = tipo;
            filtrarPorTipo(tipo);
        });
    });
    
    // Prevenir que el tooltip se quede visible
    document.addEventListener('mouseleave', ocultarTooltip);
    
    // Atajo de teclado para animar todos los elementos
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            animarTodosElementos();
        }
    });
    
    // Mostrar mensaje informativo
    mostrarMensajeInfo('💡 Presiona ESPACIO para animar todos los elementos • Usa los filtros para explorar por tipo');
}

// Inicializar la tabla cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarTabla);