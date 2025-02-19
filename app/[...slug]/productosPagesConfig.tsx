export type ProductItem = {
  alt: string;
  img: string;
  imgXs: string;
  title: string;
  description: string;
};

export type PageConfig = {
  title: string;
  children: any;
  allProductsButton?: boolean;
  productsListItems: ProductItem[];
  image?: string;
};

const ventilatioProducts: ProductItem[] = [
  {
    title: "Para uso doméstico",
    description:
      "Splits domésticos de pared y suelo. Sistemas Multisplits hasta 5x1. Consolas de doble flujo. Climatizadores Portátiles.",
    img: "/products/ventilation-1.png",
    imgXs: "/products/ventilation-1-xs.png",
    alt: "Split de uso doméstico",
  },

  {
    title: "Para uso comercial",
    description:
      "Conductos. Cassette. Split suelo-techo, techo y columna. Multisplits combinados. Twin Inverter. Centrífugas Inverter. Cortinas de aire.",
    img: "/products/ventilation-2.png",
    imgXs: "/products/ventilation-2-xs.png",
    alt: "Split de uso comercial",
  },

  {
    title: "Tratamiento de aire",
    description:
      "Recuperadores de calor. Purificadores de aire. Humidificadores y deshumidificadores. Desestratificadores de aire.",
    img: "/products/ventilation-3.png",
    imgXs: "/products/ventilation-3-xs.png",
    alt: "Tratamiento de aire",
  },

  {
    title: "Sistemas de caudal refrigerante",
    description:
      "Sistemas de caudal refrigerante variable. Equipos hidrónicos. Equipos Autónomos. Equipos Evaporativos.Fancoils.",
    img: "/products/ventilation-4.png",
    imgXs: "/products/ventilation-4-xs.png",
    alt: "Sistemas de caudal refrigerante",
  },

  {
    title: "Ventilación",
    description:
      "Bocas de extracción. Entradas de aire. Ventilación mecánica. Extractores. Conductos y accesorios.",
    img: "/products/ventilation-5.png",
    imgXs: "/products/ventilation-5-xs.png",
    alt: "Ventilación",
  },

  {
    title: "Conductos de aire y difusión",
    description:
      "Conductos de fibra de vidrio. Conductos de chapa de acero galvanizado. Rejillas de difusión.",
    img: "/products/ventilation-6.png",
    imgXs: "/products/ventilation-6-xs.png",
    alt: "Conductos de aire y difusión",
  },
];

const heatingProducts: ProductItem[] = [
  {
    title: "Caldera de gas",
    description:
      "Calderas murales bajo NOx, Calderas de condensación murales (25 kW a 42 kW), Calderas de condensación de pie.",
    img: "/products/heating-1.png",
    imgXs: "/products/heating-1-xs.png",
    alt: "Caldera de gas",
  },

  {
    title: "Válvulas",
    description:
      "Válvulas termostatizables y detentores (tubo cobre/multicapa/reticulado, tubo de hierro, cabezales y monotubo), no termostatizables y detentores.",
    img: "/products/heating-2.png",
    imgXs: "/products/heating-2-xs.png",
    alt: "Válvulas",
  },

  {
    title: "Calderas de gasóleo",
    description:
      "Calderas de condensación estancas, Calderas de condensación tiro forzado, Calderas estancas (grupos térmicos), Calderas tiro forzado.",
    img: "/products/heating-3.png",
    imgXs: "/products/heating-3-xs.png",
    alt: "Calderas de gasóleo",
  },

  {
    title: "Conductos de evacuación",
    description:
      "Conductos de polipropileno, Conductos de acero inoxidable, Conductos de evacuación biomasa.",
    img: "/products/heating-4.png",
    imgXs: "/products/heating-4-xs.png",
    alt: "Conductos de evacuación",
  },

  {
    title: "Radiadores",
    description:
      "Radiadores de aluminio, de panel de acero, tubulares de acero, hierro fundido, toalleros, eléctricos.",
    img: "/products/heating-5.png",
    imgXs: "/products/heating-5-xs.png",
    alt: "Radiadores",
  },

  {
    title: "Bombas circuladoras",
    description:
      "Bombas climatización electrónicas, para ACS electrónicas, para ACS no electrónicas, instalaciones energía solar, Accesorios.",
    img: "/products/heating-6.png",
    imgXs: "/products/heating-6-xs.png",
    alt: "Bombas circuladoras",
  },

  {
    title: "Suelo radiante",
    description:
      "Sistemas de suelo radiante, Banda y Juntas, Colectores INOX, Conectores de Tecnopolímero, Accesorios para colectores, Módulos de mezcla.",
    img: "/products/heating-7.png",
    imgXs: "/products/heating-7-xs.png",
    alt: "Suelo radiante",
  },

  {
    title: "Regulación y control",
    description:
      "Termostatos modulantes, Cronotermostatos, Termostatos para fancoil, Monitorización (salas técnicas y salas de calderas), Centralitas, Sistemas de regulación.",
    img: "/products/heating-8.png",
    imgXs: "/products/heating-8-xs.png",
    alt: "Regulación y control",
  },
];

const plumbingProducts: ProductItem[] = [
  {
    title: "Sifones",
    description:
      "Sifones para lavabo-bidé y sifones para fregadero: bote corto, con o sin válvula, curvo, botella, flexible, doble.",
    img: "/products/plumbing-1.png",
    imgXs: "/products/plumbing-1-xs.png",
    alt: "Sifones",
  },

  {
    title: "Válvulas",
    description:
      "Válvulas de tipo estándar (palanca, mariposa, manguera, mini, arqueta, compuerta goma...), heavy duty e inox.",
    img: "/products/plumbing-2.png",
    imgXs: "/products/plumbing-2-xs.png",
    alt: "Válvulas",
  },

  {
    title: "Soldaduras y selladores",
    description:
      "Productos y aditivos para roscar. Cintas. Sellantes y espumas. Herramientas y accesorios para soldar.",
    img: "/products/plumbing-3.png",
    imgXs: "/products/plumbing-3-xs.png",
    alt: "Soldaduras y selladores",
  },

  {
    title: "Contadores",
    description:
      "Contadores de agua domésticas y para grandes consumidores. Baterías para contadores. Registros y arquetas.",
    img: "/products/plumbing-4.png",
    imgXs: "/products/plumbing-4-xs.png",
    alt: "Contadores",
  },

  {
    title: "Latiguillos",
    description:
      "Latiguillos inox para agua: instalaciones sanitarias, calentadores, termos... Latiguillos flexibles y extensibles para calefacción.",
    img: "/products/plumbing-5.png",
    imgXs: "/products/plumbing-5-xs.png",
    alt: "Latiguillos",
  },

  {
    title: "Bombas agua fría",
    description:
      "Bombas de superficie: centrífugas, multicelulares, auto-aspirantes... Bombas sumergibles de aguas limpias o residuales.",
    img: "/products/plumbing-6.png",
    imgXs: "/products/plumbing-6-xs.png",
    alt: "Bombas agua fría",
  },

  {
    title: "Desagües",
    description:
      "Desagües para lavabo-bidé. Desagües fregadero. Desagües bañera. Desagües ducha. Desagües wc. Accesorios.",
    img: "/products/plumbing-7.png",
    imgXs: "/products/plumbing-7-xs.png",
    alt: "Desagües",
  },
];

const otherProducts: ProductItem[] = [
  {
    title: "Electricidad",
    description:
      "Ilimación, automatización y control, conductores eléctricos, mecanismos eléctricos, canalizaciones, material de instalación, regulación .",
    img: "/products/otherProducts-1.png",
    imgXs: "/products/otherProducts-1-xs.png",
    alt: "Electricidad",
  },
  {
    title: "Ferretería",
    description:
      "Herramientas, tornillos, espumas, seliconas, masillas, escaleras, taladros, material de protección, brocas, discos de corte.",
    img: "/products/otherProducts-2.png",
    imgXs: "/products/otherProducts-2-xs.png",
    alt: "Ferretería",
  },
  {
    title: "Pinturas",
    description:
      "Para interiores y exteriores, tratamientos de fachadas, intumescentes, esmaltes y todas las herramientas y materiales necesarios.",
    img: "/products/otherProducts-3.png",
    imgXs: "/products/otherProducts-3-xs.png",
    alt: "Pinturas",
  },
  {
    title: "Baños",
    description:
      "Muebles, platos de ducha, mamparas, todo tipo de revestimientos, azulejos y pavimentos, grifería, toalleros.",
    img: "/products/otherProducts-4.png",
    imgXs: "/products/otherProducts-4-xs.png",
    alt: "Baños",
  },
  {
    title: "Electrodomésticos",
    description: "Todo tipo de electrodomésticos para todo tipo de espacios.",
    img: "/products/otherProducts-5.png",
    imgXs: "/products/otherProducts-5-xs.png",
    alt: "Electrodomésticos",
  },
  {
    title: "Cocinas",
    description:
      "De todos los tamaños y del estilo que se desee. Realizamos la cocina de tus sueños de principio a fin.",
    img: "/products/otherProducts-6.png",
    imgXs: "/products/otherProducts-6-xs.png",
    alt: "Cocinas",
  },
  {
    title: "Revestimientos",
    description:
      "Amplitud de series de cerámica, laminados y madera en un sinfín de tonos, acabados y gráficas.",
    img: "/products/otherProducts-7.png",
    imgXs: "/products/otherProducts-7-xs.png",
    alt: "Revestimientos",
  },
  {
    title: "Suelos y techos",
    description:
      "Tarimas, friso PVC, friso madera, vinilicos, tarima de exterior e interior, pizarra natural y piedra.",
    img: "/products/otherProducts-8.png",
    imgXs: "/products/otherProducts-8-xs.png",
    alt: "Suelos y techos",
  },
  {
    title: "Saneamientos",
    description:
      "Tubos, arquetas, accesorios, canaletas, tuberías, servicio de agua potable, tratamientos de aguas.",
    img: "/products/otherProducts-9.png",
    imgXs: "/products/otherProducts-9-xs.png",
    alt: "Saneamientos",
  },
  {
    title: "Materiales de construcción",
    description:
      "Hierros, mallazo, cemento, tierra, grava, ladrillos, herramientas, maquinas de construcción, vigas, tejas, poliestireno.",
    img: "/products/otherProducts-10.png",
    imgXs: "/products/otherProducts-10-xs.png",
    alt: "Materiales de construcción",
  },
];

export const productPage: PageConfig = {
  title: "Nuestros productos",
  children: (
    <div>
      <p>
        Ofrecemos una amplia gama de productos y servicios diseñados para
        satisfacer todas tus necesidades de confort y bienestar en el hogar o en
        tu negocio.
      </p>
      <p>
        Nuestro compromiso es proporcionarte soluciones innovadoras y de alta
        calidad en áreas clave como ventilación y climatización, fontanería,
        calefacción y más.
      </p>
    </div>
  ),
  allProductsButton: true,
  productsListItems: [
    ...ventilatioProducts,
    ...heatingProducts,
    ...plumbingProducts,
    ...otherProducts,
  ],
};

export const ventilationPage: PageConfig = {
  title: "Ventilación y Climatización",
  children: (
    <div>
      <p>
        Ofrecemos una amplia selección de equipos de aire acondicionado y bombas
        de calor de última generación.
      </p>
      <p>
        Desde sistemas split y multisplit hasta unidades de conductos y sistemas
        de climatización centralizada, tenemos la solución adecuada para cada
        espacio, asegurando un confort térmico óptimo durante todo el año.
      </p>
    </div>
  ),
  productsListItems: ventilatioProducts,
  image: "/products/category-ventilation.png",
};

export const heatingPage: PageConfig = {
  title: "Calefacción",
  children: (
    <div>
      <p>
        Disponemos de una variedad de sistemas de calefacción que proporcionan
        confort en invierno.
      </p>
      <p>
        Esto incluye radiadores, suelos radiantes, calderas de condensación y
        sistemas de calefacción por aire. Nuestros expertos te ayudarán a elegir
        la opción más adecuada para mantener tu espacio cálido y acogedor.
      </p>
    </div>
  ),
  productsListItems: heatingProducts,
  image: "/products/category-heating.png",
};

export const plumbingPage: PageConfig = {
  title: "Fontanería",
  children: (
    <div>
      <p>
        Nuestros servicios de fontanería abarcan desde instalaciones básicas
        hasta proyectos más complejos.
      </p>
      <p>
        Nos encargamos de reparaciones, mantenimiento e instalaciones de
        tuberías, grifos, sanitarios, calentadores de agua y sistemas de
        filtración, garantizando un suministro de agua seguro y eficiente.
      </p>
    </div>
  ),
  productsListItems: plumbingProducts,
  image: "/products/category-plumbing.png",
};

export const otherProductsPage: PageConfig = {
  title: "Otros Productos",
  children: (
    <div>
      <p>
        Además de climatización, fontanería y calefacción, ofrecemos una
        variedad de servicios complementarios. Esto puede incluir la instalación
        de sistemas de energía renovable como paneles solares y bombas de calor
        geotérmicas, así como servicios de control de la calidad del aire
        interior (IAQ) para garantizar un ambiente saludable en tu propiedad.
      </p>
      <p>
        Nuestro equipo altamente capacitado está listo para ayudarte a encontrar
        las soluciones más eficientes y rentables para tus necesidades de
        climatización y confort en general.
      </p>
    </div>
  ),
  productsListItems: otherProducts,
  image: "/products/category-otherProducts.png",
};

export const pagesConfigurations: Record<string, PageConfig> = {
  productos: productPage,
  "productos/calefaccion": heatingPage,
  "productos/fontaneria": plumbingPage,
  "productos/ventilacion-y-climatizacion": ventilationPage,
  "productos/otros-productos": otherProductsPage,
};
