import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileRestoreIcon],svg[mdi-file-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 9.5c-1.35 0-2.5.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8a5 5 0 0 1 5 5a5 5 0 0 1-5 5"></svg:path>`,
})
export class MdiFileRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRestoreOutlineIcon],svg[mdi-file-restore-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7l5 5zm-1-6.76c0 2.62-2.13 4.76-4.76 4.76c-1.95 0-3.63-1.18-4.36-2.86H9.5c.61.86 1.61 1.43 2.74 1.43c1.84 0 3.33-1.5 3.33-3.33S14.08 9.9 12.24 9.9c-1.29 0-2.38.75-2.95 1.81l1.52 1.53H7V9.43l1.24 1.24a4.71 4.71 0 0 1 4-2.17c2.63-.03 4.76 2.11 4.76 4.74"></svg:path>`,
})
export class MdiFileRestoreOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRotateLeftIcon],svg[mdi-file-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7h-4c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h6c1.11 0 2-.89 2-2v-7zm2 5h-3V9h.17L19 11.83zM4 11c0-4.42 3.58-8 8-8l1 .06v2.02L12 5c-3.31 0-6 2.69-6 6h3l-4 4l-4-4z"></svg:path>`,
})
export class MdiFileRotateLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRotateLeftOutlineIcon],svg[mdi-file-rotate-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11c0-4.42 3.58-8 8-8l1 .06v2.02L12 5c-3.31 0-6 2.69-6 6h3l-4 4l-4-4zm13-4h-4c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h6c1.11 0 2-.89 2-2v-7zm2 11h-6V9h3v3h3z"></svg:path>`,
})
export class MdiFileRotateLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRotateRightIcon],svg[mdi-file-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4l4 4v7c0 1.11-.89 2-2 2zm6-8.17L8.17 9H8v3h3zm9-.83h3l-4 4l-4-4h3c0-3.31-2.69-6-6-6l-1 .08V3.06L12 3c4.42 0 8 3.58 8 8"></svg:path>`,
})
export class MdiFileRotateRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileRotateRightOutlineIcon],svg[mdi-file-rotate-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h3l-4 4l-4-4h3c0-3.31-2.69-6-6-6l-1 .08V3.06L12 3c4.42 0 8 3.58 8 8M9 7H5c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h6c1.11 0 2-.89 2-2v-7zm2 11H5V9h3v3h3z"></svg:path>`,
})
export class MdiFileRotateRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSearchIcon],svg[mdi-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9a6.48 6.48 0 0 1-.36-9.18C13.69 9.5 17.33 9.13 20 11V8zm-1 7V3.5L18.5 9zm7.31 9.9c1.33-2.11.69-4.9-1.4-6.22c-2.11-1.33-4.91-.68-6.22 1.4c-1.34 2.11-.69 4.89 1.4 6.22c1.46.93 3.32.93 4.79.02L22 23.39L23.39 22zm-3.81.1a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class MdiFileSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSearchOutlineIcon],svg[mdi-file-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9c-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8zm6.31 16.9c1.33-2.11.69-4.9-1.4-6.22c-2.11-1.33-4.91-.68-6.22 1.4c-1.34 2.11-.69 4.89 1.4 6.22c1.46.93 3.32.93 4.79.02L22 23.39L23.39 22zm-3.81.1a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class MdiFileSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSendIcon],svg[mdi-file-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1.46 17.37v-2h-4v-1.99h4v-2l3 3zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSendOutlineIcon],svg[mdi-file-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-5.46-1.5v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiFileSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSettingsIcon],svg[mdi-file-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0C4.89 0 4 .89 4 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-6-6zm7 1.5L18.5 7H13zM7 22v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class MdiFileSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSettingsOutlineIcon],svg[mdi-file-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-6-6zm0 2h7v5h5v11H6zm1 20v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class MdiFileSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSignIcon],svg[mdi-file-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.7 12.9L14 18.6h-2.3v-2.3l5.7-5.7zm3.4-.8c0 .3-.3.6-.6.9L20 15.5l-.9-.9l2.6-2.6l-.6-.6l-.7.7l-2.3-2.3l2.2-2.1c.2-.2.6-.2.9 0l1.4 1.4c.2.2.2.6 0 .9c-.2.2-.4.4-.4.6s.2.4.4.6c.3.3.6.6.5.9M3 20V4h7v5h5v1.5l2-2V8l-6-6H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm8-2.9c-.2 0-.4.1-.5.1L10 15H8.5l-2.1 1.7L7 14H5.5l-1 5H6l2.9-2.6l.6 2.3h1l.5-.1z"></svg:path>`,
})
export class MdiFileSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileStarIcon],svg[mdi-file-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm.5 16.9L12 17.5L9.5 19l.7-2.8L8 14.3l2.9-.2l1.1-2.7l1.1 2.6l2.9.2l-2.2 1.9zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileStarFourPointsIcon],svg[mdi-file-star-four-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c0-1.11.89-2 2-2h8l6 6v12c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H6c-.53 0-1.04-.21-1.41-.59C4.21 21.04 4 20.53 4 20zm9-.5V9h5.5zM12 11l-1.26 2.75L8 15l2.74 1.26L12 19l1.25-2.74L16 15l-2.75-1.25z"></svg:path>`,
})
export class MdiFileStarFourPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileStarFourPointsOutlineIcon],svg[mdi-file-star-four-points-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11l-1.26 2.75L8 15l2.74 1.26L12 19l1.25-2.74L16 15l-2.75-1.25zM6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m0 2v16h12V9h-5V4z"></svg:path>`,
})
export class MdiFileStarFourPointsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileStarOutlineIcon],svg[mdi-file-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zm-8.5-2l.7-2.8L8 13.3l2.9-.2l1.1-2.7l1.1 2.6l2.9.2l-2.2 1.9l.7 2.8l-2.5-1.4z"></svg:path>`,
})
export class MdiFileStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSwapIcon],svg[mdi-file-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-6 10v-2h-4v2l-3-3l3-3v2h4v-2l3 3m-4-6V3.5L18.5 9Z"></svg:path>`,
})
export class MdiFileSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSwapOutlineIcon],svg[mdi-file-swap-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 15l-3-3v2h-4v-2l-3 3l3 3v-2h4v2m0-16H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5Z"></svg:path>`,
})
export class MdiFileSwapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSyncIcon],svg[mdi-file-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.5c0-3.6 2.9-6.5 6.5-6.5c.9 0 1.7.2 2.5.5V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6.8c-1.1-1.2-1.8-2.8-1.8-4.5m2-14L18.5 9H13zm4 8.5v1.5c2.2 0 4 1.8 4 4c0 .8-.2 1.6-.7 2.2l-1.1-1.1c.2-.3.3-.7.3-1.1c0-1.4-1.1-2.5-2.5-2.5v1.5l-2.2-2.2zm0 11v-1.5c-2.2 0-4-1.8-4-4c0-.8.2-1.6.7-2.2l1.1 1.1c-.2.3-.3.7-.3 1.1c0 1.4 1.1 2.5 2.5 2.5v-1.5l2.2 2.2z"></svg:path>`,
})
export class MdiFileSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileSyncOutlineIcon],svg[mdi-file-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.8 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v3.5c-.6-.3-1.3-.4-2-.5V9h-5V4H6v16h5.5c.3.7.8 1.4 1.3 2M17 12l-2.2 2.2l2.2 2.2V15c1.4 0 2.5 1.1 2.5 2.5c0 .4-.1.8-.3 1.1l1.1 1.1c.4-.6.7-1.4.7-2.2c0-2.2-1.8-4-4-4zm2.2 8.8L17 18.5V20c-1.4 0-2.5-1.1-2.5-2.5c0-.4.1-.8.3-1.1l-1.1-1.1c-.4.6-.7 1.4-.7 2.2c0 2.2 1.8 4 4 4V23z"></svg:path>`,
})
export class MdiFileSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableIcon],svg[mdi-file-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-4 17H7v-2h3zm0-3H7v-2h3zm0-3H7v-2h3zm4 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3v-2h3zm-1-4V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableBoxIcon],svg[mdi-file-table-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2M9 18H6v-2h3zm0-3H6v-2h3zm0-3H6v-2h3zm4 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3v-2h3z"></svg:path>`,
})
export class MdiFileTableBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableBoxMultipleIcon],svg[mdi-file-table-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3c-1.1 0-2-.9-2-2V5zm18-4H7c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V3a2 2 0 0 0-2-2M11 16H8v-2h3zm0-3H8v-2h3zm0-3H8V8h3zm4 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3V8h3z"></svg:path>`,
})
export class MdiFileTableBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableBoxMultipleOutlineIcon],svg[mdi-file-table-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3c-1.1 0-2-.9-2-2V5zm18-4H7c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.11 0 2-.89 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zm-10-3H8v2h3zm4 0h-3v2h3zm-4-3H8v2h3zm4 0h-3v2h3zm-4-3H8v2h3zm4 0h-3v2h3z"></svg:path>`,
})
export class MdiFileTableBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableBoxOutlineIcon],svg[mdi-file-table-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16H5V5h14zM9 18H6v-2h3zm4 0h-3v-2h3zm-4-3H6v-2h3zm4 0h-3v-2h3zm-4-3H6v-2h3zm4 0h-3v-2h3z"></svg:path>`,
})
export class MdiFileTableBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableOutlineIcon],svg[mdi-file-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5zm-8-7H7v-2h3zm4 0h-3v-2h3zm-4 3H7v-2h3zm4 0h-3v-2h3zm-4 3H7v-2h3zm4 0h-3v-2h3z"></svg:path>`,
})
export class MdiFileTableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileTreeIcon],svg[mdi-file-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h6v4H3zm12 7h6v4h-6zm0 7h6v4h-6zm-2-4H7v5h6v2H5V9h2v2h6z"></svg:path>`,
})
export class MdiFileTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileTreeOutlineIcon],svg[mdi-file-tree-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13H7v5h5v2H5V10h2v1h5zM8 4v2H4V4zm2-2H2v6h8zm10 9v2h-4v-2zm2-2h-8v6h8zm-2 9v2h-4v-2zm2-2h-8v6h8z"></svg:path>`,
})
export class MdiFileTreeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileUndoIcon],svg[mdi-file-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m6.16 12.31c-1.56 0-2.97.58-4.05 1.52L6 13.72V19h5.28l-2.13-2.12c.82-.68 1.85-1.1 3.01-1.1c2.07 0 3.84 1.35 4.45 3.22l1.39-.46c-.81-2.45-3.12-4.23-5.84-4.23"></svg:path>`,
})
export class MdiFileUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileUndoOutlineIcon],svg[mdi-file-undo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-1-2.39l-1.16.39a3.91 3.91 0 0 0-3.71-2.69c-.96 0-1.82.35-2.5.92L11.4 18H7v-4.4l1.76 1.76c.9-.79 2.07-1.27 3.37-1.27c2.27 0 4.2 1.48 4.87 3.52"></svg:path>`,
})
export class MdiFileUndoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileUploadIcon],svg[mdi-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-.5 14v3h-3v-3H8l4-4l4 4zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileUploadOutlineIcon],svg[mdi-file-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-8l4 4h-2.5v3h-3v-3H8z"></svg:path>`,
})
export class MdiFileUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileVideoIcon],svg[mdi-file-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"></svg:path>`,
})
export class MdiFileVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileVideoOutlineIcon],svg[mdi-file-video-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13z"></svg:path>`,
})
export class MdiFileVideoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileWordIcon],svg[mdi-file-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm1.2 18h-1.4L12 13.2L10.2 20H8.8l-2.2-9h1.5l1.4 6.8l1.8-6.8h1.3l1.8 6.8l1.4-6.8h1.5zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileWordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileWordBoxIcon],svg[mdi-file-word-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 17H14l-2-7.5l-2 7.5H8.5L6.1 7h1.7l1.54 7.5L11.3 7h1.4l1.97 7.5L16.2 7h1.7M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFileWordBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileWordBoxOutlineIcon],svg[mdi-file-word-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 2h14v14H5zm12.9 2l-2.4 10H14l-2-7.5l-2 7.5H8.5L6.1 7h1.7l1.54 7.5L11.3 7h1.4l1.97 7.5L16.2 7z"></svg:path>`,
})
export class MdiFileWordBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileWordOutlineIcon],svg[mdi-file-word-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"></svg:path>`,
})
export class MdiFileWordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileXmlIcon],svg[mdi-file-xml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 8.998h5.5l-5.5-5.5v5.5zm-7-7h8l6 6v12a2 2 0 0 1-2 2H5.99a1.992 1.992 0 0 1-1.99-2l.01-16c0-1.104.884-2 1.99-2zM6.121 15.5l3.742 3.743l1.414-1.415L8.95 15.5l2.328-2.328l-1.414-1.415L6.122 15.5zm11.156 0l-3.742-3.743l-1.414 1.415L14.45 15.5l-2.328 2.328l1.414 1.415l3.742-3.743z" fill="currentColor"></svg:path>`,
})
export class MdiFileXmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFileXmlBoxIcon],svg[mdi-file-xml-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M8 15H6.5L6 13l-.5 2H4l.75-3L4 9h1.5l.5 2l.5-2H8l-.75 3zm7.5 0H14v-4.5h-1V14h-1.5v-3.5h-1V15H9v-4c0-1.1.9-2 2-2h2.5a2 2 0 0 1 2 2zm4.5 0h-3V9h1.5v4.5H20z"></svg:path>`,
})
export class MdiFileXmlBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFillIcon],svg[mdi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 11.5s-2 2.167-2 3.5a2 2 0 0 0 4 0c0-1.333-2-3.5-2-3.5zm-4.281-1.52L5.207 10L10 5.208l4.719 4.771zm1.842-1.041L7.621 0L6.207 1.414l2.379 2.379l-5.147 5.146a1.502 1.502 0 0 0 0 2.122l5.5 5.5c.293.293.677.439 1.061.439c.384 0 .768-.146 1.061-.439l5.5-5.5a1.502 1.502 0 0 0 0-2.122z" fill="currentColor"></svg:path><svg:path d="M0 20h24v4H0z" fill="currentColor"></svg:path>`,
})
export class MdiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilmIcon],svg[mdi-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3H5V1.8c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V3h1.5A1.5 1.5 0 0 1 14 4.5V5h8v15h-8v.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 20.5v-16A1.5 1.5 0 0 1 3.5 3M18 7v2h2V7zm-4 0v2h2V7zm-4 0v2h2V7zm4 9v2h2v-2zm4 0v2h2v-2zm-8 0v2h2v-2z"></svg:path>`,
})
export class MdiFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilmstripIcon],svg[mdi-filmstrip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-2V7h2m0 6h-2v-2h2m0 6h-2v-2h2M8 9H6V7h2m0 6H6v-2h2m0 6H6v-2h2M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3z"></svg:path>`,
})
export class MdiFilmstripIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilmstripBoxIcon],svg[mdi-filmstrip-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zM7 18v-2H5v2zm0-5v-2H5v2zm0-5V6H5v2zm12 10v-2h-2v2zm0-5v-2h-2v2zm0-5V6h-2v2z"></svg:path>`,
})
export class MdiFilmstripBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilmstripBoxMultipleIcon],svg[mdi-filmstrip-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M10 15H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 8h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2z"></svg:path>`,
})
export class MdiFilmstripBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilmstripOffIcon],svg[mdi-filmstrip-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L21 21.72L19.73 23L16 19.27V21H8v-2H6v2H4V7.27zM18 9V7h-2v2zm0 4v-2h-2v2zm0 2h-1.18l-10-10H8V3h8v2h2V3h2v15.18l-2-2zM8 13v-1.73L7.73 11H6v2zm0 4v-2H6v2zM6 3v1.18L4.82 3z"></svg:path>`,
})
export class MdiFilmstripOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterIcon],svg[mdi-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z"></svg:path>`,
})
export class MdiFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterCheckIcon],svg[mdi-filter-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L8.29 18.7a.99.99 0 0 1-.29-.83V12h-.03L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L12.03 12zm5.75 9L15 18l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiFilterCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterCheckOutlineIcon],svg[mdi-filter-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19.88c.04.3-.06.62-.28.83c-.4.39-1.03.39-1.42 0L7.29 16.7a.99.99 0 0 1-.29-.83v-5.12L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L13 10.75zM5.04 5L9 10.07v5.51l2 2v-7.53L14.96 5zm12.71 16L15 18l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiFilterCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterCogIcon],svg[mdi-filter-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.77 19.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 13h-2a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32M18 19.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M3 3c-.22 0-.43.08-.62.22a1 1 0 0 0-.17 1.4L7.97 12H8v5.87c-.04.29.06.6.29.83l2.01 2.01c.35.35.89.37 1.28.09c-.38-.89-.58-1.84-.58-2.8c0-1.27.35-2.5 1-3.6V12h.03l5.76-7.38a1 1 0 0 0-.17-1.4c-.19-.14-.4-.22-.62-.22z"></svg:path>`,
})
export class MdiFilterCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterCogOutlineIcon],svg[mdi-filter-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.77 19.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 13h-2a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32M18 19.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m-.38-16.28c-.19-.14-.4-.22-.62-.22H3c-.22 0-.43.08-.62.22a1 1 0 0 0-.17 1.4L7 10.75v5.12c-.04.29.06.6.29.83l4.01 4.01c.1.1.2.17.35.22C11.22 20 11 19 11 18c0-1.83.72-3.59 2-4.9v-2.35l4.79-6.13a1 1 0 0 0-.17-1.4M11 10.05v7.53l-2-2v-5.52L5.04 5h9.92z"></svg:path>`,
})
export class MdiFilterCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterMenuIcon],svg[mdi-filter-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 11l5.76-7.38a1 1 0 0 0-.17-1.4A1 1 0 0 0 16 2H2a1 1 0 0 0-.62.22a1 1 0 0 0-.17 1.4L7 11v5.87a1 1 0 0 0 .29.83l2 2a1 1 0 0 0 1.41 0a1 1 0 0 0 .3-.83zm2 5l5 5l5-5Z"></svg:path>`,
})
export class MdiFilterMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterMenuOutlineIcon],svg[mdi-filter-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.88a1 1 0 0 1-.29.83a1 1 0 0 1-1.41 0l-4-4a1 1 0 0 1-.3-.84V9.75L1.21 3.62a1 1 0 0 1 .17-1.4A1 1 0 0 1 2 2h14a1 1 0 0 1 .62.22a1 1 0 0 1 .17 1.4L12 9.75zM4 4l4 5.06v5.52l2 2V9.05L14 4m-1 12l5 5l5-5Z"></svg:path>`,
})
export class MdiFilterMenuOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterMinusIcon],svg[mdi-filter-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L8.29 18.7a1 1 0 0 1-.29-.84V12h-.03L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L12.03 12zm3 5h8v2h-8z"></svg:path>`,
})
export class MdiFilterMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterMinusOutlineIcon],svg[mdi-filter-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h8v2h-8zm-2 2.88c.04.3-.06.62-.28.83c-.4.39-1.03.39-1.42 0L7.29 16.7a.99.99 0 0 1-.29-.83v-5.12L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L13 10.75zM5.04 5L9 10.07v5.51l2 2v-7.53L14.96 5z"></svg:path>`,
})
export class MdiFilterMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterMultipleIcon],svg[mdi-filter-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.46 5c-.21 0-.42.08-.59.21c-.44.34-.52.97-.18 1.4v.01L8 13.42v5.99l2.29 2.3c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42L10 18.59v-5.86L4.27 5.39A1.01 1.01 0 0 0 3.46 5M16 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L6.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L16.03 12z"></svg:path>`,
})
export class MdiFilterMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterMultipleOutlineIcon],svg[mdi-filter-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.47 5c-.22 0-.43.08-.6.21c-.44.34-.52.97-.18 1.4v.01L7 12.14v5.91l3.64 3.66c.36.39 1.02.39 1.41 0s.39-1.02.01-1.41L9 17.22v-5.77L4.27 5.39c-.19-.25-.49-.39-.8-.39m18.15-1.78c-.19-.14-.4-.22-.62-.22H7c-.22 0-.43.08-.62.22a1 1 0 0 0-.17 1.4L11 10.75v5.12c-.04.29.06.6.29.83l4.01 4.01c.39.39 1.02.39 1.41 0c.23-.21.33-.53.29-.83v-9.13l4.79-6.13a1 1 0 0 0-.17-1.4M15 10.05v7.53l-2-2v-5.52L9.04 5h9.92z"></svg:path>`,
})
export class MdiFilterMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterOffIcon],svg[mdi-filter-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l8.39 8.37l.47.63H10v5.87c-.04.29.06.6.29.83l2.01 2.01c.39.39 1.02.39 1.41 0c.23-.21.33-.53.29-.83v-3.99l6.84 6.84l1.27-1.27L14 13.35L9.41 8.76L4.15 3.5zM6.21 3l8.33 8.34l5.25-6.72a1 1 0 0 0-.17-1.4c-.19-.14-.4-.22-.62-.22z"></svg:path>`,
})
export class MdiFilterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterOffOutlineIcon],svg[mdi-filter-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3L9 10.89v4.98c-.04.29.06.6.29.83l4.01 4.01c.39.39 1.02.39 1.41 0c.23-.21.33-.53.29-.83v-2.99l5.84 5.84l1.27-1.27L15 14.35v-.01l-2-1.99l-2-2.01L4.15 3.5zM6.21 3L8.2 5h8.76l-3.85 4.91L15 11.8v-1.05l4.79-6.13a1 1 0 0 0-.17-1.4c-.19-.14-.4-.22-.62-.22zM11 12.89l2 2v2.69l-2-2z"></svg:path>`,
})
export class MdiFilterOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterOutlineIcon],svg[mdi-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.99.99 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z"></svg:path>`,
})
export class MdiFilterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterPlusIcon],svg[mdi-filter-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L8.29 18.7a.99.99 0 0 1-.29-.83V12h-.03L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L12.03 12zm3 5h3v-3h2v3h3v2h-3v3h-2v-3h-3z"></svg:path>`,
})
export class MdiFilterPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterPlusOutlineIcon],svg[mdi-filter-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h3v-3h2v3h3v2h-3v3h-2v-3h-3zm-2 2.88c.04.3-.06.62-.28.83c-.4.39-1.03.39-1.42 0L7.29 16.7a.99.99 0 0 1-.29-.83v-5.12L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L13 10.75zM5.04 5L9 10.07v5.51l2 2v-7.53L14.96 5z"></svg:path>`,
})
export class MdiFilterPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterRemoveIcon],svg[mdi-filter-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.76 20.83L17.6 18l-2.84-2.83l1.41-1.41L19 16.57l2.83-2.81l1.41 1.41L20.43 18l2.81 2.83l-1.41 1.41L19 19.4l-2.83 2.84zM12 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L8.29 18.7a.99.99 0 0 1-.29-.83V12h-.03L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L12.03 12z"></svg:path>`,
})
export class MdiFilterRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterRemoveOutlineIcon],svg[mdi-filter-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.73 20.83L17.58 18l-2.85-2.83l1.42-1.41L19 16.57l2.8-2.81l1.42 1.41L20.41 18l2.81 2.83l-1.42 1.41L19 19.4l-2.85 2.84zM13 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L7.29 16.7a.99.99 0 0 1-.29-.83v-5.12L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L13 10.75zM5.04 5L9 10.06v5.52l2 2v-7.53L14.96 5z"></svg:path>`,
})
export class MdiFilterRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterSettingsIcon],svg[mdi-filter-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h2v2h-2m-4-2h2v2h-2m-4-2h2v2H7m7-12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12Z"></svg:path>`,
})
export class MdiFilterSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterSettingsOutlineIcon],svg[mdi-filter-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h2v2h-2m-4-2h2v2h-2m-4-2h2v2H7m8-4.12c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.99.99 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5Z"></svg:path>`,
})
export class MdiFilterSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterVariantIcon],svg[mdi-filter-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4z"></svg:path>`,
})
export class MdiFilterVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterVariantMinusIcon],svg[mdi-filter-variant-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V6h18zm-7.19 8H10v2h3.09c.12-.72.37-1.39.72-2M18 11H6v2h12zm5 7h-8v2h8z"></svg:path>`,
})
export class MdiFilterVariantMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterVariantPlusIcon],svg[mdi-filter-variant-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V6h18zm-7.19 8H10v2h3.09c.12-.72.37-1.39.72-2M18 11H6v2h12zm0 4v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiFilterVariantPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFilterVariantRemoveIcon],svg[mdi-filter-variant-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V6h18zm-7.19 8H10v2h3.09c.12-.72.37-1.39.72-2M18 11H6v2h12zm3.12 4.46L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiFilterVariantRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFinanceIcon],svg[mdi-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64"></svg:path>`,
})
export class MdiFinanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFindReplaceIcon],svg[mdi-find-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.98 6.98 0 0 0 11 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0 1 11 6m5.64 9.14A6.9 6.9 0 0 0 17.92 12H15.9a5 5 0 0 1-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.98 6.98 0 0 0 11 18c1.55 0 3-.5 4.14-1.36L20 21.5l1.5-1.5z"></svg:path>`,
})
export class MdiFindReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFingerprintIcon],svg[mdi-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12 3c-1.97 0-3.85.47-5.56 1.41c-.24.13-.54.04-.68-.2a.506.506 0 0 1 .2-.68C7.82 2.5 9.86 2 12 2s4 .47 6.04 1.5c.25.15.34.45.21.69a.48.48 0 0 1-.44.28M3.5 9.72c-.1 0-.2-.03-.29-.09a.517.517 0 0 1-.12-.7c.99-1.4 2.25-2.5 3.75-3.27C10 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.85 3.75 3.25c.16.22.1.54-.12.7c-.23.16-.54.11-.7-.1a9.26 9.26 0 0 0-3.39-2.96c-2.87-1.47-6.54-1.47-9.4.01c-1.36.7-2.5 1.7-3.4 2.95c-.08.15-.23.22-.39.22m6.25 12.07c-.13 0-.25-.05-.35-.15c-.87-.87-1.34-1.43-2.01-2.64c-.69-1.23-1.05-2.73-1.05-4.34c0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.84c.64 1.16 1.08 1.65 1.85 2.43c.19.2.19.51 0 .71c-.12.1-.24.15-.37.15m7.17-1.85c-1.19 0-2.24-.3-3.1-.89c-1.49-1.01-2.38-2.65-2.38-4.39a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5c0 1.41.72 2.74 1.94 3.56c.71.48 1.54.71 2.54.71c.24 0 .64-.03 1.04-.1c.27-.05.54.13.58.41c.05.26-.13.53-.41.58c-.57.11-1.07.12-1.21.12M14.91 22h-.13c-1.59-.46-2.63-1.05-3.72-2.12a7.28 7.28 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.95 1.94 2.08 1.94c1.15 0 2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83c-2.84 0-5.46 1.58-6.61 4.03c-.39.81-.59 1.76-.59 2.8c0 .78.07 2.01.67 3.61c.1.26-.03.55-.29.64a.504.504 0 0 1-.64-.29c-.5-1.31-.73-2.62-.73-3.96c0-1.2.23-2.29.68-3.24c1.33-2.79 4.28-4.6 7.51-4.6c4.54 0 8.25 3.51 8.25 7.83c0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51c.95.94 1.86 1.46 3.27 1.84c.27.08.42.36.35.62c-.05.23-.26.38-.47.38"></svg:path>`,
})
export class MdiFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFingerprintOffIcon],svg[mdi-fingerprint-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 4.77L2.78 3.5L20.5 21.22l-1.27 1.28l-2.56-2.56c-1.09-.04-2.05-.34-2.85-.89c-1.48-1-2.36-2.62-2.38-4.34l-1.17-1.18c-.24.32-.38.7-.38 1.12c0 1.71.66 3.31 1.87 4.51c.95.94 1.86 1.46 3.27 1.84c.27.08.42.36.35.62c-.05.23-.26.38-.47.38h-.13c-1.59-.46-2.63-1.05-3.72-2.12a7.28 7.28 0 0 1-2.17-5.22c0-.69.25-1.33.67-1.83L8.5 11.77c-.72.77-1.16 1.78-1.16 2.89c0 1.44.32 2.77.93 3.84c.64 1.16 1.08 1.65 1.85 2.43c.19.2.19.51 0 .71c-.12.1-.24.15-.37.15s-.25-.05-.35-.15c-.87-.87-1.34-1.43-2.01-2.64c-.69-1.23-1.05-2.73-1.05-4.34c0-1.38.55-2.66 1.45-3.6L6.7 9.97c-.55.53-1.01 1.18-1.35 1.89c-.39.81-.59 1.76-.59 2.8c0 .78.07 2.01.67 3.61c.1.26-.03.55-.29.64a.504.504 0 0 1-.64-.29c-.5-1.31-.73-2.62-.73-3.96c0-1.2.23-2.29.68-3.24c.39-.81.91-1.54 1.55-2.16L4.97 8.24q-.585.585-1.08 1.26c-.08.15-.23.22-.39.22l-.29-.09a.517.517 0 0 1-.12-.7c.36-.5.75-.97 1.18-1.4zm16.31-.3l-.23-.06C15.66 3.42 14 3 12 3c-1.97 0-3.85.47-5.56 1.41l-.15.05l-.58-.57c.02-.15.11-.28.25-.36C7.82 2.5 9.86 2 12 2s4 .47 6.04 1.5c.25.15.34.45.21.69a.48.48 0 0 1-.44.28m-.66 1.18c1.5.77 2.76 1.85 3.75 3.25c.16.22.1.54-.12.7c-.23.16-.54.11-.7-.1a9.26 9.26 0 0 0-3.39-2.96c-2.63-1.35-5.93-1.46-8.66-.33l-.76-.76c3.07-1.41 6.87-1.35 9.88.2M12 9.27c3.12 0 5.66 2.42 5.66 5.39a.5.5 0 0 1-.5.5l-.23-.05l-.21-.22l-.06-.23c0-2.39-2.04-4.34-4.57-4.39l-.94-.94zm2.38 8.95c.33.23.69.4 1.09.51l-2.84-2.83c.29.92.9 1.75 1.75 2.32m4.83-3.56c0-3.77-3.25-6.83-7.25-6.83c-.7 0-1.38.1-2.03.28l-.81-.81c.88-.3 1.85-.48 2.84-.48c4.54 0 8.25 3.51 8.25 7.83c0 1-.52 1.88-1.32 2.41l-.72-.72c.62-.34 1.04-.96 1.04-1.68"></svg:path>`,
})
export class MdiFingerprintOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireIcon],svg[mdi-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"></svg:path>`,
})
export class MdiFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireAlertIcon],svg[mdi-fire-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C11.33 7.26 11 4.85 11.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C3.78 10 2.87 12.3 3 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27M21 13h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiFireAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireCircleIcon],svg[mdi-fire-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.66 14.18c.03.11.04.22.04.32c.03.65-.26 1.35-.73 1.78c-.22.19-.58.39-.86.47c-.88.31-1.76-.13-2.28-.64c.94-.22 1.49-.9 1.67-1.61c.12-.61-.13-1.12-.23-1.72c-.1-.58-.08-1.07.13-1.6c.15.29.31.59.5.82c.6.78 1.55 1.12 1.76 2.18M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-4.84.56l-.1-.2c-.16-.36-.61-.98-.61-.98c-.18-.23-.4-.44-.6-.64c-.53-.47-1.12-.8-1.63-1.29c-1.17-1.14-1.43-3.01-.68-4.45c-.75.18-1.4.58-1.96 1.03c-2.03 1.62-2.83 4.47-1.87 6.92c.03.08.06.16.06.26c0 .17-.12.32-.27.39c-.19.07-.37.03-.5-.1a.3.3 0 0 1-.13-.13c-.87-1.11-1.03-2.71-.44-3.98c-1.31 1.06-2.02 2.85-1.93 4.53c.06.39.1.78.24 1.17c.11.47.32.91.56 1.35c.84 1.34 2.31 2.31 3.89 2.5c1.68.21 3.48-.09 4.77-1.24c1.44-1.3 1.94-3.37 1.2-5.14"></svg:path>`,
})
export class MdiFireCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireExtinguisherIcon],svg[mdi-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7h1.25L12 5h-1.75L6 7.5V9H4V6.5L10 3h2V2h2v1h2l1-.5v3L16 5h-2l.25 2h1.25A1.5 1.5 0 0 1 17 8.5V22H9V8.5A1.5 1.5 0 0 1 10.5 7"></svg:path>`,
})
export class MdiFireExtinguisherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireHydrantIcon],svg[mdi-fire-hydrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15v-1H4v-2h1v-1h2v4zm14-3v-1h-2v4h2v-1h1v-2zm-1-6h-2.14C15.5 4.6 14.4 3.5 13 3.14V2h-2v1.14C9.6 3.5 8.5 4.6 8.14 6H6v2h12zm0 16H6c0-1.1.9-2 2-2V9h8v11a2 2 0 0 1 2 2m-8-9a2 2 0 1 0 4 0c0-1.11-.89-2-2-2s-2 .9-2 2"></svg:path>`,
})
export class MdiFireHydrantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireHydrantAlertIcon],svg[mdi-fire-hydrant-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7h-2v6h2zm0 8h-2v2h2zM3 15v-1H2v-2h1v-1h2v4zm14-3v-1h-2v4h2v-1h1v-2zm-1-6h-2.14C13.5 4.6 12.4 3.5 11 3.14V2H9v1.14C7.6 3.5 6.5 4.6 6.14 6H4v2h12zm0 16H4a2 2 0 0 1 2-2V9h8v11a2 2 0 0 1 2 2m-8-9a2 2 0 1 0 4 0c0-1.11-.89-2-2-2s-2 .9-2 2"></svg:path>`,
})
export class MdiFireHydrantAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireHydrantOffIcon],svg[mdi-fire-hydrant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l1.27-1.27L2.39 1.73L1.11 3L8 9.89V20c-1.1 0-2 .9-2 2h12a2 2 0 0 0-2-2v-2.11zM10.22 12.11l2.67 2.67c-.27.14-.57.22-.89.22a2 2 0 0 1-2-2c0-.32.08-.62.22-.89M11.2 8L8.44 5.24c.5-1.03 1.43-1.81 2.56-2.1V2h2v1.14c1.4.36 2.5 1.46 2.86 2.86H18v2zm7.8 3v1h1v2h-1v1h-.8L17 13.8V11zM5 15v-1H4v-2h1v-1h2v4zm11-2.2L12.2 9H16z"></svg:path>`,
})
export class MdiFireHydrantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireOffIcon],svg[mdi-fire-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.98 6C5.66 10.36 4.88 12.47 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c.07-.06.12-.14.19-.21l3.62 3.62zM8.8 14.05c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1-1.29-1.26-3.07-.74-4.61l1.32 1.32c0 .93.15 1.86.49 2.75c.04.1.08.2.08.33c0 .22-.15.42-.35.5m5.7 3.45c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.05-.23.05-.47.03-.7L15 16.88c-.15.23-.31.45-.5.62m4.42-1.78L9.65 6.46c.47-.81 1.07-1.54 1.81-2.14c.71-.57 1.54-1.09 2.49-1.32c-.95 1.85-.62 4.26.87 5.72c.64.63 1.4 1.06 2.07 1.66c.26.26.54.52.77.82c0 0 .56.8.77 1.26l.13.26c.4.97.5 2 .36 3"></svg:path>`,
})
export class MdiFireOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireStationIcon],svg[mdi-fire-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.11 10.39c.26-.24.42-.64.39-1V9.2c-.07-.39-.32-.6-.58-.83c-.14-.13-.29-.25-.42-.42l-.24-.45c-.13.3-.14.58-.09.91c.02.09.04.19.07.28c.05.23.11.45.05.7c-.09.39-.39.78-.92.91c.3.29.78.52 1.27.36zM2 22V7c0-.26.11-.5.29-.71C2.5 6.11 2.74 6 3 6h4V2h10v4h4c.27 0 .5.11.71.29c.19.21.29.45.29.71v15h-3v-5s0-2-4-2s-4 2-4 2v5H8v-5H4v5zM14.47 7.62h.03l-.36-.37l-.89-.75c-.64-.62-.79-1.68-.38-2.5c-.37.1-.77.33-1.08.58c-1.11.92-1.56 2.54-1.03 3.92l.04.15c0 .1-.07.19-.16.22c-.09.05-.2.02-.28-.05l-.06-.08c-.49-.63-.57-1.53-.24-2.24c-.72.59-1.1 1.6-1.06 2.56l.13.66c.06.28.17.53.32.78c.45.74 1.26 1.29 2.13 1.4c.92.1 1.92-.05 2.63-.71c.79-.74 1.08-1.89.66-2.9l-.06-.12z"></svg:path>`,
})
export class MdiFireStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireTruckIcon],svg[mdi-fire-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.04 2c-.19 0-.38.04-.54.14L5.59 8.5h3.96l7.95-4.64c.5-.28.63-.89.35-1.36c-.17-.3-.47-.5-.81-.5M16 8v2H3a2 2 0 0 0-2 2h1v3H1v4h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-6.5L19.5 8zm2 1.5h1l2.5 3v1H18zM4 12h3v3H4zm5 0h3v3H9zm5 0h2v3h-2zm-8 5.5A1.5 1.5 0 0 1 7.5 19A1.5 1.5 0 0 1 6 20.5A1.5 1.5 0 0 1 4.5 19A1.5 1.5 0 0 1 6 17.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiFireTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFirebaseIcon],svg[mdi-firebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 18.69l-7.3 4.05q-.75.39-1.5 0L4 18.69L17.05 5.54l.35-.1c.3 0 .47.13.5.4zM9.35 5.74L4.8 13.29L6.7 1.34c.03-.27.2-.4.5-.4c.2 0 .33.06.4.25l2.15 3.95zM13.85 7L4.3 16.59l7.25-12.3c.1-.2.25-.29.45-.29s.33.09.4.29z"></svg:path>`,
})
export class MdiFirebaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFirefoxIcon],svg[mdi-firefox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.85 6.74q.015 0 0 0M21.28 8.6c-.43-1.05-1.32-2.18-2.01-2.54c.56 1.11.89 2.22 1.02 3.04v.02c-1.13-2.82-3.05-3.96-4.62-6.44c-.08-.12-.17-.25-.24-.38c-.04-.07-.07-.14-.11-.21c-.06-.13-.12-.26-.15-.4c0-.01-.01-.02-.02-.02h-.03c-2.22 1.3-3.15 3.59-3.38 5.04c-.69.04-1.37.21-1.99.51c-.12.05-.17.19-.13.31c.05.14.21.21.34.15c.54-.26 1.14-.41 1.74-.45h.05c.08-.01.17-.01.25-.01c.5-.01.97.06 1.44.2l.06.02c.1.02.17.06.25.06c.05.04.11.06.16.08l.14.06c.07.03.14.06.2.09c.03.02.06.03.09.05c.07.04.16.07.2.11c.04.02.08.05.12.07c.73.45 1.34 1.07 1.75 1.81c-.53-.37-1.49-.74-2.41-.58c3.6 1.81 2.63 8-2.36 7.76c-.44-.01-.88-.1-1.3-.25c-.1-.03-.2-.07-.29-.12c-.05-.02-.12-.05-.17-.08c-1.23-.63-2.24-1.82-2.38-3.27c0 0 .5-1.73 3.33-1.73c.31 0 1.17-.86 1.2-1.1c0-.09-1.74-.78-2.42-1.45c-.37-.36-.54-.53-.69-.66c-.08-.07-.17-.13-.26-.19a4.63 4.63 0 0 1-.03-2.45C7.6 6.12 6.8 6.86 6.22 7.5c-.4-.5-.37-2.15-.35-2.5c-.01 0-.3.16-.33.18c-.35.25-.68.53-.98.82c-.35.37-.66.74-.94 1.14c-.62.91-1.12 1.95-1.34 3.04c0 .01-.1.41-.17.92l-.03.23c-.02.17-.04.32-.08.58v.41c0 5.53 4.5 10.01 10 10.01c4.97 0 9.08-3.59 9.88-8.33c.02-.11.03-.24.05-.37c.2-1.72-.02-3.52-.65-5.03"></svg:path>`,
})
export class MdiFirefoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireplaceIcon],svg[mdi-fireplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zm0-16H2V3h20zm-2 1v12h-3v-8s-2.5-1-5-1s-5 1-5 1v8H4V7zm-5.5 7.67h-.03l.34.55l.06.12c.42 1.01.13 2.16-.66 2.9c-.71.66-1.71.83-2.63.71c-.87-.11-1.68-.66-2.13-1.42c-.15-.23-.26-.5-.32-.76L9 16.11c-.04-.96.34-1.97 1.06-2.57c-.33.72-.25 1.62.24 2.25l.06.08c.08.07.19.1.28.05c.09-.03.16-.12.16-.22l-.04-.14c-.53-1.39-.08-3.01 1.03-3.93c.31-.25.71-.48 1.08-.58c-.41.82-.26 1.88.38 2.52l.89.73zm-1.39 2.77c.26-.24.42-.64.39-1v-.19c-.12-.6-.65-.79-1-1.25l-.24-.45c-.13.3-.14.58-.09.91c.06.34.2.63.12.98c-.09.39-.39.78-.92.91c.3.29.78.52 1.27.36z"></svg:path>`,
})
export class MdiFireplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireplaceOffIcon],svg[mdi-fireplace-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zm0-16H2V3h20zm-2 1v12h-3v-8s-2.5-1-5-1s-5 1-5 1v8H4V7z"></svg:path>`,
})
export class MdiFireplaceOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFirewireIcon],svg[mdi-firewire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m3 9H9v2h6zm0 3H9v2h6zm-8.7-9.4l4.2-4.2l-1.3-1.5l-4.3 4.3zM4.2 8.5l4.2-4.2l-1.3-1.5l-4.3 4.3zM15 17H9v2h6zM13.4 6.3l4.2 4.2L21.1 7l-4.2-4.2z"></svg:path>`,
})
export class MdiFirewireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireworkIcon],svg[mdi-firework-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 16.59l-1.3-1.31l7.76-7.78l4.24 4.24l-7.78 7.76l-1.43-1.41c-.25.07-.49.19-.66.41c-.06.07-.13.15-.13.24c-.08.14-.12.26-.18.41c-.11.27-.23.54-.39.78c-.12.17-.25.33-.4.46c-.11.11-.24.2-.37.27c-.08.05-.16.1-.26.13c-.6.25-1.27.21-1.9.21v-2h.9c.1 0 .18 0 .26-.06l.05-.05c.07-.08.13-.19.18-.29c.08-.18.14-.36.21-.54l.04-.1c.12-.27.26-.51.44-.73c.1-.13.22-.23.34-.36c.12-.1.24-.2.38-.28M21 3l-1.12 8.19l-7.07-7.07z"></svg:path>`,
})
export class MdiFireworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFireworkOffIcon],svg[mdi-firework-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-7.67-7.67l-4.45 4.44l-1.43-1.41c-.25.07-.49.19-.66.41c-.06.07-.13.15-.13.24c-.08.14-.12.26-.18.41c-.11.27-.23.54-.39.78c-.12.17-.25.33-.4.46c-.11.11-.24.2-.37.27c-.08.05-.16.1-.26.13c-.6.25-1.27.21-1.9.21v-2h.9c.1 0 .18 0 .26-.06l.05-.05c.07-.08.13-.19.18-.29c.08-.18.14-.36.21-.54l.04-.1c.12-.27.26-.51.44-.73c.1-.13.22-.23.34-.36c.12-.1.24-.2.38-.28l-1.3-1.31l4.44-4.45L1.11 3l1.28-1.27l19.72 19.73zM21 3l-8.19 1.12l7.07 7.07zm-4.5 8.74L12.26 7.5l-.76.78l4.22 4.22z"></svg:path>`,
})
export class MdiFireworkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFishIcon],svg[mdi-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l.76-3c-3.26-.21-6.17-1.6-7.01-3.42c-.09.48-.22.92-.42 1.25C4.67 16 3.33 16 2 16c1.1 0 1.5-1.57 1.5-3.5S3.1 9 2 9c1.33 0 2.67 0 3.33 1.17c.2.33.33.77.42 1.25c.65-1.42 2.57-2.57 4.91-3.1L9 5c2 0 4 0 5.33.67c1.13.56 1.78 1.6 2.36 2.71c2.92.7 5.31 2.28 5.31 4.12c0 1.88-2.5 3.5-5.5 4.16c-.83 1.1-1.64 2.12-2.33 2.67c-.84.67-1.5.67-2.17.67m5-9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiFishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFishOffIcon],svg[mdi-fish-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-5.1-5.1c-.6.7-1.1 1.3-1.6 1.7c-.8.7-1.4.7-2.1.7l.8-3c-3.3-.2-6.2-1.6-7-3.4c-.1.5-.2.9-.4 1.2C4.7 16 3.3 16 2 16c1.1 0 1.5-1.6 1.5-3.5S3.1 9 2 9c1.3 0 2.7 0 3.3 1.2c.2.3.3.8.4 1.2c.3-.7 1-1.4 1.9-1.9L1.1 3l1.3-1.3l19.7 19.7zM9.8 6.6L9 5c2 0 4 0 5.3.7c1.1.6 1.8 1.6 2.4 2.7c2.9.7 5.3 2.3 5.3 4.1c0 1.3-1.2 2.5-3 3.3zM16 12c0 .6.4 1 1 1s1-.4 1-1s-.4-1-1-1s-1 .4-1 1"></svg:path>`,
})
export class MdiFishOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFishbowlIcon],svg[mdi-fishbowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.11 5H21V3H3v2h1.89A9.93 9.93 0 0 0 2 12c0 3.97 2.31 7.39 5.66 9h8.68A9.97 9.97 0 0 0 22 12c0-2.73-1.11-5.2-2.89-7m-5.86 12c-1.16 0-2.19-.36-2.92-.83c-.66.83-2 .83-3.33.83c1.1 0 1.5-1.12 1.5-2.5S8.1 12 7 12c1.33 0 2.67 0 3.37.91c.69-.55 1.72-.91 2.88-.91c2.07 0 3.75 1.12 3.75 2.5S15.32 17 13.25 17M16 7c-2.44 1.71-5.56 1.71-8 0c-.94.66-2 1.09-3.05 1.25c.36-.67.82-1.29 1.37-1.84L7.7 5h8.6l1.38 1.41a7.9 7.9 0 0 1 1.37 1.84A7.3 7.3 0 0 1 16 7"></svg:path>`,
})
export class MdiFishbowlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFishbowlOutlineIcon],svg[mdi-fishbowl-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.11 5H21V3H3v2h1.89A9.93 9.93 0 0 0 2 12c0 3.97 2.31 7.39 5.66 9h8.68A9.97 9.97 0 0 0 22 12c0-2.73-1.11-5.2-2.89-7M6.32 6.41L7.7 5h8.6l1.38 1.41a7.9 7.9 0 0 1 1.37 1.84A7.3 7.3 0 0 1 16 7c-2.44 1.71-5.56 1.71-8 0c-.94.66-2 1.09-3.05 1.25c.36-.67.82-1.29 1.37-1.84M15.85 19h-7.7A7.93 7.93 0 0 1 4 12c0-.57.07-1.14.19-1.68A8.74 8.74 0 0 0 8 9.33c2.5 1.3 5.5 1.3 8 0c1.2.62 2.5.96 3.81.99c.12.54.19 1.11.19 1.68a7.93 7.93 0 0 1-4.15 7M17 14.5c0 1.38-1.68 2.5-3.75 2.5c-1.16 0-2.19-.36-2.92-.84c-.66.84-2 .84-3.33.84c1.1 0 1.5-1.12 1.5-2.5S8.1 12 7 12c1.33 0 2.67 0 3.37.91c.69-.55 1.72-.91 2.88-.91c2.07 0 3.75 1.12 3.75 2.5"></svg:path>`,
})
export class MdiFishbowlOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFitToPageIcon],svg[mdi-fit-to-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m-8 2l3 3h-2v2h-2V7H9m-2 8l-3-3l3-3v2h2v2H7m5 7l-3-3h2v-2h2v2h2m2-2v-2h-2v-2h2V9l3 3"></svg:path>`,
})
export class MdiFitToPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFitToPageOutlineIcon],svg[mdi-fit-to-page-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 18H4V4h16m-7 4v2h-2V8H9l3-3l3 3m1 7v-2h-2v-2h2V9l3 3m-9 1H8v2l-3-3l3-3v2h2m5 5l-3 3l-3-3h2v-2h2v2"></svg:path>`,
})
export class MdiFitToPageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFitToScreenIcon],svg[mdi-fit-to-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h3c1.1 0 2 .9 2 2v2h-2V6h-3zM4 8V6h3V4H4c-1.1 0-2 .9-2 2v2zm16 8v2h-3v2h3c1.1 0 2-.9 2-2v-2zM7 18H4v-2H2v2c0 1.1.9 2 2 2h3zM18 8H6v8h12z"></svg:path>`,
})
export class MdiFitToScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFitToScreenOutlineIcon],svg[mdi-fit-to-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h3c1.1 0 2 .9 2 2v2h-2V6h-3zM4 8V6h3V4H4c-1.1 0-2 .9-2 2v2zm16 8v2h-3v2h3c1.1 0 2-.9 2-2v-2zM7 18H4v-2H2v2c0 1.1.9 2 2 2h3zm9-8v4H8v-4zm2-2H6v8h12z"></svg:path>`,
})
export class MdiFitToScreenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagIcon],svg[mdi-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></svg:path>`,
})
export class MdiFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagCheckeredIcon],svg[mdi-flag-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 6H20v10h-7l-.4-2H7v7H5V4h9zm-.4 8h2v-2h2v-2h-2V8h-2v2l-1-2V6h-2v2H9V6H7v2h2v2H7v2h2v-2h2v2h2v-2l1 2zm-3-4V8h2v2zm3 0h2v2h-2z"></svg:path>`,
})
export class MdiFlagCheckeredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagCheckeredVariantIcon],svg[mdi-flag-checkered-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 3a1 1 0 0 1 1 1v.875C8.063 4.437 9.5 4 11 4c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4a1 1 0 0 1 1-1zm5 5.75c1.221 0 2.07.652 3 1.16v1.416c.594.37 1.221.674 2 .674c2 0 2-.5 2-.5v-1.25s-1 .25-2 .25c-.779 0-1.406-.265-2-.59V8.576c.594.37 1.221.674 2 .674c2 0 2-.25 2-.25V7.5S17 8 16 8c-.779 0-1.406-.303-2-.674v1.25c-.93-.58-1.779-1.326-3-1.326V6C9 6 7 7.25 7 7.25V8.5s2-1.25 4-1.25v1.5C9 8.75 7 10 7 10v1.5S9 10 11 10V8.75z" fill="currentColor"></svg:path>`,
})
export class MdiFlagCheckeredVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagMinusIcon],svg[mdi-flag-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.4 5H18v10h-7l-.4-2H5v7H3V3h9zM14 17h8v2h-8z"></svg:path>`,
})
export class MdiFlagMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagMinusOutlineIcon],svg[mdi-flag-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.36 6l.4 2H18v6h-3.36l-.4-2H7V6zM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6M23 18h-8v2h8z"></svg:path>`,
})
export class MdiFlagMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagOffIcon],svg[mdi-flag-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L14.11 16H13l-.28-1.39l-.61-.61H7v7H5V6.89L1.11 3l1.28-1.27l19.72 19.73zM20 16V6h-5.6L14 4H7.2l12 12z"></svg:path>`,
})
export class MdiFlagOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagOffOutlineIcon],svg[mdi-flag-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V21h2v-7h5.11l.61.61L13 16h1.11l6.73 6.73zM7 12V8.89L10.11 12zm2.2-6l-2-2H14l.4 2H20v10h-.8l-2-2h.8V8h-5.24l-.4-2z"></svg:path>`,
})
export class MdiFlagOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagOutlineIcon],svg[mdi-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.36 6l.4 2H18v6h-3.36l-.4-2H7V6zM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6"></svg:path>`,
})
export class MdiFlagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagOutlineVariantIcon],svg[mdi-flag-outline-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 3a1 1 0 0 1 1 1v.875C8.063 4.437 9.5 4 11 4c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4a1 1 0 0 1 1-1zm1 4.25v4.25S9 10 11 10s3 2 5 2s2-1 2-1V7.5S17 8 16 8c-2 0-3-2-5-2S7 7.25 7 7.25z" fill="currentColor"></svg:path>`,
})
export class MdiFlagOutlineVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagPlusIcon],svg[mdi-flag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zm-4.6-9H18v7c-2.22 0-4.16 1.21-5.2 3H11l-.4-2H5v7H3V3h9z"></svg:path>`,
})
export class MdiFlagPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagPlusOutlineIcon],svg[mdi-flag-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16l-.4-2H7v7H5V4h9l.4 2H20v7.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V8h-5.24l-.4-2H7v6h7.24l.4 2h1.05c-.77.5-1.42 1.2-1.88 2zm5-1v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiFlagPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagRemoveIcon],svg[mdi-flag-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.13l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18zM12.4 5H18v7c-2.22 0-4.16 1.21-5.2 3H11l-.4-2H5v7H3V3h9z"></svg:path>`,
})
export class MdiFlagRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagRemoveOutlineIcon],svg[mdi-flag-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16l-.4-2H7v7H5V4h9l.4 2H20v7.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V8h-5.24l-.4-2H7v6h7.24l.4 2h1.05c-.77.5-1.42 1.2-1.88 2zm8.12-.54L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiFlagRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagTriangleIcon],svg[mdi-flag-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h2v20H7zm12 7l-8 5.6V3.4z"></svg:path>`,
})
export class MdiFlagTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantIcon],svg[mdi-flag-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a1 1 0 0 1 1 1v.88C8.06 4.44 9.5 4 11 4c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiFlagVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantMinusIcon],svg[mdi-flag-variant-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3c.6 0 1 .4 1 1v.9c1.1-.5 2.5-.9 4-.9c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4c0-.6.4-1 1-1m9 15v2h8v-2z"></svg:path>`,
})
export class MdiFlagVariantMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantMinusOutlineIcon],svg[mdi-flag-variant-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3c.6 0 1 .4 1 1v.9c1.1-.5 2.5-.9 4-.9c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4c0-.6.4-1 1-1m1 4.2v4.2s2-1.5 4-1.5s3 2 5 2s2-1 2-1V7.5S17 8 16 8c-2 0-3-2-5-2S7 7.2 7 7.2M15 18v2h8v-2z"></svg:path>`,
})
export class MdiFlagVariantMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantOffIcon],svg[mdi-flag-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L10.2 12.1C7.8 12.4 7 14 7 14v7H5V6.9L1.1 3l1.3-1.3l19.7 19.7zM20 12V4s-1 2-4 2c-2 0-2-2-5-2c-1.2 0-2.3.3-3.2.6l9.3 9.3C19.2 13.5 20 12 20 12"></svg:path>`,
})
export class MdiFlagVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantOffOutlineIcon],svg[mdi-flag-variant-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3L5 6.9V21h2v-7s.8-1.6 3.2-1.9l10.7 10.7zM7 11.5V8.9l1.7 1.7c-1 .4-1.7.9-1.7.9m2.4-5.3L7.8 4.6c.9-.3 2-.6 3.2-.6c3 0 3 2 5 2c3 0 4-2 4-2v8s-.8 1.5-2.9 1.9L15 11.8c.3.1.6.2 1 .2c2 0 2-1 2-1V7.5S17 8 16 8c-2 0-3-2-5-2c-.5 0-1.1.1-1.6.2"></svg:path>`,
})
export class MdiFlagVariantOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantOutlineIcon],svg[mdi-flag-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a1 1 0 0 1 1 1v.88C8.06 4.44 9.5 4 11 4c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4a1 1 0 0 1 1-1m1 4.25v4.25S9 10 11 10s3 2 5 2s2-1 2-1V7.5S17 8 16 8c-2 0-3-2-5-2S7 7.25 7 7.25"></svg:path>`,
})
export class MdiFlagVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantPlusIcon],svg[mdi-flag-variant-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3c.6 0 1 .4 1 1v.9c1.1-.5 2.5-.9 4-.9c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4c0-.6.4-1 1-1m12 12v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiFlagVariantPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantPlusOutlineIcon],svg[mdi-flag-variant-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3c.6 0 1 .4 1 1v.9c1.1-.5 2.5-.9 4-.9c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4c0-.6.4-1 1-1m1 4.2v4.2s2-1.5 4-1.5s3 2 5 2s2-1 2-1V7.5S17 8 16 8c-2 0-3-2-5-2S7 7.2 7 7.2M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiFlagVariantPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantRemoveIcon],svg[mdi-flag-variant-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3c.6 0 1 .4 1 1v.9c1.1-.5 2.5-.9 4-.9c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4c0-.6.4-1 1-1m15.1 12.5L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiFlagVariantRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantRemoveOutlineIcon],svg[mdi-flag-variant-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3c.6 0 1 .4 1 1v.9c1.1-.5 2.5-.9 4-.9c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4c0-.6.4-1 1-1m1 4.2v4.2s2-1.5 4-1.5s3 2 5 2s2-1 2-1V7.5S17 8 16 8c-2 0-3-2-5-2S7 7.2 7 7.2m14.1 8.3L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiFlagVariantRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlareIcon],svg[mdi-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11H1v2h6zm2.17-3.24L7.05 5.64L5.64 7.05l2.12 2.12zM13 1h-2v6h2zm5.36 6.05l-1.41-1.41l-2.12 2.12l1.41 1.41zM17 11v2h6v-2zm-5-2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m2.83 7.24l2.12 2.12l1.41-1.41l-2.12-2.12zm-9.19.71l1.41 1.41l2.12-2.12l-1.41-1.41zM11 23h2v-6h-2z"></svg:path>`,
})
export class MdiFlareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashIcon],svg[mdi-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v11h3v9l7-12h-4l4-8z"></svg:path>`,
})
export class MdiFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashAlertIcon],svg[mdi-flash-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v11h3v9l7-12h-4l4-8m2 13h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiFlashAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashAlertOutlineIcon],svg[mdi-flash-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h10l-3.5 7H15L8 22v-8H5zm2 2v8h3v2.66L12 11H8.24l3.52-7M17 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiFlashAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashAutoIcon],svg[mdi-flash-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.85 7.65L18 4l1.15 3.65M19 2h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9M3 2v12h3v9l7-12H9l4-9z"></svg:path>`,
})
export class MdiFlashAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashOffIcon],svg[mdi-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10h-4l4-8H7v2.18l8.46 8.46M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20L19 18.73z"></svg:path>`,
})
export class MdiFlashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashOffOutlineIcon],svg[mdi-flash-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 6.19l-2-2V2h10l-3.5 7H17l-1.82 3.37l-3.75-3.75L13.76 4H9zm10 12.54L17.73 20l-4.32-4.32L10 22v-8H7V9.27l-5-5L3.27 3z"></svg:path>`,
})
export class MdiFlashOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashOutlineIcon],svg[mdi-flash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10l-3.5 7H17l-7 13v-8H7zm2 2v8h3v2.66L14 11h-3.76l3.52-7z"></svg:path>`,
})
export class MdiFlashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashRedEyeIcon],svg[mdi-flash-red-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-.56 0-1 .44-1 1s.44 1 1 1s1-.44 1-1s-.44-1-1-1m0-3c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 1.5A2.5 2.5 0 0 1 18.5 6A2.5 2.5 0 0 1 16 8.5A2.5 2.5 0 0 1 13.5 6A2.5 2.5 0 0 1 16 3.5M3 2v12h3v9l7-12H9l1.12-2.5C9.44 7.76 8.88 6.93 8.5 6c.69-1.71 2-3.12 3.61-4z"></svg:path>`,
})
export class MdiFlashRedEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashTriangleIcon],svg[mdi-flash-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1 21h22zm-2 13v-5h4l-1.5 3.5h2l-3 5.5v-4z"></svg:path>`,
})
export class MdiFlashTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashTriangleOutlineIcon],svg[mdi-flash-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1 21h22M12 6l7.5 13h-15m9.5-5h-1.5l1.5-3h-4v4h1v3z"></svg:path>`,
})
export class MdiFlashTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashlightIcon],svg[mdi-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10L6 5h12l-3 5zm9-6H6V2h12zM9 22V11h6v11zm3-9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiFlashlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlashlightOffIcon],svg[mdi-flashlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22L15 18.27V22H9v-9.73zM18 5l-3 5h-3.18l-5-5zm0-1H6V2h12zm-3 7v2.18L12.82 11z"></svg:path>`,
})
export class MdiFlashlightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskIcon],svg[mdi-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3zm-1-3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57l-2.29-3.96L14 17l-5.07-5.07l-3.75 6.5c-.11.16-.18.36-.18.57m8-9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiFlaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyIcon],svg[mdi-flask-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3z"></svg:path>`,
})
export class MdiFlaskEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyMinusIcon],svg[mdi-flask-empty-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17v2h-8v-2zM6 22c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37C14.92 12.84 13 15.2 13 18c0 1.54.58 2.94 1.53 4z"></svg:path>`,
})
export class MdiFlaskEmptyMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyMinusOutlineIcon],svg[mdi-flask-empty-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17v2h-8v-2zM5 19c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2H6c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-.64.17-1.26.45-1.81.82L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57"></svg:path>`,
})
export class MdiFlaskEmptyMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyOffIcon],svg[mdi-flask-empty-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-1.2-1.2c-.5.3-1 .5-1.6.5H6c-1.7 0-3-1.3-3-3c0-.6.2-1.2.5-1.6l4.4-7.6L1.1 3l1.3-1.3l19.7 19.7zM15 7.8V6c.6 0 1-.4 1-1V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v.8l12.4 12.4z"></svg:path>`,
})
export class MdiFlaskEmptyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyOffOutlineIcon],svg[mdi-flask-empty-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l6.8 6.8l-4.4 7.6c-.3.4-.5 1-.5 1.6c0 1.7 1.3 3 3 3h12c.6 0 1.2-.2 1.6-.5l1.2 1.2zM18 20H6c-.6 0-1-.4-1-1c0-.2.1-.4.2-.6l4.2-7.2zc.1 0 0 0 0 0M11 7.8l-3-3V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1c0 .6-.4 1-1 1v1.8l5.4 9.4l-5.4-5.4l-2-3.4V4h-2z"></svg:path>`,
})
export class MdiFlaskEmptyOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyOutlineIcon],svg[mdi-flask-empty-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3z"></svg:path>`,
})
export class MdiFlaskEmptyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyPlusIcon],svg[mdi-flask-empty-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM6 22c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37C14.92 12.84 13 15.2 13 18c0 1.54.58 2.94 1.53 4z"></svg:path>`,
})
export class MdiFlaskEmptyPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyPlusOutlineIcon],svg[mdi-flask-empty-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM5 19c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2H6c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-.64.17-1.26.45-1.81.82L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57"></svg:path>`,
})
export class MdiFlaskEmptyPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyRemoveIcon],svg[mdi-flask-empty-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.46 15.88l1.42-1.42L19 16.59l2.12-2.12l1.41 1.41L20.41 18l2.13 2.12l-1.42 1.42L19 19.41l-2.12 2.12l-1.41-1.41L17.59 18zM6 22c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37C14.92 12.84 13 15.2 13 18c0 1.54.58 2.94 1.53 4z"></svg:path>`,
})
export class MdiFlaskEmptyRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyRemoveOutlineIcon],svg[mdi-flask-empty-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.46 15.88l1.42-1.42L19 16.59l2.12-2.12l1.41 1.41L20.41 18l2.13 2.12l-1.42 1.42L19 19.41l-2.12 2.12l-1.41-1.41L17.59 18zM5 19c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2H6c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-.64.17-1.26.45-1.81.82L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57"></svg:path>`,
})
export class MdiFlaskEmptyRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskMinusIcon],svg[mdi-flask-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17v2h-8v-2zM6 22c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-2 .52-3.64 2.08-4.24 4.08l-4.33-4.33l-3.75 6.5c-.11.16-.18.36-.18.57c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2zm7-12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiFlaskMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskMinusOutlineIcon],svg[mdi-flask-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17v2h-8v-2zM5 19c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2H6c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-.64.17-1.26.45-1.81.82L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m8-3l.58-.58c-.37.78-.58 1.66-.58 2.58H7.73l2.66-4.61zm-.5-4c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5"></svg:path>`,
})
export class MdiFlaskMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskOffIcon],svg[mdi-flask-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l6.8 6.8l-4.4 7.6c-.3.4-.5 1-.5 1.6c0 1.7 1.3 3 3 3h12c.6 0 1.2-.2 1.6-.5l1.2 1.2zM18 20H6c-.6 0-1-.4-1-1c0-.2.1-.4.2-.6L9 11.9l5 5.1l.6-.6zc.1 0 0 0 0 0M8 4.8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1c0 .6-.4 1-1 1v1.8l5.4 9.4z"></svg:path>`,
})
export class MdiFlaskOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskOffOutlineIcon],svg[mdi-flask-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l6.8 6.8l-4.4 7.6c-.3.4-.5 1-.5 1.6c0 1.7 1.3 3 3 3h12c.6 0 1.2-.2 1.6-.5l1.2 1.2zM18 20H6c-.6 0-1-.4-1-1c0-.2.1-.4.2-.6l4.2-7.2l4.2 4.2l-.6.6l-2.6-2.6L7.7 18h8.4zc.1 0 0 0 0 0M11 7.8l-3-3V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1c0 .6-.4 1-1 1v1.8l5.4 9.4l-5.4-5.4l-2-3.4V4h-2z"></svg:path>`,
})
export class MdiFlaskOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskOutlineIcon],svg[mdi-flask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3zm7-6l1.34-1.34L16.27 18H7.73l2.66-4.61zm-.5-4a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class MdiFlaskOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskPlusIcon],svg[mdi-flask-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM6 22c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-2 .52-3.64 2.08-4.24 4.08l-4.33-4.33l-3.75 6.5c-.11.16-.18.36-.18.57c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2zm7-12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiFlaskPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskPlusOutlineIcon],svg[mdi-flask-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM5 19c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2H6c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-.64.17-1.26.45-1.81.82L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m8-3l.58-.58c-.37.78-.58 1.66-.58 2.58H7.73l2.66-4.61zm-.5-4c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5"></svg:path>`,
})
export class MdiFlaskPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskRemoveIcon],svg[mdi-flask-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.46 15.88l1.42-1.42L19 16.59l2.12-2.12l1.41 1.41L20.41 18l2.13 2.12l-1.42 1.42L19 19.41l-2.12 2.12l-1.41-1.41L17.59 18zM6 22c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-2 .52-3.64 2.08-4.24 4.08l-4.33-4.33l-3.75 6.5c-.11.16-.18.36-.18.57c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2zm7-12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiFlaskRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskRemoveOutlineIcon],svg[mdi-flask-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.46 15.88l1.42-1.42L19 16.59l2.12-2.12l1.41 1.41L20.41 18l2.13 2.12l-1.42 1.42L19 19.41l-2.12 2.12l-1.41-1.41L17.59 18zM5 19c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2H6c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-.64.17-1.26.45-1.81.82L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m8-3l.58-.58c-.37.78-.58 1.66-.58 2.58H7.73l2.66-4.61zm-.5-4c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5"></svg:path>`,
})
export class MdiFlaskRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskRoundBottomIcon],svg[mdi-flask-round-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.2 4-6.33V5c0-.55.45-1 1-1h.5l-1-2h5l-1 2h.5c.55 0 1 .45 1 1v3.67c2.36 1.13 4 3.54 4 6.33m-8-9v4.1A5 5 0 0 0 7 15l.08.91L9 13.93L13.07 18l3.86-3.86A5.01 5.01 0 0 0 13 10.1V6zm2.07 6c.55 0 1 .45 1 1s-.45 1-1 1c-.57 0-1-.45-1-1s.43-1 1-1"></svg:path>`,
})
export class MdiFlaskRoundBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskRoundBottomEmptyIcon],svg[mdi-flask-round-bottom-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.2 4-6.33V5c0-.55.45-1 1-1h.5l-1-2h5l-1 2h.5c.55 0 1 .45 1 1v3.67c2.36 1.13 4 3.54 4 6.33"></svg:path>`,
})
export class MdiFlaskRoundBottomEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskRoundBottomEmptyOutlineIcon],svg[mdi-flask-round-bottom-empty-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.2 4-6.33V5c0-.55.45-1 1-1h.5l-1-2h5l-1 2h.5c.55 0 1 .45 1 1v3.67c2.36 1.13 4 3.54 4 6.33m-8-9v4.1a5 5 0 1 0 2 0V6z"></svg:path>`,
})
export class MdiFlaskRoundBottomEmptyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskRoundBottomOutlineIcon],svg[mdi-flask-round-bottom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1h2zm4 0c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.2 4-6.33V5c0-.55.45-1 1-1h.5l-1-2h5l-1 2h.5c.55 0 1 .45 1 1v3.67c2.36 1.13 4 3.54 4 6.33m-8-9v4.1a5 5 0 1 0 2 0V6z"></svg:path>`,
})
export class MdiFlaskRoundBottomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlattrIcon],svg[mdi-flattr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 12a9 9 0 0 1-9 9H4.5l5.24-5.24l1.42 1.41L9.33 19H12a7 7 0 0 0 7-7V7l2-2v7M3 12a9 9 0 0 1 9-9h7.5l-5.24 5.24l-1.42-1.41L14.67 5H12a7 7 0 0 0-7 7v5l-2 2v-7z" fill="currentColor"></svg:path>`,
})
export class MdiFlattrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFleurDeLisIcon],svg[mdi-fleur-de-lis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2S9 4 9 7s2 5 2 9h-1s0-2-1-4c-2-4-6-2-6 1s2 3 2 3c0-3 3.5-3 3.5 0H7v2h3.5L9 20s1 1 2 0l1 2l1-2c1 1 2 0 2 0l-1.5-2H17v-2h-1.5c0-3 3.5-3 3.5 0c0 0 2 0 2-3s-4-5-6-1c-1 2-1 4-1 4h-1c0-4 2-6 2-9s-3-5-3-5"></svg:path>`,
})
export class MdiFleurDeLisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlickrIcon],svg[mdi-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 12c0 2.5-2 4.5-4.5 4.5S2 14.5 2 12s2-4.5 4.5-4.5S11 9.5 11 12m6.5-4.5C15 7.5 13 9.5 13 12s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5z" fill="currentColor"></svg:path>`,
})
export class MdiFlickrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlickrAfterIcon],svg[mdi-flickr-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17" cy="12" r="4" fill="currentColor"></svg:circle>`,
})
export class MdiFlickrAfterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlickrBeforeIcon],svg[mdi-flickr-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="12" r="4" fill="currentColor"></svg:circle>`,
})
export class MdiFlickrBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlipHorizontalIcon],svg[mdi-flip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2m4-10h2V7h-2M3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2m16-2v2h2c0-1.1-.9-2-2-2m-8 20h2V1h-2m8 16h2v-2h-2M15 5h2V3h-2m4 10h2v-2h-2m0 10c1.1 0 2-.9 2-2h-2Z"></svg:path>`,
})
export class MdiFlipHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlipToBackIcon],svg[mdi-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h2v-2h-2m0-10h2V3h-2M5 7H3v12a2 2 0 0 0 2 2h12v-2H5m14-2a2 2 0 0 0 2-2h-2m0-6h2V7h-2m0 6h2v-2h-2M9 17v-2H7a2 2 0 0 0 2 2m4-14h-2v2h2m6-2v2h2a2 2 0 0 0-2-2m-6 12h-2v2h2M9 3c-1.11 0-2 .89-2 2h2m0 6H7v2h2m0-6H7v2h2z"></svg:path>`,
})
export class MdiFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlipToFrontIcon],svg[mdi-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21h2v-2H7m4 2h2v-2h-2m8-4H9V5h10m0-2H9c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 18h2v-2h-2M3 9h2V7H3m2 14v-2H3a2 2 0 0 0 2 2m-2-4h2v-2H3m0-2h2v-2H3z"></svg:path>`,
})
export class MdiFlipToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlipVerticalIcon],svg[mdi-flip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15v2h2v-2m10 4v2h2v-2m2-16H5c-1.1 0-2 .9-2 2v4h2V5h14v4h2V5c0-1.1-.9-2-2-2m2 16h-2v2c1.1 0 2-.9 2-2M1 11v2h22v-2M7 19v2h2v-2m10-4v2h2v-2m-10 4v2h2v-2M3 19c0 1.1.9 2 2 2v-2Z"></svg:path>`,
})
export class MdiFlipVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloor1Icon],svg[mdi-floor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zm-2 5h4v10h-2v-8h-2V8z" fill="currentColor"></svg:path>`,
})
export class MdiFloor1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloor2Icon],svg[mdi-floor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zM9 8h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2v-2H9V8z" fill="currentColor"></svg:path>`,
})
export class MdiFloor2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloor3Icon],svg[mdi-floor-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3l10 9h-3v8H5v-8H2l10-9zm3 8.5V10a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2v-1.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5z" fill="currentColor"></svg:path>`,
})
export class MdiFloor3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorAIcon],svg[mdi-floor-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zm-1 5h2a2 2 0 0 1 2 2v8h-2v-3h-2v3H9v-8a2 2 0 0 1 2-2zm0 2v3h2v-3h-2z" fill="currentColor"></svg:path>`,
})
export class MdiFloorAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorBIcon],svg[mdi-floor-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zM9 8h4a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5V16a2 2 0 0 1-2 2H9V8zm2 2v2h2v-2h-2zm0 4v2h2v-2h-2z" fill="currentColor"></svg:path>`,
})
export class MdiFloorBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorGIcon],svg[mdi-floor-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zm-1 5h4v2h-4v6h2v-4h2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" fill="currentColor"></svg:path>`,
})
export class MdiFloorGIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLIcon],svg[mdi-floor-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zM9 8h2v8h4v2H9V8z" fill="currentColor"></svg:path>`,
})
export class MdiFloorLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampIcon],svg[mdi-floor-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 2l2 7H7l2-7m2 8h2v10h3v2H8v-2h3z"></svg:path>`,
})
export class MdiFloorLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampDualIcon],svg[mdi-floor-lamp-dual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.73 10.06l-1.56 1.18l.83.96V20H8v2h8v-2h-3v-7.7l.85-1.04l-1.58-1.19zm-2.65.76L3 6.81L9.39 2l2.16 6.93zM14.61 2L21 6.81l-6.08 4.01l-2.48-1.87z"></svg:path>`,
})
export class MdiFloorLampDualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampDualOutlineIcon],svg[mdi-floor-lamp-dual-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.73 10.06l-1.56 1.18l.83.96V20H8v2h8v-2h-3v-7.7l.85-1.04l-1.58-1.19zM8.32 5.31l.91 2.88l-.23.18L6.47 6.7zM9.39 2L3 6.81l6.08 4.01l2.47-1.89zm6.28 3.3l1.86 1.4L15 8.37l-.23-.17zM14.61 2l-2.17 6.95l2.48 1.87L21 6.81z"></svg:path>`,
})
export class MdiFloorLampDualOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampOutlineIcon],svg[mdi-floor-lamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 2l2 7H7l2-7m4.6 2h-3.2l-.85 3h4.9M11 10h2v10h3v2H8v-2h3Z"></svg:path>`,
})
export class MdiFloorLampOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampTorchiereIcon],svg[mdi-floor-lamp-torchiere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l3 7h4l3-7zm6 18h3v2H8v-2h3V10h2z"></svg:path>`,
})
export class MdiFloorLampTorchiereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampTorchiereOutlineIcon],svg[mdi-floor-lamp-torchiere-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 4l-1.3 3h-1.4L10 4zm3-2H7l3 7h4zm-4 18h3v2H8v-2h3V10h2z"></svg:path>`,
})
export class MdiFloorLampTorchiereOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampTorchiereVariantIcon],svg[mdi-floor-lamp-torchiere-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l3 7h4l3-7zm8.92 20L13 15v7h-2v-7l-2.92 7H5.92l5-12h2.16l5 12z"></svg:path>`,
})
export class MdiFloorLampTorchiereVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampTorchiereVariantOutlineIcon],svg[mdi-floor-lamp-torchiere-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.97 4l-1.29 3h-1.36l-1.29-3zM17 2H7l3 7h4zm-1.08 20L13 15v7h-2v-7l-2.92 7H5.92l5-12h2.16l5 12z"></svg:path>`,
})
export class MdiFloorLampTorchiereVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloorPlanIcon],svg[mdi-floor-plan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v5H9V5H5v8h4v-1h1v5H9v-3H5v5h7v-2h1v2h6v-2h2v4H3V3h18v12h-2v-5h-6v5h-1V9h7V5z"></svg:path>`,
})
export class MdiFloorPlanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloppyIcon],svg[mdi-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5.5L18.5 3H17v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3zm7 1v5h3V4zm-5 8h10a1 1 0 0 1 1 1v6H6v-6a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiFloppyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFloppyVariantIcon],svg[mdi-floppy-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9 7a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiFloppyVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlowerIcon],svg[mdi-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 0 0 9 9c0-5-4.03-9-9-9m9-7.5A2.5 2.5 0 0 1 14.5 8a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 8A2.5 2.5 0 0 1 12 5.5m-6.4 4.75a2.5 2.5 0 0 0 2.5 2.5c.53 0 1.02-.17 1.4-.44v.19A2.5 2.5 0 0 0 12 15a2.5 2.5 0 0 0 2.5-2.5v-.19c.38.27.87.44 1.4.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.26 1.43-2.25a2.5 2.5 0 0 0-2.5-2.5c-.53 0-1.02.16-1.4.44V3.5A2.5 2.5 0 0 0 12 1a2.5 2.5 0 0 0-2.5 2.5v.19c-.38-.28-.87-.44-1.4-.44a2.5 2.5 0 0 0-2.5 2.5c0 .99.59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25M12 22a9 9 0 0 0 9-9c-5 0-9 4-9 9"></svg:path>`,
})
export class MdiFlowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlowerOutlineIcon],svg[mdi-flower-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.66 13.07c-1.74 0-3.16-1.41-3.16-3.14c0-.71.26-1.39.69-1.93c-.42-.54-.69-1.22-.69-1.93c0-1.73 1.43-3.14 3.16-3.14l.43.03A3.15 3.15 0 0 1 12 1c1.31 0 2.44.81 2.91 1.96l.43-.03c1.73 0 3.16 1.41 3.16 3.14c0 .71-.26 1.39-.69 1.93c.42.54.69 1.22.69 1.93c0 1.73-1.43 3.14-3.16 3.14l-.43-.03A3.15 3.15 0 0 1 12 15a3.15 3.15 0 0 1-2.91-1.96zM12 13c.62 0 1.12-.5 1.14-1.1l-.11-1.09c-.32.12-.67.19-1.03.19s-.7-.07-1-.19l-.14 1.09c.02.6.52 1.1 1.14 1.1m3.34-1.93c.63 0 1.16-.51 1.16-1.15c0-.42-.27-.84-.67-1.03l-.88-.42c-.12.74-.51 1.38-1.06 1.83l.81.57c.18.13.4.2.64.2m-.65-5.94l-.82.56c.56.45.95 1.09 1.07 1.81l.88-.4c.41-.2.68-.6.68-1.03c0-.63-.53-1.14-1.16-1.14c-.23 0-.45.07-.65.2M12 3c-.62 0-1.12.5-1.14 1.1L11 5.19c.3-.12.64-.19 1-.19s.71.07 1.03.19l.11-1.09C13.12 3.5 12.62 3 12 3M8.66 4.93c-.63 0-1.16.51-1.16 1.14c0 .43.27.83.67 1.03l.88.4c.12-.72.51-1.36 1.06-1.81l-.81-.56c-.18-.13-.4-.2-.64-.2M8.17 8.9c-.4.2-.67.6-.67 1.02c0 .63.53 1.14 1.16 1.14c.23 0 .45-.06.65-.2l.81-.55c-.56-.45-.95-1.09-1.07-1.81zM12 22a9 9 0 0 1-9-9a9 9 0 0 1 9 9a9 9 0 0 1 9-9a9 9 0 0 1-9 9m2.44-2.44a7.04 7.04 0 0 0 4.12-4.12c-1.9.7-3.41 2.22-4.12 4.12m-9-4.12a7.04 7.04 0 0 0 4.12 4.12c-.7-1.9-2.22-3.41-4.12-4.12"></svg:path>`,
})
export class MdiFlowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlowerPollenIcon],svg[mdi-flower-pollen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.4 12.75a2.5 2.5 0 0 0-2.5-2.5c-.53 0-1.02.16-1.4.44v-.19a2.5 2.5 0 0 0-5 0v.19c-.38-.28-.87-.44-1.4-.44a2.5 2.5 0 0 0-2.5 2.5c0 .99.59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25a2.5 2.5 0 0 0 2.5 2.5c.53 0 1.02-.17 1.4-.44v.19a2.5 2.5 0 0 0 5 0v-.19c.38.27.87.44 1.4.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.26 1.43-2.25M12 17.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M11 6c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1M7 8c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1M5 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3-3c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m6 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m6 2c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m-4 2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class MdiFlowerPollenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlowerPollenOutlineIcon],svg[mdi-flower-pollen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1M8 9c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1M6 5c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m3-1c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m6 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-4 4c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m3.5 5.07c0 .71-.26 1.39-.69 1.93c.42.54.69 1.22.69 1.93c0 1.73-1.43 3.14-3.16 3.14l-.43-.03C14.44 21.19 13.31 22 12 22s-2.44-.81-2.91-1.96l-.43.03c-1.74 0-3.16-1.41-3.16-3.14c0-.71.26-1.39.69-1.93c-.42-.54-.69-1.22-.69-1.93c0-1.73 1.43-3.14 3.16-3.14l.43.03C9.56 8.81 10.69 8 12 8s2.44.81 2.91 1.96l.43-.03c1.73 0 3.16 1.41 3.16 3.14m-11 0c0 .43.27.83.67 1.03l.88.4c.12-.72.51-1.36 1.06-1.81l-.81-.56c-.18-.13-.4-.2-.64-.2c-.63 0-1.16.51-1.16 1.14m2.62 4.24c-.56-.45-.95-1.09-1.07-1.81l-.88.4c-.4.2-.67.6-.67 1.02c0 .63.53 1.14 1.16 1.14c.23 0 .45-.06.65-.2zm3.02 1.59l-.11-1.09c-.32.12-.67.19-1.03.19s-.7-.07-1-.19l-.14 1.09c.02.6.52 1.1 1.14 1.1s1.12-.5 1.14-1.1m0-7.8c-.02-.6-.52-1.1-1.14-1.1s-1.12.5-1.14 1.1l.14 1.09c.3-.12.64-.19 1-.19s.71.07 1.03.19zm3.36 5.82c0-.42-.27-.84-.67-1.03l-.88-.42c-.12.74-.51 1.38-1.06 1.83l.81.57c.18.13.4.2.64.2c.63 0 1.16-.51 1.16-1.15m0-3.85c0-.63-.53-1.14-1.16-1.14c-.23 0-.45.07-.65.2l-.82.56c.56.45.95 1.09 1.07 1.81l.88-.4c.41-.2.68-.6.68-1.03"></svg:path>`,
})
export class MdiFlowerPollenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlowerPoppyIcon],svg[mdi-flower-poppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12A3.5 3.5 0 0 0 22 8.5A6.5 6.5 0 0 0 15.5 2A3.5 3.5 0 0 0 12 5.5A3.5 3.5 0 0 0 8.5 2A6.5 6.5 0 0 0 2 8.5A3.5 3.5 0 0 0 5.5 12A3.5 3.5 0 0 0 2 15.5A6.5 6.5 0 0 0 8.5 22a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0 3.5 3.5a6.5 6.5 0 0 0 6.5-6.5a3.5 3.5 0 0 0-3.5-3.5M12 16a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4m2.5-4a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5a2.5 2.5 0 0 1 2.5 2.5"></svg:path>`,
})
export class MdiFlowerPoppyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlowerTulipIcon],svg[mdi-flower-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 0 0 9 9a9 9 0 0 0-9-9m9 9a9 9 0 0 0 9-9a9 9 0 0 0-9 9m6-19v5a6 6 0 0 1-6 6a6 6 0 0 1-6-6V3c.74 0 1.47.12 2.16.39c.55.23 1.04.57 1.45 1L12 2l2.39 2.39c.41-.43.9-.77 1.45-1A5.9 5.9 0 0 1 18 3"></svg:path>`,
})
export class MdiFlowerTulipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFlowerTulipOutlineIcon],svg[mdi-flower-tulip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 0 0 9 9a9 9 0 0 0-9-9m2.44 2.44c1.91.71 3.41 2.21 4.12 4.12a7 7 0 0 1-4.12-4.12M12 22a9 9 0 0 0 9-9a9 9 0 0 0-9 9m2.42-2.43a6.88 6.88 0 0 1 4.15-4.15a7.03 7.03 0 0 1-4.15 4.15M12 14a6 6 0 0 0 6-6V3a5.9 5.9 0 0 0-2.16.39c-.55.23-1.04.57-1.45 1L12 2L9.61 4.39c-.41-.43-.9-.77-1.45-1A5.9 5.9 0 0 0 6 3v5a6 6 0 0 0 6 6M8 5.61l1.57 1.65L12 4.83l2.43 2.43L16 5.61V8a4 4 0 0 1-4 4a4 4 0 0 1-4-4z"></svg:path>`,
})
export class MdiFlowerTulipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFocusAutoIcon],svg[mdi-focus-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2m0-12h-4v2h4v4h2V5c0-1.1-.9-2-2-2M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2m0 6H3v4c0 1.1.9 2 2 2h4v-2H5zm3-8c-1.1 0-2 .9-2 2v8h2v-4h2v4h2V9c0-1.1-.9-2-2-2zm0 2h2v2H8zm5-2v10h2v-4h2v-2h-2V9h3V7z"></svg:path>`,
})
export class MdiFocusAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFocusFieldIcon],svg[mdi-focus-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2m0-12h-4v2h4v4h2V5c0-1.1-.9-2-2-2M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2m0 6H3v4c0 1.1.9 2 2 2h4v-2H5zm2-4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 7h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 8h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiFocusFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFocusFieldHorizontalIcon],svg[mdi-focus-field-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2m0-12h-4v2h4v4h2V5c0-1.1-.9-2-2-2M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2m0 6H3v4c0 1.1.9 2 2 2h4v-2H5zm2-4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiFocusFieldHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFocusFieldVerticalIcon],svg[mdi-focus-field-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2m0-12h-4v2h4v4h2V5c0-1.1-.9-2-2-2M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2m0 6H3v4c0 1.1.9 2 2 2h4v-2H5zm6-4h2v2h-2zm0-4h2v2h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class MdiFocusFieldVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderIcon],svg[mdi-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"></svg:path>`,
})
export class MdiFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderAccountIcon],svg[mdi-folder-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2m-4-7a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m5-3h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFolderAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderAccountOutlineIcon],svg[mdi-folder-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14c1.33 0 4 .67 4 2v1h-8v-1c0-1.33 2.67-2 4-2m0-1c1.11 0 2-.89 2-2s-.89-2-2-2a2 2 0 1 0 0 4m7-5v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 0H4v10h16z"></svg:path>`,
})
export class MdiFolderAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderAlertIcon],svg[mdi-folder-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h2v5h-2zm0 6h2v2h-2zm8-2a7 7 0 0 1-7 7c-2.38 0-4.5-1.19-5.75-3H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v3.1c1.24 1.26 2 2.99 2 4.9m-7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiFolderAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderAlertOutlineIcon],svg[mdi-folder-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h2v5h-2zm0 6h2v2h-2zm1-9c1.07 0 2.09.24 3 .67V8H3v10h6.29A7 7 0 0 1 9 16a7 7 0 0 1 7-7m7 7a7 7 0 0 1-7 7c-2.38 0-4.5-1.19-5.75-3H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v3.1c1.24 1.26 2 2.99 2 4.9m-7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiFolderAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowDownIcon],svg[mdi-folder-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 8h-2v4h-2l3 3l3-3h-2z"></svg:path>`,
})
export class MdiFolderArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowDownOutlineIcon],svg[mdi-folder-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1s.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 8h-2v4h-2l3 3l3-3h-2z"></svg:path>`,
})
export class MdiFolderArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowLeftIcon],svg[mdi-folder-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-4 8l-3 3l3 3v-2h4v-2h-4z"></svg:path>`,
})
export class MdiFolderArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowLeftOutlineIcon],svg[mdi-folder-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1s.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-4 8l-3 3l3 3v-2h4v-2h-4z"></svg:path>`,
})
export class MdiFolderArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowLeftRightIcon],svg[mdi-folder-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m10-2l-3-2.5V16h-4v2h4v1.5zm-5 1.5L15 21l3 2.5V22h4v-2h-4z"></svg:path>`,
})
export class MdiFolderArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowLeftRightOutlineIcon],svg[mdi-folder-arrow-left-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1m10-2l-3-2.5V16h-4v2h4v1.5zm-5 1.5L15 21l3 2.5V22h4v-2h-4z"></svg:path>`,
})
export class MdiFolderArrowLeftRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowRightIcon],svg[mdi-folder-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m10 0l-3-3v2h-4v2h4v2z"></svg:path>`,
})
export class MdiFolderArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowRightOutlineIcon],svg[mdi-folder-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1m10 0l-3-3v2h-4v2h4v2z"></svg:path>`,
})
export class MdiFolderArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowUpIcon],svg[mdi-folder-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-6 10h2v4h2v-4h2l-3-3z"></svg:path>`,
})
export class MdiFolderArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowUpDownIcon],svg[mdi-folder-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m4-4l-2.5 3H16v4h2v-4h1.5zm5 5v-4h-2v4h-1.5l2.5 3l2.5-3z"></svg:path>`,
})
export class MdiFolderArrowUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowUpDownOutlineIcon],svg[mdi-folder-arrow-up-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1m9 1v-4h-2v4h-1.5l2.5 3l2.5-3zm-5-5l-2.5 3H16v4h2v-4h1.5z"></svg:path>`,
})
export class MdiFolderArrowUpDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderArrowUpOutlineIcon],svg[mdi-folder-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1s.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-6 10h2v4h2v-4h2l-3-3z"></svg:path>`,
})
export class MdiFolderArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderCancelIcon],svg[mdi-folder-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.5c0 .5.07 1 .18 1.5H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.04c-1-.65-2.21-1.04-3.5-1.04a6.5 6.5 0 0 0-6.5 6.5m11 0c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiFolderCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderCancelOutlineIcon],svg[mdi-folder-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.5c0 .5.07 1 .18 1.5H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.04c-.61-.39-1.28-.68-2-.86V8H4v10h8.03c-.03.17-.03.33-.03.5m11 0c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiFolderCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderCheckIcon],svg[mdi-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m8.34-3.16l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiFolderCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderCheckOutlineIcon],svg[mdi-folder-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1m8.34-3.16l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiFolderCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderClockIcon],svg[mdi-folder-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7.26c1.31 1.88 3.45 3 5.74 3a7 7 0 0 0 7-7c0-1.83-.72-3.58-2-4.89V8a2 2 0 0 0-2-2h-8L9 4zm13 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m-1 1v5l3.61 2.16l.75-1.22l-2.86-1.69V12z"></svg:path>`,
})
export class MdiFolderClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderClockOutlineIcon],svg[mdi-folder-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h1.5v4.25l2.86 1.69l-.75 1.22L15 17zm4-4H3v10h6.29C9.1 17.37 9 16.7 9 16a7 7 0 0 1 7-7c1.07 0 2.09.24 3 .67zM3 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2v3.1c1.24 1.26 2 2.99 2 4.9a7 7 0 0 1-7 7c-2.38 0-4.5-1.19-5.75-3zm13-9a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiFolderClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderCogIcon],svg[mdi-folder-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h8.08a7 7 0 0 1-.08-1a7 7 0 0 1 7-7a7 7 0 0 1 3 .69V8a2 2 0 0 0-2-2h-8l-2-2zm14 10a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 20 14zm1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiFolderCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderCogOutlineIcon],svg[mdi-folder-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h8v-2H4V8h16v4h2V8a2 2 0 0 0-2-2h-8l-2-2m8 10a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 20 14m-1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiFolderCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderDownloadIcon],svg[mdi-folder-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2zm-.75 7H16V9h-2v4h-3.25L15 17.25"></svg:path>`,
})
export class MdiFolderDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderDownloadOutlineIcon],svg[mdi-folder-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-6 3h2v4h3l-4 4l-4-4h3Z"></svg:path>`,
})
export class MdiFolderDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderEditIcon],svg[mdi-folder-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.39 10.74L11 19.13V20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v2.15c-.26-.09-.54-.15-.83-.15c-.67 0-1.3.26-1.78.74M13 19.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiFolderEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderEditOutlineIcon],svg[mdi-folder-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h8.13L11 19.13V20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v2.15c-.26-.09-.54-.15-.83-.15c-.42 0-.81.11-1.17.3V8H4zm18.85-4.53l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72M13 19.96V22h2.04l6.13-6.12l-2.04-2.05z"></svg:path>`,
})
export class MdiFolderEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderEyeIcon],svg[mdi-folder-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.3 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6l2 2h8c1.1 0 2 .9 2 2v6.6c-1.4-1-3.1-1.6-5-1.6c-3.5 0-6.6 2.1-7.9 5.3l-.3.7l.3.7c.1.1.1.2.2.3M23 19c-.9 2.3-3.3 4-6 4s-5.1-1.7-6-4c.9-2.3 3.3-4 6-4s5.1 1.7 6 4m-3.5 0c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5M17 18c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class MdiFolderEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderEyeOutlineIcon],svg[mdi-folder-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.3 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6l2 2h8c1.1 0 2 .9 2 2v6.6c-.6-.4-1.3-.8-2-1.1V8H4v10h5.3c0 .1-.1.2-.1.3l-.4.7l.3.7c.1.1.1.2.2.3M23 19c-.9 2.3-3.3 4-6 4s-5.1-1.7-6-4c.9-2.3 3.3-4 6-4s5.1 1.7 6 4m-3.5 0c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5M17 18c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class MdiFolderEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderFileIcon],svg[mdi-folder-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8c-2.21 0-4 1.79-4 4v8H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v2.17l-1.59-1.58l-.58-.59zm8 6v7c0 1.11-.89 2-2 2h-6a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h4zm-2 .83L18.17 12H18v3h3z"></svg:path>`,
})
export class MdiFolderFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderFileOutlineIcon],svg[mdi-folder-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h7v2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v2.17l-1.59-1.58l-.41-.42V8H4zm19-4v7c0 1.11-.89 2-2 2h-6a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h4zm-2 1h-3v-3h-3v9h6z"></svg:path>`,
})
export class MdiFolderFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderGoogleDriveIcon],svg[mdi-folder-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 9h2.39L19 14h-2.95L13.5 9.46M18.3 17h-5.55l1.4-2.5h5.12l.26.46M11.5 17l-1.1-2.14l2.84-4.96l1.5 2.66L12.25 17M20 6h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFolderGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderHeartIcon],svg[mdi-folder-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-1.58 7.5L15 17l-3.41-3.5c-.37-.38-.59-.88-.59-1.45c0-1.13.9-2.05 2-2.05c.54 0 1.05.23 1.42.61l.58.59l.59-.6c.36-.37.87-.6 1.41-.6c1.1 0 2 .92 2 2.05c0 .56-.22 1.08-.58 1.45"></svg:path>`,
})
export class MdiFolderHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderHeartOutlineIcon],svg[mdi-folder-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2m-7 4c-1.1 0-2 .92-2 2.05c0 .57.22 1.07.59 1.45L15 17l3.42-3.5c.36-.37.58-.89.58-1.45c0-1.13-.9-2.05-2-2.05c-.54 0-1.05.23-1.41.6l-.59.6l-.58-.59A2 2 0 0 0 13 10"></svg:path>`,
})
export class MdiFolderHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderHiddenIcon],svg[mdi-folder-hidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v4H6V4zM4 16v-3H2v3zm-2-4h2V9H2zm16-4h4a2 2 0 0 0-2-2h-2zm4 5h-2v3h2zm-2-4v3h2V9zM9 20v-2H6v2zm-4-2H4v-1H2v1a2 2 0 0 0 2 2h1zm15-1v1h-2v2h2c1.11 0 2-.89 2-2v-1zM4 8h1V4H4c-1.11 0-2 .89-2 2v2zm13 10h-3v2h3zm-4 0h-3v2h3zm4-12h-3v2h3zm-7 2h3V6h-1l-2-2z"></svg:path>`,
})
export class MdiFolderHiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderHomeIcon],svg[mdi-folder-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-3 7v4h-2v-3h-2v3h-2v-4H9l5-4l5 4Z"></svg:path>`,
})
export class MdiFolderHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderHomeOutlineIcon],svg[mdi-folder-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 12H4V8h16m-7 9v-3h2v3h2v-4h2l-5-4l-5 4h2v4Z"></svg:path>`,
})
export class MdiFolderHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderImageIcon],svg[mdi-folder-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 17l4.5-6l3.5 4.5l2.5-3L19 17m1-11h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFolderImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderInformationIcon],svg[mdi-folder-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.1V8c0-1.1-.9-2-2-2h-8L9 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7.3c1.3 1.9 3.5 3 5.7 3c3.9 0 7-3.1 7-7c0-1.8-.7-3.6-2-4.9M16 21c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m1-1h-2v-5h2zm0-6h-2v-2h2z"></svg:path>`,
})
export class MdiFolderInformationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderInformationOutlineIcon],svg[mdi-folder-information-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.1V8c0-1.1-.9-2-2-2h-8L9 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7.2c1.2 1.8 3.4 3 5.8 3c3.9 0 7-3.1 7-7c0-1.9-.8-3.6-2-4.9M9.3 18H3V8h16v1.7c-.9-.5-1.9-.7-3-.7c-3.9 0-7 3.1-7 7c0 .7.1 1.4.3 2m6.7 3c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m1-7h-2v-2h2zm0 6h-2v-5h2z"></svg:path>`,
})
export class MdiFolderInformationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderKeyIcon],svg[mdi-folder-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2m1 6c1.3 0 2.4.8 2.8 2H20v2h-2v2h-2v-2h-2.2c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3m0 2c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class MdiFolderKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderKeyNetworkIcon],svg[mdi-folder-key-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h5v2h-1c-.6 0-1 .4-1 1H2v2h7c0 .6.4 1 1 1h4c.6 0 1-.4 1-1h7v-2h-7c0-.6-.4-1-1-1h-1v-2h5c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-6l-2-2zm3 4c1.3 0 2.4.8 2.8 2H18v2h-2v2h-2v-2h-2.2c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3m0 2c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class MdiFolderKeyNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderKeyNetworkOutlineIcon],svg[mdi-folder-key-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H14v2h2v-2h2v-2h-6.2c-.4-1.2-1.5-2-2.8-2m0 4c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m6 8c0-.5-.4-1-1-1h-1v-2h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-6l-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6v2h-1c-.6 0-1 .5-1 1H2v2h7c0 .5.4 1 1 1h4c.6 0 1-.5 1-1h7v-2zM5 15V7h14v8z"></svg:path>`,
})
export class MdiFolderKeyNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderKeyOutlineIcon],svg[mdi-folder-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7.2 6c-.4-1.2-1.5-2-2.8-2c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H15v2h2v-2h2v-2zM10 14c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class MdiFolderKeyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderLockIcon],svg[mdi-folder-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v3.04A4.9 4.9 0 0 0 19 10c-2.6 0-4.8 2.06-4.8 4.5v.24c-.7.6-1.2 1.5-1.2 2.46zm10-2.7v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiFolderLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderLockOpenIcon],svg[mdi-folder-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 13.5v1.24c-.7.6-1.2 1.5-1.2 2.46V20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v2.04A4.9 4.9 0 0 0 19 9c-2.6 0-4.8 2.06-4.8 4.5m7.6 2.5h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiFolderLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderLockOpenOutlineIcon],svg[mdi-folder-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h9v2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v2.04c-.58-.44-1.25-.78-2-.93V8H4zm17.8-2h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiFolderLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderLockOutlineIcon],svg[mdi-folder-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v3.04c-.58-.44-1.25-.78-2-.93V8H4v10h9zm10-2.7v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiFolderLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMarkerIcon],svg[mdi-folder-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 4l2 2h8a2 2 0 0 1 2 2v3.34c-.96-.84-2.18-1.34-3.5-1.34c-3 0-5.5 2.65-5.5 5.5c0 1.47.65 3.05 1.5 4.5H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zm8.5 8c1.9 0 3.5 1.6 3.5 3.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5m0 4.8c.7 0 1.3-.6 1.2-1.2c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2"></svg:path>`,
})
export class MdiFolderMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMarkerOutlineIcon],svg[mdi-folder-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12c1.9 0 3.5 1.6 3.5 3.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5m0 4.8c.7 0 1.3-.6 1.2-1.2c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2M20 8H4v10h9.5c.29.68.63 1.35 1 2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v3.34c-.58-.5-1.26-.89-2-1.11z"></svg:path>`,
})
export class MdiFolderMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMinusIcon],svg[mdi-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m2-1v2h8v-2z"></svg:path>`,
})
export class MdiFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMinusOutlineIcon],svg[mdi-folder-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1m2-1v2h8v-2z"></svg:path>`,
})
export class MdiFolderMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMoveIcon],svg[mdi-folder-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18v-3h-4v-4h4V8l5 5m1-7h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFolderMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMoveOutlineIcon],svg[mdi-folder-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16zM12 6l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V8a2 2 0 0 0-2-2zm-1 8v-2h4V9l4 4l-4 4v-3z"></svg:path>`,
})
export class MdiFolderMoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMultipleIcon],svg[mdi-folder-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4h-8l-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M2 6H0v14a2 2 0 0 0 2 2h18v-2H2z"></svg:path>`,
})
export class MdiFolderMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMultipleImageIcon],svg[mdi-folder-multiple-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 15l4.5-6l3.5 4.5l2.5-3L21 15m1-11h-8l-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M2 6H0v14a2 2 0 0 0 2 2h18v-2H2z"></svg:path>`,
})
export class MdiFolderMultipleImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMultipleOutlineIcon],svg[mdi-folder-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6l2 2zM2 6v14h18v2H2a2 2 0 0 1-2-2V6zm4 0v10h16V6z"></svg:path>`,
})
export class MdiFolderMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMultiplePlusIcon],svg[mdi-folder-multiple-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V6H0v14c0 1.1.9 2 2 2h18v-2zM22 4h-8l-2-2H6c-.4 0-.8.1-1.1.3l-.6.6c-.2.3-.3.7-.3 1.1v12c0 .4.1.8.3 1.1c.1.1.2.2.2.3q.75.6 1.5.6h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 8h-3v3h-2v-3h-3v-2h3V7h2v3h3z"></svg:path>`,
})
export class MdiFolderMultiplePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMultiplePlusOutlineIcon],svg[mdi-folder-multiple-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h6l2 2zM2 6v14h18v2H2c-1.1 0-2-.9-2-2V6zm4 0v10h16V6zm8 4h2V8h2v2h2v2h-2v2h-2v-2h-2z"></svg:path>`,
})
export class MdiFolderMultiplePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMusicIcon],svg[mdi-folder-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v3h-5.5v5.11c-1.84.42-3.24 1.98-3.46 3.89H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-3.5 5v5.21a2.5 2.5 0 1 0-1 4.79a2.5 2.5 0 0 0 2.5-2.5V15h2v-2z"></svg:path>`,
})
export class MdiFolderMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMusicOutlineIcon],svg[mdi-folder-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v3h-2V8H4v10h9.78c-.4.59-.65 1.26-.74 2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-3.5 5v5.21a2.5 2.5 0 1 0-1 4.79a2.5 2.5 0 0 0 2.5-2.5V15h2v-2z"></svg:path>`,
})
export class MdiFolderMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderNetworkIcon],svg[mdi-folder-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15V5a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H5a2 2 0 0 1-2-2"></svg:path>`,
})
export class MdiFolderNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderNetworkOutlineIcon],svg[mdi-folder-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20c0-.55-.45-1-1-1h-1v-2h6c1.11 0 2-.89 2-2V7a2 2 0 0 0-2-2h-6l-2-2H5c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2h6v2h-1c-.55 0-1 .45-1 1H2v2h7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1h7v-2zM5 15V7h14v8z"></svg:path>`,
})
export class MdiFolderNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderOffIcon],svg[mdi-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27L18.11 20H4a2 2 0 0 1-2-2V6c0-.58.25-1.1.64-1.47L1.11 3l1.28-1.27zM22 18V8a2 2 0 0 0-2-2h-8l-2-2H7.2l14.68 14.68c.08-.21.12-.44.12-.68"></svg:path>`,
})
export class MdiFolderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderOffOutlineIcon],svg[mdi-folder-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l1.53 1.53C2.25 4.9 2 5.42 2 6v12a2 2 0 0 0 2 2h14.11l2.73 2.73l1.27-1.27zM4 18V8h2.11l10 10zm7.2-10l-4-4H10l2 2h8a2 2 0 0 1 2 2v10c0 .24-.04.47-.12.68L20 16.8V8z"></svg:path>`,
})
export class MdiFolderOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderOpenIcon],svg[mdi-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7a2 2 0 0 1 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5"></svg:path>`,
})
export class MdiFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderOpenOutlineIcon],svg[mdi-folder-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.1 10L4 18V8h17a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h15c.9 0 1.7-.6 1.9-1.5l2.3-8.5zM19 18H6l1.6-6h13z"></svg:path>`,
})
export class MdiFolderOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderOutlineIcon],svg[mdi-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiFolderOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderOutlineLockIcon],svg[mdi-folder-outline-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 17.998v-10H4v10h16zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2l.01-12c0-1.104.884-2 1.99-2h6l2 2h8zM9 16v-3h1v-1a2 2 0 1 1 4 0v1h1v3H9zm4-3v-1a1 1 0 1 0-2 0v1h2z" fill="currentColor"></svg:path>`,
})
export class MdiFolderOutlineLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderPlayIcon],svg[mdi-folder-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-5 14l5-3l-5-3z"></svg:path>`,
})
export class MdiFolderPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderPlayOutlineIcon],svg[mdi-folder-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1s.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-5 14l5-3l-5-3z"></svg:path>`,
})
export class MdiFolderPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderPlusIcon],svg[mdi-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderPlusOutlineIcon],svg[mdi-folder-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiFolderPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderPoundIcon],svg[mdi-folder-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 13h2l-.5 2h-2zM22 8v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 4h-1.5l.5-2h-1l-.5 2h-2l.5-2h-1l-.5 2H13v1h1.25l-.5 2H12v1h1.5l-.5 2h1l.5-2h2l-.5 2h1l.5-2H19v-1h-1.25l.5-2H20z"></svg:path>`,
})
export class MdiFolderPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderPoundOutlineIcon],svg[mdi-folder-pound-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1 6v-1h-1.5l.5-2h-1l-.5 2h-2l.5-2h-1l-.5 2H12v1h1.25l-.5 2H11v1h1.5l-.5 2h1l.5-2h2l-.5 2h1l.5-2H18v-1h-1.25l.5-2zm-3.25 2h-2l.5-2h2z"></svg:path>`,
})
export class MdiFolderPoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderQuestionIcon],svg[mdi-folder-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-3.2 12h-1.5v-1.5h1.5zm0-2.2h-1.5c0-2.4 2.2-2.3 2.2-3.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5H13c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.9-2.2 2.1-2.2 3.8"></svg:path>`,
})
export class MdiFolderQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderQuestionOutlineIcon],svg[mdi-folder-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-1 5.7c0 1.7-2 1.8-2 3.3h-1.3c0-2.2 2-2 2-3.3c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3h-1.3c0-1.5 1.2-2.7 2.7-2.7s2.5 1.2 2.5 2.7m-2 4V17h-1.3v-1.3z"></svg:path>`,
})
export class MdiFolderQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderRefreshIcon],svg[mdi-folder-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.5c1.11 0 2.11.45 2.83 1.17L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4M10 4l2 2h8a2 2 0 0 1 2 2v5c-1-.62-2.21-1-3.5-1a6.5 6.5 0 0 0-6.5 6.5c0 .5.06 1 .17 1.5H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2z"></svg:path>`,
})
export class MdiFolderRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderRefreshOutlineIcon],svg[mdi-folder-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.5c1.11 0 2.11.45 2.83 1.17L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4M20 8H4v10h8v.5c0 .5.06 1 .17 1.5H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5a7 7 0 0 0-2-.83z"></svg:path>`,
})
export class MdiFolderRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderRemoveIcon],svg[mdi-folder-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m9.54-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiFolderRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderRemoveOutlineIcon],svg[mdi-folder-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1m9.54-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiFolderRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderSearchIcon],svg[mdi-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L22 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M9 4l2 2h8a2 2 0 0 1 2 2v3.81A6.48 6.48 0 0 0 16.5 10a6.5 6.5 0 0 0-6.5 6.5c0 1.29.37 2.5 1 3.5H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2z"></svg:path>`,
})
export class MdiFolderSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderSearchOutlineIcon],svg[mdi-folder-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L22 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M19 8H3v10h7.17c.17.72.46 1.39.83 2H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v3.81c-.58-.55-1.25-1-2-1.31z"></svg:path>`,
})
export class MdiFolderSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderSettingsIcon],svg[mdi-folder-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2zm3 18v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class MdiFolderSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderSettingsOutlineIcon],svg[mdi-folder-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2zm0 4h16v10H4zm3 14v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class MdiFolderSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderStarIcon],svg[mdi-folder-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.06 11L15 15.28L12.06 17l.78-3.33l-2.59-2.24l3.41-.29L15 8l1.34 3.14l3.41.29l-2.59 2.24z"></svg:path>`,
})
export class MdiFolderStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderStarMultipleIcon],svg[mdi-folder-star-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6H0v14c0 1.11.895 2 2 2h18v-2H2zm20-2h-8l-2-2H6c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.11-.89-2-2-2m-2.06 11L17 13.27L14.06 15l.78-3.34l-2.59-2.24l3.41-.29L17 6l1.34 3.13l3.41.29l-2.59 2.24z"></svg:path>`,
})
export class MdiFolderStarMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderStarMultipleOutlineIcon],svg[mdi-folder-star-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v14h18v2H2c-1.105 0-2-.89-2-2V6zm10.78 4.05l3.03-.26L17 7l1.19 2.79l3.03.26l-2.3 1.99l.69 2.96L17 13.47L14.39 15l.69-2.96zM24 6v10c0 1.11-.89 2-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 0H6v10h16z"></svg:path>`,
})
export class MdiFolderStarMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderStarOutlineIcon],svg[mdi-folder-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.78 12.05l3.03-.26L15 9l1.19 2.79l3.03.26l-2.3 1.99l.69 2.96L15 15.47L12.39 17l.69-2.96zM22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 0H4v10h16z"></svg:path>`,
})
export class MdiFolderStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderSwapIcon],svg[mdi-folder-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-5 10v-2H9v2l-3-3l3-3v2h6v-2l3 3Z"></svg:path>`,
})
export class MdiFolderSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderSwapOutlineIcon],svg[mdi-folder-swap-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2 7l-3-3v2H9v-2l-3 3l3 3v-2h6v2Z"></svg:path>`,
})
export class MdiFolderSwapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderSyncIcon],svg[mdi-folder-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 4l2 2h8a2 2 0 0 1 2 2v3.5c-.77-.32-1.61-.5-2.5-.5a6.5 6.5 0 0 0-6.5 6.5c0 .89.18 1.73.5 2.5H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zm9 8v1.5a4 4 0 0 1 4 4c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25zm0 11v-1.5a4 4 0 0 1-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20v-1.5l2.25 2.25z"></svg:path>`,
})
export class MdiFolderSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderSyncOutlineIcon],svg[mdi-folder-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 4l2 2h8a2 2 0 0 1 2 2v3.5a7 7 0 0 0-2-.5V8H4v10h9c.07.7.24 1.38.5 2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zm9 8v1.5a4 4 0 0 1 4 4c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25l-.03-.03c.06-.05.13-.09 2.28-2.22m0 11v-1.5a4 4 0 0 1-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20v-1.5l2.25 2.25l.03.03c-.06.05-.13.09-2.28 2.22"></svg:path>`,
})
export class MdiFolderSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderTableIcon],svg[mdi-folder-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2zm8 5h3v2h-3zm4 0h3v2h-3zm-4 3h3v2h-3zm4 0h3v2h-3zm-4 3h3v2h-3zm4 0h3v2h-3z"></svg:path>`,
})
export class MdiFolderTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderTableOutlineIcon],svg[mdi-folder-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2zm0 4h16v10H4zm8 1v2h3V9zm4 0v2h3V9zm-4 3v2h3v-2zm4 0v2h3v-2zm-4 3v2h3v-2zm4 0v2h3v-2z"></svg:path>`,
})
export class MdiFolderTableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderTextIcon],svg[mdi-folder-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-5 10H6v-2h9zm3-4H6v-2h12z"></svg:path>`,
})
export class MdiFolderTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderTextOutlineIcon],svg[mdi-folder-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-5 10H6v-2h9zm3-4H6v-2h12z"></svg:path>`,
})
export class MdiFolderTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderUploadIcon],svg[mdi-folder-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6l2 2zm-9.25 7H14v4h2v-4h3.25L15 8.75"></svg:path>`,
})
export class MdiFolderUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderUploadOutlineIcon],svg[mdi-folder-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-4 11h-2v-4h-3l4-4l4 4h-3Z"></svg:path>`,
})
export class MdiFolderUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderWrenchIcon],svg[mdi-folder-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.03 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v9.5l-1.04-1.06c.01-.14.04-.29.04-.44c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.64.8 3.09 2.03 4m9.84 1.19l-4.11-4.11c.41-1.04.18-2.26-.68-3.11c-.9-.91-2.25-1.09-3.34-.59l1.94 1.94l-1.35 1.36l-1.99-1.95c-.54 1.09-.29 2.44.59 3.35a2.91 2.91 0 0 0 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64"></svg:path>`,
})
export class MdiFolderWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderWrenchOutlineIcon],svg[mdi-folder-wrench-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.03 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v9.5l-1.04-1.06c.01-.14.04-.29.04-.44c0-1.12-.38-2.14-1-2.97V8H4v10h7.42c.35.8.91 1.5 1.61 2m9.84 1.19l-4.11-4.11c.41-1.04.18-2.26-.68-3.11c-.9-.91-2.25-1.09-3.34-.59l1.94 1.94l-1.35 1.36l-1.99-1.95c-.54 1.09-.29 2.44.59 3.35a2.91 2.91 0 0 0 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64"></svg:path>`,
})
export class MdiFolderWrenchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderZipIcon],svg[mdi-folder-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-2 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2v2h2z"></svg:path>`,
})
export class MdiFolderZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFolderZipOutlineIcon],svg[mdi-folder-zip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12h-4v-2h-2v2H4V8h10v2h2V8h4zm-4-6v-2h2v2zm-2 0h2v2h-2zm4 4h-2v-2h2z"></svg:path>`,
})
export class MdiFolderZipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFontAwesomeIcon],svg[mdi-font-awesome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.76 2H4.24C3 2 2 3 2 4.24v15.52C2 21 3 22 4.24 22h15.52C21 22 22 21 22 19.76V4.24C22 3 21 2 19.76 2m-2.03 12.69c0 .19-.16.27-.35.35c-.74.32-1.54.61-2.38.61c-1.22 0-1.78-.74-3.22-.74c-1.04 0-2.13.37-3.01.77c-.06.03-.11.03-.16.05v2.03c0 .08 0 .16-.03.21v.06c-.11.37-.45.64-.85.64c-.51 0-.91-.41-.91-.91V8a1.49 1.49 0 0 1 .91-2.67c.83 0 1.5.67 1.5 1.5c0 .48-.23.9-.59 1.17v.83c.08-.03.16-.06.24-.11c.83-.35 1.82-.64 2.75-.64c1.01 0 1.81.27 2.72.61c.19.08.37.11.58.11c1.02 0 2.14-.72 2.41-.72c.21 0 .4.16.4.35v6.26z"></svg:path>`,
})
export class MdiFontAwesomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodIcon],svg[mdi-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"></svg:path>`,
})
export class MdiFoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodAppleIcon],svg[mdi-food-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10c2 3-3 12-5 12s-2-1-3-1s-1 1-3 1s-7-9-5-12s5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2"></svg:path>`,
})
export class MdiFoodAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodAppleOutlineIcon],svg[mdi-food-apple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10a5.27 5.27 0 0 0-7-2V3h-2v5a5.27 5.27 0 0 0-7 2c-2 3 3 12 5 12s2-1 3-1s1 1 3 1s7-9 5-12m-1.75 3.38c-.62 2.47-1.84 4.74-3.55 6.62c-.2 0-.43-.1-.6-.25a3.34 3.34 0 0 0-4.2 0c-.17.15-.4.25-.6.25a15.3 15.3 0 0 1-3.55-6.61c-.25-.73-.3-1.52-.09-2.27A3.37 3.37 0 0 1 8.5 9.4c.56.01 1.11.14 1.61.39l.89.45h2l.89-.45c.5-.25 1.05-.38 1.61-.39c1.18.03 2.26.68 2.84 1.71c.21.75.16 1.54-.09 2.27M11 5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5"></svg:path>`,
})
export class MdiFoodAppleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodCroissantIcon],svg[mdi-food-croissant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19l-3-2l3-2zm-7-4l4-6l3 4l-4 3zM5 17l-3 2v-4zm4-2l-3 1l-4-3l3-4zm5-9l4 2l-5 7h-2L6 8l4-2z"></svg:path>`,
})
export class MdiFoodCroissantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodDrumstickIcon],svg[mdi-food-drumstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.16 12.73A6.27 6.27 0 0 0 19.09 3c-2.01-1.33-4.7-1.34-6.73-.03c-1.76 1.13-2.73 2.89-2.9 4.71c-.13 1.32-.63 2.55-1.55 3.47l-.03.03c-1.16 1.16-1.16 2.93-.07 4.01l.99.99a2.794 2.794 0 0 0 3.95 0c.97-.97 2.25-1.5 3.64-1.65c1.37-.15 2.71-.75 3.77-1.8m-13.9 7.13c.27.56.18 1.24-.29 1.7a1.49 1.49 0 0 1-2.55-.98a1.49 1.49 0 0 1-.98-2.55c.46-.46 1.15-.56 1.7-.29l2.48-2.43c.14.19.3.41.48.59l.99.99c.21.2.41.37.67.52z"></svg:path>`,
})
export class MdiFoodDrumstickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodDrumstickOffIcon],svg[mdi-food-drumstick-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-7.2-7.2c-.3.2-.6.4-.9.7c-1.1 1.1-2.9 1.1-4 0l-1-1c-1.1-1.1-1.1-2.9.1-4c.2-.2.4-.5.6-.8L1.1 3l1.3-1.3l19.7 19.7zM8.1 16.9l-1-1c-.2-.2-.3-.4-.5-.6l-2.5 2.4c-.6-.3-1.2-.2-1.7.3c-.6.6-.6 1.5 0 2.1c.3.3.6.4 1 .4c0 .4.2.7.4 1c.6.6 1.5.6 2.1 0c.5-.5.6-1.1.3-1.7l2.5-2.4c-.2-.1-.4-.3-.6-.5m12.1-4.2C23 9.9 22.6 5.2 19.1 3c-2-1.3-4.7-1.3-6.7 0c-1.4.9-2.3 2.1-2.7 3.5l7.8 7.8c1-.3 1.9-.8 2.7-1.6"></svg:path>`,
})
export class MdiFoodDrumstickOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodDrumstickOffOutlineIcon],svg[mdi-food-drumstick-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l7.4 7.4c-.2.3-.4.5-.6.8c-1.2 1.2-1.2 2.9-.1 4l1 1c.5.5 1.3.8 2 .8s1.4-.3 2-.8c.3-.3.6-.5.9-.7l7.2 7.2zm-10.8-6.7c-.2.2-.4.2-.5.2s-.4 0-.6-.2l-1-1c-.2-.2-.2-.4-.2-.6s.1-.5.3-.7s.4-.5.6-.7l2.2 2.2c-.2.3-.5.5-.8.8m.1-6.6L9.7 6.5c.4-1.4 1.3-2.6 2.7-3.5c1-.6 2.2-1 3.3-1c1.2 0 2.4.3 3.4 1c3.5 2.3 3.8 7 1.1 9.7c-.8.8-1.7 1.3-2.7 1.6l-1.7-1.7c.1 0 .2-.1.4-.1c1-.1 1.9-.5 2.6-1.2c.9-.9 1.4-2.2 1.2-3.5c-.1-1.3-.8-2.4-2-3.2c-.7-.4-1.5-.6-2.3-.6s-1.6.2-2.3.7c-1.2.7-1.9 1.9-2 3.2zm-2.6 9.2l-2.5 2.4c.3.6.2 1.2-.3 1.7c-.6.6-1.5.6-2.1 0c-.3-.3-.4-.6-.4-1c-.4 0-.7-.2-1-.4c-.6-.6-.6-1.5 0-2.1c.5-.5 1.1-.6 1.7-.3l2.5-2.4c.1.2.3.4.5.6l1 1c.1.2.3.4.6.5"></svg:path>`,
})
export class MdiFoodDrumstickOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodDrumstickOutlineIcon],svg[mdi-food-drumstick-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.71 4c.83 0 1.62.22 2.29.66c1.14.74 1.84 1.87 2 3.18a4.37 4.37 0 0 1-1.25 3.47c-.7.69-1.59 1.13-2.57 1.23c-1.91.2-3.59.96-4.84 2.23a.81.81 0 0 1-1.13 0l-.99-.99a.74.74 0 0 1-.22-.53c0-.25.11-.47.32-.68c1.21-1.22 1.95-2.84 2.13-4.7c.13-1.33.84-2.47 2-3.22c.66-.43 1.44-.65 2.26-.65m0-2c-1.17 0-2.34.32-3.35.97c-1.76 1.13-2.73 2.89-2.9 4.71c-.13 1.32-.63 2.55-1.55 3.47l-.03.03c-1.16 1.16-1.16 2.93-.07 4.01l.99.99c.55.55 1.26.82 1.97.82s1.43-.27 1.98-.82c.97-.97 2.25-1.5 3.64-1.65c1.37-.15 2.71-.75 3.77-1.8A6.27 6.27 0 0 0 19.09 3c-1.01-.67-2.19-1-3.38-1M6.26 19.86c.27.56.18 1.24-.29 1.7a1.49 1.49 0 0 1-2.55-.98a1.49 1.49 0 0 1-.98-2.55c.46-.46 1.15-.56 1.7-.29l2.48-2.43c.14.19.3.41.48.59l.99.99c.21.2.41.37.67.52z"></svg:path>`,
})
export class MdiFoodDrumstickOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodForkDrinkIcon],svg[mdi-food-fork-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v5.5c0 1.69 1.03 3.13 2.5 3.72v6.28A1.5 1.5 0 0 0 6 21a1.5 1.5 0 0 0 1.5-1.5v-6.28c1.47-.59 2.5-2.03 2.5-3.72V4a1 1 0 0 0-1-1a1 1 0 0 0-1 1v4a.5.5 0 0 1-.5.5A.5.5 0 0 1 7 8V4a1 1 0 0 0-1-1a1 1 0 0 0-1 1v4a.5.5 0 0 1-.5.5A.5.5 0 0 1 4 8V4a1 1 0 0 0-1-1m16.88 0c-.13 0-.26.09-.38.16L16 5.25V9h-4v2h1l1 10h6l1-10h1V9h-4V6.34l2.5-1.5c.5-.28.63-.84.34-1.34c-.21-.36-.58-.55-.96-.5"></svg:path>`,
})
export class MdiFoodForkDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodHalalIcon],svg[mdi-food-halal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v10c0 1.11-.89 2-2 2H4c-.55 0-1-.45-1-1v-3H1v3c0 1.66 1.34 3 3 3h1c2.21 0 4-1.79 4-4V5m14 8.38l-1.23-1.23A3.9 3.9 0 0 0 19 11h-2v2h2c.5 0 1 .2 1.35.56l.35.35l-1.2.69c-.46.26-.97.4-1.5.4h-1c-.56 0-1-.44-1-1V6h-2v3.81l-.62-.69C12.7 8.37 11.6 8 10.59 8H10v2h.59c.64 0 1.25.25 1.7.71l1.71 1.7V14c0 1.12-.88 2-2 2h-2v2h2c1.37 0 2.5-.7 3.17-1.76A2.5 2.5 0 0 0 17 17h1c.88 0 1.74-.23 2.5-.67l2.5-1.44Z"></svg:path>`,
})
export class MdiFoodHalalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodHotDogIcon],svg[mdi-food-hot-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5.77c-.15-.12-.28-.22-.41-.32l.03-.04c.78-.78.78-2.04 0-2.82s-2.04-.78-2.83 0l-.74.74a3.465 3.465 0 0 0-4.55.32L3.65 12.5a3.465 3.465 0 0 0-.32 4.55l-.74.74c-.79.79-.79 2.05 0 2.83c.78.78 2.04.78 2.82 0l.04-.03c.1.13.2.26.32.41c1.36 1.34 3.58 1.34 4.95 0l10.25-10.28A3.52 3.52 0 0 0 21 5.77M4.77 15.61a1.5 1.5 0 0 1 .29-1.71l8.84-8.84a1.5 1.5 0 0 1 1.71-.29zM19.56 9.3L9.3 19.56c-.58.59-1.53.59-2.12 0c-.58-.56-.58-1.56 0-2.12L17.44 7.18c.56-.58 1.56-.58 2.12 0c.59.59.59 1.54 0 2.12"></svg:path>`,
})
export class MdiFoodHotDogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodKosherIcon],svg[mdi-food-kosher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v2h2c.57 0 1 .43 1 1v7h2v-7c0-1.64-1.36-3-3-3zm6 0v7c0 1.65 1.36 3 3 3h4c1.65 0 3-1.35 3-3V7h-2v7c0 .57-.43 1-1 1h-4c-.57 0-1-.43-1-1v-1h1c1.65 0 3-1.35 3-3V7h-2v3c0 .57-.43 1-1 1H9V7zm11 0v2h2c.57 0 1 .43 1 1v4c0 .57-.43 1-1 1h-2v2h2c1.65 0 3-1.35 3-3v-4c0-1.64-1.35-3-3-3z"></svg:path>`,
})
export class MdiFoodKosherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodOffIcon],svg[mdi-food-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.35 8.5L11 5h5V1h2v4h5l-1.38 13.79zM1 21v1c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-1zm20.9.9L2.1 2.1L.69 3.5l5.7 5.71C3.28 9.87 1 12 1 15h11.17l2 2H1v2h15v-.17l4.5 4.49z"></svg:path>`,
})
export class MdiFoodOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodOffOutlineIcon],svg[mdi-food-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h15v1c0 .54-.44 1-1 1H2c-.55 0-1-.46-1-1zm19.5 2.31L16 18.83V19H1v-2h13.17l-2-2H1c0-3.24 2.46-5.17 5.38-5.79L.68 3.5L2.1 2.1L13 13l2 2l6.9 6.9zM10.17 13l-2-2c-1.42.06-3.52.56-4.55 2zM23 5h-5V1h-2v4h-5l.23 2h9.56l-1 9.97l1.83 1.83z"></svg:path>`,
})
export class MdiFoodOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodOutlineIcon],svg[mdi-food-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 22c0 .54.45 1 1 1h13c.56 0 1-.46 1-1v-1H1zM8.5 9C4.75 9 1 11 1 15h15c0-4-3.75-6-7.5-6m-4.88 4c1.11-1.55 3.47-2 4.88-2s3.77.45 4.88 2zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5z"></svg:path>`,
})
export class MdiFoodOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodSteakIcon],svg[mdi-food-steak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.9 2C8 2 4.9 5.4 5 9.3c.1 2.6 1.6 4.8 3.7 5.9c1.4.7 2.3 2.1 2.3 3.6v.2c0 1.7 1.3 3 3 3c4 0 5-5 5-13c0 0 0-7-7.1-7M14 20c-.6 0-1-.4-1-1v-.2c0-2.2-1.3-4.3-3.3-5.4C8.1 12.6 7.1 11 7 9.2c0-1.3.5-2.7 1.4-3.7S10.6 4 11.8 4C16.7 4 17 8.2 17 9c0 9.9-1.7 11-3 11m1.8-12.4l-7.5 2.7Q8 9.85 8 9.1c0-.7.2-1.3.5-2l5.2-1.9c1.2.6 1.8 1.5 2.1 2.4m-2.9 7.5l2.8-1c-.1 1.5-.4 2.6-.6 3.3l-1.3.5c0-1-.3-1.9-.9-2.8M16 9.2c0 1.2 0 2.3-.1 3.2l-4 1.5c-.5-.5-1.1-1-1.8-1.3c-.4-.2-.8-.5-1.1-.8z"></svg:path>`,
})
export class MdiFoodSteakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodSteakOffIcon],svg[mdi-food-steak-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l4.16 4.16C5.08 7.83 5 8.53 5 9.26a7.03 7.03 0 0 0 3.74 5.93c1.36.71 2.26 2.06 2.26 3.6V19c0 1.66 1.34 3 3 3c1.68 0 2.83-.89 3.6-2.5l3.24 3.23l1.27-1.27zM14 20c-.55 0-1-.45-1-1v-.21c0-2.23-1.28-4.29-3.33-5.37A5.04 5.04 0 0 1 7 9.18V8.9l1.16 1.15c.03.1.05.2.08.3l.16-.06l1.22 1.21l-.54.21c.3.33.65.61 1.06.82c.67.36 1.26.81 1.77 1.32l.04-.01l1.22 1.22l-.22.08c.51.82.85 1.75.98 2.71l1.27-.46c.02-.07.05-.15.07-.23l.8.8C15.47 19.68 14.68 20 14 20m1.79-12.4l-3.65 1.34l-2.26-2.26l3.81-1.38c1.25.47 1.84 1.42 2.1 2.3m-7.2-2.21L7.17 3.97C8.41 2.77 10.07 2 11.88 2C19 2 19 9 19 9c0 2.46-.1 4.63-.34 6.46l-1.82-1.82c.1-1.28.16-2.81.16-4.64c0-.82-.31-5-5.12-5c-1.21 0-2.38.5-3.29 1.39m7.09 7.11l-2.32-2.35L16 9.19c0 1.22-.03 2.27-.08 3.21z"></svg:path>`,
})
export class MdiFoodSteakOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodTakeoutBoxIcon],svg[mdi-food-takeout-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.26 11h13.48l-.67 9H5.93zM9 4h5.97L19 7.38l1.59-1.59L22 7.21L19.21 10H4.79L2 7.21L3.41 5.8L5 7.38z"></svg:path>`,
})
export class MdiFoodTakeoutBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodTakeoutBoxOutlineIcon],svg[mdi-food-takeout-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.79 18l-.51-7h9.46l-.51 7zM9.83 5h4.33l2.8 2.73L16.87 9H7.12l-.09-1.27zM22 7.46l-1.41-1.41L19 7.63l.03-.56L15 3H9L4.97 7.07l.03.5L3.41 6L2 7.44l3.23 3.11l.7 9.45h12.14l.7-9.44z"></svg:path>`,
})
export class MdiFoodTakeoutBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodTurkeyIcon],svg[mdi-food-turkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.44 7.96l.52-.53c.58-.58 1.54-.58 2.14.04l.02.03c.49.5 1.14.74 1.85.81c.97.09 1.91.61 2.53 1.55c.68 1.08.67 2.52-.04 3.59a3.322 3.322 0 0 1-5.18.55c-.56-.55-.88-1.26-.96-2c-.08-.73-.37-1.42-.88-1.93c-.58-.57-.58-1.53 0-2.11M9.64 16c-1.17 0-2.26-.45-3.07-1.28c-.7-.72-1.14-1.62-1.25-2.6c-.03-.3-.12-.69-.36-1.05C4.36 11.9 4 12.9 4 14c0 1.64.8 3.09 2.03 4H19v-1c0-3.6-2.39-6.65-5.66-7.65c.89 1.4.87 3.27-.04 4.65c-.8 1.25-2.18 2-3.66 2m5.14-8.44h1.27c.87 0 1.63.61 1.63 1.7V10h1.25V9c0-1.5-1.33-2.64-2.88-2.64h-1.27c-.83 0-1.54-.82-1.54-1.66s.71-1.46 1.54-1.46V2C13.24 2 12 3.24 12 4.78s1.24 2.78 2.78 2.78M4.5 7.55c.06-.1.14-.2.23-.3l.52-.52c.09-.09.19-.16.29-.23L4.13 5.07c.14-.27.09-.62-.13-.85a.767.767 0 0 0-1.07 0c-.14.14-.21.31-.22.49c-.18.01-.35.08-.49.22c-.29.29-.29.77 0 1.07c.23.22.57.27.85.13zm13.89-3.16c.51-.51.83-1.2.83-1.97h-1.25c0 .83-.7 1.53-1.53 1.53v1.24c1.86 0 3.32 1.52 3.32 3.38V11H21V8.57a4.61 4.61 0 0 0-2.61-4.18M5 21h14c1.11 0 2-.89 2-2H3a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiFoodTurkeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodVariantIcon],svg[mdi-food-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4v-2h6.79l2.76-4.77l1.56.9L19.87 16H22zM9 22H2c0-3 0-6 .33-9.17C2.6 10.3 3.08 7.66 3.6 5H3V3h5v2h-.6c.52 2.66 1 5.3 1.27 7.83C9 16 9 19 9 22"></svg:path>`,
})
export class MdiFoodVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoodVariantOffIcon],svg[mdi-food-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.28 3L1 4.27l2.31 2.31c-.4 2.12-.76 4.22-.98 6.25C2 16 2 19 2 22h7c0-3 0-6-.33-9.17c-.04-.33-.09-.68-.13-1.02L12.73 16H11v2c0 2.21 1.79 4 4 4h3c.23 0 .45 0 .67-.06L19.73 23L21 21.72M4.82 3l2.71 2.71c-.03-.24-.08-.47-.13-.71H8V3H7m13.55 8.23L17.8 16l3.79 3.76c.27-.55.41-1.15.41-1.76v-2h-2.13l2.24-3.87Z"></svg:path>`,
})
export class MdiFoodVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFootPrintIcon],svg[mdi-foot-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a2 2 0 1 1-2 2a2 2 0 0 1 2-2m-3.96 1a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5M9.09 4.5a1 1 0 1 1-1 1a1 1 0 0 1 1-1M7.04 6a1 1 0 1 1-1 1a1 1 0 0 1 1-1m7.49 6A2.5 2.5 0 0 0 17 9.24A2.6 2.6 0 0 0 14.39 7h-2.48a6 6 0 0 0-5.79 4.4a2 2 0 0 0 .11 1.4a6.8 6.8 0 0 1 .68 2.96a6.9 6.9 0 0 1-.69 2.79a1.92 1.92 0 0 0 .08 1.76a3.62 3.62 0 0 0 3.89 1.6a3.5 3.5 0 0 0 2.17-5.28a2.8 2.8 0 0 1-.45-1.63s-.23-3 2.62-3"></svg:path>`,
})
export class MdiFootPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFootballIcon],svg[mdi-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.39 21L3 15.61c0 1.09.04 2.1.2 3.02c.15.92.3 1.47.51 1.66c.19.21.73.36 1.64.52s1.92.19 3.04.19M15.5 9.89L9.89 15.5L8.5 14.11l5.61-5.61zM3.29 13.08l7.63 7.63c2.78-.5 4.98-1.56 6.61-3.18c1.62-1.63 2.68-3.83 3.18-6.61l-7.63-7.63c-2.78.5-4.98 1.56-6.61 3.18s-2.68 3.83-3.18 6.61M15.61 3L21 8.39c0-1.09-.04-2.1-.19-3.02c-.16-.92-.31-1.47-.52-1.66c-.19-.21-.73-.36-1.64-.51S16.73 3 15.61 3"></svg:path>`,
})
export class MdiFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFootballAustralianIcon],svg[mdi-football-australian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7.5c1.67-1.63 3.79-2.81 5.87-3.32C18 3 21 6 19.82 10.63c-.51 2.08-1.69 4.2-3.32 5.87c-1.67 1.63-3.79 2.81-5.87 3.32C6 21 3 18 4.18 13.37c.51-2.08 1.69-4.2 3.32-5.87m3.12 3.76l-.36.36l2.12 2.12l.36-.36zm1-1l-.36.36l2.12 2.12l.36-.36zm-2 2l-.36.36l2.12 2.12l.36-.36zm3.01-2.98l-.35.35l2.12 2.12l.35-.35zm-4 4l-.35.35l2.12 2.12l.35-.35zm5-5l-.35.35l2.12 2.12l.35-.35z"></svg:path>`,
})
export class MdiFootballAustralianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFootballHelmetIcon],svg[mdi-football-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 12a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m0-9c4.69 0 8.5 3.58 8.5 8c0 1.62 0 3-.91 5C17 16 16 20 12.5 20c-2.18 0-3.23-1.72-3.45-4h-.81l-1.28 4.3a1 1 0 0 1-1.12.7H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1v-3a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3.75l.48-1.61c-.51-.25-1.1-.39-1.73-.39h-.43L5 11c0-4.42 3.81-8 8.5-8M5 16v3h.26l.89-3z"></svg:path>`,
})
export class MdiFootballHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFooterIcon],svg[mdi-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 6v8h4V8h-4z" fill="currentColor"></svg:path>`,
})
export class MdiFooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForestIcon],svg[mdi-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12L9 2L2 12h1.86L0 18h7v4h4v-4h7l-3.86-6zm4.14 0H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"></svg:path>`,
})
export class MdiForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForestOutlineIcon],svg[mdi-forest-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.19 18H24l-3.86-6H22L15 2l-2.39 3.41L17.92 13h-1.95zM16 12L9 2L2 12h1.86L0 18h7v4h4v-4h7l-3.86-6zm-3.84-2H10.5l3.84 6H3.67l3.86-6H5.84L9 5.5zm.84 9v3h4v-3z"></svg:path>`,
})
export class MdiForestOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForkliftIcon],svg[mdi-forklift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v7H4c-1.11 0-2 .89-2 2v4a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-4l-4-9zm11 1v14h5v-1.5h-3.5V5zm-9.5.5h3.7l3.3 7.5h-7zM5 15.5A1.5 1.5 0 0 1 6.5 17A1.5 1.5 0 0 1 5 18.5A1.5 1.5 0 0 1 3.5 17A1.5 1.5 0 0 1 5 15.5m8 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiForkliftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormDropdownIcon],svg[mdi-form-dropdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5h3l-1.5 2zM3 2h18a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2h-5v10c0 1.11-.89 2-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v4h11V4zm18 4V4h-5v4zM3 20h11V10H3zm2-8h7v2H5zm0 4h7v2H5z"></svg:path>`,
})
export class MdiFormDropdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormSelectIcon],svg[mdi-form-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h3l-1.5 2zM5 2h14a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v4h14V4zm0 16h14V10H5zm2-8h10v2H7zm0 4h10v2H7z"></svg:path>`,
})
export class MdiFormSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormTextareaIcon],svg[mdi-form-textarea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9H4v14H2V7h11m10 2V7h-6V5a1 1 0 0 1 1-1h2V2h-2.5C17 2 16 2.45 16 3c0-.55-.95-1-1.5-1H12v2h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2v2h2.5c.55 0 1.5-.45 1.5-1c0 .55.95 1 1.5 1H20v-2h-2a1 1 0 0 1-1-1V9Z"></svg:path>`,
})
export class MdiFormTextareaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormTextboxIcon],svg[mdi-form-textbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7h5v10h-5v2a1 1 0 0 0 1 1h2v2h-2.5c-.55 0-1.5-.45-1.5-1c0 .55-.95 1-1.5 1H12v-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2V2h2.5c.55 0 1.5.45 1.5 1c0-.55.95-1 1.5-1H20v2h-2a1 1 0 0 0-1 1zM2 7h11v2H4v6h9v2H2zm18 8V9h-3v6z"></svg:path>`,
})
export class MdiFormTextboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormTextboxLockIcon],svg[mdi-form-textbox-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h4v2H4v6h2v2H2zm8 0h12v5c-.58-.44-1.26-.75-2-.9V9H10v6h4.25c-.69 0-1.25.56-1.25 1.25V17h-3v2c0 .55.45 1 1 1h2v2h-2.5c-.55 0-1.5-.45-1.5-1c0 .55-.95 1-1.5 1H5v-2h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H5V2h2.5C8.05 2 9 2.45 9 3c0-.55.95-1 1.5-1H13v2h-2c-.55 0-1 .45-1 1zm11.8 10c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5zm-1.3 0v-1.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17z"></svg:path>`,
})
export class MdiFormTextboxLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormTextboxPasswordIcon],svg[mdi-form-textbox-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7h5v10h-5v2a1 1 0 0 0 1 1h2v2h-2.5c-.55 0-1.5-.45-1.5-1c0 .55-.95 1-1.5 1H12v-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2V2h2.5c.55 0 1.5.45 1.5 1c0-.55.95-1 1.5-1H20v2h-2a1 1 0 0 0-1 1zM2 7h11v2H4v6h9v2H2zm18 8V9h-3v6zM8.5 12A1.5 1.5 0 0 0 7 10.5A1.5 1.5 0 0 0 5.5 12A1.5 1.5 0 0 0 7 13.5A1.5 1.5 0 0 0 8.5 12m4.5-1.11c-.61-.56-1.56-.51-2.12.11c-.56.6-.51 1.55.12 2.11c.55.52 1.43.52 2 0z"></svg:path>`,
})
export class MdiFormTextboxPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignBottomIcon],svg[mdi-format-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 9l2.5-2.5l1.42 1.42L12 12.84L7.08 7.92L8.5 6.5L11 9V3h2zM3 15h18v2H3zm0 4h10v2H3z"></svg:path>`,
})
export class MdiFormatAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignCenterIcon],svg[mdi-format-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm4 4h10v2H7zm-4 4h18v2H3zm4 4h10v2H7zm-4 4h18v2H3z"></svg:path>`,
})
export class MdiFormatAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignJustifyIcon],svg[mdi-format-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3z"></svg:path>`,
})
export class MdiFormatAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignLeftIcon],svg[mdi-format-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm0 4h12v2H3zm0 4h18v2H3zm0 4h12v2H3zm0 4h18v2H3z"></svg:path>`,
})
export class MdiFormatAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignMiddleIcon],svg[mdi-format-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 6l2-2l1.42 1.42L12 9.84L7.58 5.42L9 4l2 2V2h2zM3 11h18v2H3zm10 7v4h-2v-4l-2 2l-1.42-1.42L12 14.16l4.42 4.42L15 20z"></svg:path>`,
})
export class MdiFormatAlignMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignRightIcon],svg[mdi-format-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm6 4h12v2H9zm-6 4h18v2H3zm6 4h12v2H9zm-6 4h18v2H3z"></svg:path>`,
})
export class MdiFormatAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignTopIcon],svg[mdi-format-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 15l2.5 2.5l1.42-1.42L12 11.16l-4.92 4.92L8.5 17.5L11 15v6h2zM3 3h18v2H3zm0 4h10v2H3z"></svg:path>`,
})
export class MdiFormatAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAnnotationMinusIcon],svg[mdi-format-annotation-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7h-2L3 21h2.2l1.1-3h6.2l1.1 3H16zm-3.4 9l2.4-6.3l2.4 6.3zM22 7h-8V5h8z"></svg:path>`,
})
export class MdiFormatAnnotationMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAnnotationPlusIcon],svg[mdi-format-annotation-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 7h2L16 21h-2.4l-1.1-3H6.3l-1.1 3H3zm-1.4 9h4.8L9.5 9.7zM22 5v2h-3v3h-2V7h-3V5h3V2h2v3z"></svg:path>`,
})
export class MdiFormatAnnotationPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatBoldIcon],svg[mdi-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 15.5H10v-3h3.5A1.5 1.5 0 0 1 15 14a1.5 1.5 0 0 1-1.5 1.5m-3.5-9h3A1.5 1.5 0 0 1 14.5 8A1.5 1.5 0 0 1 13 9.5h-3m5.6 1.29c.97-.68 1.65-1.79 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.1 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42"></svg:path>`,
})
export class MdiFormatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatClearIcon],svg[mdi-format-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v.18L8.82 8h2.4l-.72 1.68l2.1 2.1L14.21 8H20V5zM3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21L18 19.73L3.55 5.27z"></svg:path>`,
})
export class MdiFormatClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatColorIcon],svg[mdi-format-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.624 11.998L12 5.665l2.375 6.333m-3.375-9l-5.5 14h2.25l1.125-3h6.25l1.125 3h2.25l-5.5-14h-2z" fill="currentColor"></svg:path>`,
})
export class MdiFormatColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatColorFillIcon],svg[mdi-format-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11.5s-2 2.17-2 3.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.33-2-3.5-2-3.5M5.21 10L10 5.21L14.79 10m1.77-1.06L7.62 0L6.21 1.41l2.38 2.38l-5.15 5.15c-.59.56-.59 1.53 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.59.59-1.56 0-2.12"></svg:path>`,
})
export class MdiFormatColorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatColorHighlightIcon],svg[mdi-format-color-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 17l2.75-2.75l-.03-.02c-.58-.59-.58-1.54 0-2.12l4.74-4.74l4.24 4.24l-4.74 4.74c-.57.58-1.5.58-2.09.02l-.63.63zM15.91 2.91c.59-.58 1.54-.58 2.12 0l2.13 2.12c.58.59.58 1.54 0 2.13l-3.3 3.29l-4.24-4.24z"></svg:path>`,
})
export class MdiFormatColorHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatColorMarkerCancelIcon],svg[mdi-format-color-marker-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 8C14 8 12 10 12 12.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5S19 8 16.5 8m0 7.5c-1.7 0-3-1.3-3-3c0-.6.2-1.1.4-1.5l4.1 4.1c-.4.2-.9.4-1.5.4m2.6-1.5L15 9.9c.4-.3.9-.4 1.5-.4c1.7 0 3 1.3 3 3c0 .6-.2 1.1-.4 1.5m-7-6.3l-1.5-1.5l3.3-3.3c.6-.6 1.5-.6 2.1 0L18.2 5c.4.4.5.8.4 1.3c-.6-.2-1.3-.3-2-.3c-1.8 0-3.3.7-4.5 1.7m-1.6 7.2L9 16.3c-.6.6-1.5.6-2.1 0l-.7.7H2l2.8-2.8c-.6-.6-.6-1.5 0-2.1l4.7-4.7L11.1 9c-.7 1-1.1 2.2-1.1 3.5c0 .8.2 1.6.5 2.4"></svg:path>`,
})
export class MdiFormatColorMarkerCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatColorTextIcon],svg[mdi-format-color-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.62 12L12 5.67L14.37 12M11 3L5.5 17h2.25l1.12-3h6.25l1.13 3h2.25L13 3z"></svg:path>`,
})
export class MdiFormatColorTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatColumnsIcon],svg[mdi-format-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v2H3zm10 0h8v2h-8zM3 7h8v2H3zm10 0h8v2h-8zM3 11h8v2H3zm10 0h8v2h-8zM3 15h8v2H3zm10 0h8v2h-8zM3 19h8v2H3zm10 0h8v2h-8z"></svg:path>`,
})
export class MdiFormatColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFloatCenterIcon],svg[mdi-format-float-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v6H9zM3 3h18v2H3zm0 12h18v2H3zm0 4h14v2H3z"></svg:path>`,
})
export class MdiFormatFloatCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFloatLeftIcon],svg[mdi-format-float-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h6v6H3zm0-4h18v2H3zm18 4v2H11V7zm0 4v2H11v-2zM3 15h14v2H3zm0 4h18v2H3z"></svg:path>`,
})
export class MdiFormatFloatLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFloatNoneIcon],svg[mdi-format-float-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h6v6H3zm0-4h18v2H3zm18 8v2H11v-2zM3 15h14v2H3zm0 4h18v2H3z"></svg:path>`,
})
export class MdiFormatFloatNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFloatRightIcon],svg[mdi-format-float-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7h6v6h-6zM3 3h18v2H3zm10 4v2H3V7zm-4 4v2H3v-2zm-6 4h14v2H3zm0 4h18v2H3z"></svg:path>`,
})
export class MdiFormatFloatRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFontIcon],svg[mdi-format-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8h3v12h1v1h-4v-1h1v-3h-4l-1.5 3H14v1h-4v-1h1zm1 1l-3.5 7H18zM5 3h5c1.11 0 2 .89 2 2v11H9v-5H6v5H3V5c0-1.11.89-2 2-2m1 2v4h3V5z"></svg:path>`,
})
export class MdiFormatFontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFontSizeDecreaseIcon],svg[mdi-format-font-size-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.12 14L7.5 7.67L9.87 14M6.5 5L1 19h2.25l1.12-3h6.25l1.13 3H14L8.5 5zM18 17l5-5.07l-1.41-1.43L19 13.1V7h-2v6.1l-2.59-2.6L13 11.93z"></svg:path>`,
})
export class MdiFormatFontSizeDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFontSizeIncreaseIcon],svg[mdi-format-font-size-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.12 14L7.5 7.67L9.87 14M6.5 5L1 19h2.25l1.12-3h6.25l1.13 3H14L8.5 5zM18 7l-5 5.07l1.41 1.43L17 10.9V17h2v-6.1l2.59 2.6L23 12.07z"></svg:path>`,
})
export class MdiFormatFontSizeIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeader1Icon],svg[mdi-format-header-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3zm11 14v-2h2V6.31l-2.5 1.44V5.44L16 4h2v12h2v2z"></svg:path>`,
})
export class MdiFormatHeader1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeader2Icon],svg[mdi-format-header-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3zm18 14h-6a2 2 0 0 1-2-2c0-.53.2-1 .54-1.36l4.87-5.23c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L15 16h6z"></svg:path>`,
})
export class MdiFormatHeader2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeader3Icon],svg[mdi-format-header-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3zm12 0h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1h2v1h4v-4h-4v-2h4V6h-4v1h-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiFormatHeader3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeader4Icon],svg[mdi-format-header-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3zm15 14v-5h-5v-2l5-7h2v7h1v2h-1v5zm0-7V7.42L15.45 11z"></svg:path>`,
})
export class MdiFormatHeader4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeader5Icon],svg[mdi-format-header-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3zm12 0h5v2h-5v4h2a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-2a2 2 0 0 1-2-2v-1h2v1h2a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiFormatHeader5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeader6Icon],svg[mdi-format-header-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3zm12 0h4a2 2 0 0 1 2 2v1h-2V6h-4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 8v4h4v-4z"></svg:path>`,
})
export class MdiFormatHeader6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderDecreaseIcon],svg[mdi-format-header-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h2v6h4V4h2v14h-2v-6H6v6H4zm16.42 3.41L16.83 11l3.59 3.59L19 16l-5-5l5-5z"></svg:path>`,
})
export class MdiFormatHeaderDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderDownIcon],svg[mdi-format-header-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 4h2v6h4V4h2v14H8v-6H4v6H2V4zm18.586 4.585L17 12.172l-3.586-3.587L12 9.999L17 15l5-5.001l-1.414-1.414z" fill="currentColor"></svg:path>`,
})
export class MdiFormatHeaderDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderEqualIcon],svg[mdi-format-header-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h2v6h4V4h2v14h-2v-6H6v6H4zm10 6V8h7v2zm0 2h7v2h-7z"></svg:path>`,
})
export class MdiFormatHeaderEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderIncreaseIcon],svg[mdi-format-header-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h2v6h4V4h2v14h-2v-6H6v6H4zm10.59 3.41L18.17 11l-3.58 3.59L16 16l5-5l-5-5z"></svg:path>`,
})
export class MdiFormatHeaderIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderPoundIcon],svg[mdi-format-header-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3zm10 4h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H23v2h-1.9l-.2 2H23v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H13v-2h1.9l.2-2H13zm4.1 2l-.2 2h2l.2-2z"></svg:path>`,
})
export class MdiFormatHeaderPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderUpIcon],svg[mdi-format-header-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 4h2v6h4V4h2v14H8v-6H4v6H2V4zm18.586 10.415L17 10.828l-3.586 3.587L12 13.001L17 8l5 5.001l-1.414 1.414z" fill="currentColor"></svg:path>`,
})
export class MdiFormatHeaderUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHorizontalAlignCenterIcon],svg[mdi-format-horizontal-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16v-3h4v-2h-4V8l-4 4zM5 8v3H1v2h4v3l4-4zm6 12h2V4h-2z"></svg:path>`,
})
export class MdiFormatHorizontalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHorizontalAlignLeftIcon],svg[mdi-format-horizontal-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16v-3h10v-2H11V8l-4 4zm-8 4h2V4H3z"></svg:path>`,
})
export class MdiFormatHorizontalAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHorizontalAlignRightIcon],svg[mdi-format-horizontal-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8v3H3v2h10v3l4-4zm6 12h2V4h-2z"></svg:path>`,
})
export class MdiFormatHorizontalAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatIndentDecreaseIcon],svg[mdi-format-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M3 21h18v-2H3m0-7l4 4V8m4 9h10v-2H11z"></svg:path>`,
})
export class MdiFormatIndentDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatIndentIncreaseIcon],svg[mdi-format-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M11 17h10v-2H11M3 8v8l4-4m-4 9h18v-2H3z"></svg:path>`,
})
export class MdiFormatIndentIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatItalicIcon],svg[mdi-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></svg:path>`,
})
export class MdiFormatItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterCaseIcon],svg[mdi-format-letter-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.06 18a4 4 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05s1.61-.73 2.83-.73h1.4v-.64q0-.735-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18zm-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29zM6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93z"></svg:path>`,
})
export class MdiFormatLetterCaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterCaseLowerIcon],svg[mdi-format-letter-case-lower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.06 18a4 4 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05s1.61-.73 2.83-.73h1.4v-.64q0-.735-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18zm-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29zM6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93zM22 20v2h-7.5v-2z"></svg:path>`,
})
export class MdiFormatLetterCaseLowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterCaseUpperIcon],svg[mdi-format-letter-case-upper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.06 18a4 4 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05s1.61-.73 2.83-.73h1.4v-.64q0-.735-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18zm-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29zM6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93zM2 20h11v2H2z"></svg:path>`,
})
export class MdiFormatLetterCaseUpperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterEndsWithIcon],svg[mdi-format-letter-ends-with-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.14 4L6.43 16h1.93l.96-2.57h5.35l.97 2.57h1.93L12.86 4M12 6.29l2.03 5.42H9.96M20 14v4H2v2h20v-6Z"></svg:path>`,
})
export class MdiFormatLetterEndsWithIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterMatchesIcon],svg[mdi-format-letter-matches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.14 4L6.43 16h1.93l.96-2.57h5.35l.97 2.57h1.93L12.86 4M12 6.29l2.03 5.42H9.96M20 14v4H4v-3H2v5h20v-6Z"></svg:path>`,
})
export class MdiFormatLetterMatchesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterSpacingIcon],svg[mdi-format-letter-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 10.7h4.1l-2-5.4zM15.6 3h1.7L22 15h-1.9l-1-2.6h-5.4l-1 2.6h-1.9zm-4.4 0h1.9L8.4 15H6.7L2 3h1.9l3.6 9.7M19 22v-2H5v2l-3-3l3-3v2h14v-2l3 3z"></svg:path>`,
})
export class MdiFormatLetterSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterSpacingVariantIcon],svg[mdi-format-letter-spacing-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3v18h-2V3zM4 3v18H2V3zm6 10.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"></svg:path>`,
})
export class MdiFormatLetterSpacingVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterStartsWithIcon],svg[mdi-format-letter-starts-with-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.14 4L6.43 16h1.93l.96-2.57h5.35l.97 2.57h1.93L12.86 4M12 6.29l2.03 5.42H9.96M4 18v-3H2v5h20v-2Z"></svg:path>`,
})
export class MdiFormatLetterStartsWithIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLineHeightIcon],svg[mdi-format-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"></svg:path>`,
})
export class MdiFormatLineHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLineSpacingIcon],svg[mdi-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h12v-2H10m0 8h12v-2H10m0-10h12V5H10M6 7h2.5L5 3.5L1.5 7H4v10H1.5L5 20.5L8.5 17H6z"></svg:path>`,
})
export class MdiFormatLineSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLineStyleIcon],svg[mdi-format-line-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h5v-2H3zm6.5 0h5v-2h-5zm6.5 0h5v-2h-5zM3 20h2v-2H3zm4 0h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zm4 0h2v-2h-2zM3 12h8v-2H3zm10 0h8v-2h-8zM3 4v4h18V4z"></svg:path>`,
})
export class MdiFormatLineStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLineWeightIcon],svg[mdi-format-line-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h18v-2H3zm0 3h18v-1H3zm0-7h18v-3H3zm0-9v4h18V4z"></svg:path>`,
})
export class MdiFormatLineWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListBulletedIcon],svg[mdi-format-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h14v2H7zm0 8v-2h14v2zM4 4.5A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 4 7.5A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2zm-3-2.5A1.5 1.5 0 0 1 5.5 18A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18A1.5 1.5 0 0 1 4 16.5"></svg:path>`,
})
export class MdiFormatListBulletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListBulletedSquareIcon],svg[mdi-format-list-bulleted-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h4v4H3zm6 1v2h12V5zm-6 5h4v4H3zm6 1v2h12v-2zm-6 5h4v4H3zm6 1v2h12v-2z"></svg:path>`,
})
export class MdiFormatListBulletedSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListBulletedTriangleIcon],svg[mdi-format-list-bulleted-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15.5L7.5 20h-5zM9 19h12v-2H9zM5 9.5L7.5 14h-5zM9 13h12v-2H9zM5 3.5L7.5 8h-5zM9 7h12V5H9z"></svg:path>`,
})
export class MdiFormatListBulletedTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListBulletedTypeIcon],svg[mdi-format-list-bulleted-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9.5L7.5 14h-5zM3 4h4v4H3zm2 16a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2M9 5v2h12V5zm0 14h12v-2H9zm0-6h12v-2H9z"></svg:path>`,
})
export class MdiFormatListBulletedTypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListCheckboxIcon],svg[mdi-format-list-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19v-2H8v2zm0-6v-2H8v2zM8 7h13V5H8zM4 5v2h2V5zM3 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1 6v2h2v-2zm-1 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1 6v2h2v-2zm-1 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class MdiFormatListCheckboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListChecksIcon],svg[mdi-format-list-checks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h6v6H3zm2 2v2h2V7zm6 0h10v2H11zm0 8h10v2H11zm-6 5l-3.5-3.5l1.41-1.41L5 17.17l4.59-4.58L11 14z"></svg:path>`,
})
export class MdiFormatListChecksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListGroupIcon],svg[mdi-format-list-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h2v2H3V3h4v2zm15 2H7v2h13zm0 4H7v2h13zm0 4H7v2h13z"></svg:path>`,
})
export class MdiFormatListGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListGroupPlusIcon],svg[mdi-format-list-group-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3m1-3v1.3c-.6-.2-1.3-.3-2-.3c-1.2 0-2.4.4-3.3 1H7v-2zm-7.9 6H7v-2h5.8c-.3.6-.6 1.3-.7 2M7 7h13v2H7zM5 19h2v2H3V3h4v2H5z"></svg:path>`,
})
export class MdiFormatListGroupPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListNumberedIcon],svg[mdi-format-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13v-2h14v2zm0 6v-2h14v2zM7 7V5h14v2zM3 8V5H2V4h2v4zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17zm2.25-7a.75.75 0 0 1 .75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1z"></svg:path>`,
})
export class MdiFormatListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListNumberedRtlIcon],svg[mdi-format-list-numbered-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13v-2h14v2zm0 6v-2h14v2zM3 7V5h14v2zm17 1V5h-1V4h2v4zm-1 9v-1h3v4h-3v-1h2v-.5h-1v-1h1V17zm2.25-7a.749.749 0 0 1 .54 1.27L20.12 13H22v1h-3v-.92L21 11h-2v-1z"></svg:path>`,
})
export class MdiFormatListNumberedRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListTextIcon],svg[mdi-format-list-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14h6v6H2M16 8h-6v2h6M2 10h6V4H2m8 0v2h12V4M10 20h6v-2h-6m0-2h12v-2H10"></svg:path>`,
})
export class MdiFormatListTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListTriangleIcon],svg[mdi-format-list-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 15.5L7.5 20h-5L5 15.5M9 19h12v-2H9v2zM5 9.5L7.5 14h-5L5 9.5M9 13h12v-2H9v2zM5 3.5L7.5 8h-5L5 3.5M9 7h12V5H9v2z" fill="currentColor"></svg:path>`,
})
export class MdiFormatListTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatOverlineIcon],svg[mdi-format-overline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h14V3H5zm4.62 11L12 9.67L14.37 16M11 7L5.5 21h2.25l1.12-3h6.25l1.13 3h2.25L13 7z"></svg:path>`,
})
export class MdiFormatOverlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPageBreakIcon],svg[mdi-format-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H6v-2H4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2h-2zM14 2H6a2 2 0 0 0-2 2v8h2V4h8v4h4v4h2V8zm-3 14H8v-2h3zm5 0h-3v-2h3zM3 14h3v2H3zm18 2h-3v-2h3z"></svg:path>`,
})
export class MdiFormatPageBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPageSplitIcon],svg[mdi-format-page-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V7h2v4zm2-10v4h-2V1zm-2 16v-4h2v4zm-2 3H6V4h3V2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h3zm6-17v5h3v12h-3v2h3c1.11 0 2-.89 2-2V8zm-2 16h-2v4h2z"></svg:path>`,
})
export class MdiFormatPageSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPaintIcon],svg[mdi-format-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6h1v4H9v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9h8V4z"></svg:path>`,
})
export class MdiFormatPaintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatParagraphIcon],svg[mdi-format-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-2v6H9V4zm0 6a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2v4z"></svg:path>`,
})
export class MdiFormatParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatParagraphSpacingIcon],svg[mdi-format-paragraph-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h18v2H3zM3 2h18v2H3zm0 18h18v2H3zM13 8h2l-3-3l-3 3h2v5H9l3 3l3-3h-2z"></svg:path>`,
})
export class MdiFormatParagraphSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPilcrowIcon],svg[mdi-format-pilcrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11a4 4 0 0 1-4-4a4 4 0 0 1 4-4h8v2h-2v16h-2V5h-2v16h-2z"></svg:path>`,
})
export class MdiFormatPilcrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPilcrowArrowLeftIcon],svg[mdi-format-pilcrow-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17v-3l-4 4l4 4v-3h12v-2m-10-7v5h2V4h2v11h2V4h2V2h-8a4 4 0 0 0-4 4a4 4 0 0 0 4 4"></svg:path>`,
})
export class MdiFormatPilcrowArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPilcrowArrowRightIcon],svg[mdi-format-pilcrow-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18l-4-4v3H5v2h12v3M9 10v5h2V4h2v11h2V4h2V2H9a4 4 0 0 0-4 4a4 4 0 0 0 4 4"></svg:path>`,
})
export class MdiFormatPilcrowArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatQuoteCloseIcon],svg[mdi-format-quote-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3z"></svg:path>`,
})
export class MdiFormatQuoteCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatQuoteCloseOutlineIcon],svg[mdi-format-quote-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v8h1.88l-2 4h5.74L21 13.24V6m-6 2h4v4.76L17.38 16h-1.26l2-4H15M3 6v8h1.88l-2 4h5.74L11 13.24V6M5 8h4v4.76L7.38 16H6.12l2-4H5Z"></svg:path>`,
})
export class MdiFormatQuoteCloseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatQuoteOpenIcon],svg[mdi-format-quote-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 7l-2 4h3v6H5v-6l2-4zm8 0l-2 4h3v6h-6v-6l2-4z"></svg:path>`,
})
export class MdiFormatQuoteOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatQuoteOpenOutlineIcon],svg[mdi-format-quote-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18v-8H9.12l2-4H5.38L3 10.76V18m6-2H5v-4.76L6.62 8h1.26l-2 4H9m12 6v-8h-1.88l2-4h-5.74L13 10.76V18m6-2h-4v-4.76L16.62 8h1.26l-2 4H19Z"></svg:path>`,
})
export class MdiFormatQuoteOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatRotate90Icon],svg[mdi-format-rotate-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.34 6.41L.86 12.9l6.49 6.48l6.49-6.48zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66zm15.67-6.26A8.95 8.95 0 0 0 13 4V.76L8.76 5L13 9.24V6c1.79 0 3.58.68 4.95 2.05a7.007 7.007 0 0 1 0 9.9a6.97 6.97 0 0 1-7.79 1.44l-1.49 1.49C10 21.62 11.5 22 13 22c2.3 0 4.61-.88 6.36-2.64a8.98 8.98 0 0 0 0-12.72"></svg:path>`,
})
export class MdiFormatRotate90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatSectionIcon],svg[mdi-format-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.67 4.42a6.1 6.1 0 0 0-3.22-.86c-1.58 0-2.79.78-2.79 2c0 1.4 1.34 1.91 3.34 2.58c2.5.81 4.4 1.83 4.4 4.24a4.01 4.01 0 0 1-1.8 3.23c.65.61 1.01 1.47 1 2.36c0 2.82-2.6 4-5.1 4c-1.46.06-2.91-.33-4.15-1.1L8 19.34c1.04.71 2.27 1.09 3.53 1.1c1.72 0 3-.78 3-2.2c0-1.24-.78-1.93-3.28-2.79C8.5 14.5 6.6 13.5 6.6 11.21c.07-1.32.83-2.52 2-3.14c-.63-.57-.99-1.4-1-2.26C7.6 3.45 9.77 2 12.53 2c1.29 0 2.56.29 3.7.89zm-4.32 9c1.06.33 2.09.76 3.06 1.29c.65-.49 1.02-1.26 1-2.07c0-1-.64-1.88-2.41-2.5c-1.11-.37-2.22-.83-3.28-1.37c-.75.45-1.22 1.26-1.22 2.14c0 .97.73 1.77 2.85 2.51"></svg:path>`,
})
export class MdiFormatSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatSizeIcon],svg[mdi-format-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z"></svg:path>`,
})
export class MdiFormatSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatStrikethroughIcon],svg[mdi-format-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14h18v-2H3m2-8v3h5v3h4V7h5V4m-9 15h4v-3h-4z"></svg:path>`,
})
export class MdiFormatStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatStrikethroughVariantIcon],svg[mdi-format-strikethrough-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.2 9.8c-1.2-2.3.5-5 2.9-5.5c3.1-1 7.6.4 7.5 4.2h-3c0-.3-.1-.6-.1-.8c-.2-.6-.6-.9-1.2-1.1c-.8-.3-2.1-.2-2.8.3C9 8.2 10.4 9.5 12 10H7.4c-.1-.1-.1-.2-.2-.2M21 13v-2H3v2h9.6c.2.1.4.1.6.2c.6.3 1.1.5 1.3 1.1c.1.4.2.9 0 1.3c-.2.5-.6.7-1.1.9c-1.8.5-4-.2-3.9-2.4h-3c-.1 2.6 2.1 4.4 4.5 4.7c3.8.8 8.3-1.6 6.3-5.9z"></svg:path>`,
})
export class MdiFormatStrikethroughVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatSubscriptIcon],svg[mdi-format-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.41L11.41 12L16 16.59L14.59 18L10 13.41L5.41 18L4 16.59L8.59 12L4 7.41L5.41 6L10 10.59L14.59 6zm5.85 13.62h-4.88v-1l.89-.8c.76-.65 1.32-1.19 1.7-1.63c.37-.44.56-.85.57-1.24a.9.9 0 0 0-.27-.7c-.18-.16-.47-.28-.86-.28c-.31 0-.58.06-.84.18l-.66.38l-.45-1.17c.27-.21.59-.39.98-.53s.82-.24 1.29-.24c.78.04 1.38.25 1.78.66s.62.93.62 1.57c-.01.56-.19 1.08-.54 1.55c-.34.47-.76.92-1.27 1.36l-.64.52v.02h2.58z"></svg:path>`,
})
export class MdiFormatSubscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatSuperscriptIcon],svg[mdi-format-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.41L11.41 12L16 16.59L14.59 18L10 13.41L5.41 18L4 16.59L8.59 12L4 7.41L5.41 6L10 10.59L14.59 6zM21.85 9h-4.88V8l.89-.82c.76-.64 1.32-1.18 1.7-1.63q.555-.66.57-1.23a.88.88 0 0 0-.27-.7c-.18-.19-.47-.28-.86-.29c-.31.01-.58.07-.84.17l-.66.39l-.45-1.17c.27-.22.59-.39.98-.53S18.85 2 19.32 2c.78 0 1.38.2 1.78.61c.4.39.62.93.62 1.57c-.01.56-.19 1.08-.54 1.55c-.34.48-.76.93-1.27 1.36l-.64.52v.02h2.58z"></svg:path>`,
})
export class MdiFormatSuperscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextIcon],svg[mdi-format-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 4l1.16 4.35l-.96.26c-.45-.87-.91-1.74-1.44-2.18C16.73 6 16.11 6 15.5 6H13v10.5c0 .5 0 1 .33 1.25c.34.25 1 .25 1.67.25v1H9v-1c.67 0 1.33 0 1.67-.25c.33-.25.33-.75.33-1.25V6H8.5c-.61 0-1.23 0-1.76.43c-.53.44-.99 1.31-1.44 2.18l-.96-.26L5.5 4z"></svg:path>`,
})
export class MdiFormatTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationAngleDownIcon],svg[mdi-format-text-rotation-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 21h-4.22l1.41-1.41l-8.86-8.86l1.45-1.4l8.81 8.86l1.41-1.41M12.61 8l2.62 2.64l2.2-4.87m1.98-.85l-4.46 11.11l-1.45-1.45l.89-2.2l-3.51-3.57l-2.2.94l-1.46-1.5l11.11-4.41Z"></svg:path>`,
})
export class MdiFormatTextRotationAngleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationAngleUpIcon],svg[mdi-format-text-rotation-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.58 9.33v4.22l-1.41-1.41L10.31 21l-1.4-1.41l8.81-8.86l-1.41-1.4M7.59 11l2.63-2.61l-4.88-2.25M4.5 4.22l11.11 4.41l-1.45 1.5l-2.2-.94l-3.57 3.56l.94 2.16l-1.5 1.5L3.42 5.25Z"></svg:path>`,
})
export class MdiFormatTextRotationAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationDownIcon],svg[mdi-format-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 19.73l-3-3h2V4.27h2v12.46h2zm8-10.35v3.75l5.03-1.88zM21 12l-11 4.73v-2.06l2.19-.94V8.77L10 7.83V5.77l11 4.73z"></svg:path>`,
})
export class MdiFormatTextRotationDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationDownVerticalIcon],svg[mdi-format-text-rotation-down-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 4h-1.5L9 15h2.1l.9-2.2h5l.9 2.2H20zm-2.62 7l1.87-5l1.87 5zM5 17.5l3-3H6V2H4v12.5H2zM22 20l-3-3v2H6.5v2H19v2z"></svg:path>`,
})
export class MdiFormatTextRotationDownVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationNoneIcon],svg[mdi-format-text-rotation-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.5 18l-3 3v-2H5v-2h12.5v-2zm-10.37-8h3.75L12 4.97zm2.62-7l4.75 11h-2.08l-.92-2.19h-5L8.58 14H6.5l4.75-11z"></svg:path>`,
})
export class MdiFormatTextRotationNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationUpIcon],svg[mdi-format-text-rotation-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12v1.5l11 4.75v-2.1l-2.2-.9v-5l2.2-.9v-2.1zm7 2.62l-5-1.87l5-1.87zm8-10.37l-3 3h2v12.5h2V7.25h2z"></svg:path>`,
})
export class MdiFormatTextRotationUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationVerticalIcon],svg[mdi-format-text-rotation-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 5h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1zm-2.62 7L15 7l1.87 5zM6 19.75l3-3H7V4.25H5v12.5H3z"></svg:path>`,
})
export class MdiFormatTextRotationVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextVariantIcon],svg[mdi-format-text-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.6 14L12 7.7l2.4 6.3M11 5L5.5 19h2.2l1.1-3H15l1.1 3h2.2L13 5z"></svg:path>`,
})
export class MdiFormatTextVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextVariantOutlineIcon],svg[mdi-format-text-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3c-.82 0-1.56.5-1.86 1.27l-5.5 14C3.12 19.58 4.09 21 5.5 21h2.25c.84 0 1.58-.5 1.87-1.3l.64-1.7h3.48l.64 1.7c.29.8 1.04 1.3 1.87 1.3h2.25c1.41 0 2.38-1.42 1.86-2.73l-5.5-14C14.56 3.5 13.82 3 13 3m-2 2h2l5.5 14h-2.25l-1.13-3H8.87l-1.12 3H5.5M12 7.67L9.62 14h4.75Z"></svg:path>`,
})
export class MdiFormatTextVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextWrappingClipIcon],svg[mdi-format-text-wrapping-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21H5V3h2zM17 3v8H9v2h8v8h2V3z"></svg:path>`,
})
export class MdiFormatTextWrappingClipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextWrappingOverflowIcon],svg[mdi-format-text-wrapping-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21H5V3h2zm7-18h-2v6h2zm0 12h-2v6h2zm5-3l-3-3v2H9v2h7v2z"></svg:path>`,
})
export class MdiFormatTextWrappingOverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextWrappingWrapIcon],svg[mdi-format-text-wrapping-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21H5V3h2zM19 3h-2v18h2zm-6 5H9v2h3.97c.17 0 1.03.16 1.03 2s-.86 2-1 2h-2v-2l-3 3l3 3v-2h2c1.04 0 3-.84 3-4s-1.96-4-3-4"></svg:path>`,
})
export class MdiFormatTextWrappingWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextboxIcon],svg[mdi-format-textbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7V3h-4v1H7V3H3v4h1v10H3v4h4v-1h10v1h4v-4h-1V7zm-3-3h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2zm14 0h-2v-2h2zm-2-3h-1v1H7v-1H6V7h1V6h10v1h1zm-2-9v2h-3v6h-2v-6H8V8z"></svg:path>`,
})
export class MdiFormatTextboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTitleIcon],svg[mdi-format-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h5.5v12h3V7H19V4z"></svg:path>`,
})
export class MdiFormatTitleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatUnderlineIcon],svg[mdi-format-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21h14v-2H5zm7-4a6 6 0 0 0 6-6V3h-2.5v8a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 11V3H6v8a6 6 0 0 0 6 6"></svg:path>`,
})
export class MdiFormatUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatUnderlineWavyIcon],svg[mdi-format-underline-wavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6m8 5c-1.4 0-2.2-.7-2.7-1.3c-.5-.5-.7-.7-1.3-.7s-.8.2-1.3.7c-.5.6-1.3 1.3-2.7 1.3s-2.2-.7-2.7-1.3c-.5-.5-.7-.7-1.3-.7s-.8.2-1.3.7C6.2 21.3 5.4 22 4 22v-2c.6 0 .8-.2 1.3-.7c.5-.6 1.3-1.3 2.7-1.3s2.2.7 2.7 1.3c.5.5.7.7 1.3.7s.8-.2 1.3-.7c.5-.6 1.3-1.3 2.7-1.3s2.2.7 2.7 1.3c.5.5.7.7 1.3.7z"></svg:path>`,
})
export class MdiFormatUnderlineWavyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatVerticalAlignBottomIcon],svg[mdi-format-vertical-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13h-3V3h-2v10H8l4 4zM4 19v2h16v-2z"></svg:path>`,
})
export class MdiFormatVerticalAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatVerticalAlignCenterIcon],svg[mdi-format-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19h3v4h2v-4h3l-4-4zm8-14h-3V1h-2v4H8l4 4zM4 11v2h16v-2z"></svg:path>`,
})
export class MdiFormatVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatVerticalAlignTopIcon],svg[mdi-format-vertical-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z"></svg:path>`,
})
export class MdiFormatVerticalAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatWrapInlineIcon],svg[mdi-format-wrap-inline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 7l5 10H3zM3 3h18v2H3zm18 12v2h-7v-2zM3 19h18v2H3z"></svg:path>`,
})
export class MdiFormatWrapInlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatWrapSquareIcon],svg[mdi-format-wrap-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7l5 10H7zM3 3h18v2H3zm0 4h3v2H3zm18 0v2h-3V7zM3 11h3v2H3zm18 0v2h-3v-2zM3 15h3v2H3zm18 0v2h-3v-2zM3 19h18v2H3z"></svg:path>`,
})
export class MdiFormatWrapSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatWrapTightIcon],svg[mdi-format-wrap-tight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7l5 10H7zM3 3h18v2H3zm0 4h6v2H3zm18 0v2h-6V7zM3 11h4v2H3zm18 0v2h-4v-2zM3 15h3v2H3zm18 0v2h-3v-2zM3 19h18v2H3z"></svg:path>`,
})
export class MdiFormatWrapTightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFormatWrapTopBottomIcon],svg[mdi-format-wrap-top-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7l5 10H7zM3 3h18v2H3zm0 16h18v2H3z"></svg:path>`,
})
export class MdiFormatWrapTopBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForumIcon],svg[mdi-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1m4-6h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiForumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForumMinusIcon],svg[mdi-forum-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2v6.1c1.2.2 2.2.7 3 1.4V7c0-.5-.5-1-1-1M6 17c0 .5.5 1 1 1h5c0-1.1.3-2.1.8-3H6zM16 2H3c-.5 0-1 .5-1 1v14l4-4h8.7c.7-.5 1.5-.8 2.3-.9V3c0-.5-.5-1-1-1m6 15v2h-8v-2z"></svg:path>`,
})
export class MdiForumMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForumMinusOutlineIcon],svg[mdi-forum-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2v6.1c1.2.2 2.2.7 3 1.4V7c0-.5-.5-1-1-1M6 17c0 .5.5 1 1 1h5c0-1.1.3-2.1.8-3H6zM16 2H3c-.5 0-1 .5-1 1v14l4-4h8.7c.7-.5 1.5-.8 2.3-.9V3c0-.5-.5-1-1-1m-1 9H5.2L4 12.2V4h11zm7 6v2h-8v-2z"></svg:path>`,
})
export class MdiForumMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForumOutlineIcon],svg[mdi-forum-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v7H5.17L4 12.17V4zm1-2H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m5 4h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiForumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForumPlusIcon],svg[mdi-forum-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2v6.1c1.2.2 2.2.7 3 1.4V7c0-.5-.5-1-1-1M6 17c0 .5.5 1 1 1h5c0-1.1.3-2.1.8-3H6zM16 2H3c-.5 0-1 .5-1 1v14l4-4h8.7c.7-.5 1.5-.8 2.3-.9V3c0-.5-.5-1-1-1m1 12h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></svg:path>`,
})
export class MdiForumPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForumPlusOutlineIcon],svg[mdi-forum-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2v6.1c1.2.2 2.2.7 3 1.4V7c0-.5-.5-1-1-1M6 17c0 .5.5 1 1 1h5c0-1.1.3-2.1.8-3H6zM16 2H3c-.5 0-1 .5-1 1v14l4-4h8.7c.7-.5 1.5-.8 2.3-.9V3c0-.5-.5-1-1-1m-1 9H5.2L4 12.2V4h11zm2 3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></svg:path>`,
})
export class MdiForumPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForumRemoveIcon],svg[mdi-forum-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2v6.1c1.2.2 2.2.7 3 1.4V7c0-.5-.5-1-1-1M6 17c0 .5.5 1 1 1h5c0-1.1.3-2.1.8-3H6zM16 2H3c-.5 0-1 .5-1 1v14l4-4h8.7c.7-.5 1.5-.8 2.3-.9V3c0-.5-.5-1-1-1m4.12 12.46l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.41-1.42L16.59 18l-2.12-2.12l1.41-1.41L18 16.59z"></svg:path>`,
})
export class MdiForumRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForumRemoveOutlineIcon],svg[mdi-forum-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2v6.1c1.2.2 2.2.7 3 1.4V7c0-.5-.5-1-1-1M6 17c0 .5.5 1 1 1h5c0-1.1.3-2.1.8-3H6zM16 2H3c-.5 0-1 .5-1 1v14l4-4h8.7c.7-.5 1.5-.8 2.3-.9V3c0-.5-.5-1-1-1m-1 9H5.2L4 12.2V4h11zm5.12 3.46l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.41-1.42L16.59 18l-2.12-2.12l1.41-1.41L18 16.59z"></svg:path>`,
})
export class MdiForumRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForwardIcon],svg[mdi-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V4l8 8l-8 8v-4H4V8z"></svg:path>`,
})
export class MdiForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiForwardburgerIcon],svg[mdi-forwardburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13H3v-2h16l-4-4l1.4-1.4l6.4 6.4l-6.4 6.4L15 17zM3 6h10v2H3zm10 10v2H3v-2z"></svg:path>`,
})
export class MdiForwardburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFountainIcon],svg[mdi-fountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2C4.47 2 2 4.46 2 7.5V8h2v-.5A3.5 3.5 0 0 1 7.5 4c1.5 0 2.76.93 3.26 2.24Q10.175 6 9.5 6c-1.39 0-2.6.82-3.16 2l1.74 1c.21-.58.77-1 1.42-1A1.5 1.5 0 0 1 11 9.5V11h2V9.5A1.5 1.5 0 0 1 14.5 8c.66 0 1.21.42 1.42 1l1.74-1c-.56-1.18-1.76-2-3.16-2q-.675 0-1.26.24C13.74 4.93 15 4 16.5 4A3.5 3.5 0 0 1 20 7.5V8h2v-.5A5.5 5.5 0 0 0 16.5 2c-1.86 0-3.5.93-4.5 2.34C11 2.93 9.36 2 7.5 2M6 12v2h1.42c.5 1.15 1.43 2.07 2.58 2.57V19H2s.82 1.23 1.41 2.11c.37.56.99.89 1.66.89h13.86c.67 0 1.29-.33 1.66-.89L22 19h-8v-2.43c1.15-.5 2.08-1.42 2.58-2.57H18v-2z"></svg:path>`,
})
export class MdiFountainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFountainPenIcon],svg[mdi-fountain-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.95 14.93l4.24-5.66l8.49-7.07c.39-.39 1.04-.39 1.41 0l.71.71c.39.37.39 1.02 0 1.41l-7.07 8.49l-5.66 4.24zm1.41 2.83l-2.12-2.12l-2.83 1.41L2 21.29l2.12-2.12c.2-.17.51-.17.71 0c.17.2.17.51 0 .71L2.71 22l4.24-1.41z"></svg:path>`,
})
export class MdiFountainPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFountainPenTipIcon],svg[mdi-fountain-pen-tip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.54 3.5l4.96 4.97l-1.43 1.41l-4.95-4.95zM3.5 19.78l6.5-6.47c-.1-.31-.03-.7.23-.96c.39-.39 1.03-.39 1.42 0c.39.4.39 1.03 0 1.42c-.26.26-.65.33-.96.23l-6.47 6.5l10.61-3.55l3.53-6.36l-4.94-4.95l-6.37 3.53z"></svg:path>`,
})
export class MdiFountainPenTipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFoursquareIcon],svg[mdi-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17 5l-.43 2.5c-.07.23-.37.5-.66.5H12c-.47 0-1.05.32-1.05.79v.41c0 .47.58.8 1.05.8h3.28c.33 0 .65.36.58.71c-.07.36-.92 2.57-.96 2.79c-.04.17-.26.5-.65.5h-2.88c-.52 0-.68.07-1.03.5c-.34.44-3.07 3.6-3.07 3.6c-.03.03-.27-.06-.27-.1V5c0-.3.61-1 1-1h8.5c.32 0 .58.61.5 1m0 9.45c.11-.48 1.78-7.73 2.22-9.9M17.58 2H6.91C5.43 2 5 3.11 5 3.8v16.96c0 .78.42 1.08.66 1.17c.24.1.89.18 1.28-.27c0 0 4.71-5.44 4.8-5.53c.13-.13.13-.13.26-.13h3.26c1.37 0 1.59-1 1.74-1.55c.11-.48 1.78-7.73 2.22-9.9c.34-1.66-.08-2.55-1.64-2.55z" fill="currentColor"></svg:path>`,
})
export class MdiFoursquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFractionOneHalfIcon],svg[mdi-fraction-one-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.79 21.61l-1.58-1.22l14-18l1.58 1.22zM4 2v2h2v8h2V2zm11 10v2h4v2h-2c-1.1 0-2 .9-2 2v4h6v-2h-4v-2h2c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiFractionOneHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFreebsdIcon],svg[mdi-freebsd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.69 2c.85-.05 3.39 1.16 3.44 1.19c-1.29.81-2.39 1.9-3.22 3.19C2.09 4.81 1.34 2.91 2 2.25c.17-.17.4-.25.69-.25m18.15.13c.41-.05.74.01.94.21c1.07 1.08-1.9 5.81-2.4 6.32c-.51.5-1.81.04-2.88-1.03c-1.07-1.08-1.53-2.37-1.03-2.88c.41-.41 3.62-2.45 5.37-2.62M12 2.56c1.29 0 2.53.26 3.66.72c-.49.32-.85.57-.97.69c-.99.99-.55 2.86 1.03 4.44c.98.97 2.12 1.56 3.06 1.56c.68 0 1.14-.29 1.38-.53c.17-.17.44-.56.75-1.03c.51 1.18.78 2.47.78 3.84c0 5.36-4.33 9.72-9.69 9.72s-9.69-4.36-9.69-9.72A9.68 9.68 0 0 1 12 2.56"></svg:path>`,
})
export class MdiFreebsdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFrenchFriesIcon],svg[mdi-french-fries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11V6h-3V4h-3V2H8v3H6v6H5l2 11h10l2-11zm-2.14 0c-.16.61-.46 1.16-.86 1.62v-4l2 1V11zM17 7v1.5l-2-1V7zm-5-2h2v3.5l-2 1zm0 5.62l2-1v3.83c-.59.35-1.27.55-2 .55zm-1 3.24c-.79-.21-1.5-.64-2-1.24v-3l2-1zM9 3h2v4.5L10 8V5H9zM7 6h2v2.5L8 9v2H7z"></svg:path>`,
})
export class MdiFrenchFriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFrequentlyAskedQuestionsIcon],svg[mdi-frequently-asked-questions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15H6l-4 4V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m5-6v14l-4-4H8a1 1 0 0 1-1-1v-1h14V8h1a1 1 0 0 1 1 1M8.19 4c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2zm6 2h2v-2h-2zm0-9v6h2V4z"></svg:path>`,
})
export class MdiFrequentlyAskedQuestionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIcon],svg[mdi-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z"></svg:path>`,
})
export class MdiFridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeAlertIcon],svg[mdi-fridge-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h10a2 2 0 0 1 2 2v5H3V4c0-1.1.9-2 2-2m12 17c0 1.11-.89 2-2 2v1h-2v-1H7v1H5v-1a2 2 0 0 1-2-2v-9h14zM6 5v2h2V5zm0 7v3h2v-3zm13 3h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiFridgeAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeAlertOutlineIcon],svg[mdi-fridge-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v1H5v-1a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v15c0 1.11-.89 2-2 2v1h-2v-1zM5 4v5h10V4zm0 15h10v-8H5zm1-7h2v3H6zm0-6h2v2H6zm13 9h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiFridgeAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeBottomIcon],svg[mdi-fridge-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 4h2v2H8zm-1 5h10v8H7zm1 1v3h2v-3z"></svg:path>`,
})
export class MdiFridgeBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIndustrialIcon],svg[mdi-fridge-industrial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-7 13H8v-5h2z"></svg:path>`,
})
export class MdiFridgeIndustrialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIndustrialAlertIcon],svg[mdi-fridge-industrial-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H5c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M8 15H6v-5h2zm13-8v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiFridgeIndustrialAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIndustrialAlertOutlineIcon],svg[mdi-fridge-industrial-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15H6v-5h2zm9-11v15c0 1.11-.89 2-2 2v1h-2v-1H7v1H5v-1a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2m-2 0H5v15h10zm4 13h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiFridgeIndustrialAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIndustrialOffIcon],svg[mdi-fridge-industrial-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.8L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2zm3.11 5.66l-1.27 1.27l-2.38-2.38c-.36.4-.88.65-1.46.65v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2V6.89L1.11 3l1.28-1.27zM10 11.89L8.11 10H8v5h2z"></svg:path>`,
})
export class MdiFridgeIndustrialOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIndustrialOffOutlineIcon],svg[mdi-fridge-industrial-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.2 4L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2v11.8l-2-2V4zm14.91 17.46l-1.27 1.27l-2.38-2.38c-.36.4-.88.65-1.46.65v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2V6.89L1.11 3l1.28-1.27zM17 18.89l-7-7V15H8v-5h.11L7 8.89V19h10z"></svg:path>`,
})
export class MdiFridgeIndustrialOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIndustrialOutlineIcon],svg[mdi-fridge-industrial-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 17H7V4h10zm-7-4H8v-5h2z"></svg:path>`,
})
export class MdiFridgeIndustrialOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeOffIcon],svg[mdi-fridge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V9h2.11l1 1H5v9a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c.58 0 1.1-.25 1.46-.65l2.38 2.38zM10 15H8v-3h2zm9 .8L13.2 10H19zM8.2 5L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2v5h-6.8L10 6.8V5z"></svg:path>`,
})
export class MdiFridgeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeOffOutlineIcon],svg[mdi-fridge-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V19a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c.58 0 1.1-.25 1.46-.65l2.38 2.38zM17 19H7v-8h2.11L17 18.89zM7.2 4L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2v11.8l-2-2V11h-2.8l-2-2H17V4zm.8 8h2v3H8z"></svg:path>`,
})
export class MdiFridgeOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeOutlineIcon],svg[mdi-fridge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21v1H7v-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2v1h-2v-1zM7 4v5h10V4zm0 15h10v-8H7zm1-7h2v3H8zm0-6h2v2H8z"></svg:path>`,
})
export class MdiFridgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeTopIcon],svg[mdi-fridge-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V6h2v2zM7 2h10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v5h10V4zm1 8v3h2v-3z"></svg:path>`,
})
export class MdiFridgeTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeVariantIcon],svg[mdi-fridge-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4v15c0 1.11-.89 2-2 2v1h-2v-1h-2.5V2H17a2 2 0 0 1 2 2M7 2h4.5v19H9v1H7v-1a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m3 8H7v4h3z"></svg:path>`,
})
export class MdiFridgeVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeVariantAlertIcon],svg[mdi-fridge-variant-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v15c0 1.11-.89 2-2 2v1h-2v-1h-2.5V2H15a2 2 0 0 1 2 2M5 2h4.5v19H7v1H5v-1a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m3 8H5v4h3zm11-3v6h2V7zm0 10h2v-2h-2z"></svg:path>`,
})
export class MdiFridgeVariantAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeVariantAlertOutlineIcon],svg[mdi-fridge-variant-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H5c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M9 19H5v-5h3v-4H5V4h4zm6 0h-4V4h4zm4-4h2v2h-2zm2-8v6h-2V7z"></svg:path>`,
})
export class MdiFridgeVariantAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeVariantOffIcon],svg[mdi-fridge-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3L5 6.89V19a2 2 0 0 0 2 2v1h2v-1h2.5v-7.61l1 1V21H15v1h2v-1c.58 0 1.1-.25 1.46-.65l2.38 2.38l1.27-1.27zM10 14H7v-4h1.11L10 11.89zm9 1.8l-6.5-6.5V2H17a2 2 0 0 1 2 2zm-7.5-7.5L5.7 2.5c.35-.31.8-.5 1.3-.5h4.5z"></svg:path>`,
})
export class MdiFridgeVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeVariantOffOutlineIcon],svg[mdi-fridge-variant-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.2 4L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2v11.8l-2-2V4h-4v5.8l-2-2V4zm14.91 17.46l-1.27 1.27l-2.38-2.38c-.36.4-.88.65-1.46.65v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2V6.89L1.11 3l1.28-1.27zM7 10h1.11L7 8.89zm4 2.89l-1-1V14H7v5h4zm6 6l-4-4V19h4z"></svg:path>`,
})
export class MdiFridgeVariantOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeVariantOutlineIcon],svg[mdi-fridge-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M7 19v-5h3v-4H7V4h4v15zm10 0h-4V4h4z"></svg:path>`,
})
export class MdiFridgeVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitCherriesIcon],svg[mdi-fruit-cherries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13h-.5c-.7-1.3-1.2-3-1.7-4.7l.9.9c2.7 2.1 5.1 1.7 5.1 1.7s.7-3.8-2-5.8c-2.3-1.8-4.4-1.8-5-1.7c-.1-.6-.1-1.1-.2-1.5l-1.4.1c0 3.2-2.7 9.1-3.6 11c-2 .2-3.6 1.9-3.6 4c0 2.2 1.8 4 4 4c1.1 0 2-.4 2.7-1.1c-.4-.9-.7-1.9-.7-2.9s.3-2 .7-2.9c-.4-.4-1-.7-1.5-.9c.7-1.5 1.9-4.2 2.7-6.8c.4 2.3 1.2 5 2.2 7.1c-1.2.7-2.1 2-2.1 3.5c0 2.2 1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m-8 2.5c-.8 0-1.5.7-1.5 1.5h-1c0-1.4 1.1-2.5 2.5-2.5zm8 0c-.8 0-1.5.7-1.5 1.5h-1c0-1.4 1.1-2.5 2.5-2.5z"></svg:path>`,
})
export class MdiFruitCherriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitCherriesOffIcon],svg[mdi-fruit-cherries-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l7.6 7.6c-.4 1-.8 1.9-1.1 2.4c-2 .2-3.6 1.9-3.6 4c0 2.2 1.8 4 4 4c1.1 0 2-.4 2.7-1.1c-.4-.9-.7-1.9-.7-2.9s.3-2 .7-2.9c-.4-.4-1-.7-1.5-.9c.2-.4.4-.9.7-1.5l2.9 2.9c-.5.7-.8 1.5-.8 2.4c0 2.2 1.8 4 4 4c.9 0 1.7-.3 2.3-.8l2.5 2.5zM8 15.5c-.8 0-1.5.7-1.5 1.5h-1c0-1.4 1.1-2.5 2.5-2.5zm6.5 1.5h-1c0-.5.1-.9.3-1.3l.8.8c-.1.2-.1.3-.1.5m5.5-.2L16.2 13c2 .1 3.7 1.8 3.8 3.8m-8.7-8.7l-1.2-1.2c.6-1.8 1.1-3.6 1.1-4.9l1.4-.1c.1.4.1.9.2 1.5c.6-.1 2.7-.1 5 1.7c2.7 2 2 5.8 2 5.8s-2.4.4-5.1-1.7l-.9-.9c.3 1.2.7 2.4 1.1 3.4l-2.3-2.3c-.3-1-.5-2-.7-3c-.2.6-.4 1.2-.6 1.7"></svg:path>`,
})
export class MdiFruitCherriesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitCitrusIcon],svg[mdi-fruit-citrus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15.9c-2.1-.2-3.9-1-5-2.3c-.8 0-1.6-.5-1.9-1.3s0-1.6.7-2.1c.1-3 2.8-6.1 6.9-7.5S18 2.1 20 4.4c.8 0 1.6.5 1.9 1.3s0 1.6-.7 2.1q0 1.2-.6 2.4C19.4 9.5 18 9 16.5 9c-3.9 0-7.2 3-7.5 6.9m13 .6c0 3-2.5 5.5-5.5 5.5S11 19.5 11 16.5s2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5M13.3 18l2.3-1.5l-2.3-1.5q-.3.75-.3 1.5c0 .75.1 1 .3 1.5m2.7-.6l-2.1 1.4c.5.6 1.3 1 2.1 1.2zm0-4.3c-.8.1-1.6.5-2.1 1.2l2.1 1.4zm1 2.5l2.1-1.4c-.5-.6-1.3-1-2.1-1.2zm2.1 3.2L17 17.4v2.5c.8-.1 1.6-.5 2.1-1.1m.9-2.3q0-.75-.3-1.5l-2.3 1.5l2.3 1.5q.3-.75.3-1.5"></svg:path>`,
})
export class MdiFruitCitrusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitCitrusOffIcon],svg[mdi-fruit-citrus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3.3 3.3c-1 1.2-1.5 2.6-1.6 3.9c-.7.5-1 1.3-.7 2.1s1.1 1.3 1.9 1.3c1.1 1.3 2.9 2.1 5 2.3c.1-1.4.6-2.6 1.3-3.7l1.5 1.5c-.5.8-.8 1.8-.8 2.8c0 3 2.5 5.5 5.5 5.5c1 0 2-.3 2.8-.8l1.5 1.5zm-9.1-5c0-.5.1-.9.3-1.4l1.7 1.7l-1.7 1.2q-.3-.75-.3-1.5m.9 2.3l1.8-1.2l.3.3V20c-.8-.2-1.6-.6-2.1-1.2m3.1 1.1v-1l.8.8c-.3.1-.5.2-.8.2m3-3.1v-.3q0-.75-.3-1.5l-.9.6l-.7-.7l1-.7c-.5-.6-1.3-1-2.1-1.2v.8l-2.4-2.4c.6-.2 1.3-.4 1.9-.4c3 0 5.5 2.5 5.5 5.5c0 .7-.1 1.3-.4 1.9zm-7-7L7.1 3.9c.8-.5 1.7-.9 2.6-1.2C13.8 1.3 18 2.1 20 4.4c.8 0 1.6.5 1.9 1.3s0 1.6-.7 2.1q0 1.2-.6 2.4C19.4 9.5 18 9 16.5 9c-1.2 0-2.4.3-3.5.8"></svg:path>`,
})
export class MdiFruitCitrusOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitGrapesIcon],svg[mdi-fruit-grapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-7-2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-2.5-4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-5 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m5 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-5 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m2.5 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m2.4-15.8L13.6 1c-2.2 1-2.4 4.6-2.4 5h1.5c.1-.8.4-3.3 1.7-3.8"></svg:path>`,
})
export class MdiFruitGrapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitGrapesOutlineIcon],svg[mdi-fruit-grapes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12c0-1.39-.95-2.53-2.22-2.88A2.996 2.996 0 0 0 14 5c-.43 0-.83.1-1.19.26c.19-1.07.58-2.67 1.59-3.06L13.6 1c-1.7.77-2.2 3.09-2.34 4.29C10.87 5.11 10.45 5 10 5a2.996 2.996 0 0 0-2.78 4.12C5.94 9.46 5 10.62 5 12c0 1.39.95 2.54 2.23 2.88c-.14.34-.23.72-.23 1.12c0 1.39.94 2.54 2.22 2.88A2.996 2.996 0 0 0 12 23a2.996 2.996 0 0 0 2.78-4.12A2.974 2.974 0 0 0 17 16c0-.4-.08-.77-.23-1.12A2.98 2.98 0 0 0 19 12m-2.69-2.12v.02h-.01zM14 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-.5 5.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5M10 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S8.5 8.83 8.5 8s.67-1.5 1.5-1.5M6.5 12c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m2 4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m3.5 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class MdiFruitGrapesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitPearIcon],svg[mdi-fruit-pear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-3 2-3 2-6c0-1.44.75-2.78 2-3.5c.4-.23.82-.38 1.25-.46V5c0-.37-.08-.58-.22-.72C10.9 4.14 10.63 4 10 4V2.5c.88 0 1.6.23 2.09.72s.66 1.16.66 1.78v1.04c.43.08.86.23 1.25.46c1.25.72 2 2.06 2 3.5c0 3 2 3 2 6"></svg:path>`,
})
export class MdiFruitPearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitPineappleIcon],svg[mdi-fruit-pineapple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 7.7C16.4 6.4 19 7 19 7c-1.8-2.4-3.9-2.3-5.4-1.8V5c1.1-1.6 3.3-1.5 3.3-1.5c-1.6-1.4-3-1-3.9-.5c-.5-1.2-1-2-1-2c-.4.7-.7 1.4-1 2.1c-.9-.6-2.4-1-4 .4c0 0 2.3 0 3.4 1.7C8.9 4.7 6.8 4.6 5 7c0 0 2.6-.6 4.6.7C7.5 8.9 6 11.7 6 15c0 4.4 2.7 8 6 8s6-3.6 6-8c0-3.3-1.5-6.1-3.6-7.3m1.4 9.1c-.1.4-.2.8-.4 1.2L14 16l-1.5 2l1.6 2.1c-.3.2-.5.4-.8.6L12 19l-1.3 1.7c-.3-.1-.6-.3-.8-.6l1.6-2.1l-1.5-2l-1.5 1.9c-.1-.4-.3-.8-.4-1.2L9.5 15l-1.3-1.8c.1-.4.2-.8.4-1.2l1.4 2l1.5-2l-1.6-2.1c.3-.2.5-.4.8-.6L12 11l1.3-1.7c.3.1.6.3.8.6L12.5 12l1.5 2l1.5-1.9c.1.4.3.8.4 1.2L14.5 15zM12 13l1.5 2l-1.5 2l-1.5-2z"></svg:path>`,
})
export class MdiFruitPineappleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFruitWatermelonIcon],svg[mdi-fruit-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.4 16.4c3.4-3.4 3.4-8.9 0-12.2L4.2 16.4c3.3 3.4 8.8 3.4 12.2 0M16 7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-4 0c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-4 2c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m10.6 1.6c-4.6 4.6-12 4.6-16.6 0l1.4-1.4c3.8 3.8 9.9 3.8 13.7 0s3.8-9.9 0-13.7L18.6 2c4.5 4.6 4.5 12 0 16.6"></svg:path>`,
})
export class MdiFruitWatermelonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFuelIcon],svg[mdi-fuel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h3c.28 0 .53.11.71.29l2.08 2.09l.8-.79C10 3.2 10.5 3 11 3h6c.5 0 1 .2 1.41.59l1 1C19.8 5 20 5.5 20 6v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8c0-.5.2-1 .59-1.41l.79-.8L5.59 4H3zm8 3v2h6V5zm.41 6l-2-2H8v1.41l2 2v3.18l-2 2V19h1.41l2-2h3.18l2 2H18v-1.41l-2-2v-3.18l2-2V9h-1.41l-2 2zm.59 2h2v2h-2z"></svg:path>`,
})
export class MdiFuelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFuelCellIcon],svg[mdi-fuel-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-1h6v1c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-1c1.1 0 2-.9 2-2H11V5H8V3zm10 0v2h-3v2h9c0-1.1-.9-2-2-2h-2V3zM7 7v4h2l-3 6v-4H4zm6 2v2h9V9zm0 4v2h9v-2z"></svg:path>`,
})
export class MdiFuelCellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
