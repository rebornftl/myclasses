// ============ ЗАЩИТА САЙТА ============
// Отключить контекстное меню (правый клик)
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});

// Отключить DevTools (F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J)
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
  // Ctrl+Shift+K (Network/Console)
  if (e.ctrlKey && e.shiftKey && e.key === 'K') {
    e.preventDefault();
    return false;
  }
});

// Отключить выделение текста
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
  return false;
});

// Отключить копирование
document.addEventListener('copy', (e) => {
  e.preventDefault();
  return false;
});

// Проверка открытия DevTools через высоту окна
setInterval(() => {
  const threshold = 160;
  if (window.outerHeight - window.innerHeight > threshold ||
      window.outerWidth - window.innerWidth > threshold) {
    // DevTools открыты
    document.body.style.display = 'none';
  }
}, 500);

// Блокировка консоли функции для вывода
const noop = () => {};
window.console = {
  log: noop,
  warn: noop,
  error: noop,
  info: noop,
  debug: noop,
  time: noop,
  timeEnd: noop,
  table: noop,
  clear: noop,
  assert: noop,
  group: noop,
  groupEnd: noop
};

// Отключить инструменты разработчика через другие методы
try {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  const iframeConsole = iframe.contentWindow.console;
  
  Object.defineProperty(window, 'console', {
    get() {
      if (iframeConsole.log.toString().includes('native code')) {
        return iframeConsole;
      }
      return {};
    }
  });
} catch (e) {}

// Предупреждение при попытке открыть DevTools
console.log('%c⚠️ ВНИМАНИЕ!', 
  'color: red; font-size: 20px; font-weight: bold;');
console.log('%cЭтот сайт защищен. Попытки вмешательства будут зафиксированы.',
  'color: orange; font-size: 14px;');
