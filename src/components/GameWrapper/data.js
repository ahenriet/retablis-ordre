import pickRandom from 'pick-random';

class GameData {

    constructor() {
        this.data = [
            {"name": '🏅️ Inauguration JO moderne', "date": new Date("1896-04-06")},
            {"name": '👶️ Naissance André Breton', "date": new Date("1896-02-18")},
            {"name": '☠️ Décès Paul Verlaine', "date": new Date("1896-01-08")},
            {"name": '📺️ Première Loft Story saison 1 (France)', "date": new Date("2001-04-26")},
            {"name": '🕊️ Armistice de la Guerre de Corée', "date": new Date("1953-07-27")},
            {"name": '🇨🇿️ Début du Printemps de Prague', "date": new Date("1968-01-05")},
            {"name": '⚽️ Match de la honte (RFA–Autriche)', "date": new Date("1982-06-25")},
            {"name": '👶️ Naissance Victor Hugo', "date": new Date("1802-02-26")},
            {"name": '☠️ Décès Victor Hugo', "date": new Date("1885-05-22")},
            {"name": '⚽️ 1ère Finale de la Coupe des clubs champions européens', "date": new Date("1956-06-13")},
            {"name": '🎵️ André Rieu jour "Les Corons" à Bollaert', "date": new Date("2005-02-19")},
            {"name": '🎵️ "Bo le lavabo (WC Kiss)" (Vincent Lagaf\')', "date": new Date("1990-03-01")},
            {"name": '👑️ Sacre de Napoléon Ier', "date": new Date("1804-12-02")},
            {"name": '👨‍🚀️ "Un petit pas pour l\'homme, un bond de géant pour l\'humanité"', "date": new Date("1969-07-20")},
            {"name": '🎵️ La Flûte enchantée (Mozart)', "date": new Date("1791-09-30")},
            {"name": '🕊️ Armistice Guerre franco-allemande de 1870', "date": new Date("1871-01-29")},
            {"name": '💥️ Début Bataille de Verdun', "date": new Date("1916-02-21")},
            {"name": '🎖️ Fin Bataille de la Somme', "date": new Date("1916-11-18")},
            {"name": '💪️ Coup d\'État du 18 Brumaire', "date": new Date("1799-11-09")},
            {"name": '🎵️ Macarena (Los del Río)', "date": new Date("1996-08-03")},
            {"name": '⚔️ Assassinat d\'Henri IV', "date": new Date("1610-05-14")},
            {"name": '⚔️ Assassinat de Jean Jaurès', "date": new Date("1914-07-31")},
            {"name": '⚔️ Assassinat de John F. Kennedy', "date": new Date("1963-11-22")},
            {"name": '⚔️ Assassinat de Martin Luther King', "date": new Date("1968-04-04")},
            {"name": '📖️ Du côté de chez Swann (Marcel Proust)', "date": new Date("1913-11-14")},
            {"name": '📖️ Bel-Ami (Guy de Maupassant)', "date": new Date("1885-05-30")},
            {"name": '📖️ Manifeste du parti communiste (Marx, Engels)', "date": new Date("1848-02-21")},
            {"name": '👶️ Naissance Karl Marx', "date": new Date("1818-05-05")},
            {"name": '👶️ Naissance Guy de Maupassant', "date": new Date("1850-08-05")},
            {"name": '☠️ Décès Guy de Maupassant', "date": new Date("1893-07-06")},
            {"name": '👃️ Jacques Chirac devient Maire de Paris', "date": new Date("1977-03-25")},
            {"name": '👃️ Jacques Chirac devient Premier ministre', "date": new Date("1986-03-20")},
            {"name": '👃️ Jacques Chirac devient Pésident de la République', "date": new Date("1995-05-17")},
            {"name": '👓️ Adolphe Thiers devient Pésident de la République', "date": new Date("1871-02-08")},
            {"name": '🔴️ Début de la Commune de Paris', "date": new Date("1871-03-18")},
            {"name": '🇨🇵️ Jean Moulin au Panthéon', "date": new Date("1964-12-19")},
            {"name": '🇨🇵️ André Malraux devient Ministre des Affaires culturelles', "date": new Date("1959-07-22")},
            {"name": '📖️ L\'Étranger (Albert Camus)', "date": new Date("1942-05-19")},
            {"name": '🛩️ Louis Blériot traverse la Manche', "date": new Date("1909-07-25")},
            {"name": '🇬🇧️ Adhésion du Royaume-Uni à la Communauté économique européenne', "date": new Date("1973-01-01")},
            {"name": '☠️ Guillotinage de Gracchus Babeuf', "date": new Date("1797-05-27")},
            {"name": '👶️ Naissance Abraham Lincoln', "date": new Date("1809-02-12")},
            {"name": '🗽️ Abraham Lincoln devient Président des États-Unis', "date": new Date("1861-07-06")},
            {"name": '👶️ Naissance Benjamin Franklin', "date": new Date("1706-01-17")},
            {"name": '👑️ Charlemagne devient Empereur d\'Occident', "date": new Date("0800-12-25")},
            {"name": '📺️ Première émission officielle de télévision française', "date": new Date("1935-04-26")},
            {"name": '📺️ La télévision française est diffusée en couleur', "date": new Date("1967-10-01")},
            {"name": '☠️ Décès François-René de Chateaubriand', "date": new Date("1848-07-04")},
            {"name": '🏅️ Dick Fosbury champion olympique saut en hauteur', "date": new Date("1968-10-27")},
            {"name": '🏅️ Marie-José Pérec devient médaillée d\'or olympique sur 400m', "date": new Date("1992-08-09")},
            {"name": '⚽️ Scandale des "Poteaux carrés" (ASSE-BM)', "date": new Date("1976-05-12")},
            {"name": '🥊️ Le "Combat du siècle" (Ali-Frazier)', "date": new Date("1971-03-08")},
            {"name": '⚽️ La "Main de Dieu" (Maradona)', "date": new Date("1986-06-22")},
            {"name": '🎵️ Sgt. Pepper\'s Lonely Hearts Club Band (The Beatles)', "date": new Date("1967-06-01")},
            {"name": '🎵️ White Christmas (Bing Crosby)', "date": new Date("1942-05-29")},
            {"name": '🎵️ In the Summertime (Mungo Jerry)', "date": new Date("1970-07-07")},
            {"name": '🎵️ It\'s Now or Never (Elvis Presley)', "date": new Date("1960-07-05")},
            {"name": '🎵️ It\'s Now or Never (Elvis Presley)', "date": new Date("1960-07-05")},
            {"name": '🎞️ L\'Arrivée d\'un train en gare de La Ciotat', "date": new Date("1895-12-28")},
            {"name": '🎞️ Un tramway nommé Désir', "date": new Date("1951-09-18")},
            {"name": '🎞️ Les Quatre Cents Coups', "date": new Date("1959-06-03")},
            {"name": '🍺️ Reinheitsgebot (Décret sur la pureté de la bière)', "date": new Date("1516-10-01")},
            {"name": '🎓️ Aristide Briand prix Nobel de la Paix', "date": new Date("1926-12-10")},
            {"name": '🎓️ Marie Curie prix Nobel Physique', "date": new Date("1903-12-10")},
            {"name": '🎓️ Marie Curie prix Nobel Chimie', "date": new Date("1911-12-10")},
            {"name": '🎞️ Le Mépris', "date": new Date("1963-12-20")},
            {"name": '📢️ "Je vous ai compris" (Charles de Gaulle)', "date": new Date("1958-06-04")},
            {"name": '📢️ "Win the "yes" needs the "no" to win against the "no"" (Jean-Pierre Raffarin)', "date": new Date("2004-10-29")},
            {"name": '🎾️ Finale Lendl–McEnroe à Roland-Garros', "date": new Date("1984-06-10")},
        ]
        this.size = this.data.length
    }

    someRandomEvents() {
        var howmany = 3 + Math.floor(Math.random() * Math.floor(5));
        return pickRandom(this.data, {count: howmany});
    }
}

export default GameData;
