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
      index: 'Datenschutz / 21. Aug. 2026',
      title: 'Datenschutzerklärung',
      intro: 'Wardflame erhebt keine Spieldaten für Analyse, Werbung oder Tracking.',
      sections: [
        {
          title: 'Das Spiel',
          paragraphs: [
            'Wardflame erhebt, übermittelt oder verkauft keine personenbezogenen Daten und verwendet sie nicht für Tracking oder Werbung. Das Spiel hat kein Analyse- oder Werbe-Backend.',
            'Spielfortschritt, Einstellungen und lokale Diagnoseberichte bleiben auf deinem Gerät. Das Apple-Datenschutzmanifest von Wardflame weist keine erfassten Datentypen und kein Tracking aus.',
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
            'Wenn du Wardflame löschst, werden die lokal gespeicherten Daten der App entfernt. Davon ausgenommen können Sicherungsmechanismen des Geräts und des App Store sein, die von Apple gesteuert werden. Das Spiel führt kein entferntes Spielerkonto und kein Cloud-Profil.',
          ],
        },
        {
          title: 'Diese Website',
          paragraphs: [
            'Wardflame.com verwendet keine Werbetracker, keine Analysewerkzeuge und keine nicht notwendigen Cookies. Die Website selbst setzt keine Cookies. Der Hosting- und Sicherheitsanbieter kann begrenzte technische Informationen wie IP-Adresse, User-Agent, angeforderte URL und Zeitstempel in Serverprotokollen verarbeiten, um die Website bereitzustellen und zu schützen. Wir verwenden diese Informationen nicht, um Werbeprofile zu erstellen.',
            'Wenn du einem Link zu Apple oder GitHub folgst, verarbeiten diese Dienste Daten nach ihren eigenen Richtlinien. Informationen in einer öffentlichen GitHub-Supportanfrage sind für andere sichtbar. Gib dort keine Zahlungsdaten oder anderen vertraulichen Informationen an.',
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
      date: 'Gültig ab 21. August 2026 · Angaben zur Website aktualisiert am 22. August 2026',
    },
    support: {
      metadataTitle: 'Support',
      metadataDescription: 'Wardflame-Support, Veröffentlichungsstatus, Geräteanforderungen, Hilfe beim Wiederherstellen von Käufen und Fehlermeldungen.',
      index: 'Support / Öffentlich',
      title: 'Support',
      intro: 'Wardflame befindet sich in Entwicklung. Du kannst trotzdem ein Problem mit einem Test-Build melden oder eine Frage stellen.',
      cta: 'Supportanfrage öffnen',
      note: 'Supportanfragen werden in einem öffentlichen GitHub-Repository bearbeitet. Ein kostenloses GitHub-Konto ist erforderlich. Veröffentliche keine Zahlungsdaten, privaten Diagnosedateien oder anderen vertraulichen Informationen.',
      sections: [
        {
          title: 'Welche Angaben wir brauchen',
          items: [
            'Dein iPhone- oder iPad-Modell und deine iOS-/iPadOS-Version.',
            'Die Wardflame-Version, die in der App angezeigt wird.',
            'Was du getan hast, was passiert ist und was du erwartet hast.',
            'Einen Screenshot oder eine kurze Bildschirmaufnahme, wenn das Problem dadurch verständlicher wird.',
          ],
        },
        {
          title: 'Unterstützte Geräte',
          paragraphs: [
            'Der aktuelle Build ist für iPhone und iPad mit iOS beziehungsweise iPadOS 17.0 oder neuer vorgesehen. Wardflame wird im Querformat gespielt und unterstützt Englisch, Russisch, Deutsch, Französisch, Spanisch und Türkisch.',
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
            'Sie dürfen wardflame.com nutzen, um sich über Wardflame zu informieren, Screenshots aus dem Spiel anzusehen und den Support zu erreichen. Stören Sie den Betrieb der Website nicht, versuchen Sie keinen unbefugten Zugriff und verwenden Sie die Inhalte nicht irreführend oder rechtswidrig.',
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
            'Das derzeitige Konzept sieht den ersten Spieltag und die erste Nacht kostenlos vor; anschließend schaltet ein einmaliger, nicht verbrauchbarer Kauf das vollständige Spiel frei. Preis und Währung zeigt der App Store für Ihre Region an. Apple verarbeitet Zahlung, Wiederherstellung, Abrechnung und Erstattungsanfragen nach seinen Bedingungen.',
          ],
        },
        {
          title: 'Geistiges Eigentum',
          paragraphs: [
            'Wardflame, der Code, die Spielgrafiken, Audiodateien, Texte und Materialien der Website sind durch die geltenden Gesetze zum Schutz geistigen Eigentums geschützt. Sie dürfen Links und unveränderte Screenshots für Diskussionen, Rezensionen und Berichterstattung über das Spiel teilen. Eine weitergehende Lizenz wird nicht eingeräumt.',
          ],
        },
        {
          title: 'Verfügbarkeit',
          paragraphs: [
            'Wardflame befindet sich in Entwicklung. Funktionen, Kompatibilität, Veröffentlichungszeitpunkt und Verfügbarkeit können sich vor der Veröffentlichung ändern. Die Website wird nach Verfügbarkeit bereitgestellt und kann aktualisiert werden oder vorübergehend nicht erreichbar sein.',
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
      metadataDescription: 'Comment Wardflame et wardflame.com traitent les données du jeu, les achats, les journaux du site, les cookies et le suivi.',
      index: 'Confidentialité / 21 août 2026',
      title: 'Politique de confidentialité',
      intro: 'Wardflame ne collecte aucune donnée du jeu à des fins d’analyse, de publicité ou de suivi.',
      sections: [
        {
          title: 'Le jeu',
          paragraphs: [
            'Wardflame ne collecte, ne transmet ni ne vend de données personnelles, et ne les utilise pas à des fins de suivi ou de publicité. Le jeu ne dispose d’aucun service d’analyse ou de publicité.',
            'La progression, les réglages et les rapports de diagnostic locaux restent sur votre appareil. Le manifeste de confidentialité Apple de Wardflame ne déclare aucune catégorie de données collectée ni aucun suivi.',
          ],
        },
        {
          title: 'Achats',
          paragraphs: [
            'Les achats du jeu complet et leur restauration sont traités par Apple via StoreKit. Wardflame ne reçoit que le statut d’accès nécessaire pour déverrouiller le jeu. Wardflame ne reçoit pas les données de votre carte de paiement. Apple traite les données d’achat conformément à sa propre politique de confidentialité.',
          ],
        },
        {
          title: 'Suppression des données locales',
          paragraphs: [
            'La suppression de Wardflame efface les données stockées localement par l’app, sous réserve des mécanismes de sauvegarde de l’appareil et de l’App Store gérés par Apple. Le jeu ne conserve aucun compte joueur distant ni profil dans le cloud.',
          ],
        },
        {
          title: 'Ce site',
          paragraphs: [
            'Wardflame.com n’utilise aucun traceur publicitaire, aucun outil d’analyse ni aucun cookie non essentiel, et le site ne dépose directement aucun cookie. Le fournisseur d’hébergement et de sécurité peut traiter des informations techniques limitées, telles que l’adresse IP, le user-agent, l’URL demandée et les horodatages dans les journaux du serveur, afin de fournir et protéger le site. Nous n’utilisons pas ces informations pour créer des profils publicitaires.',
            'Si vous suivez un lien vers Apple ou GitHub, ces services traitent les données selon leurs propres politiques. Les informations publiées dans une demande d’assistance GitHub publique sont visibles par tous : n’y indiquez aucune donnée de paiement ni autre information sensible.',
          ],
        },
        {
          title: 'Modifications et contact',
          paragraphs: [
            {
              before: 'Cette politique sera mise à jour avant toute version qui introduirait une nouvelle collecte de données ou un suivi non essentiel sur le site. Pour toute question, utilisez la ',
              label: 'page d’assistance de Wardflame',
              section: 'support',
              after: '.',
            },
          ],
        },
      ],
      date: 'En vigueur le 21 août 2026 · Informations relatives au site mises à jour le 22 août 2026',
    },
    support: {
      metadataTitle: 'Assistance',
      metadataDescription: 'Assistance Wardflame, état de la sortie, appareils requis, aide à la restauration des achats et signalement de bugs.',
      index: 'Assistance / Public',
      title: 'Assistance',
      intro: 'Wardflame est en cours de développement. Vous pouvez néanmoins signaler un problème rencontré dans une version de test ou poser une question.',
      cta: 'Ouvrir une demande d’assistance',
      note: 'Les demandes d’assistance sont traitées dans un dépôt GitHub public. Un compte GitHub gratuit est nécessaire. Ne publiez aucune donnée de paiement, aucun fichier de diagnostic privé ni aucune autre information sensible.',
      sections: [
        {
          title: 'Informations à fournir',
          items: [
            'Le modèle de votre iPhone ou iPad et la version d’iOS/iPadOS.',
            'La version de Wardflame affichée dans l’app.',
            'Ce que vous avez fait, ce qui s’est produit et ce à quoi vous vous attendiez.',
            'Une capture d’écran ou un court enregistrement d’écran si cela aide à expliquer le problème.',
          ],
        },
        {
          title: 'Appareils compatibles',
          paragraphs: [
            'La version actuelle cible les iPhone et iPad sous iOS ou iPadOS 17.0 ou version ultérieure. Wardflame se joue en mode paysage et prend en charge l’anglais, le russe, l’allemand, le français, l’espagnol et le turc.',
          ],
        },
        {
          title: 'Achats et restauration',
          paragraphs: [
            'Le premier jour et la première nuit en jeu sont gratuits. Un achat intégré unique et non consommable débloque le jeu complet. Pour le restaurer, utilisez « Restaurer les achats » sur l’écran de déverrouillage en étant connecté au compte Apple ayant servi à l’achat.',
            'Apple traite les paiements. N’indiquez jamais d’informations de carte bancaire dans une demande d’assistance. Pour toute question relative à la facturation ou à un remboursement, contactez l’assistance Apple.',
          ],
        },
        {
          title: 'Confidentialité',
          paragraphs: [
            {
              before: 'Wardflame stocke la progression et les réglages localement et n’exploite aucun service d’analyse ou de publicité. Consultez la page ',
              label: 'Confidentialité',
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
      intro: 'Ces conditions couvrent le site de Wardflame et les ressources d’assistance. Le jeu est concédé sous licence via l’App Store.',
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
              before: 'Lorsque Wardflame sera distribué via l’App Store, les conditions de licence affichées sur sa page produit s’appliqueront. Sauf indication contraire sur cette page, le ',
              label: 'Contrat de licence d’utilisateur final standard',
              href: appleEula,
              after: ' d’Apple régira la licence du jeu. Cette page ne constitue pas un contrat de licence personnalisé.',
            },
          ],
        },
        {
          title: 'Achats',
          paragraphs: [
            'La conception actuelle prévoit le premier jour et la première nuit en jeu sans frais, puis un achat intégré non consommable unique pour débloquer le jeu complet. Le prix et la devise sont affichés par l’App Store pour votre région. Apple traite le paiement, la restauration, la facturation et les demandes de remboursement selon ses propres conditions.',
          ],
        },
        {
          title: 'Propriété intellectuelle',
          paragraphs: [
            'Wardflame, son code, ses graphismes, ses contenus audio, ses textes et les ressources du site sont protégés par les lois applicables en matière de propriété intellectuelle. Vous pouvez partager des liens et des captures d’écran non modifiées à des fins de discussion, de critique et de couverture du jeu. Aucune licence plus étendue n’est accordée.',
          ],
        },
        {
          title: 'Disponibilité',
          paragraphs: [
            'Wardflame est en cours de développement. Les fonctionnalités, la compatibilité, la date de sortie et la disponibilité peuvent changer avant la sortie. Le site est fourni sous réserve de disponibilité et peut être mis à jour ou temporairement inaccessible.',
          ],
        },
        {
          title: 'Contact et modifications',
          paragraphs: [
            {
              before: 'Vous pouvez envoyer vos questions via l’',
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
      index: 'Privacidad / 21 ago 2026',
      title: 'Política de privacidad',
      intro: 'Wardflame no recopila datos del juego con fines de análisis, publicidad o seguimiento.',
      sections: [
        {
          title: 'El juego',
          paragraphs: [
            'Wardflame no recopila, transmite, vende ni utiliza datos personales con fines de seguimiento o publicidad. El juego no dispone de sistemas de análisis ni publicidad en sus servidores.',
            'El progreso, los ajustes y los informes de diagnóstico locales permanecen en tu dispositivo. El manifiesto de privacidad de Apple incluido con Wardflame declara que no se recopila ningún tipo de dato ni se realiza seguimiento.',
          ],
        },
        {
          title: 'Compras',
          paragraphs: [
            'Las compras del juego completo y la restauración de compras son procesadas por Apple mediante StoreKit. Wardflame solo recibe el estado de la licencia necesario para desbloquear el juego. No recibe los datos de tu tarjeta de pago. Apple gestiona los datos de las compras conforme a su propia política de privacidad.',
          ],
        },
        {
          title: 'Eliminación de datos locales',
          paragraphs: [
            'Al eliminar Wardflame se borran los datos almacenados localmente, sin perjuicio de los mecanismos de copia de seguridad del dispositivo y de App Store controlados por Apple. El juego no mantiene cuentas de jugador ni perfiles en la nube.',
          ],
        },
        {
          title: 'Este sitio web',
          paragraphs: [
            'Wardflame.com no utiliza rastreadores publicitarios, herramientas de análisis ni cookies no esenciales, y el sitio web no instala cookies directamente. El proveedor de alojamiento y seguridad puede tratar cierta información técnica limitada, como la dirección IP, el agente de usuario, la URL solicitada y las marcas de tiempo de los registros del servidor, con el fin de ofrecer y proteger el sitio. No utilizamos esa información para crear perfiles publicitarios.',
            'Si sigues un enlace a Apple o GitHub, esos servicios tratarán los datos conforme a sus propias políticas. La información que publiques en una solicitud de soporte pública de GitHub será visible para otras personas, así que no incluyas datos de pago ni otra información sensible.',
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
      date: 'En vigor desde el 21 de agosto de 2026 · Información del sitio web actualizada el 22 de agosto de 2026',
    },
    support: {
      metadataTitle: 'Soporte',
      metadataDescription: 'Soporte de Wardflame, estado del lanzamiento, requisitos del dispositivo, ayuda para restaurar compras e informes de errores.',
      index: 'Soporte / Público',
      title: 'Soporte',
      intro: 'Wardflame está en desarrollo. Aun así, puedes informar de un problema con una versión de prueba o hacer una pregunta.',
      cta: 'Abrir una solicitud de soporte',
      note: 'Las solicitudes de soporte se gestionan en un repositorio público de GitHub. Se necesita una cuenta gratuita de GitHub. No publiques datos de pago, archivos de diagnóstico privados ni otra información sensible.',
      sections: [
        {
          title: 'Qué debes incluir',
          items: [
            'El modelo de tu iPhone o iPad y la versión de iOS/iPadOS.',
            'La versión de Wardflame que aparece en la aplicación.',
            'Qué hiciste, qué ocurrió y qué esperabas que ocurriera.',
            'Una captura de pantalla o una breve grabación de pantalla cuando ayude a explicar el problema.',
          ],
        },
        {
          title: 'Dispositivos compatibles',
          paragraphs: [
            'La versión actual está destinada a iPhone y iPad con iOS o iPadOS 17.0 o posterior. Wardflame se juega en horizontal y es compatible con inglés, ruso, alemán, francés, español y turco.',
          ],
        },
        {
          title: 'Compras y restauración',
          paragraphs: [
            'El primer día y la primera noche dentro del juego son gratuitos. Una única compra no consumible desbloquea el juego completo. Para restaurarla, utiliza Restaurar compras en la pantalla de desbloqueo mientras hayas iniciado sesión con la cuenta de Apple que realizó la compra.',
            'Apple procesa los pagos. Nunca incluyas datos de tarjetas en una solicitud de soporte. Para cuestiones de facturación o reembolso, ponte en contacto con el soporte de Apple.',
          ],
        },
        {
          title: 'Privacidad',
          paragraphs: [
            {
              before: 'Wardflame almacena el progreso y los ajustes localmente y no dispone de sistemas de análisis ni publicidad en sus servidores. Consulta la página de ',
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
      metadataDescription: 'Términos del sitio web, licencia de App Store, compras, propiedad intelectual y disponibilidad de Wardflame.',
      index: 'Términos / 22 ago 2026',
      title: 'Términos',
      intro: 'Estos términos se aplican al sitio web de Wardflame y a sus materiales de soporte. El juego se licencia a través de App Store.',
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
              before: 'Cuando Wardflame se distribuya a través de App Store, se aplicarán los términos de licencia mostrados en su página de producto. Salvo que esa página indique lo contrario, el ',
              label: 'Contrato de licencia de usuario final estándar',
              href: appleEula,
              after: ' de Apple regirá la licencia del juego. Esta página no constituye un EULA personalizado.',
            },
          ],
        },
        {
          title: 'Compras',
          paragraphs: [
            'El diseño actual ofrece el primer día y la primera noche dentro del juego sin coste, seguidos de una única compra no consumible para acceder al juego completo. App Store muestra el precio y la moneda correspondientes a tu región. Apple procesa los pagos, la restauración, la facturación y las solicitudes de reembolso conforme a sus términos.',
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
            'Wardflame está en desarrollo. Las funciones, la compatibilidad, la fecha de lanzamiento y la disponibilidad pueden cambiar antes del lanzamiento. El sitio web se proporciona según su disponibilidad y puede actualizarse o quedar temporalmente fuera de servicio.',
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
      index: 'Gizlilik / 21 Ağu 2026',
      title: 'Gizlilik Politikası',
      intro: 'Wardflame analiz, reklam veya izleme amacıyla oyun verisi toplamaz.',
      sections: [
        {
          title: 'Oyun',
          paragraphs: [
            'Wardflame kişisel verileri toplamaz, iletmez, satmaz; izleme veya reklam amacıyla kullanmaz. Oyunda analiz ya da reklam arka ucu bulunmaz.',
            'Oyun ilerlemesi, ayarlar ve yerel tanılama raporları cihazınızda kalır. Wardflame’in Apple gizlilik manifesti, hiçbir veri türünün toplanmadığını ve izleme yapılmadığını beyan eder.',
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
            'Wardflame’i silmek, Apple’ın kontrol ettiği cihaz ve App Store yedekleme mekanizmalarına tabi olarak, yerel olarak saklanan verileri kaldırır. Oyun uzaktaki bir oyuncu hesabı veya bulut profili tutmaz.',
          ],
        },
        {
          title: 'Bu web sitesi',
          paragraphs: [
            'Wardflame.com reklam izleyicileri, analiz araçları veya zorunlu olmayan çerezler kullanmaz ve web sitesi doğrudan çerez ayarlamaz. Barındırma ve güvenlik sağlayıcısı; siteyi sunmak ve korumak amacıyla sunucu günlüklerinde IP adresi, kullanıcı aracısı, istenen URL ve zaman damgası gibi sınırlı teknik bilgileri işleyebilir. Bu bilgileri reklam profilleri oluşturmak için kullanmayız.',
            'Apple veya GitHub bağlantısını izlerseniz bu hizmetler verileri kendi politikaları kapsamında işler. Herkese açık bir GitHub destek talebinde paylaştığınız bilgiler başkaları tarafından görülebilir; bu nedenle ödeme bilgilerini veya diğer hassas bilgileri eklemeyin.',
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
      date: '21 Ağustos 2026 tarihinde yürürlüğe girdi · Web sitesi ayrıntıları 22 Ağustos 2026 tarihinde güncellendi',
    },
    support: {
      metadataTitle: 'Destek',
      metadataDescription: 'Wardflame desteği, çıkış durumu, cihaz gereksinimleri, satın alımları geri yükleme yardımı ve hata bildirme.',
      index: 'Destek / Herkese açık',
      title: 'Destek',
      intro: 'Wardflame geliştirme aşamasındadır. Yine de bir test sürümündeki sorunu bildirebilir veya soru sorabilirsiniz.',
      cta: 'Destek talebi aç',
      note: 'Destek talepleri herkese açık bir GitHub deposunda ele alınır. Ücretsiz bir GitHub hesabı gerekir. Ödeme bilgilerini, özel tanılama dosyalarını veya diğer hassas bilgileri paylaşmayın.',
      sections: [
        {
          title: 'Neleri eklemelisiniz',
          items: [
            'iPhone veya iPad modeliniz ile iOS/iPadOS sürümü.',
            'Uygulamada gösterilen Wardflame sürümü.',
            'Ne yaptığınız, ne olduğu ve ne olmasını beklediğiniz.',
            'Sorunu açıklamaya yardımcı olacaksa ekran görüntüsü veya kısa bir ekran kaydı.',
          ],
        },
        {
          title: 'Desteklenen cihazlar',
          paragraphs: [
            'Mevcut sürüm, iOS veya iPadOS 17.0 ya da sonraki bir sürümü çalıştıran iPhone ve iPad cihazlarını hedefler. Wardflame yatay konumda oynanır ve İngilizce, Rusça, Almanca, Fransızca, İspanyolca ve Türkçeyi destekler.',
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
            'Mevcut tasarım, oyundaki ilk gündüzü ve geceyi ücretsiz sunar; ardından tam oyun için tek bir tüketilemeyen satın alım gelir. App Store bölgenize ait fiyatı ve para birimini gösterir. Apple; ödeme, geri yükleme, faturalandırma ve geri ödeme taleplerini kendi koşulları uyarınca işler.',
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
            'Wardflame geliştirme aşamasındadır. Özellikler, uyumluluk, çıkış tarihi ve kullanılabilirlik çıkıştan önce değişebilir. Web sitesi mevcut haliyle sunulur ve güncellenebilir veya geçici olarak kullanılamayabilir.',
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
