import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxStickerIcon],svg[bx-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.796 9.982C20.849 5.357 16.729 2 12 2C6.486 2 2 6.486 2 12c0 4.729 3.357 8.849 7.982 9.796a.99.99 0 0 0 .908-.272l10.633-10.633c.238-.238.34-.578.273-.909M11 18a7.93 7.93 0 0 1 1.365-4.471a8 8 0 0 1 .978-1.186a8 8 0 0 1 1.184-.977a8 8 0 0 1 1.36-.738c.481-.203.986-.36 1.501-.466a8 8 0 0 1 2.17-.134l-8.529 8.529c-.013-.185-.029-.37-.029-.557m-7-6c0-4.411 3.589-8 8-8c2.909 0 5.528 1.589 6.929 4.005a10 10 0 0 0-1.943.198c-.643.132-1.274.328-1.879.583a10 10 0 0 0-1.699.923c-.533.361-1.03.771-1.479 1.22s-.858.945-1.221 1.48c-.359.533-.67 1.104-.922 1.698A10 10 0 0 0 9 18c0 .491.048.979.119 1.461C6.089 18.288 4 15.336 4 12"></svg:path>`,
})
export class BxStickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStopIcon],svg[bx-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h10v10H7z"></svg:path>`,
})
export class BxStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStopCircleIcon],svg[bx-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M9 9h6v6H9z"></svg:path>`,
})
export class BxStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStopwatchIcon],svg[bx-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8s8-3.589 8-8s-3.589-8-8-8m0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6"></svg:path><svg:path fill="currentColor" d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707l-2-2l1.414-1.414l2 2z"></svg:path>`,
})
export class BxStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStoreIcon],svg[bx-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.148 2.971A2.01 2.01 0 0 0 17.434 2H6.566c-.698 0-1.355.372-1.714.971L2.143 7.485A1 1 0 0 0 2 8a3.97 3.97 0 0 0 1 2.618V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.382A3.97 3.97 0 0 0 22 8a1 1 0 0 0-.143-.515zm.836 5.28A2 2 0 0 1 18 10c-1.103 0-2-.897-2-2c0-.068-.025-.128-.039-.192l.02-.004L15.22 4h2.214zM10.819 4h2.361l.813 4.065C13.958 9.137 13.08 10 12 10s-1.958-.863-1.993-1.935zM6.566 4H8.78l-.76 3.804l.02.004C8.025 7.872 8 7.932 8 8c0 1.103-.897 2-2 2a2 2 0 0 1-1.984-1.749zM10 19v-3h4v3zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.142c.321.083.652.142 1 .142a4 4 0 0 0 3-1.357c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357A4 4 0 0 0 18 12c.348 0 .679-.059 1-.142V19z"></svg:path>`,
})
export class BxStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStoreAltIcon],svg[bx-store-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.424c.618-.735 1-1.692 1-2.746zm-2 0v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1M10 4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831zm6 14v-3h4v3zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.131q.382.102.787.125A3.99 3.99 0 0 0 9 10.643c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357a3.99 3.99 0 0 0 3.213 1.351q.406-.023.787-.125V19z"></svg:path>`,
})
export class BxStoreAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStreetViewIcon],svg[bx-street-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 18h2v-5h2V9c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v4h2v5z"></svg:path><svg:path fill="currentColor" d="m18.446 11.386l-.893 1.789C19.108 13.95 20 14.98 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.02.892-2.05 2.446-2.825l-.893-1.789C3.295 12.512 2 14.193 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-1.807-1.295-3.488-3.554-4.614"></svg:path>`,
})
export class BxStreetViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStrikethroughIcon],svg[bx-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h-8c-4 0-4-1.816-4-2.5C8 7.882 8 6 12 6c2.8 0 2.99 1.678 3 2.014L16 8h1c0-1.384-1.045-4-5-4c-5.416 0-6 3.147-6 4.5c0 .728.148 1.667.736 2.5H4v2h16zm-8 7c-3.793 0-3.99-1.815-4-2H6c0 .04.069 4 6 4c5.221 0 6-2.819 6-4.5c0-.146-.009-.317-.028-.5h-2.006c.032.2.034.376.034.5c0 .684 0 2.5-4 2.5"></svg:path>`,
})
export class BxStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSubdirectoryLeftIcon],svg[bx-subdirectory-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13h-6v-3l-5 4l5 4v-3h7a1 1 0 0 0 1-1V5h-2z"></svg:path>`,
})
export class BxSubdirectoryLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSubdirectoryRightIcon],svg[bx-subdirectory-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13H8V5H6v9a1 1 0 0 0 1 1h7v3l5-4l-5-4z"></svg:path>`,
})
export class BxSubdirectoryRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSunIcon],svg[bx-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993S6.993 9.239 6.993 12M12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007S8.993 13.658 8.993 12S10.342 8.993 12 8.993M10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122l1.415 1.414l-2.12 2.122zM16.24 6.344l2.122-2.122l1.414 1.414l-2.122 2.122zM6.342 7.759L4.22 5.637l1.415-1.414l2.12 2.122zm13.434 10.605l-1.414 1.414l-2.122-2.122l1.414-1.414z"></svg:path>`,
})
export class BxSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSupportIcon],svg[bx-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10"></svg:path>`,
})
export class BxSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSushiIcon],svg[bx-sushi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C7.51 2 4 4.2 4 7v10c0 2.8 3.51 5 8 5s8-2.2 8-5V7c0-2.8-3.51-5-8-5m0 18c-3.54 0-6-1.58-6-3v-6.67A10.5 10.5 0 0 0 12 12a10.5 10.5 0 0 0 6-1.67V17c0 1.42-2.46 3-6 3m0-10c-3.54 0-6-1.58-6-3s2.46-3 6-3s6 1.58 6 3s-2.46 3-6 3"></svg:path><svg:ellipse cx="12" cy="7" fill="currentColor" rx="3" ry="1.71"></svg:ellipse>`,
})
export class BxSushiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSwimIcon],svg[bx-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19.003" cy="6.002" r="2.002" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18.875 13.219c-.567.453-.978.781-1.878.781s-1.288-.311-1.876-.781c-.68-.543-1.525-1.219-3.127-1.219s-2.445.676-3.124 1.219c-.588.47-.975.781-1.875.781c-.898 0-1.286-.311-1.873-.78C4.443 12.676 3.6 12 2 12v2c.897 0 1.285.311 1.872.78c.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78c.9 0 1.311.328 1.878.781c.679.543 1.524 1.219 3.125 1.219c1.602 0 2.447-.676 3.127-1.219c.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219M16.997 19c-.899 0-1.288-.311-1.876-.781c-.68-.543-1.525-1.219-3.127-1.219s-2.445.676-3.124 1.219c-.588.47-.975.781-1.875.781c-.898 0-1.286-.311-1.873-.78C4.443 17.676 3.6 17 2 17v2c.897 0 1.285.311 1.872.78c.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78c.9 0 1.311.328 1.878.781c.679.543 1.524 1.219 3.125 1.219c1.602 0 2.447-.676 3.127-1.219c.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219c-.567.453-.978.781-1.878.781M11 5.419l2.104 2.104l-2.057 2.57c.286-.056.596-.093.947-.093c1.602 0 2.447.676 3.127 1.219c.588.47.977.781 1.876.781c.9 0 1.311-.328 1.878-.781c.132-.105.274-.217.423-.326l-2.096-2.09l.005-.005l-5.5-5.5a1 1 0 0 0-1.414 0l-4 4l1.414 1.414z"></svg:path>`,
})
export class BxSwimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSyncIcon],svg[bx-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 7.101l.01.001a5 5 0 0 1 2.526 1.362a5 5 0 0 1 1.363 2.528a5.1 5.1 0 0 1-.001 2.016a5 5 0 0 1-1.363 2.527l1.414 1.414a7 7 0 0 0 1.908-3.54a7 7 0 0 0 0-2.819a6.96 6.96 0 0 0-1.907-3.539a7 7 0 0 0-2.223-1.5a7 7 0 0 0-1.315-.408c-.137-.028-.275-.043-.412-.063V2L9 6l4 4zm-7.45 7.623c.174.412.392.812.646 1.19c.249.37.537.718.854 1.034a7 7 0 0 0 2.224 1.501c.425.18.868.317 1.315.408c.167.034.338.056.508.078v2.944l4-4l-4-4v3.03c-.035-.006-.072-.003-.107-.011a5 5 0 0 1-2.526-1.362a4.994 4.994 0 0 1 .001-7.071L7.051 7.05a7 7 0 0 0-1.5 2.224A7 7 0 0 0 5 12a7 7 0 0 0 .55 2.724"></svg:path>`,
})
export class BxSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTabIcon],svg[bx-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 15V5h12l.002 12z"></svg:path>`,
})
export class BxTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTableIcon],svg[bx-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2m0-2v-5h4v5zM14 7v5h-4V7zM8 7v5H4V7zm2 12v-5h4v5zm6 0v-5h3.894v5zm3.893-7H16V7h3.893z"></svg:path>`,
})
export class BxTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTachometerIcon],svg[bx-tachometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C6.486 4 2 8.486 2 14a9.9 9.9 0 0 0 1.051 4.445c.17.34.516.555.895.555h16.107c.379 0 .726-.215.896-.555A9.9 9.9 0 0 0 22 14c0-5.514-4.486-10-10-10m7.41 13H4.59A7.9 7.9 0 0 1 4 14c0-4.411 3.589-8 8-8s8 3.589 8 8a7.9 7.9 0 0 1-.59 3"></svg:path><svg:path fill="currentColor" d="M10.939 12.939a1.53 1.53 0 0 0 0 2.561a1.53 1.53 0 0 0 2.121-.44l3.962-6.038a.03.03 0 0 0 0-.035a.033.033 0 0 0-.045-.01z"></svg:path>`,
})
export class BxTachometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTagIcon],svg[bx-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H8.515a2 2 0 0 0-1.627.838l-4.701 6.581a1 1 0 0 0 0 1.162l4.701 6.581A2 2 0 0 0 8.515 20H20c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m0 14H8.515l-4.286-6l4.286-6H20z"></svg:path>`,
})
export class BxTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTagAltIcon],svg[bx-tag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.868 4.504A1 1 0 0 0 17 4H3a1 1 0 0 0-.868 1.496L5.849 12l-3.717 6.504A1 1 0 0 0 3 20h14a1 1 0 0 0 .868-.504l4-7a1 1 0 0 0 0-.992zM16.42 18H4.724l3.145-5.504a1 1 0 0 0 0-.992L4.724 6H16.42l3.429 6z"></svg:path>`,
})
export class BxTagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTargetLockIcon],svg[bx-target-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.01 8.01 0 0 0 11 19.931V22h2v-2.069A8.01 8.01 0 0 0 19.931 13H22v-2h-2.069A8.01 8.01 0 0 0 13 4.069M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6"></svg:path>`,
})
export class BxTargetLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTaskIcon],svg[bx-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2M5 5h2v2h10V5h2v15H5z"></svg:path><svg:path fill="currentColor" d="m11 13.586l-1.793-1.793l-1.414 1.414L11 16.414l5.207-5.207l-1.414-1.414z"></svg:path>`,
})
export class BxTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTaskXIcon],svg[bx-task-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2zM5 5h2v2h10V5h2v15H5z"></svg:path><svg:path fill="currentColor" d="M14.292 10.295L12 12.587l-2.292-2.292l-1.414 1.414l2.292 2.292l-2.292 2.292l1.414 1.414L12 15.415l2.292 2.292l1.414-1.414l-2.292-2.292l2.292-2.292z"></svg:path>`,
})
export class BxTaskXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTaxiIcon],svg[bx-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.772 10.156l-1.368-4.105A2.995 2.995 0 0 0 16.559 4H14V2h-4v2H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.105A2 2 0 0 0 2 12v5c0 .753.423 1.402 1.039 1.743c-.013.066-.039.126-.039.195V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.062c0-.069-.026-.13-.039-.195A1.99 1.99 0 0 0 22 17v-5c0-.829-.508-1.541-1.228-1.844M4 17v-5h16l.002 5zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6"></svg:path><svg:circle cx="6.5" cy="14.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="14.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxTaxiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTennisBallIcon],svg[bx-tennis-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 19.081c1.895 1.895 4.405 2.938 7.071 2.938s5.177-1.043 7.071-2.938c3.899-3.899 3.899-10.243 0-14.143C17.177 3.044 14.665 2 12 2S6.823 3.044 4.929 4.938c-3.899 3.899-3.899 10.244 0 14.143m12.728-1.414a7.97 7.97 0 0 1-3.813 2.129c-.009-1.602.586-3.146 1.691-4.251c1.163-1.163 2.732-1.828 4.277-1.851a7.95 7.95 0 0 1-2.155 3.973m2.325-5.965c-2.124-.021-4.284.853-5.861 2.429c-1.532 1.532-2.327 3.68-2.263 5.881a7.95 7.95 0 0 1-5.516-2.345a7.97 7.97 0 0 1-2.332-5.512c.077.002.154.014.231.014c2.115 0 4.16-.804 5.637-2.28c1.58-1.58 2.457-3.739 2.43-5.873a7.95 7.95 0 0 1 5.349 2.337a7.96 7.96 0 0 1 2.325 5.349M6.343 6.353a7.97 7.97 0 0 1 3.973-2.169c-.018 1.555-.685 3.124-1.851 4.291c-1.104 1.103-2.642 1.696-4.238 1.691a7.93 7.93 0 0 1 2.116-3.813"></svg:path>`,
})
export class BxTennisBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTerminalIcon],svg[bx-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14h6v2h-6zM6.293 9.707L8.586 12l-2.293 2.293l1.414 1.414L11.414 12L7.707 8.293z"></svg:path><svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M4 18V6h16l.002 12z"></svg:path>`,
})
export class BxTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTestTubeIcon],svg[bx-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.293 2.707l.818.818L3.318 14.318C2.468 15.168 2 16.298 2 17.5s.468 2.332 1.318 3.183C4.169 21.532 5.299 22 6.5 22s2.331-.468 3.182-1.318L20.475 9.889l.818.818l1.414-1.414l-8-8zm3.182 8.354l-2.403-2.404l-1.414 1.414l2.403 2.404l-1.414 1.415l-.99-.99l-1.414 1.414l.99.99l-1.415 1.415l-2.403-2.404L7 15.728l2.403 2.404l-1.136 1.136c-.945.944-2.59.944-3.535 0C4.26 18.795 4 18.168 4 17.5s.26-1.295.732-1.768L15.525 4.939l3.535 3.535z"></svg:path>`,
})
export class BxTestTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTextIcon],svg[bx-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z"></svg:path>`,
})
export class BxTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTimeIcon],svg[bx-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M13 7h-2v6h6v-2h-4z"></svg:path>`,
})
export class BxTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTimeFiveIcon],svg[bx-time-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M13 7h-2v5.414l3.293 3.293l1.414-1.414L13 11.586z"></svg:path>`,
})
export class BxTimeFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTimerIcon],svg[bx-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.145 8.27l1.563-1.563l-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1c-3.859 0-7 3.14-7 7s3.141 7 7 7s7-3.14 7-7a6.97 6.97 0 0 0-1.855-4.73M15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5"></svg:path><svg:path fill="currentColor" d="M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"></svg:path>`,
})
export class BxTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTiredIcon],svg[bx-tired-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="m17.555 8.832l-1.109-1.664l-3 2a1 1 0 0 0 .108 1.727l4 2l.895-1.789l-2.459-1.229zm-6.557 1.23a1 1 0 0 0-.443-.894l-3-2l-1.11 1.664l1.566 1.044l-2.459 1.229l.895 1.789l4-2a1 1 0 0 0 .551-.832"></svg:path>`,
})
export class BxTiredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxToggleLeftIcon],svg[bx-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9c-1.628 0-3 1.372-3 3s1.372 3 3 3s3-1.372 3-3s-1.372-3-3-3"></svg:path><svg:path fill="currentColor" d="M16 6H8c-3.3 0-5.989 2.689-6 6v.016A6.01 6.01 0 0 0 8 18h8a6.01 6.01 0 0 0 6-5.994V12c-.009-3.309-2.699-6-6-6m0 10H8a4.006 4.006 0 0 1-4-3.99C4.004 9.799 5.798 8 8 8h8c2.202 0 3.996 1.799 4 4.006A4.007 4.007 0 0 1 16 16m4-3.984l.443-.004l.557.004z"></svg:path>`,
})
export class BxToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxToggleRightIcon],svg[bx-toggle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c-1.628 0-3 1.372-3 3s1.372 3 3 3s3-1.372 3-3s-1.372-3-3-3"></svg:path><svg:path fill="currentColor" d="M16 6H8c-3.296 0-5.982 2.682-6 5.986v.042A6.01 6.01 0 0 0 8 18h8c3.309 0 6-2.691 6-6s-2.691-6-6-6m0 10H8a4.006 4.006 0 0 1-4-3.99C4.004 9.799 5.798 8 8 8h8c2.206 0 4 1.794 4 4s-1.794 4-4 4"></svg:path>`,
})
export class BxToggleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxToneIcon],svg[bx-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m-1 9H4.069a8 8 0 0 1 .52-2H11zm0 4H4.589a8 8 0 0 1-.52-2H11zm0-10.931V7H5.765A8 8 0 0 1 11 4.069M5.765 17H11v2.931A8 8 0 0 1 5.765 17M13 19.931V4.069c3.939.495 7 3.858 7 7.931s-3.061 7.436-7 7.931"></svg:path>`,
})
export class BxToneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTrafficConeIcon],svg[bx-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.943 2.667A1 1 0 0 0 13 2h-2a1 1 0 0 0-.943.667L4.292 19H2v2h20v-2h-2.292zM15.47 13H8.53l1.06-3h4.82zm-3.763-9h.586l1.412 4h-3.41zM7.825 15h8.35l1.412 4H6.413z"></svg:path>`,
})
export class BxTrafficConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTrainIcon],svg[bx-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.5" cy="14.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.5" cy="14.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18.87 3.34A3.55 3.55 0 0 0 16.38 2H7.62a3.47 3.47 0 0 0-2.5 1.35A4.32 4.32 0 0 0 4 6v12a1 1 0 0 0 1 1h2l-2 3h2.32L8 21h8l.68 1H19l-2-3h2a1 1 0 0 0 1-1V6a4.15 4.15 0 0 0-1.13-2.66M7.62 4h8.72a1.77 1.77 0 0 1 1 .66a3 3 0 0 1 .25.34H6.39a2.3 2.3 0 0 1 .25-.35A1.65 1.65 0 0 1 7.62 4M6 8V7h12v3H6zm12 9H6v-5h12z"></svg:path>`,
})
export class BxTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTransferIcon],svg[bx-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 12l5-4l-5-4v2.999H2v2h13zm7 3H9v-3l-5 4l5 4v-3h13z"></svg:path>`,
})
export class BxTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTransferAltIcon],svg[bx-transfer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5l-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617M4.076 13.617a1 1 0 0 0 .217 1.09l5 5l1.414-1.414L7.414 15H20v-2H5a1 1 0 0 0-.924.617"></svg:path>`,
})
export class BxTransferAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTrashIcon],svg[bx-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></svg:path><svg:path fill="currentColor" d="M9 10h2v8H9zm4 0h2v8h-2z"></svg:path>`,
})
export class BxTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTrashAltIcon],svg[bx-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2M9 4h6v2H9zm8 16H7V8h10z"></svg:path>`,
})
export class BxTrashAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTrendingDownIcon],svg[bx-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 9.586l-4 4l-6.293-6.293l-1.414 1.414L10 16.414l4-4l4.293 4.293L16 19h6v-6l-2.293 2.293z"></svg:path>`,
})
export class BxTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTrendingUpIcon],svg[bx-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 10.414l4 4l5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4l-7.707 7.707l1.414 1.414z"></svg:path>`,
})
export class BxTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTrimIcon],svg[bx-trim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2m14-6l-.003 9H10v-3h4c1.103 0 2-.897 2-2v-4zM5 10h5V5h4l-.003 9H5z"></svg:path>`,
})
export class BxTrimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTripIcon],svg[bx-trip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639a9.8 9.8 0 0 1-1.354 2H13.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593a10.4 10.4 0 0 1-1.249-2M5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3m0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5 6.5"></svg:path><svg:path fill="currentColor" d="M19 14c-1.654 0-3 1.346-3 3c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3m0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 19 18.5"></svg:path>`,
})
export class BxTripIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTrophyIcon],svg[bx-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6 6 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1M4 8V6h2v6.83C4.216 12.078 4 9.299 4 8m8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4m6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83"></svg:path>`,
})
export class BxTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxTvIcon],svg[bx-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-5.586l2.293-2.293l-1.414-1.414L12 5.586L8.707 2.293L7.293 3.707L9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2M4 19V8h16l.002 11z"></svg:path>`,
})
export class BxTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUnderlineIcon],svg[bx-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18h14v2H5zM6 4v6c0 3.309 2.691 6 6 6s6-2.691 6-6V4h-2v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V4z"></svg:path>`,
})
export class BxUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUndoIcon],svg[bx-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4z"></svg:path>`,
})
export class BxUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUniteIcon],svg[bx-unite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z"></svg:path><svg:path fill="currentColor" d="M5 16h1V8a2 2 0 0 1 2-2h8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2m3 3a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1v8a2 2 0 0 1-2 2H8z"></svg:path>`,
})
export class BxUniteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUniversalAccessIcon],svg[bx-universal-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M16.5 10.5L16 9l-3 1h-2L8 9l-.5 1.5l3 1V13L9 17.25l1.5.75l1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5z"></svg:path>`,
})
export class BxUniversalAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUnlinkIcon],svg[bx-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.949 14.121L19.071 12a5.01 5.01 0 0 0 0-7.071a5.006 5.006 0 0 0-7.071 0l-.707.707l1.414 1.414l.707-.707a3.007 3.007 0 0 1 4.243 0a3.005 3.005 0 0 1 0 4.243l-2.122 2.121a2.7 2.7 0 0 1-.844.57L13.414 12l1.414-1.414l-.707-.707a4.97 4.97 0 0 0-3.535-1.465c-.235 0-.464.032-.691.066L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-5.536-5.536q.417-.276.778-.636m-6.363 3.536a3.007 3.007 0 0 1-4.243 0a3.005 3.005 0 0 1 0-4.243l1.476-1.475l-1.414-1.414L4.929 12a5.01 5.01 0 0 0 0 7.071a4.98 4.98 0 0 0 3.535 1.462A4.98 4.98 0 0 0 12 19.071l.707-.707l-1.414-1.414z"></svg:path>`,
})
export class BxUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUpArrowIcon],svg[bx-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19m9-12.243L19.092 17H4.908z"></svg:path>`,
})
export class BxUpArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUpArrowAltIcon],svg[bx-up-arrow-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8.414V18h2V8.414l4.293 4.293l1.414-1.414L12 4.586l-6.707 6.707l1.414 1.414z"></svg:path>`,
})
export class BxUpArrowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUpArrowCircleIcon],svg[bx-up-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 1.993C6.486 1.994 2 6.48 2 11.994c.001 5.514 4.487 10 10 10c5.515 0 10.001-4.486 10.001-10s-4.486-10-10-10.001M12 19.994c-4.41 0-7.999-3.589-8-8c0-4.411 3.589-8 8.001-8.001c4.411.001 8 3.59 8 8.001s-3.589 8-8.001 8"></svg:path><svg:path fill="currentColor" d="m12.001 8.001l-4.005 4.005h3.005V16h2v-3.994h3.004z"></svg:path>`,
})
export class BxUpArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUploadIcon],svg[bx-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2V9h3l-4-5l-4 5h3z"></svg:path><svg:path fill="currentColor" d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2z"></svg:path>`,
})
export class BxUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUpsideDownIcon],svg[bx-upside-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M14.829 9.172q.273.273.488.592l1.658-1.119a6.1 6.1 0 0 0-1.621-1.62a6 6 0 0 0-2.148-.903a5.99 5.99 0 0 0-5.448 1.634a6 6 0 0 0-.733.889l1.657 1.119a4.02 4.02 0 0 1 2.51-1.683a3.99 3.99 0 0 1 3.637 1.091"></svg:path><svg:circle cx="15.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8.507" cy="13.507" r="1.493" fill="currentColor"></svg:circle>`,
})
export class BxUpsideDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUpvoteIcon],svg[bx-upvote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12z"></svg:path>`,
})
export class BxUpvoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUsbIcon],svg[bx-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h1v2h-4V6h2l-3-4l-3 4h2v8H7v-2.277c.596-.347 1-.985 1-1.723a2 2 0 0 0-4 0c0 .738.404 1.376 1 1.723V14c0 1.103.897 2 2 2h4v2.277A1.99 1.99 0 0 0 10 20a2 2 0 0 0 4 0c0-.738-.404-1.376-1-1.723V14h4c1.103 0 2-.897 2-2v-2h1V6h-4z"></svg:path>`,
})
export class BxUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUserIcon],svg[bx-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></svg:path>`,
})
export class BxUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUserCheckIcon],svg[bx-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.29 8.29L16 12.58l-1.3-1.29l-1.41 1.42l2.7 2.7l5.72-5.7zM4 8a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4a3.91 3.91 0 0 0-4 4m6 0a1.91 1.91 0 0 1-2 2a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2M4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></svg:path>`,
})
export class BxUserCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUserCircleIcon],svg[bx-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12A10.13 10.13 0 0 0 12 2M8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36a7.75 7.75 0 0 1-7.86 0m9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8a8.1 8.1 0 0 1 8 8a8 8 0 0 1-2.39 5.64"></svg:path><svg:path fill="currentColor" d="M12 6a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4m0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2"></svg:path>`,
})
export class BxUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUserMinusIcon],svg[bx-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h8v2h-8zM8 4a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4m0 6a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2m-4 8a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></svg:path>`,
})
export class BxUserMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUserPinIcon],svg[bx-user-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2m0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6"></svg:path><svg:path fill="currentColor" d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3l3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m-5 15l-2 2l-2-2H5V4h14l.002 13z"></svg:path>`,
})
export class BxUserPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUserPlusIcon],svg[bx-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4a3.91 3.91 0 0 0-4 4m6 0a1.91 1.91 0 0 1-2 2a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2M4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></svg:path>`,
})
export class BxUserPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUserVoiceIcon],svg[bx-user-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12c2.28 0 4-1.72 4-4s-1.72-4-4-4s-4 1.72-4 4s1.72 4 4 4m0-6c1.178 0 2 .822 2 2s-.822 2-2 2s-2-.822-2-2s.822-2 2-2m1 7H7c-2.757 0-5 2.243-5 5v1h2v-1c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5m9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364"></svg:path><svg:path fill="currentColor" d="M15.535 5.464L14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536"></svg:path>`,
})
export class BxUserVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxUserXIcon],svg[bx-user-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.71 15.71l2.29-2.3l2.29 2.3l1.42-1.42l-2.3-2.29l2.3-2.29l-1.42-1.42l-2.29 2.3l-2.29-2.3l-1.42 1.42L16.58 12l-2.29 2.29zM12 8a3.91 3.91 0 0 0-4-4a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4M6 8a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2a1.91 1.91 0 0 1-2 2a1.91 1.91 0 0 1-2-2M4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></svg:path>`,
})
export class BxUserXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVectorIcon],svg[bx-vector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.277 8c.347.596.985 1 1.723 1a2 2 0 0 0 0-4c-.738 0-1.376.404-1.723 1H16V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H5.723C5.376 5.404 4.738 5 4 5a2 2 0 0 0 0 4c.738 0 1.376-.404 1.723-1H8v.369C5.133 9.84 4.318 12.534 4.091 14H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.877c.197-.959.718-2.406 2.085-3.418A.98.98 0 0 0 9 11h6a.98.98 0 0 0 .792-.419c1.373 1.013 1.895 2.458 2.089 3.419H17a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.092c-.227-1.466-1.042-4.161-3.908-5.632V8zM6 18H4v-2h2zm14 0h-2v-2h2zm-6-9h-4V5h4z"></svg:path>`,
})
export class BxVectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVerticalBottomIcon],svg[bx-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h3v2h-3zm-5 0h3v2h-3zm-5 0h3v2H8zm-5 0h3v2H3zM13 5h-2v8H8l4 4l4-4h-3z"></svg:path>`,
})
export class BxVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVerticalCenterIcon],svg[bx-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5V2h-2v3H8l4 4l4-4zm0 17v-3h3l-4-4l-4 4h3v3zM3 11h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z"></svg:path>`,
})
export class BxVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVerticalTopIcon],svg[bx-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7l-4 4h3v8h2v-8h3zM3 3h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z"></svg:path>`,
})
export class BxVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVialIcon],svg[bx-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.95 3.564l.708.707l-9.193 9.193C2.521 14.408 2 15.664 2 17s.521 2.592 1.465 3.535C4.408 21.479 5.664 22 7 22s2.592-.521 3.535-1.465l9.193-9.193l.707.708l1.414-1.414l-8.485-8.486zM9.121 19.121c-1.133 1.133-3.109 1.133-4.242 0C4.313 18.555 4 17.802 4 17s.313-1.555.879-2.121L5.758 14h8.484zM16.242 12H7.758l6.314-6.314l4.242 4.242z"></svg:path>`,
})
export class BxVialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVideoIcon],svg[bx-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333zm-1.998 10H4V7h12l.001 4.999L16 12l.001.001z"></svg:path>`,
})
export class BxVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVideoOffIcon],svg[bx-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7c0-1.103-.897-2-2-2H6.414L3.707 2.293L2.293 3.707l18 18l1.414-1.414L18 16.586v-2.919L22 17V7l-4 3.333zm-2 7.586L8.414 7H16zM4 19h10.879l-2-2H4V8.121L2.145 6.265A2 2 0 0 0 2 7v10c0 1.103.897 2 2 2"></svg:path>`,
})
export class BxVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVideoPlusIcon],svg[bx-video-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8H9v3H6v2h3v3h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333zm-1.999 10H4V7h12v5z"></svg:path>`,
})
export class BxVideoPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVideoRecordingIcon],svg[bx-video-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9c0-1.103-.897-2-2-2h-1.434l-2.418-4.029A2.01 2.01 0 0 0 10.434 2H5v2h5.434l1.8 3H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3l4 2v-7l-4 2zm-1.998 9H4V9h12l.001 4H16v1l.001.001z"></svg:path><svg:path fill="currentColor" d="M6 14h6v2H6z"></svg:path>`,
})
export class BxVideoRecordingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVoicemailIcon],svg[bx-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 8a4.505 4.505 0 0 0-4.5 4.5c0 .925.281 1.784.762 2.5h-3.523c.48-.716.761-1.575.761-2.5C11 10.019 8.981 8 6.5 8S2 10.019 2 12.5S4.019 17 6.5 17c.171 0 .334-.032.5-.051V17h11v-.051c2.244-.252 4-2.139 4-4.449c0-2.481-2.019-4.5-4.5-4.5M4 12.5C4 11.121 5.121 10 6.5 10S9 11.121 9 12.5S7.879 15 6.5 15S4 13.879 4 12.5M17.5 15c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5"></svg:path>`,
})
export class BxVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVolumeIcon],svg[bx-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17h2.697l5.748 3.832a1 1 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2m0-8h3c.033 0 .061-.016.093-.019a1 1 0 0 0 .379-.116c.026-.014.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.018-.056-.02-.082-.033a1 1 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4z"></svg:path>`,
})
export class BxVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVolumeFullIcon],svg[bx-volume-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19z"></svg:path><svg:path fill="currentColor" d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5M4 17h2.697l5.748 3.832a1 1 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2m0-8h3c.033 0 .061-.016.093-.019a1 1 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a1 1 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4z"></svg:path>`,
})
export class BxVolumeFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVolumeLowIcon],svg[bx-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17h2.697l5.748 3.832a1 1 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2m0-8h3c.033 0 .061-.016.093-.019a1 1 0 0 0 .379-.116c.026-.014.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.018-.056-.02-.082-.033a1 1 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4zm12-2v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5"></svg:path>`,
})
export class BxVolumeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxVolumeMuteIcon],svg[bx-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.707 20.293l-2.023-2.023A9.57 9.57 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.1 8.1 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02l-1.414 1.414l18 18zM12 5.868v4.718L9.169 7.755zM4 17h2.697l5.748 3.832a1 1 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a1 1 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A2 2 0 0 0 2 9v6c0 1.103.897 2 2 2"></svg:path>`,
})
export class BxVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWalkIcon],svg[bx-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892l.633-1.896l-2.675-.892l-1.663-2.495a2 2 0 0 0-.769-.679l-1.434-.717a2 2 0 0 0-1.378-.149l-3.193.797a2 2 0 0 0-1.306 1.046l-1.794 3.589l1.789.895l1.794-3.589l2.223-.556l-1.804 8.346l-3.674 2.527l1.133 1.648l3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388l2.517 1.888l.925 4.625l1.961-.393l-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628l.647-3.885z"></svg:path>`,
})
export class BxWalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWalletIcon],svg[bx-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12h2v4h-2z"></svg:path><svg:path fill="currentColor" d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2M5 5h13v2H5a1.001 1.001 0 0 1 0-2m15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15z"></svg:path>`,
})
export class BxWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWalletAltIcon],svg[bx-wallet-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19c-.552 0-1-.449-1-1V6c0-.551.448-1 1-1h15v3h-6c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h6.001v3zm15-9v4h-6v-4z"></svg:path>`,
})
export class BxWalletAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWaterIcon],svg[bx-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.996 9c1.413 0 2.16-.747 2.705-1.293c.49-.49.731-.707 1.292-.707s.802.217 1.292.707C11.83 8.253 12.577 9 13.991 9c1.415 0 2.163-.747 2.71-1.293c.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 8.253 20.585 9 22 9V7c-.563 0-.804-.217-1.295-.707C20.159 5.747 19.411 5 17.996 5s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708c-.562 0-.802-.217-1.292-.707C12.154 5.747 11.407 5 9.993 5s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 5.747 3.413 5 2 5v2c.561 0 .801.217 1.291.707C3.836 8.253 4.583 9 5.996 9m0 5c1.413 0 2.16-.747 2.705-1.293c.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293c1.415 0 2.163-.747 2.71-1.293c.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 13.253 20.585 14 22 14v-2c-.563 0-.804-.217-1.295-.707c-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708c-.562 0-.802-.217-1.292-.707C12.154 10.747 11.407 10 9.993 10s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 10.747 3.413 10 2 10v2c.561 0 .801.217 1.291.707C3.836 13.253 4.583 14 5.996 14m0 5c1.413 0 2.16-.747 2.705-1.293c.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293c1.415 0 2.163-.747 2.71-1.293c.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 18.253 20.585 19 22 19v-2c-.563 0-.804-.217-1.295-.707c-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708c-.562 0-.802-.217-1.292-.707C12.154 15.747 11.407 15 9.993 15s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 15.747 3.413 15 2 15v2c.561 0 .801.217 1.291.707C3.836 18.253 4.583 19 5.996 19"></svg:path>`,
})
export class BxWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWebcamIcon],svg[bx-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9m0 16c-3.859 0-7-3.141-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7"></svg:path><svg:path fill="currentColor" d="M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5m0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3"></svg:path>`,
})
export class BxWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWifiIcon],svg[bx-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c3.537 0 6.837 1.353 9.293 3.809l1.414-1.414C19.874 5.561 16.071 4 12 4c-4.071.001-7.874 1.561-10.707 4.395l1.414 1.414C5.163 7.353 8.463 6 12 6m5.671 8.307c-3.074-3.074-8.268-3.074-11.342 0l1.414 1.414c2.307-2.307 6.207-2.307 8.514 0z"></svg:path><svg:path fill="currentColor" d="M20.437 11.293c-4.572-4.574-12.301-4.574-16.873 0l1.414 1.414c3.807-3.807 10.238-3.807 14.045 0z"></svg:path><svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWifi0Icon],svg[bx-wifi-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxWifi0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWifi1Icon],svg[bx-wifi-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.671 14.307C16.184 12.819 14.17 12 12 12s-4.184.819-5.671 2.307l1.414 1.414c1.11-1.11 2.621-1.722 4.257-1.722c1.636.001 3.147.612 4.257 1.722z"></svg:path><svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxWifi1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWifi2Icon],svg[bx-wifi-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.671 14.307C16.184 12.819 14.17 12 12 12s-4.184.819-5.671 2.307l1.414 1.414c1.11-1.11 2.621-1.722 4.257-1.722c1.636.001 3.147.612 4.257 1.722z"></svg:path><svg:path fill="currentColor" d="M20.437 11.292c-4.572-4.573-12.301-4.573-16.873 0l1.414 1.414c3.807-3.807 10.238-3.807 14.045 0z"></svg:path><svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxWifi2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWifiOffIcon],svg[bx-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.293 8.395l1.414 1.414c.504-.504 1.052-.95 1.622-1.359L2.9 7.021c-.56.422-1.104.87-1.607 1.374M6.474 5.06L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-5.012-5.012l.976-.975a7.86 7.86 0 0 0-4.099-2.148L11.294 9.88c2.789-.191 5.649.748 7.729 2.827l1.414-1.414c-2.898-2.899-7.061-3.936-10.888-3.158L8.024 6.61A13.4 13.4 0 0 1 12 6c3.537 0 6.837 1.353 9.293 3.809l1.414-1.414C19.874 5.561 16.071 4 12 4a15.2 15.2 0 0 0-5.526 1.06m-2.911 6.233l1.414 1.414a9.6 9.6 0 0 1 2.058-1.551L5.576 9.697c-.717.451-1.395.979-2.013 1.596m2.766 3.014l1.414 1.414c.692-.692 1.535-1.151 2.429-1.428l-1.557-1.557a7.8 7.8 0 0 0-2.286 1.571m7.66 3.803l-2.1-2.1a1.996 1.996 0 1 0 2.1 2.1"></svg:path>`,
})
export class BxWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWindIcon],svg[bx-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5.5C13 3.57 11.43 2 9.5 2C7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1c.827 0 1.5.673 1.5 1.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5m2.5 9.5H8v2h7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3c1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15"></svg:path><svg:path fill="currentColor" d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4s-1.794-4-4-4M2 15h4v2H2z"></svg:path>`,
})
export class BxWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWindowIcon],svg[bx-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2m0-2V7h16l.001 12z"></svg:path>`,
})
export class BxWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWindowAltIcon],svg[bx-window-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m0 2l.001 4H4V5zM4 19v-8h16.001l.001 8z"></svg:path><svg:path fill="currentColor" d="M14 6h2v2h-2zm3 0h2v2h-2z"></svg:path>`,
})
export class BxWindowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWindowCloseIcon],svg[bx-window-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 19V7h16l.001 12z"></svg:path><svg:path fill="currentColor" d="m15.707 10.707l-1.414-1.414L12 11.586L9.707 9.293l-1.414 1.414L10.586 13l-2.293 2.293l1.414 1.414L12 14.414l2.293 2.293l1.414-1.414L13.414 13z"></svg:path>`,
})
export class BxWindowCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWindowOpenIcon],svg[bx-window-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h5v-2H4V7h16v12h-5v2h5c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2"></svg:path><svg:path fill="currentColor" d="M13 21v-5h3l-4-5l-4 5h3v5z"></svg:path>`,
})
export class BxWindowOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWindowsIcon],svg[bx-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2M4 19v-8h12V9l.002 10z"></svg:path><svg:path fill="currentColor" d="M22 5c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2h13.001c1.101 0 1.996.895 1.999 1.994L20.002 15H20v2c1.103 0 2-.897 2-2V8.007L22.001 8V6L22 5.99z"></svg:path>`,
})
export class BxWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWineIcon],svg[bx-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.713 12.123c.264-.952.312-2.03.143-3.206l-.866-6.059A1 1 0 0 0 18 2H6a1 1 0 0 0-.99.858l-.865 6.058c-.169 1.177-.121 2.255.142 3.206c.864 3.134 3.551 5.392 6.713 5.794V20H9v2h6v-2h-2v-2.084c3.162-.402 5.849-2.66 6.713-5.793M17.133 4l.57 4H6.296l.571-4zM6.215 11.59c-.132-.474-.181-1.009-.159-1.59h11.889c.021.581-.028 1.116-.159 1.591A6.02 6.02 0 0 1 12 16a6.02 6.02 0 0 1-5.785-4.41"></svg:path>`,
})
export class BxWineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWinkSmileIcon],svg[bx-wink-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M14.828 14.828a4 4 0 0 1-2.02 1.09a4.1 4.1 0 0 1-1.616 0a4 4 0 0 1-.749-.232a4 4 0 0 1-.679-.368a4.1 4.1 0 0 1-1.082-1.082l-1.658 1.117c.215.319.462.619.733.889a5.99 5.99 0 0 0 8.485.002c.272-.271.52-.571.734-.891l-1.658-1.117q-.215.318-.49.592"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.5 10c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2"></svg:path>`,
})
export class BxWinkSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWinkTongueIcon],svg[bx-wink-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 9c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m-2 16v-3h4v3c0 1.103-.897 2-2 2s-2-.897-2-2m5.856 1.005c.085-.323.144-.656.144-1.005v-1.499C17.589 15.028 18 13 18 13H6s.412 2.028 2 3.501V18c0 .349.059.682.144 1.005A8 8 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8a8 8 0 0 1-4.144 7.005"></svg:path><svg:circle cx="8.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxWinkTongueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWonIcon],svg[bx-won-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.758 5H19.68l-.844 3h-4.893l-.899-3h-2.088l-.899 3H5.164L4.32 5H2.242l.844 3H2v2h1.648l.563 2H2v2h2.773l1.688 6h2.083l1.8-6h3.313l1.8 6h2.083l1.688-6H22v-2h-2.211l.563-2H22V8h-1.086zM5.727 10h3.729l-.6 2H6.289zm1.804 6.417L6.852 14h1.404zM10.944 12l.6-2h.912l.6 2zm5.525 4.417L15.744 14h1.404zM17.711 12h-2.567l-.6-2h3.729z"></svg:path>`,
})
export class BxWonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWorldIcon],svg[bx-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2M4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2l1 1v1.931C7.061 19.436 4 16.072 4 12m14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.95 7.95 0 0 1-1.67 4.873"></svg:path>`,
})
export class BxWorldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxWrenchIcon],svg[bx-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.122 21c.378.378.88.586 1.414.586S7.572 21.378 7.95 21l4.336-4.336a7.5 7.5 0 0 0 2.217.333a7.45 7.45 0 0 0 5.302-2.195a7.48 7.48 0 0 0 1.632-8.158l-.57-1.388l-4.244 4.243l-2.121-2.122l4.243-4.243l-1.389-.571A7.5 7.5 0 0 0 14.499 2c-2.003 0-3.886.78-5.301 2.196a7.48 7.48 0 0 0-1.862 7.518L3 16.05a2 2 0 0 0 0 2.828zm4.548-8.791l-.254-.616a5.49 5.49 0 0 1 1.196-5.983a5.46 5.46 0 0 1 4.413-1.585l-3.353 3.353l4.949 4.95l3.355-3.355a5.49 5.49 0 0 1-1.587 4.416c-1.55 1.55-3.964 2.027-5.984 1.196l-.615-.255l-5.254 5.256h.001l-.001 1v-1l-2.122-2.122z"></svg:path>`,
})
export class BxWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxXIcon],svg[bx-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"></svg:path>`,
})
export class BxXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxXCircleIcon],svg[bx-x-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.172 16.242L12 13.414l2.828 2.828l1.414-1.414L13.414 12l2.828-2.828l-1.414-1.414L12 10.586L9.172 7.758L7.758 9.172L10.586 12l-2.828 2.828z"></svg:path><svg:path fill="currentColor" d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10m0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8"></svg:path>`,
})
export class BxXCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxYenIcon],svg[bx-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.2 3.4L12 10.333L6.8 3.4L5.2 4.6L10 11H7v2h4v2H7v2h4v4h2v-4h4v-2h-4v-2h4v-2h-3l4.8-6.4z"></svg:path>`,
})
export class BxYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxZoomInIcon],svg[bx-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6H9v3H6v2h3v3h2v-3h3V9h-3z"></svg:path><svg:path fill="currentColor" d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8m0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6"></svg:path>`,
})
export class BxZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxZoomOutIcon],svg[bx-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9h8v2H6z"></svg:path><svg:path fill="currentColor" d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"></svg:path>`,
})
export class BxZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxAnchorIcon],svg[bx-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 15l-3-4l-3 4h1.906c-.436 2.469-2.438 4.471-4.906 4.906V13h2v-2h-2V9.336c1.543-.459 2.714-1.923 2.714-3.621C15.714 3.666 14.048 2 12 2S8.286 3.666 8.286 5.715c0 1.698 1.171 3.162 2.714 3.621V11H9v2h2v6.906C8.531 19.471 6.529 17.469 6.094 15H8l-3-4l-3 4h2.073c.511 3.885 3.929 7 7.927 7s7.416-3.115 7.927-7zM10.286 5.715C10.286 4.77 11.055 4 12 4s1.714.77 1.714 1.715c0 .951-.801 1.785-1.714 1.785s-1.714-.834-1.714-1.785"></svg:path>`,
})
export class BxAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
