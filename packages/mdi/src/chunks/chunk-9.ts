import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMagicStaffIcon],svg[mdi-magic-staff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 9a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m-3.07-.85L2 20.59L3.41 22L15.85 9.57c-.6-.33-1.09-.82-1.42-1.42M13 5l.63-1.37L15 3l-1.37-.63L13 1l-.62 1.37L11 3l1.38.63zm8 0l.63-1.37L23 3l-1.37-.63L21 1l-.62 1.37L19 3l1.38.63zm0 4l-.62 1.37L19 11l1.38.63L21 13l.63-1.37L23 11l-1.37-.63z"></svg:path>`,
})
export class MdiMagicStaffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnetIcon],svg[mdi-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v6a9 9 0 0 0 9 9a9 9 0 0 0 9-9V7h-4v6a5 5 0 0 1-5 5a5 5 0 0 1-5-5V7m10-2h4V2h-4M3 5h4V2H3"></svg:path>`,
})
export class MdiMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnetOnIcon],svg[mdi-magnet-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v6a9 9 0 0 0 9 9a9 9 0 0 0 9-9V7h-4v6a5 5 0 0 1-5 5a5 5 0 0 1-5-5V7m10-2h4V2h-4M3 5h4V2H3m10-.5L9 9h2v5.5L15 7h-2z"></svg:path>`,
})
export class MdiMagnetOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyIcon],svg[mdi-magnify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"></svg:path>`,
})
export class MdiMagnifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyCloseIcon],svg[mdi-magnify-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a7 7 0 0 1 7 7c0 1.5-.5 3-1.39 4.19l.8.81H16l6 6l-2 2l-6-6v-.59l-.81-.8A7.07 7.07 0 0 1 9 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7m2.12 3.46L9 7.59L6.88 5.46L5.46 6.88L7.59 9l-2.13 2.12l1.42 1.42L9 10.41l2.12 2.13l1.42-1.42L10.41 9l2.13-2.12z"></svg:path>`,
})
export class MdiMagnifyCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyExpandIcon],svg[mdi-magnify-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h-.58l-.81-.81A7.07 7.07 0 0 0 18 11c0-3.87-3.13-7-7-7c-1.5 0-3 .5-4.21 1.4c-3.09 2.32-3.72 6.71-1.4 9.8s6.71 3.72 9.8 1.4l.81.81V18l5 5l2-2zm-7 0c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5M3 6L1 8V1h7L6 3H3zm18-5v7l-2-2V3h-3l-2-2zM6 19l2 2H1v-7l2 2v3z"></svg:path>`,
})
export class MdiMagnifyExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyMinusIcon],svg[mdi-magnify-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a7 7 0 0 1 7 7c0 1.57-.5 3-1.39 4.19l.8.81H16l6 6l-2 2l-6-6v-.59l-.81-.8A6.9 6.9 0 0 1 9 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7M5 8v2h8V8z"></svg:path>`,
})
export class MdiMagnifyMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyMinusCursorIcon],svg[mdi-magnify-minus-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4a7 7 0 0 1 7 7c0 1.5-.5 3-1.39 4.19l.81.81H18l5 5l-2 2l-5-5v-.59l-.81-.81c-3.09 2.32-7.48 1.69-9.8-1.4S3.7 7.72 6.79 5.4C8 4.5 9.5 4 11 4m-4 6v2h8v-2zM1 1v7l7-7z"></svg:path>`,
})
export class MdiMagnifyMinusCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyMinusOutlineIcon],svg[mdi-magnify-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 0 0 9.5 3A6.5 6.5 0 0 0 3 9.5A6.5 6.5 0 0 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5l1.5-1.5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5S14 7 14 9.5S12 14 9.5 14M7 9h5v1H7z"></svg:path>`,
})
export class MdiMagnifyMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyPlusIcon],svg[mdi-magnify-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a7 7 0 0 1 7 7c0 1.57-.5 3-1.39 4.19l.8.81H16l6 6l-2 2l-6-6v-.59l-.81-.8A6.9 6.9 0 0 1 9 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7M8 5v3H5v2h3v3h2v-3h3V8h-3V5z"></svg:path>`,
})
export class MdiMagnifyPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyPlusCursorIcon],svg[mdi-magnify-plus-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4a7 7 0 0 1 7 7c0 1.5-.5 3-1.39 4.19l.81.81H18l5 5l-2 2l-5-5v-.59l-.81-.81c-3.09 2.32-7.48 1.69-9.8-1.4S3.7 7.72 6.79 5.4C8 4.5 9.5 4 11 4m-1 3v3H7v2h3v3h2v-3h3v-2h-3V7zM1 1v7l7-7z"></svg:path>`,
})
export class MdiMagnifyPlusCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyPlusOutlineIcon],svg[mdi-magnify-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.5 14l5 5l-1.5 1.5l-5-5v-.79l-.27-.28A6.47 6.47 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27zm-6 0C12 14 14 12 14 9.5S12 5 9.5 5S5 7 5 9.5S7 14 9.5 14m2.5-4h-2v2H9v-2H7V9h2V7h1v2h2z"></svg:path>`,
})
export class MdiMagnifyPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyRemoveCursorIcon],svg[mdi-magnify-remove-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v7l7-7zm17 15h-.58l-.81-.81A7.07 7.07 0 0 0 18 11c0-3.87-3.13-7-7-7c-1.5 0-3 .5-4.21 1.4c-3.09 2.32-3.72 6.71-1.4 9.8s6.71 3.72 9.8 1.4l.81.81V18l5 5l2-2zm-3.4-2.84l-1.42 1.42l-2.12-2.13l-2.12 2.13l-1.44-1.42l2.15-2.12L7.5 8.92L8.94 7.5l2.12 2.13l2.12-2.13l1.42 1.42l-2.13 2.12z"></svg:path>`,
})
export class MdiMagnifyRemoveCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyRemoveOutlineIcon],svg[mdi-magnify-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5l1.5-1.5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5S14 7 14 9.5S12 14 9.5 14m1.41-2.38L9.5 10.21l-1.41 1.41l-.71-.71L8.79 9.5L7.38 8.09l.71-.71L9.5 8.79l1.41-1.41l.71.71l-1.41 1.41l1.41 1.41z"></svg:path>`,
})
export class MdiMagnifyRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyScanIcon],svg[mdi-magnify-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22v-2h3v-3h2v3.5c0 .39-.16.74-.46 1.04s-.65.46-1.04.46zM7 22H3.5c-.39 0-.74-.16-1.04-.46S2 20.89 2 20.5V17h2v3h3zM17 2h3.5c.39 0 .74.16 1.04.46s.46.65.46 1.04V7h-2V4h-3zM7 2v2H4v3H2V3.5c0-.39.16-.74.46-1.04S3.11 2 3.5 2zm3.5 4C13 6 15 8 15 10.5c0 .88-.25 1.7-.69 2.4l3.26 3.26l-1.41 1.41l-3.26-3.26c-.7.44-1.52.69-2.4.69C8 15 6 13 6 10.5S8 6 10.5 6m0 2a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class MdiMagnifyScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailIcon],svg[mdi-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-3 13H7v-2h10m0-2H7v-2h10m3-2h-3V6h3"></svg:path>`,
})
export class MdiMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailRuIcon],svg[mdi-mail-ru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15.45 11.91c-.11-2.21-1.75-3.54-3.73-3.54h-.08c-2.29 0-3.55 1.8-3.55 3.84c0 2.29 1.53 3.74 3.54 3.74c2.25 0 3.72-1.65 3.83-3.59m-3.81-5.97c1.53 0 2.97.68 4.02 1.74c0-.51.33-.89.83-.89h.11c.74 0 .89.7.89.92v7.9c-.04.52.54.78.87.44c1.27-1.29 2.78-6.69-.79-9.81c-3.33-2.92-7.8-2.44-10.18-.8c-2.52 1.74-4.14 5.61-2.57 9.22c1.71 3.95 6.61 5.13 9.52 3.95c1.48-.59 2.15 1.4.65 2.05c-2.34.99-8.77.89-11.78-4.32c-2.03-3.52-1.93-9.71 3.46-12.92C10.81 1.42 16.24 2.1 19.5 5.5c3.45 3.6 3.25 10.3-.1 12.91c-1.51 1.18-3.76.03-3.74-1.7l-.02-.56a5.611 5.611 0 0 1-3.99 1.66C8.63 17.81 6 15.15 6 12.13c0-3.05 2.63-5.74 5.65-5.74z" fill="currentColor"></svg:path>`,
})
export class MdiMailRuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxIcon],svg[mdi-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H7a5 5 0 0 0-5 5v11h18a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H4V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3zm9-3h-2v-2h-4v-2h6zM9 11H5V9h4z"></svg:path>`,
})
export class MdiMailboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOpenIcon],svg[mdi-mailbox-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v9H5V9a3 3 0 0 1 3-3m6 5h6v4h-2v-2h-4z"></svg:path>`,
})
export class MdiMailboxOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOpenOutlineIcon],svg[mdi-mailbox-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h6v4h-2v-2h-4zm4-7H8a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H5V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3zm10 0h-8V9c0-1.08-.35-2.14-1-3h6a3 3 0 0 1 3 3z"></svg:path>`,
})
export class MdiMailboxOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOpenUpIcon],svg[mdi-mailbox-open-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v9H5V9a3 3 0 0 1 3-3m5 7V7h4v2h-2v4z"></svg:path>`,
})
export class MdiMailboxOpenUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOpenUpOutlineIcon],svg[mdi-mailbox-open-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12.85v-6h4v2h-2v4zm4-9H8a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2v-9a5 5 0 0 0-5-5m-7 14H5v-9a3 3 0 0 1 3-3a3 3 0 0 1 3 3zm10 0h-8v-9c0-1.09-.35-2.14-1-3h6a3 3 0 0 1 3 3z"></svg:path>`,
})
export class MdiMailboxOpenUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOutlineIcon],svg[mdi-mailbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H7a5 5 0 0 0-5 5v11h18a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H4V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3zm10 0h-8V9c0-1.08-.35-2.14-1-3h6a3 3 0 0 1 3 3zm-7-7v2h4v2h2v-4zm-4 0H5V9h4z"></svg:path>`,
})
export class MdiMailboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxUpIcon],svg[mdi-mailbox-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9h4v2H5zm17 0v9a2 2 0 0 1-2 2H2V9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5M10 9a3 3 0 0 0-3-3a3 3 0 0 0-3 3v9h6zm6-2h-4v6h2V9h2z"></svg:path>`,
})
export class MdiMailboxUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxUpOutlineIcon],svg[mdi-mailbox-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H7a5 5 0 0 0-5 5v11h18a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H4V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3zm10 0h-8V9c0-1.08-.35-2.14-1-3h6a3 3 0 0 1 3 3zm-7-5h2V9h2V7h-4zm-4-2H5V9h4z"></svg:path>`,
})
export class MdiMailboxUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiManjaroIcon],svg[mdi-manjaro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h5.6V7.6h7.2V2zm7.2 7.2V22h5.6V9.2zM16.4 2v20H22V2z"></svg:path>`,
})
export class MdiManjaroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapIcon],svg[mdi-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 19l-6-2.11V5l6 2.11M20.5 3h-.16L15 5.1L9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5c.05 0 .11 0 .16-.03L9 18.9l6 2.1l5.64-1.9c.21-.1.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class MdiMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapCheckIcon],svg[mdi-map-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.25 22l-2.75-3l1.16-1.18l1.59 1.59l3.59-3.59L23 17.23M20.5 3a.5.5 0 0 1 .5.5v9.86c-.64-.23-1.31-.36-2-.36c-1.54 0-2.94.6-4 1.56V7.1L9 5v11.9l4.04 1.4c-.04.24-.04.47-.04.7c0 .46.06.92.16 1.36L9 18.9l-5.34 2.07c-.07.03-.11.03-.16.03a.5.5 0 0 1-.5-.5V5.38c0-.23.16-.41.35-.48L9 3l6 2.1L20.33 3"></svg:path>`,
})
export class MdiMapCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapCheckOutlineIcon],svg[mdi-map-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.25 22l-2.75-3l1.16-1.18l1.59 1.59l3.59-3.59L23 17.23zM20.5 3a.5.5 0 0 1 .5.5v9.84c-.63-.22-1.3-.34-2-.34V5.7l-3 1.16v6.94c-.8.47-1.5 1.11-2 1.88V6.87l-4-1.4v11.66l3.05 1.07l-.05.8c0 .46.05.92.15 1.35L9 18.9l-5.34 2.07l-.16.03a.5.5 0 0 1-.5-.5V5.38c0-.23.15-.41.36-.48L9 3l6 2.1l5.34-2.07zM5 6.46v11.85l3-1.16V5.45z"></svg:path>`,
})
export class MdiMapCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapClockIcon],svg[mdi-map-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h1.5v4.25l2.86 1.69l-.75 1.22L15 17zm8 4a7 7 0 0 1-7 7c-3 0-5.6-1.92-6.58-4.6L8 17.9l-5.34 2.07l-.16.03a.5.5 0 0 1-.5-.5V4.38c0-.23.15-.41.36-.48L8 2l6 2.1L19.34 2h.16a.5.5 0 0 1 .5.5v7.75c1.81 1.25 3 3.37 3 5.75M9 16c0-3.17 2.11-5.85 5-6.71V6.11L8 4v11.89l1 .35zm7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiMapClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapClockOutlineIcon],svg[mdi-map-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h1.5v4.25l2.86 1.69l-.75 1.22L15 17zm1-3c.69 0 1.37.1 2 .29V4.7l-3 1.16v3.21c.33-.07.66-.07 1-.07m7 7a7 7 0 0 1-7 7c-3 0-5.6-1.92-6.58-4.6L8 17.9l-5.34 2.07l-.16.03a.5.5 0 0 1-.5-.5V4.38c0-.23.15-.41.36-.48L8 2l6 2.1l5.34-2.07l.16-.03a.5.5 0 0 1 .5.5v7.75c1.81 1.25 3 3.37 3 5.75M9 16c0-2.79 1.63-5.2 4-6.33v-3.8l-4-1.4v11.66zm7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5M4 5.46v11.85l3-1.16V4.45z"></svg:path>`,
})
export class MdiMapClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapLegendIcon],svg[mdi-map-legend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5l.16-.03L9 18.9l6 2.1l5.64-1.9c.21-.07.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5l-.16.03L15 5.1zM8 5.45v11.7l-3 1.16V6.46zm2 .02l4 1.4v11.66l-4-1.4zm9 .23v11.84l-3 1.01V6.86zm-11.54.6l-1.89.67v2.15l1.89-.67zm0 2.75l-1.89.67v2.15l1.89-.67zm0 2.75l-1.89.67v2.15l1.89-.67zm0 2.75l-1.89.67v2.15l1.89-.67z"></svg:path>`,
})
export class MdiMapLegendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerIcon],svg[mdi-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></svg:path>`,
})
export class MdiMapMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerAccountIcon],svg[mdi-map-marker-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m0 2a2 2 0 1 1 .001 4.001A2 2 0 0 1 12 4m0 10c-1.67 0-3.14-.85-4-2.15c0-1.32 2.67-2.05 4-2.05s4 .73 4 2.05A4.78 4.78 0 0 1 12 14"></svg:path>`,
})
export class MdiMapMarkerAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerAccountOutlineIcon],svg[mdi-map-marker-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c2.8 0 5 2.2 5 5c0 2.9-2.9 7.2-5 9.9c-2.1-2.7-5-7-5-9.9c0-2.8 2.2-5 5-5m0-2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7m0 8c1.33 0 4 .67 4 2v.16c-.97 1.12-2.4 1.84-4 1.84s-3.03-.72-4-1.84V12c0-1.33 2.67-2 4-2m0-1c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class MdiMapMarkerAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerAlertIcon],svg[mdi-map-marker-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.9 0 7 3.1 7 7c0 5.2-7 13-7 13S5 14.2 5 9c0-3.9 3.1-7 7-7m-1 4v6h2V6zm0 8v2h2v-2z"></svg:path>`,
})
export class MdiMapMarkerAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerAlertOutlineIcon],svg[mdi-map-marker-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2zm0 7h2v2h-2z"></svg:path>`,
})
export class MdiMapMarkerAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerCheckIcon],svg[mdi-map-marker-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.86 0 7 3.14 7 7c0 5.25-7 13-7 13S5 14.25 5 9c0-3.86 3.14-7 7-7m-1.53 12L17 7.41L15.6 6l-5.13 5.18L8.4 9.09L7 10.5z"></svg:path>`,
})
export class MdiMapMarkerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerCheckOutlineIcon],svg[mdi-map-marker-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c2.8 0 5 2.2 5 5c0 2.9-2.9 7.2-5 9.9c-2.1-2.7-5-7-5-9.9c0-2.8 2.2-5 5-5m0-2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7m-.7 12l4.9-5l-1.4-1.4l-3.5 3.6l-1.6-1.6L8.3 11z"></svg:path>`,
})
export class MdiMapMarkerCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerCircleIcon],svg[mdi-map-marker-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 10.5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 9.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m0-5.3c-2.1 0-3.8 1.7-3.8 3.8c0 3 3.8 6.5 3.8 6.5s3.8-3.5 3.8-6.5c0-2.1-1.7-3.8-3.8-3.8"></svg:path>`,
})
export class MdiMapMarkerCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerDistanceIcon],svg[mdi-map-marker-distance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 8.11c-.89 0-1.61-.72-1.61-1.61A1.61 1.61 0 0 1 6.5 4.89c.89 0 1.61.72 1.61 1.61A1.61 1.61 0 0 1 6.5 8.11M6.5 2C4 2 2 4 2 6.5c0 3.37 4.5 8.36 4.5 8.36S11 9.87 11 6.5C11 4 9 2 6.5 2m11 6.11a1.61 1.61 0 0 1-1.61-1.61a1.609 1.609 0 1 1 3.22 0a1.61 1.61 0 0 1-1.61 1.61m0-6.11C15 2 13 4 13 6.5c0 3.37 4.5 8.36 4.5 8.36S22 9.87 22 6.5C22 4 20 2 17.5 2m0 14c-1.27 0-2.4.8-2.82 2H9.32a3 3 0 0 0-3.82-1.83A3.003 3.003 0 0 0 3.66 20a3.017 3.017 0 0 0 3.84 1.83c.85-.3 1.5-.98 1.82-1.83h5.37c.55 1.56 2.27 2.38 3.81 1.83A3 3 0 0 0 20.35 18c-.43-1.2-1.57-2-2.85-2m0 4.5A1.5 1.5 0 0 1 16 19a1.5 1.5 0 0 1 1.5-1.5A1.5 1.5 0 0 1 19 19a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiMapMarkerDistanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerDownIcon],svg[mdi-map-marker-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m-4.5 8H10V5h4v5h2.5L12 14.5Z"></svg:path>`,
})
export class MdiMapMarkerDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerLeftIcon],svg[mdi-map-marker-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M8 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7S8 5.13 8 9M6 7l-5 5l5 5z"></svg:path>`,
})
export class MdiMapMarkerLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerLeftOutlineIcon],svg[mdi-map-marker-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6.5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5M15 2c3.87 0 7 3.13 7 7c0 5.25-7 13-7 13S8 14.25 8 9c0-3.87 3.13-7 7-7m-5 7c0 1 0 3 5 9.71C20 12 20 10 20 9c0-2.76-2.24-5-5-5s-5 2.24-5 5M6 7l-5 5l5 5z"></svg:path>`,
})
export class MdiMapMarkerLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerMinusIcon],svg[mdi-map-marker-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.5A2.5 2.5 0 0 0 11.5 9A2.5 2.5 0 0 0 9 6.5A2.5 2.5 0 0 0 6.5 9A2.5 2.5 0 0 0 9 11.5M9 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S2 14.25 2 9a7 7 0 0 1 7-7m6 15h8v2h-8z"></svg:path>`,
})
export class MdiMapMarkerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerMinusOutlineIcon],svg[mdi-map-marker-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h8v2h-8zM9 6.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5S6.5 10.4 6.5 9S7.6 6.5 9 6.5M9 2c3.9 0 7 3.1 7 7c0 5.2-7 13-7 13S2 14.2 2 9c0-3.9 3.1-7 7-7m0 2C6.2 4 4 6.2 4 9c0 1 0 3 5 9.7C14 12 14 10 14 9c0-2.8-2.2-5-5-5"></svg:path>`,
})
export class MdiMapMarkerMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerMultipleIcon],svg[mdi-map-marker-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11.5A2.5 2.5 0 0 0 16.5 9A2.5 2.5 0 0 0 14 6.5A2.5 2.5 0 0 0 11.5 9a2.5 2.5 0 0 0 2.5 2.5M14 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S7 14.25 7 9a7 7 0 0 1 7-7M5 9c0 4.5 5.08 10.66 6 11.81L10 22S3 14.25 3 9c0-3.17 2.11-5.85 5-6.71C6.16 3.94 5 6.33 5 9"></svg:path>`,
})
export class MdiMapMarkerMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerMultipleOutlineIcon],svg[mdi-map-marker-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 9A2.5 2.5 0 0 1 14 6.5c1.1 0 2.03.71 2.37 1.69c.08.26.13.53.13.81a2.5 2.5 0 0 1-2.5 2.5c-1.09 0-2-.69-2.36-1.66c-.09-.26-.14-.55-.14-.84M5 9c0 4.5 5.08 10.66 6 11.81L10 22S3 14.25 3 9c0-3.17 2.11-5.85 5-6.71C6.16 3.94 5 6.33 5 9m9-7c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S7 14.25 7 9c0-3.87 3.14-7 7-7m0 2c-2.76 0-5 2.24-5 5c0 1 0 3 5 9.71C19 12 19 10 19 9c0-2.76-2.24-5-5-5"></svg:path>`,
})
export class MdiMapMarkerMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerOffIcon],svg[mdi-map-marker-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.37 16.1l-4.62-4.63l-.11-.11L3.27 3L2 4.27l3.18 3.18C5.06 7.95 5 8.46 5 9c0 5.25 7 13 7 13s1.67-1.85 3.37-4.35L18.73 21L20 19.72M12 6.5A2.5 2.5 0 0 1 14.5 9c0 .73-.33 1.39-.83 1.85l3.63 3.65c.98-1.88 1.7-3.82 1.7-5.5a7 7 0 0 0-7-7c-2 0-3.76.82-5.04 2.14l3.19 3.19c.46-.51 1.11-.83 1.85-.83"></svg:path>`,
})
export class MdiMapMarkerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerOffOutlineIcon],svg[mdi-map-marker-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19.7L3.3 3L2 4.3l3.2 3.2C5.1 8 5 8.5 5 9c0 5.2 7 13 7 13s1.7-1.9 3.4-4.4l3.4 3.4zm-8-1c-4.6-6.2-5-8.3-5-9.4l6.8 6.8c-.5.8-1.1 1.6-1.8 2.6M8.4 5.6L7 4.2C8.2 2.8 10 2 12 2c3.9 0 7 3.1 7 7c0 1.7-.7 3.6-1.7 5.5L15.8 13C17 10.6 17 9.6 17 9c0-2.8-2.2-5-5-5c-1.4 0-2.7.6-3.6 1.6m3.6.9c1.4 0 2.5 1.1 2.5 2.5c0 .7-.3 1.4-.8 1.9l-3.5-3.5c.4-.6 1.1-.9 1.8-.9"></svg:path>`,
})
export class MdiMapMarkerOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerOutlineIcon],svg[mdi-map-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiMapMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerPathIcon],svg[mdi-map-marker-path-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15a3 3 0 0 1 3 3a3 3 0 0 1-3 3a2.99 2.99 0 0 1-2.83-2H14v-2h1.17c.41-1.17 1.52-2 2.83-2m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0-9a1.43 1.43 0 0 0 1.43-1.43a1.43 1.43 0 1 0-2.86 0A1.43 1.43 0 0 0 18 8m0-5.43a4 4 0 0 1 4 4C22 9.56 18 14 18 14s-4-4.44-4-7.43a4 4 0 0 1 4-4M8.83 17H10v2H8.83A2.99 2.99 0 0 1 6 21a3 3 0 0 1-3-3c0-1.31.83-2.42 2-2.83V14h2v1.17c.85.3 1.53.98 1.83 1.83M6 17a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M6 3a3 3 0 0 1 3 3c0 1.31-.83 2.42-2 2.83V10H5V8.83A2.99 2.99 0 0 1 3 6a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m5 14v-2h2v2zm-4-6H5v-2h2z"></svg:path>`,
})
export class MdiMapMarkerPathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerPlusIcon],svg[mdi-map-marker-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.5A2.5 2.5 0 0 0 11.5 9A2.5 2.5 0 0 0 9 6.5A2.5 2.5 0 0 0 6.5 9A2.5 2.5 0 0 0 9 11.5M9 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S2 14.25 2 9a7 7 0 0 1 7-7m6 15h3v-3h2v3h3v2h-3v3h-2v-3h-3z"></svg:path>`,
})
export class MdiMapMarkerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerPlusOutlineIcon],svg[mdi-map-marker-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h3v-3h2v3h3v2h-3v3h-2v-3h-3zM9 6.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5S6.5 10.4 6.5 9S7.6 6.5 9 6.5M9 2c3.9 0 7 3.1 7 7c0 5.2-7 13-7 13S2 14.2 2 9c0-3.9 3.1-7 7-7m0 2C6.2 4 4 6.2 4 9c0 1 0 3 5 9.7C14 12 14 10 14 9c0-2.8-2.2-5-5-5"></svg:path>`,
})
export class MdiMapMarkerPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerQuestionIcon],svg[mdi-map-marker-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m.88 13.75h-1.75V14h1.75m0-1.12h-1.75c0-2.84 2.62-2.62 2.62-4.38A1.75 1.75 0 0 0 12 6.75a1.75 1.75 0 0 0-1.75 1.75H8.5A3.5 3.5 0 0 1 12 5a3.5 3.5 0 0 1 3.5 3.5c0 2.19-2.62 2.41-2.62 4.38"></svg:path>`,
})
export class MdiMapMarkerQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerQuestionOutlineIcon],svg[mdi-map-marker-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C7.59 1 4 4.59 4 9c0 5.57 6.96 13.34 7.26 13.67l.74.83l.74-.83C13.04 22.34 20 14.57 20 9c0-4.41-3.59-8-8-8m0 19.47C9.82 17.86 6 12.54 6 9a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 3.83-4.25 9.36-6 11.47M11.13 14h1.75v1.75h-1.75M12 5a3.5 3.5 0 0 0-3.5 3.5h1.75A1.75 1.75 0 0 1 12 6.75a1.75 1.75 0 0 1 1.75 1.75c0 1.76-2.62 1.54-2.62 4.38h1.75c0-1.97 2.62-2.19 2.62-4.38A3.5 3.5 0 0 0 12 5"></svg:path>`,
})
export class MdiMapMarkerQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRadiusIcon],svg[mdi-map-marker-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19"></svg:path>`,
})
export class MdiMapMarkerRadiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRadiusOutlineIcon],svg[mdi-map-marker-radius-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c2.2 0 4 1.8 4 4c0 2.1-2.1 5.5-4 7.9c-1.9-2.5-4-5.8-4-7.9c0-2.2 1.8-4 4-4m0-2C8.7 2 6 4.7 6 8c0 4.5 6 11 6 11s6-6.6 6-11c0-3.3-2.7-6-6-6m0 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m8 13c0 2.2-3.6 4-8 4s-8-1.8-8-4c0-1.3 1.2-2.4 3.1-3.2l.6.9c-1 .5-1.7 1.1-1.7 1.8c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5c0-.7-.7-1.3-1.8-1.8l.6-.9c2 .8 3.2 1.9 3.2 3.2"></svg:path>`,
})
export class MdiMapMarkerRadiusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRemoveIcon],svg[mdi-map-marker-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2C5.14 2 2 5.14 2 9c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 4.5A2.5 2.5 0 0 1 11.5 9A2.5 2.5 0 0 1 9 11.5A2.5 2.5 0 0 1 6.5 9A2.5 2.5 0 0 1 9 6.5m7.58 7.66l-1.41 1.42L17.58 18l-2.41 2.41l1.41 1.41L19 19.41l2.41 2.41l1.42-1.41L20.41 18l2.42-2.42l-1.42-1.42L19 16.58"></svg:path>`,
})
export class MdiMapMarkerRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRemoveOutlineIcon],svg[mdi-map-marker-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.6 14.2l-1.4 1.4l2.4 2.4l-2.4 2.4l1.4 1.4l2.4-2.4l2.4 2.4l1.4-1.4l-2.4-2.4l2.4-2.4l-1.4-1.4l-2.4 2.4M9 6.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5S6.5 10.4 6.5 9S7.6 6.5 9 6.5M9 2c3.9 0 7 3.1 7 7c0 5.2-7 13-7 13S2 14.2 2 9c0-3.9 3.1-7 7-7m0 2C6.2 4 4 6.2 4 9c0 1 0 3 5 9.7C14 12 14 10 14 9c0-2.8-2.2-5-5-5"></svg:path>`,
})
export class MdiMapMarkerRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRemoveVariantIcon],svg[mdi-map-marker-remove-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7M9.59 5.17L12 7.58l2.41-2.41l1.42 1.41L13.41 9l2.42 2.41l-1.42 1.42L12 10.41l-2.41 2.42l-1.42-1.42L10.59 9L8.17 6.58"></svg:path>`,
})
export class MdiMapMarkerRemoveVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRightIcon],svg[mdi-map-marker-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M9 2C5.13 2 2 5.13 2 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m9 15l5-5l-5-5z"></svg:path>`,
})
export class MdiMapMarkerRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRightOutlineIcon],svg[mdi-map-marker-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6.5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5M9 2c3.87 0 7 3.13 7 7c0 5.25-7 13-7 13S2 14.25 2 9c0-3.87 3.13-7 7-7m0 2C6.24 4 4 6.24 4 9c0 1 0 3 5 9.71C14 12 14 10 14 9c0-2.76-2.24-5-5-5m9 13l5-5l-5-5z"></svg:path>`,
})
export class MdiMapMarkerRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerStarIcon],svg[mdi-map-marker-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7m2.5 11L12 11.5L9.5 13l.7-2.8L8 8.3l2.9-.2L12 5.4L13.1 8l2.9.3l-2.2 1.9z"></svg:path>`,
})
export class MdiMapMarkerStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerStarOutlineIcon],svg[mdi-map-marker-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.9 0 7 3.1 7 7c0 5.2-7 13-7 13S5 14.2 5 9c0-3.9 3.1-7 7-7m0 2C9.2 4 7 6.2 7 9c0 1 0 3 5 9.7C17 12 17 10 17 9c0-2.8-2.2-5-5-5m0 7.5l2.4 1.5l-.6-2.8L16 8.3l-2.9-.2L12 5.4L10.9 8L8 8.3l2.2 1.9l-.7 2.8z"></svg:path>`,
})
export class MdiMapMarkerStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerUpIcon],svg[mdi-map-marker-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m4.5 7H14v5h-4V9H7.5L12 4.5Z"></svg:path>`,
})
export class MdiMapMarkerUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapMinusIcon],svg[mdi-map-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v2h8v-2zm-1.84 2.36L9 18.9l-5.34 2.07c-.06.03-.11.03-.16.03c-.28 0-.5-.22-.5-.5V5.38c0-.23.16-.41.36-.48L9 3l6 2.1L20.34 3h.16c.28 0 .5.22.5.5v9.85a5.93 5.93 0 0 0-6 1.19V7.1L9 5v11.9l4.04 1.42c-.04.22-.04.45-.04.68c0 .47.06.92.16 1.36"></svg:path>`,
})
export class MdiMapMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapOutlineIcon],svg[mdi-map-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.5 3l-.16.03L15 5.1L9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5l.16-.03L9 18.9l6 2.1l5.64-1.9c.21-.07.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99l3-1.01v11.7l-3 1.16zm14 11.08l-3 1.01V6.86l3-1.16z"></svg:path>`,
})
export class MdiMapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapPlusIcon],svg[mdi-map-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3L3.36 4.9c-.2.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5c.05 0 .1 0 .16-.03L9 18.9l4.16 1.46c-.1-.44-.16-.9-.16-1.36c0-.23 0-.46.04-.7L9 16.9V5l6 2.1v7.46c1.07-.96 2.47-1.56 4-1.56c.7 0 1.37.13 2 .36V3.5a.5.5 0 0 0-.5-.5h-.16L15 5.1zm9 12v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiMapPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapSearchIcon],svg[mdi-map-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M14 6.11L8 4v11.89l1 .35v.26c0 .64.09 1.26.26 1.84L8 17.9l-5.34 2.07l-.16.03a.5.5 0 0 1-.5-.5V4.38c0-.23.15-.41.36-.48L8 2l6 2.1L19.34 2h.16a.5.5 0 0 1 .5.5v9.31A6.48 6.48 0 0 0 15.5 10c-.5 0-1 .06-1.5.17z"></svg:path>`,
})
export class MdiMapSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapSearchOutlineIcon],svg[mdi-map-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.7-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5m4-12a.5.5 0 0 1 .5.5v9.31c-.58-.55-1.25-1-2-1.31V4.7l-3 1.16V10c-.7.07-1.38.24-2 .5V5.87l-4-1.4V16.5c0 .64.09 1.26.26 1.84L8 17.9l-5.34 2.07l-.16.03a.5.5 0 0 1-.5-.5V4.38c0-.23.15-.41.36-.48L8 2l6 2.1l5.34-2.07zM4 5.46v11.85l3-1.16V4.45z"></svg:path>`,
})
export class MdiMapSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMapboxIcon],svg[mdi-mapbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m4.75 12.45c1.9-1.9 1.83-5.06-.16-7.04s-5.14-2.06-7.04-.16c-3.43 3.43-2.33 9.53-2.33 9.53s6.11 1.09 9.53-2.33m-3.6-6.59l.98 2.01l2.01.98l-2.01.98l-.98 2.01l-.98-2.01l-2.01-.98l2.01-.98z"></svg:path>`,
})
export class MdiMapboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMarginIcon],svg[mdi-margin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v5l-1.5-1.5l-13 13l-2-2l13-13L15 4zm-3 16a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3m0-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 12a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3m0-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMarginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMarkerIcon],svg[mdi-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.15c-.53 0-1.04.19-1.43.58l-5.81 5.82l5.65 5.65l5.82-5.81c.77-.78.77-2.04 0-2.83l-2.84-2.83c-.39-.39-.89-.58-1.39-.58M10.3 8.5l-5.96 5.96c-.78.78-.78 2.04.02 2.85C3.14 18.54 1.9 19.77.67 21h5.66l.86-.86c.78.76 2.03.75 2.81-.02l5.95-5.96"></svg:path>`,
})
export class MdiMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMarkerCancelIcon],svg[mdi-marker-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 13c2.5 0 4.5 2 4.5 4.5S20 22 17.5 22S13 20 13 17.5s2-4.5 4.5-4.5m0 1.5c-.56 0-1.08.15-1.5.42L20.08 19c.27-.42.42-.94.42-1.5a3 3 0 0 0-3-3m-3 3a3 3 0 0 0 3 3c.56 0 1.08-.15 1.5-.42L14.92 16c-.27.42-.42.94-.42 1.5m4-16.35c.5 0 1 .19 1.39.58l2.84 2.83c.77.79.77 2.05 0 2.83l-3.78 3.77a6.54 6.54 0 0 0-3.8.28l-3.89-3.89l5.81-5.82c.39-.39.9-.58 1.43-.58M10.3 8.5l3.59 3.6A6.49 6.49 0 0 0 11 17.5c0 .5.06 1 .16 1.45L10 20.12c-.78.77-2.03.78-2.81.02l-.86.86H.67l3.69-3.69c-.8-.81-.8-2.07-.02-2.85z"></svg:path>`,
})
export class MdiMarkerCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMarkerCheckIcon],svg[mdi-marker-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 16l-5-5l1.41-1.42L10 13.17l7.59-7.59L19 7m0-6H5c-1.11 0-2 .89-2 2v12.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.89-.97.89-1.66V3a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMarkerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMastodonIcon],svg[mdi-mastodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 14c-.28 1.41-2.44 2.96-4.97 3.26c-1.31.15-2.6.3-3.97.24c-2.25-.11-4-.54-4-.54v.62c.32 2.22 2.22 2.35 4.03 2.42c1.82.05 3.44-.46 3.44-.46l.08 1.65s-1.28.68-3.55.81c-1.25.07-2.81-.03-4.62-.5c-3.92-1.05-4.6-5.24-4.7-9.5l-.01-3.43c0-4.34 2.83-5.61 2.83-5.61C6.95 2.3 9.41 2 11.97 2h.06c2.56 0 5.02.3 6.47.96c0 0 2.83 1.27 2.83 5.61c0 0 .04 3.21-.39 5.43M18 8.91c0-1.08-.3-1.91-.85-2.56c-.56-.63-1.3-.96-2.23-.96c-1.06 0-1.87.41-2.42 1.23l-.5.88l-.5-.88c-.56-.82-1.36-1.23-2.43-1.23c-.92 0-1.66.33-2.23.96C6.29 7 6 7.83 6 8.91v5.26h2.1V9.06c0-1.06.45-1.62 1.36-1.62c1 0 1.5.65 1.5 1.93v2.79h2.07V9.37c0-1.28.5-1.93 1.51-1.93c.9 0 1.35.56 1.35 1.62v5.11H18z"></svg:path>`,
})
export class MdiMastodonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMastodonVariantIcon],svg[mdi-mastodon-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20.93 14c-.27 1.4-2.43 2.95-4.96 3.25c-1.31.15-2.59.3-3.97.25c-2.24-.12-4-.55-4-.55l.03.62c.29 2.21 2.19 2.35 4 2.43c1.82.04 3.44-.47 3.44-.47l.08 1.64s-1.28.69-3.55.83c-1.25.05-2.8-.05-4.61-.53c-3.92-1.04-4.6-5.22-4.7-9.47l-.01-3.43c0-4.34 2.82-5.61 2.82-5.61C6.95 2.3 9.41 2 11.97 2h.06c2.56 0 5.02.3 6.47.96c0 0 2.83 1.27 2.83 5.61c0 0 .03 3.2-.4 5.43m-12.6-3.68c0-.78-.63-1.41-1.4-1.41c-.78 0-1.43.63-1.43 1.41c0 .77.65 1.4 1.43 1.4a1.4 1.4 0 0 0 1.4-1.4m5.08 0A1.41 1.41 0 0 0 12 8.91a1.41 1.41 0 0 0-1.41 1.41c0 .77.63 1.4 1.41 1.4c.78 0 1.41-.63 1.41-1.4m5.09 0c0-.78-.65-1.41-1.43-1.41c-.77 0-1.4.63-1.4 1.41a1.4 1.4 0 0 0 1.4 1.4c.78 0 1.43-.63 1.43-1.4z" fill="currentColor"></svg:path>`,
})
export class MdiMastodonVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMaterialDesignIcon],svg[mdi-material-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c0-2.03-.67-3.91-2-5.62v11.25c1.33-1.66 2-3.54 2-5.63m-3.37 7H6.38c.68.55 1.57 1 2.67 1.41c1.09.39 2.08.59 2.95.59c.88 0 1.86-.2 2.95-.59c1.1-.41 1.99-.86 2.68-1.41M11 17L7 9v8zm6-8l-4 8h4zm-5 5.53L15.75 7h-7.5zM17.63 5C15.97 3.67 14.09 3 12 3s-3.97.67-5.62 2zM5 17.63V6.38C3.67 8.09 3 9.97 3 12c0 2.09.67 3.97 2 5.63M23 12c0 3.03-1.06 5.63-3.22 7.78C17.63 21.94 15.03 23 12 23s-5.62-1.06-7.78-3.22C2.06 17.63 1 15.03 1 12s1.06-5.62 3.22-7.78S8.97 1 12 1s5.63 1.06 7.78 3.22C21.94 6.38 23 8.97 23 12"></svg:path>`,
})
export class MdiMaterialDesignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMaterialUiIcon],svg[mdi-material-ui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.61v-1.24l6-3.46V7.23l-5 2.89l-5-2.89V13l-1 .58L2 13V5l1.07-.62L9 7.81l3.93-2.27l2-1.16L16 5v8.06L10.92 16l4.05 2.33l5.03-2.9V11l1-.58l1 .58v5.58l-7.03 4.06zm14-6.86l-1 .58l-1-.58V8.58L21 8l1 .58z"></svg:path>`,
})
export class MdiMaterialUiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathCompassIcon],svg[mdi-math-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19.88V22l-1.8-1.17l-4.79-9c.66-.21 1.26-.55 1.78-1zM15 7a3 3 0 0 1-3 3h-.44L5.8 20.83L4 22v-2.12L9.79 9c-1.1-1.23-1-3.13.24-4.24C10.57 4.28 11.27 4 12 4V2a1 1 0 0 1 1 1v1.18c1.2.42 2 1.55 2 2.82m-2 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiMathCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathCosIcon],svg[mdi-math-cos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1H6v1H4V9h2v1h2V9a2 2 0 0 0-2-2zm7 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zm7-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-4v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"></svg:path>`,
})
export class MdiMathCosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathIntegralIcon],svg[mdi-math-integral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19.1c-.2 1.1-.6 1.9-1.3 2.4s-1.6.6-2.7.4c-.4-.1-1.2-.2-1.5-.4l.5-1.5c.3.1.9.3 1.2.3c1.1.2 1.7-.3 1.9-1.5L12 5.2c.2-1.2.7-2 1.4-2.6c.7-.5 1.7-.7 2.8-.5c.4.1 1.2.2 1.8.5L17.5 4c-.2-.1-.9-.2-1.2-.3c-1.3-.2-2 .4-2.3 1.9z"></svg:path>`,
})
export class MdiMathIntegralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathIntegralBoxIcon],svg[mdi-math-integral-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3.1 3.9s-.7-.3-1-.3c-.6-.1-1 .1-1.2 1.1L12 16.8c-.2.8-.5 1.4-1 1.8c-.4.3-.8.4-1.3.4c-.8 0-2-.5-2-.5l.5-1.4s.8.3 1 .3c.3.1.5 0 .7-.1s.3-.4.4-.7l1.6-9.2c.1-.8.5-1.4 1-1.9c.6-.4 1.3-.5 2.1-.4c.7.1 1.5.5 1.5.5z"></svg:path>`,
})
export class MdiMathIntegralBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathLogIcon],svg[mdi-math-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4h-2v4h-2V9h4V7zM2 7v10h6v-2H4V7zm9 0c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiMathLogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathNormIcon],svg[mdi-math-norm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21V3h2v18zm-6 0V3h2v18z"></svg:path>`,
})
export class MdiMathNormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathNormBoxIcon],svg[mdi-math-norm-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 15H8V6h2zm6 0h-2V6h2z"></svg:path>`,
})
export class MdiMathNormBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathSinIcon],svg[mdi-math-sin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H2v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4V9h4V7zm10 0v2h-1v6h1v2h-4v-2h1V9h-1V7zm2 0v10h2v-5l2 5h2V7h-2v5l-2-5z"></svg:path>`,
})
export class MdiMathSinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMathTanIcon],svg[mdi-math-tan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v2h2v8h2V9h2V7zm9 0a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 2h2v2h-2zm5-2v10h2v-5l2 5h2V7h-2v5l-2-5z"></svg:path>`,
})
export class MdiMathTanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMatrixIcon],svg[mdi-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4v2H4v16h2v2H2zm18 2h-2V2h4v20h-4v-2h2zM9 5h1v5h1v1H8v-1h1V6l-1 .5v-1zm6 8h1v5h1v1h-3v-1h1v-4l-1 .5v-1zm-6 0c1.1 0 2 1.34 2 3s-.9 3-2 3s-2-1.34-2-3s.9-3 2-3m0 1c-.55 0-1 .9-1 2s.45 2 1 2s1-.9 1-2s-.45-2-1-2m6-9c1.1 0 2 1.34 2 3s-.9 3-2 3s-2-1.34-2-3s.9-3 2-3m0 1c-.55 0-1 .9-1 2s.45 2 1 2s1-.9 1-2s-.45-2-1-2"></svg:path>`,
})
export class MdiMatrixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMaxcdnIcon],svg[mdi-maxcdn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20.6 6.69C19.73 5.61 18.38 5 16.9 5H2.95l1.67 3.57L2.39 19h3.66L8.28 8.57h3.12L9.17 19h3.66l2.23-10.43h1.84c.4 0 .73.13.92.37c.18.23.25.56.18.96L16.04 19h3.65l1.81-8.35c.28-1.44-.04-2.89-.9-3.96z" fill="currentColor"></svg:path>`,
})
export class MdiMaxcdnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMedalIcon],svg[mdi-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-4.46 8.84a6.996 6.996 0 0 0 8.84 4.46a7 7 0 0 0 0-13.3L20 4zm-5.06 17.5L12 17.78L9.06 19.5l.78-3.33l-2.59-2.24l3.41-.29L12 10.5l1.34 3.14l3.41.29l-2.59 2.24z"></svg:path>`,
})
export class MdiMedalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMedalOutlineIcon],svg[mdi-medal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.94 19.5L12 17.77L9.06 19.5l.78-3.34l-2.59-2.24l3.41-.29L12 10.5l1.34 3.13l3.41.29l-2.59 2.24M20 2H4v2l4.86 3.64a8 8 0 1 0 6.28 0L20 4m-2 11a6 6 0 1 1-7.18-5.88a5.9 5.9 0 0 1 2.36 0A6 6 0 0 1 18 15m-5.37-8h-1.26l-4-3h9.34Z"></svg:path>`,
})
export class MdiMedalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMedicalBagIcon],svg[mdi-medical-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3L8 5v2H5C3.85 7 3.12 8 3 9L2 19c-.12 1 .54 2 2 2h16c1.46 0 2.12-1 2-2L21 9c-.12-1-.94-2-2-2h-3V5l-2-2zm0 2h4v2h-4zm1 5h2v3h3v2h-3v3h-2v-3H8v-2h3z"></svg:path>`,
})
export class MdiMedicalBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMedicalCottonSwabIcon],svg[mdi-medical-cotton-swab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h12v2H3zM2 21h14V6H2zm3-9h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5zm15-6c-1.7 0-3 1.8-3 4c0 1.8.8 3.2 2 3.8V21h2v-7.2c1.2-.5 2-2 2-3.8c0-2.2-1.3-4-3-4"></svg:path>`,
})
export class MdiMedicalCottonSwabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMedicationIcon],svg[mdi-medication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v2H6zm11 3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-1 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16z"></svg:path>`,
})
export class MdiMedicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMedicationOutlineIcon],svg[mdi-medication-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3zM19 8v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2m-2 0H7v11h10zm1-5H6v2h12z"></svg:path>`,
})
export class MdiMedicationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMeditationIcon],svg[mdi-meditation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c1.11 0 2 .89 2 2s-.89 2-2 2s-2-.89-2-2s.9-2 2-2m9 12v-2c-2.24 0-4.16-.96-5.6-2.68l-1.34-1.6A1.98 1.98 0 0 0 12.53 9H11.5c-.61 0-1.17.26-1.55.72l-1.34 1.6C7.16 13.04 5.24 14 3 14v2c2.77 0 5.19-1.17 7-3.25V15l-3.88 1.55c-.67.27-1.12.95-1.12 1.66C5 19.2 5.8 20 6.79 20H9v-.5a2.5 2.5 0 0 1 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.21c.99 0 1.79-.8 1.79-1.79c0-.71-.45-1.39-1.12-1.66L14 15v-2.25c1.81 2.08 4.23 3.25 7 3.25"></svg:path>`,
})
export class MdiMeditationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMediumIcon],svg[mdi-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.37 7.3a.75.75 0 0 0-.25-.65L2.25 4.4v-.34h5.8l4.48 9.83l3.94-9.83H22v.34l-1.6 1.53c-.13.1-.2.28-.17.45v11.24c-.03.17.04.35.17.45l1.56 1.53v.34h-7.84v-.34l1.61-1.57c.16-.15.16-.2.16-.44V8.5L11.4 19.9h-.6L5.57 8.5v7.64c-.07.32.06.64.29.86l2.1 2.57v.33H2v-.33L4.1 17a.94.94 0 0 0 .27-.86V7.3z" fill="currentColor"></svg:path>`,
})
export class MdiMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMeetupIcon],svg[mdi-meetup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19.61 14.86c0 1.82-1.31 3.39-3.11 3.69c-.21.04-.43.07-.66.06c-.08 0-.11.03-.13.1c-.36 1.03-1.07 1.64-2.14 1.79c-.71.1-1.35-.09-1.92-.53c-.08-.07-.15-.07-.21-.01c-.66.47-1.4.68-2.21.63c-1.57-.09-2.9-1.3-3.15-2.85c-.02-.11-.04-.24-.04-.33c0-.09-.04-.12-.12-.14c-.48-.09-.92-.27-1.29-.59c-.71-.55-1.13-1.27-1.23-2.18c-.11-1 .21-1.88.92-2.61c.06-.06.06-.1.02-.17c-.27-.48-.4-1-.38-1.55a2.935 2.935 0 0 1 2.35-2.8c.15-.04.23-.1.3-.24c.66-1.42 1.76-2.28 3.3-2.57c1.09-.2 2.09.02 3.03.57c.06.05.14.05.23.03c1.5-.44 2.83-.12 3.95.95c.66.63 1.03 1.43 1.14 2.35c.02.2.03.4.02.6c-.01.08.01.11.09.13c.67.25 1.13.72 1.34 1.41c.25.85.04 1.61-.6 2.23c-.06.06-.04.09-.01.14c.34.59.51 1.21.51 1.89m-6.68-.29c0 .77.5 1.43 1.21 1.69c.36.11.71.17 1.08.19c.28.01.53-.01.78-.13c.19-.1.28-.26.27-.47c-.01-.21-.11-.35-.31-.45a.808.808 0 0 0-.22-.07c-.24-.04-.44-.07-.67-.12c-.36-.07-.52-.26-.52-.64c-.01-.33.08-.64.18-.94c.19-.56.44-1.1.68-1.63c.23-.53.47-1.05.63-1.6c.09-.3.14-.6.05-.9c-.12-.5-.4-.8-.89-.89c-.45-.11-.9-.11-1.3.17c-.14.09-.27.07-.4-.04l-.24-.24c-.42-.38-.96-.4-1.41-.05c-.18.14-.35.31-.52.44c-.17.11-.33.14-.54.03c-.19-.09-.37-.18-.56-.27c-.2-.08-.38-.19-.6-.21c-.68-.06-1.39.35-1.69.97c-.14.27-.25.55-.35.84c-.48 1.32-.87 2.66-1.27 4.01c-.18.6.03 1.19.54 1.51c.4.23.83.32 1.28.18c.36-.11.57-.4.71-.73c.46-1.09.88-2.22 1.32-3.31c.12-.3.24-.61.37-.91c.13-.3.5-.4.72-.2c.14.12.18.29.16.46c-.01.19-.08.36-.15.53c-.27.71-.58 1.45-.87 2.18c-.06.14-.12.29-.15.45c-.04.27.06.51.29.58c.22.12.46.14.69.05c.27-.1.44-.31.56-.55l1.29-2.55c.2-.39.42-.78.6-1.17c.08-.14.17-.28.32-.37c.12-.08.25-.08.38-.01c.12.07.12.2.12.33c0 .07 0 .14-.03.2c-.06.14-.11.27-.17.4c-.36.76-.73 1.51-1.08 2.26c-.15.32-.31.64-.29.98m5.03 5.55c0-.5-.42-.92-.92-.92c-.54 0-.94.41-.94.92a.93.93 0 0 0 .93.93a.93.93 0 0 0 .93-.93M2.38 12.46c.48 0 .89-.41.89-.89c0-.48-.4-.88-.88-.88c-.5 0-.89.39-.89.88s.39.89.88.89m10.88-9.91c-.49 0-.89.39-.89.87c0 .49.4.88.88.88c.49 0 .88-.38.88-.87a.88.88 0 0 0-.87-.88m7.19 5.48c0-.4-.34-.74-.74-.74a.758.758 0 0 0-.76.75c0 .41.33.74.75.74s.76-.33.75-.75M5.04 5.89c0 .38.3.67.67.67c.38 0 .68-.3.67-.68c0-.38-.29-.66-.66-.66c-.39 0-.68.28-.68.67m7.02 15.55a.57.57 0 0 0-.56-.58a.57.57 0 0 0-.59.58c0 .31.25.56.59.56c.3 0 .56-.25.56-.56M21 12.5c-.29 0-.55.28-.55.58a.55.55 0 0 0 .55.55c.33 0 .57-.23.57-.55c0-.31-.24-.58-.57-.58M7.62 2c-.27 0-.48.2-.48.47c0 .26.21.47.48.47a.47.47 0 0 0 .47-.47c0-.27-.2-.47-.47-.47m14.46 8c-.22 0-.41.17-.42.4c0 .23.19.42.42.42c.24 0 .42-.18.42-.41c0-.24-.18-.41-.42-.41M5.5 18.26c0-.22-.21-.41-.44-.42c-.22 0-.41.19-.41.43c0 .23.19.41.42.41c.23 0 .43-.18.43-.42z" fill="currentColor"></svg:path>`,
})
export class MdiMeetupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMemoryIcon],svg[mdi-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17H7V7h10m4 4V9h-2V7a2 2 0 0 0-2-2h-2V3h-2v2h-2V3H9v2H7c-1.11 0-2 .89-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2m-6 2h-2v-2h2m2-2H9v6h6z"></svg:path>`,
})
export class MdiMemoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMemoryArrowDownIcon],svg[mdi-memory-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19v-4h-2v4h-2l3 3l3-3zm-6.9 0H11v2H9v-2H7c-1.1 0-2-.9-2-2v-2H3v-2h2v-2H3V9h2V7c0-1.1.9-2 2-2h2V3h2v2h2V3h2v2h2c1.1 0 2 .9 2 2v2h2v2h-2v1.1c-.3-.1-.7-.1-1-.1s-.7 0-1 .1V7H7v10h5.1c-.1.3-.1.7-.1 1s0 .7.1 1M9 15h3.8c.5-.9 1.3-1.7 2.2-2.2V9H9zm2-4h2v2h-2z"></svg:path>`,
})
export class MdiMemoryArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenorahIcon],svg[mdi-menorah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11V6l-2-1v6h-2V6l-2-1v6h-2V3l-2-1v9H9V6L7 5v6H5V6L3 5v6c-.55 0-1 .45-1 1s.45 1 1 1h1.25c.7 1.92 2.69 4.58 6.75 4.95V20h-1c-1.1 0-2 .9-2 2h8a2 2 0 0 0-2-2h-1v-2.05c4.06-.38 6.05-3.03 6.75-4.95H21c.55 0 1-.45 1-1s-.45-1-1-1m-10 4.94c-2.66-.31-3.95-1.83-4.55-2.94H11zm2 0V13h4.55c-.6 1.11-1.89 2.63-4.55 2.94"></svg:path>`,
})
export class MdiMenorahIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenorahFireIcon],svg[mdi-menorah-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 11.15V10c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-1V8c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v3h-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1.15c-.29.18-.5.48-.5.85c0 .55.45 1 1 1h1.25c.7 1.92 2.69 4.58 6.75 4.95V20h-1c-1.1 0-2 .9-2 2h8a2 2 0 0 0-2-2h-1v-2.05c4.06-.38 6.05-3.03 6.75-4.95H21c.55 0 1-.45 1-1c0-.37-.21-.67-.5-.85M6.45 13H11v2.94c-2.66-.31-3.95-1.83-4.55-2.94M13 15.94V13h4.55c-.6 1.11-1.89 2.63-4.55 2.94M12 6c.83 0 1.5-.67 1.5-1.5S12.83 2 12 2s-1.5 1.67-1.5 2.5S11.17 6 12 6m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M16 8c.83 0 1.5-.67 1.5-1.5S16.83 4 16 4s-1.5 1.67-1.5 2.5S15.17 8 16 8m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M20 8c.83 0 1.5-.67 1.5-1.5S20.83 4 20 4s-1.5 1.67-1.5 2.5S19.17 8 20 8m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M4 8c.83 0 1.5-.67 1.5-1.5S4.83 4 4 4S2.5 5.67 2.5 6.5S3.17 8 4 8m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M8 8c.83 0 1.5-.67 1.5-1.5S8.83 4 8 4S6.5 5.67 6.5 6.5S7.17 8 8 8m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5"></svg:path>`,
})
export class MdiMenorahFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuIcon],svg[mdi-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></svg:path>`,
})
export class MdiMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuCloseIcon],svg[mdi-menu-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h10v2H3zm0 10h10v2H3zm0-5h12v2H3zm13-4l-1.42 1.39L18.14 12l-3.56 3.61L16 17l5-5z"></svg:path>`,
})
export class MdiMenuCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuDownIcon],svg[mdi-menu-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 10l5 5l5-5z"></svg:path>`,
})
export class MdiMenuDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuDownOutlineIcon],svg[mdi-menu-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9v1.5l-6 6l-6-6V9zm-6 4.67L14.67 11H9.33z"></svg:path>`,
})
export class MdiMenuDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuLeftIcon],svg[mdi-menu-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 7l-5 5l5 5z"></svg:path>`,
})
export class MdiMenuLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuLeftOutlineIcon],svg[mdi-menu-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h-1.5l-6-6l6-6H15zm-4.67-6L13 14.67V9.33z"></svg:path>`,
})
export class MdiMenuLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuOpenIcon],svg[mdi-menu-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15.61L19.59 17l-5.01-5l5.01-5L21 8.39L17.44 12zM3 6h13v2H3zm0 7v-2h10v2zm0 5v-2h13v2z"></svg:path>`,
})
export class MdiMenuOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuRightIcon],svg[mdi-menu-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 17l5-5l-5-5z"></svg:path>`,
})
export class MdiMenuRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuRightOutlineIcon],svg[mdi-menu-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h1.5l6 6l-6 6H9zm4.67 6L11 9.33v5.34z"></svg:path>`,
})
export class MdiMenuRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuSwapIcon],svg[mdi-menu-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-5 5h10zm-5 7l5 5l5-5z"></svg:path>`,
})
export class MdiMenuSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuSwapOutlineIcon],svg[mdi-menu-swap-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.5l-6 6V11h12V9.5zm0 2.83L14.67 9H9.33zM6 13v1.5l6 6l6-6V13zm3.33 2h5.34L12 17.67z"></svg:path>`,
})
export class MdiMenuSwapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuUpIcon],svg[mdi-menu-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 15l5-5l5 5z"></svg:path>`,
})
export class MdiMenuUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMenuUpOutlineIcon],svg[mdi-menu-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16v-1.5l-6-6l-6 6V16zm-6-4.67L14.67 14H9.33z"></svg:path>`,
})
export class MdiMenuUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMergeIcon],svg[mdi-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 17l4-4h3.2c.4 1.2 1.5 2 2.8 2c1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2H12L8 7V3H3v5h3l4.2 4L6 16H3v5h5z"></svg:path>`,
})
export class MdiMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageIcon],svg[mdi-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageAlertIcon],svg[mdi-message-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h-2V5h2m0 10h-2v-2h2m7-11H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiMessageAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageAlertOutlineIcon],svg[mdi-message-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h-2V6h2zm0 2h-2v2h2zm9-8v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m-2 0H4v13.2L5.2 16H20z"></svg:path>`,
})
export class MdiMessageAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageArrowLeftIcon],svg[mdi-message-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-4 9h-4.5l1.8 1.8L12 14l-4-4l4-4l1.2 1.2L11.5 9H16z"></svg:path>`,
})
export class MdiMessageArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageArrowLeftOutlineIcon],svg[mdi-message-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-4-5V9h-4.5l1.8-1.8L12 6l-4 4l4 4l1.2-1.2l-1.7-1.8z"></svg:path>`,
})
export class MdiMessageArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageArrowRightIcon],svg[mdi-message-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 12l-1.2-1.2l1.8-1.8H8V9h4.5l-1.8-1.8L12 6l4 4z"></svg:path>`,
})
export class MdiMessageArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageArrowRightOutlineIcon],svg[mdi-message-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zM8 9v2h4.5l-1.8 1.8L12 14l4-4l-4-4l-1.2 1.2L12.5 9z"></svg:path>`,
})
export class MdiMessageArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageBadgeIcon],svg[mdi-message-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7v9c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.1.3-.1.7-.1 1c0 2.8 2.2 5 5 5c1.1 0 2.2-.4 3-1m-6-4c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3s-3 1.3-3 3"></svg:path>`,
})
export class MdiMessageBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageBadgeOutlineIcon],svg[mdi-message-badge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7v9c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.1.3-.1.7-.1 1s0 .7.1 1H4v12h16V7.9c.7-.1 1.4-.5 2-.9m-6-4c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3s-3 1.3-3 3"></svg:path>`,
})
export class MdiMessageBadgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageBookmarkIcon],svg[mdi-message-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 11l-2.5-1.5L14 13V5h5z"></svg:path>`,
})
export class MdiMessageBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageBookmarkOutlineIcon],svg[mdi-message-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-2-2V6h-5v8l2.5-1.5z"></svg:path>`,
})
export class MdiMessageBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageBulletedIcon],svg[mdi-message-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M8 14H6v-2h2zm0-3H6V9h2zm0-3H6V6h2zm7 6h-5v-2h5zm3-3h-8V9h8zm0-3h-8V6h8z"></svg:path>`,
})
export class MdiMessageBulletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageBulletedOffIcon],svg[mdi-message-bulleted-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.27 1.73L0 3l2 2v17l4-4h9l5.73 5.73L22 22.46zM8 14H6v-2h2zm-2-3V9l2 2zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 7c1.07-.05 1.93-.92 1.93-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMessageBulletedOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageCheckIcon],svg[mdi-message-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.53 12L7 10.5l1.4-1.41l2.07 2.08L15.6 6L17 7.41z"></svg:path>`,
})
export class MdiMessageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageCheckOutlineIcon],svg[mdi-message-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-9.53-2L7 10.5l1.4-1.41l2.07 2.08L15.6 6L17 7.41z"></svg:path>`,
})
export class MdiMessageCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageCogIcon],svg[mdi-message-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 10a1.5 1.5 0 0 1-1.5 1.5c-.84 0-1.5-.67-1.5-1.5A1.5 1.5 0 0 1 12 8.5a1.5 1.5 0 0 1 1.5 1.5M22 4v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m-5.23 7.32l-1.07-.82c.01-.17.01-.34 0-.5c.02-.16.02-.33 0-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.16-.32-.13l-1.23.5c-.27-.2-.54-.37-.85-.5l-.19-1.31A.235.235 0 0 0 13 5h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.12-.59.28-.86.47l-1.24-.5c-.12-.04-.25 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.84c-.04.32-.04.66 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.16.31.13L9.7 13c.26.2.54.37.85.5l.19 1.31c.03.12.14.19.26.19h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.56-.29.84-.47l1.25.5c.12 0 .25 0 .31-.13l1-1.73a.25.25 0 0 0-.07-.32"></svg:path>`,
})
export class MdiMessageCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageCogOutlineIcon],svg[mdi-message-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-3.2-4.7l-1.1-.8v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.5-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.1 0-.2.1-.2.2l-.2 1.3c-.3.2-.6.3-.9.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.1.2-.1.3l1 1.7c.1.1.2.2.3.1l1.2-.3c.3.2.5.4.8.5l.2 1.3c0 .1.1.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.1.6-.3.8-.5l1.2.5c.1 0 .2 0 .3-.1l1-1.7c.2-.2.2-.3.1-.4m-4.8.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class MdiMessageCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageDrawIcon],svg[mdi-message-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h-7.5l2-2H18M6 14v-2.5l6.88-6.86c.19-.19.51-.19.71 0l1.76 1.77c.2.2.2.51 0 .71L8.47 14M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMessageDrawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageFastIcon],svg[mdi-message-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2zM20 5H9c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiMessageFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageFastOutlineIcon],svg[mdi-message-fast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H9c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 10h-9.8L9 16.2V7h11zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"></svg:path>`,
})
export class MdiMessageFastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageFlashIcon],svg[mdi-message-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h9v-8h7zm.5 12h-2.2l1.7-4h-5v6h2v5z"></svg:path>`,
})
export class MdiMessageFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageFlashOutlineIcon],svg[mdi-message-flash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.2V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h9v-2H5.2zM22.5 16h-2.2l1.7-4h-5v6h2v5z"></svg:path>`,
})
export class MdiMessageFlashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageImageIcon],svg[mdi-message-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 14l3.5-4.5l2.5 3L14.5 8l4.5 6m1-12H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMessageImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageImageOutlineIcon],svg[mdi-message-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zM5 14l3.5-4.5l2.5 3L14.5 8l4.5 6"></svg:path>`,
})
export class MdiMessageImageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageLockIcon],svg[mdi-message-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 0A2.5 2.5 0 0 0 18 2.5V3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1v-.5A2.5 2.5 0 0 0 20.5 0m0 1A1.5 1.5 0 0 1 22 2.5V3h-3v-.5A1.5 1.5 0 0 1 20.5 1M4 2a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2v-5h-5c-1.11 0-2-.89-2-2V2z"></svg:path>`,
})
export class MdiMessageLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageLockOutlineIcon],svg[mdi-message-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v-.5C23 1.1 21.9 0 20.5 0S18 1.1 18 2.5V3c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1m-1 0h-3v-.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5zm0 8v5c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h11v2H4v13.2L5.2 16H20v-5z"></svg:path>`,
})
export class MdiMessageLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageMinusIcon],svg[mdi-message-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2H6l-4 4V4a2 2 0 0 1 2-2zM8 9v2h8V9z"></svg:path>`,
})
export class MdiMessageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageMinusOutlineIcon],svg[mdi-message-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zM8 9v2h8V9z"></svg:path>`,
})
export class MdiMessageMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageOffIcon],svg[mdi-message-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.95 17.75L5.2 2H20a2 2 0 0 1 2 2v12c0 .76-.43 1.41-1.05 1.75M2.39 1.73L1.11 3l.89.9V22l4-4h10.11l4.73 4.73l1.27-1.27z"></svg:path>`,
})
export class MdiMessageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageOffOutlineIcon],svg[mdi-message-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.2 4l-2-2H20a2 2 0 0 1 2 2v12c0 .76-.43 1.41-1.05 1.75L19.2 16h.8V4zm14.91 17.46l-1.27 1.27L16.11 18H6l-4 4V3.9L1.11 3l1.28-1.27L6.1 5.44L16.65 16h.01l2 2h-.01zm-8-5.46L4 5.89V18l2-2z"></svg:path>`,
})
export class MdiMessageOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageOutlineIcon],svg[mdi-message-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16z"></svg:path>`,
})
export class MdiMessageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessagePlusIcon],svg[mdi-message-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2zm-9 4v3H8v2h3v3h2v-3h3V9h-3V6z"></svg:path>`,
})
export class MdiMessagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessagePlusOutlineIcon],svg[mdi-message-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-4-7v2h-3v3h-2v-3H8V9h3V6h2v3z"></svg:path>`,
})
export class MdiMessagePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageProcessingIcon],svg[mdi-message-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h-2V9h2m-4 2h-2V9h2m-4 2H7V9h2m11-7H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMessageProcessingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageProcessingOutlineIcon],svg[mdi-message-processing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-3-5h-2V9h2m-4 2h-2V9h2m-4 2H7V9h2"></svg:path>`,
})
export class MdiMessageProcessingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageQuestionIcon],svg[mdi-message-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 12h-2v-2h2zm1.8-5c-.3.4-.7.6-1.1.8c-.3.2-.4.3-.5.5c-.2.2-.2.4-.2.7h-2c0-.5.1-.8.3-1.1c.2-.2.6-.5 1.1-.8c.3-.1.5-.3.6-.5s.2-.5.2-.7c0-.3-.1-.5-.3-.7s-.5-.3-.8-.3s-.5.1-.7.2q-.3.15-.3.6h-2c.1-.7.4-1.3.9-1.7s1.2-.5 2.1-.5s1.7.2 2.2.6s.8 1 .8 1.7q.15.6-.3 1.2"></svg:path>`,
})
export class MdiMessageQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageQuestionOutlineIcon],svg[mdi-message-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zM12.2 5.5c-.9 0-1.6.2-2.1.5c-.6.4-.9 1-.8 1.7h2q0-.45.3-.6c.2-.1.4-.2.7-.2s.6.1.8.3s.3.4.3.7s-.1.5-.2.7c-.2.2-.4.4-.6.5c-.5.3-.9.6-1.1.8c-.4.3-.5.6-.5 1.1h2c0-.3.1-.5.1-.7c.1-.2.3-.3.5-.5c.5-.2.8-.5 1.1-.9s.4-.8.4-1.2c0-.7-.3-1.3-.8-1.7c-.4-.3-1.2-.5-2.1-.5M11 12v2h2v-2z"></svg:path>`,
})
export class MdiMessageQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageReplyIcon],svg[mdi-message-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14l4 4z"></svg:path>`,
})
export class MdiMessageReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageReplyOutlineIcon],svg[mdi-message-reply-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 15.2L18.8 16H4V4h16z"></svg:path>`,
})
export class MdiMessageReplyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageReplyTextIcon],svg[mdi-message-reply-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H6V6h12zm0 3H6V9h12zm0 3H6v-2h12zm4-10a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14l4 4z"></svg:path>`,
})
export class MdiMessageReplyTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageReplyTextOutlineIcon],svg[mdi-message-reply-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11h9v2H9zm9-4H6v2h12zm4-3v18l-4-4H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2m-2 0H4v12h14.83L20 17.17z"></svg:path>`,
})
export class MdiMessageReplyTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageSettingsIcon],svg[mdi-message-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 22h2v-2h-2zm-4 0h2v-2H7zm8 0h2v-2h-2z"></svg:path>`,
})
export class MdiMessageSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageSettingsOutlineIcon],svg[mdi-message-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-9 8h2v-2h-2zm-4 0h2v-2H7zm8 0h2v-2h-2z"></svg:path>`,
})
export class MdiMessageSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageStarIcon],svg[mdi-message-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5.4 12L12 12.4L9.4 14l.7-3l-2.3-2l3-.3L12 6l1.2 2.8l3 .3l-2.3 2z"></svg:path>`,
})
export class MdiMessageStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageStarOutlineIcon],svg[mdi-message-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-8-3.6l2.6 1.6l-.7-3l2.3-2l-3-.3L12 6l-1.2 2.8l-3 .2l2.3 2l-.7 3z"></svg:path>`,
})
export class MdiMessageStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextIcon],svg[mdi-message-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M6 9h12v2H6m8 3H6v-2h8m4-4H6V6h12"></svg:path>`,
})
export class MdiMessageTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextClockIcon],svg[mdi-message-text-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.41V4a2 2 0 0 0-2-2H4c-1.1 0-2 .9-2 2v18l4-4h3.29A7.001 7.001 0 0 0 23 16c0-1.31-.37-2.54-1-3.59M6 6h12v2H6zm10 3c-1.9 0-3.63.77-4.89 2H6V9zM6 12h4.26c-.42.6-.76 1.28-.96 2H6zm10 8.85c-2.68 0-4.85-2.17-4.85-4.85s2.17-4.85 4.85-4.85c2.67 0 4.85 2.17 4.85 4.85s-2.18 4.85-4.85 4.85m.5-5.03l2.44 1.41l-.75 1.3L15 16.69V13h1.5z"></svg:path>`,
})
export class MdiMessageTextClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextClockOutlineIcon],svg[mdi-message-text-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.41V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18l4-4h3.29A7.001 7.001 0 0 0 23 16c0-1.31-.37-2.54-1-3.59M5.17 16L4 17.17V4h16v6.26A6.96 6.96 0 0 0 16 9c-1.9 0-3.63.77-4.89 2H6v2h3.69c-.44.91-.69 1.93-.69 3zM16 20.85c-2.68 0-4.85-2.17-4.85-4.85s2.17-4.85 4.85-4.85c2.67 0 4.85 2.17 4.85 4.85s-2.18 4.85-4.85 4.85M18 9H6V7h12zm-1.5 6.82l2.44 1.41l-.75 1.3L15 16.69V13h1.5z"></svg:path>`,
})
export class MdiMessageTextClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextFastIcon],svg[mdi-message-text-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm8 1h8v2h-8zm-9 3c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm9 1h5v2h-5zM1 15c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"></svg:path>`,
})
export class MdiMessageTextFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextFastOutlineIcon],svg[mdi-message-text-fast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11.5h7V13h-7zm0-3h9V10h-9zM20 5H9c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 10h-9.8L9 16.2V7h11zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"></svg:path>`,
})
export class MdiMessageTextFastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextLockIcon],svg[mdi-message-text-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 0A2.5 2.5 0 0 0 18 2.5V3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1v-.5A2.5 2.5 0 0 0 20.5 0m0 1A1.5 1.5 0 0 1 22 2.5V3h-3v-.5A1.5 1.5 0 0 1 20.5 1M4 2a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2v-5h-5c-1.11 0-2-.89-2-2V2zm2 4h7v2H6zm0 3h7v2H6zm0 3h8v2H6z"></svg:path>`,
})
export class MdiMessageTextLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextLockOutlineIcon],svg[mdi-message-text-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v-.5a2.5 2.5 0 0 0-5 0V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zM6 11h9v2H6zm0-4h9v2H6zm16 4v5c0 1.11-.89 2-2 2H6l-4 4V4a2 2 0 0 1 2-2h11v2H4v13.17L5.17 16H20v-5z"></svg:path>`,
})
export class MdiMessageTextLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextOutlineIcon],svg[mdi-message-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2zM4 4v13.17L5.17 16H20V4zm2 3h12v2H6zm0 4h9v2H6z"></svg:path>`,
})
export class MdiMessageTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMessageVideoIcon],svg[mdi-message-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 14l-4-3.2V14H6V6h8v3.2L18 6m2-4H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMessageVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMeteorIcon],svg[mdi-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.8 3l16.87 15.82s.33.45-.09.89c-.41.44-.95.06-.95.06zm5.01 1.59l13.1 12.05s.32.44-.09.86c-.42.47-.96.09-.96.09zM4.29 8l13.1 12.03s.32.44-.09.88c-.42.45-.96.09-.96.09zm7.76-2.04l9.15 8.41s.22.31-.07.63c-.28.3-.66.03-.66.03zm-6.6 5.95l9.15 8.42s.22.31-.06.62c-.29.31-.67.05-.67.05zm10.93-3.99l4.17 3.82s.11.14-.05.29c-.12.14-.31.02-.31.02zM7.56 16.1l4.18 3.81s.11.15-.04.29c-.14.15-.33.02-.33.02z"></svg:path>`,
})
export class MdiMeteorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMeterElectricIcon],svg[mdi-meter-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.96 0-9 4.04-9 9c0 3.91 2.5 7.24 6 8.47V22h2v-2.06c.33.06.66.06 1 .06s.67 0 1-.06V22h2v-2.53c3.5-1.24 6-4.57 6-8.47c0-4.96-4.04-9-9-9m2.25 12l-3 3l-1.5-1.5L11 14.25L9.75 13l3-3l1.5 1.5L13 12.75zM16 9H8V7h8z"></svg:path>`,
})
export class MdiMeterElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMeterElectricOutlineIcon],svg[mdi-meter-electric-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11a9 9 0 0 0-18 0c0 3.92 2.5 7.24 6 8.5V22h2v-2.06c.33.06.66.06 1 .06s.67 0 1-.06V22h2v-2.5c3.5-1.26 6-4.58 6-8.5m-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 7h8v2H8zm4.75 3l-3 3L11 14.25L9.75 15.5l1.5 1.5l3-3L13 12.75l1.25-1.25z"></svg:path>`,
})
export class MdiMeterElectricOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMeterGasIcon],svg[mdi-meter-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-1V2h-2v2h-2V2H9v2H8C5.79 4 4 5.79 4 8v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4m-4 14c-1.38 0-2.5-1.1-2.5-2.46c0-1.09.43-1.39 2.5-3.79c2.05 2.38 2.5 2.7 2.5 3.79C14.5 16.9 13.38 18 12 18m4-8H8V8h8z"></svg:path>`,
})
export class MdiMeterGasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMeterGasOutlineIcon],svg[mdi-meter-gas-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-1V2h-2v2h-2V2H9v2H8C5.79 4 4 5.79 4 8v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4m2 14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zm-8.5-2.46C9.5 16.9 10.62 18 12 18s2.5-1.1 2.5-2.46c0-1.09-.45-1.41-2.5-3.79c-2.07 2.4-2.5 2.71-2.5 3.79M8 8h8v2H8z"></svg:path>`,
})
export class MdiMeterGasOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMetronomeIcon],svg[mdi-metronome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.75l-3.43.92l-4.51 16.86c-.03.15-.06.31-.06.47c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2c0-.16-.03-.32-.06-.47l-1.36-5.11L17 16l.2 1h-3.79l2.84-2.84l-1.41-1.41L10.59 17H6.8l3.49-13h3.42l1.46 5.43l1.63-1.64l-1.37-5.12zM11.25 5v9.75l1.5-1.5V5zm8.54 2.8l-2.83 2.83l-.71-.71l-1.41 1.42l2.82 2.82l1.42-1.41l-.71-.71l2.83-2.83z"></svg:path>`,
})
export class MdiMetronomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMetronomeTickIcon],svg[mdi-metronome-tick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.75l-3.43.92l-4.5 16.83c-.01 0-.07.34-.07.5c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2c0-.16-.06-.5-.07-.5l-4.5-16.83zM10.29 4h3.42l3.49 13H13v-5h-2v5H6.8zM11 5v4h-1v2h4V9h-1V5z"></svg:path>`,
})
export class MdiMetronomeTickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicroSdIcon],svg[mdi-micro-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a2 2 0 0 0-2 2v7l-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 2h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"></svg:path>`,
})
export class MdiMicroSdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneIcon],svg[mdi-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z"></svg:path>`,
})
export class MdiMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneMessageIcon],svg[mdi-microphone-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m6 7c0 2.97-2.16 5.44-5 5.92V22H7v-2.08c-2.84-.48-5-2.95-5-5.92h2a4 4 0 0 0 4 4a4 4 0 0 0 4-4zm7.41-4.59l-4.24 4.25L18.18 10H14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4c0 .55-.22 1.05-.59 1.41"></svg:path>`,
})
export class MdiMicrophoneMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneMessageOffIcon],svg[mdi-microphone-message-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-5.35-5.35A6 6 0 0 1 9 19.92V22H7v-2.08c-2.84-.48-5-2.95-5-5.92h2a4 4 0 0 0 4 4c1.82 0 3.36-1.22 3.84-2.89L10 13.27V14a2 2 0 0 1-2 2a2 2 0 0 1-2-2V9.27zm19.41 4.14l-4.24 4.25L18.18 10H14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4c0 .55-.22 1.05-.59 1.41"></svg:path>`,
})
export class MdiMicrophoneMessageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneMinusIcon],svg[mdi-microphone-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.5-2.56 6.43-6 6.93V21H8v-3.07c-3.44-.5-6-3.43-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5zm-1-6h8v2h-8z"></svg:path>`,
})
export class MdiMicrophoneMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneOffIcon],svg[mdi-microphone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11c0 1.19-.34 2.3-.9 3.28l-1.23-1.23c.27-.62.43-1.31.43-2.05zm-4 .16L9 5.18V5a3 3 0 0 1 3-3a3 3 0 0 1 3 3zM4.27 3L21 19.73L19.73 21l-4.19-4.19c-.77.46-1.63.77-2.54.91V21h-2v-3.28c-3.28-.49-6-3.31-6-6.72h1.7c0 3 2.54 5.1 5.3 5.1c.81 0 1.6-.19 2.31-.52l-1.66-1.66L12 14a3 3 0 0 1-3-3v-.72L3 4.27z"></svg:path>`,
})
export class MdiMicrophoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneOutlineIcon],svg[mdi-microphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.3 11c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72m-8.2-6.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3"></svg:path>`,
})
export class MdiMicrophoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophonePlusIcon],svg[mdi-microphone-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.5-2.56 6.43-6 6.93V21H8v-3.07c-3.44-.5-6-3.43-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5zm-1-6h3V2h2v3h3v2h-3v3h-2V7h-3z"></svg:path>`,
})
export class MdiMicrophonePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneQuestionIcon],svg[mdi-microphone-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c1.66 0 3 1.34 3 3v6c0 1.66-1.34 3-3 3s-3-1.34-3-3V5c0-1.66 1.34-3 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21H8v-3.07c-3.39-.49-6-3.4-6-6.93h2c0 2.76 2.24 5 5 5s5-2.24 5-5zm4.5 3.5V16H19v-1.5zm-2-5H17V9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .97-.5 1.88-1.29 2.41l-.3.19c-.57.4-.91 1.01-.91 1.7v.2H19v-.2c0-1.19.6-2.3 1.59-2.95l.29-.19c.39-.26.62-.69.62-1.16c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5z"></svg:path>`,
})
export class MdiMicrophoneQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneQuestionOutlineIcon],svg[mdi-microphone-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.3 11c0 3-2.54 5.1-5.3 5.1S3.7 14 3.7 11H2c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72M7.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2M9 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S6 3.34 6 5v6c0 1.66 1.34 3 3 3m11.5.5V16H19v-1.5zm-2-5H17V9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .97-.5 1.88-1.29 2.41l-.3.19c-.57.4-.91 1.01-.91 1.7v.2H19v-.2c0-1.19.6-2.3 1.59-2.95l.29-.19c.39-.26.62-.69.62-1.16c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5z"></svg:path>`,
})
export class MdiMicrophoneQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneSettingsIcon],svg[mdi-microphone-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72m-4 14h2v-2h-2m-4 2h2v-2h-2m1-9a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3M7 24h2v-2H7z"></svg:path>`,
})
export class MdiMicrophoneSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneVariantIcon],svg[mdi-microphone-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a4 4 0 0 1 4 4H5a4 4 0 0 1 4-4m2.84 6.82L11 18h-1v1a2 2 0 0 0 2 2a2 2 0 0 0 2-2v-5a4 4 0 0 1 4-4h2l-1 1l1 1h-2a2 2 0 0 0-2 2v5a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-1H7l-.84-8.18C5.67 9.32 5.31 8.7 5.13 8h7.74c-.18.7-.54 1.32-1.03 1.82M9 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrophoneVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneVariantOffIcon],svg[mdi-microphone-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22L16 19.26A4.01 4.01 0 0 1 12 23a4 4 0 0 1-4-4v-1H7l-.84-8.18a4.1 4.1 0 0 1-.83-1.22zM9 3a4 4 0 0 1 4 4H8.82L6.08 4.26C6.81 3.5 7.85 3 9 3m2.84 6.82l-.02.18l-2-2h3.05c-.18.7-.54 1.32-1.03 1.82M11 18h-1v1a2 2 0 0 0 2 2a2 2 0 0 0 2-2v-1.73l-2.65-2.65zm7-8h2l-1 1l1 1h-2a2 2 0 0 0-2 2v.18l-1.7-1.68C14.9 11 16.33 10 18 10M8 12a1 1 0 0 0 1 1c.21 0 .4-.06.56-.17l-1.39-1.39c-.11.16-.17.35-.17.56"></svg:path>`,
})
export class MdiMicrophoneVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicroscopeIcon],svg[mdi-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.46 6.28L11.05 9c-2.58.26-4.55 2.41-4.55 5a5 5 0 0 0 5 5c2.05 0 3.81-1.23 4.58-3H13.5v-2h8v2h-2.25a8.05 8.05 0 0 1-2.46 4h2.71v2h-16v-2h2.71a8 8 0 0 1-2.71-6c0-3.63 2.46-6.8 5.96-7.72m3.28-4.21l.76 1.3l.86-.5l3.5 6.06l-3.47 2l-3.5-6.06l.87-.5l-.76-1.3z"></svg:path>`,
})
export class MdiMicroscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftIcon],svg[mdi-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h9v9H2zm9 19H2v-9h9zM21 3v9h-9V3zm0 19h-9v-9h9z"></svg:path>`,
})
export class MdiMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftAccessIcon],svg[mdi-microsoft-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2.63q1.34 0 2.68.14l.67.09q.45.07.99.18q.53.11 1.09.27q.57.16 1.03.38t.75.5t.29.62v14.38q0 .34-.29.62q-.3.28-.75.5q-.46.22-1.03.38q-.56.16-1.1.27q-.53.11-.97.18q-.45.07-.69.09q-1.33.15-2.67.15q-1.35 0-2.68-.15q-.23-.02-.67-.09q-.45-.07-.99-.18q-.53-.11-1.09-.27q-.57-.16-1.02-.38q-.46-.22-.76-.5q-.29-.28-.29-.62V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7H7V4.81q0-.34.29-.62q.3-.28.76-.5q.45-.22 1.02-.38q.56-.16 1.1-.27q.53-.11.97-.18q.45-.06.69-.09q1.32-.14 2.67-.14m0 1.25q-.63 0-1.42.04q-.78.04-1.58.15q-.81.11-1.57.29t-1.35.45q.61.29 1.37.47q.75.18 1.55.28q.79.1 1.57.15q.78.04 1.43.04q.66 0 1.43-.04q.78-.05 1.57-.15q.8-.1 1.56-.28q.75-.18 1.36-.47q-.59-.27-1.35-.45t-1.57-.29q-.8-.11-1.58-.15t-1.42-.04m-8.56 9.91h2.12l.49 1.49h1.67L7.83 8.72H6.2l-2.42 6.56h1.66M20.75 19v-3q-.64.31-1.44.5q-.81.18-1.64.29q-.84.11-1.67.16q-.81.05-1.5.05q-.71 0-1.42-.04q-.71-.05-1.41-.13q-.23.17-.5.17H8.25v2q.28.21.75.38q.5.18 1.07.3q.58.13 1.22.22q.63.1 1.21.13q.62.06 1.14.08t.86.02q.34-.01.86-.03q.52-.01 1.14-.07q.58-.03 1.21-.13q.64-.09 1.22-.22q.57-.12 1.07-.3q.47-.17.75-.38m0-4.37V11q-.64.31-1.44.5q-.81.18-1.64.29q-.84.11-1.67.16q-.81.05-1.5.05q-.62 0-1.25-.03q-.62-.04-1.25-.1v3.75q.63.07 1.25.1q.63.03 1.25.03q.36 0 .88-.02t1.12-.07q.58-.06 1.2-.16q.63-.06 1.2-.19q.6-.13 1.06-.31q.49-.15.79-.37m0-5V6q-.64.31-1.44.5q-.81.18-1.64.29q-.84.11-1.67.16q-.81.05-1.5.05T13 6.95q-.83-.05-1.67-.16q-.83-.11-1.64-.29q-.8-.19-1.44-.5v1h2.92q.33 0 .59.24q.24.26.24.59v2.79q.63.07 1.25.1q.63.03 1.25.03q.36 0 .88-.02t1.12-.07q.58-.06 1.2-.16q.63-.06 1.2-.19q.6-.13 1.06-.31q.48-.15.79-.37M6.32 12.5l.68-2l.65 2Z"></svg:path>`,
})
export class MdiMicrosoftAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftAzureIcon],svg[mdi-microsoft-azure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.05 4.24L6.56 18.05L2 18l5.09-8.76zm.7 1.09L22 19.76H6.74l9.3-1.66l-4.87-5.79z"></svg:path>`,
})
export class MdiMicrosoftAzureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftAzureDevopsIcon],svg[mdi-microsoft-azure-devops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 18l-5 4l-8-3v3l-4.19-5.75l12.91 1.05V6.34L22 5.65zM4.81 16.25V8.96l12.91-2.62L10.6 2v2.84L3.97 6.76L2 9.38v5.69z"></svg:path>`,
})
export class MdiMicrosoftAzureDevopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftBingIcon],svg[mdi-microsoft-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v16l3.72 2L18 15.82v-4.09L9.77 8.95l1.61 3.89L13.94 14L8.7 16.92V4.27z"></svg:path>`,
})
export class MdiMicrosoftBingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftDynamics365Icon],svg[mdi-microsoft-dynamics-365-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 2l11.25 6.5l-3.75 3L6 8zm0 7l3.5 2.25L6 22L18 9v6L6 22z"></svg:path>`,
})
export class MdiMicrosoftDynamics365Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftEdgeIcon],svg[mdi-microsoft-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.86 15.37c-.69-.77-1.16-1.69-1.31-2.72c-.3.46-.55.96-.73 1.5c-.92 2.75.68 6.18 3.4 7.18c2.34.78 4.97-.61 6.7-2.13c.26-.35 2.31-2.16 1.29-2.36c-3.02 1.55-7.02 1.11-9.35-1.47m.6-5.81c1.04-.01.04-.43-.39-.75c-1.04-.57-2.26-.85-3.44-.85C3.78 8 .995 10.41 2.3 14.4c.94 3.88 4.31 7 8.29 7.5c-2.05-1.29-3.29-3.71-3.29-6.12c.08-2.53 1.64-5.5 4.16-6.22M2.78 8.24C5.82 6 10.66 6.18 13.28 9c1.02 1.11 1.72 3 .79 4.37c-1.74 1.88 3.08 2.13 4.11 1.85c3.74-.72 4.73-5.07 2.95-8.07c-1.7-3.4-5.47-5.18-9.17-5.15c-4.06-.07-7.71 2.5-9.18 6.24"></svg:path>`,
})
export class MdiMicrosoftEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftEdgeLegacyIcon],svg[mdi-microsoft-edge-legacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2.737 10.808c1.092-12.17 19.779-12.17 18.46 2.75H8.614c0 4.295 5.802 5.651 10.925 2.75v4.22c-6.291 3.353-14.542.904-14.542-6.443c0-5.5 4.973-7.27 4.973-7.27s-1.394 1.77-1.431 3.24h7.158c0-7.121-9.796-4.484-12.96.753z" fill="currentColor"></svg:path>`,
})
export class MdiMicrosoftEdgeLegacyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftExcelIcon],svg[mdi-microsoft-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.17 3.25q.33 0 .59.25q.24.24.24.58v15.84q0 .34-.24.58q-.26.25-.59.25H7.83q-.33 0-.59-.25q-.24-.24-.24-.58V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7H7V4.08q0-.34.24-.58q.26-.25.59-.25M7 13.06l1.18 2.22h1.79L8 12.06l1.93-3.17H8.22L7.13 10.9l-.04.06l-.03.07q-.26-.53-.56-1.07q-.25-.53-.53-1.07H4.16l1.89 3.19L4 15.28h1.78m8.1 4.22V17H8.25v2.5m5.63-3.75v-3.12H12v3.12m1.88-4.37V8.25H12v3.13M13.88 7V4.5H8.25V7m12.5 12.5V17h-5.62v2.5m5.62-3.75v-3.12h-5.62v3.12m5.62-4.37V8.25h-5.62v3.13M20.75 7V4.5h-5.62V7Z"></svg:path>`,
})
export class MdiMicrosoftExcelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftInternetExplorerIcon],svg[mdi-microsoft-internet-explorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 3l1 .06c2.8-1.27 5.23-1.42 6.5-.14c1 1.01 1.08 2.75.42 4.8A9 9 0 0 1 22 12l-.05 1H9.08c.37 2.28 1.98 4 3.92 4c1.31 0 2.47-.79 3.2-2h5.3c-1.25 3.5-4.58 6-8.5 6c-1.28 0-2.5-.27-3.59-.75c-2.91 1.43-5.52 1.65-6.84.31C1 18.96 1.68 15.57 4 12c.93-1.46 2.14-2.94 3.57-4.35l.81-.77c-1.17.69-2.67 1.74-4.19 3.29A9 9 0 0 1 13 3m0 4c-1.79 0-3.31 1.47-3.82 3.5h7.64C16.31 8.47 14.79 7 13 7m7.06-2.94c-.66-.67-1.84-.71-3.32-.25c1.48.69 2.76 1.75 3.67 3.08c.32-1.24.23-2.24-.35-2.83M3.89 20c.83.84 2.51.69 4.55-.24a9.05 9.05 0 0 1-3.97-4.88C3.27 17.15 3 19.07 3.89 20"></svg:path>`,
})
export class MdiMicrosoftInternetExplorerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftOfficeIcon],svg[mdi-microsoft-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.94 5.59v12.8q0 .67-.39 1.2q-.39.52-1.05.7l-5.73 1.65q-.12.03-.27.06h-.22q-.33 0-.6-.09t-.55-.24l-3.75-2.12q-.21-.12-.33-.31t-.12-.43q0-.36.26-.61q.25-.25.61-.25h4.86V6.14L9 7.44q-.43.16-.7.56q-.27.38-.27.85v6.73q0 .42-.21.76q-.2.34-.57.54l-1.72.94q-.24.13-.48.13q-.41 0-.7-.29t-.29-.71V7.47q0-.52.27-.97q.28-.5.73-.76l6.16-3.5q.21-.12.45-.18t.48-.06q.17 0 .31.03q.14.02.31.07l5.73 1.59q.33.09.59.27t.45.43q.2.26.3.56q.1.31.1.64m-1.32 12.8V5.59q0-.23-.12-.4q-.15-.19-.37-.23l-2.82-.78Q15 4.09 14.65 4q-.33-.11-.65-.19v16.4L18.13 19q.22-.04.37-.21q.12-.17.12-.4"></svg:path>`,
})
export class MdiMicrosoftOfficeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftOnedriveIcon],svg[mdi-microsoft-onedrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.21 10.29q.79.05 1.49.39q.69.32 1.2.89q.51.55.81 1.26q.29.71.29 1.51q0 .84-.32 1.58t-.88 1.29q-.55.55-1.3.87q-.72.33-1.56.33H7q-1.03 0-1.94-.41q-.91-.39-1.59-1.06q-.68-.68-1.07-1.59q-.4-.91-.4-1.94q0-.82.26-1.58q.24-.75.74-1.38q.44-.63 1.08-1.1t1.42-.72q.37-.13.71-.13q.35-.07.72-.09h.01q.43-.66 1.01-1.18q.55-.52 1.25-.89q.67-.34 1.42-.56q.75-.19 1.54-.19q1.06 0 2.04.35t1.8.97q.8.62 1.37 1.48q.58.87.84 1.9m-6.05-3.45q-1.11 0-2.1.46q-1 .45-1.7 1.3q.37.1.71.25q.33.15.66.35l3.98 2.38l2.29-.96q.21-.09.44-.17q.23-.07.48-.12q-.24-.78-.71-1.42t-1.1-1.1q-.61-.46-1.38-.71q-.73-.26-1.57-.26M4 15.66l8.27-3.48l-3.19-1.92q-.49-.29-1.02-.45q-.56-.15-1.11-.15q-.76 0-1.45.3q-.66.3-1.16.81q-.5.52-.8 1.2q-.29.68-.29 1.44q0 .59.2 1.18q.19.6.55 1.07m13.94 1.5q.47 0 .9-.16q.43-.14.8-.42L13.61 13l-8.58 3.59q.44.27.94.41q.5.16 1.03.16m13.45-1.55q.3-.61.3-1.27q0-.64-.25-1.17q-.24-.52-.65-.89q-.42-.37-.97-.57q-.56-.21-1.18-.21q-.35 0-.7.1q-.34.08-.67.21q-.33.12-.66.27q-.32.15-.63.29Z"></svg:path>`,
})
export class MdiMicrosoftOnedriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftOnenoteIcon],svg[mdi-microsoft-onenote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.17 3.25q.33 0 .59.25q.24.24.24.58v15.84q0 .34-.24.58q-.26.25-.59.25H7.83q-.33 0-.59-.25q-.24-.24-.24-.58V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7H7V4.08q0-.34.24-.58q.26-.25.59-.25M5.8 11.17l2.36 4.1h1.49V8.73H8.2v4.19L5.93 8.73H4.35v6.54H5.8m14.95 4.23V17h-2.5v2.5m2.5-3.75v-2.5h-2.5v2.5m2.5-3.75V9.5h-2.5V12m2.5-3.75V4.5H8.25V7h2.92q.33 0 .59.24q.24.26.24.59v8.34q0 .33-.24.59q-.26.24-.59.24H8.25v2.5H17V8.25Z"></svg:path>`,
})
export class MdiMicrosoftOnenoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftOutlookIcon],svg[mdi-microsoft-outlook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.56 12.03q0 .38-.06.73q-.11.34-.3.62q-.2.27-.49.43q-.3.16-.71.16q-.42 0-.71-.17t-.48-.45t-.27-.63q-.09-.35-.09-.72q0-.36.09-.72q.08-.35.27-.63t.5-.45q.3-.17.72-.17q.43 0 .72.17q.3.18.48.46q.18.29.27.64q.06.36.06.73M22 12v7.81q0 .39-.27.69q-.28.25-.67.25H7.94q-.39 0-.67-.25q-.27-.3-.27-.69V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7h5.42V4.13q0-.37.25-.63q.26-.25.63-.25h10.74q.37 0 .63.25q.25.26.25.63v6.91l1.04.6h.01q.08.06.14.16q.06.09.06.2m-5-6.87v2.5h2.5v-2.5M17 8.88v2.5h2.5v-2.5M17 12.63v1.52l2.54-1.52m-6.91-7.5v2.5h3.12v-2.5m-3.12 3.75v2.5h3.12v-2.5m-3.12 3.75v1.69l2.01 1.24l1.11-.66v-2.27M9.5 5.13V7h1.77q.06 0 .11.04V5.12M7 15.32q.73 0 1.32-.26q.58-.26.99-.71q.4-.45.6-1.07q.21-.62.22-1.34q0-.69-.21-1.29q-.2-.59-.6-1.03q-.39-.44-.95-.69q-.57-.25-1.29-.25q-.77 0-1.37.25q-.59.25-1 .7q-.41.46-.62 1.08q-.21.63-.21 1.37q0 .7.21 1.3q.22.59.62 1.02t.97.68q.58.24 1.32.24m1.25 4.18h10.32L12 15.4v.77q0 .33-.24.59q-.26.24-.59.24H8.25m12.5 2.39v-6.03l-4.92 2.95Z"></svg:path>`,
})
export class MdiMicrosoftOutlookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftPowerpointIcon],svg[mdi-microsoft-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 3.25q1.21 0 2.33.31q1.12.32 2.09.89q.97.55 1.77 1.36q.79.8 1.36 1.77q.58.97.89 2.09T22 12t-.31 2.33t-.89 2.09q-.57.97-1.36 1.77q-.8.81-1.77 1.36q-.97.58-2.09.89t-2.33.31q-1.07 0-2.1-.25q-1.03-.26-1.95-.74q-.92-.49-1.7-1.18q-.81-.7-1.43-1.58H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.58Q2.5 7 2.83 7h3.24q.62-.88 1.43-1.58q.78-.7 1.7-1.18q.93-.48 1.95-.74q1.03-.25 2.1-.25m.63 1.28v6.84h6.84q-.12-1.37-.69-2.56T18.55 6.7q-.91-.91-2.12-1.48q-1.2-.57-2.55-.69M9.5 10.84q0-.57-.2-.97q-.19-.41-.52-.66q-.33-.26-.78-.37q-.45-.12-1-.12H4.37v6.55h1.54V13h1.03q.48 0 .93-.16q.46-.14.82-.41q.36-.26.58-.67q.23-.4.23-.92m3.75 8.66q.98 0 1.89-.24q.9-.26 1.71-.68q.81-.45 1.48-1.08q.67-.61 1.17-1.37q.5-.77.83-1.66q.31-.89.39-1.85h-8.08V4.53q-1.45.12-2.73.76T7.67 7h3.5q.33 0 .59.25q.24.25.24.58v8.34q0 .33-.24.59q-.26.24-.59.24h-3.5q.53.6 1.17 1.06q.66.44 1.35.78q.72.33 1.49.49q.77.17 1.57.17M6.85 10q.47 0 .76.19q.28.19.28.7q0 .22-.1.36t-.26.25q-.16.07-.35.1q-.18.04-.38.04h-.89V10z"></svg:path>`,
})
export class MdiMicrosoftPowerpointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftSharepointIcon],svg[mdi-microsoft-sharepoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.25q0 1.04-.4 1.95q-.39.9-1.07 1.58t-1.59 1.08q-.91.39-1.94.39q-.64 0-1.27-.16q-.09.83-.46 1.54q-.38.72-.97 1.25q-.58.53-1.33.82q-.76.3-1.59.3q-.91 0-1.71-.35q-.79-.34-1.39-.93q-.59-.59-.93-1.39q-.35-.8-.35-1.7v-.32q.03-.15.05-.31H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7h2.95q.12-1.06.61-2q.48-.89 1.24-1.56q.75-.68 1.71-1.06T11.38 2q1.16 0 2.18.44q1.03.45 1.79 1.21t1.21 1.79Q17 6.46 17 7.63v.31q0 .15-.04.31q1.04 0 1.95.39q.92.39 1.59 1.07q.71.67 1.1 1.58q.4.92.4 1.96m-10.63-10q-.81 0-1.54.29q-.74.28-1.33.78q-.56.5-.95 1.18q-.38.7-.5 1.5h4.12q.33 0 .59.25q.24.25.24.58v4.12l.18-.03q.17-.62.5-1.18q.32-.57.79-1.02q.45-.45 1.03-.79q.54-.33 1.17-.5q.08-.43.08-.8q0-.91-.35-1.71q-.34-.79-.94-1.38q-.59-.59-1.38-.94q-.8-.35-1.71-.35m-4.27 12q.45 0 .9-.09q.42-.09.76-.31q.34-.21.55-.56q.19-.36.19-.88q0-.53-.2-.88q-.22-.35-.55-.59q-.33-.23-.71-.38l-.72-.29Q7 11.14 6.77 11q-.22-.15-.22-.38q0-.16.12-.27q.12-.1.28-.15q.16-.07.33-.09q.18-.01.3-.01q.49 0 .88.12q.38.13.79.38V9.12Q9 9.05 8.81 9q-.2-.05-.39-.08q-.2-.03-.42-.05q-.2-.01-.45-.01q-.43 0-.88.09q-.45.1-.82.32q-.35.23-.59.56q-.23.35-.23.86q0 .5.22.81q.22.35.55.59q.33.23.7.41l.72.29q.34.14.56.29q.22.16.22.38q0 .19-.11.3q-.1.11-.26.16q-.13.08-.32.08H7q-.59 0-1.04-.18q-.46-.2-.92-.52v1.56q.99.39 2.06.39m4.27 5.5q.63 0 1.21-.25q.57-.24 1-.66q.42-.43.67-1t.25-1.21q0-.56-.19-1.07q-.18-.51-.51-.91q-.34-.41-.8-.69q-.45-.28-1-.4v1.61q0 .33-.24.59q-.26.24-.59.24H8.31q-.06.31-.06.63q0 .64.25 1.21q.24.57.66 1q.43.42 1 .66q.57.25 1.21.25M17 17q.77 0 1.45-.29q.69-.29 1.2-.81q.51-.51.81-1.19q.29-.68.29-1.46q0-.75-.29-1.45q-.3-.69-.81-1.2t-1.2-.81Q17.77 9.5 17 9.5t-1.45.3t-1.19.81t-.81 1.19q-.3.7-.3 1.45v.21l.02.22q.46.22.85.54q.38.32.7.71q.3.4.52.86q.21.46.32.95q.66.26 1.34.26"></svg:path>`,
})
export class MdiMicrosoftSharepointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftTeamsIcon],svg[mdi-microsoft-teams-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.19 8.77q-.46 0-.86-.17q-.39-.17-.69-.47t-.47-.69q-.17-.4-.17-.86q0-.45.17-.85t.47-.69q.3-.3.69-.47q.4-.18.86-.17q.45-.01.85.17q.4.17.7.47q.29.29.47.69q.17.4.17.85q0 .46-.17.86q-.17.39-.47.69t-.7.47t-.85.17m0-3.12q-.39 0-.69.27q-.25.27-.25.66t.25.67q.3.25.69.25t.66-.25q.28-.25.28-.67q0-.39-.28-.66q-.27-.27-.66-.27M22 10.33V15q0 .63-.24 1.2q-.26.57-.67.99q-.43.43-1 .67q-.59.25-1.21.25q-.38 0-.76-.11q-.39-.07-.71-.25q-.24.79-.71 1.44t-1.1 1.11t-1.39.7q-.76.27-1.58.27q-.96 0-1.81-.33q-.82-.33-1.5-.94q-.66-.57-1.09-1.36q-.44-.8-.57-1.74H2.83q-.33 0-.59-.25q-.24-.24-.24-.58V7.73q0-.34.24-.59q.26-.24.59-.24H10q-.29-.6-.29-1.25q0-.61.23-1.15q.22-.5.62-.92q.4-.39.94-.62q.5-.23 1.12-.23q.61 0 1.14.23t.93.62q.4.42.62.92q.23.54.23 1.15q0 .6-.23 1.14q-.22.53-.62.92q-.4.4-.93.63t-1.14.23q-.15 0-.31-.02q-.15-.02-.31-.05v.9h9.06q.39 0 .67.27q.27.27.27.66M12.63 4q-.35 0-.63.11q-.33.13-.56.36q-.22.23-.35.53q-.13.31-.13.65q0 .35.13.65t.35.53q.23.22.56.36q.28.13.63.13q.34 0 .64-.13q.3-.14.53-.36q.23-.23.36-.53q.14-.3.14-.65q0-.34-.14-.65q-.13-.3-.36-.53t-.53-.36q-.3-.11-.64-.11m-4.85 6.18h1.88V8.62H4.34v1.56h1.88v5h1.56m8.6 1.09v-5.62H12v5.42q0 .34-.24.58q-.26.25-.59.25H8.92q.13.67.47 1.25q.34.57.82.99q.48.41 1.1.65q.61.21 1.32.21q.77 0 1.45-.27q.68-.3 1.2-.81q.51-.51.8-1.19q.3-.68.3-1.46M20.75 15v-4.35h-3.12v5.71q.25.25.57.38q.3.12.68.12q.39 0 .73-.15t.59-.4q.26-.25.4-.6q.15-.34.15-.71"></svg:path>`,
})
export class MdiMicrosoftTeamsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftVisualStudioIcon],svg[mdi-microsoft-visual-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 8.5l-4.75 3.82L17 16zM4.7 18.4L2 16.7v-9l3-1l4.3 3.33L18 2l4 2.5V20l-5 2l-7.66-7.34zM5 14l1.86-1.72L5 10.5z"></svg:path>`,
})
export class MdiMicrosoftVisualStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftVisualStudioCodeIcon],svg[mdi-microsoft-visual-studio-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16.47V7.39l-6 4.54M2.22 9.19a.86.86 0 0 1-.02-1.15l1.2-1.11c.2-.18.69-.26 1.05 0l3.42 2.61l7.93-7.25c.32-.32.87-.45 1.5-.12l4 1.91c.36.21.7.54.7 1.15v13.5c0 .4-.29.83-.6 1l-4.4 2.1c-.32.13-.92.01-1.13-.2l-8.02-7.3l-3.4 2.6c-.38.26-.85.19-1.05 0l-1.2-1.1c-.32-.33-.28-.87.05-1.2l3-2.7"></svg:path>`,
})
export class MdiMicrosoftVisualStudioCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftWindowsIcon],svg[mdi-microsoft-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12V6.75l6-1.32v6.48zm17-9v8.75l-10 .15V5.21zM3 13l6 .09v6.81l-6-1.15zm17 .25V22l-10-1.91V13.1z"></svg:path>`,
})
export class MdiMicrosoftWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftWindowsClassicIcon],svg[mdi-microsoft-windows-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.67 5.3v.61l-.71.3V5.6zm0 5.94v.62l-.71.29v-.59zm0 6.03v.62l-.71.29v-.59zM2.6 7.29v.55l-.57.26v-.54zm0 1.99v.54l-.57.26v-.54zm0 4.03v.53l-.57.26v-.54zm0 2.02v.54l-.57.26v-.53zm1.9-9.69v.72l-1 .37V6zm0 6.02v.71l-1 .37v-.71zm0 6.04v.71l-1 .4v-.71zm-.07-9.98v.66l-.79.3V8zm0 2.01v.64l-.78.3V10zm0 4.01v.64l-.78.31v-.66zm0 2.02v.65l-.78.31v-.66zm1.88-9.67v.85l-1.26.49v-.84zm0 6.02v.85l-1.26.49v-.84zm0 5.97v.85l-1.26.5v-.85zm-.06-9.9v.76l-1.06.4v-.73zm0 2v.75l-1.06.42v-.75zm0 4.01v.75l-1.06.43v-.75zm0 1.95v.76l-1.06.42v-.75zm2.04-10.1v1.12l-1.57.62V6.67zm0 6.02v1.13l-1.57.61v-1.12zm0 5.97v1.12l-1.57.62v-1.11zm-.09-9.9v1.03l-1.31.53V8.66zm0 2v1.02l-1.31.53v-1.03zm0 4.02v1.03l-1.31.52v-1.03zm0 1.95v1.02l-1.31.52v-1.01zm2.14-10.25v1.47L8.61 8V6.56zm0 6.02v1.46l-1.73.7v-1.47zm0 5.97v1.46l-1.73.7v-1.46zm-.08-9.79v1.23l-1.48.59V8.64zm0 1.92v1.23l-1.48.58v-1.22zm0 4.09v1.25l-1.48.57v-1.23zm0 1.94v1.25l-1.48.59V16.6zm2.19-10.88v2l-1.86.77V6c.64-.35 1.26-.65 1.86-.88m0 2.21v1.73l-1.86.78V8.1zm0 1.95v1.76l-1.86.78v-1.76zm0 1.97V13l-1.86.77V12zm0 1.96V15l-1.86.78V14zm0 2v1.75l-1.86.8V16zm0 1.96v1.87c-.73.28-1.35.55-1.86.8v-1.88zm9.59-11.99v14.05c-1.19-.79-2.67-1.18-4.45-1.18c-1.47 0-3.12.3-4.94.91v-1.9c.97-.37 2.03-.64 3.19-.8v-4.57c-.98.12-2.04.46-3.19 1.02V11.4c.99-.46 2.06-.77 3.19-.94V6c-1.02.18-2.08.53-3.19 1V5.03C14.27 4.34 15.86 4 17.41 4c1.68 0 3.22.39 4.63 1.18m-1.89 1.23c-.76-.41-1.65-.59-2.73-.59c-.13 0-.25.01-.37.02v4.54l.41-.01c.91 0 1.81.13 2.69.43zm0 5.69c-.81-.36-1.72-.54-2.71-.54c-.13 0-.26.01-.39.02v4.58h.41c.99 0 1.89.12 2.69.37z"></svg:path>`,
})
export class MdiMicrosoftWindowsClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftWordIcon],svg[mdi-microsoft-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.17 3.25q.33 0 .59.25q.24.24.24.58v15.84q0 .34-.24.58q-.26.25-.59.25H7.83q-.33 0-.59-.25q-.24-.24-.24-.58V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7H7V4.08q0-.34.24-.58q.26-.25.59-.25m-.8 8.09l1.2 3.94H9.6l1.31-6.56H9.53l-.78 3.88l-1.11-3.75H6.5l-1.19 3.77l-.78-3.9H3.09l1.31 6.56h1.37m14.98 4.22V17H8.25v2.5m12.5-3.75v-3.12H12v3.12m8.75-4.37V8.25H12v3.13M20.75 7V4.5H8.25V7Z"></svg:path>`,
})
export class MdiMicrosoftWordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxIcon],svg[mdi-microsoft-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.43 3.72c.07-.06.14-.12.19-.16C8.18 2.55 10 2 12 2c1.88 0 3.64.5 5.14 1.42c.11.08.4.27.56.46C16.25 2.28 12 5.7 12 5.7c-1.5-1.13-2.83-1.9-3.84-2.2c-.85-.21-1.43 0-1.7.2m12.88 1.51c-.05-.05-.1-.1-.14-.15c-.36-.4-.82-.5-1.2-.47c-.39.12-2.1.73-4.2 2.72c0 0 2.37 2.3 3.82 4.65s2.31 4.2 1.78 6.77C21 16.95 22 14.59 22 12c0-2.62-1-5-2.66-6.79m-3.61 7.75c-.65-.72-1.6-1.75-2.87-3.01c-.27-.27-.56-.55-.86-.85c0 0-.47.46-1.07 1.07c-.77.77-1.76 1.78-2.32 2.37c-.98 1.05-3.8 4.35-3.96 6.2c0 0-.65-1.46.75-4.85c.9-2.21 3.6-5.53 4.75-6.61c0 0-1.03-1.14-2.33-1.93l-.05-.03c-.63-.37-1.31-.66-1.97-.7c-.67.05-1.09.54-1.09.54A9.95 9.95 0 0 0 2 12a10 10 0 0 0 10 10c2.93 0 5.57-1.26 7.4-3.27c0 0-.21-1.33-1.56-3.23c-.31-.43-1.47-1.81-2.11-2.54"></svg:path>`,
})
export class MdiMicrosoftXboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerIcon],svg[mdi-microsoft-xbox-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 15.75C6.75 15.75 6 18 4 19c-2 0-3.5-3 .5-11.5h.25l.44-.83S8 5 9.33 6.23h5.34c1.33-1.23 4.14.44 4.14.44l.44.83h.25C23.5 16 22 19 20 19c-2-1-2.75-3.25-4.75-3.25zM12 7a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrosoftXboxControllerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerBatteryAlertIcon],svg[mdi-microsoft-xbox-controller-battery-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19V7h-6v12zm.67-14C22.4 5 23 5.6 23 6.33v13.34A1.33 1.33 0 0 1 21.67 21h-7.34c-.73 0-1.33-.6-1.33-1.33v-2.92H7.75C5.75 16.75 5 19 3 20c-2 0-3.5-3 .5-11.5h.25l.44-.83S7 6 8.33 7.23H13v-.9A1.33 1.33 0 0 1 14.33 5H16V3h4v2zM11 8a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m6 1h2v5h-2zm0 6h2v2h-2z"></svg:path>`,
})
export class MdiMicrosoftXboxControllerBatteryAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerBatteryChargingIcon],svg[mdi-microsoft-xbox-controller-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h1.67C22.4 5 23 5.6 23 6.33v13.34A1.33 1.33 0 0 1 21.67 21h-7.34c-.73 0-1.33-.6-1.33-1.33v-2.92H7.75C5.75 16.75 5 19 3 20c-2 0-3.5-3 .5-11.5h.25l.44-.83S7 6 8.33 7.23H13v-.9A1.33 1.33 0 0 1 14.33 5H16V3h4zm1 2h-6v12h6zm-5.5 7l3-6.5V12h2l-3 6.5V14zM11 8a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrosoftXboxControllerBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerBatteryEmptyIcon],svg[mdi-microsoft-xbox-controller-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19V7h-6v12zm.67-14C22.4 5 23 5.6 23 6.33v13.34A1.33 1.33 0 0 1 21.67 21h-7.34c-.73 0-1.33-.6-1.33-1.33v-2.92H7.75C5.75 16.75 5 19 3 20c-2 0-3.5-3 .5-11.5h.25l.44-.83S7 6 8.33 7.23H13v-.9A1.33 1.33 0 0 1 14.33 5H16V3h4v2zM11 8a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrosoftXboxControllerBatteryEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerBatteryFullIcon],svg[mdi-microsoft-xbox-controller-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.67 5C22.4 5 23 5.6 23 6.33v13.34A1.33 1.33 0 0 1 21.67 21h-7.34c-.73 0-1.33-.6-1.33-1.33v-2.92H7.75C5.75 16.75 5 19 3 20c-2 0-3.5-3 .5-11.5h.25l.44-.83S7 6 8.33 7.23H13v-.9A1.33 1.33 0 0 1 14.33 5H16V3h4v2zM11 8a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrosoftXboxControllerBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerBatteryLowIcon],svg[mdi-microsoft-xbox-controller-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16V7h-6v9zm.67-11C22.4 5 23 5.6 23 6.33v13.34A1.33 1.33 0 0 1 21.67 21h-7.34c-.73 0-1.33-.6-1.33-1.33v-2.92H7.75C5.75 16.75 5 19 3 20c-2 0-3.5-3 .5-11.5h.25l.44-.83S7 6 8.33 7.23H13v-.9A1.33 1.33 0 0 1 14.33 5H16V3h4v2zM11 8a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrosoftXboxControllerBatteryLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerBatteryMediumIcon],svg[mdi-microsoft-xbox-controller-battery-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12V7h-6v5zm.67-7C22.4 5 23 5.6 23 6.33v13.34A1.33 1.33 0 0 1 21.67 21h-7.34c-.73 0-1.33-.6-1.33-1.33v-2.92H7.75C5.75 16.75 5 19 3 20c-2 0-3.5-3 .5-11.5h.25l.44-.83S7 6 8.33 7.23H13v-.9A1.33 1.33 0 0 1 14.33 5H16V3h4v2zM11 8a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrosoftXboxControllerBatteryMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerBatteryUnknownIcon],svg[mdi-microsoft-xbox-controller-battery-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.67 5C22.4 5 23 5.6 23 6.33v13.34A1.33 1.33 0 0 1 21.67 21h-7.34c-.73 0-1.33-.6-1.33-1.33v-2.92H7.75C5.75 16.75 5 19 3 20c-2 0-3.5-3 .5-11.5h.25l.44-.83S7 6 8.33 7.23H13v-.9A1.33 1.33 0 0 1 14.33 5H16V3h4v2zM11 8a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m7.19 0c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91c-.2.26-.31.68-.31 1.18h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82c-.53-.45-1.26-.68-2.19-.68M17 15v2h2v-2z"></svg:path>`,
})
export class MdiMicrosoftXboxControllerBatteryUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerMenuIcon],svg[mdi-microsoft-xbox-controller-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M6 7h12v2H6zm0 4h12v2H6zm0 4h12v2H6z"></svg:path>`,
})
export class MdiMicrosoftXboxControllerMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerOffIcon],svg[mdi-microsoft-xbox-controller-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-6.23-6.25H8.75C6.75 15.75 6 18 4 19c-2 0-3.5-2.96.42-11.31zm7.33.96h5.34c1.33-1.23 4.14.44 4.14.44l.44.83h.25c3.5 7.5 2.78 10.7 1.19 11.37L7.62 5.8c.63-.07 1.25.01 1.71.43M12 7a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrosoftXboxControllerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerViewIcon],svg[mdi-microsoft-xbox-controller-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M6 7h9v2H8v5H6zm3 3h9v7H9zm2 2v3h5v-3z"></svg:path>`,
})
export class MdiMicrosoftXboxControllerViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftYammerIcon],svg[mdi-microsoft-yammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 12q0 .43-.03.94q-.02.51-.08 1.03q-.05.53-.13 1.03t-.2.89q-.06.18-.18.3q-.14.11-.34.11q-.09 0-.38-.07q-.29-.07-.63-.16l-.64-.19q-.3-.09-.43-.12q-.21.78-.55 1.62q-.33.83-.76 1.62q-.43.8-.95 1.5q-.52.75-1.09 1.32l-.18.13q-.1.05-.22.05q-.21 0-.37-.16l-4.74-4.73H2.85q-.35 0-.6-.25t-.25-.6V7.74q0-.35.25-.6t.6-.25h7.25l4.73-4.73Q15 2 15.21 2q.12 0 .21.05q.08.04.17.13q.26.26.49.53q.22.29.42.57q1.73 2.27 2.46 5q.18-.05.48-.14q.3-.09.62-.18q.31-.09.59-.16q.27-.06.39-.06q.2 0 .34.11q.12.12.18.3q.12.41.21.9q.08.5.14 1.01q.05.51.09 1.02V12M9.82 9.37q0-.31-.2-.52q-.22-.21-.52-.21q-.2 0-.38.1q-.17.11-.27.29l-1.3 2.44l-1.26-2.44q-.12-.23-.32-.31q-.2-.08-.44-.08q-.31 0-.52.21q-.21.21-.21.51q0 .21.1.37l1.75 3.14q.02.04.04.1q.01.06.01.11v1.55q0 .37.26.56q.25.17.59.17q.24 0 .39-.09q.14-.09.22-.24q.08-.15.11-.34q.03-.19.03-.41q0-.28-.02-.52q-.02-.26-.02-.48q0-.14.01-.25q.01-.1.06-.18l1.8-3.12q.1-.18.1-.36m5.34-5.74L11.8 7q.2.12.3.31q.12.19.12.43v2.33l5.5-1.46Q17.34 7.19 16.71 6q-.63-1.23-1.54-2.37m2.56 11.79l-5.51-1.47v2.31q0 .24-.12.43q-.1.19-.3.31l3.38 3.37q.89-1.08 1.54-2.33t1.01-2.61v-.01m2.74-.58q.13-.7.19-1.41q.06-.7.06-1.43q0-.71-.06-1.41t-.19-1.4q-2.07.55-4.12 1.1q-2.05.54-4.13 1.1q-.01.16-.01.31v.62l.01.31q2.08.56 4.13 1.1t4.12 1.11z" fill="currentColor"></svg:path>`,
})
export class MdiMicrosoftYammerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrowaveIcon],svg[mdi-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 2h12v10H4zm15 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-6 2v6h2V9zm6 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiMicrowaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMicrowaveOffIcon],svg[mdi-microwave-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l2.15 2.15C2.5 5.44 2 6.16 2 7v10a2 2 0 0 0 2 2h13.11l3.73 3.73zM4 17V7h1.11l10 10zM16 7v5.8l5.5 5.51c.31-.36.5-.81.5-1.31V7a2 2 0 0 0-2-2H8.2l2 2zm3 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-6-1.2V9h2v2.8z"></svg:path>`,
})
export class MdiMicrowaveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMiddlewareIcon],svg[mdi-middleware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-4-4v3h-4.18C14.4 9.84 13.3 9 12 9s-2.4.84-2.82 2H5L2 8v8l3-3h4.18c.42 1.16 1.52 2 2.82 2s2.4-.84 2.82-2H19v3z"></svg:path>`,
})
export class MdiMiddlewareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMiddlewareOutlineIcon],svg[mdi-middleware-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-4-4v3h-3.14c-.45-1.72-2-3-3.86-3s-3.41 1.28-3.86 3H5L2 8v8l3-3h3.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H19v3zm-11 2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class MdiMiddlewareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMidiIcon],svg[mdi-midi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.15 8.26H22v7.48h-1.85M13 8.26h5.43c.57 0 .87.48.87 1.04v5.51c0 .69-.3.93-.92.93H13V11h1.87v2.91h2.63V9.95H13m-2.68-1.69h1.82v7.48h-1.82M2 8.26h6.55c.55 0 .86.48.86 1.04v6.44H7.59v-5.59H6.5v5.59H4.87v-5.59H3.83v5.59H2Z"></svg:path>`,
})
export class MdiMidiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMidiInputIcon],svg[mdi-midi-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm8.182 10c0-3.82-2.635-7.039-6.182-7.934V6h-4V4.066C6.453 4.96 3.818 8.18 3.818 12c0 4.51 3.673 8.182 8.182 8.182c4.51 0 8.182-3.673 8.182-8.182zM7 10.636a1.364 1.364 0 1 1 0 2.728a1.364 1.364 0 0 1 0-2.728zm10 0a1.364 1.364 0 1 1 0 2.728a1.364 1.364 0 0 1 0-2.728zm-8.636 3.637a1.364 1.364 0 1 1 0 2.727a1.364 1.364 0 0 1 0-2.727zm7.272 0a1.364 1.364 0 1 1 0 2.727a1.364 1.364 0 0 1 0-2.727zM12 15.636a1.364 1.364 0 1 1 0 2.728a1.364 1.364 0 0 1 0-2.728z" fill="currentColor"></svg:path>`,
})
export class MdiMidiInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMidiPortIcon],svg[mdi-midi-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m8.18 10c0-3.82-2.63-7.04-6.18-7.93V6h-4V4.07A8.185 8.185 0 0 0 3.82 12A8.18 8.18 0 0 0 12 20.18A8.18 8.18 0 0 0 20.18 12M7 10.64A1.36 1.36 0 0 1 8.36 12A1.36 1.36 0 0 1 7 13.36c-.75 0-1.36-.61-1.36-1.36s.61-1.36 1.36-1.36m10 0A1.36 1.36 0 0 1 18.36 12A1.36 1.36 0 0 1 17 13.36A1.36 1.36 0 0 1 15.64 12A1.36 1.36 0 0 1 17 10.64m-8.64 3.63a1.37 1.37 0 0 1 1.37 1.37c0 .75-.61 1.36-1.37 1.36A1.36 1.36 0 0 1 7 15.64c0-.76.61-1.37 1.36-1.37m7.28 0c.75 0 1.36.61 1.36 1.37A1.36 1.36 0 0 1 15.64 17c-.76 0-1.37-.61-1.37-1.36a1.37 1.37 0 0 1 1.37-1.37M12 15.64A1.36 1.36 0 0 1 13.36 17A1.36 1.36 0 0 1 12 18.36A1.36 1.36 0 0 1 10.64 17A1.36 1.36 0 0 1 12 15.64"></svg:path>`,
})
export class MdiMidiPortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMineIcon],svg[mdi-mine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 13v-2h-3.07a8 8 0 0 0-1.62-3.9l2.19-2.17l-1.43-1.43l-2.17 2.19A8 8 0 0 0 13 4.07V1h-2v3.07c-1.42.18-2.77.74-3.9 1.62L4.93 3.5L3.5 4.93L5.69 7.1A8 8 0 0 0 4.07 11H1v2h3.07c.18 1.42.74 2.77 1.62 3.9L3.5 19.07l1.43 1.43l2.17-2.19c1.13.88 2.48 1.44 3.9 1.62V23h2v-3.07c1.42-.18 2.77-.74 3.9-1.62l2.17 2.19l1.43-1.43l-2.19-2.17a8 8 0 0 0 1.62-3.9zM12 8a4 4 0 0 0-4 4H6a6 6 0 0 1 6-6z"></svg:path>`,
})
export class MdiMineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinecraftIcon],svg[mdi-minecraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m2 4v4h4v2H8v6h2v-2h4v2h2v-6h-2v-2h4V6h-4v4h-4V6z"></svg:path>`,
})
export class MdiMinecraftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMiniSdIcon],svg[mdi-mini-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6l-2-2V6a2 2 0 0 0-2-2zm1 2h2v4H7zm3 0h2v4h-2zm3 0h2v4h-2z"></svg:path>`,
})
export class MdiMiniSdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinidiscIcon],svg[mdi-minidisc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm7 2a7 7 0 0 1 6.7 5H16a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2.71c-.89 2.97-3.62 5-6.71 5a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMinidiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusIcon],svg[mdi-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13H5v-2h14z"></svg:path>`,
})
export class MdiMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusBoxIcon],svg[mdi-minus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13H7v-2h10m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMinusBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusBoxMultipleIcon],svg[mdi-minus-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11H9V9h10m1-7H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4z"></svg:path>`,
})
export class MdiMinusBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusBoxMultipleOutlineIcon],svg[mdi-minus-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11h-8V9h8m2-5v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4z"></svg:path>`,
})
export class MdiMinusBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusBoxOutlineIcon],svg[mdi-minus-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V5H5v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2 8v2H7v-2z"></svg:path>`,
})
export class MdiMinusBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusCircleIcon],svg[mdi-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13H7v-2h10m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusCircleMultipleIcon],svg[mdi-minus-circle-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-2.79 1.64-5.2 4-6.32V3.5C2.5 4.76 0 8.09 0 12s2.5 7.24 6 8.5v-2.18C3.64 17.2 2 14.79 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9s9-4.04 9-9s-4.04-9-9-9m5 10H10v-2h10z"></svg:path>`,
})
export class MdiMinusCircleMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusCircleMultipleOutlineIcon],svg[mdi-minus-circle-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v2h8v-2zm-9 1c0-2.79 1.64-5.2 4-6.32V3.5C2.5 4.76 0 8.09 0 12s2.5 7.24 6 8.5v-2.18C3.64 17.2 2 14.79 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9s9-4.04 9-9s-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class MdiMinusCircleMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusCircleOffIcon],svg[mdi-minus-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3 3C2.8 7.6 2 9.7 2 12c0 5.5 4.5 10 10 10c2.3 0 4.4-.8 6-2.1l2.8 2.8zM7 13v-2h2.1l2 2zm7.2-2L6.7 3.5C8.3 2.6 10.1 2 12 2c5.5 0 10 4.5 10 10c0 1.9-.6 3.7-1.5 5.3L16.2 13h.8v-2z"></svg:path>`,
})
export class MdiMinusCircleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusCircleOffOutlineIcon],svg[mdi-minus-circle-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3 3C2.8 7.6 2 9.7 2 12c0 5.5 4.5 10 10 10c2.3 0 4.4-.8 6-2.1l2.8 2.8zM12 20c-4.4 0-8-3.6-8-8c0-1.7.6-3.3 1.5-4.6L9.1 11H7v2h4.1l5.5 5.5c-1.3.9-2.9 1.5-4.6 1.5M8.2 5L6.7 3.5C8.3 2.6 10.1 2 12 2c5.5 0 10 4.5 10 10c0 1.9-.6 3.7-1.5 5.3L19 15.8c.6-1.1 1-2.4 1-3.8c0-4.4-3.6-8-8-8c-1.4 0-2.7.4-3.8 1m8 8l-2-2H17v2z"></svg:path>`,
})
export class MdiMinusCircleOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusCircleOutlineIcon],svg[mdi-minus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7"></svg:path>`,
})
export class MdiMinusCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusNetworkIcon],svg[mdi-minus-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V9H8v2zm1-8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiMinusNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusNetworkOutlineIcon],svg[mdi-minus-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10zm8-4V9H9v2z"></svg:path>`,
})
export class MdiMinusNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMinusThickIcon],svg[mdi-minus-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H4v-4h16"></svg:path>`,
})
export class MdiMinusThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMirrorIcon],svg[mdi-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c4.69 0 8.5 4.93 8.5 11c0 6.08-3.81 11-8.5 11s-8.5-4.92-8.5-11C3.5 5.93 7.31 1 12 1m0 2c-3.59 0-6.5 4.03-6.5 9s2.91 9 6.5 9s6.5-4.03 6.5-9s-2.91-9-6.5-9m-3.71 7.28l3.24-3.25l1.06 1.06l-3.24 3.25zm.41 4.33l5.66-5.66L15.42 10l-5.66 5.67z"></svg:path>`,
})
export class MdiMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMirrorRectangleIcon],svg[mdi-mirror-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.29 10.28l3.24-3.25l1.06 1.06l-3.24 3.25zm.41 4.33l5.66-5.66L15.42 10l-5.66 5.67zM18 3v18H6V3zm2-2H4v22h16z"></svg:path>`,
})
export class MdiMirrorRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMirrorVariantIcon],svg[mdi-mirror-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.29 10.28l3.24-3.25l1.06 1.06l-3.24 3.25zm.41 4.33l5.66-5.66L15.42 10l-5.66 5.67zM14.17 3L18 6.83v10.34L14.17 21H9.83L6 17.17V6.83L9.83 3zM15 1H9L4 6v12l5 5h6l5-5V6z"></svg:path>`,
})
export class MdiMirrorVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMixcloudIcon],svg[mdi-mixcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.11 18.5c-.14 0-.28-.06-.4-.14a.74.74 0 0 1-.21-1.02c.68-1 1.04-2.18 1.04-3.41c0-1.22-.36-2.4-1.04-3.43a.72.72 0 0 1 .21-1c.33-.22.79-.13 1.01.2A7.545 7.545 0 0 1 23 13.93c0 1.52-.44 2.98-1.28 4.23c-.14.21-.37.34-.61.34M19 17.29c-.12 0-.26-.04-.39-.12a.734.734 0 0 1-.19-1.02c.44-.65.68-1.42.68-2.22c0-.79-.24-1.56-.68-2.22a.736.736 0 0 1 .19-1.02c.34-.22.79-.14 1.02.2a5.44 5.44 0 0 1 0 6.08c-.13.21-.38.32-.63.32m-4.1-1.56a1.8 1.8 0 0 0 .65-3.48c-.05.3-.12.6-.21.89c-.11.3-.39.5-.7.5c-.07 0-.14-.02-.23-.04a.734.734 0 0 1-.46-.93c.14-.43.22-.89.22-1.35C14.17 8.93 12.22 7 9.82 7C8.1 7 6.56 8 5.87 9.5c.67.2 1.29.54 1.79 1.04c.29.29.29.75 0 1.04c-.28.28-.75.28-1.03 0c-.46-.46-1.07-.72-1.73-.72a2.45 2.45 0 0 0-2.44 2.44c0 1.34 1.1 2.43 2.44 2.43h10m.7-4.98c1.46.32 2.57 1.62 2.57 3.18c0 1.8-1.47 3.26-3.27 3.26h-10c-2.15 0-3.9-1.74-3.9-3.89c0-1.96 1.45-3.57 3.33-3.85c.79-2.33 3-3.95 5.49-3.95c3.01 0 5.49 2.32 5.78 5.25z" fill="currentColor"></svg:path>`,
})
export class MdiMixcloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMixedMartialArtsIcon],svg[mdi-mixed-martial-arts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10V7H7v3zm3-3c.28 0 .5.09.7.29c.19.21.3.44.3.71v2.78c0 .19-.03.33-.06.42l-.8 3.99c-.14.53-.44.81-.94.81H6.8c-.53 0-.85-.28-.94-.81l-.8-3.99c-.03-.09-.06-.23-.06-.42V5c0-.5.21-1 .6-1.39C6 3.2 6.45 3 7 3h8c.53 0 1 .2 1.41.61c.4.39.59.89.59 1.39v3c0-.27.11-.5.3-.71c.2-.2.42-.29.7-.29M7 20v-3h10v3c0 .3-.09.53-.29.72c-.21.19-.44.28-.71.28H8c-.27 0-.5-.09-.71-.28c-.2-.19-.29-.42-.29-.72"></svg:path>`,
})
export class MdiMixedMartialArtsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMixedRealityIcon],svg[mdi-mixed-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m3.25 12h1.5l1-3.43V15h1.5V9H10l-1 3.43L8 9H5.75v6h1.5v-3.43zm5.25-6v6H15v-2h1.15l.85 2h1.5l-.9-2.1c.5-.25.9-.8.9-1.4v-1c0-.85-.65-1.5-1.5-1.5zm1.5 1.5h2v1h-2z"></svg:path>`,
})
export class MdiMixedRealityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMixerIcon],svg[mdi-mixer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.68 3.96l5.73 7.69c.14.19.14.45 0 .64L5.65 20l-.15.18c-.74.82-2.03.89-2.86.13c-.79-.72-.85-1.94-.21-2.81l4.13-5.53l-4.1-5.5c-.63-.85-.58-2.08.21-2.8l.15-.13c.91-.67 2.18-.49 2.86.42m12.64 0c.68-.91 1.95-1.09 2.86-.42l.15.13c.79.72.84 1.94.21 2.8l-4.1 5.5l4.13 5.53c.64.86.58 2.09-.21 2.81c-.83.76-2.12.69-2.86-.13l-.15-.18l-5.76-7.71a.54.54 0 0 1 0-.64l5.73-7.69z" fill="currentColor"></svg:path>`,
})
export class MdiMixerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoleculeIcon],svg[mdi-molecule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.27 10L9 7h5.42l1.16-2l-.08-.5A1.5 1.5 0 0 1 17 3a1.5 1.5 0 0 1 1.5 1.5c0 .71-.5 1.31-1.17 1.46l-.96 1.67L17.73 10l.86-1.5l-.09-.5A1.5 1.5 0 0 1 20 6.5A1.5 1.5 0 0 1 21.5 8c0 .71-.5 1.3-1.15 1.46L18.89 12l1.73 3c.77.07 1.38.71 1.38 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-.26L17.73 14l-1.36 2.37l.96 1.67a1.5 1.5 0 0 1 1.17 1.46A1.5 1.5 0 0 1 17 21a1.5 1.5 0 0 1-1.5-1.5l.08-.5l-1.16-2h-3.84l-1.16 2l.08.5A1.5 1.5 0 0 1 8 21a1.5 1.5 0 0 1-1.5-1.5c0-.71.5-1.31 1.17-1.46l.96-1.67L4.38 9C3.61 8.93 3 8.29 3 7.5A1.5 1.5 0 0 1 4.5 6A1.5 1.5 0 0 1 6 7.5v.26zm2.88-1l-1.73 3l1.73 3h4.7l1.73-3l-1.73-3z"></svg:path>`,
})
export class MdiMoleculeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoleculeCoIcon],svg[mdi-molecule-co-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h3v-2H8V9h3V7zm6 0c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiMoleculeCoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoleculeCo2Icon],svg[mdi-molecule-co2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v-2H5V9h3V7zm6 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zm5 1.5V12h3v1.5h-1.5A1.5 1.5 0 0 0 16 15v3h4.5v-1.5h-3V15H19a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class MdiMoleculeCo2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorIcon],svg[mdi-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorAccountIcon],svg[mdi-monitor-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2c1.05 0 1.92.81 2 1.85V16c0 1.05-.82 1.92-1.85 2H14v2h2v2H8v-2h2v-2H3c-1.05 0-1.92-.82-2-1.85V4a2 2 0 0 1 1.85-2zm0 2H3v12h18zm-9 7c2.21 0 4 .9 4 2v1H8v-1c0-1.1 1.79-2 4-2m0-5a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiMonitorAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorArrowDownIcon],svg[mdi-monitor-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16H3V4h18m0-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 8h-3V6h-2v4H8l4 4z"></svg:path>`,
})
export class MdiMonitorArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorArrowDownVariantIcon],svg[mdi-monitor-arrow-down-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 14l5-5l-1.4-1.4l-2.6 2.6V3h-2v7.2l-2.6-2.6L12 9zm6 0v2c0 1.1-.9 2-2 2h-7v2h2v2H8v-2h2v-2H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h9v2H3v12h18v-2z"></svg:path>`,
})
export class MdiMonitorArrowDownVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorCellphoneIcon],svg[mdi-monitor-cellphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11h-5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m0 9h-5v-7h5zM20 2H2C.89 2 0 2.89 0 4v12a2 2 0 0 0 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMonitorCellphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorCellphoneStarIcon],svg[mdi-monitor-cellphone-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11h-5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m0 9h-5v-7h5zM20 2H2C.89 2 0 2.89 0 4v12a2 2 0 0 0 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4a2 2 0 0 0-2-2m-8.03 7L11 6l-.97 3H7l2.47 1.76l-.94 2.91l2.47-1.8l2.47 1.8l-.94-2.91L15 9z"></svg:path>`,
})
export class MdiMonitorCellphoneStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorDashboardIcon],svg[mdi-monitor-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16V4H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2zM5 6h9v5H5zm10 0h4v2h-4zm4 3v5h-4V9zM5 12h4v2H5zm5 0h4v2h-4z"></svg:path>`,
})
export class MdiMonitorDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorEditIcon],svg[mdi-monitor-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14H3V4h18zm-5.16-7.8l-1.01 1.01l-2.07-2.03l1.01-1.02c.2-.21.54-.22.78 0l1.29 1.25c.21.21.22.55 0 .79M8 11.91l4.17-4.19l2.07 2.08l-4.16 4.2H8z"></svg:path>`,
})
export class MdiMonitorEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorEyeIcon],svg[mdi-monitor-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v12h18V4zm0-2h18a2 2 0 0 1 2 2v12c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59h-7v2h2v2H8v-2h2v-2H3c-.53 0-1.04-.21-1.41-.59C1.21 17.04 1 16.53 1 16V4c0-1.11.89-2 2-2m7.84 6.93c.31-.3.73-.48 1.16-.48c.43.01.85.18 1.16.49c.3.3.48.72.48 1.15c0 .44-.18.85-.48 1.16c-.31.31-.73.48-1.16.48s-.85-.18-1.16-.48c-.3-.31-.48-.72-.48-1.16c0-.43.18-.85.48-1.16M10.07 12a2.68 2.68 0 0 0 3.86 0c.51-.5.8-1.19.8-1.91s-.29-1.42-.8-1.93s-1.21-.8-1.93-.8s-1.42.29-1.93.8s-.8 1.21-.8 1.93s.29 1.41.8 1.91M6 10.09A6.45 6.45 0 0 1 12 6c2.73 0 5.06 1.7 6 4.09a6.42 6.42 0 0 1-6 4.09c-2.73 0-5.06-1.68-6-4.09"></svg:path>`,
})
export class MdiMonitorEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorLockIcon],svg[mdi-monitor-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 13a2.5 2.5 0 0 1 2.5 2.5v.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1v-.5a2.5 2.5 0 0 1 2.5-2.5m0 1a1.5 1.5 0 0 0-1.5 1.5v.5h3v-.5a1.5 1.5 0 0 0-1.5-1.5M20 4H2v12h13v2h-2v2h2v2H7v-2h2v-2H2a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h18a2 2 0 0 1 2 2v7.53c-.59-.34-1.27-.53-2-.53z"></svg:path>`,
})
export class MdiMonitorLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorMultipleIcon],svg[mdi-monitor-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17V7H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6v2h2v2h-8v-2h2v-2H6c-1.11 0-2-.89-2-2V7a2 2 0 0 1 2-2zM2 3v12H0V3a2 2 0 0 1 2-2h18v2z"></svg:path>`,
})
export class MdiMonitorMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorOffIcon],svg[mdi-monitor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4L0 3l1.41-1.42l20.75 20.76l-1.41 1.41L15 18zM3 16h10L3 6zM21 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-.34l-2-2H21V4H6.66l-2-2z"></svg:path>`,
})
export class MdiMonitorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorScreenshotIcon],svg[mdi-monitor-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6H5v4h2V8h2m10 2h-2v2h-2v2h4m2 2H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMonitorScreenshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorShareIcon],svg[mdi-monitor-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4v12c0 1.11-.89 2-2 2h-6v-2h6V4H3v12h6v2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h18a2 2 0 0 1 2 2m-10 9h3l-4-4l-4 4h3v7H8v2h8v-2h-3z"></svg:path>`,
})
export class MdiMonitorShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorShimmerIcon],svg[mdi-monitor-shimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-6 3.5l-.62 1.37L13 7.5l1.38.63L15 9.5l.63-1.37L17 7.5l-1.37-.63zm-4.5 2L9.41 9.91L7 11l2.41 1.09l1.09 2.41l1.1-2.41L14 11l-2.4-1.09z"></svg:path>`,
})
export class MdiMonitorShimmerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorSmallIcon],svg[mdi-monitor-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2H8v2h8v-2h-2v-2h5c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14H5V4h14z"></svg:path>`,
})
export class MdiMonitorSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorSpeakerIcon],svg[mdi-monitor-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h4v-6H3V4h18v3h2V4c0-1.1-.9-2-2-2zm18 7h-5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m-2.5 1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S17 12.8 17 12s.7-1.5 1.5-1.5m0 10c-1.7 0-3-1.3-3-3c0-1.6 1.3-3 2.9-3h.1c1.7 0 3 1.3 3 3s-1.3 3-3 3m0-4.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5"></svg:path>`,
})
export class MdiMonitorSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorSpeakerOffIcon],svg[mdi-monitor-speaker-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.4 1.7L1.1 3l.1.1c-.1.3-.2.6-.2.9v12c0 1.1.9 2 2 2h7v2H8v2h4v-6H3V4.9l11 11V20c0 1.1.9 2 2 2h4.1l.7.7s1.2-1 1.4-1.2zm16.1 18.8c-1.7 0-3-1.3-3-3v-.1l3.1 3.1zM23 4v3h-2V4H7.2l-2-2H21c1.1 0 2 .9 2 2m-2 5h-5c-1 0-1.9.8-2 1.8l3.8 3.8c.2-.1.4-.1.7-.1h.1c1.7 0 3 1.3 3 3c0 .2 0 .5-.1.7l1.6 1.6V11c-.1-1.1-1-2-2.1-2m-2.5 4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class MdiMonitorSpeakerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorStarIcon],svg[mdi-monitor-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16V4H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2zm-8.03 7H16l-2.47 1.76l.94 2.91l-2.47-1.8l-2.47 1.8l.94-2.91L8 9h3.03L12 6z"></svg:path>`,
})
export class MdiMonitorStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorVerticalIcon],svg[mdi-monitor-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h2v2H8v2h8v-2h-2v-2h2c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14H8V4h8z"></svg:path>`,
})
export class MdiMonitorVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoonFirstQuarterIcon],svg[mdi-moon-first-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v20a10 10 0 0 0 0-20"></svg:path>`,
})
export class MdiMoonFirstQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoonFullIcon],svg[mdi-moon-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiMoonFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoonLastQuarterIcon],svg[mdi-moon-last-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 0 0 20Z"></svg:path>`,
})
export class MdiMoonLastQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoonNewIcon],svg[mdi-moon-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-18a10 10 0 1 0 10 10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiMoonNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoonWaningCrescentIcon],svg[mdi-moon-waning-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12"></svg:path>`,
})
export class MdiMoonWaningCrescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoonWaningGibbousIcon],svg[mdi-moon-waning-gibbous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12c0-4.5-1.92-8.74-6-10a10 10 0 0 0 0 20c4.08-1.26 6-5.5 6-10"></svg:path>`,
})
export class MdiMoonWaningGibbousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoonWaxingCrescentIcon],svg[mdi-moon-waxing-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9.9 9.9 0 0 0-3 .46a10 10 0 0 1 0 19.08A10 10 0 1 0 12 2"></svg:path>`,
})
export class MdiMoonWaxingCrescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoonWaxingGibbousIcon],svg[mdi-moon-waxing-gibbous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12c0-4.5 1.93-8.74 6-10a10 10 0 0 1 0 20c-4.07-1.26-6-5.5-6-10"></svg:path>`,
})
export class MdiMoonWaxingGibbousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMopedIcon],svg[mdi-moped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m-9-7H5v2h5zm7-1h-3v2h3v2.65L13.5 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.5l4.5-5.65V7a2 2 0 0 0-2-2M7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"></svg:path>`,
})
export class MdiMopedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMopedElectricIcon],svg[mdi-moped-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5c0-1.1-.9-2-2-2h-3v2h3v2.65L13.5 12H10V7H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.5L19 8.35zM7 15c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1M5 4h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 20h4v-2l6 3h-4v2z"></svg:path>`,
})
export class MdiMopedElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMopedElectricOutlineIcon],svg[mdi-moped-electric-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5c0-1.1-.9-2-2-2h-3v2h3v2.65L13.5 12H10V7H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.5L19 8.35zM4 12v-1c0-1.1.9-2 2-2h2v3zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1M5 4h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 20h4v-2l6 3h-4v2z"></svg:path>`,
})
export class MdiMopedElectricOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMopedOutlineIcon],svg[mdi-moped-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7a2 2 0 0 0-2-2h-3v2h3v2.65L13.5 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.5l4.5-5.65zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1m1-3H4v-1c0-1.1.9-2 2-2h2zm11-1c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-9-9H5V6h5z"></svg:path>`,
})
export class MdiMopedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoreIcon],svg[mdi-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-5 0a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-5 0A1.5 1.5 0 0 1 7.5 12A1.5 1.5 0 0 1 9 10.5a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 9 13.5M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.96.89 1.65.89H22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMortarPestleIcon],svg[mdi-mortar-pestle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 7l-2 6l2 6v2H3v-2l2-6l-2-6V5h12.7l1.5-4l2.3.8L18.3 5H21z"></svg:path>`,
})
export class MdiMortarPestleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMortarPestlePlusIcon],svg[mdi-mortar-pestle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h-3v3h-2v-3H8v-2h3V9h2v3h3m5-7h-2.65l1.15-3.15L17.15 1l-1.46 4H3v2l2 6l-2 6v2h18v-2l-2-6l2-6z"></svg:path>`,
})
export class MdiMortarPestlePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMosqueIcon],svg[mdi-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h10c.3 0 .6.1.8.1c.1-.3.2-.7.2-1c0-1.3-.6-2.5-1.7-3.2L12 1L7.7 3.8c-1 .8-1.7 2-1.7 3.3c0 .4.1.7.2 1c.2 0 .5-.1.8-.1m17-1c0-1.1-2-3-2-3s-2 1.9-2 3c0 .7.4 1.4 1 1.7V13h-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3V8.7c.6-.3 1-1 1-1.7c0-1.1-2-3-2-3S0 5.9 0 7c0 .7.4 1.4 1 1.7V21h9v-4c0-1.1.9-2 2-2s2 .9 2 2v4h9V8.7c.6-.3 1-1 1-1.7"></svg:path>`,
})
export class MdiMosqueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMosqueOutlineIcon],svg[mdi-mosque-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7c0-1.1-2-3-2-3s-2 1.9-2 3c0 .7.4 1.4 1 1.7V13h-2v-2c0-.9-.7-1.7-1.5-1.9c.3-.6.5-1.2.5-2c0-1.3-.6-2.5-1.7-3.2L12 1L7.7 3.8c-1 .8-1.7 2-1.7 3.3c0 .7.2 1.4.6 2c-.9.2-1.6 1-1.6 1.9v2H3V8.7c.6-.3 1-1 1-1.7c0-1.1-2-3-2-3S0 5.9 0 7c0 .7.4 1.4 1 1.7V21h10v-4c0-.5.4-1 1-1s1 .5 1 1v4h10V8.7c.6-.3 1-1 1-1.7M8.9 5.5L12 3.4l3.1 2.1c.6.4.9.9.9 1.6c0 1-.9 1.9-1.9 1.9H9.9C8.9 9 8 8.1 8 7.1c0-.7.3-1.2.9-1.6M21 19h-6v-2c0-1.6-1.4-3-3-3s-3 1.4-3 3v2H3v-4h4v-4h10v4h4z"></svg:path>`,
})
export class MdiMosqueOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotherHeartIcon],svg[mdi-mother-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m8 16l-2-5.44c-.35-.99-.66-1.85-2-2.56c-1.37-.7-2.37-1-4-1c-1.61 0-2.61.3-4 1c-1.32.71-1.63 1.57-2 2.56L4 18c-.23 1.13 2.38 2.44 4.13 3.19c1.21.53 2.51.81 3.87.81c1.38 0 2.67-.28 3.89-.81c1.75-.75 4.36-2.06 4.11-3.19m-4.58-.5L12 21l-3.42-3.5c-.36-.38-.58-.89-.58-1.45c0-1.13.9-2.05 2-2.05c.55 0 1.06.23 1.42.61l.58.59l.58-.6c.36-.37.87-.6 1.42-.6c1.11 0 2 .92 2 2.05c0 .56-.22 1.08-.58 1.45"></svg:path>`,
})
export class MdiMotherHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotherNurseIcon],svg[mdi-mother-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m8 16l-2-5.44c-.35-.99-.66-1.85-2-2.56c-1.38-.7-2.38-1-4-1c-1.63 0-2.62.3-4 1c-1.34.71-1.65 1.57-2 2.56L4 18c-.32 1.35 2.36 2.44 4.11 3.19V19c0-.95.86-1.62 2.58-2.03c.16-.04.31-.06.43-.08c-.54-.82-.76-1.55-.78-1.61l1.77-.6c.01.02.52 1.59 1.73 2.38c.21.07.42.15.62.24c.77.34 1.23.78 1.38 1.31c-1.34.53-2.62.8-3.84.8l-1-.1v2.63l1 .06c1.37 0 2.67-.28 3.89-.81c1.75-.75 4.36-2.06 4.11-3.19m-4.5-1a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiMotherNurseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotionIcon],svg[mdi-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13H3c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1M6 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1m16 4c0 2.76-2.24 5-5 5H4c-.55 0-1-.45-1-1s.45-1 1-1h9c-.42-.58-.75-1.26-.9-2H10c-.55 0-1-.45-1-1s.45-1 1-1h2.1c.15-.74.48-1.42.9-2H8c-.55 0-1-.45-1-1s.45-1 1-1h9c2.76 0 5 2.24 5 5"></svg:path>`,
})
export class MdiMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotionOutlineIcon],svg[mdi-motion-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13H3c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1M6 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1m16 4c0 2.76-2.24 5-5 5H4c-.55 0-1-.45-1-1s.45-1 1-1h9c-.42-.58-.75-1.26-.9-2H10c-.55 0-1-.45-1-1s.45-1 1-1h2.1c.15-.74.48-1.42.9-2H8c-.55 0-1-.45-1-1s.45-1 1-1h9c2.76 0 5 2.24 5 5m-2 0c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3"></svg:path>`,
})
export class MdiMotionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotionPauseIcon],svg[mdi-motion-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03S3.97 16.41 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5M18 12c0-3.33-2.67-6-6-6s-6 2.67-6 6s2.67 6 6 6s6-2.67 6-6m-7-3v6H9V9m6 0v6h-2V9"></svg:path>`,
})
export class MdiMotionPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotionPauseOutlineIcon],svg[mdi-motion-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03S3.97 16.41 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7M9 9h2v6H9m4-6h2v6h-2"></svg:path>`,
})
export class MdiMotionPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotionPlayIcon],svg[mdi-motion-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03S3.97 16.41 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5M18 12c0-3.33-2.67-6-6-6s-6 2.67-6 6s2.67 6 6 6s6-2.67 6-6m-3 0l-5 3V9"></svg:path>`,
})
export class MdiMotionPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotionPlayOutlineIcon],svg[mdi-motion-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 16.5l6-4.5l-6-4.5M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03S3.97 16.41 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5"></svg:path>`,
})
export class MdiMotionPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotionSensorIcon],svg[mdi-motion-sensor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .2C9 .2 8.2 1 8.2 2S9 3.8 10 3.8S11.8 3 11.8 2S11 .2 10 .2m5.67.8A7.33 7.33 0 0 0 23 8.33V7a6 6 0 0 1-6-6zm2.66 0c0 2.58 2.09 4.67 4.67 4.67V4.33c-1.84 0-3.33-1.49-3.33-3.33zM21 1a2 2 0 0 0 2 2V1zM7.92 4.03c-.17 0-.34.03-.5.08L2 5.8V11h1.8V7.33l2.11-.66L2 22h1.8l2.87-8.11L9 17v5h1.8v-6.41l-2.49-4.54l.73-2.87L10.12 10H15V8.2h-3.62l-2-3.33c-.3-.5-.84-.84-1.46-.84"></svg:path>`,
})
export class MdiMotionSensorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotionSensorOffIcon],svg[mdi-motion-sensor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 8.2H15V10h-1.8zM19.67 1h-1.34c0 2.58 2.09 4.67 4.67 4.67V4.33c-1.84 0-3.33-1.49-3.33-3.33M21 1a2 2 0 0 0 2 2V1zm-4 0h-1.33c0 4.05 3.28 7.33 7.33 7.33V7c-3.31 0-6-2.69-6-6m-7 2.8c1 0 1.8-.8 1.8-1.8S11 .2 10 .2S8.2 1 8.2 2S9 3.8 10 3.8M2.39 1.73L1.11 3l2.35 2.35L2 5.8V11h1.8V7.33l1.25-.39l.63.63L2 22h1.8l2.87-8.11L9 17v5h1.8v-6.41l-2.49-4.54l.19-.68l12.34 12.36l1.27-1.27zm6.99 3.14c-.3-.5-.84-.84-1.46-.84c-.17 0-.34.03-.5.08l-.08.03l4.01 4.01z"></svg:path>`,
})
export class MdiMotionSensorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotorbikeIcon],svg[mdi-motorbike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.42 10l-4.01-4H9v2h3.59l2 2H6.5C4 10 2 12 2 14.5S4 19 6.5 19c2.22 0 4.06-1.62 4.42-3.73L13.04 14c-.04.17-.04.33-.04.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5m-8.66 5.26C8.5 16.27 7.58 17 6.47 17a2.5 2.5 0 0 1 0-5c1.12 0 2.03.74 2.37 1.75H6v1.5zM17.47 17a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class MdiMotorbikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotorbikeElectricIcon],svg[mdi-motorbike-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.42 8l-4.01-4H9v2h3.59l2 2H6.5C4 8 2 10 2 12.5S4 17 6.5 17c2.22 0 4.06-1.62 4.42-3.73L13.04 12c-.04.17-.04.33-.04.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5S20 8 17.5 8m-8.66 5.26C8.5 14.27 7.58 15 6.47 15a2.5 2.5 0 0 1 0-5c1.12 0 2.03.74 2.37 1.75H6v1.5zM17.47 15a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M11 20H7l6 3v-2h4l-6-3z"></svg:path>`,
})
export class MdiMotorbikeElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMotorbikeOffIcon],svg[mdi-motorbike-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l7 7H6.5C4 10 2 12 2 14.5S4 19 6.5 19c2.2 0 4.1-1.6 4.4-3.7l1.5-.9l.6.6c.2 2.1 1.9 3.8 4 4l3.8 3.8zM8.8 15.3c-.3 1-1.3 1.7-2.4 1.7C5.1 17 4 15.9 4 14.5S5.1 12 6.5 12c1.1 0 2 .7 2.4 1.8H6v1.5zM11.2 8l-2-2h4.2l4 4h.1c2.5 0 4.5 2 4.5 4.5c0 1.2-.5 2.3-1.2 3.1l-1.4-1.4c.4-.4.6-1 .6-1.6c0-1.4-1.1-2.5-2.5-2.5c-.6 0-1.2.2-1.6.6L13.2 10h1.4l-2-2z"></svg:path>`,
})
export class MdiMotorbikeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseIcon],svg[mdi-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1.07C7.05 1.56 4 4.92 4 9h7m-7 6a8 8 0 0 0 8 8a8 8 0 0 0 8-8v-4H4m9-9.93V9h7c0-4.08-3.06-7.44-7-7.93"></svg:path>`,
})
export class MdiMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseBluetoothIcon],svg[mdi-mouse-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h.5l2.85 2.85L21.21 12l2.14 2.14L20.5 17H20v-3.79l-2.29 2.29l-.71-.71L19.79 12L17 9.21l.71-.71L20 10.79zm1 1.91v1.88l.94-.94zm0 4.3v1.87l.94-.94zM15 9v1H9V2.07c3.39.49 6 3.4 6 6.93M1 10V9c0-3.53 2.61-6.44 6-6.93V10zm14 5a7 7 0 0 1-7 7a7 7 0 0 1-7-7v-3h14z"></svg:path>`,
})
export class MdiMouseBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseLeftClickIcon],svg[mdi-mouse-left-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V1.07c3.94.49 7 3.85 7 7.93zM6.34 20.66A8 8 0 0 1 4 15v-4h16v4c0 2.12-.84 4.16-2.34 5.66A8 8 0 0 1 12 23c-2.12 0-4.16-.84-5.66-2.34M11 9V1.07A8.01 8.01 0 0 0 4.25 7C4.09 7.64 4 8.31 4 9zM6.34 7C6.82 5.65 7.78 4.5 9 3.81V7z"></svg:path>`,
})
export class MdiMouseLeftClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseLeftClickOutlineIcon],svg[mdi-mouse-left-click-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V1.07A8.01 8.01 0 0 1 19.75 7c.16.64.25 1.31.25 2zm4.66-2c-.48-1.35-1.43-2.5-2.66-3.19V7zM6 15v-2h12v2c0 1.59-.63 3.12-1.76 4.24A5.97 5.97 0 0 1 12 21a5.97 5.97 0 0 1-4.24-1.76A5.97 5.97 0 0 1 6 15m-2 0c0 2.12.84 4.16 2.34 5.66S9.88 23 12 23s4.16-.84 5.66-2.34S20 17.12 20 15v-4H4zm7-6V1.07C7.06 1.56 4 4.92 4 9z"></svg:path>`,
})
export class MdiMouseLeftClickOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseMoveDownIcon],svg[mdi-mouse-move-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9H2c0-2.96 2.17-5.43 5-5.91zm13-2h-2v6h-3l4 4l4-4h-3zM9 3.09V9h5c0-2.96-2.17-5.43-5-5.91M2 15c0 3.3 2.7 6 6 6s6-2.7 6-6v-4H2z"></svg:path>`,
})
export class MdiMouseMoveDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseMoveUpIcon],svg[mdi-mouse-move-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9H2c0-2.96 2.17-5.43 5-5.91zm11 8h2v-6h3l-4-4l-4 4h3zM9 3.09V9h5c0-2.96-2.17-5.43-5-5.91M2 15c0 3.3 2.7 6 6 6s6-2.7 6-6v-4H2z"></svg:path>`,
})
export class MdiMouseMoveUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseMoveVerticalIcon],svg[mdi-mouse-move-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h3l-4-4l-4 4h3v12h-3l4 4l4-4h-3zM9 3.09c2.83.48 5 2.95 5 5.91H9zM14 11v4c0 3.3-2.7 6-6 6s-6-2.7-6-6v-4zM7 9H2c0-2.96 2.17-5.43 5-5.91z"></svg:path>`,
})
export class MdiMouseMoveVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseOffIcon],svg[mdi-mouse-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-1.23-1.21A7.9 7.9 0 0 1 12 23a8 8 0 0 1-8-8v-4h3.73l-2-2H4c0-.54.05-1.07.15-1.58zm9-4.2V9h-.18L5.79 3.96A7.95 7.95 0 0 1 11 1.07M20 11v4c0 .95-.17 1.86-.47 2.71L12.82 11zm-7-9.93c3.94.49 7 3.85 7 7.93h-7z"></svg:path>`,
})
export class MdiMouseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseOutlineIcon],svg[mdi-mouse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V1.07A8.01 8.01 0 0 1 19.75 7c.16.64.25 1.31.25 2zm4.66-2c-.48-1.35-1.43-2.5-2.66-3.19V7zM11 9V1.07A8.01 8.01 0 0 0 4.25 7C4.09 7.64 4 8.31 4 9zM6.34 7C6.82 5.65 7.78 4.5 9 3.81V7zM6 15v-2h12v2c0 1.59-.63 3.12-1.76 4.24A5.97 5.97 0 0 1 12 21a5.97 5.97 0 0 1-4.24-1.76A5.97 5.97 0 0 1 6 15m-2 0c0 2.12.84 4.16 2.34 5.66S9.88 23 12 23s4.16-.84 5.66-2.34S20 17.12 20 15v-4H4z"></svg:path>`,
})
export class MdiMouseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseRightClickIcon],svg[mdi-mouse-right-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V1.07A8.01 8.01 0 0 1 19.75 7c.16.64.25 1.31.25 2zm4.66-2c-.48-1.35-1.43-2.5-2.66-3.19V7zM11 9V1.07C7.06 1.56 4 4.92 4 9zM6.34 20.66A8 8 0 0 1 4 15v-4h16v4c0 2.12-.84 4.16-2.34 5.66A8 8 0 0 1 12 23c-2.12 0-4.16-.84-5.66-2.34"></svg:path>`,
})
export class MdiMouseRightClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseRightClickOutlineIcon],svg[mdi-mouse-right-click-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V1.07c3.94.49 7 3.85 7 7.93zm-2 0V1.07A8.01 8.01 0 0 0 4.25 7C4.09 7.64 4 8.31 4 9zM6.34 7C6.82 5.65 7.78 4.5 9 3.81V7zM6 15v-2h12v2c0 1.59-.63 3.12-1.76 4.24A5.97 5.97 0 0 1 12 21a5.97 5.97 0 0 1-4.24-1.76A5.97 5.97 0 0 1 6 15m-2 0c0 2.12.84 4.16 2.34 5.66S9.88 23 12 23s4.16-.84 5.66-2.34S20 17.12 20 15v-4H4z"></svg:path>`,
})
export class MdiMouseRightClickOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseScrollWheelIcon],svg[mdi-mouse-scroll-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1.07C7.05 1.56 4 4.92 4 9h7V7.73c-.6-.34-1-.99-1-1.73V4c0-.74.4-1.39 1-1.73zM13 9V7.73c.6-.34 1-.99 1-1.73V4c0-.74-.4-1.39-1-1.73v-1.2c3.94.49 7 3.85 7 7.93zm-9 6c0 2.12.84 4.16 2.34 5.66S9.88 23 12 23s4.16-.84 5.66-2.34S20 17.12 20 15v-4H4zm9-9V4c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1"></svg:path>`,
})
export class MdiMouseScrollWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseVariantIcon],svg[mdi-mouse-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7h-4V2.1A5 5 0 0 1 14 7M4 7a5 5 0 0 1 4-4.9V7zm10 5a5 5 0 0 1-4 4.9V18a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-5a4 4 0 0 1 4-4h2l-1 1l1 1h-2a2 2 0 0 0-2 2v5a5 5 0 0 1-5 5a5 5 0 0 1-5-5v-1.1A5 5 0 0 1 4 12V9h10z"></svg:path>`,
})
export class MdiMouseVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMouseVariantOffIcon],svg[mdi-mouse-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-1.44-1.44C16.42 22 14.82 23 13 23a5 5 0 0 1-5-5v-1.1A5 5 0 0 1 4 12V9h1.73zM14 7h-4V2.1A5 5 0 0 1 14 7M8 2.1v4.08L5.38 3.55C6.07 2.83 7 2.31 8 2.1m6 9.9v.17L10.82 9H14zm-4 4.9V18a3 3 0 0 0 3 3c1.28 0 2.37-.8 2.8-1.93l-3.4-3.4c-.66.61-1.48 1.04-2.4 1.23m6-3.9a4 4 0 0 1 4-4h2l-1 1l1 1h-2a2 2 0 0 0-2 2v3.18l-2-2z"></svg:path>`,
})
export class MdiMouseVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoveResizeIcon],svg[mdi-move-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v1h1v3H9v1h3V5h-1V2h1V1M9 7c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2M1 9v3h1v-1h3v1h1V9H5v1H2V9m7 0h12v12H9m5-11v1h1v5h-4v-1h-1v3h1v-1h4v2h-1v1h3v-1h-1v-2h3v1h1v-3h-1v1h-3v-5h1v-1"></svg:path>`,
})
export class MdiMoveResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoveResizeVariantIcon],svg[mdi-move-resize-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.88.46L.46 1.88L5.59 7H2v2h7V2H7v3.59M11 7v2h10v6h2V9a2 2 0 0 0-2-2M7 11v10a2 2 0 0 0 2 2h6v-2H9V11m6.88 3.46l-1.42 1.42L19.6 21H17v2h6v-6h-2v2.59"></svg:path>`,
})
export class MdiMoveResizeVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieIcon],svg[mdi-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4z"></svg:path>`,
})
export class MdiMovieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieCheckIcon],svg[mdi-movie-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m8.34-3.16l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiMovieCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieCheckOutlineIcon],svg[mdi-movie-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.61-.35-1.28-.59-2-.72V10H5.76L4 6.47V18h9.09c-.05.33-.09.66-.09 1m8.34-3.16l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiMovieCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieCogIcon],svg[mdi-movie-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c0 .34.03.67.08 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v8.68A6.995 6.995 0 0 0 12 19m11.8 1.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiMovieCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieCogOutlineIcon],svg[mdi-movie-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c0 .34.03.67.08 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v8.68a7 7 0 0 0-2-.6V10H5.76L4 6.47V18h8.08c-.05.33-.08.66-.08 1m11.8 1.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiMovieCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieEditIcon],svg[mdi-movie-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.04 11.13c-.14 0-.28.06-.39.17l-1 1l2.05 2.05l1-1c.22-.21.22-.56 0-.77l-1.28-1.28a.53.53 0 0 0-.38-.17m-1.97 1.75L13 18.94V21h2.06l6.06-6.07zM11 20H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v4.12l-10 9.99z"></svg:path>`,
})
export class MdiMovieEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieEditOutlineIcon],svg[mdi-movie-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v4.12L19.12 10H4.76L3 6.47V18h8v2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4zm.42 8.3l1.28 1.28c.22.21.22.56 0 .77l-1 1l-2.05-2.05l1-1c.11-.11.25-.17.39-.17s.27.06.38.17m-.3 3.63L15.06 22H13v-2.06l6.07-6.06z"></svg:path>`,
})
export class MdiMovieEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieFilterIcon],svg[mdi-movie-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11z"></svg:path>`,
})
export class MdiMovieFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieFilterOutlineIcon],svg[mdi-movie-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 11l-.94 2.06L7 14l2.06.94L10 17l.94-2.06L13 14l-2.06-.94M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.09 0-2 .9-2 2v12c0 1.1.91 2 2 2h16a2 2 0 0 0 2-2V4zm2 14H4V6.47L5.77 10H16l-.63 1.37L14 12l1.37.63L16 14l.63-1.37L18 12l-1.37-.63L16 10h4z"></svg:path>`,
})
export class MdiMovieFilterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieMinusIcon],svg[mdi-movie-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m2-1v2h8v-2z"></svg:path>`,
})
export class MdiMovieMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieMinusOutlineIcon],svg[mdi-movie-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.61-.35-1.28-.59-2-.72V10H5.76L4 6.47V18h9.09c-.05.33-.09.66-.09 1m2-1v2h8v-2z"></svg:path>`,
})
export class MdiMovieMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOffIcon],svg[mdi-movie-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27L18.11 20H4a2 2 0 0 1-2-2V6c0-.58.25-1.1.65-1.46L1.11 3l1.28-1.27zm-.23-2.78c.08-.21.12-.44.12-.68V4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l.8 1.6z"></svg:path>`,
})
export class MdiMovieOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOffOutlineIcon],svg[mdi-movie-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l1.54 1.54C2.25 4.9 2 5.42 2 6v12a2 2 0 0 0 2 2h14.11l2.73 2.73l1.27-1.27zM4 18V6.47L5.76 10h2.35l8 8zM8.8 5.6L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v14c0 .24-.04.47-.12.68L20 16.8V10h-6.8z"></svg:path>`,
})
export class MdiMovieOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenIcon],svg[mdi-movie-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 2.18l-3.93.78l2.74 3.54l1.97-.4zm-6.87 1.36L12 3.93l2.75 3.53l1.96-.39zm-4.9.96l-1.97.41l2.75 3.53l1.96-.39zm-4.91 1l-.98.19a2 2 0 0 0-1.57 2.35L2 10l4.9-.97zM2 10v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V10z"></svg:path>`,
})
export class MdiMovieOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenCheckIcon],svg[mdi-movie-open-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM19 13c1.1 0 2.12.3 3 .81V10H2v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-7.19-4.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zm17.18 10.34l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiMovieOpenCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenCheckOutlineIcon],svg[mdi-movie-open-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zm-9.81 1.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zM4 20v-8h16v1.09c.72.12 1.39.37 2 .72V10H2v10a2 2 0 0 0 2 2h9.81c-.35-.61-.59-1.28-.72-2zm17.34-4.16l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiMovieOpenCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenCogIcon],svg[mdi-movie-open-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zM19 12c1.08 0 2.09.25 3 .68V10H2v10a2 2 0 0 0 2 2h8.68A6.995 6.995 0 0 1 19 12m-7.19-3.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zM23.8 20.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiMovieOpenCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenCogOutlineIcon],svg[mdi-movie-open-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zm-9.81 1.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zM4 20v-8h16v.08c.71.1 1.38.31 2 .61V10H2v10a2 2 0 0 0 2 2h8.68a7 7 0 0 1-.6-2zm19.8.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiMovieOpenCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenEditIcon],svg[mdi-movie-open-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM2 10v10a2 2 0 0 0 2 2h7v-2.87L20.13 10zm9.81-1.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zM13 19.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiMovieOpenEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenEditOutlineIcon],svg[mdi-movie-open-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zM4 12h14.13l2-2H2v10a2 2 0 0 0 2 2h7v-2H4zm7.81-3.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zM13 19.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiMovieOpenEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenMinusIcon],svg[mdi-movie-open-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zm-9.81 1.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zM19 13c1.1 0 2.12.3 3 .81V10H2v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-4 5v2h8v-2z"></svg:path>`,
})
export class MdiMovieOpenMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenMinusOutlineIcon],svg[mdi-movie-open-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V10h20v3.81c-.61-.35-1.28-.59-2-.72V12H4v8zm8.53-13.9l-.78-3.92l-3.93.78l2.74 3.54zm-4.91.97l-2.74-3.53l-1.97.39l2.75 3.53zM4.16 5.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zm7.65 2.55L9.07 4.5l-1.97.41l2.75 3.53zM15 18v2h8v-2z"></svg:path>`,
})
export class MdiMovieOpenMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenOffIcon],svg[mdi-movie-open-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 10H22v8.8zm8.4-3.9l-.8-3.9l-3.9.8l2.7 3.5zM11.8 8L9.1 4.5l-1.2.2l3.4 3.4zM2.4 1.7L1.1 3l2.6 2.6l-.5.1C2.1 5.9 1.4 7 1.6 8l.4 2l5.1-1l1 1H2v10c0 1.1.9 2 2 2h16.1l.7.7l1.3-1.3zm14.3 5.4L14 3.5l-2 .4l2.8 3.5z"></svg:path>`,
})
export class MdiMovieOpenOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenOffOutlineIcon],svg[mdi-movie-open-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.7 6.5L16.9 3l3.9-.8l.8 3.9zm2.4 15l-1.3 1.3l-.7-.8H4c-1.1 0-2-.9-2-2V10h6.1l-1-1L2 10l-.4-2c-.2-1 .5-2.1 1.6-2.3l.5-.1L1.1 3l1.3-1.3zm-4-1.5l-8-8H4v8zm3.9-1.2V10h-8.8l2 2H20v4.8zM16.7 7.1L14 3.5l-2 .4l2.8 3.5zm-4.9.9L9.1 4.5l-1.2.2l3.4 3.4z"></svg:path>`,
})
export class MdiMovieOpenOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenOutlineIcon],svg[mdi-movie-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 2.18l-3.93.78l2.74 3.54l1.97-.4zm-6.87 1.36L12 3.93l2.75 3.53l1.96-.39zm-4.9.96l-1.97.41l2.75 3.53l1.96-.39zm-4.91 1l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zM20 12v8H4v-8zm2-2H2v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2z"></svg:path>`,
})
export class MdiMovieOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenPlayIcon],svg[mdi-movie-open-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zm7.65 2.55L9.07 4.5l-1.97.41l2.75 3.53zM2 10v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V10zm15 12l5-3l-5-3z"></svg:path>`,
})
export class MdiMovieOpenPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenPlayOutlineIcon],svg[mdi-movie-open-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10v3.81c-.61-.35-1.28-.59-2-.72V12H4v8h9.09c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V10zm-5.29-2.93l-2.74-3.53l-1.97.39l2.75 3.53zm4.91-.97l-.78-3.92l-3.93.78l2.74 3.54zm-9.81 1.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zM17 22l5-3l-5-3z"></svg:path>`,
})
export class MdiMovieOpenPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenPlusIcon],svg[mdi-movie-open-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM19 13c1.1 0 2.12.3 3 .81V10H2v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-7.19-4.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiMovieOpenPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenPlusOutlineIcon],svg[mdi-movie-open-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zM4 20v-8h16v1.09c.72.12 1.39.37 2 .72V10H2v10a2 2 0 0 0 2 2h9.81c-.35-.61-.59-1.28-.72-2zm7.81-11.95L9.07 4.5l-1.97.41l2.75 3.53zM4.16 5.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiMovieOpenPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenRemoveIcon],svg[mdi-movie-open-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm-2.94.59L9.07 4.5l-1.97.41l2.75 3.53zm9.81-1.95l-.78-3.92l-3.93.78l2.74 3.54zM19 13c1.1 0 2.12.3 3 .81V10H2v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zm18.38 11.38l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiMovieOpenRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenRemoveOutlineIcon],svg[mdi-movie-open-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM4.16 5.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zm7.65 2.55L9.07 4.5l-1.97.41l2.75 3.53zM4 20v-8h16v1.09c.72.12 1.39.37 2 .72V10H2v10a2 2 0 0 0 2 2h9.81c-.35-.61-.59-1.28-.72-2zm18.54-3.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiMovieOpenRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenSettingsIcon],svg[mdi-movie-open-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 5.46L12 1.93l1.97-.39l2.74 3.53zm6.87-1.36L20.84.18l-3.93.78l2.74 3.54zm-9.81 1.95L9.07 2.5l-1.97.41l2.75 3.53zM2 8v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V8zm2.16-4.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 8l4.9-.97zM11 24h2v-2h-2zm-4 0h2v-2H7zm8 0h2v-2h-2z"></svg:path>`,
})
export class MdiMovieOpenSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenSettingsOutlineIcon],svg[mdi-movie-open-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.65 4.5L16.91.96l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zm-4.9.98L9.07 2.5l-1.97.41l2.75 3.53zM4.16 3.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 8l4.9-.97zM22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V8zm-2 2H4v8h16zM7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"></svg:path>`,
})
export class MdiMovieOpenSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenStarIcon],svg[mdi-movie-open-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM19 13c1.1 0 2.12.3 3 .81V10H2v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zm7.65 2.55L9.07 4.5l-1.97.41l2.75 3.53zM23 17.89l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiMovieOpenStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenStarOutlineIcon],svg[mdi-movie-open-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 6.5l-2.74-3.54l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zM4.16 5.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zm7.65 2.55L9.07 4.5l-1.97.41l2.75 3.53zM4 20v-8h16v1.09c.72.12 1.39.37 2 .72V10H2v10a2 2 0 0 0 2 2h9.81c-.35-.61-.59-1.28-.72-2zm19-2.11l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiMovieOpenStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOutlineIcon],svg[mdi-movie-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"></svg:path>`,
})
export class MdiMovieOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoviePlayIcon],svg[mdi-movie-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v9.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4zm-5 18l5-3l-5-3z"></svg:path>`,
})
export class MdiMoviePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoviePlayOutlineIcon],svg[mdi-movie-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v9.81c-.61-.35-1.28-.59-2-.72V10H5.76L4 6.47V18h9.09c-.05.33-.09.66-.09 1s.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4zm-5 18l5-3l-5-3z"></svg:path>`,
})
export class MdiMoviePlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoviePlusIcon],svg[mdi-movie-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiMoviePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMoviePlusOutlineIcon],svg[mdi-movie-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.61-.35-1.28-.59-2-.72V10H5.76L4 6.47V18h9.09c-.05.33-.09.66-.09 1m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiMoviePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieRemoveIcon],svg[mdi-movie-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m9.54-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiMovieRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieRemoveOutlineIcon],svg[mdi-movie-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.61-.35-1.28-.59-2-.72V10H5.76L4 6.47V18h9.09c-.05.33-.09.66-.09 1m9.54-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiMovieRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieRollIcon],svg[mdi-movie-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 12 9a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 4M4.4 9.53A2.5 2.5 0 0 0 6 12.68c1.32.42 2.73-.29 3.15-1.61a2.5 2.5 0 0 0-1.6-3.15c-1.31-.42-2.73.29-3.15 1.61m15.21-.03c-.43-1.29-1.84-2-3.15-1.58a2.49 2.49 0 0 0-1.61 3.15a2.5 2.5 0 0 0 3.15 1.6c1.31-.42 2.03-1.84 1.61-3.17m-12.3 8.96c1.11.82 2.69.57 3.49-.55c.81-1.12.56-2.68-.56-3.49a2.506 2.506 0 0 0-3.49.55c-.81 1.12-.56 2.68.56 3.49m9.39 0c1.12-.81 1.37-2.37.56-3.49a2.49 2.49 0 0 0-3.49-.55a2.497 2.497 0 0 0-.56 3.49c.79 1.12 2.38 1.36 3.49.55M12 10.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiMovieRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieSearchIcon],svg[mdi-movie-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.03 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.05A6.49 6.49 0 0 0 16.5 10c-3.58 0-6.5 2.92-6.5 6.5c0 1.29.38 2.5 1.03 3.5m12.36 2L22 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4zM19 16.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiMovieSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieSearchOutlineIcon],svg[mdi-movie-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9c-.5-.8-1.2-1.5-2-2v-1H5.8L4 6.5V18h6.2c.2.7.4 1.4.8 2m9.3-1.1c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.2 2.4-.7l3.1 3.1l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class MdiMovieSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieSettingsIcon],svg[mdi-movie-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v14c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4zM7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiMovieSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieSettingsOutlineIcon],svg[mdi-movie-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V4zm2 14H4V6.47L5.76 10H20zm-9 4h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z"></svg:path>`,
})
export class MdiMovieSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieStarIcon],svg[mdi-movie-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m10-1.11l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiMovieStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMovieStarOutlineIcon],svg[mdi-movie-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.81c-.61-.35-1.28-.59-2-.72V10H5.76L4 6.47V18h9.09c-.05.33-.09.66-.09 1m10-1.11l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiMovieStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMowerIcon],svg[mdi-mower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 14c-.95 0-1.81.38-2.44 1H9.39L5.74 3H2v2h2.26L7 14.05c-.15-.02-.32-.05-.5-.05C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21c1.39 0 2.59-.82 3.15-2h5.7c.56 1.18 1.76 2 3.15 2c1.93 0 3.5-1.57 3.5-3.5S20.43 14 18.5 14m-12 5c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16s1.5.67 1.5 1.5S7.33 19 6.5 19m12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m-8.37-5l-.6-2h3.23c.74 0 1.45.43 1.79 1.11L15 14z"></svg:path>`,
})
export class MdiMowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMowerBagIcon],svg[mdi-mower-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.95 14l-1.13-2h3.94c.74 0 1.45.43 1.79 1.11L17 14zM23 18c0 1.66-1.34 3-3 3c-1.3 0-2.4-.84-2.82-2h-5.53c-.56 1.18-1.76 2-3.15 2s-2.59-.82-3.15-2H2c-.55 0-1-.45-1-1v-7c0-.33.17-.64.44-.83c.27-.17.62-.22.93-.1l5.06 2.02L3.42 5H1V3h3.58l6.79 12H20c1.66 0 3 1.34 3 3M7.34 14.21L3 12.5V17h2.05c.19-1.3 1.08-2.36 2.29-2.79M10 17.5c0-.83-.67-1.5-1.5-1.5S7 16.67 7 17.5S7.67 19 8.5 19s1.5-.67 1.5-1.5m11 .5c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"></svg:path>`,
})
export class MdiMowerBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMowerBagOnIcon],svg[mdi-mower-bag-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h2v5h-2zm10 4.3l-1.4-1.4L17 8.4l1.4 1.4s3.5-3.5 3.6-3.5M10.8 12l1.1 2H17l-.5-.9c-.3-.7-1-1.1-1.8-1.1zm9.2 3h-8.6L4.6 3H1v2h2.4l4 7.1l-5.1-2c-.2-.1-.6-.1-.9.1c-.2.2-.4.5-.4.8v7c0 .5.5 1 1 1h3.3c.6 1.2 1.8 2 3.2 2s2.6-.8 3.2-2h5.5c.4 1.2 1.5 2 2.8 2c1.7 0 3-1.3 3-3s-1.3-3-3-3M5 17H3v-4.5l4.3 1.7c-1.2.4-2.1 1.5-2.3 2.8m3.5 2c-.8 0-1.5-.7-1.5-1.5S7.7 16 8.5 16s1.5.7 1.5 1.5S9.3 19 8.5 19M20 19c-.5 0-1-.5-1-1s.5-1 1-1s1 .5 1 1s-.5 1-1 1"></svg:path>`,
})
export class MdiMowerBagOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMowerOnIcon],svg[mdi-mower-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h2v5h-2zm10 4.3l-1.4-1.4L17 8.4l1.4 1.4s3.5-3.5 3.6-3.5M18.5 14c-1 0-1.8.4-2.4 1H9.4L5.7 3H2v2h2.3L7 14h-.5C4.6 14 3 15.6 3 17.5S4.6 21 6.5 21c1.4 0 2.6-.8 3.2-2h5.7c.6 1.2 1.8 2 3.2 2c1.9 0 3.5-1.6 3.5-3.5S20.4 14 18.5 14m-12 5c-.8 0-1.5-.7-1.5-1.5S5.7 16 6.5 16s1.5.7 1.5 1.5S7.3 19 6.5 19m12 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-9-7l.6 2H15l-.4-.9c-.3-.7-1.1-1.1-1.8-1.1z"></svg:path>`,
})
export class MdiMowerOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMuffinIcon],svg[mdi-muffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5s-1-3-4-3s-4 3-4 3C6 5 4 7 4 9c-2.7 0-2.7 4 0 4h16c2.7 0 2.7-4 0-4c0-2-2-4-4-4M5 15l2 7h2l-1-7zm5 0l1 7h2l1-7zm6 0l-1 7h2l2-7z"></svg:path>`,
})
export class MdiMuffinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMulticastIcon],svg[mdi-multicast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2h-5a2 2 0 0 0-2 2v3h2V6h5v2l3-3zm0 7v2H6.73c-.36-.62-1.02-1-1.73-1c-1.1 0-2 .9-2 2s.9 2 2 2c.71 0 1.37-.38 1.73-1H17v2l3-3zm-7 6v3a2 2 0 0 0 2 2h5v2l3-3l-3-3v2h-5v-3z"></svg:path>`,
})
export class MdiMulticastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMultimediaIcon],svg[mdi-multimedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13V5c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v6h-3.43l-1.28-1.74a.14.14 0 0 0-.24 0L15.06 12c-.06.06-.18.07-.24 0l-1.43-1.75a.152.152 0 0 0-.23 0l-2.11 2.66c-.08.09-.01.24.11.24h6.34V15H11c-1.11 0-2-.89-2-2m-3 9v-1H4v1H2V2h2v1h2V2h2.39C7.54 2.74 7 3.8 7 5v8c0 2.21 1.79 4 4 4h4.7c-1.03.83-1.7 2.08-1.7 3.5c0 .53.11 1.03.28 1.5zM4 7h2V5H4zm0 4h2V9H4zm0 4h2v-2H4zm2 4v-2H4v2zm17-6v2h-2v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 3.5-2.29V13z"></svg:path>`,
})
export class MdiMultimediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMultiplicationIcon],svg[mdi-multiplication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v7.27l6.29-3.63l1 1.73L14 12l6.3 3.64l-1 1.73l-6.3-3.65V21h-2v-7.27l-6.31 3.63l-1-1.73L10 12L3.72 8.36l1-1.73L11 10.26z"></svg:path>`,
})
export class MdiMultiplicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMultiplicationBoxIcon],svg[mdi-multiplication-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2zm-8 14h2v-3.27l2.83 1.63l1-1.73L14 12l2.83-1.64l-1-1.73L13 10.27V7h-2v3.27L8.17 8.63l-1 1.73L10 12l-2.83 1.63l1 1.73L11 13.73z"></svg:path>`,
})
export class MdiMultiplicationBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMushroomIcon],svg[mdi-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2A10 10 0 0 1 12 2m0 6a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m5 4a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2M7 12a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m8 3l1.27 4.45l.08.55c0 1.1-.9 2-2 2h-4.7a2 2 0 0 1-2-2l.08-.55L9 15z"></svg:path>`,
})
export class MdiMushroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMushroomOffIcon],svg[mdi-mushroom-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3 3C2.8 7.6 2 9.7 2 12c0 1.1.9 2 2 2h8.1l1 1H9l-1.3 4.5v.5c0 1.1.9 2 2 2h4.7c1.1 0 2-.9 2-2l-.1-.5l-.5-1.8l5.1 5.1zM7 12c-1.1 0-2-.9-2-2c0-.8.5-1.6 1.3-1.9l2.6 2.6C8.6 11.5 7.8 12 7 12m3-6c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2c-.5 0-.9-.2-1.3-.5l6.5 6.5H20c1.1 0 2-.9 2-2c0-5.5-4.5-10-10-10c-1.9 0-3.7.6-5.3 1.5l3.7 3.7c-.2-.3-.4-.7-.4-1.2m7 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiMushroomOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMushroomOffOutlineIcon],svg[mdi-mushroom-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3 3C2.8 7.6 2 9.7 2 12c0 1.1.9 2 2 2h8.1l1 1H9l-1 3.5l-.3 1c-.3 1.1.4 2.2 1.4 2.4l.6.1h4.7c1.1 0 2-.9 2-2l-.1-.5l-.3-1l-.2-.9l5.1 5.1zM4 12c0-1.7.6-3.3 1.5-4.6l.7.7c-.1.3-.2.6-.2.9c0 1.1.9 2 2 2c.3 0 .6-.1.9-.2l1.2 1.2zm5.7 8l.3-1l.6-2h3l.6 2l.3 1zm6.3-9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M8.2 5L6.7 3.5C8.3 2.6 10.1 2 12 2c5.5 0 10 4.5 10 10c0 1.1-.9 2-2 2h-2.8l-2-2H20c0-3.7-2.6-6.9-6-7.8c-.1 1-1 1.8-2 1.8s-1.9-.8-2-1.8c-.6.2-1.3.5-1.8.8"></svg:path>`,
})
export class MdiMushroomOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMushroomOutlineIcon],svg[mdi-mushroom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12h16c0-3.73-2.56-6.87-6-7.75c-.14.99-1 1.75-2 1.75s-1.86-.76-2-1.75C6.56 5.13 4 8.27 4 12m8-10a10 10 0 0 1 10 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2A10 10 0 0 1 12 2m1.5 15h-3l-.58 2l-.27 1h4.7l-.27-1zm1.5-2l1 3.5l.27.95l.08.55c0 1.1-.9 2-2 2h-4.7l-.48-.06a2.004 2.004 0 0 1-1.44-2.44l.27-1L9 15zm1-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M8 7a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiMushroomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicIcon],svg[mdi-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v12.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.6v8.9A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34V6z"></svg:path>`,
})
export class MdiMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalDoubleFlatIcon],svg[mdi-music-accidental-double-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 9c-.7 0-1.39.28-2 .67V5h-2v4.62c-.46-.38-1.11-.62-2-.62c-.7 0-1.39.28-2 .67V5h-2v14c3-1.68 4.93-3.21 6-4.59V19c4.86-2.74 7-5.09 7-7c0-1.41-.71-3-3-3m-8 6.38v-3.12c.62-.67 1.45-1.26 2-1.26c.59 0 1 .07 1 1c0 .15-.1 1.3-3 3.38m6 0v-3.12c.62-.67 1.45-1.26 2-1.26c.59 0 1 .07 1 1c0 .15-.1 1.3-3 3.38"></svg:path>`,
})
export class MdiMusicAccidentalDoubleFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalDoubleSharpIcon],svg[mdi-music-accidental-double-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.41 10H17V7h-3v1.59l-2 2l-2-2V7H7v3h1.59l2 2l-2 2H7v3h3v-1.59l2-2l2 2V17h3v-3h-1.59l-2-2z"></svg:path>`,
})
export class MdiMusicAccidentalDoubleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalFlatIcon],svg[mdi-music-accidental-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 19c4.86-2.74 7-5.09 7-7c0-1.41-.71-3-3-3c-.7 0-1.39.28-2 .67V5h-2m2 10.38v-3.12c.62-.67 1.45-1.26 2-1.26c.59 0 1 .07 1 1c0 .15-.1 1.3-3 3.38"></svg:path>`,
})
export class MdiMusicAccidentalFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalNaturalIcon],svg[mdi-music-accidental-natural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8.75V3.5H8v14l6-2.25v5.25h2v-14zm4 4.5l-4 1.5v-4l4-1.5z"></svg:path>`,
})
export class MdiMusicAccidentalNaturalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalSharpIcon],svg[mdi-music-accidental-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9.5v-2l-2 .6V5.5h-2v3.2l-2 .6V6.5H9v3.4l-2 .6v2l2-.6v2l-2 .6v2l2-.6v2.6h2v-3.2l2-.6v2.8h2v-3.4l2-.6v-2l-2 .6v-2zm-4 3.2l-2 .6v-2l2-.6z"></svg:path>`,
})
export class MdiMusicAccidentalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicBoxIcon],svg[mdi-music-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h-3v5.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 8 14.5a2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.5V7h4m3-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMusicBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicBoxMultipleIcon],svg[mdi-music-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4M18 7h-3v5.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.5V5h4m2-3H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMusicBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicBoxMultipleOutlineIcon],svg[mdi-music-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 14H8V4h12m-7.5 11a2.5 2.5 0 0 0 2.5-2.5V7h3V5h-4v5.5c-.42-.31-.93-.5-1.5-.5a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5M4 6H2v14a2 2 0 0 0 2 2h14v-2H4"></svg:path>`,
})
export class MdiMusicBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicBoxOutlineIcon],svg[mdi-music-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h-3v5.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 8 14.5a2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.5V7h4zm3-6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 5v14h14V5z"></svg:path>`,
})
export class MdiMusicBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicCircleIcon],svg[mdi-music-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9V7h-4v5.5c-.42-.31-.93-.5-1.5-.5A2.5 2.5 0 0 0 8 14.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V9zm-4-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiMusicCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicCircleOutlineIcon],svg[mdi-music-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h-3v5.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 8 14.5a2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.5V7h4zm-4-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiMusicCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicClefAltoIcon],svg[mdi-music-clef-alto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h2v16H5m10.46-7h-.63l-1-1l1-1h.63a3.5 3.5 0 1 0-3.5-3.5h2a1.5 1.5 0 1 1 1.5 1.5H14l-2 2h-1V4H9v16h2v-7h1l2 2h1.46a1.5 1.5 0 1 1-1.5 1.5h-2a3.5 3.5 0 1 0 3.5-3.5"></svg:path>`,
})
export class MdiMusicClefAltoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicClefBassIcon],svg[mdi-music-clef-bass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 5A1.5 1.5 0 1 1 17 6.5A1.5 1.5 0 0 1 18.5 5m0 6a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5M10 4a5 5 0 0 0-5 5v1a2 2 0 1 0 2.18-2A3 3 0 0 1 10 6a4 4 0 0 1 4 4c0 3.59-2.23 6.19-7 8.2l.76 1.84C13.31 17.72 16 14.43 16 10a6 6 0 0 0-6-6"></svg:path>`,
})
export class MdiMusicClefBassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicClefTrebleIcon],svg[mdi-music-clef-treble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11V7.5l2.2-2.21c.8-.79.95-2.05.39-3.03A2.47 2.47 0 0 0 13.45 1c-.21 0-.45.03-.64.09C11.73 1.38 11 2.38 11 3.5v3.24L7.86 9.91a5.95 5.95 0 0 0-1.25 6.43c.77 1.9 2.45 3.21 4.39 3.55v.61c0 .26-.23.5-.5.5H9v2h1.5c1.35 0 2.5-1.11 2.5-2.5V20c2.03 0 4.16-1.92 4.16-4.75c0-2.3-1.92-4.25-4.16-4.25m0-7.5c0-.23.11-.41.32-.47c.22-.06.45.03.56.23a.5.5 0 0 1-.08.61l-.8.86zm-2 8c-.97.64-1.7 1.74-1.96 2.76l1.96.52v3.05a3.86 3.86 0 0 1-2.57-2.26c-.59-1.46-.27-3.12.83-4.24L11 9.5zm2 6.5v-5.06c1.17 0 2.18 1.1 2.18 2.31C15.18 17 13.91 18 13 18"></svg:path>`,
})
export class MdiMusicClefTrebleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteIcon],svg[mdi-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z"></svg:path>`,
})
export class MdiMusicNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteBluetoothIcon],svg[mdi-music-note-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.85L19.14 7h-.5v3.79L16.35 8.5l-.71.71L18.43 12l-2.79 2.79l.71.71l2.29-2.29V17h.5L22 14.15L19.85 12zm-2.36-.94l.94.94l-.94.94zm.94 5.24l-.94.94v-1.88zM9.64 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z"></svg:path>`,
})
export class MdiMusicNoteBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteBluetoothOffIcon],svg[mdi-music-note-bluetooth-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.85L19.14 7h-.5v3.79L16.35 8.5l-.71.71L18.43 12l-2.79 2.79l.71.71l2.29-2.29V17h.5L22 14.15L19.85 12zm-2.36-.94l.94.94l-.94.94zm.94 5.24l-.94.94v-1.88zM1.96 3L.687 4.27l9.003 9v.28c-.59-.34-1.27-.55-2-.55c-2.19 0-4 1.79-4 4s1.81 4 4 4s4-1.79 4-4v-1.73L17.42 21l1.27-1.27zm9.73 4h4V3h-6v5.18l2 2z"></svg:path>`,
})
export class MdiMusicNoteBluetoothOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteEighthIcon],svg[mdi-music-note-eighth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z"></svg:path>`,
})
export class MdiMusicNoteEighthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteEighthDottedIcon],svg[mdi-music-note-eighth-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3m-1.5 17a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiMusicNoteEighthDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteHalfIcon],svg[mdi-music-note-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3h-2v10.56a3.96 3.96 0 0 0-2-.56a4 4 0 1 0 4 4zm-4 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiMusicNoteHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteHalfDottedIcon],svg[mdi-music-note-half-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3h-2v10.56a3.96 3.96 0 0 0-2-.56a4 4 0 1 0 4 4zm-4 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2m6.5 1a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiMusicNoteHalfDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteMinusIcon],svg[mdi-music-note-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12v2h8v-2zM9 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z"></svg:path>`,
})
export class MdiMusicNoteMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteOffIcon],svg[mdi-music-note-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4v-1.73L19.73 21L21 19.73zM14 7h4V3h-6v5.18l2 2Z"></svg:path>`,
})
export class MdiMusicNoteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteOffOutlineIcon],svg[mdi-music-note-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7h4V3h-6v4.61l2 2m-2 .83L4.41 2.86L3 4.27l9 9v.28a3.94 3.94 0 0 0-3.33-.32a4 4 0 0 0 1.98 7.72a4.1 4.1 0 0 0 3.35-4.1v-1.58L19.73 21l1.41-1.41M10 19a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiMusicNoteOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteOutlineIcon],svg[mdi-music-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3m-8 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiMusicNoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNotePlusIcon],svg[mdi-music-note-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9v3h-3v2h3v3h2v-3h3v-2h-3V9zM9 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z"></svg:path>`,
})
export class MdiMusicNotePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteQuarterIcon],svg[mdi-music-note-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3v10.56c-.59-.35-1.27-.56-2-.56c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V3z"></svg:path>`,
})
export class MdiMusicNoteQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteQuarterDottedIcon],svg[mdi-music-note-quarter-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13v.56a3.96 3.96 0 0 0-2-.56a4 4 0 1 0 4 4V3h-2m4.5 14a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiMusicNoteQuarterDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteSixteenthIcon],svg[mdi-music-note-sixteenth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7V3h-6v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4v-6h4V8h-4V7z"></svg:path>`,
})
export class MdiMusicNoteSixteenthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteSixteenthDottedIcon],svg[mdi-music-note-sixteenth-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5a1.5 1.5 0 1 1-1.5-1.5a1.5 1.5 0 0 1 1.5 1.5M18 7V3h-6v10.55A4 4 0 1 0 14 17v-6h4V8h-4V7Z"></svg:path>`,
})
export class MdiMusicNoteSixteenthDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteWholeIcon],svg[mdi-music-note-whole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiMusicNoteWholeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteWholeDottedIcon],svg[mdi-music-note-whole-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4a4 4 0 0 0-4-4m6.5 4a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiMusicNoteWholeDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicOffIcon],svg[mdi-music-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22L9 12.27v5.23A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34v-4.07zM21 3v12.5c0 1-.43 1.92-1.12 2.56l-4.94-4.94c.64-.69 1.56-1.12 2.56-1.12c.54 0 1.05.12 1.5.34V6.47l-8.83 1.88l-2.51-2.51z"></svg:path>`,
})
export class MdiMusicOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicRestEighthIcon],svg[mdi-music-rest-eighth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a5.56 5.56 0 0 1-3.05 1.86A1.5 1.5 0 1 0 9.5 9h.24a6.3 6.3 0 0 0 3.51-1.07L10 18h2l4-12Z"></svg:path>`,
})
export class MdiMusicRestEighthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicRestHalfIcon],svg[mdi-music-rest-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h2v-4h8v4h2v1H6z"></svg:path>`,
})
export class MdiMusicRestHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicRestQuarterIcon],svg[mdi-music-rest-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.71 16.81c-.8.79-.83 2.03-.07 2.77L10.19 21c-1.53-1.5-1.47-3.97.13-5.54c.53-.52 1.18-.85 1.84-1.04L9 11.34l1.45-1.42l.37-.35c1-.98 1.03-2.53.08-3.46L9.16 4.42L10.62 3l4.16 4.06c.76.75.72 1.99-.07 2.77l-2.18 2.12L16 15.33l-.39.39c-.5.49-1.23.74-1.89.56c-.68-.18-1.46 0-2.01.53"></svg:path>`,
})
export class MdiMusicRestQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicRestSixteenthIcon],svg[mdi-music-rest-sixteenth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a5.56 5.56 0 0 1-3.05 1.86A1.5 1.5 0 1 0 10.5 6h.24a6.3 6.3 0 0 0 3.51-1.07L12.9 9.1a5.56 5.56 0 0 1-2.95 1.76A1.5 1.5 0 1 0 8.5 12h.24a6.3 6.3 0 0 0 3.51-1.07L9 21h2l6-18Z"></svg:path>`,
})
export class MdiMusicRestSixteenthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMusicRestWholeIcon],svg[mdi-music-rest-whole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h-2v4H8v-4H6V9h12z"></svg:path>`,
})
export class MdiMusicRestWholeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiMustacheIcon],svg[mdi-mustache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c-2 0-3-3-6-3s-3 2-3 2s0-2-3-2s-4 3-6 3c-1 0-2-1-2-1s1 5 5 5c5 0 6-3 6-3s1 3 6 3c4 0 5-5 5-5s-1 1-2 1"></svg:path>`,
})
export class MdiMustacheIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNailIcon],svg[mdi-nail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5v11L12 22l-1.5-6V5zM17 2H7v2h10z"></svg:path>`,
})
export class MdiNailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNasIcon],svg[mdi-nas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5c-1.11 0-2 .89-2 2v10c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V7c0-1.11-.89-2-2-2zm.5 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h13v10H7zm1 1v8h3V8zm4 0v8h3V8zm4 0v8h3V8zM9 9h1v1H9zm4 0h1v1h-1zm4 0h1v1h-1z"></svg:path>`,
})
export class MdiNasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNativescriptIcon],svg[mdi-nativescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3h9C19 3 21 5 21 7.5v9c0 2.5-2 4.5-4.5 4.5h-9C5 21 3 19 3 16.5v-9C3 5 5 3 7.5 3M6 13.5v3A1.5 1.5 0 0 0 7.5 18H9v-7.5l6 7.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 0 16.5 6H15v7.5L9 6H7.5A1.5 1.5 0 0 0 6 7.5v3A1.5 1.5 0 0 1 4.5 12A1.5 1.5 0 0 1 6 13.5"></svg:path>`,
})
export class MdiNativescriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNatureIcon],svg[mdi-nature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16.12a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7a7 7 0 0 0-7 7c0 3.47 2.52 6.33 5.83 6.89V20H5v2h14v-2h-6z"></svg:path>`,
})
export class MdiNatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNatureOutlineIcon],svg[mdi-nature-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.08 14.22l.69-.09a4.998 4.998 0 0 0-.6-9.96c-1.33 0-2.6.53-3.54 1.46c-.93.94-1.46 2.21-1.46 3.54c0 2.47 1.79 4.52 4.16 4.92zm.92 1.9V20h6v2H5v-2h6v-3.94c-3.31-.56-5.83-3.42-5.83-6.89A7.001 7.001 0 1 1 13 16.12"></svg:path>`,
})
export class MdiNatureOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNaturePeopleIcon],svg[mdi-nature-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 11A1.5 1.5 0 0 0 6 9.5A1.5 1.5 0 0 0 4.5 8A1.5 1.5 0 0 0 3 9.5A1.5 1.5 0 0 0 4.5 11m17.67-1.83c0-3.87-3.13-7-7-7a7 7 0 0 0-7 7c0 3.47 2.52 6.33 5.83 6.89V20H6v-3h1v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4h1v5h16v-2h-3v-3.88a7 7 0 0 0 6.17-6.95"></svg:path>`,
})
export class MdiNaturePeopleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNaturePeopleOutlineIcon],svg[mdi-nature-people-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20v-3.88a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7a7 7 0 0 0-7 7a6.96 6.96 0 0 0 .76 3.16A7 7 0 0 0 14 16.06V20H6v-3h1v-4.05c0-.23-.11-.45-.26-.62l-.03-.04l-.05-.04A.95.95 0 0 0 6 12H3c-.24 0-.5.09-.66.25l-.05.04c-.18.21-.29.45-.29.71v4h1v5h16v-2zm-.92-5.78l-.75-.13a4.99 4.99 0 0 1-4.16-4.92c0-1.33.53-2.6 1.46-3.54c.94-.93 2.22-1.46 3.54-1.46a4.998 4.998 0 0 1 .6 9.96l-.69.08M4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8S3 8.67 3 9.5S3.67 11 4.5 11"></svg:path>`,
})
export class MdiNaturePeopleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNavigationIcon],svg[mdi-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z"></svg:path>`,
})
export class MdiNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNavigationOutlineIcon],svg[mdi-navigation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.3l4.3 10.4l-3.5-1.5l-.8-.4l-.8.4l-3.5 1.5zM12 2L4.5 20.3l.7.7l6.8-3l6.8 3l.7-.7z"></svg:path>`,
})
export class MdiNavigationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNavigationVariantIcon],svg[mdi-navigation-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3L3 10.53v.97l6.84 2.66L12.5 21h.96z"></svg:path>`,
})
export class MdiNavigationVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNavigationVariantOutlineIcon],svg[mdi-navigation-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.27 6.73l-4.24 10.13l-1.32-3.42l-.32-.83l-.82-.32l-3.43-1.33zM21 3L3 10.53v.97l6.84 2.66L12.5 21h.96z"></svg:path>`,
})
export class MdiNavigationVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNearMeIcon],svg[mdi-near-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3L3 10.53v.97l6.84 2.66L12.5 21h.96z"></svg:path>`,
})
export class MdiNearMeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNecklaceIcon],svg[mdi-necklace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 5h-2c0 4.14-3.36 7.5-7.5 7.5S4.5 9.14 4.5 5h-2c.05 5.11 4.09 9.29 9.2 9.5c-.6.9-1.7 2.7-1.7 3.5c0 2.67 4 2.67 4 0c0-.8-1.1-2.6-1.7-3.5c5.11-.21 9.15-4.39 9.2-9.5"></svg:path>`,
})
export class MdiNecklaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNeedleIcon],svg[mdi-needle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.15 15.18l-1.42-1.41l1.42-1.42l1.41 1.42l1.41-1.42l-1.41-1.41l1.41-1.41l1.42 1.41l1.41-1.41l-2.83-2.83l-7.07 7.07l2.83 2.83zM3.08 19l3.12-3.11l-2.12-2.12l9.89-9.9L16.1 6l1.4-1.42l-1.4-1.42l1.4-1.41L21.75 6l-1.41 1.4L18.92 6L17.5 7.4l2.13 2.13l-9.9 9.89l-2.12-2.12l-4.53 4.54z"></svg:path>`,
})
export class MdiNeedleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNeedleOffIcon],svg[mdi-needle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3L8 9.9l-3.9 3.9l2.1 2.1L3.1 19v2.8l4.5-4.5l2.1 2.1l3.9-3.9l7.2 7.2zm-10.9-6.3l-1.4 1.4L7 13.8l2.5-2.5l1.4 1.4l-1.1 1.1zm.7-6.5l-1.4-1.4L14 3.9L16.1 6l1.4-1.4l-1.4-1.4l1.4-1.4L21.8 6l-1.4 1.4L18.9 6l-1.4 1.4l2.1 2.1l-3.4 3.5l-2.8-2.8l.6-.7l1.4 1.4l1.4-1.4L14 6.7z"></svg:path>`,
})
export class MdiNeedleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNestThermostatIcon],svg[mdi-nest-thermostat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16.95 16.948l-2.122-2.121A3.987 3.987 0 0 0 16 11.997a3.95 3.95 0 0 0-.566-2.02L17.6 7.813a6.956 6.956 0 0 1 1.4 4.186a6.978 6.978 0 0 1-2.05 4.95zM12 4.998a6.96 6.96 0 0 1 4.186 1.4L14.02 8.564A3.954 3.954 0 0 0 12 7.998a4 4 0 0 0-2.828 6.829l-2.12 2.12A7 7 0 0 1 12 4.998zm0-3c-5.524 0-10 4.477-10 10s4.476 10 10 10c5.522 0 10-4.477 10-10s-4.478-10-10-10z" fill="currentColor"></svg:path>`,
})
export class MdiNestThermostatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetflixIcon],svg[mdi-netflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2h4l2.94 8.83L13.5 2h4v20c-1.25-.22-2.63-.36-4.09-.42L10.5 13l-.07 8.59c-1.4.06-2.73.2-3.93.41z"></svg:path>`,
})
export class MdiNetflixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkIcon],svg[mdi-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkOffIcon],svg[mdi-network-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 5.27l4 4V15a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h2.73l2 2L21 22.72L2.28 4zM15 20a1 1 0 0 0-1-1h-1v-1.73L15.73 20zm2.69-3.13L5.13 4.31C5.41 3.55 6.14 3 7 3h10a2 2 0 0 1 2 2v10c0 .86-.55 1.59-1.31 1.87M22 20v1.18L20.82 20z"></svg:path>`,
})
export class MdiNetworkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkOffOutlineIcon],svg[mdi-network-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.04 5.27L5 9.23V15a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h2.77l2 2l1.27-1.28L2.32 4zM7 11.23L10.77 15H7zM15 20a1 1 0 0 0-1-1h-1v-1.77L15.77 20zm7 0v1.14L20.86 20zM7 6.14L5.14 4.28C5.43 3.53 6.16 3 7 3h10a2 2 0 0 1 2 2v10c0 .85-.53 1.57-1.28 1.86L15.86 15H17V5H7z"></svg:path>`,
})
export class MdiNetworkOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkOutlineIcon],svg[mdi-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10z"></svg:path>`,
})
export class MdiNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkPosIcon],svg[mdi-network-pos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H8V7h9zM7 7H5v2h2zm0-3H5v2h2zm3 0H8v2h2zm3 13v2h1c.55 0 1 .45 1 1h7v2h-7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1H2v-2h7c0-.55.45-1 1-1h1v-2H4c-1.11 0-2-.89-2-2V3a2 2 0 0 1 2-2h16c1.11 0 2 .89 2 2v12c0 1.11-.89 2-2 2zm7-2V3H4v12zm-9-9h8V4h-8zm-6 6h6v-2H5zm8 2h6v-2h-6z"></svg:path>`,
})
export class MdiNetworkPosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength1Icon],svg[mdi-network-strength-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h20V1m-2 4.83V19h-8v-5.17"></svg:path>`,
})
export class MdiNetworkStrength1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength1AlertIcon],svg[mdi-network-strength-1-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1L1 21h16v-2h-6v-5.2l8-8V9h2m-2 2v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiNetworkStrength1AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength2Icon],svg[mdi-network-strength-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h20V1m-2 4.83V19h-6v-7.17"></svg:path>`,
})
export class MdiNetworkStrength2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength2AlertIcon],svg[mdi-network-strength-2-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1L1 21h16v-2h-4v-7.2l6-6V9h2m-2 2v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiNetworkStrength2AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength3Icon],svg[mdi-network-strength-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h20V1m-2 4.83V19h-3V8.83"></svg:path>`,
})
export class MdiNetworkStrength3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength3AlertIcon],svg[mdi-network-strength-3-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1L1 21h16v-2h-1V8.8l3-3V9h2m-2 2v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiNetworkStrength3AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength4Icon],svg[mdi-network-strength-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h20V1"></svg:path>`,
})
export class MdiNetworkStrength4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength4AlertIcon],svg[mdi-network-strength-4-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h2v-6h-2m0 10h2v-2h-2M1 21h16V9h4V1"></svg:path>`,
})
export class MdiNetworkStrength4AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength4CogIcon],svg[mdi-network-strength-4-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.1.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.3.2.5.4.8.5l.2 1.3c0 .1.1.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.1.6-.3.8-.5l1.2.5c.1 0 .3 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.8v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.1-.3-.1l-1.1.5c-.3-.2-.5-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2zm1 3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5M11.7 21H1L21 1v10.7c-.9-.4-1.9-.7-3-.7c-3.9 0-7 3.1-7 7c0 1.1.2 2.1.7 3"></svg:path>`,
})
export class MdiNetworkStrength4CogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthAlertIcon],svg[mdi-network-strength-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18.999 17.003H21V8.999H19m0 12.002H21V19H19M1 21h16.002V7.003H21V1" fill="currentColor"></svg:path>`,
})
export class MdiNetworkStrengthAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthAlertOutlineIcon],svg[mdi-network-strength-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.001 1l-20 20.001h16.002V19H6L19 5.83v1.173H21M19 8.998v8.004H21V8.999m-2.002 10V21H21V19" fill="currentColor"></svg:path>`,
})
export class MdiNetworkStrengthAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthOffIcon],svg[mdi-network-strength-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 1l-8.6 8.6l8.6 8.59M4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73"></svg:path>`,
})
export class MdiNetworkStrengthOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthOffOutlineIcon],svg[mdi-network-strength-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 1l-8.6 8.6l1.45 1.45L19 5.83v10.36l2 2M4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73M11.33 13.6l5.4 5.4H6"></svg:path>`,
})
export class MdiNetworkStrengthOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthOutlineIcon],svg[mdi-network-strength-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h20V1m-2 4.83V19H6"></svg:path>`,
})
export class MdiNetworkStrengthOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewBoxIcon],svg[mdi-new-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4c1.11 0 2 .89 2 2v12c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V6c0-1.11.89-2 2-2zM8.5 15V9H7.25v3.5L4.75 9H3.5v6h1.25v-3.5L7.3 15zm5-4.74V9h-4v6h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12zm7 3.74V9h-1.25v4.5h-1.12V10h-1.25v3.5h-1.13V9H14.5v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiNewBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperIcon],svg[mdi-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11H4V8h16m0 7h-7v-2h7m0 6h-7v-2h7m-9 2H4v-6h7m9.33-8.33L18.67 3L17 4.67L15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V3z"></svg:path>`,
})
export class MdiNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperCheckIcon],svg[mdi-newspaper-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.33 4.67L18.67 3L17 4.67L15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3v16a2 2 0 0 0 2 2h8.8c-.51-.88-.8-1.91-.8-3c0-1.23.37-2.37 1-3.32V13h1.68c.95-.63 2.09-1 3.32-1c1.53 0 2.93.58 4 1.5V3zM11 19H4v-6h7zm9-8H4V8h16zm-3.25 10.16l-2.75-3L15.16 17l1.59 1.59L20.34 15l1.16 1.41z"></svg:path>`,
})
export class MdiNewspaperCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperMinusIcon],svg[mdi-newspaper-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zm-2-6V8H4v3zm-7 2v1.68c-.63.95-1 2.09-1 3.32c0 1.09.29 2.12.8 3H4a2 2 0 0 1-2-2V3l1.67 1.67L5.33 3L7 4.67L8.67 3l1.66 1.67L12 3l1.67 1.67L15.33 3L17 4.67L18.67 3l1.66 1.67L22 3v10.5a6.14 6.14 0 0 0-4-1.5c-1.23 0-2.37.37-3.32 1zm-2 6v-6H4v6z"></svg:path>`,
})
export class MdiNewspaperMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperPlusIcon],svg[mdi-newspaper-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zm3-3V8H4v3zm-7 2v1.68c-.63.95-1 2.09-1 3.32c0 1.09.29 2.12.8 3H4a2 2 0 0 1-2-2V3l1.67 1.67L5.33 3L7 4.67L8.67 3l1.66 1.67L12 3l1.67 1.67L15.33 3L17 4.67L18.67 3l1.66 1.67L22 3v10.5a6.14 6.14 0 0 0-4-1.5c-1.23 0-2.37.37-3.32 1zm-2 6v-6H4v6z"></svg:path>`,
})
export class MdiNewspaperPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperRemoveIcon],svg[mdi-newspaper-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.12 14.46l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.41-1.42L16.59 18l-2.12-2.12l1.41-1.41L18 16.59zm.21-9.79L18.67 3L17 4.67L15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3v16a2 2 0 0 0 2 2h8.8c-.51-.88-.8-1.91-.8-3c0-1.23.37-2.37 1-3.32V13h1.68c.95-.63 2.09-1 3.32-1c1.53 0 2.93.58 4 1.5V3zM11 19H4v-6h7zm9-8H4V8h16z"></svg:path>`,
})
export class MdiNewspaperRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperVariantIcon],svg[mdi-newspaper-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 7h5v6H5zm14 10H5v-2h14zm0-4h-7v-2h7zm0-4h-7V7h7z"></svg:path>`,
})
export class MdiNewspaperVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperVariantMultipleIcon],svg[mdi-newspaper-variant-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v12h15v2H4c-2 0-2-2-2-2V7zm17.3-4H7.7C6.76 3 6 3.7 6 4.55v10.9c0 .86.76 1.55 1.7 1.55h13.6c.94 0 1.7-.69 1.7-1.55V4.55C23 3.7 22.24 3 21.3 3M8 5h5v6H8zm13 10H8v-2h13zm0-4h-6V9h6zm0-4h-6V5h6z"></svg:path>`,
})
export class MdiNewspaperVariantMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperVariantMultipleOutlineIcon],svg[mdi-newspaper-variant-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v12h15v2H4c-2 0-2-2-2-2V7zm17-2v10H8V5zm.3-2H7.7C6.76 3 6 3.7 6 4.55v10.9c0 .86.76 1.55 1.7 1.55h13.6c.94 0 1.7-.69 1.7-1.55V4.55C23 3.7 22.24 3 21.3 3M9 6h3v5H9zm11 8H9v-2h11zm0-6h-6V6h6zm0 3h-6V9h6z"></svg:path>`,
})
export class MdiNewspaperVariantMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperVariantOutlineIcon],svg[mdi-newspaper-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5v14H4V5zm0-2H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-2 12H6v2h12zm-8-8H6v6h4zm2 2h6V7h-6zm6 2h-6v2h6z"></svg:path>`,
})
export class MdiNewspaperVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNfcIcon],svg[mdi-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.24 2c-1.64 0-3.28 0-3.69.04c-.88.05-1.47.69-1.51 1.52c-.04.81-.04 16.03 0 16.85c.05.82.67 1.45 1.51 1.5c.91.05 3.89.06 4.74.06c-1.53-1.06-1.74-3.05-1.88-6.74c-.08-2.19-.01-9.87 0-10.19l.04-2.1L14.5 11v2.5L8.09 7.11c-.01 1.27-.03 2.92-.03 4.43c0 1.46.02 2.8.06 3.51c.24 4.02.62 5.91 2.71 6.65c.67.23 1.24.3 2.24.3c.82 0 6.56 0 7.38-.04c.88-.05 1.48-.69 1.52-1.52c.03-.81.03-15.99 0-16.82c-.06-.82-.68-1.44-1.52-1.49c-.91-.05-3.88-.1-4.74-.1c1.53 1.06 1.73 3.05 1.88 6.75c.08 2.19.01 9.86 0 10.19l-.04 2.09L9.53 13v-2.5l6.38 6.39c.01-1.27.03-2.92.03-4.43c0-1.46-.02-2.8-.06-3.5c-.24-4.03-.62-5.92-2.71-6.66c-.64-.23-1.24-.3-2.24-.3z"></svg:path>`,
})
export class MdiNfcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNfcOffIcon],svg[mdi-nfc-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3.25 4.03l16.7 16.7L18.7 22l-3.84-3.87a.924.924 0 0 1-.27-.08a.827.827 0 0 1-.48-.67l-1.93-1.93c-.04.08-.09.15-.13.21c-.43.6-.86.6-1.19.38c-.32-.21-5.36-4.04-5.63-4.17c-.28-.11-.38.16-.11 1.63c.27 1.5-.17 1.89-.55 1.95c-.37.05-1.51-.27-1.57-3.31c-.05-3.03.76-3.52 1.14-3.52c.46 0 2.94 2.07 4.7 3.5L2 5.28l1.25-1.25m15.13 12.53c.37-1.16.74-2.76.72-4.53V12c.04-3.5-1.44-6.42-1.44-6.42s-.24-.86.46-1.19c.71-.33 1.18.22 1.18.22C21.12 8.22 21 11.64 21 12c0 .27.09 2.96-1.12 6.05l-1.5-1.49m-3.24-3.25c.05-.39.08-.81.1-1.28V12c-.1-3.5-1.11-4.79-1.11-4.79s-.24-.87.46-1.21c.71-.31 1.18.23 1.18.23c1.49 2.71 1.39 5.41 1.37 5.77c.01.2.06 1.38-.32 3l-1.68-1.69M10.2 8.38c.03-.61.39-.74.39-.74s.6-.27.98.16c.34.39 1.15 1.77 1.32 3.27L10.2 8.38z" fill="currentColor"></svg:path>`,
})
export class MdiNfcOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNfcSearchVariantIcon],svg[mdi-nfc-search-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.24 1.71-.68 2.4L23.4 22L22 23.39l-3.11-3.07c-.69.43-1.51.68-2.39.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5c1.39 0 2.5-1.12 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M18 6v4.18c-.67-.18-1.34-.21-2-.18V8h-3v2.28l.53.44a6.47 6.47 0 0 0-2.81 2.81c-.44-.36-.72-.91-.72-1.53c0-.74.41-1.38 1-1.72V8a2 2 0 0 1 2-2zM6 18V6h4v2H8v8h2c-.04.68 0 1.35.17 2zM20 4H4v16h7c.53.8 1.21 1.5 2.03 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9.04c-.5-.8-1.18-1.5-2-2.04z"></svg:path>`,
})
export class MdiNfcSearchVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNfcTapIcon],svg[mdi-nfc-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M4 4h7a2 2 0 0 1 2 2v3h-2V6H4v5h2V9l3 3l-3 3v-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m16 16h-7a2 2 0 0 1-2-2v-3h2v3h7v-5h-2v2l-3-3l3-3v2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiNfcTapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNfcVariantIcon],svg[mdi-nfc-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6h-5a2 2 0 0 0-2 2v2.28c-.59.34-1 .98-1 1.72a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12m2 2H4V4h16m0-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4c0-1.11-.89-2-2-2"></svg:path>`,
})
export class MdiNfcVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNfcVariantOffIcon],svg[mdi-nfc-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.25 2.05l20.7 20.7L20.7 24l-2-2H4a2 2 0 0 1-2-2V5.3l-2-2zM3.81 2H20c1.11 0 2 .89 2 2v16.19l-2-1.99V4H5.8zM6 9.3l-2-2V20h12.7l-2-2H6zm12 6.9l-2-2V8h-3v2.28c.6.34 1 .98 1 1.72v.19L11 9.2V8a2 2 0 0 1 2-2h5zM8 16h4.7L8 11.3zm2-8h-.2l-2-2H10z"></svg:path>`,
})
export class MdiNfcVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNinjaIcon],svg[mdi-ninja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 13c-.01-.35.15-.69.42-.92c.75.16 1.45.47 2.08.92c0 .68-.56 1.24-1.25 1.24S7.76 13.69 7.75 13m6 0c.63-.44 1.33-.75 2.08-.91c.27.23.43.57.42.91c0 .7-.56 1.26-1.25 1.26s-1.25-.56-1.25-1.26M12 9c-2.77-.04-5.5.65-7.93 2L4 12c0 1.23.29 2.44.84 3.54a47.6 47.6 0 0 1 14.32 0c.55-1.1.84-2.31.84-3.54l-.07-1A15.85 15.85 0 0 0 12 9m0-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNinjaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNintendoGameBoyIcon],svg[mdi-nintendo-game-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1c-1.1 0-2 .9-2 2v18a2 2 0 0 0 2 2h7c2.76 0 5-2.24 5-5V3a2 2 0 0 0-2-2zm1 3h8v7H8zm1 10h1v2h2v1h-2v2H9v-2H7v-1h2zm7 1c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-2 2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class MdiNintendoGameBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNintendoSwitchIcon],svg[mdi-nintendo-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.04 20.4H7.12c-.93 0-1.82-.4-2.48-1.04C4 18.7 3.6 17.81 3.6 16.88V7.12c0-.93.4-1.82 1.04-2.48C5.3 4 6.19 3.62 7.12 3.62h2.92zM7.12 2A5.12 5.12 0 0 0 2 7.12v9.76C2 19.71 4.29 22 7.12 22h4.53V2zM5.11 8c0 1.04.84 1.88 1.89 1.88c1.03 0 1.87-.84 1.87-1.88S8.03 6.12 7 6.12c-1.05 0-1.89.84-1.89 1.88m12.5 3c1.11 0 2.01.89 2.01 2c0 1.12-.9 2-2.01 2s-2.03-.88-2.03-2c0-1.11.92-2 2.03-2m-.73 11A5.12 5.12 0 0 0 22 16.88V7.12C22 4.29 19.71 2 16.88 2h-3.23v20z"></svg:path>`,
})
export class MdiNintendoSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNintendoWiiIcon],svg[mdi-nintendo-wii-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.84 16.94h-1.87v-6.15h1.87zM18 8.58c0 .61-.5 1.11-1.1 1.11a1.11 1.11 0 0 1-1.11-1.11c0-.62.5-1.12 1.11-1.12c.6 0 1.1.5 1.1 1.12m3.82 8.36h-1.88v-6.15h1.88zM22 8.58c0 .61-.5 1.11-1.12 1.11a1.11 1.11 0 0 1-1.11-1.11a1.116 1.116 0 1 1 2.23 0m-9.1-.53h2l-2.12 7.45s-.28 1.54-1.5 1.54c-1.21 0-1.49-1.54-1.49-1.54l-1.34-4.86l-1.34 4.86s-.29 1.54-1.5 1.54s-1.49-1.54-1.49-1.54L2 8.05h2l1.72 6.62L7.11 9.3c.32-1.35 1.34-1.33 1.34-1.33s1.02-.02 1.34 1.33l1.38 5.37z"></svg:path>`,
})
export class MdiNintendoWiiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNintendoWiiuIcon],svg[mdi-nintendo-wiiu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15.96c0 2.23 1.54 3.54 3.79 3.54h12.78c1.9 0 3.43-1.3 3.43-3.18V6.97c0-1.14-.85-2.37-1.89-2.37h-2.96v7.7c0 5.84-10.18 5.79-10.18.11V4.5H4.72C3.26 4.5 2 5.41 2 6.85zm7.34-4.73c0 4.51 5.32 3.86 5.32.71V4.5H9.34z"></svg:path>`,
})
export class MdiNintendoWiiuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNixIcon],svg[mdi-nix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 8.7L5 17.2l-1.1-1.9L5.2 13H2.6L2 12l.6-1h3.7l1.3-2.3zm.3 6.8h9.7l-1.1 1.9h-2.6l1.3 2.3l-.6 1h-1.1L14 17.4h-2.7zm5.7-3.7L11 3.3h2.2l1.3 2.3l1.3-2.3h1.1l.6 1l-1.9 3.2L17 9.8zm-2.1-3.3H4l1.1-1.9h2.6L6.4 4.3l.6-1h1.1L10 6.5h2.7zm.3 6.8L19 6.8l1.1 1.9l-1.3 2.3h2.6l.6 1l-.6 1h-3.7l-1.3 2.3zm-6-3.1l4.9 8.4h-2.2l-1.3-2.3l-1.1 2.3H7.1l-.6-1l1.9-3.2L7 14.2z"></svg:path>`,
})
export class MdiNixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNodejsIcon],svg[mdi-nodejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47q.36.21.78.21t.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8"></svg:path>`,
})
export class MdiNodejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoodlesIcon],svg[mdi-noodles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3L10 4.41V6h12v1H10v5h12c0 1.81-.57 3.46-1.68 4.95s-2.55 2.58-4.32 3.3V22H8v-1.75c-1.76-.72-3.21-1.82-4.32-3.3S2 13.81 2 12h3V4l17-2zM6 4.88V6h1V4.78zM6 7v5h1V7zm3 5V7H8v5zm0-6V4.55l-1 .09V6z"></svg:path>`,
})
export class MdiNoodlesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotEqualIcon],svg[mdi-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10H9V8h12zm0 6H9v-2h12zM4 5h2v11H4zm2 13v2H4v-2z"></svg:path>`,
})
export class MdiNotEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotEqualVariantIcon],svg[mdi-not-equal-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.08 4.61l1.84.79L14.8 8H19v2h-5.05l-1.72 4H19v2h-7.62l-1.46 3.4l-1.84-.79L9.2 16H5v-2h5.06l1.71-4H5V8h7.63z"></svg:path>`,
})
export class MdiNotEqualVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteIcon],svg[mdi-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10V4.5l5.5 5.5M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6z"></svg:path>`,
})
export class MdiNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteAlertIcon],svg[mdi-note-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V9l-6-6zm9 7V4.5l5.5 5.5zm11-3v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiNoteAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteAlertOutlineIcon],svg[mdi-note-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V9l-6-6zm14 16H3V5h7v7h7zm-5-9V4.5l5.5 5.5zm11-3v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiNoteAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteCheckIcon],svg[mdi-note-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2c0-3.31 2.69-6 6-6m-5-8.5l5.5 5.5H14zm8.5 12.75L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiNoteCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteCheckOutlineIcon],svg[mdi-note-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5h7v7h7v1c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2zm9-14.5l5.5 5.5H14zm8.5 12.75L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiNoteCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteEditIcon],svg[mdi-note-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6v-1.87l8.39-8.39c.44-.44 1-.68 1.61-.74m-7-5.5l5.5 5.5H14zm8.85 9.69l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72m-3.72-.36l2.04 2.04L15.04 22H13v-2.04z"></svg:path>`,
})
export class MdiNoteEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteEditOutlineIcon],svg[mdi-note-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.13 12l1.26-1.26c.44-.44 1-.68 1.61-.74V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6v-1.87l.13-.13H5V5h7v7zM14 4.5l5.5 5.5H14zm5.13 9.33l2.04 2.04L15.04 22H13v-2.04zm3.72.36l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72"></svg:path>`,
})
export class MdiNoteEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
