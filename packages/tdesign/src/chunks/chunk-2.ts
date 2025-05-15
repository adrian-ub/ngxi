import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHamburgerFilledIcon],svg[tdesign-hamburger-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.706 4.073C7.366 2.7 9.605 2 12 2c2.396 0 4.635.7 6.294 2.073C19.974 5.462 21 7.495 21 10v1H3v-1c0-2.505 1.027-4.538 2.706-5.927M6 11.798l3 2l3-2l3 2l3-2l4.387 2.925l-1.11 1.664L18 14.202l-3 2l-3-2l-3 2l-3-2l-3.277 2.185l-1.11-1.664zM3 17h18v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"></svg:path>`,
})
export class TdesignHamburgerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHappyIcon],svg[tdesign-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zM7 13h10v1a5 5 0 0 1-10 0zm2.17 2a3.001 3.001 0 0 0 5.66 0z"></svg:path>`,
})
export class TdesignHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHappyFilledIcon],svg[tdesign-happy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm-5 7a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5"></svg:path>`,
})
export class TdesignHappyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHardDiskStorageIcon],svg[tdesign-hard-disk-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4h-2.5v7.875h-11V4zm4.5 0v5.875h7V4zM14 6v3h-2V6z"></svg:path>`,
})
export class TdesignHardDiskStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHardDiskStorageFilledIcon],svg[tdesign-hard-disk-storage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2H2v20h20V2h-4.5v7.875h-11z"></svg:path><svg:path fill="currentColor" d="M15.5 2h-7v5.875h7zM14 4v3h-2V4z"></svg:path>`,
})
export class TdesignHardDiskStorageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHardDriveIcon],svg[tdesign-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v10h16V4zm16 12H4v4h16zm-14.002.998h2.004v2.004H5.998zm3 0h2.004v2.004H8.998z"></svg:path>`,
})
export class TdesignHardDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHardDriveFilledIcon],svg[tdesign-hard-drive-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM4 14V4h16v10zm4.002 2.998v2.004H5.998v-2.004zm3 0v2.004H8.998v-2.004z"></svg:path>`,
})
export class TdesignHardDriveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHashtagIcon],svg[tdesign-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.604 2.117L10.006 7.5h4.988l.623-5.604l1.987.22l-.598 5.384H22v2h-5.216l-.556 5H22v2h-5.994l-.623 5.604l-1.987-.22l.598-5.384H9.006l-.623 5.604l-1.987-.22l.598-5.384H2v-2h5.216l.556-5H2v-2h5.994l.623-5.604zM9.784 9.5l-.556 5h4.988l.556-5z"></svg:path>`,
})
export class TdesignHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHdIcon],svg[tdesign-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm4 3v3h2V8h2v8H9v-3H7v3H5V8zm6 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4zm2 2v4h2v-4z"></svg:path>`,
})
export class TdesignHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHdFilledIcon],svg[tdesign-hd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14v-4h2v4z"></svg:path><svg:path fill="currentColor" d="M23 3H1v18h22zM7 11h2V8h2v8H9v-3H7v3H5V8h2zm10-3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4V8z"></svg:path>`,
})
export class TdesignHdFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHeartIcon],svg[tdesign-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 3.818a6.228 6.228 0 0 1 8.51 9.087l-5.224 5.225h-.001L12 21.415l-7.28-7.279l-1.23-1.232A6.228 6.228 0 0 1 12 3.818m3.285 11.485l3.811-3.812a4.228 4.228 0 1 0-5.98-5.98L12 6.627L10.883 5.51a4.228 4.228 0 1 0-5.98 5.98l1.232 1.232L12 18.587l3.285-3.285"></svg:path>`,
})
export class TdesignHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHeartFilledIcon],svg[tdesign-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 4.818a6.228 6.228 0 0 1 8.51 9.087l-5.225 5.225L12 22.415l-7.28-7.279l-1.23-1.232a6.228 6.228 0 0 1 8.511-9.086"></svg:path>`,
})
export class TdesignHeartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHelpIcon],svg[tdesign-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.995 21.006l-2-.006v-2.006h2.012zm-2-3.556v-2.38c0-1.15.518-2.11 1.137-2.871c.614-.756 1.395-1.397 2.055-1.917a3.544 3.544 0 1 0-5.534-3.968l-.334.943l-1.885-.666l.333-.943A5.546 5.546 0 0 1 17.54 7.497a5.54 5.54 0 0 1-2.116 4.357c-.655.516-1.279 1.04-1.74 1.608c-.458.562-.689 1.087-.689 1.609v2.379z"></svg:path>`,
})
export class TdesignHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHelpCircleIcon],svg[tdesign-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-9.996 6.254H11V16.25h2.004zM11 15.25V14c0-.867.39-1.573.826-2.11c.432-.53.974-.974 1.41-1.318a2 2 0 1 0-3.123-2.24l-.333.944l-1.885-.666l.333-.943a4.001 4.001 0 1 1 6.246 4.476c-.431.34-.817.666-1.096 1.009c-.274.338-.378.61-.378.848v1.25z"></svg:path>`,
})
export class TdesignHelpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHelpCircleFilledIcon],svg[tdesign-help-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m-.174-11.11c.432-.53.974-.974 1.41-1.318a2 2 0 1 0-3.123-2.24l-.332.944l-1.886-.666l.333-.943a4.001 4.001 0 1 1 6.246 4.476c-.431.34-.817.666-1.096 1.009c-.274.338-.378.61-.378.848v1.25h-2V14c0-.867.39-1.573.826-2.11M11 18.254V16.25h2.004v2.004z"></svg:path>`,
})
export class TdesignHelpCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHelpRectangleIcon],svg[tdesign-help-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm8 3.25a2 2 0 0 0-1.886 1.333l-.334.943l-1.885-.666l.333-.943a4.001 4.001 0 1 1 6.246 4.476c-.431.34-.817.666-1.096 1.009c-.274.338-.378.61-.378.848v1.25h-2v-1.25c0-.867.39-1.573.826-2.11c.432-.53.974-.974 1.41-1.318A2 2 0 0 0 12 7.25m-1 9.25h2.004v2.004H11z"></svg:path>`,
})
export class TdesignHelpRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHelpRectangleFilledIcon],svg[tdesign-help-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM10.114 8.583a2.001 2.001 0 1 1 3.122 2.24c-.436.343-.978.786-1.41 1.317c-.436.537-.826 1.243-.826 2.11v1.25h2v-1.25c0-.238.103-.51.378-.848c.279-.343.664-.669 1.096-1.009a4 4 0 1 0-6.246-4.477l-.333.944l1.885.666zm2.89 7.917H11v2.004h2.004z"></svg:path>`,
})
export class TdesignHelpRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHighlightIcon],svg[tdesign-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h3.5v2H4v1.5H2zm5.5 0h3v2h-3zm5 0h3v2h-3zm5 0H21v3.5h-2V4h-1.5zM4 7.5v3H2v-3zm17 0v3h-2v-3zm-17 5v3H2v-3zM20 14v2h-2.586l4 4L20 21.414l-4-4V20h-2v-6zM4 17.5V19h1.5v2H2v-3.5zM7.5 19h3v2h-3z"></svg:path>`,
})
export class TdesignHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHighlight1Icon],svg[tdesign-highlight-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-5a5 5 0 0 0-4.354 2.54l-.493.871l-1.74-.985l.492-.87A7 7 0 0 1 12 5h1v2zm-4.996 4.133v2.076h-2v-2.076z"></svg:path>`,
})
export class TdesignHighlight1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHighlight1FilledIcon],svg[tdesign-highlight-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M7.646 9.54A5 5 0 0 1 12 7h1V5h-1a7 7 0 0 0-6.095 3.555l-.492.87l1.74.986zm-.642 3.67v-2.077h-2v2.076z"></svg:path>`,
})
export class TdesignHighlight1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHistoryIcon],svg[tdesign-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 12c0-5.799-4.701-10.5-10.5-10.5c-1.798 0-3.493.453-4.975 1.251A10.55 10.55 0 0 0 3.5 5.834V2.5h-2v7h7v-2H4.787a8.55 8.55 0 0 1 3.187-2.988A8.46 8.46 0 0 1 12 3.5a8.5 8.5 0 1 1-8.454 9.396l-.104-.995l-1.989.209l.104.994C2.11 18.384 6.573 22.5 12 22.5c5.799 0 10.5-4.701 10.5-10.5M11 6v6.414l3.5 3.5l1.414-1.414L13 11.586V6z"></svg:path>`,
})
export class TdesignHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHistorySettingIcon],svg[tdesign-history-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a8.46 8.46 0 0 0-4.026 1.012A8.55 8.55 0 0 0 4.787 7.5H8.5v2h-7v-7h2v3.334a10.55 10.55 0 0 1 3.525-3.083A10.46 10.46 0 0 1 12 1.5c5.799 0 10.5 4.701 10.5 10.5v1h-2v-1A8.5 8.5 0 0 0 12 3.5M13 6v5.586l1.664 1.664l-1.414 1.414l-2.25-2.25V6zm-9.558 5.901l.104.995A8.5 8.5 0 0 0 12 20.5h1v2h-1c-5.427 0-9.89-4.115-10.443-9.396l-.104-.994zM19.5 14.005v1.14c.533.159 1.013.44 1.406.813l.989-.57l1 1.731l-.99.572a3.5 3.5 0 0 1 0 1.623l.99.571l-1 1.732l-.992-.572a3.5 3.5 0 0 1-1.403.81V23h-2v-1.145a3.5 3.5 0 0 1-1.404-.81l-.992.572l-1-1.732l.99-.572a3.5 3.5 0 0 1 0-1.622l-.99-.571l1-1.732l.99.57a3.5 3.5 0 0 1 1.406-.813v-1.14zM18.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TdesignHistorySettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHomeIcon],svg[tdesign-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.198l10 8.334V22H2V9.532zM10 20h4v-5h-4zm6 0h4v-9.532l-8-6.666l-8 6.666V20h4v-7h8z"></svg:path>`,
})
export class TdesignHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHomeFilledIcon],svg[tdesign-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.532L12 1.198L2 9.532V22h5.5v-8.5h9V22H22z"></svg:path><svg:path fill="currentColor" d="M14.5 22h-5v-6.5h5z"></svg:path>`,
})
export class TdesignHomeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHorizontalIcon],svg[tdesign-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v6H2zm2 2v2h16V4zm-2 6h20v12H2zm2 2v8h16v-8z"></svg:path>`,
})
export class TdesignHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHorizontalFilledIcon],svg[tdesign-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v6H2zm0 8h20v12H2z"></svg:path>`,
})
export class TdesignHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHospitalIcon],svg[tdesign-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v2h-1v4h3v14H2V8h3V4H4zm3 2v6H4v10h5v-6h6v6h5V10h-3V4zm6 16v-4h-2v4zm0-15v2h2v2h-2v2h-2V9H9V7h2V5z"></svg:path>`,
})
export class TdesignHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHospital1Icon],svg[tdesign-hospital-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.999 1.66l10.413 9.257l-1.329 1.495L20 11.449v10.55H4V11.455l-1.094.957l-1.317-1.505L4.338 8.5zm-6 8.038V20H9v-5h6v5h3V9.67l-6-5.33zM13 20v-3h-2v3zm0-13v2h2v2h-2v2h-2v-2H9V9h2V7z"></svg:path>`,
})
export class TdesignHospital1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHospital1FilledIcon],svg[tdesign-hospital-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.413 10.917L11.999 1.66L4.34 8.5l-2.75 2.405l1.318 1.505L4 11.454V22h4.5v-6h7v6H20V11.449l1.084.963zM13 9h2v2h-2v2h-2v-2H9V9h2V7h2z"></svg:path><svg:path fill="currentColor" d="M10.5 22v-4h3v4z"></svg:path>`,
})
export class TdesignHospital1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHospitalFilledIcon],svg[tdesign-hospital-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4v2h1v4H2v14h6.5v-7h7v7H22V8h-3V4h1zm-7 5h2v2h-2v2h-2V9H9V7h2V5h2z"></svg:path><svg:path fill="currentColor" d="M10.5 22v-5h3v5z"></svg:path>`,
})
export class TdesignHospitalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHotspotWaveIcon],svg[tdesign-hotspot-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0h1a9 9 0 0 1 9 9v1h-2V9a7 7 0 0 0-7-7h-1zM4 2h6v2H6v18h12V12h2v12H4zm8 2h1a5 5 0 0 1 5 5v1h-2V9a3 3 0 0 0-3-3h-1zm0 4h2.004v2.004H12z"></svg:path>`,
})
export class TdesignHotspotWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHotspotWaveFilledIcon],svg[tdesign-hotspot-wave-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0h-1v2h1a7 7 0 0 1 7 7v1h2V9a9 9 0 0 0-9-9m-3 2H4v22h16V12h-2v6H6V4h4zm3.004 18v2.004H11V20z"></svg:path><svg:path fill="currentColor" d="M13 4h-1v2h1a3 3 0 0 1 3 3v1h2V9a5 5 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="M14.004 8H12v2.004h2.004z"></svg:path>`,
})
export class TdesignHotspotWaveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHourglassIcon],svg[tdesign-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v3a8 8 0 0 1-4.124 7A8 8 0 0 1 20 19v3H4v-3a8 8 0 0 1 4.124-7A8 8 0 0 1 4 5zm8 11a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6M6 4v1a6 6 0 1 0 12 0V4z"></svg:path>`,
})
export class TdesignHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHourglassFilledIcon],svg[tdesign-hourglass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v3a8 8 0 0 1-4.124 7A8 8 0 0 1 20 19v3H4v-3a8 8 0 0 1 4.124-7A8 8 0 0 1 4 5zm14 3V4H6v1c0 .892.195 1.739.544 2.5h10.912c.35-.761.544-1.608.544-2.5m-6.998 8.083A6 6 0 0 0 6 19v1h1.1a5.01 5.01 0 0 1 3.902-3.9zm1.996 3.017A5.01 5.01 0 0 1 16.9 20H18v-1a6 6 0 0 0-5.002-5.917z"></svg:path>`,
})
export class TdesignHourglassFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHousesIcon],svg[tdesign-houses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.996 1.658l10.416 9.259l-1.329 1.495L20 11.449v10.55H4V11.455l-1.094.957l-1.317-1.505l4.41-3.86V3H8v2.254zM6 9.704V20h3v-6h6v6h3V9.67l-5.996-5.33L7.66 8.252zM13 20v-4h-2v4z"></svg:path>`,
})
export class TdesignHousesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHouses1Icon],svg[tdesign-houses-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h4v-7h8v7h4V4zm10 16v-5h-4v5zM8 6v3H6V6zm5 0v3h-2V6zm5 0v3h-2V6z"></svg:path>`,
})
export class TdesignHouses1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHouses1FilledIcon],svg[tdesign-houses-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20h-5.5v-8h-9v8H2zm6 7V6H6v3zm5 0V6h-2v3zm3 0h2V6h-2z"></svg:path><svg:path fill="currentColor" d="M9.5 22v-6h5v6z"></svg:path>`,
})
export class TdesignHouses1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHouses2Icon],svg[tdesign-houses-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v2h9.566l4.2 7H21v11H3V11H1.233l4.2-7H7V2zm-4 9v9h4v-5h6v5h4v-9zm14.233-2l-1.8-3H6.566l-1.8 3zM13 20v-3h-2v3z"></svg:path>`,
})
export class TdesignHouses2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHouses2FilledIcon],svg[tdesign-houses-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4V2H7v2H5.435l-4.2 7h21.533l-4.2-7zm12 9H3v9h5.501v-6h7v6H21z"></svg:path><svg:path fill="currentColor" d="M10.501 18v4h3v-4z"></svg:path>`,
})
export class TdesignHouses2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHousesFilledIcon],svg[tdesign-houses-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.997 1.658l10.416 9.259l-1.329 1.495l-1.083-.963v10.55H15.5V15h-7v7H4V11.454l-1.093.957l-1.317-1.505L6 7.046V3h2v2.254z"></svg:path><svg:path fill="currentColor" d="M10.5 22v-5h3v5z"></svg:path>`,
})
export class TdesignHousesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHtml5Icon],svg[tdesign-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.941 1H22.06l-1.098 19.208l-8.96 3.36l-8.962-3.36zM4.06 3l.902 15.792l7.04 2.64l7.038-2.64L19.941 3zm1.61 2h12.66l-.115 2.017L16.495 7H7.787l.193 3.377h10.043l-.405 7.084L12 19.568l-5.618-2.107l-.194-3.388h2.024l.044 1.12l.048.853L12 17.432l3.696-1.386l.21-3.67H6.09z"></svg:path>`,
})
export class TdesignHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHtml5FilledIcon],svg[tdesign-html5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.059 1l-1.098 19.208l-8.96 3.36l-8.962-3.36L1.941 1zM7.787 7h8.708l1.72.017L18.33 5H5.67l.421 7.377h9.814l-.21 3.67L12 17.431l-3.696-1.386l-.048-.853l-.044-1.12H6.188l.194 3.388L12 19.568l5.618-2.107l.405-7.084H7.98z"></svg:path>`,
})
export class TdesignHtml5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHttpsIcon],svg[tdesign-https-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7.5a6.5 6.5 0 0 1 13 0V9h2v13h-17V9h2zm2 1.5h9V7.5a4.5 4.5 0 1 0-9 0zm-2 2v9h13v-9zm4.5 4.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignHttpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignHttpsFilledIcon],svg[tdesign-https-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7v3.5h2.5V22h-17V10.5H6V7a6 6 0 1 1 12 0M8 7v3.5h8V7a4 4 0 1 0-8 0m4 7.25a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignHttpsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIceCreamIcon],svg[tdesign-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2.717c-1.757-1.153-4.17-.961-5.708.576a4.55 4.55 0 0 0-1.316 3.531L2.073 19.291l-.008.017c-.711 1.66.967 3.337 2.626 2.626l.018-.007l12.467-5.904a4.55 4.55 0 0 0 3.53-1.316c1.538-1.537 1.73-3.95.576-5.707c1.154-1.756.962-4.17-.575-5.707S16.756 1.563 15 2.717m1.414 1.496c.94-.436 2.113-.272 2.878.494c.976.975.976 2.61 0 3.586c-.765.766-1.937.93-2.878.494a4.59 4.59 0 0 0 0-4.574m3.372 6.202c.437.94.272 2.112-.494 2.878c-.5.5-1.173.752-1.844.74l-7.482-7.48a2.55 2.55 0 0 1 .74-1.846c.976-.975 2.611-.975 3.587 0c.975.975.975 2.61 0 3.586L13.585 9l.707.707c1.476 1.476 3.76 1.712 5.494.708m-4.497 4.289l-11.384 5.39L9.296 8.712z"></svg:path>`,
})
export class TdesignIceCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIceCreamFilledIcon],svg[tdesign-ice-cream-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2.717c-1.757-1.153-4.17-.961-5.708.576a4.55 4.55 0 0 0-1.316 3.531L2.073 19.291l-.008.017c-.711 1.66.967 3.337 2.626 2.626l.018-.007l12.467-5.904a4.55 4.55 0 0 0 3.53-1.316c1.538-1.537 1.73-3.95.576-5.707c1.154-1.756.962-4.17-.575-5.707S16.756 1.563 15 2.717m1.414 1.496c.94-.436 2.113-.272 2.878.494c.976.975.976 2.61 0 3.586c-.765.766-1.937.93-2.878.494a4.59 4.59 0 0 0 0-4.574m3.372 6.202c.437.94.272 2.112-.494 2.878c-.5.5-1.173.752-1.844.74l-7.482-7.48a2.55 2.55 0 0 1 .74-1.846c.976-.975 2.611-.975 3.587 0c.975.975.975 2.61 0 3.586L13.585 9l.707.707c1.476 1.476 3.76 1.712 5.494.708"></svg:path>`,
})
export class TdesignIceCreamFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIconIcon],svg[tdesign-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H8v5.15A7.5 7.5 0 1 0 16.85 16H22zm-5.016 12A7.5 7.5 0 0 0 10 7.016V4h10v10zM9.5 9a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11"></svg:path>`,
})
export class TdesignIconIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIconFilledIcon],svg[tdesign-icon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H8v5.15A7.5 7.5 0 1 0 16.85 16H22zm-5.016 12A7.5 7.5 0 0 0 10 7.016V4h10v10z"></svg:path>`,
})
export class TdesignIconFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageIcon],svg[tdesign-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 18h13.586L9 11.414l-5 5zm16-.414V4H4v9.586l5-5zM15.547 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class TdesignImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImage1Icon],svg[tdesign-image-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0M9.928 8.124l4.419 7.015l2.581-3.975L23.966 22H1.188zm0 3.752L4.812 20h15.47l-3.354-5.164l-2.607 4.014z"></svg:path>`,
})
export class TdesignImage1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImage1FilledIcon],svg[tdesign-image-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.001 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0M8.997 8.144l4.493 6.988l2.436-3.899L24.001 22H.18z"></svg:path>`,
})
export class TdesignImage1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageAddIcon],svg[tdesign-image-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v10h-2V4H4v9.586l5-5L14.414 14L13 15.414l-4-4l-5 5V20h8v2H2zm13.547 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0M20 14v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path>`,
})
export class TdesignImageAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageAddFilledIcon],svg[tdesign-image-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h11.232a6.5 6.5 0 0 1-.732-3c0-1.9.816-3.61 2.116-4.799L9 8.586l-5 5V4h16v8.576a6.5 6.5 0 0 1 2 .656z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M18 24h2v-4h4v-2h-4v-4h-2v4h-4v2h4z"></svg:path>`,
})
export class TdesignImageAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageEditIcon],svg[tdesign-image-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v8h-2V4H4v9.586l5-5l5.914 5.914l-1.414 1.414l-4.5-4.5l-5 5V20h6v2H2zm13.547 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m7.24 4.086l4.127 4.127l-7.286 7.287H12.5l-.001-4.128zm-.922 3.75l1.299 1.3l.922-.923l-1.3-1.299zm-.115 2.713l-1.3-1.299l-2.95 2.95v1.3h1.3z"></svg:path>`,
})
export class TdesignImageEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageEditFilledIcon],svg[tdesign-image-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h8.501l-.001-3.456l4.23-4.229L9 8.585l-5 5V4h16v5.47l2 2z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m7.914 10.963l-4.127-4.127l-7.287 7.286l.001 4.128h4.127zm-6.463 1.037l1.299 1.3l-2.95 2.95h-1.3v-1.3z"></svg:path>`,
})
export class TdesignImageEditFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageErrorIcon],svg[tdesign-image-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v10h-2V4H4v9.586l5-5L14.414 14L13 15.414l-4-4l-5 5V20h8v2H2zm13.547 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3.625 6.757L19 17.586l2.828-2.829l1.415 1.415L20.414 19l2.829 2.828l-1.415 1.415L19 20.414l-2.828 2.829l-1.415-1.415L17.586 19l-2.829-2.828z"></svg:path>`,
})
export class TdesignImageErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageErrorFilledIcon],svg[tdesign-image-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h11.232a6.5 6.5 0 0 1-.732-3c0-1.9.816-3.61 2.116-4.799L9 8.586l-5 5V4h16v8.576a6.5 6.5 0 0 1 2 .656z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m5.829 17.993l1.414-1.415L20.415 19l2.828-2.828l-1.414-1.415L19 17.586l-2.828-2.829l-1.414 1.415L17.586 19l-2.828 2.828l1.414 1.415L19 20.414z"></svg:path>`,
})
export class TdesignImageErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageFilledIcon],svg[tdesign-image-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-2 2v15.586l-11-11l-5 5V4z"></svg:path>`,
})
export class TdesignImageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageOffIcon],svg[tdesign-image-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 .586L.586 22L2 23.414L3.414 22H22V3.414L23.414 2zM11.5 13.914L17.586 20H5.414zm8.5 5.672L12.915 12.5l1.06-1.062a3.21 3.21 0 0 0 4.463-4.463L20 5.414zm-4.47-9.614l1.443-1.442q.027.125.028.26a1.21 1.21 0 0 1-1.47 1.182M2.004 2l-.005 15.658l2.005-1.696V4l11.362.002l2.37-2.004z"></svg:path>`,
})
export class TdesignImageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageOffFilledIcon],svg[tdesign-image-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.759 2H2.001v15.758l8.086-8.086l-1.086-1.086l-5 5V4h11.758zM.583 22.005L21.993.595L21.99.59l.004-.004L23.407 2l-1.406 1.406V22H3.407l-1.414 1.414zM16.001 10.75c-.395 0-.77-.083-1.11-.233l-1.98 1.98l7.09 7.089V5.406L18.517 6.89A2.75 2.75 0 0 1 16 10.75"></svg:path>`,
})
export class TdesignImageOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageSearchIcon],svg[tdesign-image-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v9h-2V4H4v9.586l5-5l3.914 3.914l-1.414 1.414l-2.5-2.5l-5 5V20h7v2H2zm13.547 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m5.107 6.5a3.154 3.154 0 1 0 0 6.308a3.154 3.154 0 0 0 0-6.308M12.5 17.654a5.154 5.154 0 1 1 9.437 2.867l1.977 1.98l-1.415 1.413l-1.976-1.978a5.154 5.154 0 0 1-8.023-4.282"></svg:path>`,
})
export class TdesignImageSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignImageSearchFilledIcon],svg[tdesign-image-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h10.506A6.72 6.72 0 0 1 11 17.75a6.73 6.73 0 0 1 2.189-4.976L9 8.586l-5 5V4h16v7.384c.733.26 1.408.641 2 1.122z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m1.654 7.25a5.154 5.154 0 1 0 2.87 9.436l1.975 1.978l1.415-1.413l-1.977-1.98a5.154 5.154 0 0 0-4.283-8.021M14.5 17.654a3.154 3.154 0 1 1 6.308 0a3.154 3.154 0 0 1-6.308 0"></svg:path>`,
})
export class TdesignImageSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIndentLeftIcon],svg[tdesign-indent-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v2h20V4zm6 7v2h14v-2zm-6 7h20v2H2zm-.414-6l3.182 3.182l1.414-1.414L4.414 12l1.768-1.768l-1.414-1.414z"></svg:path>`,
})
export class TdesignIndentLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIndentRightIcon],svg[tdesign-indent-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4H2v2h20V4zm6 7H8v2h14v-2zm-7 7h20v2H2zm3.805-5.293L6.512 12l-.707-.707l-1.768-1.768l-.707-.707l-1.414 1.414l.707.708L3.683 12l-1.06 1.06l-.707.708l1.414 1.414l.707-.707z"></svg:path>`,
})
export class TdesignIndentRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIndicatorIcon],svg[tdesign-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.353 1v3h3.294V1h2v3h1.89l4.097 3l-4.096 3h-1.89v2.111H22v6h-6.353V23h-2v-4.889h-3.294V23h-2v-4.889h-1.89l-4.097-3l4.096-3h1.89V10H2V4h6.353V1zM4 6v2h12.884l1.365-1l-1.365-1zm9.647 4h-3.294v2.111h3.294zm-6.53 4.111l-1.366 1l1.366 1H20v-2z"></svg:path>`,
})
export class TdesignIndicatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIndicatorFilledIcon],svg[tdesign-indicator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.353 1v3h3.294V1h2v3h1.89l4.097 3l-4.096 3h-1.89v2.111H22v6h-6.353V23h-2v-4.889h-3.294V23h-2v-4.889h-1.89l-4.097-3l4.096-3h1.89V10H2V4h6.353V1zm3.294 9h-3.294v2.111h3.294z"></svg:path>`,
})
export class TdesignIndicatorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInfoCircleIcon],svg[tdesign-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-12 5.5V10h2v7.5zm2-9h-2.004V6.496H13z"></svg:path>`,
})
export class TdesignInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInfoCircleFilledIcon],svg[tdesign-info-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M10.996 8.5V6.496H13V8.5zM13 10v7.5h-2V10z"></svg:path>`,
})
export class TdesignInfoCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInkIcon],svg[tdesign-ink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.896V21H2v-8.104l2.196-4.182H6.2V3h11.6v5.714h2.004zm-6.2-4.182V5H8.2v3.714zM20 13.39l-1.404-2.675H5.404L4 13.39V19h16z"></svg:path>`,
})
export class TdesignInkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInkFilledIcon],svg[tdesign-ink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.2 8.5V3h11.6v5.5zM22 21v-6.5l-2.5-3.996h-15L2 14.5V21z"></svg:path>`,
})
export class TdesignInkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallIcon],svg[tdesign-install-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v7.11l2.508-2.48l1.406 1.422L12 12.91L7.086 8.052L8.492 6.63L11 9.11V2zM2 2h7v2H4v10h16V4h-5V2h7v20H2zm18 14H4v4h16zm-14.002.998h2.004v2.004H5.998zm3 0h2.004v2.004H8.998z"></svg:path>`,
})
export class TdesignInstallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallDesktopIcon],svg[tdesign-install-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v4.657l1.53-1.466l1.384 1.445L19 10.385l-3.914-3.75l1.384-1.444L18 6.657V2zM1 3h13v2H3v11h18v-4h2v6H1zm4 17h14v2H5z"></svg:path>`,
})
export class TdesignInstallDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallDesktopFilledIcon],svg[tdesign-install-desktop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h13v2H3v10h18v-4h2v8H1zm3 18h16v2H4z"></svg:path><svg:path fill="currentColor" d="M20 1.002v4.586l1.501-1.5L22.915 5.5l-3.914 3.915L15.084 5.5l1.414-1.414l1.503 1.503V1.002z"></svg:path>`,
})
export class TdesignInstallDesktopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallFilledIcon],svg[tdesign-install-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.11V2h-2v7.11L8.492 6.63L7.086 8.052L12 12.91l4.914-4.858l-1.406-1.422z"></svg:path><svg:path fill="currentColor" d="M9 2H2v20h20V2h-7v2h5v10H4V4h5zm-.998 14.998v2.004H5.998v-2.004zm3 0v2.004H8.998v-2.004z"></svg:path>`,
})
export class TdesignInstallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallMobileIcon],svg[tdesign-install-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h11v2H6v18h12V11h2v12H4zm16 0v4.657l1.53-1.466l1.384 1.445L19 9.385l-3.914-3.75l1.384-1.444L18 5.657V1zm-9 16h2.004v2.004H11z"></svg:path>`,
})
export class TdesignInstallMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallMobileFilledIcon],svg[tdesign-install-mobile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H4v22h16V11h-2v6H6V3h9zm-1.997 18v2.004H11V19z"></svg:path><svg:path fill="currentColor" d="M20 1.002v4.586l1.501-1.5L22.915 5.5l-3.914 3.915L15.084 5.5l1.414-1.414l1.503 1.503V1.002z"></svg:path>`,
})
export class TdesignInstallMobileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstitutionIcon],svg[tdesign-institution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .856l10 5.556V9H2V6.412zM5.06 7h13.88L12 3.144zM7 11v8H5v-8zm6 0v8h-2v-8zm6 0v8h-2v-8zM2 21h20v2H2z"></svg:path>`,
})
export class TdesignInstitutionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstitutionCheckedIcon],svg[tdesign-institution-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 .856l10 5.556V9H1V6.412zM4.06 7h13.88L11 3.144zM6 11v8H4v-8zm6 0v8h-2v-8zm6 0v6h-2v-6zm4.596 6.94l-5.657 5.656l-3.535-3.535l1.414-1.414l2.121 2.12l4.243-4.242zM1 21h11v2H1z"></svg:path>`,
})
export class TdesignInstitutionCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstitutionCheckedFilledIcon],svg[tdesign-institution-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 .856l10 5.556V9H1V6.412zM6 11v8H4v-8zm6 0v8h-2v-8zm6 0v6h-2v-6zm4.596 6.94l-5.657 5.656l-3.535-3.535l1.414-1.414l2.121 2.12l4.243-4.242zM1 21h11v2H1z"></svg:path>`,
})
export class TdesignInstitutionCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInstitutionFilledIcon],svg[tdesign-institution-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .856l10 5.556V9H2V6.412zM2 21h20v2H2zm5-2H5v-8h2zm6 0h-2v-8h2zm6 0h-2v-8h2z"></svg:path>`,
})
export class TdesignInstitutionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInternetIcon],svg[tdesign-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.055 11a9.01 9.01 0 0 1 6.277-7.598A16.9 16.9 0 0 0 7.029 11zm7.937-9.954C5.39 1.554 1 6.265 1 12s4.39 10.446 9.992 10.955l.008.01l.425.02A13 13 0 0 0 12 23a11 11 0 0 0 .575-.015l.425-.02l.008-.01C18.61 22.444 23 17.735 23 12S18.61 1.554 13.008 1.046L13 1.036l-.426-.021a11 11 0 0 0-1.148 0l-.426.02zM12.002 3a14.9 14.9 0 0 1 2.965 8H9.033a14.9 14.9 0 0 1 2.966-8H12M7.028 13c.16 2.76.98 5.345 2.303 7.598A9.01 9.01 0 0 1 3.055 13zm4.97 8a14.9 14.9 0 0 1-2.966-8h5.934A14.9 14.9 0 0 1 12 21zm2.67-.402A16.9 16.9 0 0 0 16.97 13h3.974a9.01 9.01 0 0 1-6.276 7.598M16.97 11c-.16-2.76-.98-5.345-2.303-7.598A9.01 9.01 0 0 1 20.945 11z"></svg:path>`,
})
export class TdesignInternetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignInternetFilledIcon],svg[tdesign-internet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.721 22.66c4.447-1.13 7.812-4.971 8.234-9.66h-4.981c-.186 3.547-1.356 6.847-3.253 9.66M22.955 11c-.422-4.69-3.79-8.532-8.238-9.662c1.898 2.814 3.07 6.114 3.257 9.662zM9.284 1.338C4.834 2.468 1.468 6.31 1.044 11h4.982c.187-3.548 1.359-6.848 3.258-9.662M1.045 13a11.01 11.01 0 0 0 8.234 9.66C7.382 19.847 6.212 16.547 6.026 13zM12 22.962C9.693 20.177 8.248 16.741 8.03 13h7.941c-.22 3.74-1.664 7.177-3.97 9.962M12 1.043c2.307 2.784 3.75 6.219 3.97 9.957H8.03C8.25 7.262 9.694 3.827 12 1.043"></svg:path>`,
})
export class TdesignInternetFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIpodIcon],svg[tdesign-ipod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v22H3zm2 2v10h2V9h2v4h2V5h2v8h2V7h2v6h2V3zm14 12H5v6h14zm-9 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignIpodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignIpodFilledIcon],svg[tdesign-ipod-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H3v22h18zM5 13V3h14v10h-2V7h-2v6h-2V5h-2v8H9V9H7v4zm7 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class TdesignIpodFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignJoyfulIcon],svg[tdesign-joyful-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m6.619-4.862L11 9.04v1.46l-3.2 2.4l-1.2-1.6l1.86-1.394L6.637 8.88zm9.743 1.743L15.54 9.906L17.4 11.3l-1.2 1.6l-3.2-2.4V9.04l3.381-1.902zM7 13h10v1a5 5 0 0 1-10 0zm2.17 2a3.001 3.001 0 0 0 5.66 0z"></svg:path>`,
})
export class TdesignJoyfulIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignJoyfulFilledIcon],svg[tdesign-joyful-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M11 9.04L7.618 7.138l-.98 1.743l1.82 1.025L6.6 11.3l1.2 1.6l3.2-2.4zm4.54.866l1.821-1.025l-.98-1.743L13 9.04v1.46l3.2 2.4l1.2-1.6zM12 19a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5"></svg:path>`,
})
export class TdesignJoyfulFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignJumpIcon],svg[tdesign-jump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h7.09v2H5v14h14v-5.09h2V21zm7.586-9l7-7H13V3h8v8h-2V6.414l-7 7z"></svg:path>`,
})
export class TdesignJumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignJumpDoubleIcon],svg[tdesign-jump-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v14h-3v-2h1V4H10v1H8V2zM2 7h6v2H4v11h11v-4h2v6H2zm8 0h7v7h-2v-3.586l-5 5L8.586 14l5-5H10z"></svg:path>`,
})
export class TdesignJumpDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignJumpOffIcon],svg[tdesign-jump-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.414 21L3 1.586L1.586 3L3 4.414V21h16.586L21 22.414zm-4.828-2H5V6.414L10.586 12l-.502.502l1.417 1.417l.502-.502zm3.42-1.581L21 14.499v-1.01h-2v1.924zM21 2.999h-8v2h4.586l-4.5 4.5l1.414 1.415l4.5-4.5V11h2zm-10.49.003H9.5l-2.92-.006l2.007 2.006h1.923z"></svg:path>`,
})
export class TdesignJumpOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignKeyIcon],svg[tdesign-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.828 9.172a4 4 0 1 0-5.656 5.656a4 4 0 0 0 5.656-5.656m-7.07-1.415A6 6 0 0 1 13.916 11H22v2h-1.5v2h-2v-2h-1v2.999h-2V13h-1.583a6 6 0 1 1-10.16-5.243"></svg:path>`,
})
export class TdesignKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignKeyFilledIcon],svg[tdesign-key-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.757 7.757A6 6 0 0 1 13.917 11H22v2h-1.5v2h-2v-2h-1v2.999h-2V13h-1.583a6 6 0 1 1-10.16-5.243"></svg:path>`,
})
export class TdesignKeyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignKeyboardIcon],svg[tdesign-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm1.996 2.5H7v2.004H4.996zm4 0H11v2.004H8.996zm4 0H15v2.004h-2.004zm4 0H19v2.004h-2.004zm-12 3H7v2.004H4.996zm4 0H11v2.004H8.996zm4 0H15v2.004h-2.004zm4 0H19v2.004h-2.004zM5 15h14v2H5z"></svg:path>`,
})
export class TdesignKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignKeyboardFilledIcon],svg[tdesign-keyboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zM4.996 7.5H7v2.004H4.996zM19 15v2H5v-2zm-8-7.5v2.004H8.996V7.5zm1.996 0H15v2.004h-2.004zM19 7.5v2.004h-2.004V7.5zm-14.004 3H7v2.004H4.996zm6.004 0v2.004H8.996V10.5zm1.996 0H15v2.004h-2.004zm6.004 0v2.004h-2.004V10.5z"></svg:path>`,
})
export class TdesignKeyboardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLaptopIcon],svg[tdesign-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v15H1zm2 2v11h18V5zM0 19h24v2H0z"></svg:path>`,
})
export class TdesignLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLaptopFilledIcon],svg[tdesign-laptop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v15H1zM0 19h24v2H0z"></svg:path>`,
})
export class TdesignLaptopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLayersIcon],svg[tdesign-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.917l10.1 4.208L12 10.333L1.9 6.125zM7.1 6.125L12 8.166l4.9-2.041L12 4.083zM2 9.98l10 4.308L22 9.98v2.181l-9.604 4.134l-.396.17l-.395-.17L2 12.162zm0 6l10 4.308l10-4.308v2.181l-9.603 4.134l-.397.17l-.395-.17L2 18.162z"></svg:path>`,
})
export class TdesignLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLayersFilledIcon],svg[tdesign-layers-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.917l10.1 4.208L12 10.333L1.9 6.125zM2 9.98l10 4.308L22 9.98v2.181l-10 4.305L2 12.16zm0 6l10 4.308l10-4.308v2.181l-10 4.305L2 18.16z"></svg:path>`,
})
export class TdesignLayersFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLayoutIcon],svg[tdesign-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v5h16V4zm16 7h-7v9h7zm-9 9v-9H4v9z"></svg:path>`,
})
export class TdesignLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLayoutFilledIcon],svg[tdesign-layout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h20v7H2zm0 9h9v11H2zm20 0h-9v11h9z" clip-rule="evenodd"></svg:path>`,
})
export class TdesignLayoutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLeaderboardIcon],svg[tdesign-leaderboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v8h6v10H2V9h6zm2 16h4V5h-4zm6 0h4v-6h-4zm-8 0v-8H4v8z"></svg:path>`,
})
export class TdesignLeaderboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLeaderboardFilledIcon],svg[tdesign-leaderboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.368 3h5.264v18H9.368zM2 9h5.263v12H2zm20 2h-5.263v10H22z"></svg:path>`,
})
export class TdesignLeaderboardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLemonIcon],svg[tdesign-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.608 12.344c-.183 1.679.312 3.24 1.223 4.6l.25.373l-.567 2.179l2.165-.579l.376.251c1.36.907 2.923 1.4 4.603 1.218c1.68-.183 3.596-1.054 5.635-3.093c2.04-2.039 2.91-3.955 3.093-5.635s-.31-3.244-1.218-4.603l-.25-.376l.578-2.165l-2.18.567l-.372-.25c-1.36-.911-2.921-1.406-4.6-1.223s-3.594 1.056-5.637 3.1c-2.043 2.042-2.916 3.958-3.099 5.636m-1.988-.216c.243-2.231 1.387-4.548 3.673-6.835s4.604-3.43 6.834-3.673c2.062-.225 3.948.331 5.544 1.303l1.547-.403l.047-.007a1.95 1.95 0 0 1 2.23 2.256l-.009.044l-.406 1.521c.965 1.595 1.518 3.48 1.294 5.54c-.242 2.231-1.383 4.55-3.667 6.833s-4.602 3.425-6.833 3.667c-2.06.224-3.945-.329-5.54-1.294l-1.52.406l-.045.008a1.95 1.95 0 0 1-2.256-2.23l.007-.046l.403-1.547c-.972-1.596-1.528-3.482-1.303-5.543m6.257-2.833l1.417-1.417l1.417 1.417l-1.417 1.417zm-.707 3.536l1.417-1.417l1.417 1.417l-1.417 1.417zm4.242-4.243l1.417-1.417l1.417 1.417l-1.417 1.417z"></svg:path>`,
})
export class TdesignLemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLemonFilledIcon],svg[tdesign-lemon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.293 5.293C3.007 7.58 1.863 9.897 1.62 12.127c-.225 2.062.331 3.948 1.303 5.544l-.403 1.547l-.007.047a1.95 1.95 0 0 0 2.256 2.23l.044-.009l1.521-.406c1.595.965 3.48 1.518 5.54 1.294c2.231-.242 4.55-1.383 6.833-3.667s3.425-4.602 3.667-6.833c.224-2.06-.329-3.945-1.294-5.54l.406-1.52l.008-.045a1.95 1.95 0 0 0-2.23-2.256l-.046.007l-1.547.403c-1.596-.972-3.482-1.528-5.543-1.303c-2.231.243-4.548 1.386-6.835 3.673m5.12 2.295l1.416-1.417l1.417 1.417l-1.417 1.417zm-2.119-.71l1.417 1.417l-1.417 1.417l-1.417-1.417zm-.707 3.536l1.417 1.417l-1.417 1.417L6.17 11.83z"></svg:path>`,
})
export class TdesignLemonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLemonSliceIcon],svg[tdesign-lemon-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.995.59L1.59 16.996l.697.707c1.04 1.056 2.523 2.117 4.125 2.918C8.007 21.416 9.81 22 11.488 22a11.48 11.48 0 0 0 8.14-3.372A11.48 11.48 0 0 0 23 10.488c0-1.678-.584-3.481-1.38-5.075c-.8-1.603-1.862-3.085-2.918-4.126zm2.904 8.8l-8.172-.703l5.243-5.243a15 15 0 0 1 1.861 2.863c.519 1.038.897 2.101 1.068 3.083m-7.754 1.34l7.812.672a9.46 9.46 0 0 1-2.073 5.068zm4.325 7.154a9.46 9.46 0 0 1-5.068 2.072l-.671-7.811zm-7.782-6.158l.702 8.173c-.982-.171-2.045-.55-3.083-1.068a15 15 0 0 1-2.862-1.861z"></svg:path>`,
})
export class TdesignLemonSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLemonSliceFilledIcon],svg[tdesign-lemon-slice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.76 10.802L0 17.562l1.412 1.412a11.94 11.94 0 0 0 6.054 3.267zm2.725 11.679c2.895.1 5.82-.844 8.162-2.83l-8.886-8.886zm9.576-4.244a11.97 11.97 0 0 0 2.83-8.161L10.175 9.35zm2.589-10.18a11.94 11.94 0 0 0-3.267-6.054L16.97.591L10.21 7.35z"></svg:path>`,
})
export class TdesignLemonSliceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLessThanIcon],svg[tdesign-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.364 4.372L7.015 12l13.35 7.628l-.993 1.736L2.984 12l16.388-9.364z"></svg:path>`,
})
export class TdesignLessThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLessThanOrEqualIcon],svg[tdesign-less-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.297 3.565L7.735 8.5l12.562 4.935l-.731 1.861L2.266 8.5l17.3-6.796zM3 19h18v2H3z"></svg:path>`,
})
export class TdesignLessThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersAIcon],svg[tdesign-letters-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14h2v-7h6v7zm-2-9H9V6h6z"></svg:path>`,
})
export class TdesignLettersAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersBIcon],svg[tdesign-letters-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7zm2 2v5h6V6zm6 7H9v5h6z"></svg:path>`,
})
export class TdesignLettersBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersCIcon],svg[tdesign-letters-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8v-2H9V6h8z"></svg:path>`,
})
export class TdesignLettersCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersDIcon],svg[tdesign-letters-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7zm2 2v12h6V6z"></svg:path>`,
})
export class TdesignLettersDIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersEIcon],svg[tdesign-letters-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a2 2 0 0 1 2-2h8v2H9v5h8v2H9v5h8v2H9a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignLettersEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersFIcon],svg[tdesign-letters-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a2 2 0 0 1 2-2h7v2h-7v5h7v2h-7v7H8z"></svg:path>`,
})
export class TdesignLettersFIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersGIcon],svg[tdesign-letters-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H8.5A1.5 1.5 0 0 0 7 5.5v13A1.5 1.5 0 0 0 8.5 20H17v-9h-5.2v2H15v5H9V6h7z"></svg:path>`,
})
export class TdesignLettersGIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersHIcon],svg[tdesign-letters-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v7h6V4h2v16h-2v-7H9v7H7V4z"></svg:path>`,
})
export class TdesignLettersHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersIIcon],svg[tdesign-letters-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4h7v2H13v12h2.5v2h-7v-2H11V6H8.5z"></svg:path>`,
})
export class TdesignLettersIIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersJIcon],svg[tdesign-letters-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.667 4H15v14.5a1.5 1.5 0 0 1-1.5 1.5H8v-2h5V6H9.667z"></svg:path>`,
})
export class TdesignLettersJIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersKIcon],svg[tdesign-letters-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20v-6.057l5 3.572V20h2v-2.743a1.5 1.5 0 0 0-.628-1.22L10.72 12l5.65-4.037a1.5 1.5 0 0 0 .63-1.22V4h-2v2.485l-5 3.572V4H8v16z"></svg:path>`,
})
export class TdesignLettersKIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersLIcon],svg[tdesign-letters-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v14a2 2 0 0 0 2 2h8v-2H9V4z"></svg:path>`,
})
export class TdesignLettersLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersMIcon],svg[tdesign-letters-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20V6h-5v14h-2V6H6v14H4V4h14a2 2 0 0 1 2 2v14z"></svg:path>`,
})
export class TdesignLettersMIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersNIcon],svg[tdesign-letters-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 20V6h7v14h2V6a2 2 0 0 0-2-2h-9v16z"></svg:path>`,
})
export class TdesignLettersNIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersOIcon],svg[tdesign-letters-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18V6h6v12zM7 6v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></svg:path>`,
})
export class TdesignLettersOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersPIcon],svg[tdesign-letters-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H9V20H7zm2 7.5h6V6H9z"></svg:path>`,
})
export class TdesignLettersPIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersQIcon],svg[tdesign-letters-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v12h6V6zm8 12h1.5v2h-10A1.5 1.5 0 0 1 7 18.5v-13A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5z"></svg:path>`,
})
export class TdesignLettersQIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersRIcon],svg[tdesign-letters-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8.5A1.5 1.5 0 0 1 17 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-2.77l4.239 3.587a1.5 1.5 0 0 1 .531 1.145V20h-2v-2.036L9.634 13H9v7H7zm2 7h6V6H9z"></svg:path>`,
})
export class TdesignLettersRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersSIcon],svg[tdesign-letters-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6a2 2 0 0 1 2-2H16v2H9.5v5h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8v-2h6.5v-5h-5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignLettersSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersTIcon],svg[tdesign-letters-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 4h11v2H13v14h-2V6H6.5z"></svg:path>`,
})
export class TdesignLettersTIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersUIcon],svg[tdesign-letters-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v14H9V4H7v14a2 2 0 0 0 2 2h8V4z"></svg:path>`,
})
export class TdesignLettersUIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersVIcon],svg[tdesign-letters-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v10.273l-3 3.652l-3-3.652V4H7v10.273a2 2 0 0 0 .455 1.27l3.772 4.592h1.546l3.772-4.592a2 2 0 0 0 .455-1.27V4z"></svg:path>`,
})
export class TdesignLettersVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersWIcon],svg[tdesign-letters-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v14h5V4h2v14h5V4h2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"></svg:path>`,
})
export class TdesignLettersWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersXIcon],svg[tdesign-letters-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.495 8.449A2 2 0 0 0 17 7.119V4h-2v3.12l-3 3.375L9 7.12V4H7v3.12a2 2 0 0 0 .505 1.329L10.662 12l-3.157 3.552A2 2 0 0 0 7 16.88V20h2v-3.12l3-3.375l3 3.375V20h2v-3.12a2 2 0 0 0-.505-1.328L13.338 12z"></svg:path>`,
})
export class TdesignLettersXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersYIcon],svg[tdesign-letters-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.713 8.22A1.5 1.5 0 0 0 17 7.337V4h-2v3.175L12 11.3L9 7.175V4H7v3.337c0 .317.1.626.287.883L11 13.325V20h2v-6.675z"></svg:path>`,
})
export class TdesignLettersYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersZIcon],svg[tdesign-letters-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.571 5.1a1.1 1.1 0 0 0-1.1-1.1H7v2h7.571v1.135l-7.571 9V18.9A1.1 1.1 0 0 0 8.1 20H17v-2H9v-1.135l7.571-9z"></svg:path>`,
})
export class TdesignLettersZIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLightbulbIcon],svg[tdesign-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-3.418-.002-6.2 2.782-6.2 6.2c0 .917.169 1.61.632 2.723c.16.385.405.91.696 1.533q.213.456.452.975A48 48 0 0 1 8.69 16h6.629c.341-.853.741-1.749 1.114-2.565l.39-.85c.312-.677.576-1.25.745-1.66c.46-1.114.632-1.81.632-2.725c0-3.417-2.782-6.198-6.2-6.2M3.8 8.2C3.8 3.679 7.477-.002 12 0s8.2 3.678 8.2 8.2c0 1.264-.262 2.227-.783 3.489c-.186.45-.477 1.08-.797 1.777q-.181.391-.368.8c-.467 1.023-.953 2.121-1.31 3.083l-.243.651h-9.41l-.235-.666c-.339-.955-.82-2.046-1.29-3.067l-.423-.91a50 50 0 0 1-.756-1.665C4.058 10.425 3.8 9.462 3.8 8.2M7.5 19h9v2h-9zm2 3h5v2h-5z"></svg:path>`,
})
export class TdesignLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLightbulbCircleIcon],svg[tdesign-lightbulb-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8.5 7h-5v-2h5zm.735-3h-6.47l-.235-.668c-.435-1.236-.978-2.398-1.488-3.456A5.4 5.4 0 0 1 6.5 9.5C6.5 6.467 8.967 4 12 4s5.5 2.467 5.5 5.5c0 .83-.181 1.631-.542 2.377c-.51 1.057-1.052 2.219-1.488 3.455zm-1.405-2a40 40 0 0 1 1.328-2.993q.341-.706.342-1.507C15.5 7.571 13.93 6 12 6a3.506 3.506 0 0 0-3.5 3.5q0 .799.343 1.507c.429.888.906 1.9 1.327 2.993z"></svg:path>`,
})
export class TdesignLightbulbCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLightbulbCircleFilledIcon],svg[tdesign-lightbulb-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M12 4.5a4.956 4.956 0 0 0-4.95 4.95c0 .75.164 1.467.487 2.136c.564 1.168 1.184 2.493 1.683 3.914h5.56c.5-1.421 1.12-2.746 1.684-3.914a4.9 4.9 0 0 0 .486-2.136c0-2.73-2.22-4.95-4.95-4.95M9.5 17v2h5v-2z"></svg:path>`,
})
export class TdesignLightbulbCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLightbulbFilledIcon],svg[tdesign-lightbulb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.8 8.2C3.8 3.68 7.477-.002 12 0s8.2 3.678 8.2 8.2c0 1.264-.262 2.227-.783 3.489c-.186.45-.477 1.08-.797 1.777l-.368.8c-.467 1.024-.953 2.121-1.31 3.083l-.243.651h-9.41l-.235-.666c-.339-.955-.82-2.046-1.29-3.067l-.423-.91a50 50 0 0 1-.756-1.665C4.058 10.426 3.8 9.462 3.8 8.2M7.5 19h9v2h-9zm2 3h5v2h-5z"></svg:path>`,
})
export class TdesignLightbulbFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLighthouseIcon],svg[tdesign-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v1h6V1h2v9c0 2.393.482 5.311.978 7.669a71 71 0 0 0 .962 3.982l.016.057l.004.014v.003L19.326 23H13.22l-1-4h-.439l-1 4H4.674l.364-1.275l.001-.003l.004-.014l.016-.057l.062-.224a71 71 0 0 0 .9-3.758C6.517 15.311 7 12.393 7 10V1zm0 6.002V10c0 2.607-.518 5.689-1.022 8.081A73 73 0 0 1 7.3 21h1.92l1-4h3.561l1 4H16.7a74 74 0 0 1-.678-2.919C15.517 15.689 15 12.607 15 10V7.002zM15 5V4H9v1zm-4 3.998h2.004v2.004H11z"></svg:path>`,
})
export class TdesignLighthouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLighthouse1Icon],svg[tdesign-lighthouse-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .923l6.3 2.52l-.743 1.857L17 5.077V10h2v2h-1.907c.164 1.905.52 3.938.885 5.669a71 71 0 0 0 .962 3.982l.016.057l.004.014v.003L19.326 23H13.22l-1-4h-.439l-1 4H4.674l.364-1.275l.001-.004l.004-.013l.016-.057l.062-.224a71 71 0 0 0 .9-3.758c.364-1.731.721-3.764.885-5.67H5v-2h2V5.078l-.558.223L5.7 3.443zM9 4.277V10h6V4.277l-3-1.2zM15.086 12H8.913c-.168 2.086-.556 4.28-.935 6.08A73 73 0 0 1 7.3 21h1.92l1-4h3.561l1 4H16.7a74 74 0 0 1-.678-2.92c-.38-1.8-.767-3.994-.935-6.08M11 5.998h2.004v2.004H11z"></svg:path>`,
})
export class TdesignLighthouse1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLighthouse1FilledIcon],svg[tdesign-lighthouse-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.3 3.443L12 .923l-6.3 2.52l.742 1.857L7 5.077V10H5v2h1.906c-.164 1.905-.52 3.938-.885 5.669a71 71 0 0 1-.962 3.982l-.016.057l-.004.014l-.001.003L4.674 23h5.606l1-4h1.439l1 4h5.606l-.364-1.275l-.001-.004l-.004-.013l-.016-.057l-.061-.224a71 71 0 0 1-.9-3.758c-.365-1.731-.722-3.764-.886-5.67H19v-2h-2V5.078l.557.223zm-5.296 2.555v2.004H11V5.998z"></svg:path>`,
})
export class TdesignLighthouse1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLighthouse2Icon],svg[tdesign-lighthouse-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v1.002h6V1h2v4h1v2h-1v3c0 .94.074 1.963.195 3H19v2h-1.523c.151.928.325 1.834.501 2.669a71 71 0 0 0 .9 3.758c.144.526.298 1.049.447 1.573H13.22l-1-4h-.439l-1 4H4.674c.15-.524.304-1.047.447-1.573a71 71 0 0 0 .9-3.758c.176-.835.35-1.741.501-2.669H5v-2h1.804c.121-1.037.196-2.06.196-3V7H6V5h1V1zm0 3.002V5h6v-.998zM15 7H9v3c0 .955-.07 1.974-.183 3h6.365A28 28 0 0 1 15 10zm.451 8H8.548a61 61 0 0 1-.57 3.081A73 73 0 0 1 7.3 21h1.92l1-4h3.561l1 4H16.7a74 74 0 0 1-.678-2.919a61 61 0 0 1-.57-3.081M11 8.998h2.004v2.004H11z"></svg:path>`,
})
export class TdesignLighthouse2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLighthouse2FilledIcon],svg[tdesign-lighthouse-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.002V1H7v4H6v2h1v3c0 .94-.075 1.963-.196 3H5v2h1.522a60 60 0 0 1-.501 2.669a71 71 0 0 1-.9 3.758q-.155.562-.317 1.121l-.13.452h5.606l1-4h1.439l1 4h5.606l-.13-.452a56 56 0 0 1-.54-1.968a71 71 0 0 1-.677-2.911A60 60 0 0 1 17.477 15H19v-2h-1.805A26 26 0 0 1 17 10V7h1V5h-1V1h-2v1.002zM9 5v-.998h6V5zm4.004 3.998v2.004H11V8.998z"></svg:path>`,
})
export class TdesignLighthouse2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLighthouseFilledIcon],svg[tdesign-lighthouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2V1H7v9c0 2.393-.483 5.311-.979 7.669a71 71 0 0 1-.962 3.982l-.016.057l-.004.014l-.001.003L4.674 23h5.606l1-4h1.439l1 4h5.606l-.364-1.275l-.001-.003l-.004-.014l-.016-.057l-.061-.224a71 71 0 0 1-.9-3.758c-.497-2.358-.98-5.276-.98-7.669V1h-2v1zm6 2v1H9V4zm-1.996 4.998v2.004H11V8.998z"></svg:path>`,
})
export class TdesignLighthouseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLightingCircleIcon],svg[tdesign-lighting-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-10.915 7.5H10v-5H6.29l5.625-10H14v5h3.71zM12 15.571l2.29-4.071H12V8.429L9.71 12.5H12z"></svg:path>`,
})
export class TdesignLightingCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLightingCircleFilledIcon],svg[tdesign-lighting-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-5.71-1.5H13V4.429L6.71 13.5H11v6.071z"></svg:path>`,
})
export class TdesignLightingCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLineHeightIcon],svg[tdesign-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.707 3.293L5 2.586l-.707.707L2 5.586l-.707.707l1.414 1.414L3.414 7L4 6.414v11.171L3.414 17l-.707-.707l-1.414 1.414l.707.707l2.293 2.293l.707.707l.707-.707L8 18.414l.707-.707l-1.414-1.414l-.707.707l-.586.585V6.414L6.586 7l.707.707l1.414-1.414L8 5.586zM13 4h-1v2h10V4zm-2 7h-1v2h12v-2zm1 7h10v2H12z"></svg:path>`,
})
export class TdesignLineHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLinkIcon],svg[tdesign-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.293 3.96a4.771 4.771 0 1 1 6.747 6.747l-3.03 3.03l-1.415-1.413l3.03-3.031a2.771 2.771 0 1 0-3.918-3.92l-3.031 3.031l-1.414-1.414zm2.12 6.04l-5.415 5.414L8.584 14l5.414-5.414zm-7.01 1.676l-3.03 3.031a2.771 2.771 0 1 0 3.92 3.92l3.03-3.031l1.414 1.414l-3.03 3.03a4.771 4.771 0 1 1-6.748-6.747l3.03-3.03z"></svg:path>`,
})
export class TdesignLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLink1Icon],svg[tdesign-link-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.778 4.929a3.5 3.5 0 0 0-4.95 0L12.707 7.05l-1.415-1.414l2.122-2.121a5.5 5.5 0 0 1 7.778 7.778l-3.182 3.182a5.5 5.5 0 0 1-7.778 0l-1.533-1.533l1.415-1.414l1.532 1.533a3.5 3.5 0 0 0 4.95 0l3.182-3.182a3.5 3.5 0 0 0 0-4.95m-7.425 6.01a3.5 3.5 0 0 0-4.95 0l-3.182 3.182a3.5 3.5 0 0 0 4.95 4.95l2.122-2.121l1.414 1.414l-2.122 2.121a5.5 5.5 0 0 1-7.778-7.778L5.99 9.525a5.5 5.5 0 0 1 7.778 0l1.296 1.296l-1.414 1.414z"></svg:path>`,
})
export class TdesignLink1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLinkUnlinkIcon],svg[tdesign-link-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.304 2.89l3.535 3.536L6.425 7.84L2.89 4.304zm5.949-1.709v4.5h-2v-4.5zM1.347 8.09h4.5v2h-4.5zm13.482-2.454L11.785 8.68l-1.414-1.415l3.044-3.044a4.5 4.5 0 0 1 6.364 6.364l-3.044 3.044l-1.415-1.414l3.044-3.044a2.5 2.5 0 1 0-3.535-3.535m-9.192 9.192a2.5 2.5 0 1 0 3.535 3.536l3.044-3.044l1.414 1.414l-3.044 3.044a4.5 4.5 0 0 1-6.364-6.364l3.044-3.044l1.415 1.414zm12.678-1.081h4.5v2h-4.5zm-2.406 4.406v4.5h-2v-4.5zm1.664-1.993l3.536 3.536l-1.415 1.414l-3.535-3.536z"></svg:path>`,
})
export class TdesignLinkUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLiquorIcon],svg[tdesign-liquor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 1.086L22.914 4.5L18 9.414v4L9.414 22a2 2 0 0 1-2.828 0L2 17.414a2 2 0 0 1 0-2.828L10.586 6h4zM5 14.414L3.414 16L8 20.586L9.586 19zm10-.828l1-1v-4L20.086 4.5l-.586-.586L15.414 8h-4l-1 1zL13.586 15L9 10.414L6.414 13L11 17.586m-2.002-4.588h2.004v2.004H8.998z"></svg:path>`,
})
export class TdesignLiquorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLiquorFilledIcon],svg[tdesign-liquor-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 1.086L22.914 4.5L18 9.414v4L16.414 15L9 7.586L10.586 6h4zM7.586 9L15 16.414L12.414 19L5 11.586zm1.412 6.002h2.004v-2.004H8.998zM11 20.414L3.586 13L2 14.586a2 2 0 0 0 0 2.828L6.586 22a2 2 0 0 0 2.828 0z"></svg:path>`,
})
export class TdesignLiquorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignListIcon],svg[tdesign-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19.004h2.004V17H2zM7 19h15v-2H7zm-5-5.996h2.004V11H2zM7 13h15v-2H7zM2 7.004h2.004V5H2zM7 7h15V5H7z"></svg:path>`,
})
export class TdesignListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignListNumberedIcon],svg[tdesign-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6h1v2h-4V6h1V4h-1V2h1a2 2 0 0 1 2 2zM7 20v-2h15v2zm0-7v-2h15v2zm0-7V4h15v2zM1.5 9.25h2.47a1.53 1.53 0 0 1 1.082 2.612l-.888.888H5.5v2h-4v-1.336A2 2 0 0 1 2.086 12l.75-.75H1.5zm0 6.5v2h2V18H2v2h1.5v.25h-2v2h2a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class TdesignListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLoadIcon],svg[tdesign-load-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1h1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12v-1h2v1a9 9 0 1 0 9-9h-1z"></svg:path>`,
})
export class TdesignLoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLoadingIcon],svg[tdesign-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75v-2.437A7.312 7.312 0 1 1 19.313 12h2.437c0-5.384-4.366-9.75-9.75-9.75"></svg:path>`,
})
export class TdesignLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationIcon],svg[tdesign-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class TdesignLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocation1Icon],svg[tdesign-location-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M7 6a5 5 0 1 1 6 4.9V17h-2v-6.1A5 5 0 0 1 7 6m-3.895 5H8v2H4.895l-.778 7h15.766l-.778-7H16v-2h4.895l1.222 11H1.883z"></svg:path>`,
})
export class TdesignLocation1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocation1FilledIcon],svg[tdesign-location-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a5 5 0 1 1 6 4.9V17h-2v-6.1A5 5 0 0 1 7 6m-3.895 5H8v2H4.895l-.778 7h15.766l-.778-7H16v-2h4.895l1.222 11H1.883z"></svg:path>`,
})
export class TdesignLocation1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationEnlargementIcon],svg[tdesign-location-enlargement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM13 6.5v3h3v2h-3v3h-2v-3H8v-2h3v-3z"></svg:path>`,
})
export class TdesignLocationEnlargementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationEnlargementFilledIcon],svg[tdesign-location-enlargement-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.115 21.811a28 28 0 0 1-2.853-2.699C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-2.853 2.7c-.607.499-1.238.957-1.885 1.402a27 27 0 0 1-1.886-1.403M13 9.5v-3h-2v3H8v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class TdesignLocationEnlargementFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationErrorIcon],svg[tdesign-location-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM9.879 6.964L12 9.086l2.121-2.122l1.415 1.415l-2.122 2.121l2.122 2.121l-1.415 1.415L12 11.914l-2.121 2.122l-1.415-1.415l2.122-2.121l-2.122-2.121z"></svg:path>`,
})
export class TdesignLocationErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationErrorFilledIcon],svg[tdesign-location-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.115 21.811a28 28 0 0 1-2.853-2.699C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-2.853 2.7c-.607.499-1.238.957-1.885 1.402a27 27 0 0 1-1.886-1.403m3.3-11.311l2.12-2.121l-1.414-1.415L12 9.086L9.879 6.964L8.464 8.38l2.122 2.121l-2.122 2.121l1.415 1.415L12 11.914l2.121 2.122l1.415-1.415z"></svg:path>`,
})
export class TdesignLocationErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationFilledIcon],svg[tdesign-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M12 13.25a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5"></svg:path>`,
})
export class TdesignLocationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationParkingPlaceIcon],svg[tdesign-location-parking-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM9 7h4.636c.444 0 1.022.16 1.505.574c.52.447.859 1.131.859 2.026s-.34 1.579-.86 2.026a2.37 2.37 0 0 1-1.504.574H11V15H9zm2 3.2h2.636a.4.4 0 0 0 .2-.091a.4.4 0 0 0 .1-.138A.9.9 0 0 0 14 9.6a.9.9 0 0 0-.063-.37a.38.38 0 0 0-.3-.23H11z"></svg:path>`,
})
export class TdesignLocationParkingPlaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationParkingPlaceFilledIcon],svg[tdesign-location-parking-place-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.636 10.2H11V9h2.637a.4.4 0 0 1 .2.09c.035.031.07.073.1.14c.03.066.063.182.063.37a.9.9 0 0 1-.063.37a.38.38 0 0 1-.229.212c-.039.014-.066.017-.072.018"></svg:path><svg:path fill="currentColor" d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M13.636 7c.444 0 1.022.16 1.505.574c.52.447.859 1.131.859 2.026s-.34 1.579-.86 2.026a2.37 2.37 0 0 1-1.504.574H11V15H9V7z"></svg:path>`,
})
export class TdesignLocationParkingPlaceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationReductionIcon],svg[tdesign-location-reduction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM8 9.5h8v2H8z"></svg:path>`,
})
export class TdesignLocationReductionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationReductionFilledIcon],svg[tdesign-location-reduction-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M16 9.5v2H8v-2z"></svg:path>`,
})
export class TdesignLocationReductionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationSettingIcon],svg[tdesign-location-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3a7 7 0 0 1 7 7v1h2v-1a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 3.797 3.44c.39.292.797.562 1.198.839l1.134-1.648c-.381-.262-.767-.517-1.137-.794a26 26 0 0 1-3.516-3.187C5.782 15.624 4 12.862 4 10a7 7 0 0 1 7-7m0 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:path fill="currentColor" d="M19 12.75v1.376c.715.184 1.352.56 1.854 1.072l1.193-.689l1 1.732l-1.192.688a4 4 0 0 1 0 2.142l1.192.688l-1 1.732l-1.193-.689A4 4 0 0 1 19 21.874v1.376h-2v-1.376a4 4 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4 4 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.688A4 4 0 0 1 17 14.127V12.75zm-2.751 4.283a2 2 0 0 0-.25.967c0 .35.091.68.25.967l.036.063a2 2 0 0 0 3.43 0l.036-.063A2 2 0 0 0 20 18c0-.35-.09-.68-.249-.967l-.036-.063a2 2 0 0 0-3.43 0z"></svg:path>`,
})
export class TdesignLocationSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationSettingFilledIcon],svg[tdesign-location-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.115 21.811c.606.5 1.238.957 1.885 1.403a29 29 0 0 0 1.596-1.169a6.75 6.75 0 0 1 7.279-10.532c.08-.495.125-1 .125-1.513a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M11 13.25a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5"></svg:path><svg:path fill="currentColor" d="M19 14.126c.715.184 1.352.56 1.854 1.072l1.192-.689l1 1.732l-1.191.688a4 4 0 0 1 0 2.142l1.191.688l-1 1.732l-1.192-.689A4 4 0 0 1 19 21.874v1.376h-2v-1.376a4 4 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4 4 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.688A4 4 0 0 1 17 14.127V12.75h2zm-2.715 2.844l-.037.063A2 2 0 0 0 16 18a2 2 0 0 0 .248.967l.037.063a2 2 0 0 0 3.43 0l.036-.063A2 2 0 0 0 20 18c0-.35-.09-.68-.249-.967l-.037-.063a2 2 0 0 0-3.429 0"></svg:path>`,
})
export class TdesignLocationSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLockOffIcon],svg[tdesign-lock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a4 4 0 0 0-4 4v3h12.5v12h-17V10H6V7a6 6 0 0 1 11.725-1.8l.3.954l-1.908.6l-.3-.954A4 4 0 0 0 12 3m-6.5 9v8h13v-8zM9 15h6v2H9z" clip-rule="evenodd"></svg:path>`,
})
export class TdesignLockOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLockOffFilledIcon],svg[tdesign-lock-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a4 4 0 0 1 7.817-1.2l.3.954l1.908-.6l-.3-.954A6.001 6.001 0 0 0 6 7v3H3.5v12h17V10H8zm7 8v2H9v-2z"></svg:path>`,
})
export class TdesignLockOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLockOnIcon],svg[tdesign-lock-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 1 4 4v3H8V7a4 4 0 0 1 4-4m6 7V7A6 6 0 0 0 6 7v3H3.5v12h17V10zM5.5 12h13v8h-13zM9 15h6v2H9z"></svg:path>`,
})
export class TdesignLockOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLockOnFilledIcon],svg[tdesign-lock-on-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10H3.5v12h17V10H18V7A6 6 0 0 0 6 7zm2-3a4 4 0 1 1 8 0v3H8zm1 10v-2h6v2z"></svg:path>`,
})
export class TdesignLockOnFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLockTimeIcon],svg[tdesign-lock-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7.5a6.5 6.5 0 0 1 13 0V9h2v2.5h-2V11h-13v9h6v2h-8V9h2zm2 1.5h9V7.5a4.5 4.5 0 1 0-9 0zm11 6a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M13 18.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m-4-4h2.5v2H9zm10.5 1.752v1.834l1.414 1.414l-1.414 1.414l-2-2v-2.662z"></svg:path>`,
})
export class TdesignLockTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLockTimeFilledIcon],svg[tdesign-lock-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.5V7A6 6 0 0 0 6 7v3.5H3.5V22h8.937A7 7 0 0 1 20.5 11.79V10.5zM12 3a4 4 0 0 1 4 4v3.5H8V7a4 4 0 0 1 4-4"></svg:path><svg:path fill="currentColor" d="M13 18.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m7.914 1L19.5 18.086v-1.834h-2v2.662l2 2z"></svg:path>`,
})
export class TdesignLockTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLoginIcon],svg[tdesign-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h9.586l-3.5-3.5L10.5 6.086L16.414 12L10.5 17.914L9.086 16.5l3.5-3.5H3zm11 8.5h5v-15h-5v-2h7v19h-7z"></svg:path>`,
})
export class TdesignLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobeIllustrateIcon],svg[tdesign-logo-adobe-illustrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm4.756 2h2.488l3.6 12h-2.091l-1.183-3.945H8.428L7.244 18H5.153zm.272 6.055h1.943L10 8.815zM15.996 9H18v2.004h-2.004zM18 12v6h-2v-6z"></svg:path>`,
})
export class TdesignLogoAdobeIllustrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobeIllustrateFilledIcon],svg[tdesign-logo-adobe-illustrate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.97 12.055H9.028L10 8.815z"></svg:path><svg:path fill="currentColor" d="M22 2v20H2V2zM11.244 6H8.756L5.152 18h2.092l1.183-3.945h3.143L12.752 18h2.092zM18 9h-2.004v2.004H18zm0 9v-6h-2v6z"></svg:path>`,
})
export class TdesignLogoAdobeIllustrateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobeLightroomIcon],svg[tdesign-logo-adobe-lightroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16v-6.5h-1c-1.015 0-1.99.403-2.707 1.121l-.293.293V18h-2v-7h2v1.331a5.83 5.83 0 0 1 3-.831h1V4zm4 2v10h5v2H6V6z"></svg:path>`,
})
export class TdesignLogoAdobeLightroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobeLightroomFilledIcon],svg[tdesign-logo-adobe-lightroom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM8 6v10h5v2H6V6zm12 7.5h-1c-1.015 0-1.99.403-2.707 1.121l-.293.293V18h-2v-7h2v1.331a5.83 5.83 0 0 1 3-.831h1z"></svg:path>`,
})
export class TdesignLogoAdobeLightroomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobePhotoshopIcon],svg[tdesign-logo-adobe-photoshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13v5H6V6h3.5a3.5 3.5 0 1 1 0 7zm0-5v3h1.5a1.5 1.5 0 0 0 0-3zm5.5 4.453A2.453 2.453 0 0 1 15.953 10H18v2h-2.047a.453.453 0 0 0-.143.883l1.013.337a2.453 2.453 0 0 1-.776 4.78H13.5v-2h2.547a.453.453 0 0 0 .143-.883l-1.013-.337a2.45 2.45 0 0 1-1.677-2.327"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zM4 20V4h16v16z"></svg:path>`,
})
export class TdesignLogoAdobePhotoshopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobePhotoshopFilledIcon],svg[tdesign-logo-adobe-photoshop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8v3h1.5a1.5 1.5 0 0 0 0-3z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zM8 13v5H6V6h3.5a3.5 3.5 0 1 1 0 7zm5.5-.547A2.453 2.453 0 0 1 15.953 10H18v2h-2.047a.453.453 0 0 0-.143.883l1.013.337a2.453 2.453 0 0 1-.776 4.78H13.5v-2h2.547a.453.453 0 0 0 .143-.883l-1.013-.337a2.45 2.45 0 0 1-1.677-2.327"></svg:path>`,
})
export class TdesignLogoAdobePhotoshopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAlipayIcon],svg[tdesign-logo-alipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2h2v2.788h7.002v2H12.5v1.857h5.264l-.198 1.168c-.261 1.536-.978 3.154-1.949 4.656c1.295.447 2.573.92 3.793 1.372l.233.086c1.576.583 3.044 1.122 4.357 1.534v3.828l-.436-.22l-.06-.029a65 65 0 0 0-.84-.415a167 167 0 0 0-2.368-1.132a138 138 0 0 0-6.367-2.805c-1.026 1.156-2.2 2.191-3.428 2.974c-1.321.842-2.768 1.432-4.198 1.506q-.15.008-.303.008c-1.828 0-3.268-.485-4.25-1.342C.758 18.967.315 17.786.4 16.61c.168-2.367 2.373-4.396 5.63-4.304c2.248.063 4.704.624 7.128 1.36c.6-.998 1.073-2.033 1.377-3.022H5.5v-2h5V6.788h-7v-2h7zM5.972 14.306c-2.387-.067-3.5 1.339-3.578 2.447c-.04.561.16 1.128.672 1.574c.522.455 1.445.849 2.934.849c1.73 0 3.733-1.226 5.477-3.206l.153-.178c-2.223-.822-4.174-1.397-5.386-1.476z"></svg:path>`,
})
export class TdesignLogoAlipayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAlipayFilledIcon],svg[tdesign-logo-alipay-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.592 4.993v14.014c0 1.824 1.492 3.304 3.335 3.304h14.147c1.842 0 3.333-1.48 3.333-3.304v-.143c-.061-.026-5.41-2.236-8.127-3.53c-1.834 2.235-4.2 3.591-6.655 3.591c-4.153 0-5.563-3.6-3.597-5.97c.43-.517 1.158-1.01 2.29-1.287c1.771-.43 4.59.27 7.23 1.133a14.3 14.3 0 0 0 1.173-2.84H6.58v-.816h4.197V7.681H5.695v-.817h5.083v-2.09s0-.351.36-.351h2.052v2.44h5.025v.818H13.19v1.464h4.102a16.5 16.5 0 0 1-1.737 4.347q.664.238 1.27.46c.732.268 1.388.507 1.926.686c2.778.92 3.556 1.033 3.657 1.045V4.993c0-1.825-1.492-3.304-3.334-3.304H4.927c-1.843 0-3.335 1.479-3.335 3.304"></svg:path><svg:path fill="currentColor" d="M6.672 12.891q.27-.026.537-.03c1.723-.019 3.364.664 5.269 1.585c-1.478 1.909-3.358 3.101-5.24 3.101c-3.239 0-4.196-2.527-2.596-3.909c.533-.468 1.51-.695 2.03-.747"></svg:path>`,
})
export class TdesignLogoAlipayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAndroidIcon],svg[tdesign-logo-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.372 3.636l2.116 3.702A11.95 11.95 0 0 1 12 6c1.986 0 3.86.483 5.512 1.338l2.116-3.702l1.736.992l-2.158 3.776A11.98 11.98 0 0 1 24 18v2H0v-2c0-3.924 1.884-7.407 4.793-9.596L2.636 4.628zM12 8a9.95 9.95 0 0 0-5.348 1.55A9.99 9.99 0 0 0 2 18h20a9.99 9.99 0 0 0-4.652-8.451A9.95 9.95 0 0 0 12 8m-6 5h2.004v2.004H6zm10 0h2.004v2.004H16z"></svg:path>`,
})
export class TdesignLogoAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAndroidFilledIcon],svg[tdesign-logo-android-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.488 7.338A11.95 11.95 0 0 1 12 6c1.986 0 3.86.483 5.512 1.338l2.116-3.702l1.736.992l-2.158 3.776A11.98 11.98 0 0 1 24 18v2H0v-2c0-3.924 1.884-7.407 4.793-9.596L2.636 4.628l1.736-.992zM8.004 13H6v2.004h2.004zm10 0H16v2.004h2.004z"></svg:path>`,
})
export class TdesignLogoAndroidFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAppleIcon],svg[tdesign-logo-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.862 3.94a3.5 3.5 0 0 1 3.5-3.5h1.05v1.05a3.5 3.5 0 0 1-3.5 3.5h-1.05zm4.452 1.074c.601.04 2.183.187 3.609 1.283c.418.322.82.723 1.176 1.22l.666.93l-1.01.536c-.014.008-.197.11-.443.307c-.603.484-1.43 1.403-1.417 2.805c.014 1.257.578 2.073 1.155 2.598c.508.462 1.01.68 1.106.722q.028.012.007.005l.937.298l-.282.942c-.01.032-.039.127-.09.273a12.5 12.5 0 0 1-1.585 3.024c-.451.631-.982 1.365-1.62 1.934c-.66.588-1.495 1.056-2.558 1.073h-.004h.008h-.004c-.936.021-1.583-.246-2.095-.457l-.024-.01c-.502-.207-.895-.366-1.547-.366c-.708 0-1.132.17-1.662.386l-.026.01c-.475.194-1.071.437-1.894.47l-.01.001c-1.09.034-1.97-.494-2.64-1.093c-.664-.594-1.23-1.357-1.69-1.987l-.002-.003c-1.037-1.431-1.933-3.418-2.316-5.49c-.382-2.065-.274-4.34.87-6.237c1.142-1.894 3.175-3.101 5.407-3.13H8.33h.011h-.005c1.004-.023 1.944.333 2.596.58l.058.023c.27.102.482.182.67.239c.193.057.295.07.34.07c.019 0 .099-.007.28-.062c.176-.053.379-.129.643-.228l.05-.019c.795-.298 1.989-.746 3.341-.647m-.143 1.995c-.884-.066-1.707.23-2.546.544l-.018.007c-.242.09-.503.188-.748.262A3 3 0 0 1 12 7.97c-.331 0-.65-.075-.916-.155c-.262-.08-.537-.183-.785-.277l-.018-.007c-.72-.273-1.323-.488-1.903-.474h-.012c-1.52.019-2.928.842-3.723 2.163v.001c-.805 1.333-.947 3.058-.618 4.84c.329 1.777 1.105 3.486 1.97 4.68c.472.647.922 1.241 1.405 1.674c.477.426.874.594 1.24.584c.454-.019.771-.142 1.243-.334l.012-.005c.574-.234 1.296-.529 2.404-.529c1.057 0 1.752.287 2.297.512l.013.005c.494.204.812.328 1.314.317h.008c.442-.007.836-.189 1.261-.567c.446-.398.855-.948 1.324-1.605l.001-.002a10.5 10.5 0 0 0 1.092-1.936a6 6 0 0 1-.904-.682a5.43 5.43 0 0 1-1.81-4.057v-.002c-.018-2.05 1.078-3.421 1.9-4.158l-.091-.073c-.943-.725-2.028-.841-2.524-.873z"></svg:path>`,
})
export class TdesignLogoAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAppleFilledIcon],svg[tdesign-logo-apple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.718 5.492q-.862 0-1.603.264t-1.35.523t-1.057.258q-.47 0-1.045-.247a24 24 0 0 0-1.235-.488A4.1 4.1 0 0 0 8.02 5.56q-1.413 0-2.722.77q-1.31.768-2.149 2.274q-.838 1.505-.838 3.711q0 1.379.321 2.757q.322 1.38.862 2.608q.54 1.23 1.195 2.172q.85 1.182 1.66 2.033q.81.85 1.878.85q.7 0 1.218-.23q.517-.23 1.097-.465t1.454-.235q.666 0 1.114.137q.448.139.821.316q.375.179.787.316q.414.138 1 .138q.77 0 1.384-.408q.616-.407 1.138-1.05q.522-.645 1.017-1.345q.54-.793.878-1.522a13 13 0 0 0 .672-1.706q-.034-.012-.5-.259t-1.056-.787q-.593-.54-1.034-1.413q-.443-.873-.443-2.137q0-1.103.35-1.901q.351-.8.822-1.321q.471-.523.845-.799q.373-.276.43-.31q-.574-.827-1.252-1.287a5.2 5.2 0 0 0-1.332-.666a6 6 0 0 0-1.167-.259a8 8 0 0 0-.752-.051m-.804-1.862q.529-.631.861-1.464a4.6 4.6 0 0 0 .333-1.718q0-.253-.034-.448q-.861.034-1.798.517a5 5 0 0 0-1.545 1.206a5.5 5.5 0 0 0-.873 1.379a4 4 0 0 0-.38 1.7a1.7 1.7 0 0 0 .046.414q.15.034.31.034q.771 0 1.638-.46a4.7 4.7 0 0 0 1.442-1.16"></svg:path>`,
})
export class TdesignLogoAppleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoBehanceIcon],svg[tdesign-logo-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.11 5q1.077 0 1.966.19q.888.19 1.523.624q.634.435.983 1.153q.35.72.35 1.777q0 1.142-.519 1.903q-.518.761-1.533 1.248q1.395.402 2.083 1.406t.688 2.422q0 1.141-.445 1.978a3.85 3.85 0 0 1-1.194 1.363q-.751.53-1.714.783a7.7 7.7 0 0 1-1.977.254H.003V5zm-.424 6.113q.888 0 1.46-.424q.57-.422.57-1.374q0-.53-.19-.867a1.4 1.4 0 0 0-.507-.53a2.2 2.2 0 0 0-.73-.264a5 5 0 0 0-.857-.074H3.323v3.533zm.19 6.408q.487 0 .931-.096q.444-.095.783-.317q.338-.222.539-.603q.2-.38.2-.973q0-1.162-.655-1.66q-.655-.497-1.734-.497H3.323v4.145zm9.953-.318q.677.657 1.946.656q.91 0 1.565-.455q.655-.453.804-.962h2.644q-.635 1.968-1.946 2.813q-1.312.846-3.173.846q-1.29 0-2.326-.413a4.8 4.8 0 0 1-1.756-1.173a5.3 5.3 0 0 1-1.11-1.819q-.391-1.057-.391-2.327q0-1.226.402-2.283a5.4 5.4 0 0 1 1.142-1.83a5.4 5.4 0 0 1 1.766-1.216q1.025-.444 2.273-.444q1.395 0 2.433.54q1.035.539 1.702 1.448q.666.91.963 2.072a7.7 7.7 0 0 1 .211 2.433H16.09q.064 1.459.74 2.114m3.395-5.752q-.54-.592-1.64-.592q-.719 0-1.194.243a2.2 2.2 0 0 0-1.163 1.364a3.4 3.4 0 0 0-.138.72h4.886q-.212-1.143-.751-1.735m-4.648-5.684h6.104v1.692h-6.104z"></svg:path>`,
})
export class TdesignLogoBehanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoBehanceFilledIcon],svg[tdesign-logo-behance-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.456 10.772q-.378.278-.964.278l-2.219.002V8.72h2.051q.286 0 .566.049q.272.048.482.174q.21.125.335.35q.125.223.126.571q0 .628-.377.907m-.224 4.447a3 3 0 0 1-.614.063H6.273v-2.736H8.66q.713 0 1.145.328t.433 1.096q0 .39-.133.642q-.132.25-.356.398a1.5 1.5 0 0 1-.517.21m7.115-4.336q.726 0 1.083.39q.355.392.496 1.145h-3.225q.014-.21.09-.474a1.45 1.45 0 0 1 .768-.9q.313-.16.788-.16"></svg:path><svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M10.07 7.141a6.2 6.2 0 0 0-1.299-.125h-4.69v9.97h4.831c.44 0 .88-.056 1.305-.168q.635-.167 1.131-.517q.496-.348.79-.9q.292-.552.292-1.306q0-.936-.454-1.599q-.453-.662-1.375-.928q.67-.321 1.012-.824t.342-1.256q0-.699-.23-1.173a1.9 1.9 0 0 0-.65-.762a2.8 2.8 0 0 0-1.005-.412m6.403 8.363q-.838 0-1.285-.433t-.487-1.393h5.208a5.1 5.1 0 0 0-.14-1.606a3.9 3.9 0 0 0-.636-1.368a3.2 3.2 0 0 0-1.123-.957q-.685-.356-1.606-.356q-.825 0-1.502.293t-1.166.802t-.754 1.208a4.2 4.2 0 0 0-.265 1.507q0 .837.258 1.536q.258.697.733 1.2t1.16.775t1.535.272q1.229 0 2.094-.559q.866-.557 1.285-1.856h-1.745q-.098.335-.53.635q-.434.3-1.034.3m1.918-7.982h-4.03v1.117h4.03z"></svg:path>`,
})
export class TdesignLogoBehanceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoChromeIcon],svg[tdesign-logo-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 1c6.075 0 11 4.925 11 11s-4.925 11-11 11s-11-4.924-11-11s4.925-11 11-11m-6.84 5.15L7.384 10l.212-.367A5.01 5.01 0 0 1 12.114 7h7.371a8.99 8.99 0 0 0-7.484-4a8.98 8.98 0 0 0-6.84 3.15M3.93 8.016A9 9 0 0 0 3.001 12c0 4.409 3.17 8.077 7.356 8.85L12.58 17h-.496a5 5 0 0 1-4.492-2.64zm8.662 12.965a9 9 0 0 0 7.898-11.98h-4.444l.24.415a5.01 5.01 0 0 1 0 5.169zm-3.186-7.48A3 3 0 0 0 12 15h.043a3 3 0 0 0 1.459-.403a3 3 0 0 0 1.069-1.047l.029-.05q.078-.136.14-.276c.172-.385.262-.803.263-1.226A3 3 0 0 0 14.6 10.5l-.03-.051a3 3 0 0 0-1.068-1.047c-.45-.26-.941-.39-1.428-.402H12q-.177 0-.35.02a3 3 0 0 0-2.246 1.48l-.054.094A3 3 0 0 0 9 12.001c0 .505.125.981.346 1.399z"></svg:path>`,
})
export class TdesignLogoChromeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoChromeFilledIcon],svg[tdesign-logo-chrome-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11c0-1.131-.17-2.223-.488-3.25h-7.048A4.73 4.73 0 0 1 16.75 12a4.73 4.73 0 0 1-.636 2.376l-4.96 8.592Q11.571 23 12 23"></svg:path><svg:path fill="currentColor" d="m9.56 22.728l3.523-6.102q-.523.123-1.083.124a4.75 4.75 0 0 1-4.114-2.374L2.925 5.782A10.95 10.95 0 0 0 1 12c0 5.236 3.659 9.618 8.56 10.728"></svg:path><svg:path fill="currentColor" d="M3.93 4.524A10.97 10.97 0 0 1 12 1a11 11 0 0 1 9.924 6.25H12a4.75 4.75 0 0 0-4.548 3.374z"></svg:path><svg:path fill="currentColor" d="m9.185 13.625l-.004-.006a3.25 3.25 0 1 1 .003.005"></svg:path>`,
})
export class TdesignLogoChromeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoCinema4dIcon],svg[tdesign-logo-cinema4d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.747 17.95l.02.041l.036.057q.263.4.567.774A10.98 10.98 0 0 0 12 23c6.075 0 11-4.925 11-11c0-2.479-.82-4.766-2.203-6.605a10.4 10.4 0 0 0-3.851-3.223A10.95 10.95 0 0 0 12 1C5.925 1 1 5.925 1 12c0 2.193.641 4.235 1.747 5.95m.674-8.678a9.004 9.004 0 0 1 11.609-5.75a.52.52 0 0 1-.396.361l-.007.002c-.988.269-1.959.52-2.93.705h-.006c-2.108.414-4.113 1.16-5.897 2.524A10 10 0 0 0 3.42 9.272m1.523 8.316a9 9 0 0 1-.447-.616c-.918-1.985-.878-3.615-.383-4.92c.514-1.357 1.564-2.473 2.806-3.285l.033-.02l.03-.024q.273-.21.555-.398c-.747 1.951-.572 4.203.709 6.132c1.527 2.299 4.242 3.396 6.836 3.051c-1.498 1.664-3.892 2.736-5.97 2.498c-1.55-.177-3.08-1.094-4.169-2.418M20.35 8.635a9.004 9.004 0 0 1-6.065 12.073c1.11-.661 2.087-1.528 2.814-2.51h.001c1.315-1.78 1.997-3.794 2.313-5.894c.142-.941.312-1.877.502-2.817q.106-.518.435-.852m-3.521-4.231a9 9 0 0 1 2.386 2.215q.084.117.165.236a2 2 0 0 0-.25.185l-.007.006l-.007.005a3.62 3.62 0 0 0-1.16 2.037v.001a59 59 0 0 0-.52 2.918c-.154 1.02-.4 1.985-.766 2.888c-2.267 1.32-5.297.653-6.757-1.545c-1.474-2.218-.898-5.05 1.297-6.603q.424-.108.863-.193c1.05-.2 2.08-.468 3.075-.738a2.5 2.5 0 0 0 1.68-1.412"></svg:path>`,
})
export class TdesignLogoCinema4dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoCinema4dFilledIcon],svg[tdesign-logo-cinema4d-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.156 5.902a11.1 11.1 0 0 0-3.01-3.026c-.577.489-1.249.86-1.775 1.111c-.827.396-1.696.602-2.485.76l-1.194.238l-.466.466a4.5 4.5 0 1 0 6.364 6.364l.463-.463l.24-1.199c.158-.788.364-1.658.76-2.485c.25-.523.618-1.19 1.103-1.766"></svg:path><svg:path fill="currentColor" d="M16.182 1.823c-.22.132-.45.253-.674.36c-.593.284-1.26.452-2.014.602l-3.634.727a8.676 8.676 0 0 0-4.433 14.642l.458.459a8.676 8.676 0 0 0 14.642-4.434l.727-3.633c.151-.755.319-1.422.602-2.014c.104-.216.22-.437.347-.65A11 11 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1c1.48 0 2.892.292 4.182.823"></svg:path><svg:path fill="currentColor" d="M6.841 7.3a6.7 6.7 0 0 1 2.803-1.675a6.503 6.503 0 0 0 8.77 8.774a6.675 6.675 0 0 1-11.115 2.8l-.458-.459a6.676 6.676 0 0 1 0-9.44"></svg:path>`,
})
export class TdesignLogoCinema4dFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoCnbIcon],svg[tdesign-logo-cnb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.814 2.925c-.854-.062-1.538.009-2.071.13L14.533 6l.758-2.225a5.1 5.1 0 0 0-2.477-.849m1.411 4.61L8.658 3.212a.505.505 0 0 1 .035-.825c.684-.434 2.037-1.019 4.222-.86a6.46 6.46 0 0 1 3.766 1.55c.153.134.21.348.144.541l-1.189 3.494a.905.905 0 0 1-1.41.423M3.1 16.448a.63.63 0 0 0-.257.698c.212.76.843 2.341 2.634 3.78c1.79 1.44 3.909 1.594 4.814 1.572a.63.63 0 0 0 .588-.443l3.57-11.282c.257-.814-.657-1.498-1.366-1.022zm6.616 4.635c-.874-.06-2.217-.33-3.361-1.25c-1.148-.922-1.71-1.895-1.982-2.55l8.308-5.574zM3.257 8.816a5.9 5.9 0 0 1 2.286-2.83l5.85 2.317l-8.465 3.301c-.064-.84-.025-1.868.329-2.788m2.452-4.273a.63.63 0 0 0-.537.032a7.25 7.25 0 0 0-3.224 3.739c-.674 1.751-.437 3.689-.252 4.636c.061.31.388.488.683.374l10.708-4.176c.765-.299.768-1.378.005-1.68zm15.885 8.084c.31.21.733.025.787-.345c.142-.98.265-2.684-.303-3.97c-.756-1.712-2.04-2.769-2.65-3.198a.51.51 0 0 0-.629.035l-2.702 2.394a.903.903 0 0 0 .092 1.423zm-.799-3.748c.214.483.294 1.101.302 1.718l-3.589-2.431l1.66-1.471m0 0c.528.466 1.191 1.196 1.628 2.184zm-3.626 14.032l.778-8.84l3.708 4.571a6.3 6.3 0 0 1-1.688 2.822c-.843.804-1.911 1.227-2.798 1.447m-1.5 1.039v.083l.001.007a.51.51 0 0 0 .56.458c1.025-.11 3.129-.516 4.705-2.02a7.7 7.7 0 0 0 2.178-3.893a.63.63 0 0 0-.128-.53l-4.725-5.824c-.511-.63-1.531-.319-1.603.49z"></svg:path>`,
})
export class TdesignLogoCnbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoCnbFilledIcon],svg[tdesign-logo-cnb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.293 2.807a.55.55 0 0 0-.158-.595A7.08 7.08 0 0 0 13.003.51c-2.397-.174-3.882.468-4.632.945a.555.555 0 0 0-.039.906l6.109 4.748a.992.992 0 0 0 1.547-.464zM2.235 16.9a.7.7 0 0 0-.282.766c.233.835.925 2.572 2.89 4.152c1.964 1.58 4.288 1.751 5.281 1.727a.69.69 0 0 0 .646-.486l3.915-12.393c.283-.895-.72-1.645-1.498-1.122zM5.097 3.822a.7.7 0 0 0-.589.036c-.724.394-2.58 1.61-3.538 4.106c-.738 1.924-.478 4.052-.275 5.093c.067.34.426.536.748.41L13.192 8.88c.839-.327.842-1.513.005-1.845zm17.428 8.881c.34.23.804.027.863-.38c.156-1.075.29-2.947-.332-4.359c-.83-1.882-2.238-3.042-2.907-3.514a.56.56 0 0 0-.69.039l-2.965 2.63a.992.992 0 0 0 .101 1.562zM14.24 22.74c-.03.35.267.64.616.602c1.123-.12 3.432-.566 5.16-2.218a8.47 8.47 0 0 0 2.391-4.276a.7.7 0 0 0-.14-.582L17.083 9.87c-.562-.693-1.681-.351-1.759.537z"></svg:path>`,
})
export class TdesignLogoCnbFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoCodepenIcon],svg[tdesign-logo-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .807l11 7.15v8.086l-11 7.15l-11-7.15V7.957zm-9 9.614v3.158L5.256 12zm.788 5.048L11 20.157V16.02l-4-2.8zM8.744 12L12 14.28L15.256 12L12 9.72zM13 7.98l4 2.8l3.212-2.248L13 3.842zm-2-4.137L3.788 8.532L7 10.779l4-2.8zm10 6.579L18.744 12L21 13.58zm-.788 5.048L17 13.221l-4 2.8v4.136z"></svg:path>`,
})
export class TdesignLogoCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoCodesandboxIcon],svg[tdesign-logo-codesandbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.34 6.423L12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578zM12 3.155L9.67 4.5L12 5.845L14.33 4.5zm4.33 2.5L12 8.155l-4.33-2.5L5.34 7L12 10.845L18.66 7zm3.33 3.077L13 12.577v7.69l2.34-1.35v-4.994l4.32-2.495zm0 5.006l-2.32 1.34v2.684l2.32-1.34zm-15.32-2.31l4.32 2.495v4.994l2.34 1.35v-7.69L4.34 8.732zm0 2.31v2.685l2.32 1.34v-2.686z"></svg:path>`,
})
export class TdesignLogoCodesandboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoDribbbleIcon],svg[tdesign-logo-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.908 3.982a9.02 9.02 0 0 0-4.679 5.99a26.9 26.9 0 0 0 7.882-1.548a34 34 0 0 0-3.203-4.442M3 11.983V12a8.96 8.96 0 0 0 2.005 5.664a16.04 16.04 0 0 1 7.909-5.838q-.381-.831-.806-1.637A28.9 28.9 0 0 1 3 11.983m3.45 7.103A8.96 8.96 0 0 0 12 21a9 9 0 0 0 3.522-.715a33.7 33.7 0 0 0-1.825-6.611a14.04 14.04 0 0 0-7.247 5.412m9.206-5.89a36 36 0 0 1 1.708 6.032a9 9 0 0 0 3.543-5.926a14.1 14.1 0 0 0-5.25-.107m5.315-1.92a8.95 8.95 0 0 0-1.893-4.836a29 29 0 0 1-5.113 2.984q.48.925.909 1.881a16.2 16.2 0 0 1 6.096-.028m-7.98-3.606A27 27 0 0 0 17.656 5A8.96 8.96 0 0 0 12 3c-.724 0-1.428.085-2.101.246A36 36 0 0 1 12.99 7.67M1.053 10.9a11.01 11.01 0 0 1 6.733-9.065A11 11 0 0 1 12 1c3.121 0 5.94 1.301 7.942 3.389a10.97 10.97 0 0 1 3.043 8.199a11 11 0 0 1-5.895 9.166A10.96 10.96 0 0 1 12 23c-2.921 0-5.578-1.14-7.547-2.997A10.97 10.97 0 0 1 1.054 10.9"></svg:path>`,
})
export class TdesignLogoDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoDribbbleFilledIcon],svg[tdesign-logo-dribbble-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.004 11.983v.02a10.96 10.96 0 0 0 2.893 7.434a16.05 16.05 0 0 1 9.084-7.634a32 32 0 0 0-.817-1.634a28.9 28.9 0 0 1-11.16 1.814"></svg:path><svg:path fill="currentColor" d="M1.188 9.988Q1.593 10 2 10c3.211 0 6.292-.56 9.149-1.59A32.6 32.6 0 0 0 6.461 2.5a11 11 0 0 1 1.929-.89a34.6 34.6 0 0 1 4.64 6.042a27 27 0 0 0 6.246-3.902q.755.665 1.377 1.456a29 29 0 0 1-6.633 4.193q.492.93.927 1.892a16.16 16.16 0 0 1 8.055.507l.002.205q-.001.951-.157 1.86a14.1 14.1 0 0 0-7.111-.68a34.3 34.3 0 0 1 2.02 8.197a10.99 10.99 0 0 0 5.248-9.377c0-6.076-4.925-11-11-11A10.95 10.95 0 0 0 6.46 2.498a11 11 0 0 0-5.273 7.49"></svg:path><svg:path fill="currentColor" d="M15.845 22.313a32.3 32.3 0 0 0-2.073-8.663a14.04 14.04 0 0 0-8.34 7.174a10.95 10.95 0 0 0 6.572 2.178c1.351 0 2.646-.243 3.841-.689"></svg:path>`,
})
export class TdesignLogoDribbbleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFacebookIcon],svg[tdesign-logo-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a6 6 0 0 1 6-6h5v6.5h-4v2h4.247L17.802 15H15v9H8v-9H4.25V8.5H8zm6-4a4 4 0 0 0-4 4v4.5H6.25V13H10v9h3v-9h3.198l.555-2.5H13v-4a2 2 0 0 1 2-2h2V2z"></svg:path>`,
})
export class TdesignLogoFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFacebookFilledIcon],svg[tdesign-logo-facebook-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6a6 6 0 0 1 6-6H19v6h-3a1.5 1.5 0 0 0-1.5 1.5V9h4.78l-1.5 6H14.5v9h-6v-9H4.25V9H8.5z"></svg:path>`,
})
export class TdesignLogoFacebookFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFigmaIcon],svg[tdesign-logo-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5A4.5 4.5 0 0 1 8.5.5h7a4.5 4.5 0 0 1 2.829 8A4.5 4.5 0 0 1 13 15.742V19a4.5 4.5 0 1 1-7.329-3.5A4.5 4.5 0 0 1 4 12c0-1.414.652-2.675 1.671-3.5A4.5 4.5 0 0 1 4 5m4.5 2.5H11v-5H8.5a2.5 2.5 0 0 0 0 5m4.5-5v5h2.5a2.5 2.5 0 0 0 0-5zm-2 7H8.5a2.5 2.5 0 0 0 0 5H11zm0 7H8.5A2.5 2.5 0 1 0 11 19zm2-4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path>`,
})
export class TdesignLogoFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFigmaFilledIcon],svg[tdesign-logo-figma-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.166.5a3.833 3.833 0 1 0 0 7.667H12V.5z"></svg:path><svg:path fill="currentColor" d="M8.166 8.167a3.833 3.833 0 0 0-.049 7.666c-2.091.009-3.784 1.74-3.784 3.833c0 2.1 1.735 3.834 3.833 3.834c2.099 0 3.834-1.701 3.834-3.8V8.167zm11.501-3.834A3.833 3.833 0 0 0 15.834.5H12v7.667h3.834a3.833 3.833 0 0 0 3.833-3.834"></svg:path><svg:path fill="currentColor" d="M19.667 12A3.834 3.834 0 1 0 12 12a3.834 3.834 0 0 0 7.667 0"></svg:path>`,
})
export class TdesignLogoFigmaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFramerIcon],svg[tdesign-logo-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.086 1H19.5v8.5h-5.086l6.5 6.5H13v7.914l-8.5-8.5V7.5h5.086zm9.328 6.5H17.5V3H7.914zm-.828 2H6.5v5.086l4.5 4.5V14h5.086z"></svg:path>`,
})
export class TdesignLogoFramerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFramerFilledIcon],svg[tdesign-logo-framer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.085 1H19.5v7.62h-5.966l7.38 7.38H13v7.913l-7.612-7.611l-.005-7.92l5.088.004z"></svg:path>`,
})
export class TdesignLogoFramerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoGithubIcon],svg[tdesign-logo-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.307 3.047c-.328 1.282-.005 2.175.069 2.358l.233.582l-.422.463C4.447 7.262 4 8.278 4 9.572c0 2.491.747 3.833 1.686 4.62c.987.829 2.355 1.19 3.869 1.36l2.276.255l-1.735 1.495c-.242.21-.606.751-.606 1.856v.342h.01v2h-.002l.005.732v.002l.001.187l.004.579v1h-2v-1l-.004-.561l-.001-.193v-.002l-.005-.744h-.556a4 4 0 0 1-3.124-1.501l-.55-.688a3 3 0 0 0-1.001-.81l-1.109-.554l.895-1.789l1.108.555A5 5 0 0 1 4.83 18.06l.55.688a2 2 0 0 0 1.562.751h.548v-.342c0-.708.11-1.334.303-1.869c-1.186-.262-2.387-.72-3.392-1.564C2.903 14.469 2 12.5 2 9.572c0-1.586.495-2.925 1.33-4.016c-.2-.801-.348-2.197.33-3.893l.173-.433l.444-.146h.002l.002-.001l.004-.001l.008-.003l.018-.005a1 1 0 0 1 .15-.036q.123-.024.304-.034c.243-.013.561.004.957.087c.718.15 1.684.515 2.928 1.31a14.2 14.2 0 0 1 6.7 0c1.244-.795 2.21-1.16 2.928-1.31c.395-.083.713-.1.957-.087a2.3 2.3 0 0 1 .411.058l.042.012l.019.005l.008.003l.004.001h.002l.002.001l.443.146l.174.433c.678 1.696.53 3.092.33 3.893c.834 1.09 1.33 2.43 1.33 4.016c0 2.929-.903 4.897-2.4 6.153c-1.006.843-2.208 1.302-3.393 1.564c.194.535.303 1.161.303 1.869c0 1.26-.008 2.357-.013 3.087l-.002.194l-.003.561v1h-2v-1l.003-.58l.002-.188c.005-.73.013-1.821.013-3.074c0-1.105-.364-1.646-.606-1.856l-1.735-1.495l2.276-.256c1.514-.17 2.881-.53 3.869-1.359c.939-.787 1.686-2.129 1.686-4.62c0-1.294-.448-2.31-1.187-3.122l-.422-.463l.233-.582c.073-.183.397-1.076.069-2.358l-.006.001c-.477.1-1.328.398-2.597 1.26l-.385.263l-.448-.126a12.13 12.13 0 0 0-6.514 0l-.448.126l-.385-.262c-1.27-.863-2.12-1.16-2.597-1.26z"></svg:path>`,
})
export class TdesignLogoGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoGithubFilledIcon],svg[tdesign-logo-github-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .999c-6.074 0-11 5.05-11 11.278c0 4.983 3.152 9.21 7.523 10.702c.55.104.727-.246.727-.543v-2.1c-3.06.683-3.697-1.33-3.697-1.33c-.5-1.304-1.222-1.65-1.222-1.65c-.998-.7.076-.686.076-.686c1.105.08 1.686 1.163 1.686 1.163c.98 1.724 2.573 1.226 3.201.937c.098-.728.383-1.226.698-1.508c-2.442-.286-5.01-1.253-5.01-5.574c0-1.232.429-2.237 1.132-3.027c-.114-.285-.49-1.432.107-2.985c0 0 .924-.303 3.026 1.156c.877-.25 1.818-.375 2.753-.38c.935.005 1.876.13 2.755.38c2.1-1.459 3.023-1.156 3.023-1.156c.598 1.554.222 2.701.108 2.985c.706.79 1.132 1.796 1.132 3.027c0 4.332-2.573 5.286-5.022 5.565c.394.35.754 1.036.754 2.088v3.095c0 .3.176.652.734.542C19.852 21.484 23 17.258 23 12.277C23 6.048 18.075.999 12 .999"></svg:path>`,
})
export class TdesignLogoGithubFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoGitlabIcon],svg[tdesign-logo-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.78 1h1.936l2.5 7.333h5.568L17.284 1h1.937l4.454 13.362L12 23.257L.325 14.362zm.978 3.389l-3.083 9.249L12 20.743l9.325-7.105l-3.083-9.25l-2.026 5.945H7.784z"></svg:path>`,
})
export class TdesignLogoGitlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoGitlabFilledIcon],svg[tdesign-logo-gitlab-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.78 1h1.936l2.5 7.333h5.568L17.284 1h1.937l4.454 13.362L12 23.257L.325 14.362z"></svg:path>`,
})
export class TdesignLogoGitlabFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoIeIcon],svg[tdesign-logo-ie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.427 6.194c-.672.423-1.359.907-2.048 1.45a4.6 4.6 0 0 1 2.088.89h-3.164a29 29 0 0 0-2.076 2h8.505L17.35 9.25c-.387-1.303-1.492-2.408-2.924-3.056"></svg:path><svg:path fill="currentColor" d="M8.325 22.28c1.143.419 2.377.647 3.664.647c3.48 0 6.582-1.67 8.524-4.26c.276-.36.512-.727.73-1.106c.112-.186.209-.369.3-.553l.724-1.447h-7.314l-.265.197a4.5 4.5 0 0 1-2.688.876c-1.077 0-1.909-.366-2.53-.951a4.2 4.2 0 0 1-.937-1.344l11.187-.105h2.927v-1.966q0-1.093-.213-2.141v-.002a11 11 0 0 0-.352-1.294c.516-1.248.823-2.46.846-3.555c.023-1.168-.28-2.286-1.1-3.105c-.778-.779-1.832-1.09-2.937-1.096c-1.1-.006-2.32.284-3.573.786q-.191.078-.385.16a10.7 10.7 0 0 0-2.944-.411C6.103 1.61 1.33 6.382 1.33 12.268c0 1.103.168 2.167.479 3.168c-.472 1.212-.743 2.39-.736 3.455c.008 1.105.319 2.158 1.096 2.937c.816.822 1.936 1.124 3.102 1.1c.948-.02 1.984-.252 3.054-.648M8.8 8.803c2.45-2.445 5.058-4.201 7.262-5.084c1.104-.442 2.06-.647 2.817-.643c.752.005 1.236.21 1.535.51c.319.318.53.837.514 1.65a6 6 0 0 1-.125 1.039a10.7 10.7 0 0 0-1.81-2.039a9.6 9.6 0 0 0-1.86.554q-.23.09-.463.195a8.68 8.68 0 0 1 3.804 5.542c.113.555.171 1.12.173 1.708h-.931l-12.055.114a24 24 0 0 0-1.314 1.828c.333 1.139.912 2.172 1.751 2.963c1.002.944 2.328 1.495 3.902 1.495a6.5 6.5 0 0 0 3.598-1.073h3.244a8.63 8.63 0 0 1-6.853 3.366a8.65 8.65 0 0 1-7.19-3.834l-.015.035c-.359.9-.56 1.7-.62 2.376c.473.512.996.978 1.561 1.389q-.258.03-.495.035c-.815.017-1.33-.196-1.642-.51l-.003-.003c-.3-.3-.507-.785-.512-1.537c-.005-.76.2-1.716.64-2.82c.882-2.205 2.638-4.812 5.087-7.256m-5.468 3.634l-.002-.168a8.66 8.66 0 0 1 8.68-8.658c-1.548 1.005-3.124 2.28-4.623 3.776c-1.638 1.635-3.012 3.365-4.055 5.05"></svg:path>`,
})
export class TdesignLogoIeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoIeFilledIcon],svg[tdesign-logo-ie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.13 22.257l-.59.231c-1.323.57-2.614.911-3.772.935c-1.166.024-2.286-.278-3.102-1.1c-.777-.779-1.088-1.832-1.096-2.937c-.007-1.1.282-2.322.784-3.576c1.004-2.512 2.935-5.34 5.53-7.93c2.594-2.587 5.421-4.518 7.931-5.524c1.253-.502 2.474-.792 3.573-.786c1.105.007 2.16.317 2.938 1.096c.82.82 1.122 1.937 1.099 3.104c-.024 1.162-.369 2.456-.942 3.784l-.004.009l-.464 1.047q.133.813.133 1.658v1.466h-2.432l-11.901.112c.273.886.719 1.642 1.313 2.2c.716.676 1.671 1.088 2.872 1.088a5 5 0 0 0 2.986-.975l.133-.098h6.34l-.362.724a8 8 0 0 1-.284.523a10 10 0 0 1-.698 1.058a10.13 10.13 0 0 1-8.125 4.06q-.955 0-1.86-.169m2.81-16.032a27.6 27.6 0 0 0-3.643 3.071q-.368.367-.715.739h8.48l-.19-.643c-.44-1.486-2.003-2.749-3.932-3.167m-9.23 11.93a5.7 5.7 0 0 0-.14 1.217c.005.753.212 1.238.512 1.538l.003.003c.311.314.827.527 1.643.51c.423-.008.903-.08 1.43-.216a10.2 10.2 0 0 1-3.449-3.053M21.055 7.68c.238-.737.358-1.393.37-1.951c.016-.813-.196-1.332-.514-1.65c-.3-.3-.784-.506-1.535-.51c-.495-.003-1.073.083-1.722.266a10.2 10.2 0 0 1 3.401 3.845M6.82 6.817C4.704 8.93 3.01 11.21 1.89 13.37q-.059-.544-.059-1.102C1.831 6.658 6.38 2.11 11.99 2.11q.459 0 .907.04c-2.014 1.115-4.115 2.71-6.076 4.667"></svg:path>`,
})
export class TdesignLogoIeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoInstagramIcon],svg[tdesign-logo-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.95 1h.1c1.827 0 3.266 0 4.42.105c1.178.106 2.156.328 3.03.833A7 7 0 0 1 22.062 4.5c.505.874.727 1.852.833 3.03C23 8.684 23 10.123 23 11.95v.1c0 1.827 0 3.266-.105 4.42c-.106 1.178-.328 2.156-.833 3.03a7 7 0 0 1-2.562 2.562c-.874.505-1.852.727-3.03.833c-1.154.105-2.593.105-4.42.105h-.1c-1.827 0-3.266 0-4.42-.105c-1.178-.106-2.156-.328-3.03-.833A7 7 0 0 1 1.938 19.5c-.505-.874-.727-1.852-.833-3.03C1 15.316 1 13.877 1 12.05v-.1c0-1.827 0-3.266.105-4.42c.106-1.178.328-2.156.833-3.03A7 7 0 0 1 4.5 1.938c.874-.505 1.852-.727 3.03-.833C8.684 1 10.123 1 11.95 1M7.71 3.096c-1.039.095-1.691.274-2.21.574A5 5 0 0 0 3.67 5.5c-.3.519-.48 1.171-.574 2.21C3.001 8.764 3 10.112 3 12s.001 3.236.096 4.29c.095 1.039.274 1.691.574 2.21a5 5 0 0 0 1.83 1.83c.519.3 1.171.48 2.21.574c1.054.095 2.402.096 4.29.096s3.236-.001 4.29-.096c1.039-.095 1.691-.274 2.21-.574a5 5 0 0 0 1.83-1.83c.3-.519.48-1.171.574-2.21c.095-1.053.096-2.402.096-4.29s-.001-3.236-.096-4.29c-.095-1.039-.274-1.691-.574-2.21a5 5 0 0 0-1.83-1.83c-.519-.3-1.171-.48-2.21-.574C15.237 3.001 13.888 3 12 3s-3.236.001-4.29.096m9.04 3.156c0-.552.45-1.002 1.002-1.002s1.002.45 1.002 1.002s-.45 1.002-1.002 1.002s-1.002-.45-1.002-1.002M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 12a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"></svg:path>`,
})
export class TdesignLogoInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoInstagramFilledIcon],svg[tdesign-logo-instagram-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:path fill="currentColor" d="M12.05 1c1.827 0 3.266 0 4.42.105c1.178.106 2.156.328 3.03.833A7 7 0 0 1 22.062 4.5c.505.874.727 1.852.833 3.03C23 8.684 23 10.123 23 11.95v.1c0 1.827 0 3.266-.105 4.42c-.106 1.178-.328 2.156-.833 3.03a7 7 0 0 1-2.562 2.562c-.874.505-1.852.727-3.03.833c-1.154.105-2.593.105-4.42.105h-.1c-1.827 0-3.266 0-4.42-.105c-1.178-.106-2.156-.328-3.03-.833A7 7 0 0 1 1.938 19.5c-.505-.874-.727-1.852-.833-3.03C1 15.316 1 13.877 1 12.05v-.1c0-1.827 0-3.266.105-4.42c.106-1.178.328-2.156.833-3.03A7 7 0 0 1 4.5 1.938c.874-.505 1.852-.727 3.03-.833C8.684 1 10.123 1 11.95 1zm6.2 3.75a1 1 0 0 0-1 1v.004a1 1 0 0 0 1 1h.004a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1zM12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path>`,
})
export class TdesignLogoInstagramFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoMiniprogramIcon],svg[tdesign-logo-miniprogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18a9 9 0 0 0 0-18m2.5 5A1.5 1.5 0 0 0 13 9.5v5a3.5 3.5 0 1 1-4.199-3.43l.98-.199l.398 1.96l-.98.199A1.5 1.5 0 1 0 11 14.5v-5a3.5 3.5 0 1 1 4.199 3.43l-.98.199l-.398-1.96l.98-.199A1.5 1.5 0 0 0 14.5 8"></svg:path>`,
})
export class TdesignLogoMiniprogramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoMiniprogramFilledIcon],svg[tdesign-logo-miniprogram-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m1 8.5v5a3.5 3.5 0 1 1-4.199-3.43l.98-.199l.398 1.96l-.98.199A1.5 1.5 0 1 0 11 14.5v-5a3.5 3.5 0 1 1 4.199 3.43l-.98.199l-.398-1.96l.98-.199A1.5 1.5 0 1 0 13 9.5"></svg:path>`,
})
export class TdesignLogoMiniprogramFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoQqIcon],svg[tdesign-logo-qq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.897 3.087C7.188 1.24 9.213.012 11.997.013c2.786 0 4.81 1.228 6.102 3.074c1.261 1.804 1.789 4.138 1.789 6.385c0 .137-.004.331-.007.487l-.002.096l.914 2.286l.003.007c.273.712.55 1.47.755 2.132c.486 1.563.669 2.723.684 3.535c.007.401-.025.756-.104 1.046a1.7 1.7 0 0 1-.209.478a1.13 1.13 0 0 1-.8.51c-.436.052-.772-.156-.9-.242a3 3 0 0 1-.446-.382a6 6 0 0 1-.217-.239a7.3 7.3 0 0 1-.936 1.596c.196.103.383.216.55.34c.348.26.601.6.692 1.008c.087.39.003.753-.153 1.017a1.26 1.26 0 0 1-.523.475a2 2 0 0 1-.408.15a5.5 5.5 0 0 1-.828.135c-.592.059-1.34.08-2.097.078c-1.445-.002-3.035-.084-3.855-.168c-.82.084-2.41.166-3.855.168a22 22 0 0 1-2.097-.078a5.5 5.5 0 0 1-.828-.135a2 2 0 0 1-.408-.15a1.25 1.25 0 0 1-.522-.474l.002.004a1.4 1.4 0 0 1-.157-1.023c.09-.41.346-.75.695-1.008l.001-.001c.166-.123.352-.235.546-.337a7.3 7.3 0 0 1-.936-1.597a6 6 0 0 1-.218.239a3 3 0 0 1-.445.382c-.128.085-.464.295-.901.242h-.003a1.13 1.13 0 0 1-.796-.506a1.7 1.7 0 0 1-.21-.48a3.8 3.8 0 0 1-.106-1.048c.014-.813.196-1.972.681-3.534c.205-.661.482-1.42.756-2.134l.005-.013l.911-2.279l-.009-.583c0-2.247.528-4.581 1.79-6.385m-1.825 13.18l1.851-3.004v3.53c0 1.042.557 2.521 1.837 3.605l1.394 1.18l-1.319.407h.308c1.467-.002 3.062-.09 3.746-.167l.112-.013l.112.013c.684.077 2.28.165 3.746.167h.307l-1.32-.408l1.395-1.18c1.28-1.083 1.836-2.562 1.836-3.605v-3.53l1.852 3.006l.003.004l.01.017l.043.069l.01.016a18 18 0 0 0-.354-1.3a35 35 0 0 0-.71-2.004l-1.057-2.64v-.193l.007-.32c.003-.157.007-.332.007-.445c0-1.973-.47-3.867-1.428-5.239c-.929-1.328-2.35-2.22-4.462-2.22c-2.113 0-3.534.892-4.463 2.22C6.576 5.604 6.107 7.5 6.107 9.472c0 .2.009.557.012.694l.001.051l.004.203l-1.06 2.65a34 34 0 0 0-.71 2.003m-.282 1.195l-.003.004l-.01.017l-.043.069l-.017.026q.129-.575.355-1.31"></svg:path>`,
})
export class TdesignLogoQqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoQqFilledIcon],svg[tdesign-logo-qq-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.795 3.035C8.052 1.24 10.013.042 12.75.042s4.697 1.197 5.954 2.994c1.24 1.773 1.775 4.097 1.775 6.372c0 .137-.004.334-.007.497l-.004.2l.99 2.479c.284.74.568 1.519.777 2.193c.498 1.6.677 2.76.691 3.547c.008.39-.025.71-.09.951a1.2 1.2 0 0 1-.153.355a.68.68 0 0 1-.479.311c-.269.033-.49-.096-.603-.171a2.5 2.5 0 0 1-.384-.332a8.5 8.5 0 0 1-.752-.922a7.1 7.1 0 0 1-1.605 2.86c.386.159.771.352 1.074.577c.288.215.47.474.533.76a.97.97 0 0 1-.102.7a.8.8 0 0 1-.341.304c-.104.052-.219.09-.328.119a5 5 0 0 1-.786.127a23 23 0 0 1-2.136.08c-1.528-.003-3.206-.092-4.02-.179c-.815.087-2.492.176-4.02.178c-.784.002-1.544-.02-2.137-.079a5 5 0 0 1-.786-.127a1.7 1.7 0 0 1-.328-.12a.8.8 0 0 1-.34-.302a.97.97 0 0 1-.104-.702c.063-.287.246-.546.534-.76a5.2 5.2 0 0 1 1.073-.575a7.1 7.1 0 0 1-1.606-2.862l-.036.05a8.5 8.5 0 0 1-.715.873c-.118.121-.25.241-.385.332c-.112.075-.334.204-.602.171H3.3a.68.68 0 0 1-.477-.31a1.2 1.2 0 0 1-.155-.355q-.1-.366-.092-.952c.014-.787.192-1.948.688-3.547c.21-.674.493-1.453.777-2.194l.003-.007l.988-2.47l-.011-.698c0-2.275.535-4.6 1.775-6.373"></svg:path>`,
})
export class TdesignLogoQqFilledIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoTwitterIcon],svg[tdesign-logo-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a4 4 0 0 0-4 4v2h-1a12.96 12.96 0 0 1-8.803-3.434a9.504 9.504 0 0 0 5.806 10.77l1.731.686l-1.528 1.064a13.5 13.5 0 0 1-2.554 1.396C6.707 20.819 7.832 21 9 21c6.075 0 11-4.925 11-11V8.473l.227-.277c.546-.666.93-1.166 1.279-1.657c-.278.111-.548.2-.784.254l-.774.176l-.348-.714A4 4 0 0 0 16 4m6.976 1.755l1.018.696l-.565.825c-.417.61-.832 1.171-1.429 1.91V10c0 7.18-5.82 13-13 13c-2.45 0-4.743-.678-6.7-1.858L.05 19.787l2.581-.484a11.4 11.4 0 0 0 2.912-.965A11.49 11.49 0 0 1 0 8.5c0-1.496.286-2.927.807-4.24l.624-1.573l1.077 1.306A10.98 10.98 0 0 0 10 7.955a6 6 0 0 1 10.947-3.351c.372-.166.764-.385 1.008-.582l.778-.627l1.255 1.557l-.778.627a4 4 0 0 1-.234.176"></svg:path>`,
})
export class TdesignLogoTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoTwitterFilledIcon],svg[tdesign-logo-twitter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.955a6 6 0 0 1 10.934-3.37c.336-.166.723-.391 1.126-.637l1.522-.93V4.8c0 1.37-.282 2.41-.684 3.201A5.1 5.1 0 0 1 22 9.262V10c0 7.18-5.82 13-13 13c-2.45 0-4.743-.678-6.7-1.858L.05 19.787l2.581-.484a11.4 11.4 0 0 0 2.912-.965A11.49 11.49 0 0 1 0 8.5c0-1.496.286-2.927.807-4.24l.624-1.573l1.077 1.306A10.98 10.98 0 0 0 10 7.955"></svg:path>`,
})
export class TdesignLogoTwitterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWechatIcon],svg[tdesign-logo-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.796 17.027H8.75c-1.153 0-2.254-.188-3.262-.53L2.65 17.92l.352-2.712C1.162 13.855 0 11.861 0 9.64c0-4.083 3.918-7.39 8.75-7.39c4.174 0 7.665 2.468 8.54 5.77a9 9 0 0 0-.6-.02c-4.364 0-8.19 3.037-8.19 7.11c0 .67.104 1.312.296 1.917M6 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5.5.007a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" d="M21.874 19.52C23.187 18.405 24 16.863 24 15.16C24 11.758 20.754 9 16.75 9S9.5 11.758 9.5 15.161s3.246 6.161 7.25 6.161c.95 0 1.856-.155 2.686-.437l2.438 1.407zm-7.564-5.362a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4.88 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class TdesignLogoWechatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWechatStrokeIcon],svg[tdesign-logo-wechat-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 4.25C4.857 4.25 2 6.884 2 9.794c0 1.6.835 3.086 2.252 4.13a1 1 0 0 1 .399.933l-.07.534l.83-.416a1 1 0 0 1 .77-.054a8 8 0 0 0 2.569.417q.381 0 .75-.034c.004-3.21 2.674-5.678 5.946-6.201c-.41-2.623-3.114-4.853-6.696-4.853m8.707 4.78C21.003 9.335 24 11.904 24 15.311c0 1.637-.711 3.102-1.833 4.199v1.95a1 1 0 0 1-1.5.865l-1.725-.996a8.3 8.3 0 0 1-2.192.293c-3.122 0-5.924-1.747-6.893-4.344a10.2 10.2 0 0 1-3.91-.334l-2.151 1.08A1 1 0 0 1 2.356 17l.239-1.841C1.018 13.815 0 11.926 0 9.794C0 5.476 4.083 2.25 8.75 2.25c4.388 0 8.259 2.85 8.707 6.78M5.247 7.496a1 1 0 0 1 1-1h.003a1 1 0 0 1 1 1V7.5a1 1 0 0 1-1 1h-.004a1 1 0 0 1-1-1zm5.003.011a1 1 0 0 1 1-1h.004a1 1 0 0 1 1 1v.004a1 1 0 0 1-1 1h-.004a1 1 0 0 1-1-1zM16.75 11q-.11 0-.22.004c-2.948.1-5.03 2.126-5.03 4.307q0 .337.061.66c.368 1.959 2.447 3.651 5.189 3.651a6.2 6.2 0 0 0 1.995-.323a1 1 0 0 1 .82.08l.602.348v-.658a1 1 0 0 1 .353-.763c.942-.799 1.48-1.862 1.48-2.995C22 13.077 19.808 11 16.75 11m-3.194 2.656a1 1 0 0 1 1-1h.004a1 1 0 0 1 1 1v.004a1 1 0 0 1-1 1h-.004a1 1 0 0 1-1-1zm4.38.004a1 1 0 0 1 1-1h.004a1 1 0 0 1 1 1v.004a1 1 0 0 1-1 1h-.004a1 1 0 0 1-1-1z"></svg:path>`,
})
export class TdesignLogoWechatStrokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWechatStrokeFilledIcon],svg[tdesign-logo-wechat-stroke-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 7.714q.22 0 .44.01c-1.017-3.13-4.41-5.43-8.44-5.43C3.918 2.294 0 5.602 0 9.682c0 2.223 1.163 4.217 3.002 5.571l-.352 2.712l2.838-1.425c.848.288 1.762.467 2.718.517A7 7 0 0 1 8 15.375c0-4.45 4.156-7.661 8.75-7.661M6 8.044a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5.5.007a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" d="M24 15.375c0 1.702-.813 3.244-2.126 4.359v2.772L19.436 21.1a8.4 8.4 0 0 1-2.686.437c-4.004 0-7.25-2.758-7.25-6.161s3.246-6.161 7.25-6.161S24 11.972 24 15.374m-10.69-2.003a1 1 0 1 0 2 0a1 1 0 0 0-2 0m4.88 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class TdesignLogoWechatStrokeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWechatpayIcon],svg[tdesign-logo-wechatpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.713 0 6.993 1.534 8.985 3.882l.762 1.037C22.546 8.19 23 9.633 23 11.167c0 5.063-4.925 9.167-11 9.167a13 13 0 0 1-3.59-.503a1.1 1.1 0 0 0-.324-.048a1.14 1.14 0 0 0-.584.17l-2.408 1.39a.4.4 0 0 1-.212.068a.367.367 0 0 1-.367-.367c0-.068.02-.136.04-.203l.02-.065l.495-1.85a.73.73 0 0 0-.27-.83c-2.318-1.68-3.8-4.167-3.8-6.93C1 6.105 5.925 2 12 2m8.005 5.926L9.08 14.233l-.08.046a.73.73 0 0 1-.97-.296l-2.05-4.5a.367.367 0 0 1 .551-.448l2.363 1.682a1.1 1.1 0 0 0 .976.112l9.188-4.09C17.445 5.114 14.924 4 12 4c-5.328 0-9 3.534-9 7.167c0 2.006 1.073 3.93 2.97 5.306c.5.36.877.888 1.044 1.505a3.05 3.05 0 0 1 1.96-.065c.943.27 1.965.421 3.026.421c5.327 0 9-3.534 9-7.167c0-1.106-.319-2.164-.91-3.126z"></svg:path>`,
})
export class TdesignLogoWechatpayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWechatpayFilledIcon],svg[tdesign-logo-wechatpay-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.001 14.278a.73.73 0 0 1-.97-.296l-2.05-4.5a.367.367 0 0 1 .551-.448l2.363 1.683a1.1 1.1 0 0 0 .977.111l11.113-4.946C18.993 3.534 15.713 2 12 2C5.925 2 1 6.104 1 11.167c0 2.762 1.482 5.248 3.8 6.929a.73.73 0 0 1 .27.83l-.496 1.85c-.023.087-.059.177-.059.268c0 .202.164.367.367.367c.08 0 .144-.03.212-.069l2.408-1.39a1.15 1.15 0 0 1 .584-.17q.169.001.323.05a13 13 0 0 0 3.591.502c6.075 0 11-4.104 11-9.167c0-1.534-.454-2.978-1.253-4.248L9.081 14.232z"></svg:path>`,
})
export class TdesignLogoWechatpayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWecomIcon],svg[tdesign-logo-wecom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.326 8.158l-.003-.007a6.6 6.6 0 0 0-1.178-1.674c-1.266-1.307-3.067-2.19-5.102-2.417a9.3 9.3 0 0 0-2.124 0h-.001c-2.061.228-3.882 1.107-5.14 2.405a6.7 6.7 0 0 0-1.194 1.682A5.7 5.7 0 0 0 2 10.657c0 1.106.332 2.218.988 3.201l.006.01c.391.594 1.092 1.39 1.637 1.83l.983.793l-.208.875l.527-.267l.708-.358l.761.225c.467.137.955.227 1.517.29h.005q.515.06 1.026.059c.355 0 .724-.02 1.095-.06a9 9 0 0 0 1.346-.258c.095.7.43 1.337.932 1.81c-.658.208-1.352.358-2.061.436c-.442.048-.883.072-1.312.072q-.627 0-1.253-.072a10.7 10.7 0 0 1-1.861-.36l-2.84 1.438s-.29.131-.44.131c-.418 0-.702-.285-.702-.704c0-.252.067-.598.128-.84l.394-1.653c-.728-.586-1.563-1.544-2.052-2.287A7.76 7.76 0 0 1 0 10.658a7.7 7.7 0 0 1 .787-3.39a8.7 8.7 0 0 1 1.551-2.19c1.61-1.665 3.878-2.73 6.359-3.006a11.3 11.3 0 0 1 2.565 0c2.47.275 4.712 1.353 6.323 3.017a8.6 8.6 0 0 1 1.539 2.192c.466.945.769 1.937.769 2.978a3.06 3.06 0 0 0-2-.005c-.001-.644-.189-1.329-.564-2.09zm4.125 6.977l-.024-.024l-.024-.018l-.024-.018l-.096-.095a4.24 4.24 0 0 1-1.169-2.192q0-.038-.006-.075l-.006-.056l-.035-.144a1.3 1.3 0 0 0-.358-.61a1.386 1.386 0 0 0-1.957 0a1.4 1.4 0 0 0 0 1.963c.191.191.418.311.668.371c.024.012.06.012.084.012q.019 0 .041.006q.023.005.042.006a4.24 4.24 0 0 1 2.231 1.186c.048.048.096.095.131.143a.323.323 0 0 0 .466 0a.35.35 0 0 0 .036-.455m-1.05 4.37l-.025.025c-.119.096-.31.096-.453-.036a.326.326 0 0 1 0-.467c.047-.036.094-.083.141-.13l.002-.002a4.27 4.27 0 0 0 1.187-2.28q.005-.024.006-.043c0-.024 0-.06.012-.084a1.386 1.386 0 0 1 2.326-.67a1.4 1.4 0 0 1 0 1.964c-.167.18-.382.299-.608.359l-.143.036l-.057.005q-.035.006-.075.007a4.2 4.2 0 0 0-2.183 1.173l-.095.096q-.009.01-.018.024t-.018.024m-4.392-1.053l.024.024l.024.018q.015.009.024.018l.096.096a4.25 4.25 0 0 1 1.169 2.19q0 .04.006.076q.005.03.006.057l.035.143c.06.228.18.443.358.611c.537.539 1.42.539 1.957 0a1.4 1.4 0 0 0 0-1.964a1.4 1.4 0 0 0-.668-.371c-.024-.012-.06-.012-.084-.012q-.018 0-.041-.006l-.042-.006a4.25 4.25 0 0 1-2.231-1.185a1.4 1.4 0 0 1-.131-.144a.323.323 0 0 0-.466 0a.325.325 0 0 0-.036.455m1.039-4.358l.024-.024a.32.32 0 0 1 .453.035a.326.326 0 0 1 0 .467c-.047.036-.094.083-.141.13l-.002.002a4.27 4.27 0 0 0-1.187 2.281l-.006.042c0 .024 0 .06-.012.084a1.386 1.386 0 0 1-2.326.67a1.4 1.4 0 0 1 0-1.963c.166-.18.381-.3.608-.36l.143-.035q.026 0 .056-.006q.037-.005.075-.006a4.2 4.2 0 0 0 2.183-1.174l.096-.095l.018-.025z"></svg:path>`,
})
export class TdesignLogoWecomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWecomFilledIcon],svg[tdesign-logo-wecom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.585 5.09a8.6 8.6 0 0 1 1.539 2.19c.466.947.725 1.94.769 2.98a3.042 3.042 0 0 0-4.016 3.325l-.031-.005a3.042 3.042 0 0 0-2.523 5.227c-.658.208-1.352.358-2.061.436c-.442.048-.883.072-1.312.072q-.627 0-1.253-.072a10.7 10.7 0 0 1-1.861-.36l-2.84 1.438s-.27.131-.44.131c-.418 0-.702-.285-.702-.704c0-.247.068-.603.128-.84c.061-.238.394-1.653.394-1.653c-.728-.586-1.563-1.544-2.052-2.287A7.76 7.76 0 0 1 0 10.658a7.7 7.7 0 0 1 .787-3.39a8.7 8.7 0 0 1 1.551-2.19c1.61-1.665 3.878-2.73 6.359-3.006a11.3 11.3 0 0 1 2.565 0c2.47.275 4.712 1.353 6.323 3.017"></svg:path><svg:path fill="currentColor" d="m21.427 15.112l.024.024a.35.35 0 0 1-.036.455a.323.323 0 0 1-.466 0a1.4 1.4 0 0 0-.13-.144a4.25 4.25 0 0 0-2.232-1.186q-.018-.001-.041-.005q-.023-.006-.042-.007c-.024 0-.06 0-.084-.011a1.4 1.4 0 0 1-.668-.372a1.4 1.4 0 0 1 0-1.963a1.386 1.386 0 0 1 1.957 0c.179.167.298.383.358.61l.035.144q0 .026.006.056q.005.036.006.076a4.24 4.24 0 0 0 1.17 2.19l.095.097q.01.009.024.018zm-1.051 4.418l.024-.024q.009-.01.018-.024l.018-.024l.095-.095a4.2 4.2 0 0 1 2.184-1.174l.074-.007q.032-.004.057-.005l.143-.036c.227-.06.441-.18.608-.36a1.4 1.4 0 0 0 0-1.963a1.386 1.386 0 0 0-2.326.67c-.012.025-.012.06-.012.084q0 .018-.006.043q-.005.024-.006.041a4.27 4.27 0 0 1-1.18 2.24l-.003.001a1.4 1.4 0 0 1-.141.13a.326.326 0 0 0 0 .467c.143.132.334.132.453.036m-4.366-1.078l.023.024q.01.009.024.018l.024.018l.096.096a4.25 4.25 0 0 1 1.169 2.191l.006.076q.005.031.006.056l.035.144c.06.227.18.443.358.61c.537.54 1.42.54 1.957 0a1.4 1.4 0 0 0 0-1.963a1.4 1.4 0 0 0-.668-.372c-.024-.012-.06-.012-.084-.012q-.018 0-.041-.006q-.023-.005-.042-.006a4.25 4.25 0 0 1-2.231-1.185a2 2 0 0 1-.131-.144a.323.323 0 0 0-.466 0a.325.325 0 0 0-.035.455m1.062-4.382l-.024.024q-.009.01-.018.024l-.018.024l-.096.096a4.2 4.2 0 0 1-2.183 1.173q-.038.001-.075.007l-.056.005l-.143.036c-.227.06-.441.18-.609.36a1.4 1.4 0 0 0 0 1.963a1.386 1.386 0 0 0 2.327-.67c.012-.024.012-.06.012-.084q0-.019.006-.042q.005-.023.006-.042a4.27 4.27 0 0 1 1.18-2.24l.003-.001c.047-.048.094-.095.14-.13a.326.326 0 0 0 0-.467a.32.32 0 0 0-.453-.036"></svg:path>`,
})
export class TdesignLogoWecomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWindowsIcon],svg[tdesign-logo-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1.847V12H12V3.276zM14 5.01V10h6V4.153zm-3-1.188V12H2V5.303zM4 7.001v3h5V6.177zm-2 6h9V21.1l-9-.857zm2 2v3.423l5 .476V15zm8-2h10v9.156l-10-1.459zm2 2v3.968l6 .875V15z"></svg:path>`,
})
export class TdesignLogoWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWindowsFilledIcon],svg[tdesign-logo-windows-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 2.135v9.615h-9.5V3.492zm-11 1.982v7.633h-8.5V5.515zm-8.5 9.133h8.5v7.575l-8.5-.81zm10 0h9.5v8.617l-9.5-1.385z"></svg:path>`,
})
export class TdesignLogoWindowsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoYoutubeIcon],svg[tdesign-logo-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.927 2.5h6.146c1.824 0 3.293 0 4.45.155c1.2.162 2.21.507 3.012 1.31c.803.802 1.148 1.813 1.31 3.013C24 8.134 24 9.603 24 11.427v1.146c0 1.824 0 3.293-.155 4.45c-.162 1.2-.507 2.21-1.31 3.012c-.802.803-1.812 1.148-3.013 1.31c-1.156.155-2.625.155-4.449.155H8.927c-1.824 0-3.293 0-4.45-.155c-1.2-.162-2.21-.507-3.013-1.31c-.802-.802-1.147-1.812-1.309-3.013C0 15.866 0 14.397 0 12.573v-1.146c0-1.824 0-3.293.155-4.45c.162-1.2.507-2.21 1.31-3.013c.802-.802 1.813-1.147 3.013-1.309C5.634 2.5 7.103 2.5 8.927 2.5M4.744 4.638c-.978.131-1.496.372-1.865.74c-.37.37-.61.888-.741 1.866C2.002 8.251 2 9.586 2 11.5v1c0 1.914.002 3.249.138 4.256c.131.978.372 1.496.74 1.865c.37.37.888.61 1.866.742c1.007.135 2.342.137 4.256.137h6c1.914 0 3.249-.002 4.256-.137c.978-.132 1.496-.373 1.865-.742c.37-.369.61-.887.742-1.865c.135-1.007.137-2.342.137-4.256v-1c0-1.914-.002-3.249-.137-4.256c-.132-.978-.373-1.496-.742-1.865c-.369-.37-.887-.61-1.865-.741C18.249 4.502 16.914 4.5 15 4.5H9c-1.914 0-3.249.002-4.256.138m4.057 2.326l8.695 5.037l-8.695 5.036zm2 3.47v3.134L13.506 12z"></svg:path>`,
})
export class TdesignLogoYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoYoutubeFilledIcon],svg[tdesign-logo-youtube-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.073 2.5c1.824 0 3.293 0 4.45.155c1.2.162 2.21.507 3.012 1.31c.803.802 1.148 1.813 1.31 3.013C24 8.134 24 9.603 24 11.427v1.146c0 1.824 0 3.293-.155 4.45c-.162 1.2-.507 2.21-1.31 3.012c-.802.803-1.812 1.148-3.013 1.31c-1.156.155-2.625.155-4.449.155H8.927c-1.824 0-3.293 0-4.45-.155c-1.2-.162-2.21-.507-3.013-1.31c-.802-.802-1.147-1.812-1.309-3.013C0 15.866 0 14.397 0 12.573v-1.146c0-1.824 0-3.293.155-4.45c.162-1.2.507-2.21 1.31-3.013c.802-.802 1.813-1.147 3.013-1.309C5.634 2.5 7.103 2.5 8.927 2.5zm1.426 9.501L9.3 7.832v8.338z"></svg:path>`,
})
export class TdesignLogoYoutubeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoutIcon],svg[tdesign-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.207 11.793l-5.914 5.914l-1.414-1.414l3.5-3.5H7.793v-2h9.586l-3.5-3.5l1.414-1.414zm-11.414-7.5h-5v15h5v2h-7v-19h7z"></svg:path>`,
})
export class TdesignLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLookAroundIcon],svg[tdesign-look-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm4 0v4h-2V8zm-4 6h2.004v2.004H9z"></svg:path>`,
})
export class TdesignLookAroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLookAroundFilledIcon],svg[tdesign-look-around-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm4 0V8h-2v4zm-1.996 2H9v2.004h2.004z"></svg:path>`,
})
export class TdesignLookAroundFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLoudspeakerIcon],svg[tdesign-loudspeaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1.382V15.5l-7.2-3h-.91L7.712 14H9.5v2H7.477l-.588 5H2V5h6.764zM5.875 12.5H4V19h1.11zM4 10.5h5.2l4.8 2V4.618L9.236 7H4zm16.333-5.914l.707.707c.937.937 1.328 2.342 1.328 3.624c0 1.281-.391 2.687-1.328 3.624l-.707.707l-1.414-1.414l.707-.708c.444-.443.742-1.264.742-2.21c0-.945-.298-1.765-.742-2.209L18.919 6zM18.25 6.255l.707.707a2.77 2.77 0 0 1 0 3.914l-.707.707l-1.415-1.414l.707-.707c.3-.3.3-.786 0-1.086l-.707-.707z"></svg:path>`,
})
export class TdesignLoudspeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignLoudspeakerFilledIcon],svg[tdesign-loudspeaker-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.382V16.5l-7.2-3h-.91L7.712 15H9.5v2H7.477l-.588 5H2V6h6.764zM5.875 13.5H4V20h1.11zm14.458-7.914l.707.707c.937.937 1.328 2.342 1.328 3.624c0 1.281-.391 2.687-1.328 3.624l-.707.707l-1.414-1.414l.707-.708c.444-.443.742-1.264.742-2.21c0-.945-.298-1.765-.742-2.209L18.919 7zM18.25 7.255l.707.707a2.77 2.77 0 0 1 0 3.914l-.707.707l-1.415-1.414l.707-.708c.3-.3.3-.785 0-1.085l-.707-.707z"></svg:path>`,
})
export class TdesignLoudspeakerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMailIcon],svg[tdesign-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v1.83l9 4.55l9-4.55V5zm18 4.07l-9 4.55l-9-4.55V19h18z"></svg:path>`,
})
export class TdesignMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMailFilledIcon],svg[tdesign-mail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v2.83l11 5.55l11-5.551z"></svg:path><svg:path fill="currentColor" d="M23 8.069L12 13.62L1 8.07V21h22z"></svg:path>`,
})
export class TdesignMailFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapIcon],svg[tdesign-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5v15.574l-7 4.084l-6.074-3.544L2 21.5V5.926zm1 15.084l4 2.333V7.074l-4-2.333zM8 4.74L4 7.074V18.5l4-1.667zm8 2.426v12.092l4-2.333V5.5z"></svg:path>`,
})
export class TdesignMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMap3dIcon],svg[tdesign-map-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.842l7 4.084v5.401c1.03.452 1.927 1.018 2.61 1.687c.828.81 1.39 1.825 1.39 2.986c0 1.963-1.566 3.472-3.482 4.43C17.542 21.418 14.883 22 12 22s-5.543-.582-7.518-1.57C2.566 19.472 1 17.964 1 16c0-1.161.562-2.175 1.39-2.986c.683-.67 1.58-1.235 2.61-1.687V5.926zM5 13.56a5.8 5.8 0 0 0-1.212.884C3.224 14.996 3 15.525 3 16c0 .798.673 1.79 2.376 2.641C7.02 19.463 9.36 20 12 20s4.98-.537 6.624-1.359C20.327 17.79 21 16.798 21 16c0-.475-.224-1.004-.788-1.557A5.8 5.8 0 0 0 19 13.56v.515l-7 4.084l-7-4.084zm12-.633V8.365l-4 2.223v4.671zm-6 2.333v-4.67L7 8.364v4.56zM7.876 6.563L12 8.856l4.124-2.293L12 4.158z"></svg:path>`,
})
export class TdesignMap3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMap3dFilledIcon],svg[tdesign-map-3d-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.842l7 4.084v5.401c1.03.452 1.927 1.018 2.61 1.687c.828.81 1.39 1.825 1.39 2.986c0 1.963-1.566 3.472-3.482 4.43C17.542 21.418 14.883 22 12 22s-5.543-.582-7.518-1.57C2.566 19.472 1 17.964 1 16c0-1.161.562-2.175 1.39-2.986c.683-.67 1.58-1.235 2.61-1.687V5.926zM5 13.56a5.8 5.8 0 0 0-1.212.884C3.224 14.996 3 15.525 3 16c0 .798.673 1.79 2.376 2.641C7.02 19.463 9.36 20 12 20s4.98-.537 6.624-1.359C20.327 17.79 21 16.798 21 16c0-.475-.224-1.004-.788-1.557A5.8 5.8 0 0 0 19 13.56v.515l-7 4.084l-7-4.084zm6.866 2.2v-5.67L7 7.364v5.56z"></svg:path>`,
})
export class TdesignMap3dFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapAddIcon],svg[tdesign-map-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.886 1.859l8.086 3.537L22 2.382V11h-2V5.618l-3 1.5V11h-2V7.154L9 4.53v10.853l2.34 1.17l-.895 1.789l-2.401-1.201L2 20.766V5.98zM7 15.434V4.92l-3 2.1v10.213zM19 12v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path>`,
})
export class TdesignMapAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapAddFilledIcon],svg[tdesign-map-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l3.245 1.916A6.47 6.47 0 0 1 11.5 17a6.5 6.5 0 0 1 3-5.478V5.09l-5-2.953zM22 2.5v9.376a6.52 6.52 0 0 0-5.5-1.202V4.767z"></svg:path><svg:path fill="currentColor" d="M19 16v-4h-2v4h-4v2h4v4h2v-4h4v-2z"></svg:path>`,
})
export class TdesignMapAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapAimingIcon],svg[tdesign-map-aiming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-7.667V5.52A6.56 6.56 0 0 1 18.48 11h1.187v2H18.48A6.56 6.56 0 0 1 13 18.48v1.187h-2V18.48A6.56 6.56 0 0 1 5.52 13H4.333v-2H5.52A6.56 6.56 0 0 1 11 5.52V4.333zm-1 3.111a4.556 4.556 0 1 0 0 9.112a4.556 4.556 0 0 0 0-9.112m0 4.445a.111.111 0 1 0 0 .222a.111.111 0 0 0 0-.222M9.889 12a2.111 2.111 0 1 1 4.222 0a2.111 2.111 0 0 1-4.222 0"></svg:path>`,
})
export class TdesignMapAimingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapAimingFilledIcon],svg[tdesign-map-aiming-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.444 12a4.556 4.556 0 1 1 9.111 0a4.556 4.556 0 0 1-9.11 0M12 9.89a2.111 2.111 0 1 0 0 4.222a2.111 2.111 0 0 0 0-4.222"></svg:path><svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m1-17.48V4.334h-2V5.52A6.56 6.56 0 0 0 5.52 11H4.333v2H5.52A6.56 6.56 0 0 0 11 18.48v1.187h2V18.48A6.56 6.56 0 0 0 18.48 13h1.186v-2H18.48A6.56 6.56 0 0 0 13 5.52"></svg:path>`,
})
export class TdesignMapAimingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapBlockedIcon],svg[tdesign-map-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5v8h-2v-5l-4 1.667V10.5h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zM18 13.5a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18 13.5m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M12.5 17a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"></svg:path>`,
})
export class TdesignMapBlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapBlockedFilledIcon],svg[tdesign-map-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2.312 1.365A7 7 0 0 1 11 17a7 7 0 0 1 3.5-6.064V5.09l-5-2.953zM22 2.5v8.755a7.03 7.03 0 0 0-5.5-1.094V4.767z"></svg:path><svg:path fill="currentColor" d="M18 11.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M14.5 17a3.5 3.5 0 0 1 5.165-3.08l-4.744 4.745A3.5 3.5 0 0 1 14.5 17m1.835 3.08l4.744-4.745a3.5 3.5 0 0 1-4.745 4.745"></svg:path>`,
})
export class TdesignMapBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapBubbleIcon],svg[tdesign-map-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5v15.574l-7 4.084l-6.074-3.544L2 21.5V5.926zM4 7.074V18.5l5.074-2.114L15 19.842l5-2.916V5.5l-5.074 2.114L9 4.158zM7.5 9.5a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5m-1.75-.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M14 10.5a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5m-1.75-.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M10 14a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5m-1.75-.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M16.5 15a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5m-1.75-.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0"></svg:path>`,
})
export class TdesignMapBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapBubbleFilledIcon],svg[tdesign-map-bubble-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.074 5.386L22 2.5v15.574l-7 4.084l-6.074-3.544L2 21.5V5.926l7-4.084zM7.5 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.5 1a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M10 12a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.5 1a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path>`,
})
export class TdesignMapBubbleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapCancelIcon],svg[tdesign-map-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zm7.172-4.076L18 15.586l2.829-2.829l1.414 1.415L19.415 17l2.828 2.828l-1.414 1.415L18 18.414l-2.828 2.829l-1.414-1.415L16.586 17l-2.828-2.828z"></svg:path>`,
})
export class TdesignMapCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapCancelFilledIcon],svg[tdesign-map-cancel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.717L1 5.926V21.5l5.5-2.267zm2 16.193l5 2.953v-.173a6.48 6.48 0 0 1-2-4.69a6.48 6.48 0 0 1 2-4.69V5.09l-5-2.952zM21 2.5v8.732a6.5 6.5 0 0 0-3-.732a6.5 6.5 0 0 0-2.5.498v-6.23zm-.171 10.257L18 15.586l-2.828-2.829l-1.414 1.415L16.586 17l-2.828 2.828l1.414 1.415L18 18.414l2.829 2.829l1.414-1.415L19.415 17l2.828-2.828z"></svg:path>`,
})
export class TdesignMapCancelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapChatIcon],svg[tdesign-map-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V10h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zM13 13h10v7.497h-5.292L13 22.517zm2 2v4.483l2.296-.986H21V15z"></svg:path>`,
})
export class TdesignMapChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapChatFilledIcon],svg[tdesign-map-chat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2 1.18V11.5h3V5.09l-5-2.952zM22 2.5v9h-5.5V4.767z"></svg:path><svg:path fill="currentColor" d="M23 13.5h-9.5v9.017l4.208-2.02H23z"></svg:path>`,
})
export class TdesignMapChatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapCheckedIcon],svg[tdesign-map-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V12h-2V5.5l-4 1.667V12h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zm15.657-2.247l-7.07 7.071l-4.243-4.243L13.758 16l2.828 2.829l5.657-5.657z"></svg:path>`,
})
export class TdesignMapCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapCheckedFilledIcon],svg[tdesign-map-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.717L1 5.926V21.5l5.5-2.267zm2 16.193l5 2.953v-.173a6.48 6.48 0 0 1-2-4.69a6.48 6.48 0 0 1 2-4.69V5.09l-5-2.952zM21 2.5v8.732a6.5 6.5 0 0 0-3-.732a6.5 6.5 0 0 0-2.5.498v-6.23z"></svg:path><svg:path fill="currentColor" d="m16.586 21.657l7.072-7.07l-1.415-1.415l-5.657 5.657L13.758 16l-1.414 1.415z"></svg:path>`,
})
export class TdesignMapCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapCollectionIcon],svg[tdesign-map-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5v8h-2v-5l-4 1.667V9.5h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zm10-6.102l2.21 3.226l3.752 1.106l-2.385 3.1l.108 3.909L18 20.762l-3.685 1.31l.108-3.91l-2.385-3.1l3.751-1.105zm0 3.538l-.963 1.405l-1.634.482l1.039 1.35l-.047 1.703L18 18.64l1.605.57l-.047-1.703l1.04-1.35l-1.635-.482z"></svg:path>`,
})
export class TdesignMapCollectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapCollectionFilledIcon],svg[tdesign-map-collection-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2.799 1.652A6.97 6.97 0 0 1 11 16.5a7 7 0 0 1 3.5-6.064V5.09l-5-2.953zM22 2.5v8.255a7.03 7.03 0 0 0-5.5-1.094V4.767z"></svg:path><svg:path fill="currentColor" d="m20.211 13.957l-2.21-3.226l-2.212 3.226l-3.75 1.105l2.384 3.1l-.108 3.91L18 20.761l3.685 1.31l-.108-3.91l2.385-3.1z"></svg:path>`,
})
export class TdesignMapCollectionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapConnectionIcon],svg[tdesign-map-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4M2 6a4 4 0 0 1 7.874-1h8.209l.081.014a5.45 5.45 0 0 1 2.32 1.005C21.288 6.637 22 7.614 22 9s-.71 2.363-1.517 2.981a5.45 5.45 0 0 1-2.319 1.005l-.081.014H6c-.237 0-.772.148-1.25.53c-.447.358-.75.842-.75 1.47s.303 1.112.75 1.47c.478.382 1.013.53 1.25.53h11v-2.5l4.667 3.5L17 21.5V19H6c-.763 0-1.728-.352-2.5-.97C2.697 17.389 2 16.373 2 15s.697-2.388 1.5-3.03C4.272 11.351 5.237 11 6 11h11.91c.374-.075.917-.27 1.357-.606c.444-.34.733-.78.733-1.394s-.29-1.053-.733-1.394A3.5 3.5 0 0 0 17.91 7H9.874A4.002 4.002 0 0 1 2 6"></svg:path>`,
})
export class TdesignMapConnectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapConnectionFilledIcon],svg[tdesign-map-connection-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a4 4 0 0 1 7.874-1h8.209l.081.014a5.45 5.45 0 0 1 2.32 1.005C21.288 6.637 22 7.614 22 9s-.71 2.363-1.517 2.981a5.45 5.45 0 0 1-2.319 1.005l-.081.014H6c-.237 0-.772.148-1.25.53c-.447.358-.75.842-.75 1.47s.303 1.112.75 1.47c.478.382 1.013.53 1.25.53h11v-2.5l4.667 3.5L17 21.5V19H6c-.763 0-1.728-.352-2.5-.97C2.697 17.389 2 16.373 2 15s.697-2.388 1.5-3.03C4.272 11.351 5.237 11 6 11h11.91c.374-.075.917-.27 1.357-.606c.444-.34.733-.78.733-1.394s-.29-1.053-.733-1.394A3.5 3.5 0 0 0 17.91 7H9.874A4.002 4.002 0 0 1 2 6"></svg:path>`,
})
export class TdesignMapConnectionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapDistanceIcon],svg[tdesign-map-distance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm12.5 3a.5.5 0 0 0-.5.5c0 .222.157.545.488.907l.012.013l.012-.013c.33-.362.488-.685.488-.907a.5.5 0 0 0-.5-.5m0 3.964c-.294-.202-.594-.396-.87-.622a6 6 0 0 1-.618-.585C14.592 9.298 14 8.497 14 7.5a2.5 2.5 0 0 1 5 0c0 .997-.593 1.798-1.012 2.257a6 6 0 0 1-.618.585c-.276.227-.576.42-.87.622M8.5 10a.5.5 0 0 0-.5.5c0 .222.157.545.488.907l.012.013l.012-.013c.33-.362.488-.685.488-.907a.5.5 0 0 0-.5-.5m0 3.964c-.221-.152-.447-.299-.662-.459a6 6 0 0 1-.826-.748C6.592 12.298 6 11.497 6 10.5a2.5 2.5 0 0 1 5 0c0 .997-.593 1.798-1.012 2.257a6 6 0 0 1-.826.748c-.215.16-.441.307-.662.459m11.288-.379l-5.873 2.202l-.702-1.872l5.872-2.202zm-8 3l-5.873 2.203l-.702-1.873l5.872-2.202z"></svg:path>`,
})
export class TdesignMapDistanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapDistanceFilledIcon],svg[tdesign-map-distance-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.5a.5.5 0 0 1 1 0c0 .222-.157.545-.488.907l-.012.013l-.012-.013C16.158 8.045 16 7.722 16 7.5m-8 3a.5.5 0 0 1 1 0c0 .222-.157.545-.488.907l-.012.013l-.012-.013C8.158 11.045 8 10.722 8 10.5"></svg:path><svg:path fill="currentColor" d="M22 2v20H2V2zm-5.687 8.836l.187.128l.188-.128c.232-.158.465-.316.682-.494c.167-.137.391-.337.618-.585C18.408 9.298 19 8.497 19 7.5a2.5 2.5 0 1 0-5 0c0 .997.593 1.798 1.012 2.257c.228.248.452.448.618.585c.217.178.45.336.683.494m-8.011 2.993l.198.135l.199-.135c.156-.106.313-.211.463-.324q.08-.059.208-.163c.167-.137.391-.337.618-.585c.42-.459 1.012-1.26 1.012-2.257a2.5 2.5 0 1 0-5 0c0 .997.593 1.798 1.012 2.257a6 6 0 0 0 .826.748c.151.113.308.218.464.324m5.613 1.958l5.873-2.202l-.703-1.873l-5.872 2.203zm-8 3l5.873-2.202l-.703-1.873l-5.872 2.203z"></svg:path>`,
})
export class TdesignMapDistanceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapDoubleIcon],svg[tdesign-map-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 1.842l4.574 2.669L17.5 2.25v6.375L22 6.75v12.2l-5.5 3.208l-4.574-2.669L6.5 21.75v-6.375L2 17.25V5.05zm-1 11.366V9.551l5.123-2.989L7.5 4.158L4 6.199v8.051zm5.866-6.652L15.5 8.384V5.25zm5.134 4.236v8.467l2.5-1.458V9.75zm-2 8.467v-8.56L13 9.241v8.56zm-4.5-1.55V9.24l-2.5 1.458v8.051z"></svg:path>`,
})
export class TdesignMapDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapDoubleFilledIcon],svg[tdesign-map-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 1.842l4.574 2.669L17.5 2.25v6.375L22 6.75v12.2l-5.5 3.208l-4.574-2.669L6.5 21.75v-6.375L2 17.25V5.05zm10 8.95v8.467l2.5-1.458V9.75zm-2 8.467v-8.56L13 9.241v8.56zm-4.5-1.55V9.24l-2.5 1.458v8.051z"></svg:path>`,
})
export class TdesignMapDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapEditIcon],svg[tdesign-map-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zm11.787-4.747l4.127 4.127l-7.286 7.287H12.5l-.001-4.128zm-.922 3.75l1.299 1.3l.922-.923l-1.3-1.299zm-.115 2.713l-1.3-1.299l-2.95 2.95v1.3h1.3z"></svg:path>`,
})
export class TdesignMapEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapEditFilledIcon],svg[tdesign-map-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l1 .59v-.955l4-4V5.09l-5-2.953zM22 2.5v8.97l-2.213-2.212l-3.287 3.287V4.767zm1.914 13.714l-4.127-4.128l-7.287 7.287l.001 4.127h4.127zm-6.463 1.036l1.299 1.3l-2.95 2.95h-1.3v-1.3z"></svg:path>`,
})
export class TdesignMapEditFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapFilledIcon],svg[tdesign-map-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l5 2.952V5.09l-5-2.953zm7-14.143v16.516l5.5-3.209V2.5z"></svg:path>`,
})
export class TdesignMapFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapGridIcon],svg[tdesign-map-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm5 2v1h2V6h2v1h2V6h2v1h1v2h-1v2h1v2h-1v2h1v2h-1v1h-2v-1h-2v1h-2v-1H9v1H7v-1H6v-2h1v-2H6v-2h1V9H6V7h1V6zm0 3v2h2V9zm4 0v2h2V9zm2 4h-2v2h2zm-4 2v-2H9v2z"></svg:path>`,
})
export class TdesignMapGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapGridFilledIcon],svg[tdesign-map-grid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V9h2v2zm4 0V9h2v2zm0 2h2v2h-2zm-2 0v2H9v-2z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zM9 7h2V6h2v1h2V6h2v1h1v2h-1v2h1v2h-1v2h1v2h-1v1h-2v-1h-2v1h-2v-1H9v1H7v-1H6v-2h1v-2H6v-2h1V9H6V7h1V6h2z"></svg:path>`,
})
export class TdesignMapGridFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapInformationIcon],svg[tdesign-map-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3 3 0 0 0-3 3c0 1.237.782 2.498 1.738 3.544c.456.498.914.908 1.262 1.195a13 13 0 0 0 1.262-1.195C14.218 9.498 15 8.238 15 7a3 3 0 0 0-3-3m0 10.214l-.567-.39l-.002-.002l-.004-.002l-.012-.009l-.041-.03l-.144-.104a14.6 14.6 0 0 1-1.968-1.784C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a14.6 14.6 0 0 1-2.112 1.889l-.04.029l-.013.009l-.004.002l-.001.001zm0-6.964a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5M10.25 7a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M2 10h5v2H4v6.43l4.439-4.843l1.474 1.352L5.273 20h9.023l-2.707-3.094l1.505-1.317l.888 1.015L18.586 12H17v-2h5v12H2zm18 3.414l-4.698 4.698L16.954 20H20z"></svg:path>`,
})
export class TdesignMapInformationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapInformation1Icon],svg[tdesign-map-information-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3 3 0 0 0-3 3c0 1.237.782 2.498 1.738 3.544c.456.498.914.908 1.262 1.195a13 13 0 0 0 1.262-1.195C14.218 9.498 15 8.238 15 7a3 3 0 0 0-3-3m0 10.214l-.567-.39l-.002-.002l-.004-.002l-.012-.009l-.041-.03l-.144-.104a14.6 14.6 0 0 1-1.968-1.784C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a14.6 14.6 0 0 1-2.112 1.889l-.04.029l-.013.009l-.004.002l-.001.001zm0-6.964a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5M10.25 7a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M2 10h5v2H4v6.497l5.075-2.116L15 19.842l5-2.916V12h-3v-2h5v8.074l-7 4.084l-6.074-3.548L2 21.498z"></svg:path>`,
})
export class TdesignMapInformation1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapInformation1FilledIcon],svg[tdesign-map-information-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.214l.016-.011c.424-.293.846-.583 1.244-.911c.401-.33.938-.808 1.478-1.399C15.782 10.752 17 9.014 17 7A5 5 0 0 0 7 7c0 2.012 1.218 3.751 2.262 4.893c.54.59 1.077 1.069 1.477 1.399c.399.327.82.618 1.245.91zM13.5 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill="currentColor" d="M7 10H2v11.498l6.926-2.888L15 22.158l7-4.084V10h-5v2h3v4.926l-5 2.916l-5.925-3.461L4 18.497V12h3z"></svg:path>`,
})
export class TdesignMapInformation1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapInformation2Icon],svg[tdesign-map-information-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3 3 0 0 0-3 3c0 1.237.782 2.498 1.738 3.544c.456.498.914.908 1.262 1.195a13 13 0 0 0 1.262-1.195C14.218 9.498 15 8.238 15 7a3 3 0 0 0-3-3m0 10.214l-.567-.39l-.002-.002l-.004-.002l-.012-.009l-.041-.03l-.144-.104a14.6 14.6 0 0 1-1.968-1.784C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a14.6 14.6 0 0 1-2.112 1.889l-.04.029l-.013.009l-.004.002l-.001.001zm0-6.964a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5M10.25 7a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-7.145 3H7v2H4.895l-.778 7h15.766l-.778-7H17v-2h3.895l1.222 11H1.883z"></svg:path>`,
})
export class TdesignMapInformation2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapInformation2FilledIcon],svg[tdesign-map-information-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.214l-.016-.011a18 18 0 0 1-1.245-.911c-.4-.33-.937-.808-1.477-1.399C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a15 15 0 0 1-1.478 1.399c-.398.328-.82.618-1.244.91zM13.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path><svg:path fill="currentColor" d="M7 10H3.105L1.883 21h20.234l-1.222-11H17v2h2.105l.778 7H4.117l.778-7H7z"></svg:path>`,
})
export class TdesignMapInformation2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapInformationFilledIcon],svg[tdesign-map-information-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.433 13.824l.567.39l.568-.39l.001-.002l.004-.002l.012-.009l.041-.03q.053-.036.144-.104a14.6 14.6 0 0 0 1.968-1.784C15.782 10.752 17 9.014 17 7A5 5 0 0 0 7 7c0 2.012 1.218 3.751 2.262 4.893a14.6 14.6 0 0 0 2.112 1.889l.04.029l.013.008l.004.003zM12 8.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill="currentColor" d="M7 10H2v12h20V10h-5v2h1.586l-4.604 4.604l-.888-1.015l-1.505 1.317L14.296 20H5.273l4.64-5.061l-1.474-1.352L4 18.43V12h3zm8.302 8.112L20 13.414V20h-3.046z"></svg:path>`,
})
export class TdesignMapInformationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapLocationIcon],svg[tdesign-map-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zM18 14a2.75 2.75 0 0 0-2.75 2.75c0 1.252.735 2.454 1.615 3.422c.407.448.817.814 1.135 1.075c.318-.26.728-.627 1.135-1.075c.88-.968 1.615-2.17 1.615-3.422A2.75 2.75 0 0 0 18 14m0 9.701l-.555-.369l-.002-.001l-.004-.003l-.012-.008l-.04-.028l-.137-.097a13 13 0 0 1-1.865-1.677c-.995-1.094-2.135-2.767-2.135-4.768a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a13 13 0 0 1-2.002 1.774l-.04.028l-.012.008l-.004.003h-.002zM16.75 16h2.5v2h-2.5z"></svg:path>`,
})
export class TdesignMapLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapLocationFilledIcon],svg[tdesign-map-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l1.75 1.033V16.75a6.75 6.75 0 0 1 3.25-5.773V5.091l-5-2.953zM22 2.5v8.812a6.77 6.77 0 0 0-5.5-1.145v-5.4zm-4 21.201l-.203-.134c-.184-.121-.368-.242-.547-.372a13 13 0 0 1-1.865-1.677c-.995-1.094-2.135-2.767-2.135-4.768a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a13 13 0 0 1-1.865 1.677c-.179.13-.363.25-.547.372zM19.25 16h-2.5v2h2.5z"></svg:path>`,
})
export class TdesignMapLocationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapLockedIcon],svg[tdesign-map-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zM18 14c.69 0 1.25.56 1.25 1.25V16h-2.5v-.75c0-.69.56-1.25 1.25-1.25m3.25 2v-.75a3.25 3.25 0 0 0-6.5 0V16h-1.251v6.5h9V16zm-.751 2v2.5h-5V18z"></svg:path>`,
})
export class TdesignMapLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapLockedFilledIcon],svg[tdesign-map-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2 1.18V16.5a6.5 6.5 0 0 1 3-5.478V5.09l-5-2.953zM22 2.5v8.876a6.52 6.52 0 0 0-5.5-1.202V4.767zm-.75 12.75V16h1.249v6.5h-9V16h1.251v-.75a3.25 3.25 0 0 1 6.5 0m-2 0a1.25 1.25 0 1 0-2.5 0V16h2.5z"></svg:path>`,
})
export class TdesignMapLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapMarkedIcon],svg[tdesign-map-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V10h-2V5.5l-4 1.667V9h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zm5.75-4.837h8.5v10.295l-4.247-2.617l-4.253 2.614zm2 2v4.715l2.254-1.385l2.246 1.383v-4.713z"></svg:path>`,
})
export class TdesignMapMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapMarkedFilledIcon],svg[tdesign-map-marked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2.251 1.33V10H14.5V5.09l-5-2.952zM22 2.5V10h-5.5V4.767z"></svg:path><svg:path fill="currentColor" d="M22.25 11.996h-8.5V22.29l4.253-2.615l4.247 2.617z"></svg:path>`,
})
export class TdesignMapMarkedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapNavigationIcon],svg[tdesign-map-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v3h10V2h2v3h2v2h-2v8h2v2h-2v4h-2v-4h-2v-2h2V7H8v4H6V7H2V5h4V2zm6.58 8.419l-4.375 13.126l-3.008-5.743l-5.743-3.008zm-8.032 4.785l2.13 1.117l1.117 2.13l1.624-4.87z"></svg:path>`,
})
export class TdesignMapNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapNavigationFilledIcon],svg[tdesign-map-navigation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v3h10V2h2v3h2v2h-2v8h2v2h-2v4h-2v-4h-2v-2h2V7H8v4H6V7H2V5h4V2zm6.58 8.419l-4.375 13.126l-3.008-5.743l-5.743-3.008z"></svg:path>`,
})
export class TdesignMapNavigationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapOutlineIcon],svg[tdesign-map-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5v15.574l-7 4.084l-6.074-3.544L2 21.5V5.926zM4 7.074V18.5l5.074-2.114L15 19.842l5-2.916V5.5l-5.074 2.114L9 4.158z"></svg:path>`,
})
export class TdesignMapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapOutlineFilledIcon],svg[tdesign-map-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6 3.544L22 2.5v15.574l-7 4.084l-6-3.544L2 21.5V5.926z"></svg:path>`,
})
export class TdesignMapOutlineFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapRoutePlanningIcon],svg[tdesign-map-route-planning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3 3 0 0 0-3 3c0 1.237.782 2.498 1.738 3.544c.456.498.914.908 1.262 1.195a13 13 0 0 0 1.262-1.195C14.218 9.498 15 8.238 15 7a3 3 0 0 0-3-3m0 10.214c-.258-.178-.519-.35-.77-.537a14.6 14.6 0 0 1-1.968-1.784C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a14.6 14.6 0 0 1-1.968 1.784c-.251.187-.512.36-.77.537m0-6.964a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5M10.25 7a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M2 10h3v2h-.634l.868 1.419L4 14.174V20h16v-6.248l-.783-1.035l.68-.514l.103.137V12h-2v-2h4v12H2zm2 2.194L4.317 12H4zm14.654 3.607l-.879.478q-.663.36-1.366.635l-.728-1.863q.585-.228 1.139-.53l.878-.477zm-11.318.974a12 12 0 0 1-1.346-.677l1.008-1.727q.543.317 1.123.564l.92.392l-.785 1.84zm6.303.897l-.999.05q-.753.037-1.507-.02l.152-1.994q.627.048 1.255.016l1-.05z"></svg:path>`,
})
export class TdesignMapRoutePlanningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapRoutePlanningFilledIcon],svg[tdesign-map-route-planning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.214l-.567-.39l-.002-.002l-.004-.002l-.012-.009l-.041-.03l-.144-.104a14.6 14.6 0 0 1-1.968-1.784C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a14.6 14.6 0 0 1-2.112 1.889l-.04.029l-.013.009l-.004.002l-.001.001zM13.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path><svg:path fill="currentColor" d="M5 10H2v12h20V10h-4v2h2v.34l-.104-.137l-.68.515l.784 1.034V20H4v-5.826l1.234-.755L4.366 12H5zm-.683 2L4 12.194V12z"></svg:path><svg:path fill="currentColor" d="m17.775 16.279l.879-.478l-.956-1.757l-.878.478q-.553.3-1.139.53l.728 1.862q.703-.275 1.366-.635M5.99 16.098q.652.381 1.346.677l.92.392l.784-1.84l-.92-.392q-.577-.247-1.12-.565zm6.65 1.624l.999-.05l-.1-1.998l-.999.05q-.627.032-1.255-.016l-.152 1.994q.754.057 1.507.02"></svg:path>`,
})
export class TdesignMapRoutePlanningFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapRulerIcon],svg[tdesign-map-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.857.216l7.812 7.811L7.86 23.835L.05 16.023zm0 2.828l-2.184 2.184l1.602 1.603l-1.414 1.414l-1.602-1.602l-2.184 2.184l2.402 2.402l-1.415 1.414l-2.401-2.402l-2.184 2.184l1.602 1.602l-1.414 1.415l-1.603-1.603l-2.184 2.184l4.983 4.983l12.98-12.979z"></svg:path>`,
})
export class TdesignMapRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapRulerFilledIcon],svg[tdesign-map-ruler-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.669 8.027L15.857.216L12.26 3.814l3.016 3.016l-1.414 1.414l-3.016-3.016L8.66 7.412l3.816 3.816l-1.415 1.414l-3.815-3.815l-2.185 2.184l3.016 3.016l-1.414 1.414l-3.016-3.016L.05 16.023l7.811 7.812z"></svg:path>`,
})
export class TdesignMapRulerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSafetyIcon],svg[tdesign-map-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V10h-2V5.5l-4 1.667V9h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zm5.498-4.835h9v5.633a3 3 0 0 1-1.36 2.512l-3.14 2.052l-3.14-2.052a3 3 0 0 1-1.36-2.512zm2 2v3.633a1 1 0 0 0 .453.837l2.047 1.337l2.047-1.337a1 1 0 0 0 .453-.837v-3.633z"></svg:path>`,
})
export class TdesignMapSafetyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSafetyFilledIcon],svg[tdesign-map-safety-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2 1.18V10h3V5.09l-5-2.952zM22 2.5V10h-5.5V4.767z"></svg:path><svg:path fill="currentColor" d="M22.498 11.998h-9v5.633a3 3 0 0 0 1.36 2.512l3.14 2.052l3.14-2.052a3 3 0 0 0 1.36-2.512z"></svg:path>`,
})
export class TdesignMapSafetyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSearchIcon],svg[tdesign-map-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.886 1.859l8.086 3.537L22 2.382V10h-2V5.618l-3 1.5V10h-2V7.154L9 4.53v10.853l2.345 1.172l-.895 1.79l-2.406-1.204L2 20.766V5.98zM7 15.434V4.92l-3 2.1v10.213zM17.25 13.5a2.75 2.75 0 0 1 1.946 4.693l-.008.008a2.75 2.75 0 1 1-1.938-4.7m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412z"></svg:path>`,
})
export class TdesignMapSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSearch1Icon],svg[tdesign-map-search-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3c1.15 0 2 .887 2 2.09c0 .809-.523 1.662-1.227 2.405a9 9 0 0 1-.773.72a9 9 0 0 1-.773-.72C7.523 6.752 7 5.899 7 5.09C7 3.884 7.84 3 9 3m3.909 1.2C12.532 2.398 11.026 1 9 1C6.96 1 5.464 2.4 5.09 4.2H2V20h9v-2H4v-3.2l1.957-1.044L9.31 15.88l1.07-1.69l-4.337-2.746L4 12.534V6.2h1.155c.306 1.107 1.014 2.03 1.618 2.67a11 11 0 0 0 1.63 1.4l.033.022l.01.007l.003.002l.002.001l.549.36l.548-.359l.003-.002l.003-.002l.01-.007l.033-.022l.112-.078a11 11 0 0 0 1.517-1.323c.605-.639 1.313-1.562 1.62-2.669H20v4.3h2V4.2zm4.341 9.3a2.75 2.75 0 0 1 1.946 4.693l-.008.008a2.75 2.75 0 1 1-1.938-4.7m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412z"></svg:path>`,
})
export class TdesignMapSearch1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSearch1FilledIcon],svg[tdesign-map-search-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1c2.026 0 3.533 1.398 3.909 3.2H22v6.988a6.3 6.3 0 0 0-2-1.552V6.2h-7.155c-.306 1.107-1.014 2.03-1.619 2.67a11 11 0 0 1-1.517 1.322q-.255.178-.518.346L9 10.662l-.191-.124q-.264-.168-.518-.346a11 11 0 0 1-1.517-1.323C6.168 8.23 5.46 7.307 5.153 6.2H4v6.333l2.043-1.09l4.99 3.164A6.24 6.24 0 0 0 13.188 20H2V4.2h3.09C5.465 2.4 6.96 1 9 1M7 5.09c0 .809.523 1.662 1.227 2.405c.27.286.544.53.773.72c.23-.19.503-.434.773-.72C10.477 6.752 11 5.899 11 5.09C11 3.887 10.15 3 9 3c-1.16 0-2 .884-2 2.09"></svg:path><svg:path fill="currentColor" d="M17.25 12.5a2.75 2.75 0 0 1 1.946 4.693l-.008.008A2.75 2.75 0 1 1 17.25 12.5m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412z"></svg:path>`,
})
export class TdesignMapSearch1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSearchFilledIcon],svg[tdesign-map-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2.5 1.476V16.25a6.24 6.24 0 0 1 2.5-5V5.09l-5-2.952zM22 2.5v8.75A6.22 6.22 0 0 0 18.25 10c-.608 0-1.195.087-1.75.248v-5.48z"></svg:path><svg:path fill="currentColor" d="M23 16.25c0 .95-.278 1.833-.758 2.575l1.672 1.677l-1.416 1.412l-1.67-1.674A4.75 4.75 0 1 1 23 16.25m-2 0a2.75 2.75 0 1 0-.812 1.95l.008-.007A2.74 2.74 0 0 0 21 16.25"></svg:path>`,
})
export class TdesignMapSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSettingIcon],svg[tdesign-map-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5z"></svg:path><svg:path fill="currentColor" d="M19 12.75v1.376c.715.184 1.352.56 1.854 1.072l1.193-.689l1 1.732l-1.192.688a4 4 0 0 1 0 2.142l1.192.688l-1 1.732l-1.193-.689A4 4 0 0 1 19 21.874v1.376h-2v-1.376a4 4 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4 4 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.688A4 4 0 0 1 17 14.127V12.75zm-2.751 4.283a2 2 0 0 0-.25.967c0 .35.091.68.25.967l.036.063a2 2 0 0 0 3.43 0l.036-.063A2 2 0 0 0 20 18c0-.35-.09-.68-.249-.967l-.036-.063a2 2 0 0 0-3.43 0z"></svg:path>`,
})
export class TdesignMapSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSettingFilledIcon],svg[tdesign-map-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l1.75 1.033V18a6.75 6.75 0 0 1 3.25-5.773V5.091l-5-2.953zM22 2.5v10.062a6.77 6.77 0 0 0-5.5-1.145v-6.65zm-3 11.626V12.75h-2v1.376a4 4 0 0 0-1.854 1.072l-1.193-.689l-1 1.732l1.192.688a4 4 0 0 0 0 2.142l-1.192.688l1 1.732l1.193-.689A4 4 0 0 0 17 21.874v1.376h2v-1.376a4 4 0 0 0 1.854-1.072l1.192.689l1-1.732l-1.191-.688a4 4 0 0 0 0-2.142l1.191-.688l-1-1.732l-1.192.688A4 4 0 0 0 19 14.127m-2.715 2.844a2 2 0 0 1 3.43 0l.036.063c.159.287.249.616.249.967c0 .35-.09.68-.249.967l-.037.063a2 2 0 0 1-3.429 0l-.037-.063A2 2 0 0 1 16 18a2 2 0 0 1 .248-.967z"></svg:path>`,
})
export class TdesignMapSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapUnlockedIcon],svg[tdesign-map-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zM18 14c-.69 0-1.25.56-1.25 1.25V16h5.749v6.5h-9V16h1.251v-.75a3.25 3.25 0 0 1 5.541-2.305l.71.705l-1.41 1.418l-.71-.705A1.24 1.24 0 0 0 18 14m-2.501 4v2.5h5V18z"></svg:path>`,
})
export class TdesignMapUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMapUnlockedFilledIcon],svg[tdesign-map-unlocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2 1.18V16.5a6.5 6.5 0 0 1 3-5.478V5.09l-5-2.953zM22 2.5v8.876a6.52 6.52 0 0 0-5.5-1.202V4.767zm-5.25 12.75a1.25 1.25 0 0 1 2.131-.887l.71.705L21 13.65l-.71-.705a3.25 3.25 0 0 0-5.541 2.305V16h-1.251v6.5h9V16H16.75z"></svg:path>`,
})
export class TdesignMapUnlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMarkAsUnreadIcon],svg[tdesign-mark-as-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.5 1.34l7.744 4.555L16.23 7.62L9.5 3.66L2 8.072V20H0V6.928zM4 9h19v14H4zm3.992 2l5.508 3.787L19.008 11zM21 12.057l-7.5 5.157L6 12.057V21h15z"></svg:path>`,
})
export class TdesignMarkAsUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMarkAsUnreadFilledIcon],svg[tdesign-mark-as-unread-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 1.34L0 6.928V20h2V8.072L9.5 3.66l6.73 3.959l1.014-1.724z"></svg:path><svg:path fill="currentColor" d="M4 23V11.417l9.5 5.752l9.5-5.747V23z"></svg:path><svg:path fill="currentColor" d="M23 9v.085l-9.5 5.746L4 9.08V9z"></svg:path>`,
})
export class TdesignMarkAsUnreadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMarkupIcon],svg[tdesign-markup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-5.61 16.038L8.228 12H10V8.586l2-2l2 2V12h1.773l1.837 7.038A9 9 0 0 0 12 3m3.832 17.146L14.227 14H9.772l-1.604 6.146A9 9 0 0 0 12 21c1.372 0 2.67-.306 3.832-.854M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11a10.99 10.99 0 0 1-5.5 9.528A10.95 10.95 0 0 1 12 23a10.95 10.95 0 0 1-6.013-1.787A10.99 10.99 0 0 1 1 12"></svg:path>`,
})
export class TdesignMarkupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMarkupFilledIcon],svg[tdesign-markup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m5.61 18.038a9 9 0 0 1-1.778 1.108L14.228 14H9.773l-1.605 6.146a9 9 0 0 1-1.777-1.108L8.228 12H10V8.586l2-2l2 2V12h1.773z"></svg:path>`,
})
export class TdesignMarkupFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMathematicsIcon],svg[tdesign-mathematics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.125 1H22v22H2V1.83l10.125 10zm2 20H20v-1.333h-3.15v-2H20v-1.334h-3.15v-2H20V13h-3.15v-2H20V9.667h-3.15v-2H20V6.333h-3.15v-2H20V3h-5.875zm-2 0v-6.36L4 6.615V21z"></svg:path>`,
})
export class TdesignMathematicsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMathematicsFilledIcon],svg[tdesign-mathematics-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1H12v10.77L2 1.548V23h20v-2.5h-4v-2h4v-1.75h-4v-2h4V13h-4v-2h4V9.25h-4v-2h4V5.5h-4v-2h4zM12 14.63V21H4V6.452z"></svg:path>`,
})
export class TdesignMathematicsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurementIcon],svg[tdesign-measurement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1h12v22H6zm2 2v3h2.5v2H8v3h4v2H8v3h2.5v2H8v3h8V3z"></svg:path>`,
})
export class TdesignMeasurementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurement1Icon],svg[tdesign-measurement-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h10v10h10v10H2zm2 2v2.5h2.004v2H4V11h2.004v2H4v2.5h2.004v2H4V20h2.5v-1.967h2V20H11v-1.967h2V20h2.5v-1.967h2V20H20v-6H10V4z"></svg:path>`,
})
export class TdesignMeasurement1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurement1FilledIcon],svg[tdesign-measurement-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H2v4.5h2.004v2H2V11h2.004v2H2v2.5h2.004v2H2V22h4.5v-1.967h2V22H11v-1.967h2V22h2.5v-1.967h2V22H22V12H12z"></svg:path>`,
})
export class TdesignMeasurement1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurement2Icon],svg[tdesign-measurement-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.586L22.914 6L21.5 7.414l-2-2v13.172l2-2L22.914 18L18.5 22.414L14.086 18l1.414-1.414l2 2V5.414l-2 2L14.086 6zM2 2h10v20H2zm2 2v16h6V4z"></svg:path>`,
})
export class TdesignMeasurement2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurement2FilledIcon],svg[tdesign-measurement-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.586L22.914 6L21.5 7.414l-2-2v13.172l2-2L22.914 18L18.5 22.414L14.086 18l1.414-1.414l2 2V5.414l-2 2L14.086 6zM2 2h10v20H2z"></svg:path>`,
})
export class TdesignMeasurement2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurementFilledIcon],svg[tdesign-measurement-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1H6v5h3.5v2H6v3h5v2H6v3h3.5v2H6v5h12z"></svg:path>`,
})
export class TdesignMeasurementFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMeatPepperIcon],svg[tdesign-meat-pepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.212 5.727l-.97.243c-.999.25-1.848.8-2.456 1.364c.47.167.938.392 1.384.668c1.036.64 2.022 1.591 2.667 2.838c.858 1.657.543 3.303-.339 4.705c-.857 1.363-2.276 2.564-3.82 3.547c-1.56.992-3.323 1.812-4.958 2.385c-1.602.562-3.162.917-4.324.923c-1.294.07-2.364-.255-3.149-.934c-.578-.5-.94-1.139-1.138-1.809c-.67-.198-1.308-.56-1.808-1.138c-.679-.785-1.005-1.854-.934-3.15c.006-1.164.36-2.677.927-4.217a22.6 22.6 0 0 1 2.413-4.749C5.71 4.92 6.93 3.561 8.314 2.708c1.404-.864 3.036-1.236 4.725-.6c2.116.725 3.133 2.17 3.599 3.57c.822-.71 1.89-1.34 3.119-1.648l.97-.243zM17 9.178v1.472h-2V8c0-1.393-.432-3.26-2.621-4.003l-.018-.006l-.018-.007c-.968-.37-1.952-.205-2.98.427C8.31 5.06 7.28 6.165 6.365 7.522a20.6 20.6 0 0 0-2.194 4.32c-.534 1.454-.804 2.726-.804 3.557v.03l-.002.03c-.053.906.176 1.437.449 1.752c.28.325.71.54 1.268.613l.76.1l.1.76c.074.558.289.988.614 1.27c.315.271.846.501 1.752.448l.03-.002h.029c.835 0 2.162-.274 3.69-.81c1.51-.53 3.133-1.286 4.547-2.186c1.429-.909 2.57-1.918 3.2-2.923c.608-.966.71-1.848.257-2.722c-.455-.88-1.167-1.577-1.942-2.056A5.2 5.2 0 0 0 17 9.178"></svg:path>`,
})
export class TdesignMeatPepperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMeatPepperFilledIcon],svg[tdesign-meat-pepper-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.076 10.706c.35-1.109.583-2.184.667-3.181c.097-1.157-.001-2.279-.417-3.237a3.94 3.94 0 0 0-2.27-2.173c-1.694-.646-3.332-.275-4.741.593c-1.386.852-2.606 2.21-3.607 3.695a21 21 0 0 0-1.125 1.876a23 23 0 0 0-1.29 2.873c-.565 1.54-.92 3.054-.926 4.218c-.07 1.295.255 2.364.934 3.15c.5.578 1.138.94 1.808 1.137c.198.67.56 1.309 1.138 1.81c.785.678 1.855 1.004 3.15.933c1.16-.006 2.721-.36 4.323-.922c1.635-.574 3.399-1.394 4.958-2.386c1.544-.983 2.964-2.183 3.82-3.546c.882-1.403 1.197-3.049.34-4.706c-.646-1.247-1.632-2.198-2.668-2.838a7.3 7.3 0 0 0-1.384-.668c.608-.564 1.457-1.114 2.456-1.364l.97-.242l-.485-1.94l-.97.242c-1.228.307-2.294.936-3.115 1.645q.025.28.022.562c-.014 1.555-.631 3.192-1.588 4.47"></svg:path>`,
})
export class TdesignMeatPepperFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMediaLibraryIcon],svg[tdesign-media-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14v2H5zM3 5.5h18v2H3zM1 9h22v13H1zm2 2v9h18v-9zm6.75 1.469L15 15.5l-5.25 3.031z"></svg:path>`,
})
export class TdesignMediaLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMediaLibraryFilledIcon],svg[tdesign-media-library-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v2H5V2zM3 7.5h18v-2H3zM23 22V9H1v13zm-8-6.5l-5.25 3.031V12.47z"></svg:path>`,
})
export class TdesignMediaLibraryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMemberIcon],svg[tdesign-member-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m7 0h-1v2h1a3 3 0 1 1 0 6h-1v2h1a5 5 0 0 0 0-10M0 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-2v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2H0zm24 0a5 5 0 0 0-5-5h-1v2h1a3 3 0 0 1 3 3v2h2z"></svg:path>`,
})
export class TdesignMemberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMemberFilledIcon],svg[tdesign-member-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 7a5 5 0 1 1 10 0a5 5 0 0 1-10 0M5 14a5 5 0 0 0-5 5v2h17v-2a5 5 0 0 0-5-5zm19 7h-5v-2c0-1.959-.804-3.73-2.1-5H19a5 5 0 0 1 5 5zm-8.5-9a5 5 0 0 1-1.786-.329A6.97 6.97 0 0 0 15.5 7a6.97 6.97 0 0 0-1.787-4.671A5 5 0 1 1 15.5 12"></svg:path>`,
})
export class TdesignMemberFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuIcon],svg[tdesign-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v5.5h16V4zm16 7.5H4V20h16zM5.996 6H8v2h-.004v.004h-2zM10 6h8v2h-8z"></svg:path>`,
})
export class TdesignMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuApplicationIcon],svg[tdesign-menu-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h3v3H3zm7.5 0h3v3h-3zM18 3h3v3h-3zM3 10.5h3v3H3zm7.5 0h3v3h-3zm7.5 0h3v3h-3zM3 18h3v3H3zm7.5 0h3v3h-3zm7.5 0h3v3h-3z"></svg:path>`,
})
export class TdesignMenuApplicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuFilledIcon],svg[tdesign-menu-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v8H2zm6 2.998H5.996v2.004h2v-.004H8zm10 0h-8v2h8zM2 12h20v10H2z"></svg:path>`,
})
export class TdesignMenuFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuFoldIcon],svg[tdesign-menu-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v2H2zm0 5.57L5.887 12L2 14.43zM7 11h15v2H7zm-5 7h20v2H2z"></svg:path>`,
})
export class TdesignMenuFoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuUnfoldIcon],svg[tdesign-menu-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v2H2zm20 5.57v4.86L18.113 12zM2 13v-2h15v2zm0 7v-2h20v2z"></svg:path>`,
})
export class TdesignMenuUnfoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMergeCellsIcon],svg[tdesign-merge-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h7v-4h2v4h7V4h-7v4h-2V4zm13.182 6.232L15.414 12l1.768 1.768l-1.414 1.414L12.586 12l3.182-3.182zM8.33 8.818L11.512 12L8.33 15.182l-1.414-1.414L8.683 12l-1.767-1.768z"></svg:path>`,
})
export class TdesignMergeCellsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMergeCellsFilledIcon],svg[tdesign-merge-cells-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v20h9v-5h2v5h9V2h-9v5h-2zm6.182 8.232L15.415 12l1.767 1.768l-1.414 1.414L12.586 12l3.182-3.182zM8.33 8.818L11.512 12L8.33 15.182l-1.414-1.414L8.684 12l-1.768-1.767z"></svg:path>`,
})
export class TdesignMergeCellsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophoneIcon],svg[tdesign-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v6q0 .615-.12 1.199A6 6 0 0 1 13 19v1h5v2H6v-2h5v-1a6 6 0 0 1-6-6zm2 4.5V13h3v2H7.535A4 4 0 0 0 11 17h2a4 4 0 0 0 3.465-2H14v-2h3v-1.5h-3v-2h3V8h-3V6h2.874A4 4 0 0 0 13 3h-2a4 4 0 0 0-3.874 3H10v2H7v1.5h3v2z"></svg:path>`,
})
export class TdesignMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophone1Icon],svg[tdesign-microphone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0zm5-3a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3m-6 7v1a6 6 0 0 0 12 0v-1h2v1a8 8 0 0 1-7 7.938V20h5v2H6v-2h5v-1.062A8 8 0 0 1 4 11v-1z"></svg:path>`,
})
export class TdesignMicrophone1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophone1FilledIcon],svg[tdesign-microphone-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0zm-1 4v1a6 6 0 0 0 12 0v-1h2v1a8 8 0 0 1-7 7.938V20h5v2H6v-2h5v-1.062A8 8 0 0 1 4 11v-1z"></svg:path>`,
})
export class TdesignMicrophone1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophone2Icon],svg[tdesign-microphone-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a5 5 0 1 0 0 10a5 5 0 0 0 0-10M9.009 7.641a7 7 0 1 1 7.35 7.35l-9.224 7.282a1 1 0 0 1-.115.087a2 2 0 0 1-.295.167a2.3 2.3 0 0 1-1.001.207c-.851-.01-1.836-.433-2.93-1.527s-1.52-2.079-1.528-2.93a2.3 2.3 0 0 1 .207-1.002a2 2 0 0 1 .254-.41zm.4 2.722l-6.122 7.754a.4.4 0 0 0-.021.139c.001.16.077.674.94 1.537c.865.863 1.38.94 1.54.941a.4.4 0 0 0 .137-.02l7.754-6.123a7.02 7.02 0 0 1-4.228-4.228M10.414 15L8 17.414L6.586 16L9 13.586z"></svg:path>`,
})
export class TdesignMicrophone2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophone2FilledIcon],svg[tdesign-microphone-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.009 7.641a7 7 0 1 1 7.35 7.35l-9.224 7.282a1 1 0 0 1-.115.087a2 2 0 0 1-.295.167a2.3 2.3 0 0 1-1.001.207c-.851-.01-1.836-.433-2.93-1.527s-1.52-2.079-1.528-2.93a2.3 2.3 0 0 1 .207-1.002a2 2 0 0 1 .254-.41zm.4 2.722l-6.122 7.754a.4.4 0 0 0-.021.139c.001.16.077.674.94 1.537c.865.863 1.38.94 1.54.941a.4.4 0 0 0 .137-.02l7.754-6.123a7.02 7.02 0 0 1-4.228-4.228M10.414 15L8 17.414L6.586 16L9 13.586z"></svg:path>`,
})
export class TdesignMicrophone2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophoneFilledIcon],svg[tdesign-microphone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.189 5.5H9v2H5v2h4v2H5V13q0 .252.02.5H9v2H5.544A6 6 0 0 0 11 19v1H6v2h12v-2h-5v-1a6 6 0 0 0 5.456-3.5H15v-2h3.98q.02-.248.02-.5v-1.5h-4v-2h4v-2h-4v-2h3.811A6 6 0 0 0 13 1h-2a6 6 0 0 0-5.811 4.5"></svg:path>`,
})
export class TdesignMicrophoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMilkIcon],svg[tdesign-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.85 1H6.15v3.59L4 9.49V23h16V9.49l-2.15-4.9zm-.918 6.476L18 9.91V21h-1.95V9.878zM14.05 10.7V21H6V10.7zm-7.52-2l1.273-2.9h7.614l-1.065 2.9zm1.62-4.9V3h7.7v.8zM13 13h-1.426l-1.576 1.584L8.415 13H7v6h2v-2.586l1.002 1.002l.998-1.003V19h2z"></svg:path>`,
})
export class TdesignMilkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMilkFilledIcon],svg[tdesign-milk-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.15 1h11.7v3.59L20 9.49V23H4V9.49l2.15-4.9zM18 9.91l-1.068-2.434l-.882 2.402V21H18zM7.803 5.8L6.531 8.7h7.821l1.065-2.9zM8.15 3v.8h7.7V3zM13 13h-1.426l-1.576 1.584L8.415 13H7v6h2v-2.586l1.002 1.002l.998-1.003V19h2z"></svg:path>`,
})
export class TdesignMilkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMinusIcon],svg[tdesign-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.502 11h11v2h-11z"></svg:path>`,
})
export class TdesignMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMinusCircleIcon],svg[tdesign-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5.5-1h11v2h-11z"></svg:path>`,
})
export class TdesignMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMinusCircleFilledIcon],svg[tdesign-minus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m5.5 12v-2h-11v2z"></svg:path>`,
})
export class TdesignMinusCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMinusRectangleIcon],svg[tdesign-minus-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm2.5 7h11v2h-11z"></svg:path>`,
})
export class TdesignMinusRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMinusRectangleFilledIcon],svg[tdesign-minus-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm4.5 9v2h11v-2z"></svg:path>`,
})
export class TdesignMinusRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMirrorIcon],svg[tdesign-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v20h-2V2zM9 4.64V18.5H1.3zm6 0l7.7 13.86H15zM4.7 16.5H7v-4.14zM17 12.36v4.14h2.3z"></svg:path>`,
})
export class TdesignMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMirrorFilledIcon],svg[tdesign-mirror-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v20h-2V2zM9 4.64V18.5H1.3zm6 0l7.7 13.86H15z"></svg:path>`,
})
export class TdesignMirrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileIcon],svg[tdesign-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v22H4zm2 2v18h12V3zm5 14h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileBlockedIcon],svg[tdesign-mobile-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v4h-2V3H6v18h12v-2h2v4H4zm14 7.5a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18 8.5m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M12.5 12a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M11 17h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileBlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileBlockedFilledIcon],svg[tdesign-mobile-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v2.29A7 7 0 0 0 18 3H6v14h12c.695 0 1.366-.101 2-.29V23H4zm9.004 18H11v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M18 4.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M14.5 10a3.5 3.5 0 0 1 5.165-3.08l-4.744 4.745A3.5 3.5 0 0 1 14.5 10m1.835 3.08l4.744-4.745a3.5 3.5 0 0 1-4.745 4.745"></svg:path>`,
})
export class TdesignMobileBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileFilledIcon],svg[tdesign-mobile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1H4v22h16zm-6.996 16v2.004H11V17z"></svg:path>`,
})
export class TdesignMobileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileListIcon],svg[tdesign-mobile-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v5h-2V3H6v18h12v-5h2v7H4zm9 7h11v2H13zm0 4h8v2h-8zm-2 5h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileListFilledIcon],svg[tdesign-mobile-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v4h-2V3H6v14h12v-2h2v8H4zm9.004 18H11v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M24 7H13v2h11zm-3 4h-8v2h8z"></svg:path>`,
})
export class TdesignMobileListFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileNavigationIcon],svg[tdesign-mobile-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v22H4zm2 2v18h12V3zm6 1.764l4.946 9.892L12 13.11l-4.946 1.546zm-1.054 6.58l1.054-.33l1.054.33L12 9.236zM11 17h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileNavigationFilledIcon],svg[tdesign-mobile-navigation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v22H4zm7 16v2.004h2.004V17zm4.973-3.172L12 5.882l-3.973 7.946L12 12.586z"></svg:path>`,
})
export class TdesignMobileNavigationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileShortcutIcon],svg[tdesign-mobile-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 23H4V1h16v5h-2V3H6v18h12v-3h2zm-6.996-3.996H11V17h2.004zm8.883-2.717l1.568-.781l-1.568-.78l-.781-1.57l-.781 1.57l-1.57.78l1.57.78l.78 1.57zm-5.83-.986l-1.097-2.204L12.756 12l2.204-1.098l1.097-2.204l1.097 2.204L19.358 12l-2.204 1.097zm5.83-6.024l1.568-.78l-1.568-.782l-.781-1.568l-.781 1.568l-1.57.781l1.57.781l.78 1.569z"></svg:path>`,
})
export class TdesignMobileShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileShortcutFilledIcon],svg[tdesign-mobile-shortcut-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v4h-2V3H6v14h14v6H4zm9.004 18H11v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="m23.455 14.506l-1.569.78l-.78 1.57l-.782-1.57l-1.568-.78l1.569-.78l.78-1.57l.781 1.57zm-8.495-2.409l1.097 2.204l1.097-2.204l2.204-1.098l-2.204-1.097l-1.097-2.204l-1.097 2.204L12.756 11zm8.495-4.601l-1.569.781l-.78 1.569l-.782-1.569l-1.568-.78l1.569-.782l.78-1.569l.781 1.57z"></svg:path>`,
})
export class TdesignMobileShortcutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileVibrateIcon],svg[tdesign-mobile-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h14v22H5zm2 2v18h10V3zM4 5v14H2V5zm18 0v14h-2V5zM11 17h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileVibrateFilledIcon],svg[tdesign-mobile-vibrate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1H5v22h14zm-5.996 16v2.004H11V17zM4 19V5H2v14zm18 0V5h-2v14z"></svg:path>`,
})
export class TdesignMobileVibrateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignModeDarkIcon],svg[tdesign-mode-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428zm-5.432.814A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12m18.5-5.584l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914z"></svg:path>`,
})
export class TdesignModeDarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignModeDarkFilledIcon],svg[tdesign-mode-dark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.07 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.78-1.428zM2.226 12c0-5.523 4.477-10 10-10h1.734l-.868 1.5c-.579 1-.866 2.189-.866 3.5a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626A10 10 0 0 1 12.227 22c-5.523 0-10-4.477-10-10m18.5-5.584l.914 1.67L23.31 9l-1.67.914l-.914 1.67l-.913-1.67L18.143 9l1.67-.914z"></svg:path>`,
})
export class TdesignModeDarkFilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignModeLightIcon],svg[tdesign-mode-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.999-.004h2.004V2h-2.004zM4.223 2.803L5.64 4.22L4.223 5.637L2.806 4.22zm15.556 0l1.417 1.417l-1.417 1.417l-1.417-1.417zM12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0m-4.001-1.004h2.004V13H-.001zm22 0h2.004V13h-2.004zM4.223 18.36l1.417 1.417l-1.417 1.418l-1.417-1.418zm15.556 0l1.417 1.417l-1.417 1.417l-1.417-1.417zM11 21.997h2.004V24H11z"></svg:path>`,
})
export class TdesignModeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignModeLightFilledIcon],svg[tdesign-mode-light-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.226-.003h2.003V2h-2.003zM4.449 2.803L5.866 4.22L4.45 5.637L3.032 4.22zm15.557 0l1.417 1.417l-1.417 1.417l-1.418-1.417zm-15.78 9.198a8 8 0 1 1 16 0a8 8 0 0 1-16 0m-4-1.004h2.003V13H.226zm22 0h2.004V13h-2.004zM4.449 18.36l1.417 1.416l-1.417 1.418l-1.416-1.418zm15.557 0l1.416 1.416l-1.416 1.418l-1.418-1.418zm-8.78 3.637h2.003V24h-2.003z"></svg:path>`,
})
export class TdesignModeLightFilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignModuleIcon],svg[tdesign-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h7V4zm9 0v7h7V4zm7 9h-7v7h7z"></svg:path>`,
})
export class TdesignModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignModuleFilledIcon],svg[tdesign-module-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v20h9zm2 20h9v-9h-9zm9-11V2h-9v9z"></svg:path>`,
})
export class TdesignModuleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoneyIcon],svg[tdesign-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3 3 0 0 0 5.33 12h13.34a3 3 0 0 0 1.83 1.83v4.34A3 3 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"></svg:path>`,
})
export class TdesignMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoneyFilledIcon],svg[tdesign-money-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 16a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill="currentColor" d="m14.347.66l3.18 4.456l2.097-.715L21.538 10h.962v12h-21V10h.51v-.01l.648.006zM9.397 10h10.028l-1.037-3.033l-1.522.487zM7.839 8.417L15.55 5.79l-1.604-2.25zM5.5 12h-2v2a2 2 0 0 0 2-2m10 4a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0m5 4v-2a2 2 0 0 0-2 2zm-2-8a2 2 0 0 0 2 2v-2zm-15 8h2a2 2 0 0 0-2-2z"></svg:path>`,
})
export class TdesignMoneyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMonumentIcon],svg[tdesign-monument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v1h6V1h2v2.162l-1 3V15h1v3h2v5H5v-5h2v-3h1V6.162l-1-3V1zm1 6v8h4V7zm4.28-2l.333-1H9.387l.334 1zM9 17v1h6v-1zm8 3H7v1h10z"></svg:path>`,
})
export class TdesignMonumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMonumentFilledIcon],svg[tdesign-monument-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v1h6V1h2v2.162l-1 3V15h1v3h2v5H5v-5h2v-3h1V6.162l-1-3V1zm5.28 4l.333-1H9.387l.334 1zM9 17v1h6v-1zm8 3H7v1h10z"></svg:path>`,
})
export class TdesignMonumentFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonIcon],svg[tdesign-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.412 4.158A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.689 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12"></svg:path>`,
})
export class TdesignMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonFallIcon],svg[tdesign-moon-fall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.916 1.585l-.45 1.675c-.3 1.116-.27 2.337.07 3.604a7 7 0 0 0 9.84 4.476l1.541-.752l-.104 1.71c-.062 1.034-.374 2.06-.919 3.15l-.447.894l-1.789-.895l.448-.894q.198-.398.338-.76A9 9 0 0 1 8.604 7.38a9.6 9.6 0 0 1-.338-2.852a8 8 0 0 0-4.164 9.235c.016.061.085.251.173.48l.106.267l.033.082l.009.022l.003.007l.378.926l-1.852.756l-.378-.926l-.004-.01l-.01-.024l-.036-.09l-.113-.288a8 8 0 0 1-.24-.684C.74 8.947 3.906 3.464 9.24 2.034zM1 18h8.303L12 19.798L14.697 18H23v2h-7.697L12 22.202L8.697 20H1z"></svg:path>`,
})
export class TdesignMoonFallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonFallFilledIcon],svg[tdesign-moon-fall-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.916 1.692l-.45 1.674c-.3 1.116-.27 2.337.07 3.604a7 7 0 0 0 9.84 4.476l1.541-.752l-.104 1.711c-.062 1.034-.374 2.06-.919 3.149l-.276.553h-5.92L12 17.907l-2.697-1.8H2.828l-.304-.746l-.113-.288a8 8 0 0 1-.24-.685C.74 9.053 3.906 3.57 9.24 2.141zM1 18.107h8.303L12 19.905l2.697-1.798H23v2h-7.697L12 22.308l-3.303-2.201H1z"></svg:path>`,
})
export class TdesignMoonFallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonFilledIcon],svg[tdesign-moon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.689 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12"></svg:path>`,
})
export class TdesignMoonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonRisingIcon],svg[tdesign-moon-rising-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20h8.303L12 18.202L14.697 20H23v-2h-7.697L12 15.798L8.697 18H1zm19.447-3.658l.447-.895c.545-1.088.857-2.115.92-3.148l.103-1.711l-1.54.752a7 7 0 0 1-9.841-4.476c-.34-1.267-.37-2.488-.07-3.604l.45-1.675l-1.675.45c-5.334 1.429-8.5 6.912-7.07 12.247c.05.187.163.486.24.684l.113.288l.036.09l.01.024l.382.936l1.852-.756l-.381-.933l-.009-.022l-.033-.082l-.106-.268a7 7 0 0 1-.173-.479a8 8 0 0 1 4.164-9.235a9.6 9.6 0 0 0 .337 2.852a9 9 0 0 0 10.84 6.411a9 9 0 0 1-.337.76l-.448.895z"></svg:path>`,
})
export class TdesignMoonRisingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonRisingFilledIcon],svg[tdesign-moon-rising-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.465 3.26l.45-1.675l-1.675.45C3.906 3.463.74 8.946 2.17 14.281c.05.187.163.486.24.684l.113.288l.304.746H8.7l3.3-2.2l3.3 2.2h5.317l.277-.553c.544-1.088.856-2.115.919-3.148l.103-1.711l-1.54.752a7 7 0 0 1-9.841-4.476c-.34-1.267-.37-2.488-.07-3.604"></svg:path><svg:path fill="currentColor" d="M9.303 20H1v-2h7.697L12 15.798L15.303 18H23v2h-8.303L12 18.202z"></svg:path>`,
})
export class TdesignMoonRisingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoreIcon],svg[tdesign-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3h3v3h-3zm0 7.5h3v3h-3zm0 7.5h3v3h-3z"></svg:path>`,
})
export class TdesignMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMosqueIcon],svg[tdesign-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6.005 6.005 0 0 1 17.917 8H22v2h-1v12H3V10H2V8h4.083a6.005 6.005 0 0 1 4.919-4.917l.002-1.085zM8.126 8h7.748a4.002 4.002 0 0 0-7.748 0M5 10v10h3v-6h8v6h3V10zm9 10v-4h-4v4z"></svg:path>`,
})
export class TdesignMosqueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMosque1Icon],svg[tdesign-mosque-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.586l4 4v2.31q.185-.316.412-.62c.785-1.05 1.957-1.938 3.588-2.198V3.5h2v1.578c1.63.26 2.802 1.148 3.588 2.198c.658.88 1.05 1.873 1.252 2.724H22v12H2V5.586zM18.764 10a5.4 5.4 0 0 0-.777-1.526C17.367 7.644 16.437 7 15 7s-2.366.645-2.987 1.474A5.4 5.4 0 0 0 11.236 10zM10 12v8h2v-6h6v6h2v-8zm6 8v-4h-2v4zm-8 0V6.414l-2-2l-2 2V20zM7.004 8v2.004H5v-2h.004V8z"></svg:path>`,
})
export class TdesignMosque1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMosque1FilledIcon],svg[tdesign-mosque-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.004 10.004V8h-2v.004H5v2z"></svg:path><svg:path fill="currentColor" d="m10 5.586l-4-4l-4 4V22h9.5v-7h7v7H22V9.996h-1.025C20.727 7.5 18.661 5.486 16 5.076V3.5h-2v1.576c-1.667.256-3.1 1.143-4 2.383zM7.996 20H4V6.414l2-2l2 2z"></svg:path><svg:path fill="currentColor" d="M13.5 17v5h3v-5z"></svg:path>`,
})
export class TdesignMosque1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMosqueFilledIcon],svg[tdesign-mosque-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-2-.004L11 3.083a6.005 6.005 0 0 0-4.919 4.92h11.835A6.005 6.005 0 0 0 13 3.083zM22 10H2v2h1v10h5v-6h8v6h5V12h1z"></svg:path><svg:path fill="currentColor" d="M10 22v-4h4v4z"></svg:path>`,
})
export class TdesignMosqueFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMouseIcon],svg[tdesign-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9a8 8 0 1 1 16 0v6a8 8 0 1 1-16 0zm7-5.917A6 6 0 0 0 6 9h5zm2 0V9h5a6 6 0 0 0-5-5.917M18 11H6v4a6 6 0 0 0 12 0z"></svg:path>`,
})
export class TdesignMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMouseFilledIcon],svg[tdesign-mouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1.062A8 8 0 0 0 4 9h7zm2 0V9h7a8 8 0 0 0-7-7.938M20 11H4v4a8 8 0 1 0 16 0z"></svg:path>`,
})
export class TdesignMouseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMoveIcon],svg[tdesign-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.25h3v3h-3zm7.5 0h3v3h-3zm-7.5 5.5h3v3h-3zm7.5 0h3v3h-3zm-7.5 5.5h3v3h-3zm7.5 0h3v3h-3zm-7.5 5.5h3v3h-3zm7.5 0h3v3h-3z"></svg:path>`,
})
export class TdesignMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMove1Icon],svg[tdesign-move-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.086 12L5.5 7.586L6.914 9l-2 2H11V4.914l-2 2L7.586 5.5L12 1.086L16.414 5.5L15 6.914l-2-2V11h6.086l-2-2L18.5 7.586L22.914 12L18.5 16.414L17.086 15l2-2H13v6.086l2-2l1.414 1.414L12 22.914L7.586 18.5L9 17.086l2 2V13H4.914l2 2L5.5 16.414z"></svg:path>`,
})
export class TdesignMove1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMovieClapperIcon],svg[tdesign-movie-clapper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h4.865L5.532 4zm4.135 0l3.333 4h4.397l-3.333-4zm7 0l3.333 4H20V4zM20 10H4v10h16zm-5 4H9v-2h6z"></svg:path>`,
})
export class TdesignMovieClapperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMovieClapperFilledIcon],svg[tdesign-movie-clapper-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM4 8V4h1.532l3.333 4zm7.468 0L8.135 4h4.397l3.333 4zm7 0l-3.333-4H20v4zM9 14v-2h6v2z"></svg:path>`,
})
export class TdesignMovieClapperFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMultiplyIcon],svg[tdesign-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.818 7.404L12 10.586l3.182-3.182l1.414 1.414L13.414 12l3.182 3.182l-1.415 1.414L12 13.414l-3.182 3.182l-1.415-1.414L10.585 12L7.403 8.818z"></svg:path>`,
})
export class TdesignMultiplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseumIcon],svg[tdesign-museum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v4.327l4-.444V22H2V8.105l4-.444zm2 5.438l8-.889V4H8zM18 20h2v-5h-2zm2-7V8.117L4 9.895V20h12v-7zM6 10.998h2.004v2.004H6zm4 0h2.004v2.004H10z"></svg:path>`,
})
export class TdesignMuseumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseum1Icon],svg[tdesign-museum-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.765V20h2v-5h2v5h2V4.766A6.2 6.2 0 0 0 12 4c-1.089 0-2.11.277-3 .765m8 1.616v3.72A6.98 6.98 0 0 1 22 8h1v14H1V8h1c1.959 0 3.73.804 5 2.101v-3.72l-.033.03l-1.379-1.448l.724-.69q.526-.5 1.136-.904A8.2 8.2 0 0 1 12 2a8.22 8.22 0 0 1 5.69 2.276l.724.69l-1.38 1.448zM7 15a5 5 0 0 0-4-4.9V20h4zm10 5h4v-9.9a5 5 0 0 0-4 4.9zM11 6.998h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMuseum1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseum1FilledIcon],svg[tdesign-museum-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.101v-3.72l.034.033l1.38-1.448l-.724-.69A8.22 8.22 0 0 0 12 2a8.22 8.22 0 0 0-5.688 2.274l-.724.69l1.38 1.448L7 6.38v3.72A6.98 6.98 0 0 0 2 8H1v14h10v-7h2v7h10V8h-1c-1.959 0-3.73.804-5 2.101M3 10.1c2.282.463 4 2.481 4 4.9v5H3zM21 20h-4v-5a5 5 0 0 1 4-4.9zM13.004 6.998v2.004H11V6.998z"></svg:path>`,
})
export class TdesignMuseum1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseum2Icon],svg[tdesign-museum-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.798l4 2.667v6.355l12-2V22h-6v-4h-2v4H2V4.465zM4 5.535V20h8v-4h6v4h2v-8.82l-12 2V5.536L6 4.202z"></svg:path>`,
})
export class TdesignMuseum2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseum2FilledIcon],svg[tdesign-museum-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.798l4 2.667v6.355l12-2V22h-5v-4h-4v4H2V4.465z"></svg:path>`,
})
export class TdesignMuseum2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseumFilledIcon],svg[tdesign-museum-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v4.327l4-.444V14h-5v8H2V8.105l4-.444zm2 5.438l8-.889V4H8zm-2 3.56v2.004h2.004v-2.004zm4 0v2.004h2.004v-2.004z"></svg:path><svg:path fill="currentColor" d="M19 22h3v-6h-3z"></svg:path>`,
})
export class TdesignMuseumFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMushroomIcon],svg[tdesign-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.308 3.102C12.987 4.779 14.63 6 16.499 6c1.157 0 2.198-.405 2.985-1.091a5 5 0 0 0-.191-.202c-1.626-1.626-4.38-2.158-6.985-1.605m8.228 3.53A6.52 6.52 0 0 1 16.499 8c-2.79 0-5.161-1.826-6.096-4.278c-.842.38-1.593.882-2.196 1.485c-.381.381-.55.72-.6 1.035c-.051.317 0 .736.287 1.31c.097.193.34.52.737.955c.379.415.84.869 1.31 1.306l.014.012l4.22 4.22l.012.013q.107.116.222.236C15.337 11.822 17.704 10 20.5 10q.303 0 .599.027c.037-1.197-.15-2.372-.562-3.394m.294 5.38A5 5 0 0 0 20.5 12c-2.211 0-4.089 1.693-4.448 3.85c.161.125.282.199.395.255l.021.011c.566.283.979.331 1.292.28c.314-.052.652-.223 1.033-.603c.979-.98 1.68-2.304 2.038-3.781m-8.761 2.756l-2.837-2.837a45 45 0 0 1-.708.624c-.83.715-1.937 1.614-2.984 2.287l-.013.008l-.013.007l-.104.063c-.554.33-1.34.8-1.73 1.472a1.4 1.4 0 0 0-.173 1.05c.094.433.4 1.05 1.2 1.85c.8.801 1.418 1.107 1.851 1.2c.407.088.741.008 1.05-.172c.672-.39 1.142-1.176 1.472-1.73l.062-.105l.008-.012l.008-.013c.672-1.047 1.572-2.154 2.287-2.984a45 45 0 0 1 .624-.708m-4.27-4.24a20 20 0 0 1-.647-.673c-.412-.452-.82-.951-1.047-1.408c-.42-.84-.607-1.683-.475-2.518c.133-.837.567-1.541 1.162-2.136c1.086-1.086 2.48-1.871 3.968-2.347c3.323-1.064 7.432-.668 9.946 1.847c.348.348.656.73.923 1.135c1.308 1.98 1.689 4.551 1.36 6.917c-.307 2.21-1.244 4.323-2.783 5.862c-.59.591-1.291 1.026-2.123 1.162c-.832.137-1.674-.046-2.51-.464l-.021-.01c-.42-.21-.781-.486-1.22-.88a23 23 0 0 1-.86-.818c-.154.174-.328.37-.513.585c-.692.803-1.515 1.82-2.11 2.745l-.061.104c-.298.51-1.022 1.75-2.177 2.42a3.4 3.4 0 0 1-2.474.397c-.933-.2-1.878-.774-2.845-1.741s-1.54-1.912-1.74-2.845a3.4 3.4 0 0 1 .397-2.474c.67-1.155 1.91-1.88 2.42-2.177l.103-.061c.924-.595 1.942-1.418 2.745-2.11c.213-.184.41-.357.582-.511"></svg:path>`,
})
export class TdesignMushroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMushroom1Icon],svg[tdesign-mushroom-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.543 5.455c-4.052-4.054-7.822-3.49-9.015-2.298c-.276.276-.395.647-.166 1.36c.244.758.841 1.713 1.761 2.838c.737.902 1.642 1.868 2.648 2.873c1.005 1.006 1.97 1.91 2.872 2.648c1.126.92 2.08 1.516 2.84 1.76c.711.23 1.083.11 1.358-.165c1.193-1.193 1.755-4.962-2.298-9.016M8.113 1.743C10.437-.58 15.526-.393 19.959 4.04c4.432 4.434 4.62 9.522 2.298 11.844c-.974.973-2.218 1.031-3.387.655c-.869-.28-1.778-.817-2.691-1.492q-.224.328-.468.742a49 49 0 0 0-.95 1.723l-.207.388c-.796 1.484-1.735 3.182-2.905 4.349c-.958.956-2.186 1.803-3.787 1.747c-1.57-.055-3.214-.969-5.051-2.81C.973 19.349.06 17.704.003 16.137c-.058-1.602.789-2.828 1.747-3.786c1.167-1.168 2.865-2.106 4.348-2.903l.384-.205a49 49 0 0 0 1.726-.953q.414-.244.743-.468c-.675-.913-1.213-1.823-1.493-2.692c-.376-1.168-.318-2.413.656-3.386m2.103 7.635c-.313.22-.649.431-.991.633c-.564.333-1.19.668-1.81 1l-.37.198c-1.53.822-2.957 1.63-3.881 2.555c-.8.8-1.19 1.515-1.163 2.3c.03.82.525 2.009 2.224 3.71c1.698 1.702 2.886 2.196 3.706 2.224c.786.028 1.503-.365 2.305-1.164c.925-.923 1.733-2.349 2.554-3.878l.2-.375c.332-.62.666-1.244.998-1.806c.202-.343.412-.68.633-.993a48 48 0 0 1-2.265-2.14a48 48 0 0 1-2.14-2.264"></svg:path>`,
})
export class TdesignMushroom1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMushroom1FilledIcon],svg[tdesign-mushroom-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.114 1.743C10.436-.58 15.525-.393 19.958 4.04s4.62 9.522 2.298 11.844c-.974.973-2.218 1.031-3.387.655c-.869-.28-1.778-.817-2.691-1.492q-.224.328-.468.742a49 49 0 0 0-.95 1.723l-.207.388c-.796 1.484-1.735 3.182-2.905 4.349c-.958.956-2.186 1.803-3.787 1.747c-1.57-.055-3.214-.969-5.051-2.81C.973 19.349.06 17.704.003 16.137c-.058-1.602.789-2.828 1.747-3.786c1.167-1.168 2.865-2.106 4.348-2.903l.384-.205a49 49 0 0 0 1.726-.953q.414-.244.743-.468c-.675-.913-1.213-1.823-1.493-2.692c-.376-1.168-.318-2.413.656-3.386m2.102 7.635c-.313.22-.649.431-.991.633c-.564.333-1.19.668-1.81 1l-.37.198c-1.53.822-2.957 1.63-3.881 2.555c-.8.8-1.19 1.515-1.163 2.3c.03.82.525 2.009 2.224 3.71c1.698 1.702 2.886 2.196 3.706 2.224c.786.028 1.503-.365 2.305-1.164c.925-.923 1.733-2.349 2.554-3.878l.2-.375c.332-.62.666-1.244.998-1.806c.202-.343.412-.68.633-.993a48 48 0 0 1-2.265-2.14a48 48 0 0 1-2.14-2.264"></svg:path>`,
})
export class TdesignMushroom1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMushroomFilledIcon],svg[tdesign-mushroom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.793 3.793c.9-.9 2.011-1.593 3.212-2.075a6.55 6.55 0 0 0 12.006 3.35c.868 1.63 1.19 3.568 1.065 5.437a6.55 6.55 0 0 0-9.074 6.205c-.171-.162-.35-.335-.528-.513c-.155.174-.329.37-.514.585c-.692.803-1.515 1.82-2.11 2.745l-.061.104c-.298.51-1.022 1.75-2.177 2.42a3.4 3.4 0 0 1-2.474.397c-.933-.2-1.878-.774-2.845-1.741s-1.54-1.912-1.74-2.845a3.4 3.4 0 0 1 .397-2.474c.67-1.155 1.91-1.88 2.42-2.177l.103-.061c.924-.595 1.942-1.418 2.745-2.11c.213-.184.41-.357.582-.511a20 20 0 0 1-.647-.674c-.412-.452-.82-.951-1.047-1.408c-.42-.84-.607-1.683-.475-2.518c.133-.837.567-1.541 1.162-2.136m5.276 10.975l-2.837-2.837a45 45 0 0 1-.708.624c-.83.715-1.937 1.614-2.984 2.287l-.013.008l-.013.007l-.104.063c-.554.33-1.34.8-1.73 1.472a1.4 1.4 0 0 0-.173 1.05c.094.433.4 1.05 1.2 1.85c.8.801 1.418 1.107 1.851 1.2c.407.088.741.008 1.05-.172c.672-.39 1.142-1.176 1.472-1.73l.062-.105l.008-.012l.008-.013c.672-1.047 1.572-2.154 2.287-2.984a45 45 0 0 1 .624-.708"></svg:path><svg:path fill="currentColor" d="M16.234 18.184c.618.213 1.236.286 1.85.185c.832-.136 1.532-.571 2.123-1.162c1.254-1.254 2.108-2.888 2.548-4.646l-.23-.111a4.55 4.55 0 0 0-6.438 4.99zm4.473-14.891l.015.015l-.182.33A4.55 4.55 0 0 1 12 1.45v-.326c3.057-.615 6.497-.04 8.707 2.169"></svg:path>`,
})
export class TdesignMushroomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMusicIcon],svg[tdesign-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2.913V18a3 3 0 1 1-2-2.83v-5.083L8 10.92V19a3 3 0 1 1-2-2.83V4.08zM6 19a1 1 0 1 0-2 0a1 1 0 0 0 2 0M8 8.913l10-.833V5.087L8 5.92zM18 18a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class TdesignMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMusic1Icon],svg[tdesign-music-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 .847V17a4 4 0 1 1-2-3.465V3.153L8 4.867V19a4 4 0 1 1-2-3.465V3.133zM6 19a2 2 0 1 0-4 0a2 2 0 0 0 4 0m14-2a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path>`,
})
export class TdesignMusic1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMusic1FilledIcon],svg[tdesign-music-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 .847V17a4 4 0 1 1-2-3.465V3.153L8 4.867V19a4 4 0 1 1-2-3.465V3.133z"></svg:path>`,
})
export class TdesignMusic1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMusic2Icon],svg[tdesign-music-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h7v2h-5v13a4 4 0 1 1-2-3.465zm0 15a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path>`,
})
export class TdesignMusic2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMusic2FilledIcon],svg[tdesign-music-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h7v2h-5v13a4 4 0 1 1-2-3.465z"></svg:path>`,
})
export class TdesignMusic2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMusicFilledIcon],svg[tdesign-music-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2.913V18a3 3 0 1 1-2-2.83V8.088L8 8.92V19a3 3 0 1 1-2-2.83V4.08z"></svg:path>`,
})
export class TdesignMusicFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMusicRectangleAddIcon],svg[tdesign-music-rectangle-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v11h-2V4H4v16h9v2H2zm10 5h4v2h-2v5a3 3 0 1 1-2-2.83zm0 7a1 1 0 1 0-2 0a1 1 0 0 0 2 0m8 1v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class TdesignMusicRectangleAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignMusicRectangleAddFilledIcon],svg[tdesign-music-rectangle-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h12.39A5.5 5.5 0 0 1 22 14.39zm-7 5v2h-2v5.5a2.5 2.5 0 1 1-2-2.45V7z"></svg:path><svg:path fill="currentColor" d="M20 20h3v-2h-3v-3h-2v3h-3v2h3v3h2z"></svg:path>`,
})
export class TdesignMusicRectangleAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNavigationArrowIcon],svg[tdesign-navigation-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.764l9.946 19.892L12 18.548l-9.946 3.108zm0 4.472L5.946 18.344L12 16.452l6.054 1.892z"></svg:path>`,
})
export class TdesignNavigationArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNavigationArrowFilledIcon],svg[tdesign-navigation-arrow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.764l9.946 19.892L12 18.548l-9.946 3.108z"></svg:path>`,
})
export class TdesignNavigationArrowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNextIcon],svg[tdesign-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 4.336L14.414 12L6.75 19.664zM17.5 5v14h-2V5zM8.75 9.164v5.672L11.586 12z"></svg:path>`,
})
export class TdesignNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNextFilledIcon],svg[tdesign-next-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 4.336L14.414 12L6.75 19.664zM17.5 5v14h-2V5z"></svg:path>`,
})
export class TdesignNextFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNoExpressionIcon],svg[tdesign-no-expression-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8z"></svg:path>`,
})
export class TdesignNoExpressionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNoExpressionFilledIcon],svg[tdesign-no-expression-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4z"></svg:path>`,
})
export class TdesignNoExpressionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNoodleIcon],svg[tdesign-noodle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h7v2h-1v5h1v2c0 5.523-4.477 10-10 10S2 17.523 2 12v-2h1a6 6 0 1 1 12 0h1V5h-1zm3 2v5h1V5zM4 12a8 8 0 1 0 16 0zm1-2h1a3 3 0 0 1 6 0h1a4 4 0 0 0-8 0m5 0a1 1 0 0 0-2 0z"></svg:path>`,
})
export class TdesignNoodleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNoodleFilledIcon],svg[tdesign-noodle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h7v2h-1v5h1v2c0 5.523-4.477 10-10 10S2 17.523 2 12v-2h1a6 6 0 1 1 12 0h1V5h-1zm3 2v5h1V5zM5 10h1a3 3 0 0 1 6 0h1a4 4 0 0 0-8 0m5 0a1 1 0 0 0-2 0z"></svg:path>`,
})
export class TdesignNoodleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationIcon],svg[tdesign-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20h-5.611a4.502 4.502 0 0 1-8.777 0H2v-4.303l2-3zm5.708 12a2.5 2.5 0 0 0 4.584 0zM12 2a6 6 0 0 0-6 6v5.303l-2 3V18h16v-1.697l-2-3V8a6 6 0 0 0-6-6"></svg:path>`,
})
export class TdesignNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationAddIcon],svg[tdesign-notification-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20h-5.611a4.502 4.502 0 0 1-8.777 0H2v-4.303l2-3zm5.708 12a2.5 2.5 0 0 0 4.584 0zM12 2a6 6 0 0 0-6 6v5.303l-2 3V18h16v-1.697l-2-3V8a6 6 0 0 0-6-6m1 4v3h3v2h-3v3h-2v-3H8V9h3V6z"></svg:path>`,
})
export class TdesignNotificationAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationAddFilledIcon],svg[tdesign-notification-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20H2v-4.303l2-3zm9 1V6h-2v3H8v2h3v3h2v-3h3V9zM8.645 21a3.502 3.502 0 0 0 6.71 0z"></svg:path>`,
})
export class TdesignNotificationAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationCircleIcon],svg[tdesign-notification-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-9.268 5a2 2 0 0 1-3.464 0H6v-2.736l1-2V10a5 5 0 0 1 10 0v2.264l1 2V17zM8 15h8v-.264l-1-2V10a3 3 0 1 0-6 0v2.736l-1 2z"></svg:path>`,
})
export class TdesignNotificationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationCircleFilledIcon],svg[tdesign-notification-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M6.5 16.5h3.378a2.25 2.25 0 0 0 4.244 0H17.5v-1.618l-1-2V10.5a4.5 4.5 0 1 0-9 0v2.382l-1 2z"></svg:path>`,
})
export class TdesignNotificationCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationErrorIcon],svg[tdesign-notification-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20h-5.611a4.502 4.502 0 0 1-8.777 0H2v-4.303l2-3zm16 10v-1.697l-2-3V8A6 6 0 0 0 6 8v5.303l-2 3V18zm-5.708 2H9.708a2.5 2.5 0 0 0 4.584 0M13 6v6h-2V6zm-2 7.5h2.004v2.004H11z"></svg:path>`,
})
export class TdesignNotificationErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationErrorFilledIcon],svg[tdesign-notification-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20H2v-4.303l2-3zm7-2v6h2V6zm2.004 7.5H11v2.004h2.004zM8.645 21a3.502 3.502 0 0 0 6.71 0z"></svg:path>`,
})
export class TdesignNotificationErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationFilledIcon],svg[tdesign-notification-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.645 20.5a3.502 3.502 0 0 0 6.71 0zM3 19.5h18v-3l-2-3v-5a7 7 0 1 0-14 0v5l-2 3z"></svg:path>`,
})
export class TdesignNotificationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers0Icon],svg[tdesign-numbers-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zM9 6h6v12H9z"></svg:path>`,
})
export class TdesignNumbers0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers01Icon],svg[tdesign-numbers-0-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9a5 5 0 0 0-5-5h-1v.1A5 5 0 0 0 7 9v6a5 5 0 0 0 10 0zm-5-3a3 3 0 0 1 3 3v6a3 3 0 1 1-6 0V9a3 3 0 0 1 3-3"></svg:path>`,
})
export class TdesignNumbers01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers1Icon],svg[tdesign-numbers-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h-2V6a2 2 0 0 0-2-2H9v2h2v12H9v2h6z"></svg:path>`,
})
export class TdesignNumbers1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers11Icon],svg[tdesign-numbers-1-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20V3.5h-1.834L8.1 5.8l1.2 1.6L11 6.125V20z"></svg:path>`,
})
export class TdesignNumbers11Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers2Icon],svg[tdesign-numbers-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9v5h8v2H7v-7a2 2 0 0 1 2-2h6V6H7z"></svg:path>`,
})
export class TdesignNumbers2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers21Icon],svg[tdesign-numbers-2-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a5 5 0 0 1 5-5h1v.1c2.282.463 4 2.481 4 4.9v.065c0 1.525-.687 2.97-1.871 3.931L9 16.976V18h8v2H7v-3.024a2 2 0 0 1 .739-1.552l6.129-4.98A3.07 3.07 0 0 0 15 8.065V8a3 3 0 1 0-6 0v1H7z"></svg:path>`,
})
export class TdesignNumbers21Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers3Icon],svg[tdesign-numbers-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7v-2h8v-5H8v-2h7V6H7z"></svg:path>`,
})
export class TdesignNumbers3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers31Icon],svg[tdesign-numbers-3-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4h9v3.02l-4.264 2.986A5 5 0 0 1 12 20h-.5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3h.5a3 3 0 1 0 0-6H9.5V9.48L14.47 6H7.5z"></svg:path>`,
})
export class TdesignNumbers31Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers4Icon],svg[tdesign-numbers-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4v8h7V4h2v16h-2v-6h-7a2 2 0 0 1-2-2V4z"></svg:path>`,
})
export class TdesignNumbers4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers41Icon],svg[tdesign-numbers-4-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.989 4H15.5v10h2v2h-2v4h-2v-4H6v-2.323zm.511 10V6.708L8.234 14z"></svg:path>`,
})
export class TdesignNumbers41Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers5Icon],svg[tdesign-numbers-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H7v7a2 2 0 0 0 2 2h6v5H7v2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9V6h8z"></svg:path>`,
})
export class TdesignNumbers5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers51Icon],svg[tdesign-numbers-5-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4H16v2H9.5v4H12a5 5 0 0 1 4.9 4h.1v1a5 5 0 0 1-5 5h-.5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3h.5a3 3 0 1 0 0-6H7.5z"></svg:path>`,
})
export class TdesignNumbers51Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers6Icon],svg[tdesign-numbers-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9V6h7.5zM9 13h6v5H9z"></svg:path>`,
})
export class TdesignNumbers6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers61Icon],svg[tdesign-numbers-6-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.42 3.5h2.31l-3.473 6.052Q11.621 9.5 12 9.5a5.25 5.25 0 1 1-4.316 2.261zm-3.4 9.953a3.25 3.25 0 1 0 .354-.617z"></svg:path>`,
})
export class TdesignNumbers61Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers7Icon],svg[tdesign-numbers-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h10.5v3.113a2 2 0 0 1-.52 1.346l-4.48 4.928V20h-2v-6.613a2 2 0 0 1 .52-1.346l4.48-4.928V6H7z"></svg:path>`,
})
export class TdesignNumbers7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers71Icon],svg[tdesign-numbers-7-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4h10v2.203L11.663 20H9.488l5.926-14H7.5z"></svg:path>`,
})
export class TdesignNumbers71Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers8Icon],svg[tdesign-numbers-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zM9 6h6v5H9zm0 7h6v5H9z"></svg:path>`,
})
export class TdesignNumbers8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers81Icon],svg[tdesign-numbers-8-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m2.857 5.396a5 5 0 1 1-5.714 0a4.25 4.25 0 1 1 5.714 0M12 12a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class TdesignNumbers81Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers9Icon],svg[tdesign-numbers-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6v5H7.5v2H15a2 2 0 0 0 2-2zm-2 5H9V6h6z"></svg:path>`,
})
export class TdesignNumbers9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers91Icon],svg[tdesign-numbers-9-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.582 20.5H9.273l3.473-6.052a5.25 5.25 0 1 1 3.573-2.209zm3.402-9.953a3.25 3.25 0 1 0-.354.617z"></svg:path>`,
})
export class TdesignNumbers91Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNutIcon],svg[tdesign-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.474 4.805c.413-.623.83-1.38 1.077-2.121l1.898.632c-.36 1.078-.97 2.122-1.52 2.906c1.067 1.222 1.953 2.874 2.343 4.59c.468 2.067.243 4.4-1.494 6.138l-2.121 2.121l-.726-.726c-1.898 1.704-4.095 2.964-6.264 3.488c-2.468.596-4.998.25-6.874-1.626s-2.222-4.406-1.626-6.874c.524-2.169 1.784-4.366 3.488-6.264l-.726-.726L7.05 4.222c1.727-1.727 4.06-1.95 6.11-1.5a10.7 10.7 0 0 1 4.314 2.083M16.217 6.36a8.7 8.7 0 0 0-3.486-1.685c-1.646-.362-3.185-.121-4.266.96l-.708.707l5.364 5.364h3.415v3.414l1.12 1.121l.708-.707c1.092-1.091 1.331-2.629.957-4.28c-.29-1.281-.934-2.527-1.695-3.474c-.207.214-.424.431-.653.66l-.023.023l-1.414-1.414c.257-.257.48-.481.681-.69m-.703 10.567l-.978-.978v-2.243h-2.243L7.072 8.486c-1.49 1.681-2.536 3.56-2.96 5.317c-.484 2-.153 3.742 1.095 4.99s2.99 1.58 4.99 1.096c1.757-.425 3.636-1.47 5.317-2.96"></svg:path>`,
})
export class TdesignNutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignNutFilledIcon],svg[tdesign-nut-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.765 2.368l-.316.948c-.36 1.078-.97 2.122-1.52 2.906c1.067 1.223 1.953 2.874 2.343 4.591c.468 2.067.243 4.4-1.494 6.137l-2.121 2.121l-.726-.726c-1.898 1.704-4.095 2.964-6.264 3.488c-2.468.597-4.998.25-6.874-1.626s-2.222-4.406-1.626-6.874c.524-2.169 1.784-4.366 3.488-6.263l-.726-.727l2.121-2.12c1.727-1.727 4.06-1.951 6.11-1.5c1.6.352 3.143 1.131 4.314 2.082c.413-.623.83-1.38 1.077-2.121l.317-.949zm-5.25 14.56l-.98-.978v-2.243h-2.242L7.072 8.486c-1.49 1.681-2.536 3.56-2.96 5.317c-.484 2-.153 3.742 1.095 4.99s2.99 1.58 4.99 1.096c1.757-.425 3.636-1.47 5.317-2.96"></svg:path>`,
})
export class TdesignNutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignObjectStorageIcon],svg[tdesign-object-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a5 5 0 0 0-5 5v2H6c-.78 0-1.805.302-2.62.964C2.598 12.6 2 13.572 2 15c0 1.414.615 2.388 1.42 3.032c.836.67 1.866.968 2.58.968c.973 0 2.239-.015 3.263-.521c.485-.24.9-.585 1.203-1.097c.306-.517.534-1.27.534-2.382v-1.086l-1.5 1.5L8.086 14L12 10.086L15.914 14L14.5 15.414l-1.5-1.5V15c0 1.387-.286 2.51-.812 3.4a4.8 4.8 0 0 1-2.04 1.872C8.674 21 6.979 21 6.056 21H6c-1.168 0-2.638-.452-3.83-1.407C.943 18.613 0 17.086 0 15c0-2.072.903-3.6 2.12-4.589A6.45 6.45 0 0 1 5 9.093V9a7 7 0 0 1 14 0v.093a6.45 6.45 0 0 1 2.88 1.318C23.099 11.401 24 12.928 24 15c0 2.076-.907 3.614-2.205 4.607C20.529 20.575 18.93 21 17.5 21h-4v-2h4c1.07 0 2.221-.325 3.08-.982C21.407 17.386 22 16.424 22 15c0-1.428-.598-2.4-1.38-3.036C19.804 11.302 18.78 11 18 11h-1V9a5 5 0 0 0-5-5"></svg:path>`,
})
export class TdesignObjectStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOpenMouthIcon],svg[tdesign-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zM7 13h10v5H7zm2 2v1h6v-1z"></svg:path>`,
})
export class TdesignOpenMouthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOpenMouthFilledIcon],svg[tdesign-open-mouth-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm0 6v-4H7v4z"></svg:path>`,
})
export class TdesignOpenMouthFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOperaIcon],svg[tdesign-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.498 5h1.5c3.66 0 6.065 1.464 7.578 3.51c1.01 1.365 1.593 2.947 1.933 4.43a10.3 10.3 0 0 1 2.169-1.238a12.4 12.4 0 0 1 1.943-.642c.528-.123 1.067-.21 1.6-.312l-1.376 8.253L2.217 19l-1.5-6h1.28c1.022 0 1.899.105 2.596.236l-.921-3.225h1.326c1.296 0 2.554.231 3.503.467a38 38 0 0 0-1.426-4.094zm2.587 7.723c-.24-.078-.559-.174-.932-.27a15 15 0 0 0-1.804-.35L7.751 17h2.125q-.035-.26-.081-.573a47 47 0 0 0-.71-3.705M11.893 17h4.086a24 24 0 0 0-.124-1.884c-.21-1.79-.718-3.838-1.887-5.418c-.927-1.253-2.31-2.27-4.464-2.592a44 44 0 0 1 1.398 4.613a49 49 0 0 1 .99 5.281m6.087 0h2.17l.596-3.575q-.138.054-.284.116c-.894.381-1.872.953-2.578 1.763c.052.568.08 1.164.094 1.642zM5.67 17l-.445-1.555a9 9 0 0 0-.5-.136a11 11 0 0 0-1.43-.242L3.778 17z"></svg:path>`,
})
export class TdesignOperaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOperaFilledIcon],svg[tdesign-opera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.499 5h1.5c3.661 0 6.066 1.464 7.579 3.51c1.009 1.365 1.592 2.947 1.933 4.43c1.68-1.275 3.67-1.8 5.71-2.191l-1.375 8.262l-19.628-.001L.718 13h1.28c1.022 0 1.899.105 2.597.236l-.922-3.225H5c1.296 0 2.554.231 3.503.467a38 38 0 0 0-1.426-4.094zm2.592 7.724a16 16 0 0 0-.937-.27a15 15 0 0 0-1.803-.351l1.402 4.908h2.133l-.005-.052c-.101-.95-.148-1.389-.226-1.831c-.077-.443-.184-.871-.414-1.798zM5.673 17.01l-.447-1.564a9 9 0 0 0-.5-.136a11 11 0 0 0-1.43-.242l.484 1.942zm12.308 0h2.17l.597-3.584a10 10 0 0 0-.285.116c-.894.381-1.872.953-2.577 1.764a29 29 0 0 1 .095 1.704"></svg:path>`,
})
export class TdesignOperaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOrderAdjustmentColumnIcon],svg[tdesign-order-adjustment-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v8h5.586l-2-2L18 7.586L22.414 12L18 16.414L16.586 15l2-2H13v8h-2v-8H5.414l2 2L6 16.414L1.586 12L6 7.586L7.414 9l-2 2H11V3z"></svg:path>`,
})
export class TdesignOrderAdjustmentColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOrderAscendingIcon],svg[tdesign-order-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2.586L23.414 7L22 8.414l-2-2V20h-2V6.414l-2 2L14.586 7zM2 4h11v2H2zm0 7h13v2H2zm0 7h13v2H2z"></svg:path>`,
})
export class TdesignOrderAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOrderDescendingIcon],svg[tdesign-order-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h13v2H2zm0 7h13v2H2zm1 7H2v2h11v-2zm16 3.414l.707-.707l3-3l.707-.707L22 15.586l-.707.707L20 17.586V4h-2v13.586l-1.293-1.293l-.707-.707L14.586 17l.707.707l3 3z"></svg:path>`,
})
export class TdesignOrderDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOutboxIcon],svg[tdesign-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zm-2 14.5V20H4v-3.5h3.67A5 5 0 0 0 12 19a5 5 0 0 0 4.33-2.5zm-16-2V4h16v10.5h-4.965l-.253.625a3.001 3.001 0 0 1-5.564 0l-.253-.625zm8-9.414L7.586 9.5L9 10.914l2-2V14h2V8.914l2 2L16.414 9.5z"></svg:path>`,
})
export class TdesignOutboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignOutboxFilledIcon],svg[tdesign-outbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM4 14.5V4h16v10.5h-4.965l-.253.625a3.001 3.001 0 0 1-5.564 0l-.253-.625zm8-9.414L7.586 9.5L9 10.914l2-2V14h2V8.914l2 2L16.414 9.5z"></svg:path>`,
})
export class TdesignOutboxFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPageFirstIcon],svg[tdesign-page-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5v14h-2V5zm9.164 1.75L12.414 12l5.25 5.25l-1.414 1.414L9.586 12l6.664-6.664z"></svg:path>`,
})
export class TdesignPageFirstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPageHeadIcon],svg[tdesign-page-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10v12h-2V12H5v10H3V10zm0-8v6H3V2zm-2 2H5v2h14z"></svg:path>`,
})
export class TdesignPageHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPageHeadFilledIcon],svg[tdesign-page-head-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10v12h-2V12H5v10H3V10zm0-8v6H3V2z"></svg:path>`,
})
export class TdesignPageHeadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPageLastIcon],svg[tdesign-page-last-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 5v14h-2V5zm-9.75.336L14.414 12L7.75 18.664L6.336 17.25l5.25-5.25l-5.25-5.25z"></svg:path>`,
})
export class TdesignPageLastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalaceIcon],svg[tdesign-palace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v1.126c1.725.444 3 2.01 3 3.874h3v2h-1v1h4v2h-1v8h1v2H2v-2h1v-8H2v-2h4V9H5V7h3a4 4 0 0 1 3-3.874V2zM8 9v1h8V9zm6-2a2 2 0 1 0-4 0zm-9 5v8h3v-2a4 4 0 0 1 8 0v2h3v-8zm9 8v-2a2 2 0 1 0-4 0v2z"></svg:path>`,
})
export class TdesignPalaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace1Icon],svg[tdesign-palace-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6 6 0 0 1 18 9h4v13H2V9h4a6 6 0 0 1 5.002-5.917l.002-1.085zM8 9h8a4 4 0 0 0-8 0m2.998-3.002h2.004v2.004h-2.004zM4 11v9h1v-3a3 3 0 1 1 6 0v3h2v-3a3 3 0 1 1 6 0v3h1v-9zm13 9v-3a1 1 0 1 0-2 0v3zm-8 0v-3a1 1 0 1 0-2 0v3z"></svg:path>`,
})
export class TdesignPalace1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace1FilledIcon],svg[tdesign-palace-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6 6 0 0 1 18 9h4v13h-2v-4.5a3.5 3.5 0 1 0-7 0V22h-2v-4.5a3.5 3.5 0 1 0-7 0V22H2V9h4a6 6 0 0 1 5.002-5.917l.002-1.085zm-2.006 3.996v2.004h2.004V5.998z"></svg:path><svg:path fill="currentColor" d="M7.5 16A1.5 1.5 0 0 0 6 17.5V22h3v-4.5A1.5 1.5 0 0 0 7.5 16m9 0a1.5 1.5 0 0 0-1.5 1.5V22h3v-4.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class TdesignPalace1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace2Icon],svg[tdesign-palace-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6 6 0 0 1 18 9h2V3h2v19H2V3h2v6h2a6 6 0 0 1 5.002-5.917l.002-1.085zM8 9h8a4 4 0 0 0-8 0m-4 2v9h4v-1.646a6.43 6.43 0 0 1 3.553-5.748l.447-.224l.447.224A6.43 6.43 0 0 1 16 18.354V20h4v-9zm10 9v-1.646a4.43 4.43 0 0 0-2-3.702a4.43 4.43 0 0 0-2 3.702V20zM10.998 5.998h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignPalace2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace2FilledIcon],svg[tdesign-palace-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6 6 0 0 1 18 9h2V3h2v19h-5.5v-2.5c0-1.942-.97-3.402-1.77-4.283a8.6 8.6 0 0 0-1.508-1.308l-.193-.124L12 13.168l-1.029.617l-.193.124a8.6 8.6 0 0 0-1.508 1.308c-.8.88-1.77 2.34-1.77 4.283V22H2V3h2v6h2a6 6 0 0 1 5.002-5.917l.002-1.085zm-2.006 3.996v2.004h2.004V5.998z"></svg:path><svg:path fill="currentColor" d="M12 15.5s-2.5 1.5-2.5 4V22h5v-2.5c0-2.5-2.5-4-2.5-4"></svg:path>`,
})
export class TdesignPalace2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace3Icon],svg[tdesign-palace-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6 6 0 0 1 18 9h4v13H2V9h4a6 6 0 0 1 5.002-5.917l.002-1.085zM12 5a4 4 0 0 0-4 4v2H4v9h4v-1.646a6.43 6.43 0 0 1 3.553-5.748l.447-.224l.447.224A6.43 6.43 0 0 1 16 18.354V20h4v-9h-4V9a4 4 0 0 0-4-4m2 15v-1.646a4.43 4.43 0 0 0-2-3.702a4.43 4.43 0 0 0-2 3.702V20zM10.998 7.998h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignPalace3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace3FilledIcon],svg[tdesign-palace-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.002 3.083l.002-1.081l-2-.004l-.002 1.085A6 6 0 0 0 6 9H2v13h5.5v-2.5c0-1.942.97-3.402 1.77-4.283a8.6 8.6 0 0 1 1.508-1.308l.193-.124L12 13.168l1.029.617l.193.124a8.6 8.6 0 0 1 1.508 1.308c.8.88 1.77 2.34 1.77 4.283V22H22V9h-4a6 6 0 0 0-4.998-5.917m0 3.915v2.004h-2.004V6.998z"></svg:path><svg:path fill="currentColor" d="M9.5 19.5c0-2.5 2.5-4 2.5-4s2.5 1.5 2.5 4V22h-5z"></svg:path>`,
})
export class TdesignPalace3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace4Icon],svg[tdesign-palace-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.698l4 3.334V9h4V5.032l4-3.334l4 3.334V22H2V5.032zM16 9h4V5.968l-2-1.666l-2 1.666zm4 2H4v9h5v-3a3 3 0 1 1 6 0v3h5zm-7 9v-3a1 1 0 1 0-2 0v3zM4 9h4V5.968L6 4.302L4 5.968z"></svg:path>`,
})
export class TdesignPalace4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace4FilledIcon],svg[tdesign-palace-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.698l4 3.334V9h4V5.032l4-3.334l4 3.334V22h-6.5v-3.5a3.5 3.5 0 1 0-7 0V22H2V5.032zM20 9V5.968l-2-1.666l-2 1.666V9zM4 9h4V5.968L6 4.302L4 5.968z"></svg:path><svg:path fill="currentColor" d="M12 17a1.5 1.5 0 0 0-1.5 1.5V22h3v-3.5A1.5 1.5 0 0 0 12 17"></svg:path>`,
})
export class TdesignPalace4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalaceFilledIcon],svg[tdesign-palace-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3.126V2h-2v1.126C9.275 3.57 8 5.136 8 7H5v2h1v1h12V9h1V7h-3a4 4 0 0 0-3-3.874M2 12h20v2h-1v6h1v2h-6v-2a4 4 0 0 0-8 0v2H2v-2h1v-6H2z"></svg:path><svg:path fill="currentColor" d="M10 20a2 2 0 1 1 4 0v2h-4z"></svg:path>`,
})
export class TdesignPalaceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPaletteIcon],svg[tdesign-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 5.004 3.715 8.897 8.653 8.897h.003q-.071-.118-.156-.252l-.02-.032c-.4-.637-.71-1.466-.653-2.375c.059-.942.505-1.856 1.414-2.616c1.032-.863 2.263-.884 3.218-.847q.322.014.608.03c.758.041 1.358.074 1.947-.085c1.852-.5 2.881-1.73 2.988-3.323C21.323 6.62 17.115 3 12 3M1 12C1 5.925 5.925 1 12 1c5.931 0 11.418 4.286 10.998 10.53c-.173 2.566-1.908 4.431-4.463 5.12c-.932.252-1.932.193-2.708.148q-.24-.016-.447-.024c-.917-.036-1.45.043-1.855.381c-.527.441-.68.86-.702 1.208c-.024.38.106.796.35 1.185l.027.043c.096.153.236.374.352.605c.12.239.278.604.29 1.013a1.5 1.5 0 0 1-.7 1.338c-.425.275-.959.35-1.49.35C5.546 22.897 1 18.042 1 12m8.75-4.996a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-4.72 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9.488 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalette1Icon],svg[tdesign-palette-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-1.584 0-2.889 1.303-2.889 2.938c0 1.634 1.305 2.937 2.889 2.937s2.889-1.303 2.889-2.937C14.889 5.303 13.584 4 12 4M7.111 6.938C7.111 4.222 9.288 2 12 2s4.889 2.222 4.889 4.938s-2.177 4.937-4.889 4.937s-4.889-2.222-4.889-4.937M5.89 14.125c-1.585 0-2.89 1.303-2.89 2.938C3 18.697 4.305 20 5.889 20s2.889-1.303 2.889-2.937c0-1.635-1.305-2.938-2.89-2.938M1 17.063c0-2.716 2.177-4.938 4.889-4.938s4.889 2.222 4.889 4.938S8.6 22 5.888 22C3.179 22 1 19.778 1 17.063m17.111-2.938c-1.584 0-2.889 1.303-2.889 2.938c0 1.634 1.305 2.937 2.89 2.937C19.694 20 21 18.697 21 17.063c0-1.635-1.305-2.938-2.889-2.938m-4.889 2.938c0-2.716 2.177-4.938 4.89-4.938c2.71 0 4.888 2.222 4.888 4.938S20.823 22 18.111 22s-4.889-2.222-4.889-4.937"></svg:path>`,
})
export class TdesignPalette1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPalette1FilledIcon],svg[tdesign-palette-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.111 6.938C7.111 4.222 9.288 2 12 2s4.889 2.222 4.889 4.938s-2.177 4.937-4.889 4.937s-4.889-2.222-4.889-4.937M1 17.063c0-2.716 2.177-4.938 4.889-4.938s4.889 2.222 4.889 4.938S8.6 22 5.888 22C3.179 22 1 19.778 1 17.063m12.222 0c0-2.716 2.177-4.938 4.89-4.938c2.71 0 4.888 2.222 4.888 4.938S20.823 22 18.111 22s-4.889-2.222-4.889-4.937"></svg:path>`,
})
export class TdesignPalette1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPaletteFilledIcon],svg[tdesign-palette-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 6.042 4.545 10.897 10.653 10.897c.53 0 1.064-.075 1.49-.35c.514-.333.713-.85.699-1.338c-.012-.409-.17-.774-.29-1.013a7 7 0 0 0-.352-.605l-.027-.043c-.244-.389-.374-.805-.35-1.185c.021-.347.175-.767.702-1.207c.405-.34.938-.418 1.855-.382q.208.008.447.024c.776.045 1.776.104 2.708-.147c2.555-.69 4.29-2.555 4.463-5.12C23.418 5.286 17.93 1 12 1M9.75 7.004a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-4.72 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0m11.488-2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class TdesignPaletteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPanoramaHorizontalIcon],svg[tdesign-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3.156v17.688l-1.287-.386h-.002l-.009-.003l-.038-.011a23 23 0 0 0-.772-.21a42 42 0 0 0-2.213-.503C16.839 19.362 14.409 19 12 19s-4.838.363-6.679.73a42 42 0 0 0-2.827.668l-.158.046l-.038.01l-.01.004L1 20.844V3.156l1.287.386h.002l.009.003l.038.012l.158.045a42 42 0 0 0 2.827.668C7.161 4.637 9.591 5 12 5s4.838-.362 6.679-.73a42 42 0 0 0 2.827-.668l.158-.045l.038-.012l.01-.002zm-2 2.645c-.519.128-1.175.279-1.929.43C17.161 6.613 14.591 7 12 7s-5.162-.387-7.071-.77c-.754-.15-1.41-.3-1.929-.428V18.2a45 45 0 0 1 1.929-.43C6.839 17.389 9.409 17 12 17s5.162.388 7.071.77c.754.15 1.41.301 1.929.43z"></svg:path>`,
})
export class TdesignPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPanoramaHorizontalFilledIcon],svg[tdesign-panorama-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20.844V3.156l1.287.386h.002l.009.003l.038.012l.158.045a42 42 0 0 0 2.827.668c1.84.368 4.27.73 6.68.73c2.409 0 4.838-.362 6.678-.73a42 42 0 0 0 2.827-.668l.158-.045l.039-.012l.01-.003L23 3.156v17.688l-1.287-.386h-.002l-.008-.003l-.039-.011a22 22 0 0 0-.772-.21a42 42 0 0 0-2.213-.503C16.84 19.362 14.41 19 12 19s-4.838.363-6.679.73a42 42 0 0 0-2.827.668l-.158.046l-.038.01l-.009.003h-.001z"></svg:path>`,
})
export class TdesignPanoramaHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPanoramaVerticalIcon],svg[tdesign-panorama-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.156 1h17.688l-.386 1.287v.002l-.003.009l-.011.038l-.045.158c-.04.14-.096.348-.165.614a42 42 0 0 0-.503 2.213C19.363 7.161 19 9.591 19 12s.362 4.838.73 6.679a42 42 0 0 0 .668 2.827l.045.158l.011.038l.003.01l.386 1.288H3.156l.386-1.287v-.002l.004-.009l.01-.038l.046-.158a42 42 0 0 0 .668-2.827c.368-1.84.73-4.27.73-6.679s-.362-4.838-.73-6.679a42 42 0 0 0-.668-2.827l-.045-.158l-.011-.038l-.003-.01zm2.645 2c.128.519.279 1.175.43 1.929C6.613 6.839 7 9.409 7 12s-.388 5.162-.77 7.071A45 45 0 0 1 5.8 21h12.4a45 45 0 0 1-.43-1.929c-.381-1.91-.77-4.48-.77-7.071s.388-5.162.77-7.071c.15-.754.302-1.41.43-1.929z"></svg:path>`,
})
export class TdesignPanoramaVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPanoramaVerticalFilledIcon],svg[tdesign-panorama-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.156 1h17.688l-.386 1.287v.002l-.003.009l-.011.038a22 22 0 0 0-.21.772c-.137.533-.32 1.296-.503 2.213C19.362 7.161 19 9.591 19 12s.363 4.838.73 6.679a42 42 0 0 0 .668 2.827l.046.158l.01.038l.003.01l.387 1.288H3.156l.386-1.287v-.002l.003-.009l.012-.038l.045-.158a42 42 0 0 0 .668-2.827c.368-1.84.73-4.27.73-6.679s-.362-4.838-.73-6.679a42 42 0 0 0-.668-2.827l-.045-.158l-.012-.038l-.002-.01z"></svg:path>`,
})
export class TdesignPanoramaVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPantoneIcon],svg[tdesign-pantone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.347.991l3.178 4.455l2.099-.715l1.915 5.602H23V22H1V10.333h1.652zM3.353 12.333l-.003.003H3V20h18v-7.667zm16.072-2L18.388 7.3l-1.604.513l-7.397 2.521zM15.549 6.12l-1.604-2.248l-6.102 4.874zM5.285 15.164H7.29v2.004H5.285z"></svg:path>`,
})
export class TdesignPantoneIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPantoneFilledIcon],svg[tdesign-pantone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.525 4.447l2.098-.716l1.915 5.602H23V21H1V9.333h1.652L14.347-.009zm-1.976.673l-1.604-2.248l-6.103 4.875zm1.244 1.69L9.388 9.332h10.036l-1.037-3.034zM5.285 14.163v2.004H7.29v-2.004z"></svg:path>`,
})
export class TdesignPantoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignParabolaIcon],svg[tdesign-parabola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.083 7.912c-.229.44-.47.904-.683 1.188c-.89 1.187-1.605 2.118-2.223 2.75C4.583 12.456 3.881 13 3 13H2v-2h1c.019 0 .217-.007.748-.55C4.255 9.933 4.89 9.114 5.8 7.9c.106-.141.252-.42.495-.885l.137-.261c.298-.568.677-1.27 1.145-1.947C8.48 3.5 9.903 2 12 2s3.52 1.499 4.423 2.807c.468.678.847 1.379 1.145 1.947l.137.26c.243.466.39.745.495.886c.91 1.213 1.544 2.032 2.052 2.55c.53.543.729.55.748.55h1v2h-1c-.881 0-1.583-.543-2.177-1.15c-.617-.632-1.333-1.563-2.223-2.75c-.213-.284-.454-.748-.683-1.188l-.12-.228c-.292-.557-.625-1.169-1.02-1.741C13.955 4.75 13.053 4 12 4s-1.955.751-2.777 1.943c-.395.572-.728 1.184-1.02 1.74zM4 16v2h7v-2h2v2h7v-2h2v5h-2v-1h-7v1h-2v-1H4v1H2v-5z"></svg:path>`,
})
export class TdesignParabolaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignParenthesesIcon],svg[tdesign-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.445 4.539l-.438.899A14.9 14.9 0 0 0 3.5 12c0 2.355.542 4.581 1.507 6.562l.438.899l-1.798.876l-.438-.899A16.9 16.9 0 0 1 1.5 12c0-2.665.614-5.19 1.71-7.438l.437-.899zm14.907-.876l.439.899A16.9 16.9 0 0 1 22.5 12c0 2.665-.614 5.19-1.71 7.438l-.437.899l-1.798-.876l.438-.9A14.9 14.9 0 0 0 20.5 12c0-2.355-.542-4.581-1.507-6.562l-.438-.899z"></svg:path>`,
})
export class TdesignParenthesesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPasteIcon],svg[tdesign-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5v2H4v3H2zm9 0h5v5h-2V4h-3zM9 9h13v13H9zm2 2v9h9v-9zm-7-1v3h3v2H2v-5z"></svg:path>`,
})
export class TdesignPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPasteFilledIcon],svg[tdesign-paste-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5v2H4v3H2zm9 0h5v5h-2V4h-3zM9 9h13v13H9zm-5 1v3h3v2H2v-5z"></svg:path>`,
})
export class TdesignPasteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPatioIcon],svg[tdesign-patio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.783 2.06C7.25 1.527 9.365 1 12 1s4.75.527 6.217 1.06a14 14 0 0 1 1.699.74a9 9 0 0 1 .62.356l.011.007l.005.003l.001.001l.002.001l.445.297V20h1v2H2v-2h1V3.465l.445-.297l.002-.001l.001-.001l.005-.003l.011-.007a3 3 0 0 1 .163-.101q.161-.098.457-.254c.395-.206.966-.474 1.7-.74M5 4.58V20h2V7.5h2v2h2v-2h2V20h6V4.579l-.01-.005c-.324-.17-.815-.4-1.457-.634C16.25 3.473 14.365 3 12 3s-4.25.473-5.533.94A12 12 0 0 0 5 4.579M9 11.5V13h2v-1.5zm2 3.5H9v1.5h2zm0 3.5H9V20h2z"></svg:path>`,
})
export class TdesignPatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPatioFilledIcon],svg[tdesign-patio-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c-2.635 0-4.75.527-6.217 1.06c-.733.267-1.304.535-1.699.74a9 9 0 0 0-.62.356l-.011.007l-.005.003l-.001.001L3 3.465V20H2v2h5V9h2v2h2V9h2v13h9v-2h-1V3.465l-.447-.298l-.001-.001l-.005-.003l-.011-.007l-.163-.101a9 9 0 0 0-.457-.254a14 14 0 0 0-1.7-.74C16.75 1.526 14.635 1 12 1"></svg:path><svg:path fill="currentColor" d="M11 22v-2H9v2zm0-4H9v-1.5h2zm0-3.5H9V13h2z"></svg:path>`,
})
export class TdesignPatioFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPauseIcon],svg[tdesign-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17V7H8v10zm5 0V7h-3v10z"></svg:path>`,
})
export class TdesignPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPauseCircleIcon],svg[tdesign-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12"></svg:path><svg:path fill="currentColor" d="M13 7h3v10h-3zM8 7h3v10H8z"></svg:path>`,
})
export class TdesignPauseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPauseCircleFilledIcon],svg[tdesign-pause-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M8 7h3v10H8zm5 0h3v10h-3z"></svg:path>`,
})
export class TdesignPauseCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPauseCircleStrokeIcon],svg[tdesign-pause-circle-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m9.5-5v10h-2V7zm5 0v10h-2V7z"></svg:path>`,
})
export class TdesignPauseCircleStrokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPauseCircleStrokeFilledIcon],svg[tdesign-pause-circle-stroke-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M8.5 17h2V7h-2zm5 0h2V7h-2z"></svg:path>`,
})
export class TdesignPauseCircleStrokeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPeaIcon],svg[tdesign-pea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.874 3.008l.662 1.836L21 6.452V8c0 3.146-.54 5.83-1.799 7.954q-1.91 3.227-5.878 4.466c-.913.285-2.423.562-3.432.578c-3.572.058-6.596-1.548-8.148-3.344l-.758-.878l.98-.62l4.44-2.816l-.035-.016c-.884-.407-1.758-1.002-2.528-1.686s-1.465-1.48-1.974-2.31C1.368 8.51 1 7.585 1 6.663v-.881zM8.681 11.896L13 9.156l.842-.537l.002.002l4.834-3.065L3.188 7.52q.138.355.385.762c.39.635.948 1.285 1.597 1.86c.648.576 1.359 1.054 2.036 1.365c.585.27 1.086.388 1.475.39m4.551-.518l-2.829 1.794l1.457 2.166l-1.66 1.116l-1.486-2.21l-4.594 2.913c1.317 1.026 3.358 1.88 5.739 1.842c.786-.013 2.105-.25 2.868-.488c2.229-.696 3.759-1.897 4.753-3.576C18.49 13.229 19 10.94 19 8v-.28l-4.079 2.587l1.45 2.272l-1.685 1.076z"></svg:path>`,
})
export class TdesignPeaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPeaFilledIcon],svg[tdesign-pea-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.874 3.008l.662 1.836L21 6.452V8c0 3.146-.54 5.83-1.799 7.954q-1.91 3.227-5.878 4.466c-.913.285-2.423.562-3.432.578c-3.572.058-6.596-1.548-8.148-3.344l-.758-.878l5.42-3.436l-.035-.016c-.884-.407-1.758-1.002-2.528-1.686s-1.465-1.48-1.974-2.31C1.368 8.51 1 7.585 1 6.663v-.881zm-9.642 8.37l-2.829 1.794l1.457 2.166l-1.66 1.116l-1.486-2.21l-4.594 2.913c1.317 1.026 3.358 1.88 5.739 1.842c.786-.013 2.105-.25 2.868-.488c2.229-.696 3.759-1.897 4.753-3.576C18.49 13.229 19 10.94 19 8v-.28l-4.079 2.587l1.45 2.272l-1.685 1.076z"></svg:path>`,
})
export class TdesignPeaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPeachIcon],svg[tdesign-peach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h1c1.196 0 2.05.632 2.616 1.364C13.08 1.644 13.829 1 15 1h1v2h-1c-.361 0-.676.225-.94.928a4 4 0 0 0-.127.402a6.4 6.4 0 0 1 .998.025c1.09.109 2.356.49 3.49 1.262c2.009 1.366 5.005 5.074 2.817 10.533c-1.31 3.269-4.344 5.063-7.815 6.005a11 11 0 0 1-.881.672l-.438.297l-.492-.194c-5.837-2.302-8.604-5.612-9.38-8.91c-.764-3.244.46-6.28 2.215-7.872c2.161-1.96 4.83-2.316 6.963-1.915q-.067-.15-.148-.298C10.908 3.301 10.485 3 10 3H9zm3.318 5.591c-1.685-.757-4.444-.851-6.527 1.038c-1.226 1.112-2.207 3.409-1.613 5.933c.564 2.393 2.6 5.182 7.662 7.302q.227-.177.444-.368a14 14 0 0 0 1.66-1.757a15 15 0 0 0 .596-.794l.029-.042l.006-.01l.014-.02l.015-.02c.797-1.085 1.484-3.33 1.29-5.647c-.19-2.262-1.197-4.422-3.576-5.615m4.069 12.199c1.394-.851 2.424-1.962 2.994-3.384c1.732-4.32-.586-7.116-2.084-8.135a5.6 5.6 0 0 0-1.782-.79c1.518 1.58 2.209 3.604 2.372 5.559c.215 2.571-.464 5.175-1.5 6.75"></svg:path>`,
})
export class TdesignPeachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPeachFilledIcon],svg[tdesign-peach-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1H9v2h1c.462 0 .847.338 1.157 1.144l.019.049c-2.093-.333-4.646.066-6.729 1.955c-1.755 1.592-2.979 4.629-2.215 7.873c1.117 4.748 5.655 7.44 9.872 9.104c3.744-2.547 6.171-6.44 5.783-11.085c-.228-2.728-1.552-5.292-3.846-6.772c2.89 1.584 4.687 4.598 4.959 7.851c.206 2.46-.355 4.693-1.437 6.663c1.503-1.09 3.084-2.585 3.797-4.434c1.634-4.236-.027-8.333-2.99-10.025c-1.723-.984-3.33-1.262-4.566-1.088l.033-.09C14.148 3.34 14.535 3 15 3h1V1h-1c-1.214 0-2.003.668-2.502 1.404C12 1.668 11.213 1 10 1"></svg:path>`,
})
export class TdesignPeachFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPearIcon],svg[tdesign-pear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.323 2.534l-.447.895A14.3 14.3 0 0 1 19.65 5.45c.878 1.101 1.358 2.354 1.313 3.695c-.053 1.604-.852 3.156-2.257 4.561l-.055.055l-.059.043l-.005.004l-.04.032a4.7 4.7 0 0 0-.743.799c-.417.567-.807 1.364-.805 2.358c.004 1.686-.29 3.115-1.498 4.323c-2.398 2.399-6.307 2.368-8.674 0l-.068-.068c-.67-.669-1.34-1.338-1.637-2.376c-1.038-.298-1.707-.967-2.376-1.637l-.068-.068c-2.368-2.368-2.399-6.276 0-8.675C3.887 7.29 5.316 6.997 7.002 7c.994.002 1.79-.388 2.358-.804a4.7 4.7 0 0 0 .799-.744l.032-.04l.004-.005l.043-.06l.055-.054c1.385-1.386 2.89-2.229 4.458-2.329c1.241-.079 2.402.315 3.445 1.081c.338-.49.627-.984.891-1.51l.447-.895zm-4.38 3.073c-.705-.5-1.397-.69-2.065-.647c-.905.058-1.962.553-3.126 1.703l-.046.057a6.7 6.7 0 0 1-1.163 1.088C9.745 8.394 8.541 9.003 6.998 9c-1.44-.003-2.236.243-2.905.912c-1.611 1.611-1.593 4.253 0 5.846c.89.89 1.242 1.201 1.975 1.267a1 1 0 0 1 .907.907c.066.733.377 1.085 1.267 1.975c1.593 1.593 4.235 1.611 5.846 0c.67-.67.915-1.466.912-2.905c-.003-1.543.606-2.747 1.192-3.545a6.7 6.7 0 0 1 1.088-1.163l.057-.046c1.13-1.146 1.597-2.227 1.628-3.169c.023-.668-.171-1.354-.625-2.036q-.357.389-.763.794l-.707.707l-1.414-1.414l.707-.707q.422-.422.78-.816m1.651 8.197"></svg:path>`,
})
export class TdesignPearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPearFilledIcon],svg[tdesign-pear-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.323 2.534l-.447.895A14.3 14.3 0 0 1 19.65 5.45c.878 1.101 1.358 2.354 1.313 3.695c-.053 1.604-.852 3.156-2.257 4.561c-.112.096-.227.188-.335.29c-.153.143-.36.36-.568.643c-.416.567-.806 1.364-.804 2.358c.004 1.686-.29 3.115-1.498 4.323c-2.398 2.399-6.307 2.368-8.674 0c-.692-.692-1.397-1.37-1.705-2.444c-1.073-.308-1.752-1.013-2.444-1.705c-2.368-2.368-2.399-6.276 0-8.675C3.887 7.29 5.316 6.997 7.002 7c.994.002 1.79-.388 2.358-.804c.283-.208.5-.415.643-.568c.102-.108.194-.223.29-.335c1.385-1.386 2.89-2.229 4.458-2.329c1.241-.079 2.402.315 3.445 1.081c.338-.49.627-.984.891-1.51l.447-.895z"></svg:path>`,
})
export class TdesignPearFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPearlOfTheOrientIcon],svg[tdesign-pearl-of-the-orient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.997.999L13 3.17a3.001 3.001 0 0 1 0 5.66v4.296a4.002 4.002 0 0 1 1.86 6.67L16.754 23h-2.325l-1.28-2.168a4 4 0 0 1-2.298 0L9.573 23H7.249l1.89-3.204A3.9 3.9 0 0 1 8 17a4 4 0 0 1 3-3.874V8.829a3.001 3.001 0 0 1 0-5.658L10.997 1zm-.997 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 10a2 2 0 0 0-2 2c0 .518.165.945.502 1.327q.2.225.457.382c.303.185.658.292 1.04.292a1.99 1.99 0 0 0 1.526-.706A2 2 0 0 0 12 15"></svg:path>`,
})
export class TdesignPearlOfTheOrientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPearlOfTheOrientFilledIcon],svg[tdesign-pearl-of-the-orient-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998.999L13 3.17a3.001 3.001 0 0 1 0 5.66v4.296a4.002 4.002 0 0 1 1.86 6.67L16.754 23H14.43l-1.28-2.168a4 4 0 0 1-2.298 0L9.574 23H7.25l1.89-3.204A3.9 3.9 0 0 1 8 17a4 4 0 0 1 3-3.874V8.829a3.001 3.001 0 0 1 0-5.658L10.998 1z"></svg:path>`,
})
export class TdesignPearlOfTheOrientFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenIcon],svg[tdesign-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.362 2.595l-1.671 3.05a9 9 0 0 1-4.785 4.122l-3.829 1.41l-.737 6.066L11 11.582l1.414 1.414l-5.66 5.66l6.063-.737l1.418-3.884a9 9 0 0 1 4.027-4.75l3.052-1.724l.984 1.741l-3.052 1.725a7 7 0 0 0-3.132 3.694l-1.838 5.036l-11.426 1.39L4.239 9.72l4.976-1.83a7 7 0 0 0 3.722-3.206l1.671-3.05z"></svg:path>`,
})
export class TdesignPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenBallIcon],svg[tdesign-pen-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.155 1.374l5.471 5.472l-1.414 1.414l-5.471-5.472zm-2.802 2.833l5.441 5.44L7.397 22.002H2v-5.397zm.002 2.83L4 17.43v2.571h2.57L16.964 9.645zm7.853 5.83l-6.244 6.243l-1.414-1.414l6.244-6.244z"></svg:path>`,
})
export class TdesignPenBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenBallFilledIcon],svg[tdesign-pen-ball-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.155 1.374l5.472 5.472l-1.414 1.414l-5.472-5.472zm-2.802 2.833l5.442 5.44L7.397 22.002H2v-5.397zm7.855 8.66l-6.243 6.243l-1.415-1.414l6.244-6.244z"></svg:path>`,
})
export class TdesignPenBallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenBrushIcon],svg[tdesign-pen-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.999 22h3.623a3 3 0 0 0 2.12-.878l14.79-14.789l-4.866-4.865L2.878 16.256a3 3 0 0 0-.879 2.122zm2-2v-1.622a1 1 0 0 1 .293-.707l2.158-2.158l2.037 2.036l-2.158 2.158a1 1 0 0 1-.707.293zm5.902-3.865l-2.037-2.037l9.802-9.801l2.037 2.036z"></svg:path>`,
})
export class TdesignPenBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenBrushFilledIcon],svg[tdesign-pen-brush-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.621 21.999H2v-3.623a3 3 0 0 1 .878-2.121l2.158-2.158l4.866 4.865l-2.158 2.158A3 3 0 0 1 5.62 22m5.695-4.452L22.53 6.332l-4.865-4.865L6.45 12.683z"></svg:path>`,
})
export class TdesignPenBrushFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenFilledIcon],svg[tdesign-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.575 9.147L14.769 1.34l-1.832 3.343A7 7 0 0 1 9.216 7.89L4.24 9.721l-1.193 9.816l7.955-7.956l1.414 1.415l-7.954 7.954l9.815-1.194l1.838-5.035a7 7 0 0 1 3.133-3.694z"></svg:path>`,
})
export class TdesignPenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenMarkIcon],svg[tdesign-pen-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.555 6.88L17.328.651L3.979 14.002l-.565 2.826l3.965 3.966l2.827-.566zm-2.829 0L9.22 18.385l-1.184.236l-2.451-2.451l.236-1.184L17.328 3.481zM1.386 19.612l3.208 3.208l1.414-1.414L2.8 18.2z"></svg:path>`,
})
export class TdesignPenMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenMarkFilledIcon],svg[tdesign-pen-mark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.555 6.88L17.328.651L3.979 14.002l-.565 2.826l3.965 3.966l2.827-.566zM1.385 19.612l3.21 3.208l1.413-1.414L2.8 18.2z"></svg:path>`,
})
export class TdesignPenMarkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenQuillIcon],svg[tdesign-pen-quill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.302 8.118l-11.14 11.094l-5.416-.697l-3.673 3.673l-1.414-1.414l3.669-3.67l-.742-5.41L15.672.565l1.816 5.787zm-7.745-1.242l-.803-2.557l-8.052 8.085l.401 2.926zm-7.025 9.853l2.914.375l8.076-8.045l-2.546-.773z"></svg:path>`,
})
export class TdesignPenQuillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPenQuillFilledIcon],svg[tdesign-pen-quill-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.301 8.118L12.162 19.212l-5.416-.697l-3.673 3.673l-1.414-1.414l3.669-3.67l-.742-5.41L15.672.565l1.816 5.787z"></svg:path>`,
})
export class TdesignPenQuillFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPendingIcon],svg[tdesign-pending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-9.996 1.004H11V11h2.004zm-5 0H6V11h2.004zm10 0H16V11h2.004z"></svg:path>`,
})
export class TdesignPendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPendingFilledIcon],svg[tdesign-pending-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m-6-9.996V11h2.004v2.004zm5 0V11h2.004v2.004zm7.004 0H16V11h2.004z"></svg:path>`,
})
export class TdesignPendingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPercentIcon],svg[tdesign-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M2.5 6.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M20.414 5L5 20.414L3.586 19L19 3.586zM18 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path>`,
})
export class TdesignPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
