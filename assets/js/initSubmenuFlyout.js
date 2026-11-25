// Keep dropdown menus on screen. A top-level dropdown normally hangs from the
// left edge of its menu item, and a nested one flies out to the right; when
// that would run past the right edge of the viewport, anchor it on the other
// side instead.
function keepOnScreen(trigger, menu, flippedClass) {
  const place = function () {
    menu.classList.remove(flippedClass);
    const overflowsRight =
      menu.getBoundingClientRect().right > document.documentElement.clientWidth;
    menu.classList.toggle(flippedClass, overflowsRight);
  };

  trigger.addEventListener('mouseenter', place);
  trigger.addEventListener('focusin', place);
}

function initSubmenuFlyout() {
  document.querySelectorAll('.menu-item').forEach(function (item) {
    const menu = item.querySelector(':scope > .submenu');
    if (menu) keepOnScreen(item, menu, 'submenu-align-right');
  });

  document.querySelectorAll('.submenu-parent').forEach(function (parent) {
    const nested = parent.querySelector(':scope > .submenu-nested');
    if (nested) keepOnScreen(parent, nested, 'submenu-flyout-left');
  });
}

export default initSubmenuFlyout
