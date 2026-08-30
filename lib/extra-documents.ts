import type { DocumentCopy } from '@/components/LocalizedDocument';
import type { ExtraLocale } from './locales';

export const DOCUMENT_KINDS = ['privacy', 'support', 'terms'] as const;
export type DocumentKind = (typeof DOCUMENT_KINDS)[number];

export function isDocumentKind(value: string): value is DocumentKind {
  return DOCUMENT_KINDS.includes(value as DocumentKind);
}

const appleEula = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

export const extraDocuments: Record<ExtraLocale, Record<DocumentKind, DocumentCopy>> = {
  de: {
    privacy: {
      metadataTitle: 'Datenschutzerklärung',
      metadataDescription: 'Wie Wardflame und wardflame.com mit Spieldaten, Käufen, Website-Protokollen, Cookies und Tracking umgehen.',
      index: 'Datenschutz / 30. Aug. 2026',
      title: 'Datenschutzerklärung',
      intro: 'Wardflame erhebt keine Spieldaten für Analyse, Werbung oder Tracking.',
      sections: [
        {
          title: 'Das Spiel',
          paragraphs: [
            'Wardflame erhebt oder verkauft keine personenbezogenen Daten und verwendet sie nicht für Tracking oder Werbung. Das Spiel hat kein Analyse- oder Werbe-Backend.',
            'Spielfortschritt, Einstellungen und lokale Diagnoseberichte bleiben auf deinem Gerät. Das Apple-Datenschutzmanifest von Wardflame weist keine erfassten Datentypen und kein Tracking aus.',
          ],
        },
        {
          title: 'Game-Center-Mehrspieler',
          paragraphs: [
            'Game Center wird nur verwendet, wenn du „Mit Freunden spielen“ auswählst: zur Anmeldung, für Einladungen und zur Spielersuche. Spieleridentität, Zusammensetzung der Partie und Spieldaten werden über Apples Dienst zwischen den Teilnehmern übertragen. Wardflame hat keine eigenen Konten oder Spielserver. Apple verarbeitet Game-Center-Daten nach der eigenen Datenschutzrichtlinie.',
          ],
        },
        {
          title: 'Käufe',
          paragraphs: [
            'Käufe der Vollversion und die Wiederherstellung von Käufen werden von Apple über StoreKit verarbeitet. Wardflame erhält nur den Berechtigungsstatus, der zum Freischalten des Spiels erforderlich ist. Wardflame erhält keine Daten deiner Zahlungskarte. Apple verarbeitet Kaufdaten nach der eigenen Datenschutzrichtlinie.',
          ],
        },
        {
          title: 'Lokale Daten löschen',
          paragraphs: [
            'Wenn du Wardflame löschst, werden die lokal gespeicherten Daten der App entfernt. Davon ausgenommen können Sicherungsmechanismen des Geräts und des App Store sein, die von Apple gesteuert werden. Das Spiel führt weder ein eigenes Spielerkonto auf einem Server noch ein eigenes Cloud-Profil.',
          ],
        },
        {
          title: 'Diese Website',
          paragraphs: [
            'Wardflame.com verwendet Vercel Web Analytics und Speed Insights, um Seitenaufrufe und Leistungswerte anonym zu messen. Die Dienste setzen keine Cookies. Die aggregierten Messwerte können Zeitstempel, Route oder URL, gefilterte Abfrageparameter, Referrer, das ungefähre Land oder die ungefähre Region, Browser, Betriebssystem, Gerätetyp, Netzwerkgeschwindigkeit und Core Web Vitals enthalten. Diese Angaben werden weder einzelnen Besuchern noch IP-Adressen zugeordnet.',
            'Wir übermitteln keine benutzerdefinierten Ereignisse, Kontodaten, Zahlungsdaten oder Werbekennungen. Wardflame.com verwendet keine Werbetracker und erstellt keine Werbeprofile.',
            'Im aktuellen Vercel-Hobby-Tarif beträgt das Berichtsfenster für Web Analytics einen Monat und für Speed Insights sieben Tage. Vercel kann Web-Analytics-Daten über das sichtbare Berichtsfenster hinaus speichern. Der von Web Analytics verwendete temporäre Besucher-Hash verfällt nach 24 Stunden. Das Entfernen der Komponenten und Deaktivieren der Dienste beendet die künftige Erfassung. Da die Messwerte aggregiert und keinem bestimmten Besucher zugeordnet werden können, gibt es keinen besucherspezifischen Analysedatensatz, den wir einzeln abrufen oder löschen könnten.',
            'Der Hosting- und Sicherheitsanbieter kann begrenzte technische Informationen wie IP-Adresse, User-Agent, angeforderte URL und Zeitstempel in Serverprotokollen verarbeiten, um die Website bereitzustellen und zu schützen.',
            'Wenn du dem Support eine E-Mail schreibst, erhält Wardflame die Absenderadresse, den Nachrichtentext, Anhänge und die üblichen Zustellungsmetadaten. Cloudflare Email Routing und Google verarbeiten diese Informationen, um die Nachricht zuzustellen. Wir verwenden sie ausschließlich, um zu antworten und das beschriebene Problem zu diagnostizieren. Sende nur die dafür erforderlichen Angaben und niemals Zahlungskartendaten oder andere vertrauliche Informationen.',
            'Supportkorrespondenz wird höchstens zwölf Monate nach der letzten Antwort aufbewahrt und anschließend gelöscht, sofern keine längere Speicherung gesetzlich vorgeschrieben oder zur Verhinderung von Missbrauch erforderlich ist. Du kannst eine frühere Löschung beantragen, indem du von der in der Korrespondenz verwendeten Adresse an support@wardflame.com schreibst. Wir verlangen von Cloudflare und Google einen Schutz, der mindestens dem in dieser Erklärung beschriebenen Niveau entspricht. Restkopien in ihren Sicherungssystemen können nach den jeweiligen Löschfristen vorübergehend bestehen bleiben.',
          ],
        },
        {
          title: 'Änderungen und Kontakt',
          paragraphs: [
            {
              before: 'Diese Erklärung wird vor jeder Veröffentlichung aktualisiert, die eine neue Datenerhebung oder nicht notwendiges Website-Tracking einführt. Verwende bei Fragen die ',
              label: 'Wardflame-Supportseite',
              section: 'support',
              after: '.',
            },
          ],
        },
      ],
      date: 'Aktualisiert am 30. August 2026',
    },
    support: {
      metadataTitle: 'Support',
      metadataDescription: 'Wardflame-Support, Veröffentlichungsstatus, Geräteanforderungen, Hilfe beim Wiederherstellen von Käufen und Fehlermeldungen.',
      index: 'Support / Wardflame',
      title: 'Support',
      intro: 'Hier erhältst du Hilfe zu Wardflame, kannst ein Problem melden oder eine Frage stellen.',
      cta: 'Supportanfrage öffnen',
      note: 'E-Mail ist der offizielle Supportkanal und erfordert kein Konto. Schreibe an support@wardflame.com. Sende keine Zahlungskartendaten oder andere vertrauliche Informationen.',
      sections: [
        {
          title: 'Welche Angaben wir brauchen',
          items: [
            'Dein iPhone-, iPad- oder Mac-Modell und die Version des Betriebssystems.',
            'Die Wardflame-Version, die in der App angezeigt wird.',
            'Was du getan hast, was passiert ist und was du erwartet hast.',
            'Einen Screenshot oder eine kurze Bildschirmaufnahme, wenn das Problem dadurch verständlicher wird.',
          ],
        },
        {
          title: 'Unterstützte Geräte',
          paragraphs: [
            'Wardflame unterstützt iPhone und iPad mit iOS beziehungsweise iPadOS 17.0 oder neuer sowie Mac. Auf Mobilgeräten wird im Querformat gespielt. Das Spiel und diese Website sind auf Deutsch, Englisch, Russisch, Französisch, Spanisch und Türkisch verfügbar.',
          ],
        },
        {
          title: 'Käufe und Wiederherstellung',
          paragraphs: [
            'Der erste Spieltag und die erste Nacht sind kostenlos. Ein einmaliger, nicht verbrauchbarer Kauf schaltet das vollständige Spiel frei. Verwende zum Wiederherstellen auf dem Freischaltbildschirm „Käufe wiederherstellen“, während du mit dem Apple Account angemeldet bist, über den der Kauf getätigt wurde.',
            'Apple verarbeitet die Zahlungen. Gib niemals Kartendaten in einer Supportanfrage an. Wende dich bei Fragen zu Abrechnung oder Erstattung an den Apple Support.',
          ],
        },
        {
          title: 'Datenschutz',
          paragraphs: [
            {
              before: 'Wardflame speichert Fortschritt und Einstellungen lokal und betreibt kein Analyse- oder Werbe-Backend. Die vollständige Erklärung findest du auf der ',
              label: 'Datenschutzseite',
              section: 'privacy',
              after: '.',
            },
          ],
        },
      ],
    },
    terms: {
      metadataTitle: 'Nutzungsbedingungen',
      metadataDescription: 'Nutzungsbedingungen der Website, App-Store-Lizenzierung, Käufe, geistiges Eigentum und Verfügbarkeit von Wardflame.',
      index: 'Bedingungen / 22. Aug. 2026',
      title: 'Nutzungsbedingungen',
      intro: 'Diese Bedingungen gelten für die Wardflame-Website und die Supportmaterialien. Das Spiel wird über den App Store lizenziert.',
      sections: [
        {
          title: 'Nutzung der Website',
          paragraphs: [
            'Du darfst wardflame.com nutzen, um dich über Wardflame zu informieren, Screenshots aus dem Spiel anzusehen und den Support zu erreichen. Störe den Betrieb der Website nicht, versuche keinen unbefugten Zugriff und verwende die Inhalte nicht irreführend oder rechtswidrig.',
          ],
        },
        {
          title: 'Spiellizenz',
          paragraphs: [
            {
              before: 'Wenn Wardflame über den App Store vertrieben wird, gelten die auf der Produktseite aufgeführten Lizenzbedingungen. Sofern dort nichts anderes angegeben ist, regelt Apples ',
              label: 'Standard-Endbenutzer-Lizenzvertrag',
              href: appleEula,
              after: ' die Spiellizenz. Diese Seite ist keine eigene EULA.',
            },
          ],
        },
        {
          title: 'Käufe',
          paragraphs: [
            'Der erste Spieltag und die erste Nacht sind kostenlos; anschließend schaltet ein einmaliger, nicht verbrauchbarer Kauf das vollständige Spiel frei. Preis und Währung zeigt der App Store für deine Region an. Apple verarbeitet Zahlung, Wiederherstellung, Abrechnung und Erstattungsanfragen nach seinen Bedingungen.',
          ],
        },
        {
          title: 'Geistiges Eigentum',
          paragraphs: [
            'Wardflame, der Code, die Spielgrafiken, Audiodateien, Texte und Materialien der Website sind durch die geltenden Gesetze zum Schutz geistigen Eigentums geschützt. Du darfst Links und unveränderte Screenshots für Diskussionen, Rezensionen und Berichterstattung über das Spiel teilen. Eine weitergehende Lizenz wird nicht eingeräumt.',
          ],
        },
        {
          title: 'Verfügbarkeit',
          paragraphs: [
            'Wardflame wird für die Veröffentlichung im App Store vorbereitet. Funktionen und Kompatibilität können vor oder nach der Veröffentlichung aktualisiert werden. Die Website wird nach Verfügbarkeit bereitgestellt und kann aktualisiert werden oder vorübergehend nicht erreichbar sein.',
          ],
        },
        {
          title: 'Kontakt und Änderungen',
          paragraphs: [
            {
              before: 'Fragen können über den ',
              label: 'Wardflame-Support',
              section: 'support',
              after: ' gesendet werden. Wesentliche Änderungen dieser Bedingungen werden hier mit einem neuen Datum veröffentlicht.',
            },
          ],
        },
      ],
      date: 'Gültig ab 22. August 2026',
    },
  },
  fr: {
    privacy: {
      metadataTitle: 'Politique de confidentialité',
      metadataDescription: 'Comment Wardflame et wardflame.com traitent les données de jeu, les achats, les journaux du site, les cookies et le suivi.',
      index: 'Confidentialité / 30 août 2026',
      title: 'Politique de confidentialité',
      intro: 'Wardflame ne collecte aucune donnée de jeu à des fins d’analyse, de publicité ou de suivi.',
      sections: [
        {
          title: 'Le jeu',
          paragraphs: [
            'Wardflame ne collecte et ne vend aucune donnée personnelle. Il ne les utilise ni à des fins de suivi ni à des fins publicitaires. Le jeu ne dispose d’aucun service d’analyse ni de publicité.',
            'Les données de progression, les réglages et les rapports de diagnostic locaux restent sur votre appareil. Le manifeste de confidentialité Apple de Wardflame ne déclare aucune catégorie de données collectée ni aucun suivi.',
          ],
        },
        {
          title: 'Multijoueur via Game Center',
          paragraphs: [
            'Game Center n’est utilisé que si vous choisissez « Jouer entre amis », pour l’authentification, les invitations et la mise en relation. L’identité des joueurs, la composition de la partie et les données de jeu transitent entre les participants via le service d’Apple. Wardflame ne possède ni comptes ni serveurs de jeu propres. Apple traite les données Game Center conformément à sa propre politique de confidentialité.',
          ],
        },
        {
          title: 'Achats',
          paragraphs: [
            'Apple traite via StoreKit l’achat unique qui déverrouille le jeu complet ainsi que sa restauration. Wardflame reçoit uniquement le statut de déverrouillage nécessaire au jeu et ne reçoit aucune donnée de votre carte de paiement. Apple traite les données d’achat conformément à sa propre politique de confidentialité.',
          ],
        },
        {
          title: 'Suppression des données locales',
          paragraphs: [
            'La suppression de l’app Wardflame efface les données qu’elle stocke localement, sous réserve des mécanismes de sauvegarde de l’appareil et de l’App Store gérés par Apple. Le jeu ne conserve aucun compte de joueur distant ni aucun profil dans le cloud qui lui soit propre.',
          ],
        },
        {
          title: 'Ce site',
          paragraphs: [
            'Wardflame.com utilise Vercel Web Analytics et Speed Insights pour mesurer de façon anonyme et agrégée la consultation des pages et les performances. Ces services n’utilisent aucun cookie. Les mesures peuvent inclure l’horodatage, le chemin ou l’URL, les paramètres de requête filtrés, la page référente, le pays ou la région approximatifs, le navigateur, le système d’exploitation, le type d’appareil, la vitesse du réseau et les Core Web Vitals. Ces informations ne sont associées ni à un visiteur ni à une adresse IP.',
            'Nous ne transmettons aucun événement personnalisé, aucune information de compte ou de paiement, ni aucun identifiant publicitaire. Wardflame.com n’utilise aucun traceur publicitaire et ne crée aucun profil publicitaire.',
            'Avec l’offre Vercel Hobby actuelle, la période de consultation est d’un mois pour Web Analytics et de sept jours pour Speed Insights. Vercel peut conserver les données Web Analytics au-delà de la période visible. Le hachage temporaire utilisé par Web Analytics expire après 24 heures. Le retrait des composants et la désactivation des services mettent fin à toute collecte future. Les mesures étant agrégées et ne pouvant être rattachées à un visiteur précis, nous ne disposons d’aucun enregistrement individuel à consulter ou supprimer.',
            'Le fournisseur d’hébergement et de sécurité peut traiter des informations techniques limitées, telles que l’adresse IP, l’agent utilisateur (User-Agent), l’URL demandée et les horodatages consignés dans les journaux du serveur, afin de fournir et de protéger le site.',
            'Lorsque vous écrivez à l’assistance par e-mail, Wardflame reçoit l’adresse de l’expéditeur, le contenu du message, les pièces jointes et les métadonnées habituelles d’acheminement. Cloudflare Email Routing et Google traitent ces informations afin d’acheminer le message. Nous les utilisons uniquement pour vous répondre et diagnostiquer le problème décrit. N’envoyez que les informations nécessaires, et jamais de données de carte bancaire ni d’autres informations sensibles.',
            'Les échanges avec l’assistance sont conservés pendant douze mois au maximum après la dernière réponse, puis supprimés, sauf si une conservation plus longue est imposée par la loi ou nécessaire pour prévenir les abus. Vous pouvez demander leur suppression anticipée en écrivant à support@wardflame.com depuis l’adresse utilisée dans l’échange. Nous exigeons de Cloudflare et de Google un niveau de protection au moins équivalent à celui décrit dans cette politique. Des copies résiduelles peuvent subsister temporairement dans leurs sauvegardes conformément à leurs calendriers de suppression.',
          ],
        },
        {
          title: 'Modifications et contact',
          paragraphs: [
            {
              before: 'Cette politique sera mise à jour avant toute version qui introduirait une nouvelle collecte de données ou un suivi non essentiel sur le site. Pour toute question, écrivez à support@wardflame.com ou consultez la ',
              label: 'page d’assistance de Wardflame',
              section: 'support',
              after: '.',
            },
          ],
        },
      ],
      date: 'Mise à jour le 30 août 2026',
    },
    support: {
      metadataTitle: 'Assistance',
      metadataDescription: 'Assistance Wardflame, état de la sortie, appareils requis, aide à la restauration des achats et signalement de problèmes.',
      index: 'Assistance / Wardflame',
      title: 'Assistance',
      intro: 'Cette page vous permet d’obtenir de l’aide sur Wardflame, de signaler un problème ou de poser une question.',
      cta: 'Ouvrir une demande d’assistance',
      note: 'L’adresse support@wardflame.com est le canal d’assistance officiel et ne nécessite aucun compte. N’envoyez aucune donnée de carte bancaire ni aucune autre information sensible.',
      sections: [
        {
          title: 'Informations à fournir',
          items: [
            'Le modèle de votre iPhone, iPad ou Mac ainsi que la version du système d’exploitation.',
            'La version de Wardflame indiquée dans l’app.',
            'Les étapes suivies, le résultat observé et le résultat attendu.',
            'Une capture d’écran ou un court enregistrement d’écran si cela permet de mieux comprendre le problème.',
          ],
        },
        {
          title: 'Appareils compatibles',
          paragraphs: [
            'Wardflame prend en charge les iPhone et iPad sous iOS ou iPadOS 17.0 ou version ultérieure, ainsi que les Mac. La version mobile se joue en mode paysage. Le jeu et le site sont disponibles en français, anglais, russe, allemand, espagnol et turc.',
          ],
        },
        {
          title: 'Achats et restauration',
          paragraphs: [
            'Le premier jour et la première nuit sont gratuits. Un achat intégré unique et non consommable débloque le jeu complet. Pour restaurer cet achat, sélectionnez « Restaurer les achats » sur l’écran de déverrouillage et connectez-vous au compte Apple utilisé lors de l’achat.',
            'Apple traite les paiements. N’indiquez jamais d’informations de carte bancaire dans une demande d’assistance. Pour toute question relative à la facturation ou à un remboursement, contactez l’assistance Apple.',
          ],
        },
        {
          title: 'Confidentialité',
          paragraphs: [
            {
              before: 'Wardflame stocke la progression et les réglages localement et ne dispose d’aucun service d’analyse ni de publicité. Consultez la ',
              label: 'politique de confidentialité',
              section: 'privacy',
              after: ' pour lire la politique complète.',
            },
          ],
        },
      ],
    },
    terms: {
      metadataTitle: 'Conditions d’utilisation',
      metadataDescription: 'Conditions d’utilisation du site, licence App Store, achats, propriété intellectuelle et disponibilité de Wardflame.',
      index: 'Conditions / 22 août 2026',
      title: 'Conditions d’utilisation',
      intro: 'Ces conditions s’appliquent au site de Wardflame et à ses ressources d’assistance. Le jeu est concédé sous licence via l’App Store.',
      sections: [
        {
          title: 'Utilisation du site',
          paragraphs: [
            'Vous pouvez utiliser wardflame.com pour vous informer sur Wardflame, consulter des captures du jeu et accéder à l’assistance. Ne perturbez pas le fonctionnement du site, ne tentez aucun accès non autorisé et n’utilisez pas son contenu de manière trompeuse ou illicite.',
          ],
        },
        {
          title: 'Licence du jeu',
          paragraphs: [
            {
              before: 'Lorsque Wardflame sera disponible sur l’App Store, les conditions de licence affichées sur sa page produit s’appliqueront. Sauf indication contraire sur cette page, le ',
              label: 'Contrat de licence d’utilisateur final standard',
              href: appleEula,
              after: ' d’Apple régira la licence du jeu. Cette page ne constitue pas un contrat de licence personnalisé.',
            },
          ],
        },
        {
          title: 'Achats',
          paragraphs: [
            'Le premier jour et la première nuit sont gratuits, puis un achat intégré unique et non consommable débloque le jeu complet. L’App Store affiche le prix et la devise correspondant à votre région. Apple traite le paiement, la restauration, la facturation et les demandes de remboursement selon ses propres conditions.',
          ],
        },
        {
          title: 'Propriété intellectuelle',
          paragraphs: [
            'Wardflame, son code, ses graphismes, ses contenus audio, ses textes et les ressources du site sont protégés par les lois applicables en matière de propriété intellectuelle. Vous pouvez partager des liens et des captures d’écran non modifiées pour discuter du jeu, le critiquer ou en rendre compte. Aucune licence plus étendue n’est accordée.',
          ],
        },
        {
          title: 'Disponibilité',
          paragraphs: [
            'Wardflame est en cours de préparation pour une sortie sur l’App Store. Les fonctionnalités et la compatibilité peuvent évoluer avant ou après la sortie. Le site est fourni sous réserve de disponibilité et peut être mis à jour ou temporairement inaccessible.',
          ],
        },
        {
          title: 'Contact et modifications',
          paragraphs: [
            {
              before: 'Pour toute question, écrivez à support@wardflame.com ou consultez l’',
              label: 'assistance Wardflame',
              section: 'support',
              after: '. Toute modification substantielle de ces conditions sera publiée ici avec une nouvelle date.',
            },
          ],
        },
      ],
      date: 'En vigueur le 22 août 2026',
    },
  },
  es: {
    privacy: {
      metadataTitle: 'Política de privacidad',
      metadataDescription: 'Cómo gestionan Wardflame y wardflame.com los datos del juego, las compras, los registros del sitio web, las cookies y el seguimiento.',
      index: 'Privacidad / 30 ago 2026',
      title: 'Política de privacidad',
      intro: 'Wardflame no recopila datos del juego con fines de análisis, publicidad o seguimiento.',
      sections: [
        {
          title: 'El juego',
          paragraphs: [
            'Wardflame no recopila, vende ni utiliza datos personales con fines de seguimiento o publicidad. El juego no utiliza servicios de análisis ni publicidad.',
            'Los datos de progreso, los ajustes y los informes de diagnóstico locales permanecen en tu dispositivo. El manifiesto de privacidad de Apple incluido con Wardflame declara que no se recopila ningún tipo de dato ni se realiza seguimiento.',
          ],
        },
        {
          title: 'Multijugador mediante Game Center',
          paragraphs: [
            'Game Center solo se utiliza cuando eliges «Jugar con amigos», para iniciar sesión, enviar invitaciones y crear la partida. La identidad de los jugadores, la composición de la partida y los datos de juego pasan entre los participantes a través del servicio de Apple. Wardflame no tiene cuentas ni servidores de juego propios. Apple trata los datos de Game Center conforme a su propia política de privacidad.',
          ],
        },
        {
          title: 'Compras',
          paragraphs: [
            'Apple procesa mediante StoreKit la compra que desbloquea el juego completo y su restauración. Wardflame solo recibe el estado de desbloqueo necesario para el juego. No recibe los datos de tu tarjeta de pago. Apple gestiona los datos de la compra conforme a su propia política de privacidad.',
          ],
        },
        {
          title: 'Eliminación de datos locales',
          paragraphs: [
            'Al eliminar Wardflame se borran los datos almacenados localmente, sin perjuicio de los mecanismos de copia de seguridad del dispositivo y del App Store controlados por Apple. El juego no mantiene cuentas de jugador ni perfiles en la nube propios.',
          ],
        },
        {
          title: 'Este sitio web',
          paragraphs: [
            'Wardflame.com utiliza Vercel Web Analytics y Speed Insights para medir de forma anónima las visitas a páginas y el rendimiento. Estas herramientas no utilizan cookies. Los datos agregados pueden incluir la fecha y hora, la ruta o URL, los parámetros de consulta filtrados, el sitio de procedencia, el país o la región aproximados, el navegador, el sistema operativo, el tipo de dispositivo, la velocidad de la conexión y las métricas Core Web Vitals. Estos datos no se asocian con ningún visitante ni con ninguna dirección IP.',
            'No enviamos eventos personalizados, datos de cuentas o pagos ni identificadores publicitarios. Wardflame.com no utiliza rastreadores publicitarios ni crea perfiles publicitarios.',
            'Con el plan Vercel Hobby actual, el período de consulta es de un mes para Web Analytics y de siete días para Speed Insights. Vercel puede conservar los datos de Web Analytics más allá del período visible. El hash temporal de visitante que utiliza Web Analytics caduca después de 24 horas. Eliminar los componentes y desactivar los servicios detiene la recopilación futura. Como las métricas son agregadas y no pueden vincularse a una persona concreta, no existe un registro analítico individual que podamos consultar o eliminar por separado.',
            'El proveedor de alojamiento y seguridad puede tratar cierta información técnica limitada, como la dirección IP, el agente de usuario, la URL solicitada y las marcas de tiempo de los registros del servidor, con el fin de ofrecer y proteger el sitio.',
            'Si escribes al soporte por correo electrónico, Wardflame recibe la dirección del remitente, el mensaje, los archivos adjuntos y los metadatos habituales de entrega. Cloudflare Email Routing y Google procesan estos datos para entregar el mensaje. Wardflame solo los utiliza para responder a la solicitud y diagnosticar el problema descrito. Incluye únicamente la información necesaria y nunca envíes datos de tarjetas de pago ni otra información sensible.',
            'La correspondencia con el soporte se conserva durante un máximo de 12 meses después de la última respuesta y luego se elimina, salvo que la ley exija conservarla durante más tiempo o sea necesario para prevenir abusos. Puedes solicitar su eliminación anticipada escribiendo a support@wardflame.com desde la dirección utilizada en la conversación. Exigimos a Cloudflare y Google un nivel de protección al menos equivalente al descrito en esta política. Sus copias residuales de seguridad pueden conservarse temporalmente conforme a sus calendarios de eliminación.',
          ],
        },
        {
          title: 'Cambios y contacto',
          paragraphs: [
            {
              before: 'Esta política se actualizará antes de cualquier lanzamiento que incorpore una nueva recopilación de datos o un seguimiento no esencial en el sitio web. Si tienes alguna pregunta, utiliza la ',
              label: 'página de soporte de Wardflame',
              section: 'support',
              after: '.',
            },
          ],
        },
      ],
      date: 'Actualizada el 30 de agosto de 2026',
    },
    support: {
      metadataTitle: 'Soporte',
      metadataDescription: 'Soporte de Wardflame, estado del lanzamiento, requisitos del dispositivo, ayuda para restaurar compras e informes de errores.',
      index: 'Soporte / Wardflame',
      title: 'Soporte',
      intro: 'Aquí puedes obtener ayuda con Wardflame, informar de un problema o hacer una pregunta.',
      cta: 'Abrir una solicitud de soporte',
      note: 'El correo electrónico es el canal oficial de soporte y no requiere una cuenta. Escribe a support@wardflame.com. No envíes datos de tarjetas de pago ni otra información sensible.',
      sections: [
        {
          title: 'Qué debes incluir',
          items: [
            'El modelo de tu iPhone, iPad o Mac y la versión del sistema operativo.',
            'La versión de Wardflame que se muestra en la aplicación.',
            'Qué hiciste, qué ocurrió y qué esperabas que ocurriera.',
            'Una captura de pantalla o una breve grabación de pantalla cuando ayude a explicar el problema.',
          ],
        },
        {
          title: 'Dispositivos compatibles',
          paragraphs: [
            'Wardflame es compatible con iPhone y iPad que usen iOS 17.0, iPadOS 17.0 o versiones posteriores, así como con Mac. En móviles se juega en horizontal. El juego y este sitio web están disponibles en español, inglés, ruso, alemán, francés y turco.',
          ],
        },
        {
          title: 'Compras y restauración',
          paragraphs: [
            'El primer día y la primera noche dentro del juego son gratuitos. Una única compra integrada no consumible desbloquea el juego completo. Para restaurarla, utiliza «Restaurar compras» en la pantalla de desbloqueo tras iniciar sesión con la cuenta de Apple que utilizaste para la compra.',
            'Apple procesa los pagos. Nunca incluyas datos de tarjetas de pago en una solicitud de soporte. Para cuestiones de facturación o reembolso, ponte en contacto con el soporte de Apple.',
          ],
        },
        {
          title: 'Privacidad',
          paragraphs: [
            {
              before: 'Wardflame almacena el progreso y los ajustes localmente y no utiliza servicios de análisis ni publicidad. Consulta la página de ',
              label: 'Privacidad',
              section: 'privacy',
              after: ' para leer la política completa.',
            },
          ],
        },
      ],
    },
    terms: {
      metadataTitle: 'Términos',
      metadataDescription: 'Términos del sitio web, licencia del App Store, compras, propiedad intelectual y disponibilidad de Wardflame.',
      index: 'Términos / 22 ago 2026',
      title: 'Términos',
      intro: 'Estos términos se aplican al sitio web de Wardflame y a sus materiales de soporte. El juego se licencia a través del App Store.',
      sections: [
        {
          title: 'Uso del sitio web',
          paragraphs: [
            'Puedes utilizar wardflame.com para informarte sobre Wardflame, ver capturas del juego y acceder al soporte. No interfieras con el sitio, no intentes obtener acceso no autorizado ni utilices su contenido de manera engañosa o ilícita.',
          ],
        },
        {
          title: 'Licencia del juego',
          paragraphs: [
            {
              before: 'Cuando Wardflame se distribuya a través del App Store, se aplicarán los términos de licencia mostrados en su página de producto. Salvo que esa página indique lo contrario, el ',
              label: 'Contrato de licencia de usuario final estándar',
              href: appleEula,
              after: ' de Apple regirá la licencia del juego. Esta página no constituye un contrato de licencia personalizado.',
            },
          ],
        },
        {
          title: 'Compras',
          paragraphs: [
            'El primer día y la primera noche dentro del juego se ofrecen sin coste. Después, una única compra integrada no consumible permite acceder al juego completo. El App Store muestra el precio y la moneda correspondientes a tu región. Apple procesa los pagos, la restauración, la facturación y las solicitudes de reembolso conforme a sus términos.',
          ],
        },
        {
          title: 'Propiedad intelectual',
          paragraphs: [
            'Wardflame, su código, gráficos, audio, textos y materiales del sitio web están protegidos por las leyes de propiedad intelectual aplicables. Puedes compartir enlaces y capturas sin modificar para debates, reseñas y contenido sobre partidas. No se concede ninguna licencia más amplia.',
          ],
        },
        {
          title: 'Disponibilidad',
          paragraphs: [
            'Wardflame se está preparando para su lanzamiento en el App Store. Las funciones y la compatibilidad pueden actualizarse antes o después del lanzamiento. El sitio web se proporciona según su disponibilidad y puede actualizarse o quedar temporalmente fuera de servicio.',
          ],
        },
        {
          title: 'Contacto y cambios',
          paragraphs: [
            {
              before: 'Puedes enviar tus preguntas a través del ',
              label: 'soporte de Wardflame',
              section: 'support',
              after: '. Los cambios sustanciales de estos términos se publicarán aquí con una nueva fecha.',
            },
          ],
        },
      ],
      date: 'En vigor desde el 22 de agosto de 2026',
    },
  },
  tr: {
    privacy: {
      metadataTitle: 'Gizlilik Politikası',
      metadataDescription: 'Wardflame ve wardflame.com oyun verilerini, satın alımları, web sitesi günlüklerini, çerezleri ve izlemeyi nasıl ele alır.',
      index: 'Gizlilik / 30 Ağu 2026',
      title: 'Gizlilik Politikası',
      intro: 'Wardflame analiz, reklam veya izleme amacıyla oyun verisi toplamaz.',
      sections: [
        {
          title: 'Oyun',
          paragraphs: [
            'Wardflame kişisel verileri toplamaz veya satmaz; izleme ya da reklam amacıyla kullanmaz. Oyunda analiz veya reklam arka ucu bulunmaz.',
            'Oyun ilerlemesi, ayarlar ve yerel tanılama raporları cihazınızda kalır. Wardflame’in Apple gizlilik manifesti, hiçbir veri türünün toplanmadığını ve izleme yapılmadığını beyan eder.',
          ],
        },
        {
          title: 'Game Center çok oyunculu oyun',
          paragraphs: [
            'Game Center yalnızca Arkadaşlarınla Oyna seçildiğinde giriş, davetler ve eşleştirme için kullanılır. Oyuncu kimliği, maç kadrosu ve oyun verileri Apple’ın hizmeti üzerinden katılımcılar arasında iletilir. Wardflame’in kendine ait hesapları veya oyun sunucuları yoktur. Apple, Game Center verilerini kendi gizlilik politikası kapsamında işler.',
          ],
        },
        {
          title: 'Satın alımlar',
          paragraphs: [
            'Tam oyun satın alımları ve satın alımların geri yüklenmesi Apple tarafından StoreKit üzerinden işlenir. Wardflame yalnızca oyunun kilidini açmak için gereken erişim hakkı durumunu alır. Ödeme kartı bilgilerinizi almaz. Apple, satın alım verilerini kendi gizlilik politikası kapsamında işler.',
          ],
        },
        {
          title: 'Yerel verileri silme',
          paragraphs: [
            'Wardflame’i silmek, Apple’ın kontrol ettiği cihaz ve App Store yedekleme mekanizmalarına tabi olarak, yerel olarak saklanan verileri kaldırır. Oyunun kendine ait uzaktaki bir oyuncu hesabı veya bulut profili yoktur.',
          ],
        },
        {
          title: 'Bu web sitesi',
          paragraphs: [
            'Wardflame.com, sayfa görüntülemelerini ve performansı anonim olarak ölçmek için Vercel Web Analytics ve Speed Insights kullanır. Bu araçlar çerez kullanmaz. Toplulaştırılmış veriler zaman damgası, rota veya URL, filtrelenmiş sorgu parametreleri, yönlendiren site, yaklaşık ülke veya bölge, tarayıcı, işletim sistemi, cihaz türü, ağ hızı ve Core Web Vitals ölçümlerini içerebilir. Bu veriler bir ziyaretçiyle veya IP adresiyle ilişkilendirilmez.',
            'Özel etkinlikler, hesap ya da ödeme bilgileri veya reklam tanımlayıcıları göndermeyiz. Wardflame.com reklam izleyicileri kullanmaz ve reklam profilleri oluşturmaz.',
            'Mevcut Vercel Hobby planında raporlama aralığı Web Analytics için bir ay, Speed Insights için yedi gündür. Vercel, Web Analytics verilerini görünür raporlama aralığından daha uzun süre saklayabilir. Web Analytics tarafından kullanılan geçici ziyaretçi karması 24 saat sonra silinir. Bileşenlerin kaldırılması ve hizmetlerin devre dışı bırakılması gelecekteki veri toplamayı durdurur. Ölçümler toplulaştırıldığı ve belirli bir ziyaretçiyle ilişkilendirilemediği için ayrı olarak erişebileceğimiz veya silebileceğimiz ziyaretçiye özel bir analiz kaydı yoktur.',
            'Barındırma ve güvenlik sağlayıcısı; siteyi sunmak ve korumak amacıyla sunucu günlüklerinde IP adresi, kullanıcı aracısı, istenen URL ve zaman damgası gibi sınırlı teknik bilgileri işleyebilir.',
            'Destek için e-posta gönderirseniz Wardflame gönderen adresini, mesajı, ekleri ve olağan e-posta iletim meta verilerini alır. Cloudflare Email Routing ve Google, mesajı iletmek için bu bilgileri işler. Bilgiler yalnızca yanıt vermek ve bildirilen sorunu teşhis etmek amacıyla kullanılır. Yalnızca destek için gerekli bilgileri gönderin; ödeme kartı bilgilerini veya başka hassas bilgileri asla paylaşmayın.',
            'Destek yazışmaları son yanıttan sonra en fazla 12 ay saklanır ve daha uzun saklama kanunen zorunlu ya da kötüye kullanımı önlemek için gerekli değilse bu sürenin sonunda silinir. Daha erken silinmesini, yazışmada kullandığınız adresten support@wardflame.com adresine yazarak isteyebilirsiniz. Cloudflare ve Google’ın bu politikada açıklanan düzeye en az eşdeğer koruma sağlamasını şart koşarız. Yedek sistemlerindeki kalıntı kopyalar, kendi silme takvimleri uyarınca geçici olarak kalabilir.',
          ],
        },
        {
          title: 'Değişiklikler ve iletişim',
          paragraphs: [
            {
              before: 'Bu politika, yeni bir veri toplama biçimi veya web sitesinde zorunlu olmayan izleme özelliği getiren herhangi bir sürümden önce güncellenecektir. Sorularınız için ',
              label: 'Wardflame destek sayfasını',
              section: 'support',
              after: ' kullanın.',
            },
          ],
        },
      ],
      date: '30 Ağustos 2026 tarihinde güncellendi',
    },
    support: {
      metadataTitle: 'Destek',
      metadataDescription: 'Wardflame desteği, çıkış durumu, cihaz gereksinimleri, satın alımları geri yükleme yardımı ve hata bildirme.',
      index: 'Destek / Wardflame',
      title: 'Destek',
      intro: 'Wardflame ile ilgili yardım alabilir, bir sorunu bildirebilir veya soru sorabilirsiniz.',
      cta: 'Destek talebi aç',
      note: 'E-posta resmî destek kanalıdır ve hesap gerektirmez. support@wardflame.com adresine yazın. Ödeme kartı bilgilerini veya diğer hassas bilgileri göndermeyin.',
      sections: [
        {
          title: 'Neleri eklemelisiniz',
          items: [
            'iPhone, iPad veya Mac modeliniz ile işletim sistemi sürümü.',
            'Uygulamada gösterilen Wardflame sürümü.',
            'Ne yaptığınız, ne olduğu ve ne olmasını beklediğiniz.',
            'Sorunu açıklamaya yardımcı olacaksa ekran görüntüsü veya kısa bir ekran kaydı.',
          ],
        },
        {
          title: 'Desteklenen cihazlar',
          paragraphs: [
            'Wardflame, iOS veya iPadOS 17.0 ya da sonraki bir sürümü çalıştıran iPhone ve iPad cihazlarının yanı sıra Mac’i destekler. Mobil sürüm yatay konumda oynanır. Oyun ve bu web sitesi Türkçe, İngilizce, Rusça, Almanca, Fransızca ve İspanyolca olarak sunulur.',
          ],
        },
        {
          title: 'Satın alımlar ve geri yükleme',
          paragraphs: [
            'Oyundaki ilk gündüz ve ilk gece ücretsizdir. Tek bir tüketilemeyen satın alım tam oyunun kilidini açar. Satın alımı geri yüklemek için, satın alımı yapan Apple Hesabı ile giriş yapmışken kilit açma ekranındaki Satın Alımları Geri Yükle seçeneğini kullanın.',
            'Ödemeleri Apple işler. Destek talebine asla kart bilgisi eklemeyin. Faturalandırma veya geri ödeme soruları için Apple Destek ile iletişime geçin.',
          ],
        },
        {
          title: 'Gizlilik',
          paragraphs: [
            {
              before: 'Wardflame ilerleme ve ayarları yerel olarak saklar; analiz veya reklam arka ucu çalıştırmaz. Politikanın tamamı için ',
              label: 'Gizlilik sayfasına',
              section: 'privacy',
              after: ' bakın.',
            },
          ],
        },
      ],
    },
    terms: {
      metadataTitle: 'Koşullar',
      metadataDescription: 'Wardflame için web sitesi koşulları, App Store lisanslaması, satın alımlar, fikrî mülkiyet ve kullanılabilirlik.',
      index: 'Koşullar / 22 Ağu 2026',
      title: 'Koşullar',
      intro: 'Bu koşullar Wardflame web sitesini ve destek materyallerini kapsar. Oyun App Store üzerinden lisanslanır.',
      sections: [
        {
          title: 'Web sitesinin kullanımı',
          paragraphs: [
            'Wardflame hakkında bilgi edinmek, oyun görüntülerini incelemek ve desteğe ulaşmak için wardflame.com’u kullanabilirsiniz. Siteye müdahale etmeyin, yetkisiz erişim sağlamaya çalışmayın veya içeriğini yanıltıcı ya da yasa dışı bir şekilde kullanmayın.',
          ],
        },
        {
          title: 'Oyun lisansı',
          paragraphs: [
            {
              before: 'Wardflame App Store üzerinden dağıtıldığında, ürün sayfasında gösterilen lisans koşulları geçerli olur. Sayfada aksi belirtilmedikçe Apple’ın ',
              label: 'Standart Son Kullanıcı Lisans Sözleşmesi',
              href: appleEula,
              after: ' oyun lisansını düzenler. Bu sayfa özel bir EULA değildir.',
            },
          ],
        },
        {
          title: 'Satın alımlar',
          paragraphs: [
            'Oyundaki ilk gündüz ve ilk gece ücretsizdir; ardından tek bir tüketilemeyen satın alım tam oyunun kilidini açar. App Store bölgenize ait fiyatı ve para birimini gösterir. Apple; ödeme, geri yükleme, faturalandırma ve geri ödeme taleplerini kendi koşulları uyarınca işler.',
          ],
        },
        {
          title: 'Fikrî mülkiyet',
          paragraphs: [
            'Wardflame; kodu, oyun grafikleri, sesleri, metinleri ve web sitesi materyalleriyle birlikte yürürlükteki fikrî mülkiyet yasalarıyla korunur. Tartışmalar, incelemeler ve oynanış içerikleri için bağlantıları ve değiştirilmemiş ekran görüntülerini paylaşabilirsiniz. Daha geniş bir lisans verilmez.',
          ],
        },
        {
          title: 'Kullanılabilirlik',
          paragraphs: [
            'Wardflame, App Store çıkışı için hazırlanıyor. Özellikler ve uyumluluk çıkıştan önce veya sonra güncellenebilir. Web sitesi mevcut haliyle sunulur ve güncellenebilir veya geçici olarak kullanılamayabilir.',
          ],
        },
        {
          title: 'İletişim ve değişiklikler',
          paragraphs: [
            {
              before: 'Sorular ',
              label: 'Wardflame Destek',
              section: 'support',
              after: ' üzerinden gönderilebilir. Bu koşullardaki önemli değişiklikler burada yeni bir tarihle yayımlanacaktır.',
            },
          ],
        },
      ],
      date: '22 Ağustos 2026 tarihinden itibaren geçerlidir',
    },
  },
};
