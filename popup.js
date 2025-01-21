document.addEventListener("DOMContentLoaded", () => {
  // Translation Object
  const translations = {
    en: {
      settingsTab: "⚙️ Settings",
      aboutTab: "ℹ️ About",
      settingsTitle: "Settings",
      languageLabel: "🌐 Language:",
      displayPositionLabel: "📍 Display Position:",
      topRight: "Top Right",
      topLeft: "Top Left",
      themeLabel: "🎨 Theme:",
      darkTheme: "Dark",
      lightTheme: "Light",
      timerFormatLabel: "⏱ Time Format:",
      minutesFormat: "Minutes",
      hhmmssFormat: "HH:MM:SS",
      applyChanges: "✅ Apply Changes",
      resetSettings: "🔄 Reset",
      aboutTitle: "ℹ️ About",
      aboutParagraph1:
        "This extension helps you unlock the true potential of video playback! 🚀 It calculates the exact amount of time you'll save by speeding up your videos and shows the impact of your increased playback speed. 🎉 Whether you're watching tutorials, lectures, or just bingeing your favorite series, you'll know how much time you're actually gaining. 🕒✨",
      aboutParagraph2:
        "Ever wonder what happens when you bump up the speed from 1x to 2x? This extension not only tells you how much faster you'll finish but also gives you real-time insights into the difference it makes. Perfect for efficiency enthusiasts, students, and anyone who values their time! 💡📚",
      aboutParagraph3:
        "Developed with ❤️ by a solo developer passionate about making your life easier. If you love this extension and want to support its development, you can <strong>Buy Me a Coffee! ☕</strong>",
      thankYou: "Thank you for your support and happy speed-watching! 🥳🎥",
      version: "Version: 1.0",
      modalTitle: "✅ Success",
      modalMessage: "Settings have been applied successfully! 🎉",
      modalOk: "OK",
    },
    es: {
      settingsTab: "⚙️ Configuración",
      aboutTab: "ℹ️ Acerca de",
      settingsTitle: "Configuración",
      languageLabel: "🌐 Idioma:",
      displayPositionLabel: "📍 Posición de Visualización:",
      topRight: "Arriba Derecha",
      topLeft: "Arriba Izquierda",
      themeLabel: "🎨 Tema:",
      darkTheme: "Oscuro",
      lightTheme: "Claro",
      timerFormatLabel: "⏱ Formato de Tiempo:",
      minutesFormat: "Minutos",
      hhmmssFormat: "HH:MM:SS",
      applyChanges: "✅ Aplicar Cambios",
      resetSettings: "🔄 Restablecer",
      aboutTitle: "ℹ️ Acerca de",
      aboutParagraph1:
        "¡Esta extensión te ayuda a desbloquear el verdadero potencial de la reproducción de videos! 🚀 Calcula la cantidad exacta de tiempo que ahorrarás al acelerar tus videos y muestra el impacto de tu velocidad de reproducción aumentada. 🎉 Ya sea que estés viendo tutoriales, conferencias o simplemente viendo tu serie favorita, sabrás cuánto tiempo estás ganando realmente. 🕒✨",
      aboutParagraph2:
        "¿Alguna vez te has preguntado qué sucede cuando aumentas la velocidad de 1x a 2x? Esta extensión no solo te dice cuánto más rápido terminarás, sino que también te ofrece información en tiempo real sobre la diferencia que hace. ¡Perfecto para entusiastas de la eficiencia, estudiantes y cualquier persona que valore su tiempo! 💡📚",
      aboutParagraph3:
        "Desarrollado con ❤️ por un desarrollador independiente apasionado por facilitar tu vida. Si te encanta esta extensión y deseas apoyar su desarrollo, puedes <strong>¡Invitarme a un Café! ☕</strong>",
      thankYou: "¡Gracias por tu apoyo y feliz visualización rápida! 🥳🎥",
      version: "Versión: 1.0.",
      modalTitle: "✅ Éxito",
      modalMessage: "¡Las configuraciones se han aplicado correctamente! 🎉",
      modalOk: "OK",
    },
    ru: {
      settingsTab: "⚙️ Настройки",
      aboutTab: "ℹ️ О программе",
      settingsTitle: "Настройки",
      languageLabel: "🌐 Язык:",
      displayPositionLabel: "📍 Позиция Отображения:",
      topRight: "Верхний Правый",
      topLeft: "Верхний Левый",
      themeLabel: "🎨 Тема:",
      darkTheme: "Темная",
      lightTheme: "Светлая",
      timerFormatLabel: "⏱ Формат Времени:",
      minutesFormat: "Минуты",
      hhmmssFormat: "ЧЧ:ММ:СС",
      applyChanges: "✅ Применить Изменения",
      resetSettings: "🔄 Сбросить",
      aboutTitle: "ℹ️ О программе",
      aboutParagraph1:
        "Это расширение помогает вам раскрыть истинный потенциал воспроизведения видео! 🚀 Оно рассчитывает точное количество времени, которое вы сэкономите, ускоряя свои видео, и показывает влияние вашего увеличенного темпа воспроизведения. 🎉 Независимо от того, смотрите ли вы учебники, лекции или просто наслаждаетесь любимыми сериалами, вы узнаете, сколько времени вы действительно экономите. 🕒✨",
      aboutParagraph2:
        "Задумывались ли вы когда-нибудь, что происходит, когда вы увеличиваете скорость с 1x до 2x? Это расширение не только сообщает вам, насколько быстрее вы закончите, но и предоставляет вам реальные данные о том, какую разницу это делает. Идеально подходит для энтузиастов эффективности, студентов и всех, кто ценит свое время! 💡📚",
      aboutParagraph3:
        "Разработано с ❤️ одним разработчиком, страстно желающим облегчить вашу жизнь. Если вам нравится это расширение и вы хотите поддержать его развитие, вы можете <strong>купить мне кофе! ☕</strong>",
      thankYou:
        "Спасибо за вашу поддержку и приятного быстрого просмотра! 🥳🎥",
      version: "Версия: 1.0.",
      modalTitle: "✅ Успех",
      modalMessage: "Настройки успешно применены! 🎉",
      modalOk: "OK",
    },
    fa: {
      settingsTab: "⚙️ تنظیمات",
      aboutTab: "ℹ️ درباره",
      settingsTitle: "تنظیمات",
      languageLabel: "🌐 زبان:",
      displayPositionLabel: "📍 موقعیت نمایش:",
      topRight: "بالا سمت راست",
      topLeft: "بالا سمت چپ",
      themeLabel: "🎨 تم:",
      darkTheme: "تاریک",
      lightTheme: "روشن",
      timerFormatLabel: "⏱ قالب زمان:",
      minutesFormat: "دقیقه",
      hhmmssFormat: "ساعت:دقیقه:ثانیه",
      applyChanges: "✅ اعمال تغییرات",
      resetSettings: "🔄 بازنشانی",
      aboutTitle: "ℹ️ درباره",
      aboutParagraph1:
        "این افزونه به شما کمک می‌کند تا پتانسیل واقعی پخش ویدیو را کشف کنید! 🚀 زمان دقیقی که با سرعت دادن به ویدیوهای خود صرفه‌جویی خواهید کرد را محاسبه می‌کند و تاثیر افزایش سرعت پخش شما را نشان می‌دهد. 🎉 چه در حال تماشای آموزش‌ها، سخنرانی‌ها باشید یا فقط در حال تماشای سریال مورد علاقه‌تان، خواهید دانست که چقدر زمان واقعی صرفه‌جویی می‌کنید. 🕒✨",
      aboutParagraph2:
        "آیا تا به حال فکر کرده‌اید که وقتی سرعت را از 1x به 2x افزایش می‌دهید چه اتفاقی می‌افتد؟ این افزونه نه تنها به شما می‌گوید چقدر سریع‌تر خواهید تمام کرد، بلکه بینش‌های لحظه‌ای درباره تفاوت ایجاد شده ارائه می‌دهد. مناسب برای علاقه‌مندان به بهره‌وری، دانشجویان و هر کسی که به زمان خود اهمیت می‌دهد! 💡📚",
      aboutParagraph3:
        "با ❤️ توسط یک توسعه‌دهنده مستقل که مشتاق به آسان‌تر کردن زندگی شماست، توسعه یافته است. اگر از این افزونه لذت می‌برید و می‌خواهید از توسعه آن حمایت کنید، می‌توانید <strong>یک قهوه برای من بخرید! ☕</strong>",
      thankYou: "از حمایت شما متشکریم و تماشای سریع خوش بگذرد! 🥳🎥",
      version: "نسخه: 1.0.",
      modalTitle: "✅ موفقیت",
      modalMessage: "تنظیمات با موفقیت اعمال شد! 🎉",
      modalOk: "تایید",
    },
    ar: {
      settingsTab: "⚙️ الإعدادات",
      aboutTab: "ℹ️ عن البرنامج",
      settingsTitle: "الإعدادات",
      languageLabel: "🌐 اللغة:",
      displayPositionLabel: "📍 موضع العرض:",
      topRight: "أعلى اليمين",
      topLeft: "أعلى اليسار",
      themeLabel: "🎨 السمة:",
      darkTheme: "داكن",
      lightTheme: "فاتح",
      timerFormatLabel: "⏱ تنسيق الوقت:",
      minutesFormat: "دقائق",
      hhmmssFormat: "س م:د م:ث م",
      applyChanges: "✅ تطبيق التغييرات",
      resetSettings: "🔄 إعادة تعيين",
      aboutTitle: "ℹ️ عن البرنامج",
      aboutParagraph1:
        "يساعدك هذا الامتداد على استغلال الإمكانيات الحقيقية لتشغيل الفيديو! 🚀 يحسب بالضبط مقدار الوقت الذي ستوفره عن طريق زيادة سرعة فيديوهاتك ويعرض تأثير زيادة سرعة التشغيل لديك. 🎉 سواء كنت تشاهد الدروس أو المحاضرات أو ببساطة تتفرج على سلسلتك المفضلة، ستعرف مقدار الوقت الذي توفره فعليًا. 🕒✨",
      aboutParagraph2:
        "هل تساءلت يومًا عما يحدث عندما تزيد السرعة من 1x إلى 2x؟ هذا الامتداد لا يخبرك فقط بمدى سرعتك في الانتهاء، بل يقدم لك أيضًا رؤى لحظية حول الفرق الذي يحدثه ذلك. مثالي لعشاق الكفاءة والطلاب وأي شخص يقدر وقته! 💡📚",
      aboutParagraph3:
        "تم تطويره مع ❤️ بواسطة مطور مستقل شغوف بجعل حياتك أسهل. إذا كنت تحب هذا الامتداد وترغب في دعم تطويره، يمكنك <strong>شراء قهوة لي! ☕</strong>",
      thankYou: "شكرًا لدعمك واستمتع بمشاهدة سريعة! 🥳🎥",
      version: "الإصدار: 1.0.",
      modalTitle: "✅ نجاح",
      modalMessage: "تم تطبيق الإعدادات بنجاح! 🎉",
      modalOk: "حسنًا",
    },
    fr: {
      settingsTab: "⚙️ Paramètres",
      aboutTab: "ℹ️ À propos",
      settingsTitle: "Paramètres",
      languageLabel: "🌐 Langue:",
      displayPositionLabel: "📍 Position d'Affichage:",
      topRight: "En Haut à Droite",
      topLeft: "En Haut à Gauche",
      themeLabel: "🎨 Thème:",
      darkTheme: "Sombre",
      lightTheme: "Clair",
      timerFormatLabel: "⏱ Format de Temps:",
      minutesFormat: "Minutes",
      hhmmssFormat: "HH:MM:SS",
      applyChanges: "✅ Appliquer les Changements",
      resetSettings: "🔄 Réinitialiser",
      aboutTitle: "ℹ️ À propos",
      aboutParagraph1:
        "Cette extension vous aide à libérer le véritable potentiel de la lecture vidéo! 🚀 Elle calcule le temps exact que vous économiserez en accélérant vos vidéos et montre l'impact de votre vitesse de lecture accrue. 🎉 Que vous regardiez des tutoriels, des conférences ou simplement binge-watchiez vos séries préférées, vous saurez combien de temps vous gagnez réellement. 🕒✨",
      aboutParagraph2:
        "Vous êtes-vous déjà demandé ce qui se passe lorsque vous augmentez la vitesse de 1x à 2x? Cette extension ne vous indique pas seulement à quel point vous finirez plus rapidement, mais vous donne également des insights en temps réel sur la différence que cela fait. Parfait pour les passionnés d'efficacité, les étudiants et tous ceux qui valorisent leur temps! 💡📚",
      aboutParagraph3:
        "Développé avec ❤️ par un développeur solo passionné par le fait de rendre votre vie plus facile. Si vous aimez cette extension et souhaitez soutenir son développement, vous pouvez <strong>Acheter un Café! ☕</strong>",
      thankYou: "Merci pour votre soutien et bon visionnage rapide! 🥳🎥",
      version: "Version: 1.0.",
      modalTitle: "✅ Succès",
      modalMessage: "Les paramètres ont été appliqués avec succès! 🎉",
      modalOk: "OK",
    },
  };

  // Function to apply translations and theme
  function applySettings(settings) {
    const lang = settings.language || "en";
    const theme = settings.theme || "dark";

    // Apply translations
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Update text for <select> elements
    const selects = document.querySelectorAll("select");
    selects.forEach((select) => {
      select.querySelectorAll("option").forEach((option) => {
        const key = option.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
          option.textContent = translations[lang][key];
        }
      });
    });

    // Apply theme
    applyTheme(theme);
  }

  // Function to apply theme
  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
  }

  // Save settings to Chrome storage
  function saveSettings(settings) {
    chrome.storage.sync.set(settings, () => {
      console.log("Settings saved:", settings);
      applySettings(settings);
    });
  }

  // Load settings from Chrome storage or set defaults
  function loadSettings() {
    chrome.storage.sync.get(
      ["language", "theme", "position", "timerFormat"],
      (data) => {
        const settings = {
          language: data.language || "en",
          theme: data.theme || "dark",
          position: data.position || "top-right",
          timerFormat: data.timerFormat || "minutes",
        };

        // Set the form values
        document.getElementById("language-select").value = settings.language;
        document.getElementById("theme").value = settings.theme;
        document.getElementById("position").value = settings.position;
        document.getElementById("timer-format").value = settings.timerFormat;

        // Apply settings
        applySettings(settings);
      }
    );
  }

  // Initialize settings on load
  loadSettings();

  // Event listener for language selection change
  document.getElementById("language-select").addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    const currentTheme = document.getElementById("theme").value;
    saveSettings({ language: selectedLang, theme: currentTheme });
  });

  // Event listener for theme selection change
  document.getElementById("theme").addEventListener("change", (e) => {
    const selectedTheme = e.target.value;
    const currentLanguage = document.getElementById("language-select").value;
    saveSettings({ theme: selectedTheme, language: currentLanguage });
  });

  // Event listener for tab navigation
  const tabs = document.querySelectorAll(".sidebar ul li");
  const tabContents = document.querySelectorAll(".tab-content");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      tab.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });

  // Listen for messages from content scripts (if any)
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "updateSettings") {
      applySettings(message.settings);
    }
  });

  // Function to show modal with translated text
  function showModal(titleKey, messageKey) {
    const lang = document.getElementById("language-select").value || "en";
    const modal = document.getElementById("custom-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalOk = document.getElementById("modal-ok");

    modalTitle.innerHTML = translations[lang][titleKey] || "ℹ️ Information";
    modalMessage.innerHTML =
      translations[lang][messageKey] || "This is a modal message.";
    modalOk.innerHTML = translations[lang]["modalOk"] || "OK";

    modal.style.display = "flex";
  }

  // Function to hide modal
  function hideModal() {
    const modal = document.getElementById("custom-modal");
    modal.style.display = "none";
  }

  // Event listeners for modal
  document.getElementById("modal-close").addEventListener("click", hideModal);
  document.getElementById("modal-ok").addEventListener("click", hideModal);
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("custom-modal");
    if (event.target == modal) {
      hideModal();
    }
  });

  // Replace alert calls with showModal
  document.getElementById("apply-settings").addEventListener("click", () => {
    const position = document.getElementById("position").value;
    const theme = document.getElementById("theme").value;
    const timerFormat = document.getElementById("timer-format").value;
    const language = document.getElementById("language-select").value;

    const settings = { position, theme, timerFormat, language };

    chrome.runtime.sendMessage(
      { type: "saveSettings", settings },
      (response) => {
        if (response.success) {
          showModal("modalTitle", "modalMessage");
        } else {
          showModal("modalTitle", "modalMessage"); // You can add separate keys for errors if needed
        }
      }
    );
  });

  document.getElementById("reset-settings").addEventListener("click", () => {
    const defaultSettings = {
      position: "top-right",
      theme: "dark",
      timerFormat: "minutes",
      language: "en",
    };
    chrome.storage.sync.set(defaultSettings, () => {
      showModal("modalTitle", "modalMessage"); // Ensure appropriate keys are used
      window.location.reload();
    });
  });
});
