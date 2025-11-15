// Simple language toggle for the landing page
(function () {
    const LANGUAGE_STORAGE_KEY = "restaurant-site-language";

    const translations = {
        en: {
            skipToContent: "Skip to content",
            brandName: "Miss Phuong",
            brandTagline: "Vietnamese Restaurant",
            navStory: "Our Story",
            navGallery: "Gallery",
            navVisit: "Visit",
            navContact: "Contact",
            heroEyebrow: "Taste tradition, love the present",
            heroHeading: "Northern Vietnamese cuisine,\nreimagined in Berlin",
            heroDescription: "Organic ingredients, vegan highlights, and family recipes freshly reinterpreted for today.",
                heroMenuCta: "View menu",
            heroCta: "Reserve a table",
            storyHeading: "Vietnamese heritage, Berlin soul",
            storyParagraph1: "Vietnamese cuisine is a universe of its own, shaped by centuries of culinary wisdom.",
            storyParagraph2: "History has brought strong Chinese influences, while the south embraces flavors from Thailand and Indonesia.",
            storyParagraph3: "But enough history: we are here to rekindle the spirit of Vietnam’s classic kitchen.",
            storyParagraph4: "Our base is rooted in organic produce with a generous selection of vegan and vegetarian dishes.",
            storyParagraph5: "We blend heritage with the now, crafting plates that surprise and comfort in equal measure.",
            storyParagraph6: "Meat lovers will not be disappointed either—quality is the promise we stand behind.",
            storyParagraph7: "Enjoy your time with us and share your feedback so we can keep evolving.",
            highlight1Title: "Organic foundations",
            highlight1Text: "Certified organic produce, fresh herbs, and handmade components in every dish.",
            highlight2Title: "Vegan & vegetarian love",
            highlight2Text: "Creative plant-forward options inspired by Hanoi street food and home kitchens.",
            highlight3Title: "Premium proteins",
            highlight3Text: "Responsibly sourced meats prepared with traditional broths and modern techniques.",
            galleryHeading: "Inside Miss Phuong",
            galleryDescription: "A glimpse into our kitchen, dining room, and the dishes we serve.",
            visitHeading: "Visit Us",
            addressLine1: "Miss Phuong Restaurant",
            addressLine2: "Prenzlauer Allee 226",
            addressLine3: "10405 Berlin",
            hoursHeading: "Opening Hours",
            hoursWeekdays: "Monday to Friday: 11:30 – 22:00",
            hoursSaturday: "Saturday: 13:00 – 22:00",
            hoursSunday: "Sunday: Closed",
            contactHeading: "Reserve a Table",
            contactNote: "Reserve by phone—we’ll be delighted to hear from you.",
            contactCta: "Call +49 30 501 764 35",
            contactFacebookLabel: "Facebook",
            contactInstagramLabel: "Instagram",
            footerNote: "© 2025 Miss Phuong Restaurant. All rights reserved."
        },
        de: {
            skipToContent: "Zum Inhalt springen",
            brandName: "Miss Phuong",
            brandTagline: "Vietnamesisches Restaurant",
            navStory: "Unsere Geschichte",
            navGallery: "Galerie",
            navVisit: "Besuch",
            navContact: "Kontakt",
            heroEyebrow: "Tradition schmecken, Gegenwart lieben",
            heroHeading: "Nordvietnamesische Küche,\nneu inszeniert in Berlin",
            heroDescription: "Bio-Zutaten, vegane Highlights und Familienrezepte, frisch für heute interpretiert.",
                heroMenuCta: "Speisekarte",
            heroCta: "Tisch reservieren",
            storyHeading: "Vietnamesisches Erbe, Berliner Seele",
            storyParagraph1: "Die vietnamesische Küche ist eine eigenständige Küche mit einer vielseitigen Kochtradition, die viele traditionelle Gerichte hervorgebracht hat.",
            storyParagraph2: "Historisch bedingt ist sie stark von der chinesischen Küche beeinflusst. Der Süden Vietnams weist sogar Einflüsse aus der Thai und indonesischen Küche auf.",
            storyParagraph3: "Doch genug mit Geschichte. Wir bringen hier die alte vietnamesische Küche wieder richtig zum Kochen.",
            storyParagraph4: "Die Basis unserer Küche bezieht sich auf viele Bio Produkte und ein ausgewogenes Angebot an veganen und vegetarischen Gerichten.",
            storyParagraph5: "Darüber hinaus mischen wir die alte Kunst mit unserer modernen Zeit.",
            storyParagraph6: "So entstehen unsere Gerichte, mit denen wir euch immer wieder begeistern.",
            storyParagraph7: "Keine Sorge, auch die Fleischesser unter euch werden hier nicht enttäuscht. Auch hier legen wir viel Wert auf eine hervorragende Qualität. Genieß euren Aufenthalt hier und gebt uns gerne euer Feedback, damit auch wir uns stetig weiterentwickeln können.",
            highlight1Title: "Bio als Grundlage",
            highlight1Text: "Unsere Zutaten sind überwiegend Bio, frisch und handverlesen für jedes Gericht.",
            highlight2Title: "Vegane & vegetarische Vielfalt",
            highlight2Text: "Kreative pflanzenbasierte Optionen inspiriert von Hanois Straßenküche und Familienrezepten.",
            highlight3Title: "Beste Fleischqualität",
            highlight3Text: "Sorgfältig ausgewählte Fleischspezialitäten mit traditionellen Brühen und modernen Techniken.",
            galleryHeading: "Einblicke in Miss Phuong",
            galleryDescription: "Ein Blick in unsere Küche, den Gastraum und die Gerichte, die wir servieren.",
            visitHeading: "Besucht uns",
            addressLine1: "Miss Phuong Restaurant",
            addressLine2: "Prenzlauer Allee 226",
            addressLine3: "10405 Berlin",
            hoursHeading: "Öffnungszeiten",
            hoursWeekdays: "Montag bis Freitag: 11:30 – 22:00",
            hoursSaturday: "Samstag: 13:00 – 22:00",
            hoursSunday: "Sonntag: Geschlossen",
            contactHeading: "Tisch reservieren",
            contactNote: "Reserviert gerne telefonisch – wir freuen uns auf euren Anruf.",
            contactCta: "Anrufen +49 30 501 764 35",
            contactFacebookLabel: "Facebook",
            contactInstagramLabel: "Instagram",
            footerNote: "© 2025 Miss Phuong Restaurant. Alle Rechte vorbehalten."
        }
    };

    const supportedLanguages = Object.keys(translations);
    const translatableElements = document.querySelectorAll("[data-i18n-key]");
    const languageButtons = document.querySelectorAll("[data-lang-switch]");

    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const initialLanguage = supportedLanguages.includes(storedLanguage) ? storedLanguage : "de";

    function setLanguage(language) {
        if (!supportedLanguages.includes(language)) {
            return;
        }

        document.documentElement.lang = language;
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

        translatableElements.forEach((element) => {
            const key = element.getAttribute("data-i18n-key");
            const translation = translations[language][key];
            if (typeof translation === "string") {
                element.textContent = translation;
            }
        });

        languageButtons.forEach((button) => {
            const buttonLanguage = button.getAttribute("data-lang-switch");
            button.classList.toggle("active", buttonLanguage === language);
        });
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const requestedLanguage = button.getAttribute("data-lang-switch");
            setLanguage(requestedLanguage);
        });
    });

    setLanguage(initialLanguage);
})();
