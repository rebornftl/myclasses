// ============ ЗАЩИТА САЙТА (ЛЕГКАЯ ВЕРСИЯ) ============

// Отключить контекстное меню (правый клик) - только на non-input элементах
document.addEventListener('contextmenu', (e) => {
  // Разрешить правый клик на input элементах
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    return;
  }
  e.preventDefault();
  return false;
});

// Отключить основные горячие клавиши DevTools
document.addEventListener('keydown', (e) => {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+I (DevTools)
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+C (Inspect element)
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+K (Network)
  if (e.ctrlKey && e.shiftKey && e.key === 'K') {
    e.preventDefault();
    return false;
  }
}, true);

// Проверка открытия DevTools через высоту окна (мягче)
let devtoolsWarned = false;
setInterval(() => {
  const threshold = 200;
  if (window.outerHeight - window.innerHeight > threshold ||
      window.outerWidth - window.innerWidth > threshold) {
    if (!devtoolsWarned) {
      devtoolsWarned = true;
      console.clear();
      console.log('%c⚠️ DevTools обнаружены!', 'color: red; font-size: 16px; font-weight: bold;');
      // Можно добавить дополнительные действия
    }
  } else {
    devtoolsWarned = false;
  }
}, 1000);

// Перенаправить консоль (но оставить возможность работы)
const originalLog = console.log;
const originalError = console.error;
const originalWarn = console.warn;

console.log = function(...args) {
  // Логи видны в консоли, но можно отключить если нужно
  originalLog.apply(console, args);
};

console.error = function(...args) {
  originalError.apply(console, args);
};

console.warn = function(...args) {
  originalWarn.apply(console, args);
};
