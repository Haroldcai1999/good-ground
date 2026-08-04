/* GOOD GROUND — curated dog-walking ground.
 *
 * Coordinates: OpenStreetMap (dog parks via Overpass, larger parks via Nominatim).
 * Rules: checked against the governing authority. Every place carries a `src`
 * key into SOURCES so any claim on a card is one click from its rule page.
 *
 * kind   : dogs  run | grass | trail | beach
 *          cats  walled | pocket | quiet
 * leash  : off   — off-leash on open ground, voice control
 *          area  — off-leash only inside a designated area within the park
 *          hours — off-leash only at posted hours
 *          on    — leashed
 * stars are derived from `leash` in index.html — do not store them here.
 */

window.LISTS = [
  { id: 'bay', name: 'Bay Area', center: [37.7749, -122.3], zoom: 10 },
  { id: 'nyc', name: 'New York', center: [40.7128, -73.95], zoom: 11 },
];

window.KINDS = {
  run:   { label: 'Dog run', color: '#e8743b' },
  grass: { label: 'Grass',   color: '#5aa96f' },
  trail: { label: 'Trail',   color: '#c8a24a' },
  beach: { label: 'Beach',   color: '#4b8fd4' },
  // cats
  walled: { label: 'Walled garden', color: '#8f7ad1' },
  pocket: { label: 'Pocket park',   color: '#d17a9e' },
  quiet:  { label: 'Quiet green',   color: '#5fa8a0' },
};

// Cats are always harnessed — the useful axis is how hard it is to bolt.
window.CONTAIN = {
  enclosed: { label: 'Enclosed',      stars: 3 },
  bounded:  { label: 'Part-enclosed', stars: 2 },
  open:     { label: 'Open ground',   stars: 1 },
};

window.LEASH = {
  off:   { label: 'Off-leash',      stars: 3 },
  area:  { label: 'Off-leash zone', stars: 2 },
  hours: { label: 'Off-leash hrs',  stars: 2 },
  on:    { label: 'Leashed',        stars: 1 },
};

window.SOURCES = {
  nycparks:   { name: 'NYC Parks',   url: 'https://www.nycgovparks.org/facilities/dogareas' },
  centralpk:  { name: 'Central Park Conservancy', url: 'https://www.centralparknyc.org/' },
  hudson:     { name: 'Hudson River Park', url: 'https://hudsonriverpark.org/' },
  sfrp:       { name: 'SF Rec & Park', url: 'https://sfrecpark.org/457/Dog-Play-Areas' },
  ebrpd:      { name: 'East Bay Regional Parks', url: 'https://www.ebparks.org/safety/dogs' },
  ptisabel:   { name: 'EBRPD — Point Isabel', url: 'https://www.ebparks.org/parks/point-isabel/rules-for-dogs' },
  goga:       { name: 'NPS — Golden Gate NRA', url: 'https://www.nps.gov/goga/planyourvisit/dog-friendly-areas.htm' },
  gateway:    { name: 'NPS — Gateway NRA', url: 'https://www.nps.gov/gate/planyourvisit/pets.htm' },
  nycrules:   { name: 'NYC Parks §1-04 (cats named)', url: 'https://www.nycgovparks.org/rules/section-1-04' },
  pops:       { name: 'Privately owned public space', url: '' },
  berkeley:   { name: 'City of Berkeley', url: 'https://berkeleyca.gov/community-recreation/parks-recreation/parks' },
  // No stable online rule page found — the card names this and tells you to read the signs.
  local:      { name: 'Check posted signs', url: '' },
};

window.PLACES = [
  /* ---------------------------------------------------------------- BAY */
  { species: 'dog', list: 'bay', kind: 'grass', leash: 'off', lat: 37.89895, lon: -122.32481,
    name: 'Point Isabel Regional Shoreline', hood: 'Richmond', src: 'ptisabel',
    url: 'https://www.ebparks.org/parks/point-isabel/rules-for-dogs',
    highlight: 'Off-leash throughout — 23 acres, plus 20 more at North Point Isabel.',
    note: 'The big one, and over a million visits a year. Leash up in the parking lots and on the streets; everywhere else is yours.' },

  { species: 'dog', list: 'bay', kind: 'beach', leash: 'off', lat: 37.71910, lon: -122.50330,
    name: 'Fort Funston', hood: 'San Francisco', src: 'goga',
    highlight: 'Voice control throughout, except the 12-acre closure in the northwest.',
    note: 'Clifftop chaparral over the Pacific, hang gliders overhead. The reason people move here with a dog.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.87340, lon: -122.27468,
    name: 'Ohlone Dog Park', hood: 'Berkeley', src: 'berkeley',
    url: 'https://berkeleyca.gov/community-recreation/parks-recreation/parks/ohlone-park',
    highlight: 'Opened 1979 — widely credited as the first official dog park in the country.',
    note: 'Small, scruffy and historic, a strip of Ohlone Park above the BART line.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'area', lat: 37.87323, lon: -122.31993,
    name: 'César Chávez Park', hood: 'Berkeley', src: 'local',
    highlight: 'A marked off-leash zone on the upper meadow.',
    note: 'A whole grassy headland on the Berkeley waterfront. Wind, kites, and the entire skyline across the water.' },

  { species: 'dog', list: 'bay', kind: 'beach', leash: 'area', lat: 37.80460, lon: -122.46661,
    name: 'Crissy Field — East Beach', hood: 'San Francisco', src: 'goga',
    highlight: 'Voice control in most of it; the wildlife protection area is leashed.',
    note: 'Flat sand under the bridge. Best on a clear evening, worst when the whole city has the same idea.' },

  { species: 'dog', list: 'bay', kind: 'beach', leash: 'area', lat: 37.75615, lon: -122.51019,
    name: 'Ocean Beach', hood: 'San Francisco', src: 'goga',
    highlight: 'Off-leash along much of the strand — the snowy plover area is regulated separately.',
    note: 'Miles of it, and you can walk until the fog closes in behind you. Check the posted plover boundary.' },

  { species: 'dog', list: 'bay', kind: 'beach', leash: 'off', lat: 37.83055, lon: -122.53646,
    name: 'Rodeo Beach', hood: 'Marin Headlands', src: 'goga',
    highlight: 'Voice control on the beach, with a lagoon behind it.',
    note: 'Pebbled cove on the ocean side of the headlands. Cold, empty, worth the drive over the hill.' },

  { species: 'dog', list: 'bay', kind: 'beach', leash: 'off', lat: 37.89025, lon: -122.32567,
    name: 'Albany Bulb', hood: 'Albany', src: 'local',
    highlight: 'Long-standing off-leash custom on the spit — no fences anywhere.',
    note: 'A landfill peninsula turned outlaw sculpture park. Rubble, driftwood, murals, dogs everywhere.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'area', lat: 37.74344, lon: -122.41347,
    name: 'Bernal Heights Park', hood: 'San Francisco', src: 'sfrp',
    url: 'https://sfrecpark.org/460/Bernal-Heights-Dog-Play-Areas',
    highlight: 'Designated Dog Play Area over the old quarry.',
    note: 'A bald grassy hill with a 360° view. Everyone up there knows each other and most of the dogs by name.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'area', lat: 37.79118, lon: -122.43767,
    name: 'Alta Plaza Park', hood: 'San Francisco', src: 'sfrp',
    url: 'https://sfrecpark.org/Facilities/Facility/Details/Alta-Plaza-Dog-Play-Areas-3',
    highlight: 'Dog Play Area in the southeast corner — grass and paved path.',
    note: 'Terraced lawns stepping down toward the bay. Very Pacific Heights, in the best and worst senses.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'area', lat: 37.79146, lon: -122.42786,
    name: 'Lafayette Park', hood: 'San Francisco', src: 'sfrp',
    url: 'https://sfrecpark.org/670/Lafayette-Park-Dog-Play-Area',
    highlight: 'Designated Dog Play Area near the top of the hill.',
    note: 'Steep, sunny and green, with a view spanning the Golden Gate and most of the bay.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'area', lat: 37.75972, lon: -122.42713,
    name: 'Mission Dolores Park', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Two designated Dog Play Areas — the rest of the park is leashed.',
    note: 'A real off-leash zone exists here. The rest, on a sunny Saturday, is a picnic minefield.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'area', lat: 37.73609, lon: -122.47860,
    name: 'Stern Grove', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Designated Dog Play Areas in the grove and at Pine Lake.',
    note: 'Eucalyptus canyon with a meadow at the bottom. Cool and quiet when the rest of the city bakes.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'area', lat: 37.76937, lon: -122.48218,
    name: 'Golden Gate Park', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Four designated Dog Play Areas; leashed across the rest of the park.',
    note: 'Enormous, and the leash rule genuinely matters here — bison, ducks and a lot of traffic.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.77102, lon: -122.49953,
    name: 'Golden Gate Park Dog Training Area', hood: 'San Francisco', src: 'sfrp',
    url: 'https://sfrecpark.org/Facilities/Facility/Details/GGP-Dog-Training-Area-13',
    highlight: 'The largest of the park’s dog areas — open meadow, no fence.',
    note: 'The western end near Ocean Beach. Room to actually throw something.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.76554, lon: -122.43981,
    name: 'Corona Heights Dog Play Area', hood: 'San Francisco', src: 'sfrp',
    url: 'https://sfrecpark.org/Facilities/Facility/Details/Corona-Heights-Dog-Play-Area-5',
    highlight: 'Fenced, woodchip surface.',
    note: 'Tucked under the red chert outcrop. Climb the hill afterwards for the view.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.74043, lon: -122.43539,
    name: 'Walter Haas Dog Play Area', hood: 'San Francisco', src: 'sfrp',
    url: 'https://sfrecpark.org/Facilities/Facility/Details/Walter-Haas-Dog-Play-Areas-28',
    highlight: 'Hillside site with one of the better views from a dog area.',
    note: 'Diamond Heights, looking east over the whole city.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.74680, lon: -122.43908,
    name: 'Upper Douglass Dog Play Area', hood: 'San Francisco', src: 'sfrp',
    url: 'https://sfrecpark.org/Facilities/Facility/Details/Upper-Douglass-Dog-Play-Area-7',
    highlight: 'Big and sloped, rebuilt in recent years.',
    note: 'A Noe Valley institution, busy from seven in the morning.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.76873, lon: -122.44278,
    name: 'Buena Vista Dog Play Area', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Shaded by the oldest park trees in the city.',
    note: 'Steep, wooded and a little wild. Good on a hot afternoon.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.77029, lon: -122.42199,
    name: 'SoMa West Dog Play Area', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Covered — it stays usable through the rain.',
    note: 'Under the freeway, which sounds bad and works fine. A genuinely good use of dead space.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.77069, lon: -122.39915,
    name: 'Berry Street Dog Park', hood: 'Mission Bay, SF', src: 'sfrp',
    url: 'https://sfrecpark.org/Facilities/Facility/Details/Berry-Street-Dog-Park-452',
    highlight: 'Fenced and lit, open 6am–10pm.',
    note: 'Turf, fences and condos. Convenient rather than beautiful, but the lighting makes winter workable.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.78594, lon: -122.39041,
    name: 'Rincon Hill Dog Park', hood: 'San Francisco', src: 'local',
    highlight: 'Small fenced yard wedged between the towers.',
    note: 'Not much ground, but it is the only thing for blocks. Small dogs do best here.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.71945, lon: -122.41878,
    name: 'McLaren Park Dog Play Area', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Two Dog Play Areas inside the city’s second-largest park.',
    note: 'Rolling, half-wild, and nobody goes. The most underrated park in San Francisco.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'on', lat: 37.78384, lon: -122.50675,
    name: 'Lands End', hood: 'San Francisco', src: 'goga',
    highlight: 'Leashed throughout — cliffs, and the trail is narrow.',
    note: 'Cypress path along the bluffs to the ruins. Leashed, but still the best walk in the city.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'off', lat: 37.89585, lon: -122.24454,
    name: 'Tilden Regional Park', hood: 'Berkeley Hills', src: 'ebrpd',
    highlight: 'Off-leash on undeveloped trails; leash within 200ft of trailheads and lots.',
    note: 'Two thousand acres of ridge and creek. No dogs at the Lake Anza swim beach.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'off', lat: 37.80334, lon: -122.17649,
    name: 'Reinhardt Redwood Regional Park', hood: 'Oakland', src: 'ebrpd',
    highlight: 'Off-leash on undeveloped trails; leash within 200ft of trailheads.',
    note: 'Second-growth redwoods twenty minutes from downtown. Soft ground, deep shade, cool all summer.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'off', lat: 37.85328, lon: -122.19967,
    name: 'Sibley Volcanic Regional Preserve', hood: 'Oakland', src: 'ebrpd',
    highlight: 'Off-leash on undeveloped trails; exposed and hot in summer.',
    note: 'An extinct volcano with labyrinths laid out in the old quarry pits. Bring water — there is none up there.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'off', lat: 37.93367, lon: -122.14345,
    name: 'Briones Regional Park', hood: 'Lafayette', src: 'ebrpd',
    highlight: 'Off-leash on trails, but leash up around the cattle.',
    note: 'Open grassland ridges. Absurdly green in spring, gold and shadeless by June.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'off', lat: 37.93931, lon: -122.28818,
    name: 'Wildcat Canyon Regional Park', hood: 'Richmond', src: 'ebrpd',
    highlight: 'Off-leash on the fire roads; grazing cattle in places.',
    note: 'The quiet back side of the Berkeley hills. Wide roads, long views, few people.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'on', lat: 37.73459, lon: -122.10087,
    name: 'Lake Chabot Regional Park', hood: 'Castro Valley', src: 'ebrpd',
    highlight: 'Leashed on the paved shoreline loop; off-leash on undeveloped trails beyond.',
    note: 'Easy flat miles around the reservoir. No dogs in the water.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'off', lat: 37.70819, lon: -122.19763,
    name: 'Oyster Bay Regional Shoreline', hood: 'San Leandro', src: 'ebrpd',
    highlight: 'Off-leash on the hill; leashed in the lot and picnic areas.',
    note: 'A grassy mound built on old fill with water on three sides. Bring a windbreaker, always.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'on', lat: 37.80320, lon: -122.32418,
    name: 'Middle Harbor Shoreline Park', hood: 'Oakland', src: 'local',
    highlight: 'Leashed throughout — it is a working port shoreline.',
    note: 'Lawn and sand facing the container cranes. Strange and genuinely lovely at sunset.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'on', lat: 37.80462, lon: -122.25625,
    name: 'Lake Merritt', hood: 'Oakland', src: 'local',
    highlight: 'Leashed on the 3.4-mile loop; a fenced run at the north end.',
    note: 'Crowded and leashed, but it is the walk everyone in Oakland actually does.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.81058, lon: -122.18746,
    name: 'Joaquin Miller Dog Park', hood: 'Oakland', src: 'local',
    highlight: 'Separate large and small yards under the redwoods.',
    note: 'Muddy all winter, which is either the point or the problem depending on your car.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.82235, lon: -122.24583,
    name: 'Linda Off Leash Dog Park', hood: 'Piedmont', src: 'local',
    highlight: 'Shaded canyon strip, fenced.',
    note: 'The same regulars every morning at eight. Newcomers get adopted quickly.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.82788, lon: -122.23850,
    name: 'Dracena Dog Park', hood: 'Piedmont', src: 'local',
    highlight: 'Small and tree-covered — calm by design.',
    note: 'Good for a dog who finds Point Isabel overwhelming.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.76755, lon: -122.27318,
    name: 'Alameda Dog Park', hood: 'Alameda', src: 'local',
    highlight: 'Separate large and small yards.',
    note: 'Out on the old base side of the island, flat and open to the wind.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.84051, lon: -122.01939,
    name: 'Hap Magee Ranch Dog Park', hood: 'Danville', src: 'local',
    highlight: 'Two fenced yards on oak-shaded ranch land.',
    note: 'The nicest suburban option in the East Bay, and it is not close.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.68265, lon: -121.91592,
    name: 'Muirwood Dog Park', hood: 'Pleasanton', src: 'local',
    highlight: 'Well drained — one of the few that survives February.',
    note: 'Unremarkable and reliable, which is most of what you want in winter.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.93872, lon: -122.52893,
    name: 'Piper Park Dog Park', hood: 'Larkspur', src: 'local',
    highlight: 'Flat fenced field beside Corte Madera Creek.',
    note: 'Mount Tam in the background the whole time.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.58281, lon: -122.48651,
    name: 'Pacifica Dog Park', hood: 'Pacifica', src: 'local',
    highlight: 'Fenced, and foggy more often than not.',
    note: 'Pair it with a leashed walk down to the beach when the sun does show.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.55610, lon: -122.26043,
    name: 'Foster City Dog Park', hood: 'Foster City', src: 'local',
    highlight: 'Lagoon-side, and sunny when the city is socked in.',
    note: 'A reliable escape from the fog belt, twenty minutes down the peninsula.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.54244, lon: -122.23088,
    name: 'Shore Dogs Park', hood: 'Redwood Shores', src: 'local',
    url: 'https://www.redwoodcity.org/departments/parks-recreation-and-community-services/parks/dog-parks/shore-dogs-dog-park',
    highlight: 'Off-leash and fenced, right on the Bay Trail.',
    note: 'Small, but the light out on the shoreline is very good in the evening.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'on', lat: 37.58795, lon: -122.32726,
    name: 'Coyote Point Recreation Area', hood: 'San Mateo', src: 'local',
    highlight: 'Leashed on the shoreline trails; a fenced run near the entrance.',
    note: 'Eucalyptus bluff over the bay, with planes banking overhead into SFO.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.41983, lon: -122.11390,
    name: 'Mitchell Park Dog Park', hood: 'Palo Alto', src: 'local',
    highlight: 'Long fenced run, separate small-dog side.',
    note: 'Busy, and the default mid-peninsula meet-up.' },

  { species: 'dog', list: 'bay', kind: 'trail', leash: 'on', lat: 37.43375, lon: -122.09978,
    name: 'Palo Alto Baylands', hood: 'Palo Alto', src: 'local',
    highlight: 'Leashed throughout — it is a protected marsh.',
    note: 'Boardwalk and levee through the salt marsh. Flat, huge, and full of birds at dusk.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'on', lat: 37.41131, lon: -122.07816,
    name: 'Shoreline at Mountain View', hood: 'Mountain View', src: 'local',
    highlight: 'Leashed throughout, but you can walk for hours.',
    note: 'Wide open bay-fill with a lake in the middle and burrowing owls in the grass.' },

  { species: 'dog', list: 'bay', kind: 'grass', leash: 'on', lat: 37.41259, lon: -121.99694,
    name: 'Sunnyvale Baylands Park', hood: 'Sunnyvale', src: 'local',
    highlight: 'Leashed; mowed lawns fading into protected marsh.',
    note: 'Quiet on weekday mornings, overrun with birthday parties on Saturdays.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.27184, lon: -121.94948,
    name: 'Los Gatos Creek County Dog Park', hood: 'Campbell', src: 'local',
    highlight: 'Large and small yards beside the percolation ponds.',
    note: 'On the creek trail, so you can make a real walk of it either side.' },

  { species: 'dog', list: 'bay', kind: 'run', leash: 'area', lat: 37.23972, lon: -121.79376,
    name: 'Miyuki Dog Park', hood: 'San Jose', src: 'local',
    highlight: 'Shaded, with a separate small-dog side.',
    note: 'Tidy and calm, down in Almaden.' },

  /* ---------------------------------------------------------------- NYC */
  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'hours', lat: 40.66568, lon: -73.97287,
    name: 'Long Meadow, Prospect Park', hood: 'Brooklyn', src: 'nycparks',
    highlight: 'Off-leash 5–9am and 9pm–1am. No fences, and a mile of grass.',
    note: 'The best hour in New York. A hundred dogs, and everyone home before the coffee is cold.' },

  { species: 'dog', list: 'nyc', kind: 'beach', leash: 'hours', lat: 40.66254, lon: -73.97189,
    name: 'Dog Beach, Prospect Park', hood: 'Brooklyn', src: 'nycparks',
    highlight: 'A purpose-built wading pool — one of the few NYC waters dogs may enter.',
    note: 'At the head of the Long Meadow, and it runs during the same off-leash hours.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'hours', lat: 40.79690, lon: -73.95891,
    name: 'Great Hill, Central Park', hood: 'Manhattan', src: 'centralpk',
    highlight: 'Off-leash 6–9am and 9pm–1am. Children’s Glade stays leashed.',
    note: 'The north end, and far calmer than anything below 96th Street.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'hours', lat: 40.79013, lon: -73.95570,
    name: 'East Meadow, Central Park', hood: 'Manhattan', src: 'centralpk',
    highlight: 'Off-leash 6–9am and 9pm–1am — but the East Meadow Oval is leashed at all times.',
    note: 'Wide flat grass near the Harlem Meer. Know where the Oval boundary runs before you unclip.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'on', lat: 40.77687, lon: -73.96629,
    name: 'Cedar Hill, Central Park', hood: 'Manhattan', src: 'centralpk',
    highlight: 'Leashed at all times — one of Central Park’s named always-leashed areas.',
    note: 'A beautiful sloping lawn under old trees, and a common place to get this wrong. Walk it on the lead.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'hours', lat: 40.69053, lon: -73.97422,
    name: 'Fort Greene Park', hood: 'Brooklyn', src: 'nycparks',
    highlight: 'Off-leash on the lawns until 9am, plus a fenced run.',
    note: 'Hills, and the Prison Ship Martyrs monument on top. Steep enough to tire anything out.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'hours', lat: 40.80688, lon: -73.96866,
    name: 'Riverside Park', hood: 'Manhattan', src: 'nycparks',
    highlight: 'Off-leash hours plus three separate dog runs along four miles.',
    note: 'The whole Hudson edge of the Upper West Side. Sunset side of the island.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.72649, lon: -73.98117,
    name: 'Tompkins Square Dog Run', hood: 'East Village', src: 'nycparks',
    highlight: 'Fenced. Opened 1990 as the city’s first legal off-leash run.',
    note: 'Still the loudest and most opinionated crowd in New York, human and otherwise.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.73066, lon: -73.99845,
    name: 'Washington Square Park Dog Run', hood: 'Greenwich Village', src: 'nycparks',
    url: 'https://www.nycgovparks.org/parks/washington-square-park/facilities/dogareas',
    highlight: 'Fenced, gravel surface, with a permanent audience on the rail.',
    note: 'Two runs side by side and a piano going somewhere behind you.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.73019, lon: -73.99754,
    name: 'Robin Kovary Run for Small Dogs', hood: 'Greenwich Village', src: 'nycparks',
    highlight: 'Small dogs only — the quieter half of Washington Square.',
    note: 'Named for a well-known city dog trainer. Benches, gravel, gossip.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.70143, lon: -73.99426,
    name: 'Hillside Dog Park', hood: 'Brooklyn Heights', src: 'nycparks',
    url: 'https://www.nycgovparks.org/parks/hillside-park/',
    highlight: 'Open 6am–1am — one of the latest in the city.',
    note: 'Terraced under the BQE with the bridge right there. Big, and it never really empties.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.69274, lon: -74.00003,
    name: 'Brooklyn Bridge Park — Pier 6 Dog Run', hood: 'Brooklyn', src: 'nycparks',
    highlight: 'Fenced, with separate large and small yards.',
    note: 'Harbor wind and the full skyline. Exposed — miserable in January, perfect in May.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.74045, lon: -74.01060,
    name: 'Gansevoort Peninsula Dog Park', hood: 'Manhattan', src: 'hudson',
    url: 'https://hudsonriverpark.org/activities/gansevoort-peninsula-dog-park/',
    highlight: 'Open 6am–1am. The newest run on the Hudson, opened 2023.',
    note: 'Out on the old pier, with sand and salt air and a beach alongside it.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.74870, lon: -74.00747,
    name: 'Chelsea Waterside Dog Park', hood: 'Chelsea', src: 'hudson',
    url: 'https://www.hudsonriverpark.org/explore-the-park/activities/chelsea-waterside-dog-park',
    highlight: 'Rebuilt with rubber surfacing, real shade and a dog shower.',
    note: 'Genuinely one of the best-designed runs in the city. It shows.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.71202, lon: -74.01693,
    name: 'Sirius Dog Run', hood: 'Battery Park City', src: 'nycparks',
    highlight: 'Named for a Port Authority dog lost on 9/11.',
    note: 'Quiet, well kept, and right on the water. Rarely crowded.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.75373, lon: -73.96357,
    name: 'Peter Detmold Park Dog Run', hood: 'Turtle Bay', src: 'nycparks',
    highlight: 'One of the largest runs in Manhattan.',
    note: 'Hidden below street level by the East River. Easy to walk past for years without noticing.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.76024, lon: -73.95682,
    name: 'Andrew Haswell Green Dog Park', hood: 'Sutton Place', src: 'nycparks',
    highlight: 'Cantilevered out over the FDR Drive.',
    note: 'The Queensboro Bridge directly overhead. Loud, and worth it for the view.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.78214, lon: -73.97381,
    name: 'Bull Moose Dog Run', hood: 'Upper West Side', src: 'nycparks',
    highlight: 'Shaded and gravelly, beside the Museum of Natural History.',
    note: 'Named for Theodore Roosevelt, whose park it sits in. Always busy.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.78120, lon: -73.98660,
    name: 'West 72nd Street Dog Run', hood: 'Riverside Park', src: 'nycparks',
    url: 'https://www.nycgovparks.org/parks/riverside-park/facilities/dogareas',
    highlight: 'Fenced, long and narrow, above the Hudson.',
    note: 'One of Riverside Park’s three runs, and the best placed for a sunset.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.80438, lon: -73.95915,
    name: 'Morningside Dog Run', hood: 'Morningside Heights', src: 'nycparks',
    highlight: 'At the base of the cliff, below the retaining wall.',
    note: 'Steep steps down to get in. Worth it, and it keeps the crowds thin.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.76349, lon: -74.00041,
    name: 'Pier 84 Dog Park', hood: 'Hell’s Kitchen', src: 'hudson',
    url: 'https://hudsonriverpark.org/activities/pier-84-dog-park/',
    highlight: 'Out over the Hudson, with shade and water on site.',
    note: 'Ferry horns and river light. The best of the Midtown options by some distance.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.71543, lon: -73.93612,
    name: 'Cooper Park Dog Run', hood: 'East Williamsburg', src: 'nycparks',
    highlight: 'Open 6am–1am. Large, flat and unfussy.',
    note: 'The East Williamsburg standby, and big enough for a real game of fetch.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.64908, lon: -73.97133,
    name: 'Kensington Dog Run', hood: 'Brooklyn', src: 'nycparks',
    url: 'https://www.kensingtondogrun.com',
    highlight: 'Fenced, run by a neighbourhood volunteer association.',
    note: 'On the edge of Green-Wood. Small, and friendlier for it.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.61778, lon: -74.02084,
    name: 'Dyker Beach Park Dog Run', hood: 'Brooklyn', src: 'nycparks',
    url: 'https://www.nycgovparks.org/parks/dyker-beach-park/facilities/dogareas',
    highlight: 'Fenced, inside a large open park.',
    note: 'Deep south Brooklyn, with the Verrazzano at the end of the street.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.57781, lon: -73.94181,
    name: 'Manhattan Beach Dog Run', hood: 'Brooklyn', src: 'nycparks',
    url: 'https://www.nycgovparks.org/parks/manhattan-beach-park/facilities/dogareas',
    highlight: 'Fenced run, open 9am–9pm. The beach and promenade bar dogs from late May to Oct 1.',
    note: 'The run works year-round. For the sand, come back after the season closes.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.71039, lon: -73.83674,
    name: 'Forest Park Barking Lot', hood: 'Queens', src: 'nycparks',
    highlight: 'Two fenced sections — under 30 lbs, and 30 lbs and over.',
    note: 'A fenced acre inside real woods, kept up by volunteers. The best run in Queens, not close.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.75085, lon: -73.89687,
    name: 'Jackson Heights Canine Wonderland', hood: 'Queens', src: 'nycparks',
    url: 'https://jhbg.org/programs/jh-crew',
    highlight: 'Community-built and immaculate, in Travers Park.',
    note: 'Small, but a genuine piece of neighbourhood organising. Worth seeing for that alone.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.73386, lon: -73.84519,
    name: 'Underbridge Dog Run', hood: 'Rego Park', src: 'nycparks',
    url: 'https://www.nycgovparks.org/parks/underbridge-dog-run',
    highlight: 'Sheltered under the LIE, so it stays dry.',
    note: 'Bigger than it looks from the street, and it holds up in bad weather.' },

  { species: 'dog', list: 'nyc', kind: 'run', leash: 'area', lat: 40.50039, lon: -74.24999,
    name: 'Conference House Park Dog Run', hood: 'Staten Island', src: 'nycparks',
    url: 'https://www.nycgovparks.org/parks/conference-house-park/facilities/dogareas',
    highlight: 'The southernmost dog run in New York State.',
    note: 'Nearly empty most days, with the water right there and New Jersey across it.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'hours', lat: 40.77883, lon: -73.92266,
    name: 'Astoria Park', hood: 'Queens', src: 'nycparks',
    highlight: 'Off-leash hours on the lawns, plus a run near the pool.',
    note: 'Lawns between two bridges, and the best skyline view in the outer boroughs.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'hours', lat: 40.77517, lon: -73.94353,
    name: 'Carl Schurz Park', hood: 'Yorkville', src: 'nycparks',
    highlight: 'Off-leash hours on the lawns, plus two runs.',
    note: 'The East River promenade, running right past Gracie Mansion.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'on', lat: 40.79394, lon: -73.91761,
    name: 'Randall’s Island Park', hood: 'Manhattan', src: 'nycparks',
    highlight: 'Leashed — and dogs are barred from the ball fields, which is most of it.',
    note: 'Saltmarsh shoreline and enormous skies. Almost nobody there midweek.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'on', lat: 40.71411, lon: -73.96827,
    name: 'Domino Park', hood: 'Williamsburg', src: 'local',
    highlight: 'Leashed on the waterfront strip; a small fenced run at the north end.',
    note: 'Narrow, busy, and the view does a lot of the work.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'on', lat: 40.72986, lon: -73.96073,
    name: 'WNYC Transmitter Park', hood: 'Greenpoint', src: 'nycparks',
    highlight: 'Leashed. Lawn, pier and an unobstructed western view.',
    note: 'The skyline dead ahead at sunset, which is the entire reason to come.' },

  { species: 'dog', list: 'nyc', kind: 'grass', leash: 'on', lat: 40.74609, lon: -74.01001,
    name: 'Hudson River Park', hood: 'Manhattan', src: 'hudson',
    highlight: 'Leashed on the esplanade, linking five separate dog runs.',
    note: 'Four miles of waterfront. Use it to string the runs together into one long walk.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'hours', lat: 40.89708, lon: -73.88658,
    name: 'Van Cortlandt Park', hood: 'Bronx', src: 'nycparks',
    highlight: 'Off-leash hours on the Parade Ground; leashed on the forest trails.',
    note: 'A thousand acres — ridge trails, old croton aqueduct, and the biggest flat field in the city.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'hours', lat: 40.87227, lon: -73.92543,
    name: 'Inwood Hill Park', hood: 'Manhattan', src: 'nycparks',
    highlight: 'Off-leash hours on the lower fields; leashed in the forest.',
    note: 'The last old-growth woods on the island. Steep, and it stops feeling like the city fast.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'on', lat: 40.85255, lon: -73.82794,
    name: 'Pelham Bay Park', hood: 'Bronx', src: 'nycparks',
    highlight: 'Large posted dogs-on-leash areas — check the park map before unclipping.',
    note: 'Three times the size of Central Park. Woods, meadow, and Orchard Beach at the far end.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'hours', lat: 40.84208, lon: -73.92686,
    name: 'Highbridge Park', hood: 'Washington Heights', src: 'nycparks',
    highlight: 'Off-leash hours, plus a run at the north end.',
    note: 'Cliffside woods, with the restored aqueduct bridge across to the Bronx.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'hours', lat: 40.75032, lon: -73.74212,
    name: 'Alley Pond Park', hood: 'Queens', src: 'nycparks',
    highlight: 'Off-leash hours in the open areas; leashed in the wetlands.',
    note: 'Kettle ponds, salt marsh, and the Queens Giant — the oldest living thing in the city.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'hours', lat: 40.73516, lon: -73.76747,
    name: 'Cunningham Park', hood: 'Queens', src: 'nycparks',
    highlight: 'Off-leash hours, plus a fenced run.',
    note: 'Big, wooded and easy. Wide paths that suit a long slow loop.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'hours', lat: 40.74592, lon: -73.80876,
    name: 'Kissena Park', hood: 'Queens', src: 'nycparks',
    highlight: 'Off-leash hours around the lake; a historic grove at the centre.',
    note: 'A proper early-morning crowd, and one of the more diverse parks in the city.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'on', lat: 40.58325, lon: -74.12309,
    name: 'High Rock Park', hood: 'Staten Island', src: 'nycparks',
    highlight: 'Leashed — protected woodland at the centre of the Greenbelt.',
    note: 'Real hiking, thirty minutes from the ferry. Steep, rooty, and empty.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'hours', lat: 40.61871, lon: -74.11275,
    name: 'Clove Lakes Park', hood: 'Staten Island', src: 'nycparks',
    highlight: 'Off-leash hours, and shade nearly the whole way.',
    note: 'A chain of ponds under very big trees. The best walk on the north shore.' },

  { species: 'dog', list: 'nyc', kind: 'trail', leash: 'on', lat: 40.60558, lon: -73.93420,
    name: 'Marine Park Salt Marsh', hood: 'Brooklyn', src: 'nycparks',
    highlight: 'Leashed — protected marsh, and the birds are the point.',
    note: 'A flat loop through the grasslands on Jamaica Bay. Windswept and wide open.' },

  { species: 'dog', list: 'nyc', kind: 'beach', leash: 'on', lat: 40.56145, lon: -73.89552,
    name: 'Fort Tilden', hood: 'Rockaway', src: 'gateway',
    highlight: 'Federal land, not NYC Parks — leashed, with seasonal beach closures.',
    note: 'Dunes and derelict gun batteries. Check the Gateway pet rules for the current season before you go.' },
  /* =============================================================== CATS ==
   * NYC Parks §1-04 names cats explicitly: licensed dogs AND cats on a leash
   * of six feet or less may be brought into a park. There is no such thing as
   * a designated cat space, so `contain` is an assessment of how hard a
   * spooked cat would find it to bolt — walls, gates and sightlines — not an
   * official rating. Confirm pets are welcome before you go: several of these
   * are privately run and set their own rules.
   * ==================================================================== */

  { species: 'cat', list: 'nyc', kind: 'walled', contain: 'enclosed', lat: 40.79368, lon: -73.95228,
    name: 'Conservatory Garden, Central Park', hood: 'Manhattan', src: 'centralpk',
    highlight: 'Six walled acres behind a wrought-iron gate. Leashed pets allowed; dogs are never off-leash here.',
    note: 'The formal garden at 105th Street, and the quietest corner of the park. Benches, hedges, almost no through traffic.' },

  { species: 'cat', list: 'nyc', kind: 'walled', contain: 'enclosed', lat: 40.77982, lon: -73.96996,
    name: 'Shakespeare Garden, Central Park', hood: 'Manhattan', src: 'centralpk',
    highlight: 'Hedged and terraced on four levels. On Central Park’s always-leashed list, so no loose dogs ever.',
    note: 'A tucked-away climb between the Delacorte and the Swedish Cottage. Dense planting and plenty of places to hide.' },

  { species: 'cat', list: 'nyc', kind: 'pocket', contain: 'enclosed', lat: 40.76034, lon: -73.97507,
    name: 'Paley Park', hood: 'Midtown', src: 'pops',
    highlight: 'Three walls, one entrance, and a waterfall loud enough to mask the street.',
    note: 'The original pocket park, 1967. Forty feet wide, honey locusts overhead. Check at the gate — it is privately run.' },

  { species: 'cat', list: 'nyc', kind: 'pocket', contain: 'enclosed', lat: 40.75626, lon: -73.96929,
    name: 'Greenacre Park', hood: 'Midtown East', src: 'pops',
    highlight: 'Enclosed on three sides with a 25-foot waterfall and a single gated entrance.',
    note: 'Quieter than Paley and rarely full. Tiered, with a covered section for rain.' },

  { species: 'cat', list: 'nyc', kind: 'quiet', contain: 'bounded', lat: 40.74884, lon: -73.97090,
    name: 'Tudor City Greens', hood: 'Murray Hill', src: 'pops',
    highlight: 'Fenced private gardens open to the public, raised above the traffic on 42nd Street.',
    note: 'Two small parks either side of the street, residential and calm. Almost nobody passes through who does not live there.' },

  { species: 'cat', list: 'nyc', kind: 'walled', contain: 'enclosed', lat: 40.73445, lon: -73.99948,
    name: 'Jefferson Market Garden', hood: 'Greenwich Village', src: 'local',
    highlight: 'Gated garden on the old jail site — one entrance, seasonal opening hours.',
    note: 'Volunteer-run and immaculate. Small enough to keep a harnessed cat in sight the whole time.' },

  { species: 'cat', list: 'nyc', kind: 'walled', contain: 'enclosed', lat: 40.72217, lon: -73.99481,
    name: 'Elizabeth Street Garden', hood: 'Nolita', src: 'local',
    highlight: 'Walled sculpture garden, gated, with statuary to hide behind.',
    note: 'A strange and lovely lot between Prince and Spring. Its future has been contested for years — check it is open.' },

  { species: 'cat', list: 'nyc', kind: 'walled', contain: 'enclosed', lat: 40.72465, lon: -73.98259,
    name: 'The Creative Little Garden', hood: 'East Village', src: 'local',
    highlight: 'A single narrow lot between buildings — brick walls on both sides.',
    note: 'About as contained as outdoors gets in Manhattan. Volunteer-run, so hours vary with the weather.' },

  { species: 'cat', list: 'nyc', kind: 'walled', contain: 'enclosed', lat: 40.72416, lon: -73.99181,
    name: 'Liz Christy Community Garden', hood: 'Lower East Side', src: 'local',
    highlight: 'The city’s first community garden, 1973 — fenced along Houston with a gated entrance.',
    note: 'Dense and overgrown, with a pond and a beehive. Ask before bringing an animal; growing beds are the priority.' },

  { species: 'cat', list: 'nyc', kind: 'quiet', contain: 'bounded', lat: 40.74528, lon: -73.97401,
    name: 'Saint Vartan Park', hood: 'Murray Hill', src: 'nycparks',
    highlight: 'Fenced perimeter. Keep out of the ball fields and playground — animals are barred from both.',
    note: 'An ordinary neighbourhood park, but the fence line is unbroken and the dog run is at the far end.' },

  { species: 'cat', list: 'nyc', kind: 'quiet', contain: 'bounded', lat: 40.69188, lon: -73.99874,
    name: 'Adam Yauch Park', hood: 'Brooklyn Heights', src: 'nycparks',
    highlight: 'Fenced on all sides, and small enough to read at a glance.',
    note: 'Named for the Beastie Boy, who grew up on the block. Quiet outside school pickup.' },

  { species: 'cat', list: 'nyc', kind: 'quiet', contain: 'open', lat: 40.75375, lon: -73.98354,
    name: 'Bryant Park', hood: 'Midtown', src: 'local',
    highlight: 'Leashed pets welcome and no dog run anywhere in it — but it is one of the busiest lawns in the country.',
    note: 'Included for the gravel terraces at the quiet Sixth Avenue end, early. Not a first outing.' },

  { species: 'cat', list: 'bay', kind: 'quiet', contain: 'enclosed', lat: 37.78912, lon: -122.39665,
    name: 'Salesforce Park', hood: 'San Francisco', src: 'local',
    highlight: 'Five acres seventy feet up, walled by the building on every side. Leashed pets welcome.',
    note: 'The best answer in the Bay Area, and it is not close. Thirteen gardens, no street, and the only ways out are lifts and escalators.' },

  { species: 'cat', list: 'bay', kind: 'pocket', contain: 'enclosed', lat: 37.79526, lon: -122.40218,
    name: 'Transamerica Redwood Park', hood: 'Financial District', src: 'pops',
    highlight: 'Half an acre of redwoods enclosed by buildings, with gates on two corners.',
    note: 'Improbably quiet for the middle of the FiDi. Empty outside weekday lunch hours.' },

  { species: 'cat', list: 'bay', kind: 'walled', contain: 'enclosed', lat: 37.76883, lon: -122.46690,
    name: 'Shakespeare Garden, Golden Gate Park', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Hedged and walled with a single gate — and no Dog Play Area anywhere near it.',
    note: 'A brick-walled sun trap behind the Academy of Sciences. Benches, and usually nobody at all.' },

  { species: 'cat', list: 'bay', kind: 'walled', contain: 'enclosed', lat: 37.76617, lon: -122.45733,
    name: 'Golden Gate Park Community Garden', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Fenced allotments with a gated entrance.',
    note: 'Members keep the gate shut, which is the point. Ask first — these are working vegetable beds.' },

  { species: 'cat', list: 'bay', kind: 'pocket', contain: 'enclosed', lat: 37.78650, lon: -122.43233,
    name: 'Cottage Row Mini Park', hood: 'Japantown', src: 'sfrp',
    highlight: 'A pedestrian lane walled by houses on both sides, with no road at either end.',
    note: 'Tiny, sunny and almost secret. Perfect for a first harness outing.' },

  { species: 'cat', list: 'bay', kind: 'pocket', contain: 'bounded', lat: 37.78159, lon: -122.39397,
    name: 'South Park', hood: 'SoMa', src: 'sfrp',
    highlight: 'A small oval ringed by a one-way street — bounded, but there is traffic on the far side of the grass.',
    note: 'Shaded and calm mid-afternoon. The whole park is visible from any bench.' },

  { species: 'cat', list: 'bay', kind: 'quiet', contain: 'bounded', lat: 37.79751, lon: -122.39903,
    name: 'Sydney G. Walton Square', hood: 'Financial District', src: 'sfrp',
    highlight: 'Sunken lawn below street level, hedged around the rim.',
    note: 'Mature trees and a fountain. Dead quiet at weekends when the offices empty out.' },

  { species: 'cat', list: 'bay', kind: 'quiet', contain: 'bounded', lat: 37.78465, lon: -122.40234,
    name: 'Yerba Buena Gardens', hood: 'SoMa', src: 'local',
    highlight: 'Enclosed by buildings with the waterfall wall at one end; leashed pets on the paths.',
    note: 'Big lawn, lots of people, but the upper terraces near the carousel stay calm.' },

  { species: 'cat', list: 'bay', kind: 'quiet', contain: 'bounded', lat: 37.88538, lon: -122.26328,
    name: 'Berkeley Rose Garden', hood: 'Berkeley', src: 'local',
    highlight: 'A terraced amphitheatre cut into the hillside — steep sides do the containing.',
    note: 'Roses on six tiers with the Golden Gate straight ahead. Quiet on weekday mornings.' },

  { species: 'cat', list: 'bay', kind: 'walled', contain: 'bounded', lat: 37.80641, lon: -122.25836,
    name: 'Gardens at Lake Merritt', hood: 'Oakland', src: 'local',
    highlight: 'Seven acres of formal gardens fenced off from the main Lake Merritt path.',
    note: 'Hedged rooms, a bonsai collection and a palm court. Set back from the very busy lake loop.' },

  { species: 'cat', list: 'bay', kind: 'quiet', contain: 'open', lat: 37.83514, lon: -122.23417,
    name: 'Mountain View Cemetery', hood: 'Oakland', src: 'local',
    highlight: 'Olmsted-designed and very quiet — but leashed dogs are common here, so pick your hour.',
    note: 'Two hundred acres climbing the hills, with the best view in Oakland from the top. Open ground: only for a settled cat.' },

  { species: 'cat', list: 'bay', kind: 'quiet', contain: 'open', lat: 37.80292, lon: -122.44840,
    name: 'Palace of Fine Arts', hood: 'San Francisco', src: 'sfrp',
    highlight: 'Colonnade and lagoon, calm and slow — but open on every side.',
    note: 'The rotunda keeps people moving quietly. Swans on the water, which a cat will notice before you do.' },
];
