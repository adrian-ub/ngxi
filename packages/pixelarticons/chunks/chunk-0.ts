import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticons4gIcon],svg[pixelarticons-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7H3v6h5v4h2V7H8v4H5zm16 0h-9v10h9v-6h-4v2h2v2h-5V9h7z"></svg:path>`,
})
export class Pixelarticons4gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticons5gIcon],svg[pixelarticons-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7H3v6h5v2H3v2h7v-6H5V9h5zm11 0h-9v10h9v-6h-4v2h2v2h-5V9h7z"></svg:path>`,
})
export class Pixelarticons5gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddBoxMultipleIcon],svg[pixelarticons-add-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h14v14H3zm12 12V5H5v10zm-8 6v-2h12V7h2v14zm4-12h2v2h-2v2H9v-2H7V9h2V7h2z"></svg:path>`,
})
export class PixelarticonsAddBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddColIcon],svg[pixelarticons-add-col-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h10v20H2v-2h8v-4H2v-2h8v-4H2V8h8V4H2zm17 9h3v2h-3v3h-2v-3h-3v-2h3V8h2z"></svg:path>`,
})
export class PixelarticonsAddColIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAcIcon],svg[pixelarticons-ac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v4H9V4H7v2h2v2h2v3H8V9H6V7H4v2h2v2H2v2h4v2H4v2h2v-2h2v-2h3v3H9v2H7v2h2v-2h2v4h2v-4h2v2h2v-2h-2v-2h-2v-3h3v2h2v2h2v-2h-2v-2h4v-2h-4V9h2V7h-2v2h-2v2h-3V8h2V6h2V4h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsAcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddBoxIcon],svg[pixelarticons-add-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 16V5H5v14zm-6-8h4v2h-4v4h-2v-4H7v-2h4V7h2z"></svg:path>`,
})
export class PixelarticonsAddBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddGridIcon],svg[pixelarticons-add-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v8H3zm6 6V5H5v4zm9 4h-2v3h-3v2h3v3h2v-3h3v-2h-3zM15 3h6v8h-8V3zm4 6V5h-4v4zM5 13h6v8H3v-8zm4 6v-4H5v4z"></svg:path>`,
})
export class PixelarticonsAddGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddRowIcon],svg[pixelarticons-add-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10V2H2v10h20V2h-2v8h-4V2h-2v8h-4V2H8v8zm9 9v3h-2v-3H8v-2h3v-3h2v3h3v2z"></svg:path>`,
})
export class PixelarticonsAddRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAlertIcon],svg[pixelarticons-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3h-2zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2h2V9h2V7h2V5h2V3zm0 4h-2v6h2zm0 8h-2v2h2z"></svg:path>`,
})
export class PixelarticonsAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAlignCenterIcon],svg[pixelarticons-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H4v2h16zm-4 4H8v2h8zM4 13h16v2H4zm12 4H8v2h8z"></svg:path>`,
})
export class PixelarticonsAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAlignJustifyIcon],svg[pixelarticons-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H4v2h16zm0 4H4v2h16zM4 13h16v2H4zm16 4H4v2h16z"></svg:path>`,
})
export class PixelarticonsAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAlignLeftIcon],svg[pixelarticons-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H4v2h16zm-8 4H4v2h8zm8 4v2H4v-2zm-8 4H4v2h8z"></svg:path>`,
})
export class PixelarticonsAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAlignRightIcon],svg[pixelarticons-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16v2H4zm8 4h8v2h-8zm-8 4v2h16v-2zm8 4h8v2h-8z"></svg:path>`,
})
export class PixelarticonsAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAnalyticsIcon],svg[pixelarticons-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 2H5v14h14zM7 12h2v5H7zm10-5h-2v10h2zm-6 3h2v2h-2zm2 4h-2v3h2z"></svg:path>`,
})
export class PixelarticonsAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAnchorIcon],svg[pixelarticons-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3h-4v2H8v4h2v2h1v8H6v-4h2v-2H4v6h2v2h12v-2h2v-6h-4v2h2v4h-5v-8h1V9h2V5h-2zm0 2v4h-4V5z"></svg:path>`,
})
export class PixelarticonsAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAndroidIcon],svg[pixelarticons-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h2v2H2zm4 4H4V7h2zm2 0H6v2H4v2H2v6h20v-6h-2v-2h-2V9h2V7h2V5h-2v2h-2v2h-2V7H8zm0 0h8v2h2v2h2v4H4v-4h2v-2h2zm2 4H8v2h2zm4 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAnimationIcon],svg[pixelarticons-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v12h2V4h10V2zm2 4h12v2H8v10H6zm4 4h12v12H10zm10 10v-8h-8v8z"></svg:path>`,
})
export class PixelarticonsAnimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArchiveIcon],svg[pixelarticons-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v6h2v10h16V10h2zM6 10h12v8H6zm14-4v2H4V6zm-5 6H9v2h6z"></svg:path>`,
})
export class PixelarticonsArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowBarDownIcon],svg[pixelarticons-arrow-bar-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v8h2v2h-2v2h-2v-2H9v-2h2zm-2 8H7v-2h2zm6 0v-2h2v2zM4 18h16v2H4z"></svg:path>`,
})
export class PixelarticonsArrowBarDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowBarLeftIcon],svg[pixelarticons-arrow-bar-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16H4V4zm14 7v2h-8v2h-2v-2H8v-2h2V9h2v2zm-8-2V7h2v2zm0 6h2v2h-2z"></svg:path>`,
})
export class PixelarticonsArrowBarLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowBarRightIcon],svg[pixelarticons-arrow-bar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v16h2V4zM4 11v2h8v2h-2v2h2v-2h2v-2h2v-2h-2V9h-2V7h-2v2h2v2z"></svg:path>`,
})
export class PixelarticonsArrowBarRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowBarUpIcon],svg[pixelarticons-arrow-bar-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16V4H4zm7 14h2v-8h2v2h2v-2h-2v-2h-2V8h-2v2H9v2H7v2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsArrowBarUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowDownIcon],svg[pixelarticons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2zM7 14v2h2v-2zm0 0v-2H5v2zm10 0v2h-2v-2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowDownBoxIcon],svg[pixelarticons-arrow-down-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 16V5H5v14zM11 7h2v6h2v2h-2v2h-2v-2H9v-2h2zm-2 4v2H7v-2zm8 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsArrowDownBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowLeftIcon],svg[pixelarticons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2zM10 7H8v2h2zm0 0h2V5h-2zm0 10H8v-2h2zm0 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowLeftBoxIcon],svg[pixelarticons-arrow-left-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v18H3V3zM5 19h14V5H5zm12-8v2h-6v2H9v-2H7v-2h2V9h2v2zm-4-2h-2V7h2zm0 8v-2h-2v2z"></svg:path>`,
})
export class PixelarticonsArrowLeftBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowRightIcon],svg[pixelarticons-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowRightBoxIcon],svg[pixelarticons-arrow-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zM19 5H5v14h14zM7 13v-2h6V9h2v2h2v2h-2v2h-2v-2zm4 2h2v2h-2zm0-8v2h2V7z"></svg:path>`,
})
export class PixelarticonsArrowRightBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowUpIcon],svg[pixelarticons-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2zM7 10V8h2v2zm0 0v2H5v-2zm10 0V8h-2v2zm0 0v2h2v-2z"></svg:path>`,
})
export class PixelarticonsArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowUpBoxIcon],svg[pixelarticons-arrow-up-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h18V3H3zM19 5v14H5V5zm-8 12h2v-6h2V9h-2V7h-2v2H9v2h2zm-2-4v-2H7v2zm8 0h-2v-2h2z"></svg:path>`,
})
export class PixelarticonsArrowUpBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowsHorizontalIcon],svg[pixelarticons-arrows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9V7h2v2zm2 6v-2h-4v-2h4V9h2v2h2v2h-2v2zm0 0v2h-2v-2zm-6-4v2H7v2H5v-2H3v-2h2V9h2v2zm-4 4h2v2H7zm2-8v2H7V7z"></svg:path>`,
})
export class PixelarticonsArrowsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowsVerticalIcon],svg[pixelarticons-arrows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h2V7h2v2h2V7h-2V5h-2V3h-2v2H9v2H7v2h2V7h2zm0 2h2v4h2v2h-2v2h-2v-2H9v-2h2zm-2 4v-2H7v2zm6 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsArrowsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArtTextIcon],svg[pixelarticons-art-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h10v10H2zm8 8V9H4v6zm12-8h-8v2h8zm-8 4h8v2h-8zm8 4h-8v2h8z"></svg:path>`,
})
export class PixelarticonsArtTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArticleIcon],svg[pixelarticons-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18V3zm14 2v14H5V5zm-2 2H7v2h10zM7 11h10v2H7zm7 4H7v2h7z"></svg:path>`,
})
export class PixelarticonsArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArticleMultipleIcon],svg[pixelarticons-article-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1H1v18h18V1zm14 2v14H3V3zm4 18H5v2h18V5h-2zM15 5H5v2h10zM5 9h10v2H5zm7 4H5v2h7z"></svg:path>`,
})
export class PixelarticonsArticleMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAspectRatioIcon],svg[pixelarticons-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v16H2zm2 14h16V6H4zM8 8h2v2H8v2H6V8zm8 8h-2v-2h2v-2h2v4z"></svg:path>`,
})
export class PixelarticonsAspectRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAtIcon],svg[pixelarticons-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16v12H8V8h8v6h2V6H6v12h14v2H4zm10 10v-4h-4v4z"></svg:path>`,
})
export class PixelarticonsAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAttachmentIcon],svg[pixelarticons-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v14H5V3h14v18H9V7h6v10h-2V9h-2v10h6V5z"></svg:path>`,
})
export class PixelarticonsAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAudioDeviceIcon],svg[pixelarticons-audio-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4v2H4v8h4v2H2V4zm6 0h10v2h-8v12h8v2H10zm12 0h-2v16h2zm-7 4h2v2h-2zm3 4h-4v4h4zM8 18H4v2h4z"></svg:path>`,
})
export class PixelarticonsAudioDeviceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAvatarIcon],svg[pixelarticons-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 16V5H5v14zM14 7h-4v4h4zm1 6H9v2H7v2h2v-2h6v2h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsAvatarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBackburgerIcon],svg[pixelarticons-backburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h10v2H11zm-8 4h2V9h2v2h14v2H7v2H5v-2H3zm4 4v2h2v-2zm0-6V7h2v2zm14 6H11v2h10z"></svg:path>`,
})
export class PixelarticonsBackburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBatteryIcon],svg[pixelarticons-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H2v14h18v-4h2V9h-2V5zm14 2v10H4V7z"></svg:path>`,
})
export class PixelarticonsBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBattery1Icon],svg[pixelarticons-battery-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H2v14h18v-4h2V9h-2V5zm14 2v10H4V7zM8 9H6v6h2z"></svg:path>`,
})
export class PixelarticonsBattery1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBattery2Icon],svg[pixelarticons-battery-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H2v14h18v-4h2V9h-2V5zm14 2v10H4V7zM6 9h2v6H6zm6 0h-2v6h2z"></svg:path>`,
})
export class PixelarticonsBattery2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBatteryChargingIcon],svg[pixelarticons-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H2v14h6v-2H4V7h4V5zm10 0h6v4h2v6h-2v4h-6v-2h4V7h-4zm-4 2h2v4h4v2h-2v2h-2v2h-2v-4H6v-2h2V9h2z"></svg:path>`,
})
export class PixelarticonsBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBatteryFullIcon],svg[pixelarticons-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5H2v14h18v-4h2V9h-2V5zm0 2v10H4V7zM8 9H6v6h2zm2 0h2v6h-2zm6 0h-2v6h2z"></svg:path>`,
})
export class PixelarticonsBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBedIcon],svg[pixelarticons-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h2v12h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0zm3 5h2v4H3zm6 4v2H5v-2zm0-4h2v4H9zm0 0H5V7h4z"></svg:path>`,
})
export class PixelarticonsBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBitcoinIcon],svg[pixelarticons-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h2v2h2v2H9v4h8v2H9v4h8v2h-2v2h-2v-2h-2v2H9v-2H5v-2h2v-4H5v-2h2V7H5V5h4V3h2v2h2zm4 14v-4h2v4zm0-6V7h2v4z"></svg:path>`,
})
export class PixelarticonsBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBluetoothIcon],svg[pixelarticons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h-2v2h2v2h2v2h-2v2h2V9h2V7h-2V5h-2zm-2 0h-2v6H9V7H7V5H5v2h2v2h2v2h2v2H9v2H7v2H5v2h2v-2h2v-2h2v6h2zm2 8h-2v2h2v2h2v2h-2v2h-2v2h2v-2h2v-2h2v-2h-2v-2h-2z"></svg:path>`,
})
export class PixelarticonsBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBookIcon],svg[pixelarticons-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h12v20H4V2zm4 8h-2v2H8V4H6v16h12V4h-4v8h-2z"></svg:path>`,
})
export class PixelarticonsBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBookOpenIcon],svg[pixelarticons-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3zm16 7h-4v2h4zm-4-3h4v2h-4zm2 6h-2v2h2z"></svg:path>`,
})
export class PixelarticonsBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBookmarkIcon],svg[pixelarticons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v2h12v16h-2v-2h-2v-2h-4v2H8v2H6V2H4v20h4v-2h2v-2h4v2h2v2h4V2z"></svg:path>`,
})
export class PixelarticonsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBookmarksIcon],svg[pixelarticons-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18V2H7v2h12v14zM5 6H3v16h4v-2h2v-2h2v2h2v2h4V6zm8 14v-2h-2v-2H9v2H7v2H5V8h10v12z"></svg:path>`,
})
export class PixelarticonsBookmarksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseIcon],svg[pixelarticons-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v14H2V7h6zm2 4h4V5h-4zM4 9v10h16V9z"></svg:path>`,
})
export class PixelarticonsBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseAccountIcon],svg[pixelarticons-briefcase-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h20V7h-6zm-2 4h-4V5h4zM4 19V9h16v10zm6-8h4v3h-4zm-2 4h8v2H8z"></svg:path>`,
})
export class PixelarticonsBriefcaseAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseCheckIcon],svg[pixelarticons-briefcase-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h20V7h-6zm-2 4h-4V5h4zM4 19V9h16v10zm10-8h2v2h-2zm-2 4v-2h2v2zm-2 0h2v2h-2zm0 0H8v-2h2z"></svg:path>`,
})
export class PixelarticonsBriefcaseCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseDeleteIcon],svg[pixelarticons-briefcase-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h12v-2H4V9h16v4h2V7h-6zm-2 4h-4V5h4zm4 8h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsBriefcaseDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseDownloadIcon],svg[pixelarticons-briefcase-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v14h-5v-2h3V9H4v10h3v2H2V7h6zm6 2h-4v2h4zm-3 6h2v6h2v2h-2v2h-2v-2H9v-2h2zm-2 6H7v-2h2zm6 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsBriefcaseDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseMinusIcon],svg[pixelarticons-briefcase-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v6h-2V9H4v10h10v2H2V7h6zm6 2h-4v2h4zm2 12h6v2h-6z"></svg:path>`,
})
export class PixelarticonsBriefcaseMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcasePlusIcon],svg[pixelarticons-briefcase-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v4h-2V9H4v10h8v2H2V7h6zm2 4h4V5h-4zm7 14h2v-3h3v-2h-3v-3h-2v3h-3v2h3z"></svg:path>`,
})
export class PixelarticonsBriefcasePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseSearchIcon],svg[pixelarticons-briefcase-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h10v-2H4V9h16v2h2V7h-6zm-2 4h-4V5h4zm6 6h-6v6h6v2h2v-2h-2zm-4 4v-2h2v2z"></svg:path>`,
})
export class PixelarticonsBriefcaseSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseSearch1Icon],svg[pixelarticons-briefcase-search-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h7v-2H4V9h18V7h-6zm-2 4h-4V5h4zm0 4h8v2h-8zm0 10h-2v-8h2zm8 0v2h-8v-2zm0 0h2v-8h-2zm-6-6h2v2h2v2h-4z"></svg:path>`,
})
export class PixelarticonsBriefcaseSearch1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseUploadIcon],svg[pixelarticons-briefcase-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v14h-5v-2h3V9H4v10h3v2H2V7h6zm6 2h-4v2h4zm-3 16h2v-6h2v2h2v-2h-2v-2h-2v-2h-2v2H9v2H7v2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsBriefcaseUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBugIcon],svg[pixelarticons-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h2v4h4V2h2v4h2v3h2v2h-2v2h4v2h-4v2h2v2h-2v3H6v-3H4v-2h2v-2H2v-2h4v-2H4V9h2V6h2zm8 6H8v3h8zm-5 5H8v7h3zm2 7h3v-7h-3zM4 9H2V7h2zm0 10v2H2v-2zm16 0h2v2h-2zm0-10V7h2v2z"></svg:path>`,
})
export class PixelarticonsBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBuildingIcon],svg[pixelarticons-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v20H3zm12 16v2h4V4H5v16h4v-2zM7 6h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2zM7 14h2v2H7zm6 0h-2v2h2zm4 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBuildingCommunityIcon],svg[pixelarticons-building-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h2v20H2v-8h2v6h4v-4h2v4h4v-6h2v6h4V4H10v2H8V2zm-8 10h2v2h-2zm-2-2h2v2h-2zm-2 0V8h2v2zm-2 2v-2h2v2zm0 0H4v2h2zm10-6h2v2h-2zm-2 0h-2v2h2zm2 4h2v2h-2z"></svg:path>`,
})
export class PixelarticonsBuildingCommunityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBuildingSkyscraperIcon],svg[pixelarticons-building-skyscraper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4v5h2v2h-2v11h4v-9h2v9h2v2H2v-2h2V8h2v12h6V4h-2zM8 6V4h2v2zm0 0H6v2h2zm10 5h-2V9h2zm-8-1H8v2h2zm-2 4h2v2H8z"></svg:path>`,
})
export class PixelarticonsBuildingSkyscraperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBuildingsIcon],svg[pixelarticons-buildings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h14v4h6v16H2zm18 6h-4v2h2v2h-2v2h2v2h-2v2h2v2h2zm-6-4H4v16h2v-2h6v2h2zM6 6h2v2H6zm6 0h-2v2h2zm-6 4h2v2H6zm6 0h-2v2h2zm-6 4h2v2H6zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsBuildingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBulletlistIcon],svg[pixelarticons-bulletlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11V5h6v6zm4-2V7H4v2zm16-4H10v2h12zm0 4H10v2h12zm-12 4h12v2H10zm12 4H10v2h12zM2 13v6h6v-6zm4 2v2H4v-2z"></svg:path>`,
})
export class PixelarticonsBulletlistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBullseyeIcon],svg[pixelarticons-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v2H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2zm0 2v2h2v12h-2v2H6v-2H4V6h2V4zm-8 6h4v4h-4zM8 6h8v2H8zm0 10H6V8h2zm8 0v2H8v-2zm0 0h2V8h-2z"></svg:path>`,
})
export class PixelarticonsBullseyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBullseyeArrowIcon],svg[pixelarticons-bullseye-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h10v2H6zM4 6V4h2v2zm0 12H2V6h2zm2 2H4v-2h2zm12 0H6v2h12zm2-2v2h-2v-2zm0 0h2V8h-2zM12 6H8v2H6v8h2v2h8v-2h2v-4h-2v4H8V8h4zm2 8v-4h2V8h2V6h4V4h-2V2h-2v4h-2v2h-2v2h-4v4z"></svg:path>`,
})
export class PixelarticonsBullseyeArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBusIcon],svg[pixelarticons-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14v2H5zm0 2v6h14V4h2v16h-2v2h-4v-2H9v2H5v-2H3V4zm0 14h14v-6H5zm2-4h2v2H7zm10 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCakeIcon],svg[pixelarticons-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h2v2H6zm2 3H6v3H2v9h6v-2h2v2h4v-2h2v2h6V8h-4V5h-2v3h-3V5h-2v3H8zm12 10h-4v-3h-2v3h-4v-3H8v3H4v-5h16zM2 20h20v2H2zM13 2h-2v2h2zm3 0h2v2h-2zM2 17h2v3H2zm18 0h2v3h-2z"></svg:path>`,
})
export class PixelarticonsCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalculatorIcon],svg[pixelarticons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H3v20h18V2zm14 18H5V4h14zM17 6H7v4h10zM7 12h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarIcon],svg[pixelarticons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6zM5 8h14V6H5zm0 2v10h14V10z"></svg:path>`,
})
export class PixelarticonsCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarAlertIcon],svg[pixelarticons-calendar-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V4H5v2H3v14h14V6h-2V4h-2v2H7zm-2 5V8h10v2zm0 2h10v6H5zm16-3V8h-2v6h2zm0 6h-2v2h2z"></svg:path>`,
})
export class PixelarticonsCalendarAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarArrowLeftIcon],svg[pixelarticons-calendar-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v8h2v-2h14v10h-8v2h10V4h-4zm2 6H5V6h14zm-6 8H7v-2h2v-2H7v2H5v2H3v2h2v2h2v2h2v-2H7v-2h6z"></svg:path>`,
})
export class PixelarticonsCalendarArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarArrowRightIcon],svg[pixelarticons-calendar-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h10v-2H5V10h14v2h2V4h-4zM7 6h12v2H5V6zm14 10h-2v-2h-2v-2h-2v2h2v2h-6v2h6v2h-2v2h2v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsCalendarArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarCheckIcon],svg[pixelarticons-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6zm4 6V6H5v2zm0 2H5v10h14zm-3 2v2h-2v-2zm-4 4v-2h2v2zm-2 0h2v2h-2zm0 0H8v-2h2z"></svg:path>`,
})
export class PixelarticonsCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarExportIcon],svg[pixelarticons-calendar-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h4v-2H5V10h14v10h-2v2h4V4h-4zM7 6h12v2H5V6zm6 6h-2v6H9v-2H7v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsCalendarExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarGridIcon],svg[pixelarticons-calendar-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v2h14V5zm14 4h-6v2h6zm0 4h-6v2h6zm0 4h-6v2h6zm-8 2v-2H5v2zm-6-4h6v-2H5zm0-4h6V9H5z"></svg:path>`,
})
export class PixelarticonsCalendarGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarImportIcon],svg[pixelarticons-calendar-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h4v-2H5V10h14v10h-2v2h4V4h-4zM7 6h12v2H5V6zm6 16h-2v-6H9v-2h2v-2h2v2h2v2h-2zm2-6v2h2v-2zm-6 0v2H7v-2z"></svg:path>`,
})
export class PixelarticonsCalendarImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarMinusIcon],svg[pixelarticons-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm10-6H9v2h6z"></svg:path>`,
})
export class PixelarticonsCalendarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarMonthIcon],svg[pixelarticons-calendar-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6zM9 6H5v2h14V6zm-4 4v10h14V10zm2 2h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsCalendarMonthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarMultipleIcon],svg[pixelarticons-calendar-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h2v2h4v14H5V4h4V2h2v2h6zm-6 4H7v2h14V6zm-4 4v6h14v-6zM3 20h16v2H1V8h2z"></svg:path>`,
})
export class PixelarticonsCalendarMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarMultipleCheckIcon],svg[pixelarticons-calendar-multiple-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h2v2h4v10h-2v-4H7v6h6v2H5V4h4V2h2v2h6zm-6 4H7v2h14V6zm2 14v2H1V8h2v12zm2-2h2v2h-2zm4 2v2h-2v-2zm2-2h-2v2h2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsCalendarMultipleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarPlusIcon],svg[pixelarticons-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6zM9 6H5v2h14V6zm-4 4v10h14V10zm6 2h2v2h2v2h-2v2h-2v-2H9v-2h2z"></svg:path>`,
})
export class PixelarticonsCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarRangeIcon],svg[pixelarticons-calendar-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm4-8H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsCalendarRangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarRemoveIcon],svg[pixelarticons-calendar-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm6-4H9v2h2zm0-2v-2H9v2zm2 0h-2v2h2v2h2v-2h-2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsCalendarRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarSearchIcon],svg[pixelarticons-calendar-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v2h4v8h-2v-2H5v10h6v2H3V4h4V2h2v2h6zM9 6H5v2h14V6zm8 6v2h-4v-2zm-4 6h-2v-4h2zm4 0h-4v2h6v2h2v-2h-2v-6h-2z"></svg:path>`,
})
export class PixelarticonsCalendarSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarSortAscendingIcon],svg[pixelarticons-calendar-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5H8v2H4V5H2v2H0v12h12V7h-2zM2 9h8v2H2zm0 8v-4h8v4zM20 7h-2v8h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsCalendarSortAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarSortDescendingIcon],svg[pixelarticons-calendar-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5H8v2H4V5H2v2H0v12h12V7h-2zM2 9h8v2H2zm0 8v-4h8v4zm18 2h-2v-8h-2V9h2V7h2v2h2v2h-2zm2-8v2h2v-2zm-6 0v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsCalendarSortDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarTextIcon],svg[pixelarticons-calendar-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6zM9 6H5v2h14V6zm-4 4v10h14V10zm2 2h8v2H7zm4 6v-2H7v2z"></svg:path>`,
})
export class PixelarticonsCalendarTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarTodayIcon],svg[pixelarticons-calendar-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm6-4v-4H7v4z"></svg:path>`,
})
export class PixelarticonsCalendarTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarTomorrowIcon],svg[pixelarticons-calendar-tomorrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm12-2v-4h-4v4z"></svg:path>`,
})
export class PixelarticonsCalendarTomorrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarWeekIcon],svg[pixelarticons-calendar-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm12-8H7v2h10z"></svg:path>`,
})
export class PixelarticonsCalendarWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarWeekBeginIcon],svg[pixelarticons-calendar-week-begin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm4-8H7v6h2z"></svg:path>`,
})
export class PixelarticonsCalendarWeekBeginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarWeekendIcon],svg[pixelarticons-calendar-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm12-8h-2v6h2z"></svg:path>`,
})
export class PixelarticonsCalendarWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCameraIcon],svg[pixelarticons-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3H7v2H2v16h20V5h-5V3zm8 4h3v12H4V7h5V5h6v2zm-7 2h4v2h-4zm4 6h-4v2h4zh2v-4h-2zm-6-4h2v4H8z"></svg:path>`,
})
export class PixelarticonsCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCameraAddIcon],svg[pixelarticons-camera-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H3v3H0v2h3v3h2V7h3V5H5zm12 1h-7v2h5v2h5v12H5v-7H3v9h19V5h-5zm-7 6h4v2h2v4h-2v2h-4v-2h4v-4h-4zm-2 2h2v4H8z"></svg:path>`,
})
export class PixelarticonsCameraAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCameraAltIcon],svg[pixelarticons-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4H2v16h20V4zm16 2v12H4V6zM8 8H6v2h2zm4 0h4v2h-4zm-2 2h2v4h-2zm6 4h2v-4h-2zm0 0h-4v2h4z"></svg:path>`,
})
export class PixelarticonsCameraAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCameraFaceIcon],svg[pixelarticons-camera-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h10v2h5v16H2V7h2v12h16V7h-5V5H9v2H2V5h5zm7 12h-4v2h4zm-4-2v2H8v-2zm0-2V9H8v2zm6 2v2h-2v-2zm0-2V9h-2v2z"></svg:path>`,
})
export class PixelarticonsCameraFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCarIcon],svg[pixelarticons-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H7v2H5v2H3v12h4v-2h10v2h4V8h-2V6h-2zm0 2v2h2v2H5V8h2V6zm2 10H5v-4h14zm-2-3h-2v2h2zM7 13h2v2H7z"></svg:path>`,
})
export class PixelarticonsCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCardIcon],svg[pixelarticons-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v16H2zm18 14V6H4v12z"></svg:path>`,
})
export class PixelarticonsCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCardIdIcon],svg[pixelarticons-card-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v16H2zm2 2v4h16V6zm16 6H10v2h10zm0 4h-4v2h4zm-6 2v-2H4v2zM4 14h4v-2H4z"></svg:path>`,
})
export class PixelarticonsCardIdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCardPlusIcon],svg[pixelarticons-card-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h10v-2H4V6h16v4h2zm-3 13h3v-2h-3v-3h-2v3h-3v2h3v3h2z"></svg:path>`,
})
export class PixelarticonsCardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCardStackIcon],svg[pixelarticons-card-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h18v12H2V4zm16 10V6H4v8zm2 4H2v2h20z"></svg:path>`,
})
export class PixelarticonsCardStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCardTextIcon],svg[pixelarticons-card-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4H2v16h20V4zm0 2h16v12H4zm2 2h12v2H6zm0 4h10v2H6z"></svg:path>`,
})
export class PixelarticonsCardTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCartIcon],svg[pixelarticons-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4v4h16v11H4V4H2zm4 13h14V8H6zm0 4h3v3H6zm14 0h-3v3h3z"></svg:path>`,
})
export class PixelarticonsCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCastIcon],svg[pixelarticons-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h18v18h-8v-2h6V5H4v4H2V3zm0 16H2v2h2zm-2-4h4v2H2zm8-4H2v2h8v8h2V11zm-4 4h2v6H6z"></svg:path>`,
})
export class PixelarticonsCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCellularSignal0Icon],svg[pixelarticons-cellular-signal-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v16h-6V4zm-2 2h-2v12h2zm-5 4v10H9V10zm-2 8v-6h-2v6zm-5-4v6H2v-6zm-2 4v-2H4v2z"></svg:path>`,
})
export class PixelarticonsCellularSignal0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCellularSignal1Icon],svg[pixelarticons-cellular-signal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4v16h6V4zm2 2h2v12h-2zm-9 4v10h6V10zm2 8v-6h2v6zm-3-4H2v6h6z"></svg:path>`,
})
export class PixelarticonsCellularSignal1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCellularSignal2Icon],svg[pixelarticons-cellular-signal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4v16h6V4zm4 2v12h-2V6zM2 14h6v6H2zm13-4H9v10h6z"></svg:path>`,
})
export class PixelarticonsCellularSignal2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCellularSignal3Icon],svg[pixelarticons-cellular-signal-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h6v16h-6zM2 14h6v6H2zm13-4H9v10h6z"></svg:path>`,
})
export class PixelarticonsCellularSignal3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCellularSignalOffIcon],svg[pixelarticons-cellular-signal-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v2h2v2H2v2h2V6h2v2h2V6H6V4h2V2H6v2H4zm12 2v16h6V4zm2 2h2v12h-2zm-9 4v10h6V10zm2 8v-6h2v6zm-3-4v6H2v-6zm-2 4v-2H4v2z"></svg:path>`,
})
export class PixelarticonsCellularSignalOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartIcon],svg[pixelarticons-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18V3zm14 2v14H5V5zM9 11H7v6h2zm2-4h2v10h-2zm6 6h-2v4h2z"></svg:path>`,
})
export class PixelarticonsChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartAddIcon],svg[pixelarticons-chart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h10v2H5v14h14v-8h2v10H3zm6 8H7v6h2zm2-4h2v10h-2zm6 6h-2v4h2zm0-10h2v2h2v2h-2v2h-2V7h-2V5h2z"></svg:path>`,
})
export class PixelarticonsChartAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartBarIcon],svg[pixelarticons-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h2v14h-2zm-2 4H9v10h2zm-4 4H5v6h2zm12 0h-2v6h2z"></svg:path>`,
})
export class PixelarticonsChartBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartDeleteIcon],svg[pixelarticons-chart-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H3v18h18V11h-2v8H5V5h8zm-6 8h2v6H7zm6-4h-2v10h2zm2 6h2v4h-2zm2-6h-2v2h2zm0-2V3h-2v2zm2 0h-2v2h2v2h2V7h-2zm0 0V3h2v2z"></svg:path>`,
})
export class PixelarticonsChartDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartMinusIcon],svg[pixelarticons-chart-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H3v18h18V11h-2v8H5V5h8zm-6 8h2v6H7zm6-4h-2v10h2zm2 6h2v4h-2zm6-8h-6v2h6z"></svg:path>`,
})
export class PixelarticonsChartMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartMultipleIcon],svg[pixelarticons-chart-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2H1v16h18V2zm0 2h14v12H3zm18 2v14H5v2h18V6zM7 8H5v6h2zm2-2h2v8H9zm6 4h-2v4h2z"></svg:path>`,
})
export class PixelarticonsChartMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChatIcon],svg[pixelarticons-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2z"></svg:path>`,
})
export class PixelarticonsChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCheckIcon],svg[pixelarticons-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm-2 2h2v-2h-2zm-2 2h2v-2h-2zm-2 0v2h2v-2zm-2-2h2v2H6zm0 0H4v-2h2z"></svg:path>`,
})
export class PixelarticonsCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCheckDoubleIcon],svg[pixelarticons-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm-2 2v-2h2v2zm-2 2v-2h2v2zm-2 0h2v2H5zm-2-2h2v2H3zm0 0H1v-2h2zm8 2h2v2h-2zm4-2v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm2-2h-2v2h2zm0 0h2V6h-2z"></svg:path>`,
})
export class PixelarticonsCheckDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCheckboxIcon],svg[pixelarticons-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18V3zm0 2h14v14H5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9z"></svg:path>`,
})
export class PixelarticonsCheckboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCheckboxOnIcon],svg[pixelarticons-checkbox-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 16V5H5v14z"></svg:path>`,
})
export class PixelarticonsCheckboxOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChecklistIcon],svg[pixelarticons-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h2v2h-2zm-2 4V6h2v2zm-2 0h2v2h-2zm0 0h-2V6h2zM3 6h8v2H3zm8 10H3v2h8zm7 2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2zm0 0v2h2v-2z"></svg:path>`,
})
export class PixelarticonsChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChessIcon],svg[pixelarticons-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h4v4H4v4h4v4h4v-4h4v4h4v-4h-4v-4h4V8h-4V4h-4v4H8V4zm8 8H8v4h4zm0-4v4h4V8z"></svg:path>`,
})
export class PixelarticonsChessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChevronDownIcon],svg[pixelarticons-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7z"></svg:path>`,
})
export class PixelarticonsChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChevronLeftIcon],svg[pixelarticons-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v2h-2V5zm-4 4V7h2v2zm-2 2V9h2v2zm0 2H8v-2h2zm2 2v-2h-2v2zm0 0h2v2h-2zm4 4v-2h-2v2z"></svg:path>`,
})
export class PixelarticonsChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChevronRightIcon],svg[pixelarticons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v2h2V5zm4 4V7h-2v2zm2 2V9h-2v2zm0 2h2v-2h-2zm-2 2v-2h2v2zm0 0h-2v2h2zm-4 4v-2h2v2z"></svg:path>`,
})
export class PixelarticonsChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChevronUpIcon],svg[pixelarticons-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16H5v-2h2v-2h2v-2h2V8h2v2h2v2h2v2h2v2h-2v-2h-2v-2h-2v-2h-2v2H9v2H7z"></svg:path>`,
})
export class PixelarticonsChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChevronsHorizontalIcon],svg[pixelarticons-chevrons-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9V7h2v2zm-2 2V9h2v2zm0 2H4v-2h2zm2 2v-2H6v2zm0 0h2v2H8zm8-6V7h-2v2zm2 2V9h-2v2zm0 2v-2h2v2zm-2 2v-2h2v2zm0 0v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsChevronsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChevronsVerticalIcon],svg[pixelarticons-chevrons-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v2h-2zM9 8V6h2v2zm0 0v2H7V8zm6 0h-2V6h2zm0 0h2v2h-2zm-6 8H7v-2h2zm2 2H9v-2h2zm2 0v2h-2v-2zm2-2h-2v2h2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsChevronsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCircleIcon],svg[pixelarticons-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7v2H5v2H3v10h2v2h2v2h10v-2h2v-2h2V7h-2V5h-2zm0 2v2h2v10h-2v2H7v-2H5V7h2V5z"></svg:path>`,
})
export class PixelarticonsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsClipboardIcon],svg[pixelarticons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h6v2h4v18H4V4h4V2zm6 4v2H8V6H6v14h12V6zm-2 0V4h-4v2z"></svg:path>`,
})
export class PixelarticonsClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsClockIcon],svg[pixelarticons-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v2H3v14h2v2h14v-2h2V5h-2zm0 2v14H5V5zm-8 2h2v6h4v2h-6z"></svg:path>`,
})
export class PixelarticonsClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloseIcon],svg[pixelarticons-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"></svg:path>`,
})
export class PixelarticonsCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloseBoxIcon],svg[pixelarticons-close-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18V3zm14 2v14H5V5zm-8 4H9V7H7v2h2v2h2v2H9v2H7v2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2v-2h2V9h2V7h-2v2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsCloseBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloudIcon],svg[pixelarticons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-6v2H8v2H4v2H2v2H0v6h2v2h20v-2h2v-6h-2v-2h-2V8h-2V6h-2zm2 8h4v6H2v-6h2v-2h4v2h2v-2H8V8h2V6h6v2h2zm0 0v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloudDoneIcon],svg[pixelarticons-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-6v2H8v2H4v2H2v2H0v6h2v2h20v-2h2v-6h-2v-2h-2V8h-2V6h-2zm0 2v2h2v4h4v6H2v-6h2v-2h4V8h2V6zm-6 6H8v2h2v2h2v-2h2v-2h2v-2h-2v2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsCloudDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloudDownloadIcon],svg[pixelarticons-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h6v2h-6zM8 8V6h2v2zm-4 2V8h4v2zm-2 2v-2h2v2zm0 6H0v-6h2zm0 0h5v2H2zM18 8h-2V6h2zm4 4h-4V8h2v2h2zm0 6v-6h2v6zm0 0v2h-5v-2zm-11 2h2v-2h2v-2h2v-2h-4V9h-2v5H7v2h2v2h2z"></svg:path>`,
})
export class PixelarticonsCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloudMoonIcon],svg[pixelarticons-cloud-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-8v2H8v2H6v4h2V6h2V4h4v2h-2v4h2v2h4v-2h2v4h-2v2h2v-2h2V6h-2v2h-2v2h-4V6h2V4h2zM8 14v-2h4v2zm0 2v-2H4v2H2v4h2v2h10v-2h2v-4h-2v-2h-2v2h2v4H4v-4zm0 0h2v2H8z"></svg:path>`,
})
export class PixelarticonsCloudMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloudSunIcon],svg[pixelarticons-cloud-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0h2v4h-2zm1 12H8v2H4v2H2v4h2v2h10v-2h2v-4h-2v-2h-2zm0 2v2h2v4H4v-4h4v2h2v-2H8v-2zM8 6h6v2H8zm0 2v2H6V8zm8 2h-2V8h2zm0 0h2v2h-2zm4-8h2v2h-2zm0 2v2h-2V4zM2 2h2v2H2zm2 2h2v2H4zm20 7h-4v2h4z"></svg:path>`,
})
export class PixelarticonsCloudSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloudUploadIcon],svg[pixelarticons-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h6v2h-6zM8 8V6h2v2zm-4 2V8h4v2zm-2 2v-2h2v2zm0 6H0v-6h2zm0 0h7v2H2zM18 8h-2V6h2zm4 4h-4V8h2v2h2zm0 6v-6h2v6zm0 0v2h-7v-2zM11 9h2v2h2v2h2v2h-4v5h-2v-5H7v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCocktailIcon],svg[pixelarticons-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H3v4h2v2h2v2h2v2h2v6H7v2h10v-2h-4v-6h2v-2h2V9h2V7h2V3zm0 4H5V5h14z"></svg:path>`,
})
export class PixelarticonsCocktailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCodeIcon],svg[pixelarticons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5h2v2H8zM6 7h2v2H6zM4 9h2v2H4zm-2 2h2v2H2zm2 2h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm8-12h-2v2h2zm2 2h-2v2h2zm2 2h-2v2h2zm2 2h-2v2h2zm-2 2h-2v2h2zm-2 2h-2v2h2zm-2 2h-2v2h2z"></svg:path>`,
})
export class PixelarticonsCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCoffeeIcon],svg[pixelarticons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h18v7h-4v5H4zm14 5h2V6h-2zm-2-3H6v8h10zm3 14H3v-2h16z"></svg:path>`,
})
export class PixelarticonsCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCoffeeAltIcon],svg[pixelarticons-coffee-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H5v4h2zm4 0H9v4h2zm2 0h2v4h-2zm8 6H3v12h14v-5h4zm-2 5h-2v-3h2zM5 11h10v8H5z"></svg:path>`,
})
export class PixelarticonsCoffeeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCoinIcon],svg[pixelarticons-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2H6zM4 6V4h2v2zm0 12V6H2v12zm2 2v-2H4v2zm12 0v2H6v-2zm2-2v2h-2v-2zm0-12h2v12h-2zm0 0V4h-2v2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3z"></svg:path>`,
})
export class PixelarticonsCoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCollapseIcon],svg[pixelarticons-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h-2v2h-2v2h-2V5H9V3H7v2h2v2h2v2h2V7h2V5h2zM4 13h16v-2H4zm9 4h-2v-2h2zm2 2h-2v-2h2zm0 0h2v2h-2zm-6 0h2v-2H9zm0 0H7v2h2z"></svg:path>`,
})
export class PixelarticonsCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsColorsSwatchIcon],svg[pixelarticons-colors-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h8v20H12V2zm6 2h-6v16h6zM10 20H4v-6h6v-2H6v-2H4V8h2V6h2V4h2V2H8v2H6v2H4v2H2v2h2v2H2v10h8zm8-4h-2v2h2z"></svg:path>`,
})
export class PixelarticonsColorsSwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCommandIcon],svg[pixelarticons-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v8h2zm16 0h2v8h-2zm-6 6h-4V2H4v2h4v4H4v2h4v4H4v2h4v4H4v2h6v-6h4v6h2v-6h4v-2h-4v-4h4V8h-4V2h-2zm-4 6v-4h4v4zM20 2h-4v2h4zM2 14h2v8H2zm14 6h4v2h-4zm6-6h-2v8h2z"></svg:path>`,
})
export class PixelarticonsCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCommentIcon],svg[pixelarticons-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v14h2V4h16v12h-8v2h-2v2H8v-4H2v2h4v4h4v-2h2v-2h10z"></svg:path>`,
})
export class PixelarticonsCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsContactIcon],svg[pixelarticons-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3H0v18h24V3zm20 2v14H2V5zM10 7H6v4h4zm-6 6h8v4H4zm16-6h-6v2h6zm-6 4h6v2h-6zm6 4h-6v2h6z"></svg:path>`,
})
export class PixelarticonsContactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsContactDeleteIcon],svg[pixelarticons-contact-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H0v18h16v-2H2V5h20v10h2V3zM6 7h4v4H6zm0 8H4v2h2zm4 0H6v-2h4zm0 0v2h2v-2zm4-8h6v2h-6zm6 4h-6v2h6zm-6 4h2v2h-2zm8 4h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsContactDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsContactMultipleIcon],svg[pixelarticons-contact-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h20v14H4zm18 12V5H6v10zm-2 4H2V7H0v14h20zM9 7h2v2H9zm3 4H8v2h4zm2-4h6v2h-6zm6 4h-6v2h6z"></svg:path>`,
})
export class PixelarticonsContactMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsContactPlusIcon],svg[pixelarticons-contact-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h22v11h-2V5H2v14h12v2H0V3zm8 4H6v4h4zm-6 6h8v4H4zm16-6h-6v2h6zm-6 4h6v2h-6zm3 4h-3v2h3zm4 6v3h-2v-3h-3v-2h3v-3h2v3h3v2z"></svg:path>`,
})
export class PixelarticonsContactPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCopyIcon],svg[pixelarticons-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h11v2H6v13H4zm4 4h12v16H8zm2 2v12h8V8z"></svg:path>`,
})
export class PixelarticonsCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerDownLeftIcon],svg[pixelarticons-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16H8v2H6v-2H4v-2h2v-2h2v2h10V4h2v12zM8 12v-2h2v2zm0 6v2h2v-2z"></svg:path>`,
})
export class PixelarticonsCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerDownRightIcon],svg[pixelarticons-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h10v2h2v-2h2v-2h-2v-2h-2v2H6V4H4v12zm10-4v-2h-2v2zm0 6v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerLeftDownIcon],svg[pixelarticons-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v10H6v2h2v2h2v-2h2v-2h-2V6h10V4H8zm4 10h2v-2h-2zm-6 0H4v-2h2z"></svg:path>`,
})
export class PixelarticonsCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerLeftUpIcon],svg[pixelarticons-corner-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18V8H6V6h2V4h2v2h2v2h-2v10h10v2H8zm4-10h2v2h-2zM6 8H4v2h2z"></svg:path>`,
})
export class PixelarticonsCornerLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerRightDownIcon],svg[pixelarticons-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6v10h2v2h-2v2h-2v-2h-2v-2h2V6H4V4h12zm-4 10h-2v-2h2zm6 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerRightUpIcon],svg[pixelarticons-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18V8h2V6h-2V4h-2v2h-2v2h2v10H4v2h12zM12 8h-2v2h2zm6 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsCornerRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerUpLeftIcon],svg[pixelarticons-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H8V6H6v2H4v2h2v2h2v-2h10v10h2V8zM8 12v2h2v-2zm0-6V4h2v2z"></svg:path>`,
})
export class PixelarticonsCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerUpRightIcon],svg[pixelarticons-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h10V6h2v2h2v2h-2v2h-2v-2H6v10H4V8zm10 4v2h-2v-2zm0-6V4h-2v2z"></svg:path>`,
})
export class PixelarticonsCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardIcon],svg[pixelarticons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16v2H4v2h16v4H4v6h16v2H2V4zm18 0h-2v16h2z"></svg:path>`,
})
export class PixelarticonsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardDeleteIcon],svg[pixelarticons-credit-card-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h12v-2H4v-6h16V8H4V6h16zm0 0h2v8h-2zm2 14h-2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2z"></svg:path>`,
})
export class PixelarticonsCreditCardDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardMinusIcon],svg[pixelarticons-credit-card-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h12v-2H4v-6h16V8H4V6h16zm0 0h2v8h-2zm2 12h-6v2h6z"></svg:path>`,
})
export class PixelarticonsCreditCardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardMultipleIcon],svg[pixelarticons-credit-card-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h16v2H3v2h14v4H3v4h14v2H1zm18 0h-2v14h2zM5 19h16v2H5zM23 7h-2v14h2z"></svg:path>`,
})
export class PixelarticonsCreditCardMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardPlusIcon],svg[pixelarticons-credit-card-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h18v2H4v2h16v4H4v6h10v2H2zm20 0h-2v8h2zm-4 10h2v2h2v2h-2v2h-2v-2h-2v-2h2z"></svg:path>`,
})
export class PixelarticonsCreditCardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardSettingsIcon],svg[pixelarticons-credit-card-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h18v-2H4v-6h16V8H4V6h16zm0 0h2v16h-2zm-7 18h-2v2h2zm2 0h2v2h-2zm-6 0H7v2h2z"></svg:path>`,
})
export class PixelarticonsCreditCardSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardWirelessIcon],svg[pixelarticons-credit-card-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8v2H6v2h2V4h8v2h2V4h-2zM8 8h2v2H8zm6 0V6h-4v2zm0 0h2v2h-2zM4 11h16v12H4zm14 10v-3H6v3zm0-6v-2H6v2z"></svg:path>`,
})
export class PixelarticonsCreditCardWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCropIcon],svg[pixelarticons-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H6v4H2v2h14v14h2v-4h4v-2h-4V6H8zm0 8H6v8h8v-2H8z"></svg:path>`,
})
export class PixelarticonsCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCutIcon],svg[pixelarticons-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v2H2zm4 4H4V4h2zm2 2H6V6h2zm2 2V8H8v2zm4 0h-4v4H2v8h8v-8h4v8h8v-8h-8zm2-2v2h-2V8zm2-2v2h-2V6zm2-2h-2v2h2zm0 0V2h2v2zM4 20v-4h4v4zm12 0v-4h4v4z"></svg:path>`,
})
export class PixelarticonsCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDashboardIcon],svg[pixelarticons-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v10H3zm2 2v6h4V5zm8-2h8v6h-8zm2 2v2h4V5zm-2 6h8v10h-8zm2 2v6h4v-6zM3 15h8v6H3zm2 2v2h4v-2z"></svg:path>`,
})
export class PixelarticonsDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDebugIcon],svg[pixelarticons-debug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 2h2v2H6zm4 9h4v2h-4zm4 4h-4v2h4z"></svg:path><svg:path d="M16 4h-2v2h-4V4H8v2H6v3H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h12v-3h2v2h2v-2h-2v-2h-2v-2h4v-2h-4v-2h2V9h2V7h-2v2h-2V6h-2zM8 20V8h8v12zm8-16V2h2v2z"></svg:path></svg:g>`,
})
export class PixelarticonsDebugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDebugCheckIcon],svg[pixelarticons-debug-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H6v2h2v2H6v3H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h6v-2H8V8h8v6h2v-3h2V9h2V7h-2v2h-2V6h-2V4h2V2h-2v2h-2v2h-4V4H8zm6 9h-4v2h4zm-4 4h2v2h-2zm4 3h2v2h-2zm4 2v2h-2v-2zm2-2h-2v2h2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsDebugCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDebugOffIcon],svg[pixelarticons-debug-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h2v2h-2zm4 7h-2V6h-2V4h-2v2h-2v2h4v5h2v2h4v-2h-4v-2h2zm0 0V7h2v2zM8 20v-9H6V9H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h10v-2zm2-5h2v2h-2zM2 2h2v2H2zm4 4H4V4h2zm2 2H6V6h2zm2 2H8V8h2zm0 0v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2z"></svg:path>`,
})
export class PixelarticonsDebugOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDebugPauseIcon],svg[pixelarticons-debug-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H6v2h2v2H6v3H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h8v-2H8V8h8v6h2v-3h2V9h2V7h-2v2h-2V6h-2V4h2V2h-2v2h-2v2h-4V4H8zm6 9h-4v2h4zm-4 4h4v2h-4zm6 1h2v6h-2zm6 0h-2v6h2z"></svg:path>`,
})
export class PixelarticonsDebugPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDebugPlayIcon],svg[pixelarticons-debug-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h2v2H6zm10 2h-2v2h-4V4H8v2H6v3H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h8v-2H8V8h8v3h4V9h2V7h-2v2h-2V6h-2zm0 0V2h2v2zm-6 7h4v2h-4zm4 4h-4v2h4zm4-2h-2v10h2v-2h2v-2h2v-2h-2v-2h-2z"></svg:path>`,
})
export class PixelarticonsDebugPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDebugStopIcon],svg[pixelarticons-debug-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h2v2H6zm10 2h-2v2h-4V4H8v2H6v3H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h8v-2H8V8h8v6h2v-3h2V9h2V7h-2v2h-2V6h-2zm0 0V2h2v2zm-6 7h4v2h-4zm4 4h-4v2h4zm8 1h-6v6h6z"></svg:path>`,
})
export class PixelarticonsDebugStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeleteIcon],svg[pixelarticons-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H7v2H5v2H3v2H1v2h2v2h2v2h2v2h16V5zM7 17v-2H5v-2H3v-2h2V9h2V7h14v10zm8-6h-2V9h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0V9h2v2z"></svg:path>`,
})
export class PixelarticonsDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeskphoneIcon],svg[pixelarticons-deskphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v6h8V5zm10 0v14h4V5zm-2 14v-2h-3v2zm-5 0v-2H5v2zm-3-4h3v-2H5zm5-2v2h3v-2z"></svg:path>`,
})
export class PixelarticonsDeskphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceLaptopIcon],svg[pixelarticons-device-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4H4v12h16V4zm12 2v8H6V6zm4 12H2v2h20z"></svg:path>`,
})
export class PixelarticonsDeviceLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDevicePhoneIcon],svg[pixelarticons-device-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v18H6zm10 16V5h-2v2h-4V5H8v14zm-5-4h2v2h-2z"></svg:path>`,
})
export class PixelarticonsDevicePhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceTabletIcon],svg[pixelarticons-device-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2H4v20h16V2zm12 2v16H6V4zm-5 12h-2v2h2z"></svg:path>`,
})
export class PixelarticonsDeviceTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceTvIcon],svg[pixelarticons-device-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20V6h-7V4h-2v2h-2V4H9v2H2zM9 4V2H7v2zm6 0h2V2h-2zm5 4v10H4V8z"></svg:path>`,
})
export class PixelarticonsDeviceTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceTvSmartIcon],svg[pixelarticons-device-tv-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h18v14h-6v2H8v-2H2V4zm16 12V6H4v10z"></svg:path>`,
})
export class PixelarticonsDeviceTvSmartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceVibrateIcon],svg[pixelarticons-device-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3H6v18h12V3zm8 2v14H8V5zm-3 10h-2v2h2zm7-8h2v2h-2zm2 4V9h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm0 0v2h-2v-2zM2 17h2v-2H2v-2h2v-2H2V9h2V7H2v2H0v2h2v2H0v2h2z"></svg:path>`,
})
export class PixelarticonsDeviceVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceWatchIcon],svg[pixelarticons-device-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v4h5v12h-5v4H8v-4H3V6h5zM5 16h14V8H5zm6-6h2v2h2v2h-4z"></svg:path>`,
})
export class PixelarticonsDeviceWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDevicesIcon],svg[pixelarticons-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h16v6h4v14H12v-6H2zm14 6V4H4v10h8V8zm-6-2H6v2h4zm10 14V10h-6v10zm-4-4h2v2h-2zM6 10h4v2H6z"></svg:path>`,
})
export class PixelarticonsDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDiceIcon],svg[pixelarticons-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18V3zm14 2v14H5V5zM9 7H7v2h2zm6 0h2v2h-2zm-6 8H7v2h2zm6 0h2v2h-2zm-2-4h-2v2h2z"></svg:path>`,
})
export class PixelarticonsDiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDollarIcon],svg[pixelarticons-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v4h6v2H7v3H5V6h6zM5 18h6v4h2v-4h6v-2H5zm14-7H5v2h12v3h2z"></svg:path>`,
})
export class PixelarticonsDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDownasaurIcon],svg[pixelarticons-downasaur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2zm2 6h2V8H8z"></svg:path>`,
})
export class PixelarticonsDownasaurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDownloadIcon],svg[pixelarticons-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17V3h-2v10H9v-2H7v2h2v2h2v2zm8 2v-4h-2v4H5v-4H3v6h18zm-8-6v2h2v-2h2v-2h-2v2z"></svg:path>`,
})
export class PixelarticonsDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDraftIcon],svg[pixelarticons-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h-4v2H8v2H6v2H4v2H2v12h20V10h-2V8h-2V6h-2V4h-2zm0 2v2h2v2h2v4h-2v2h-2v2h-4v-2H8v-2H6V8h2V6h2V4zm-8 8v2h2v2h2v2h4v-2h2v-2h2v-2h2v8H4v-8z"></svg:path>`,
})
export class PixelarticonsDraftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDragAndDropIcon],svg[pixelarticons-drag-and-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm14 4h2v6h-2V9H9v10h4v2H7V7zM7 3h2v2H7zM5 7H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm6-12h2v2h-2zm6 0h-2v2h2zm-2 14v-2h6v2h-2v2h-2v2h-2zm4 2v2h2v-2z"></svg:path>`,
})
export class PixelarticonsDragAndDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDropIcon],svg[pixelarticons-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v2H9v4H7v4H5v6h2v2h2v2h6v-2h2v-2h2v-6h-2V8h-2V4h-2zm0 2v4h2v4h2v6h-2v2H9v-2H7v-6h2V8h2V4z"></svg:path>`,
})
export class PixelarticonsDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDropAreaIcon],svg[pixelarticons-drop-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm2 0h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm4 0h2v2h-2zM3 7h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm2 0h2v2H7zm6 0h-2v2h2zm6-8h2v2h-2zm2-4h-2v2h2zm-6 10v-2h6v2h-2v2h-2v2h-2zm4 2v2h2v-2z"></svg:path>`,
})
export class PixelarticonsDropAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDropFullIcon],svg[pixelarticons-drop-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v2h2v4h2v4h2v6h-2v2h-2v2H9v-2H7v-2H5v-6h2V8h2V4h2z"></svg:path>`,
})
export class PixelarticonsDropFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDropHalfIcon],svg[pixelarticons-drop-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v2H9v4H7v4H5v6h2v2h2v2h6v-2h2v-2h2v-6h-2V8h-2V4h-2zm0 2v4h2v4h2v3H7v-3h2V8h2V4z"></svg:path>`,
})
export class PixelarticonsDropHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDuplicateIcon],svg[pixelarticons-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h12v4h4v14H7v-4H3V3zm10 4V5H5v10h2V7zM9 17v2h10V9H9z"></svg:path>`,
})
export class PixelarticonsDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDuplicateAltIcon],svg[pixelarticons-duplicate-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1H3v14h10v2h-2v2h2v-2h2v-2h2v-2h-2v-2h-2V9h-2v2h2v2H5V3h12V1zm4 4H7v6h2V7h10v14H9v-4H7v6h14V5z"></svg:path>`,
})
export class PixelarticonsDuplicateAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsEditIcon],svg[pixelarticons-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-2v2h-2v2h-2v2h-2v2H8v2H6v2H4v2H2v6h6v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V8h2V6h-2V4h-2zm0 8h-2v2h-2v2h-2v2h-2v2H8v-2H6v-2h2v-2h2v-2h2V8h2V6h2v2h2zM6 16H4v4h4v-2H6z"></svg:path>`,
})
export class PixelarticonsEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsEditBoxIcon],svg[pixelarticons-edit-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-2v2h2zM4 4h6v2H4v14h14v-6h2v8H2V4zm4 8H6v6h6v-2h2v-2h-2v2H8zm4-2h-2v2H8v-2h2V8h2V6h2v2h-2zm2-6h2v2h-2zm4 0h2v2h2v2h-2v2h-2v2h-2v-2h2V8h2V6h-2zm-4 8h2v2h-2z"></svg:path>`,
})
export class PixelarticonsEditBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsEuroIcon],svg[pixelarticons-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4h10v2H9v3h7v2H9v2h7v2H9v3h10v2H7v-5H5v-2h2v-2H5V9h2V4z"></svg:path>`,
})
export class PixelarticonsEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsExpandIcon],svg[pixelarticons-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h2v2h2v2h2V7h-2V5h-2V3h-2zM9 7V5h2v2zm0 0v2H7V7zm-5 6h16v-2H4zm9 6h-2v-2H9v-2H7v2h2v2h2v2h2zm2-2h-2v2h2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsExternalLinkIcon],svg[pixelarticons-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4zM11 5H3v16h16v-8h-2v6H5V7h6z"></svg:path>`,
})
export class PixelarticonsExternalLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsEyeIcon],svg[pixelarticons-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6h8v2H8zm-4 4V8h4v2zm-2 2v-2h2v2zm0 2v-2H0v2zm2 2H2v-2h2zm4 2H4v-2h4zm8 0v2H8v-2zm4-2v2h-4v-2zm2-2v2h-2v-2zm0-2h2v2h-2zm-2-2h2v2h-2zm0 0V8h-4v2zm-10 1h4v4h-4z"></svg:path>`,
})
export class PixelarticonsEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsEyeClosedIcon],svg[pixelarticons-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h2v2H0zm4 4H2V9h2zm4 2v-2H4v2H2v2h2v-2zm8 0H8v2H6v2h2v-2h8v2h2v-2h-2zm4-2h-4v2h4v2h2v-2h-2zm2-2v2h-2V9zm0 0V7h2v2z"></svg:path>`,
})
export class PixelarticonsEyeClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileIcon],svg[pixelarticons-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22h18V8h-2V6h-2v2h-2V6h2V4h-2V2H3zm2-2V4h8v6h6v10z"></svg:path>`,
})
export class PixelarticonsFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileAltIcon],svg[pixelarticons-file-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 22H3V2h12v2h2v2h2v2h2zM17 6h-2v2h2zM5 4v16h14V10h-6V4zm8 12H7v2h6zm-6-4h10v2H7zm4-4H7v2h4z"></svg:path>`,
})
export class PixelarticonsFileAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileDeleteIcon],svg[pixelarticons-file-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22h10V8h-2V6h-2v2h-2V6h2V4h-2V2H3v12h2V4h8v6h6v10h-8zm-4-2H5v2H3v-2h2v-2H3v-2h2v2h2v-2h2v2H7zm0 0h2v2H7z"></svg:path>`,
})
export class PixelarticonsFileDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileFlashIcon],svg[pixelarticons-file-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22h-6v-2h6V10h-6V4H5v8H3V2h12v2h2v2h2v2h2v14zM17 6h-2v2h2zM7 12h2v4h4v2h-2v2H9v2H7v-4H3v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsFileFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileMinusIcon],svg[pixelarticons-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22h8V8h-2V6h-2v2h-2V6h2V4h-2V2H3v13h2V4h8v6h6v10h-6zm-2-3H3v-2h8z"></svg:path>`,
})
export class PixelarticonsFileMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileMultipleIcon],svg[pixelarticons-file-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18H7V2h8v2h2v2h-2v2h2V6h2v2h2zM9 4v12h10v-6h-6V4zM3 6h2v14h12v2H3z"></svg:path>`,
})
export class PixelarticonsFileMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileOffIcon],svg[pixelarticons-file-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H3v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h6v4h2V8h-2V6h-2V4h-2V2H9v2h4v6h-2V8H9V6H7V4H5zm12 4v2h-2V6zM3 8h2v12h12v2H3z"></svg:path>`,
})
export class PixelarticonsFileOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFilePlusIcon],svg[pixelarticons-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22h-7v-2h7V10h-6V4H5v8H3V2h12v2h2v2h2v2h2v14zM17 6h-2v2h2zM8 19h3v-2H8v-3H6v3H3v2h3v3h2z"></svg:path>`,
})
export class PixelarticonsFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFillIcon],svg[pixelarticons-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h2v2H9zm4 4V4h-2v2H9v2H7v2H5v2H3v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v6h2V12h-2v-2h-2V8h-2V6zm0 0v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2h2v-2h2V8h2V6z"></svg:path>`,
})
export class PixelarticonsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFillHalfIcon],svg[pixelarticons-fill-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h2v2H9zm4 4V4h-2v2H9v2H7v2H5v2H3v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v6h2V12h-2v-2h-2V8h-2V6zm0 0v2h2v2h2v2h2v2H5v-2h2v-2h2V8h2V6z"></svg:path>`,
})
export class PixelarticonsFillHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFlagIcon],svg[pixelarticons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h10v2h8v14H11v-2H5v6H3zm2 12h8v2h6V6h-8V4H5z"></svg:path>`,
})
export class PixelarticonsFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFlattenIcon],svg[pixelarticons-flatten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v8h2v2h-2v2h-2v-2H9v-2h2zm-2 8H7V8h2zm6 0V8h2v2zm5 6H4v2h16zm-4 4H8v2h8z"></svg:path>`,
})
export class PixelarticonsFlattenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFlipToBackIcon],svg[pixelarticons-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3H7v2h2zm0 12H7v2h2zm2-12h2v2h-2zm2 12h-2v2h2zm2-12h2v2h-2zm2 12h-2v2h2zm2-12h2v2h-2zm2 4h-2v2h2zM7 7h2v2H7zm14 4h-2v2h2zM7 11h2v2H7zm14 4h-2v2h2zM3 7h2v12h12v2H3z"></svg:path>`,
})
export class PixelarticonsFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFlipToFrontIcon],svg[pixelarticons-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H7v14h14zm-2 12H9V5h10zM5 7H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zm6 0H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsFlipToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFloatCenterIcon],svg[pixelarticons-float-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h6v8H8V4zm4 6V6h-4v4zM2 6h4v2H2zm20 0h-4v2h4zm0 4h-4v2h4zM6 10H2v2h4zm-4 4h20v2H2zm20 4H2v2h20z"></svg:path>`,
})
export class PixelarticonsFloatCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFloatLeftIcon],svg[pixelarticons-float-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h6v8H2V4zm4 6V6H4v4zm14-4H12v2h10zm0 4H12v2h10zm0 4v2H2v-2zm0 6v-2H2v2z"></svg:path>`,
})
export class PixelarticonsFloatLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFloatRightIcon],svg[pixelarticons-float-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h6v8h-8V4zm4 6V6h-4v4zm-8-4H2v2h10zm0 4H2v2h10zm10 4v2H2v-2zm0 6v-2H2v2z"></svg:path>`,
})
export class PixelarticonsFloatRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFolderIcon],svg[pixelarticons-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h8v2h10v14H2V4zm16 4H10V6H4v12h16z"></svg:path>`,
})
export class PixelarticonsFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFolderMinusIcon],svg[pixelarticons-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H2v16h20V6H12zm-2 4h10v10H4V6h6zm8 6v-2h-6v2z"></svg:path>`,
})
export class PixelarticonsFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFolderPlusIcon],svg[pixelarticons-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h8v2h10v14H2V4zm16 4H10V6H4v12h16zm-6 2h2v2h2v2h-2v2h-2v-2h-2v-2h2z"></svg:path>`,
})
export class PixelarticonsFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFolderXIcon],svg[pixelarticons-folder-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H2v16h20V6H12zm-2 4h10v10H4V6h6zm6 4h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsFolderXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsForwardIcon],svg[pixelarticons-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5h-2v4H6v2H4v6h2v-2h6v4h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2z"></svg:path>`,
})
export class PixelarticonsForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsForwardburgerIcon],svg[pixelarticons-forwardburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7H3v2h10zm8 4h-2V9h-2V7h-2v2h2v2H3v2h14v2h-2v2h2v-2h2v-2h2zM3 15h10v2H3z"></svg:path>`,
})
export class PixelarticonsForwardburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFrameIcon],svg[pixelarticons-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12z"></svg:path>`,
})
export class PixelarticonsFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFrameAddIcon],svg[pixelarticons-frame-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12zm-7-7h3v2h-3v3h-2v-3H8v-2h3V9h2z"></svg:path>`,
})
export class PixelarticonsFrameAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFrameCheckIcon],svg[pixelarticons-frame-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12zm-4-9h-2v2h-2v2h-2v-2H8v2h2v2h2v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsFrameCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFrameDeleteIcon],svg[pixelarticons-frame-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12zM9 10h2v2H9zm4 2h-2v2H9v2h2v-2h2v2h2v-2h-2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsFrameDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFrameMinusIcon],svg[pixelarticons-frame-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12zM8 12h8v2H8z"></svg:path>`,
})
export class PixelarticonsFrameMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGamepadIcon],svg[pixelarticons-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm18 12V7H4v10zM8 9h2v2h2v2h-2v2H8v-2H6v-2h2zm6 0h2v2h-2zm4 4h-2v2h2z"></svg:path>`,
})
export class PixelarticonsGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGifIcon],svg[pixelarticons-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h6v2H3v6h4v-2H5v-2h4v6H1V7zm14 0h6v2h-6v2h4v2h-4v4h-2V7zm-4 0h-2v10h2z"></svg:path>`,
})
export class PixelarticonsGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGiftIcon],svg[pixelarticons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M19 12v8h-7m7-8h2V8h-3m1 4H5m13-4V4h-6m6 4H6m0 0V4h6M6 8H3v4h2m0 0v8h7m0 0V4"></svg:path>`,
})
export class PixelarticonsGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGitBranchIcon],svg[pixelarticons-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h2v12h3v3h7v-7h-3V2h8v8h-3v9h-9v3H2v-8h3zm15 6V4h-4v4zM8 19v-3H4v4h4z"></svg:path>`,
})
export class PixelarticonsGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGitCommitIcon],svg[pixelarticons-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h10v4h5v2h-5v4H7v-4H2v-2h5zm2 2v6h6V9z"></svg:path>`,
})
export class PixelarticonsGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGitMergeIcon],svg[pixelarticons-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H2v8h3v12h2V10h3v2h2v2h2v8h8v-8h-8v-2h-2v-2h-2zM4 8V4h4v4zm12 12v-4h4v4z"></svg:path>`,
})
export class PixelarticonsGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGitPullRequestIcon],svg[pixelarticons-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h8v8H7v12H5V10H2zm2 2v4h4V4zm8 1h7.09v9H22v8h-8v-8h3.09V7H12zm4 11v4h4v-4z"></svg:path>`,
})
export class PixelarticonsGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGithubIcon],svg[pixelarticons-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h4v2H7v2H5zm0 10H3V6h2zm2 2H5v-2h2zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2zm0 0v2H7v-2zm6-12v2H9V4zm4 2h-2V4h-2V2h4zm0 6V6h2v6zm-2 2v-2h2v2zm-2 2v-2h2v2zm0 2h-2v-2h2zm0 0h2v4h-2z"></svg:path>`,
})
export class PixelarticonsGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGithub2Icon],svg[pixelarticons-github-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2H6zm4 12H8v-2h2zm4 0v2h-4v-2zm0 0v-2h2v2z"></svg:path><svg:path fill="currentColor" d="M6 6V4H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2v2h-2v2H8V6zm2 6v-2h8v2h2V6h2v12h-2v2h-2v-4h-2v4h-4v-4H6v2h2v2H6v-2H4v-2h2v-2H4V6h2v6z"></svg:path>`,
})
export class PixelarticonsGithub2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGpsIcon],svg[pixelarticons-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v4h5v5h4v2h-4v5h-5v4h-2v-4H6v-5H2v-2h4V6h5V2zM8 8v8h8V8zm2 2h4v4h-4z"></svg:path>`,
})
export class PixelarticonsGpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGridIcon],svg[pixelarticons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h4V4zm6 0v4h4V4zm6 0v4h4V4zm4 6h-4v4h4zm0 6h-4v4h4zm-6 4v-4h-4v4zm-6 0v-4H4v4zm-4-6h4v-4H4zm6-4v4h4v-4z"></svg:path>`,
})
export class PixelarticonsGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGroupIcon],svg[pixelarticons-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v14h14V5zm2 2h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z"></svg:path>`,
})
export class PixelarticonsGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHdIcon],svg[pixelarticons-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2v4h4V7h2v10H9v-4H5v4H3zm10 8V7h6v2h-4v6h4v2h-6zm6 0V9h2v6z"></svg:path>`,
})
export class PixelarticonsHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHeadphoneIcon],svg[pixelarticons-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5v2H3v14h7v-8H5V6h14v6h-5v8h7V6h-2zm-3 10h3v4h-3zm-8 0v4H5v-4z"></svg:path>`,
})
export class PixelarticonsHeadphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHeadsetIcon],svg[pixelarticons-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5v2H3v14h7v-8H5V4h14v6h-5v8h3v2h-6v2h8v-4h2V4h-2zm-3 10h3v4h-3zm-8 0v4H5v-4z"></svg:path>`,
})
export class PixelarticonsHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHeartIcon],svg[pixelarticons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4z"></svg:path>`,
})
export class PixelarticonsHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHiddenIcon],svg[pixelarticons-hidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6h8v2H8zm-4 4V8h4v2zm-2 2v-2h2v2zm0 2v-2H0v2zm2 2H2v-2h2zm4 2H4v-2h4zm8 0v2H8v-2zm4-2v2h-4v-2zm2-2v2h-2v-2zm0-2h2v2h-2zm-2-2h2v2h-2zm0 0V8h-4v2zM9 10h2v2H9zm4 2h-2v2H9v2h2v-2h2v2h2v-2h-2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsHiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHomeIcon],svg[pixelarticons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4z"></svg:path>`,
})
export class PixelarticonsHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHourglassIcon],svg[pixelarticons-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v6h2v2h2v4H8v2H6v6h12v-6h-2v-2h-2v-4h2V8h2zm-2 6h-2v2h-4V8H8V4h8zm-2 6v2h2v4H8v-4h2v-2z"></svg:path>`,
})
export class PixelarticonsHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHqIcon],svg[pixelarticons-hq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2v4h4V7h2v10H9v-4H5v4H3zm10 2h2v6h-2zm6 6h-4v2h8v-2h-2V9h-2V7h-4v2h4z"></svg:path>`,
})
export class PixelarticonsHqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHumanIcon],svg[pixelarticons-human-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4v4h-4zM3 7h18v2h-6v13h-2v-6h-2v6H9V9H3z"></svg:path>`,
})
export class PixelarticonsHumanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHumanHandsdownIcon],svg[pixelarticons-human-handsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4v4h-4zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7zm-2 4h2V9H5zm0 0v2H3v-2zm14 0h-2V9h2zm0 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsHumanHandsdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHumanHandsupIcon],svg[pixelarticons-human-handsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4v4h-4zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7zM5 5v2h2V5zm0 0H3V3h2zm14 0v2h-2V5zm0 0V3h2v2z"></svg:path>`,
})
export class PixelarticonsHumanHandsupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHumanHeightIcon],svg[pixelarticons-human-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h4v4H6zM3 7h10v9h-2v6H9v-6H7v6H5v-6H3zm18-4h-6v2h6zm-4 4h4v2h-4zm4 4h-6v2h6zm-6 8h6v2h-6zm6-4h-4v2h4z"></svg:path>`,
})
export class PixelarticonsHumanHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHumanHeightAltIcon],svg[pixelarticons-human-height-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h4v4H4zM1 7h10v9H9v6H7v-6H5v6H3v-6H1zm18-5h-2v2h-2v2h-2v2h2V6h2v12h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2V6h2v2h2V6h-2V4h-2z"></svg:path>`,
})
export class PixelarticonsHumanHeightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHumanRunIcon],svg[pixelarticons-human-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H8v2H6v2h2V5h2v2h2v2h-2v2H8v2H6v2H4v-2H2v2h2v2h2v-2h4v2h2v2h-2v2h2v-2h2v-2h-2v-4h2v-2h2v2h2v2h2v-2h2v-2h-2v2h-2v-2h-2V9h2V5h-4v2h-2V5h-2z"></svg:path>`,
})
export class PixelarticonsHumanRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageIcon],svg[pixelarticons-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3H2v18h20V3zm16 2v14H4V5zm-6 4h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2zM8 7H6v2h2z"></svg:path>`,
})
export class PixelarticonsImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageArrowRightIcon],svg[pixelarticons-image-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1h-2v2h2v2h-6v2h6v2h-2v2h2V9h2V7h2V5h-2V3h-2zm-8 2H2v18h20v-8h-2v6H4V5h7zm1 8V9h2v2zm-2 2v-2h2v2zm-2 2v-2h2v2zm0 0v2H6v-2zm8-2h-2v-2h2zm0 0h2v2h-2zM6 7h2v2H6z"></svg:path>`,
})
export class PixelarticonsImageArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageBrokenIcon],svg[pixelarticons-image-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2v18h20v-2h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2zm-2 4v2h-2v2h2v2h-2v2h2v2h-2v2H4V5h14v2zm-6 2h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v-2h-2zM6 7h2v2H6z"></svg:path>`,
})
export class PixelarticonsImageBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageDeleteIcon],svg[pixelarticons-image-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H2v18h20V11h-2v8H4V5h10zM6 7h2v2H6zm14-2h-2V3h-2v2h2v2h-2v2h2V7h2v2h2V7h-2zm0 0V3h2v2zm-8 4h2v2h-2zm-2 4v-2h2v2zm-2 2h2v-2H8zm0 0v2H6v-2zm8-2h-2v-2h2zm0 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsImageDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageFlashIcon],svg[pixelarticons-image-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 0h2v4h4v2h-2v2h-2v2h-2V6h-4V4h2V2h2zM4 3h8v2H4v14h16v-7h2v9H2V3zm10 6h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2zM8 7H6v2h2z"></svg:path>`,
})
export class PixelarticonsImageFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageFrameIcon],svg[pixelarticons-image-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1h-2v2H9v2H7v2H2v16h20V7h-5V5h-2V3h-2zm2 6H9V5h2V3h2v2h2zM4 9h16v12H4zm10 6v-2h-2v2h-2v2H8v2h2v-2h2v-2zm2 2v-2h-2v2zm0 0v2h2v-2zM6 13v-2h2v2z"></svg:path>`,
})
export class PixelarticonsImageFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageGalleryIcon],svg[pixelarticons-image-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v16h-5v2h-2v-2H9v2H7v-2H2zm5 18v2H5v-2zm10 0v2h2v-2zm3-16H4v12h16zm-8 4h2v2h-2zm-2 4v-2h2v2zm0 0v2H8v-2zm6 0h-2v-2h2zm0 0h2v2h-2zM8 6H6v2h2z"></svg:path>`,
})
export class PixelarticonsImageGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageMultipleIcon],svg[pixelarticons-image-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2H4v16h20zM6 16V4h16v12zM2 4H0v18h20v-2H2zm12 2h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm0 0v2H8v-2zm8-2h-2V8h2zm0 0h2v2h-2zM8 6h2v2H8z"></svg:path>`,
})
export class PixelarticonsImageMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageNewIcon],svg[pixelarticons-image-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h12v2H6zM4 3H2v18h20V3zm16 2v14H4V5zm-6 4h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2zM8 7H6v2h2zm10 17v-2H6v2z"></svg:path>`,
})
export class PixelarticonsImageNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImagePlusIcon],svg[pixelarticons-image-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h10v2H4v14h16v-8h2v10H2V3zm10 6h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2zM8 7H6v2h2zm10-4h2v2h2v2h-2v2h-2V7h-2V5h2z"></svg:path>`,
})
export class PixelarticonsImagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsInboxIcon],svg[pixelarticons-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v20H3zm2 2v10h4v2h6v-2h4V4zm14 12h-2v2H7v-2H5v4h14z"></svg:path>`,
})
export class PixelarticonsInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsInboxAllIcon],svg[pixelarticons-inbox-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v20H3zm2 2v4h4v2h6V8h4V4zm14 6h-2v2H7v-2H5v4h14zm0 6h-2v2H7v-2H5v4h14z"></svg:path>`,
})
export class PixelarticonsInboxAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsInboxFullIcon],svg[pixelarticons-inbox-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v20H3zm2 2v10h4v2h6v-2h4V4zm14 12h-2v2H7v-2H5v4h14zM7 6h10v2H7zm0 4h10v2H7z"></svg:path>`,
})
export class PixelarticonsInboxFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsInfoBoxIcon],svg[pixelarticons-info-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v18H3zm16 0H5v2h14v14H5v2h16V3zm-8 6h2V7h-2zm2 8h-2v-6h2z"></svg:path>`,
})
export class PixelarticonsInfoBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsInvertIcon],svg[pixelarticons-invert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 4h-2v2h-2v2h-2v2h-2v2H9v2H7v2h12z"></svg:path>`,
})
export class PixelarticonsInvertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsIsoIcon],svg[pixelarticons-iso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3H6v3H3v2h3v3h2V8h3V6H8zm11 2h-2v2h-2v2h-2v2h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v-2h2V9h2V7h2zm-6 13v-2h8v2z"></svg:path>`,
})
export class PixelarticonsIsoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsKanbanIcon],svg[pixelarticons-kanban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM5 19V5h14v14zM9 7H7v8h2zm2 0h2v4h-2zm6 0h-2v10h2z"></svg:path>`,
})
export class PixelarticonsKanbanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsKeyboardIcon],svg[pixelarticons-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM5 19V5h14v14zM9 7H7v2h2zm8 8H7v2h10zm-2-8h2v2h-2zm-2 0h-2v2h2zm-6 4h2v2H7zm10 0h-2v2h2zm-6 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLabelIcon],svg[pixelarticons-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H2v10h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2V8h-2V6h-2V4h-2zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v-2h-2v-2H8v-2H6v-2H4V4zM6 6h2v2H6z"></svg:path>`,
})
export class PixelarticonsLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLabelAltIcon],svg[pixelarticons-label-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H2v14h14v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2zm0 2v2h2v2h2v2h-2v2h-2v2H4V7z"></svg:path>`,
})
export class PixelarticonsLabelAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLabelAltMultipleIcon],svg[pixelarticons-label-alt-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5H6v10h12v-2h2v-2h2V9h-2V7h-2V5zm10 2v2h2v2h-2v2H8V7zM4 9H2v10h12v-2H4z"></svg:path>`,
})
export class PixelarticonsLabelAltMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLabelSharpIcon],svg[pixelarticons-label-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H2v4h2v2h2v2H4v2H2v4h14v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2zm0 2v2h2v2h2v2h-2v2h-2v2H4v-2h2v-2h2v-2H6V9H4V7z"></svg:path>`,
})
export class PixelarticonsLabelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutIcon],svg[pixelarticons-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v4h16V7zm16 6H10v4h10zM8 17v-4H4v4z"></svg:path>`,
})
export class PixelarticonsLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutAlignBottomIcon],svg[pixelarticons-layout-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H8v12h8zm-6 10V6h4v8zm10 6v-2H4v2z"></svg:path>`,
})
export class PixelarticonsLayoutAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutAlignLeftIcon],svg[pixelarticons-layout-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16V8H8v8zm-10-6h8v4h-8zM4 20h2V4H4z"></svg:path>`,
})
export class PixelarticonsLayoutAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutAlignRightIcon],svg[pixelarticons-layout-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8v8h12V8zm10 6H6v-4h8zm6-10h-2v16h2z"></svg:path>`,
})
export class PixelarticonsLayoutAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutAlignTopIcon],svg[pixelarticons-layout-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20H8V8h8zm-6-10v8h4v-8zm10-6v2H4V4z"></svg:path>`,
})
export class PixelarticonsLayoutAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutColumnsIcon],svg[pixelarticons-layout-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v10h7V7zm9 0v10h7V7z"></svg:path>`,
})
export class PixelarticonsLayoutColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutDistributeHorizontalIcon],svg[pixelarticons-layout-distribute-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4H4v16h2zm14 0h-2v16h2zM10 7h6v10H8V7zm4 8V9h-4v6z"></svg:path>`,
})
export class PixelarticonsLayoutDistributeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutDistributeVerticalIcon],svg[pixelarticons-layout-distribute-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6V4H4v2zm0 14v-2H4v2zM17 8v8h-2V8zm-8 6v-4h6V8H7v8h8v-2z"></svg:path>`,
})
export class PixelarticonsLayoutDistributeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutFooterIcon],svg[pixelarticons-layout-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v6h16V7zm16 8H4v2h16z"></svg:path>`,
})
export class PixelarticonsLayoutFooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutHeaderIcon],svg[pixelarticons-layout-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19h20V5H2zm2-2v-6h16v6zm16-8H4V7h16z"></svg:path>`,
})
export class PixelarticonsLayoutHeaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutRowsIcon],svg[pixelarticons-layout-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v4h16V7zm16 6H4v4h16z"></svg:path>`,
})
export class PixelarticonsLayoutRowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutSidebarLeftIcon],svg[pixelarticons-layout-sidebar-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v10h2V7zm4 0v10h12V7z"></svg:path>`,
})
export class PixelarticonsLayoutSidebarLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutSidebarRightIcon],svg[pixelarticons-layout-sidebar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5H2v14h20zm-2 2v10h-2V7zm-4 0v10H4V7z"></svg:path>`,
})
export class PixelarticonsLayoutSidebarRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLightbulbIcon],svg[pixelarticons-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v2H8zM6 6V4h2v2zm0 6H4V6h2zm2 2H6v-2h2zm8 0v4H8v-4h2v2h4v-2zm2-2v2h-2v-2zm0-6h2v6h-2zm0 0V4h-2v2zm-2 14H8v2h8z"></svg:path>`,
})
export class PixelarticonsLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLightbulb2Icon],svg[pixelarticons-lightbulb-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v2H8zM6 6V4h2v2zm0 6H4V6h2zm2 2H6v-2h2zm2 0H8v4h8v-4h2v-2h2V6h-2V4h-2v2h2v6h-2v2h-2v2h-4zm2-2v2h-2v-2zm0-2h2v2h-2zm0-2v2h-2V8zm0 0V6h2v2zm4 14v-2H8v2z"></svg:path>`,
})
export class PixelarticonsLightbulb2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLightbulbOnIcon],svg[pixelarticons-lightbulb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v4h2zm2 6H9v2H7v4h2v4h6v-4h2v-4h-2zm0 2v4h-2v2h-2v-2H9v-4zM9 20h6v2H9zm14-9v2h-4v-2zM5 13v-2H1v2zm12-7h2v2h-2zm2 0h2V4h-2zM5 6h2v2H5zm0 0V4H3v2z"></svg:path>`,
})
export class PixelarticonsLightbulbOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLinkIcon],svg[pixelarticons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h7v2H4v8h7v2H2V6zm16 0h-7v2h7v8h-7v2h9V6zm-3 5H7v2h10z"></svg:path>`,
})
export class PixelarticonsLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsListIcon],svg[pixelarticons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6H4v2h2zm14 0H8v2h12zM4 11h2v2H4zm16 0H8v2h12zM4 16h2v2H4zm16 0H8v2h12z"></svg:path>`,
})
export class PixelarticonsListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsListBoxIcon],svg[pixelarticons-list-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V5H4v14zM8 7H6v2h2zm2 0h8v2h-8zm-2 4H6v2h2zm2 0h8v2h-8zm-2 4H6v2h2zm2 0h8v2h-8z"></svg:path>`,
})
export class PixelarticonsListBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLoaderIcon],svg[pixelarticons-loader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v6h2zm0 14h-2v6h2zm9-5v2h-6v-2zM8 13v-2H2v2zm7-6h2v2h-2zm4-2h-2v2h2zM9 7H7v2h2zM5 5h2v2H5zm10 12h2v2h2v-2h-2v-2h-2zm-8 0v-2h2v2zv2H5v-2z"></svg:path>`,
})
export class PixelarticonsLoaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLockIcon],svg[pixelarticons-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H9v2H7v4H4v14h16V8h-3V4h-2zm0 2v4H9V4zm-6 6h9v10H6V10zm4 3h-2v4h2z"></svg:path>`,
})
export class PixelarticonsLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLockOpenIcon],svg[pixelarticons-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H9v2H7v2h2V4h6v4H4v14h16V8h-3V4h-2zm0 8h3v10H6V10zm-2 3h-2v4h2z"></svg:path>`,
})
export class PixelarticonsLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLoginIcon],svg[pixelarticons-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v4h2V5h14v14H5v-2H3v4h18V3zm12 8h-2V9h-2V7h-2v2h2v2H3v2h10v2h-2v2h2v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLogoutIcon],svg[pixelarticons-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLuggageIcon],svg[pixelarticons-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h6v4h4v14h-2v2h-2v-2H9v2H7v-2H5V6h4zm2 4h2V4h-2zM7 18h10V8H7zm4-8v6H9v-6zm4 0v6h-2v-6z"></svg:path>`,
})
export class PixelarticonsLuggageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailIcon],svg[pixelarticons-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM4 18V6h16v12zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8z"></svg:path>`,
})
export class PixelarticonsMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailArrowRightIcon],svg[pixelarticons-mail-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h10v-2H4V6h16v6h2V4zM6 8h2v2H6zm4 4H8v-2h2zm4 0v2h-4v-2zm2-2v2h-2v-2zm0 0V8h2v2zm8 8h-2v-2h-2v-2h-2v2h2v2h-6v2h6v2h-2v2h2v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsMailArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailCheckIcon],svg[pixelarticons-mail-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h18v10h-2V6H4v12h8v2H2V4zm4 4H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8zm6 10h2v2h-2zm4 2v2h-2v-2zm2-2h-2v2h2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsMailCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailDeleteIcon],svg[pixelarticons-mail-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h12v-2H4V6h16v8h2V4zM6 8h2v2H6zm4 4H8v-2h2zm4 0v2h-4v-2zm2-2v2h-2v-2zm0 0V8h2v2zm2 6h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsMailDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailFlashIcon],svg[pixelarticons-mail-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h18v8h-2V6H4v12h8v2H2V4zm4 4H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8zm10 6h2v4h4v2h-2v2h-2v2h-2v-4h-4v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsMailFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailMultipleIcon],svg[pixelarticons-mail-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2H4v16h20zM6 16V4h16v12zM2 7H0v15h19v-2H2zm8-1H8v2h2v2h2v2h4v-2h2V8h2V6h-2v2h-2v2h-4V8h-2z"></svg:path>`,
})
export class PixelarticonsMailMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailOffIcon],svg[pixelarticons-mail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v2H2zm4 4H4V4h2zm2 2H6V6h2zm2 2H8V8h2zm2 2h-2v-2h2zm2 0h-2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2zm2-2h-2v2h2zm0 0V8h2v2zm-6-6h12v12h-2V6H10zm4 14v2H2V8h2v10z"></svg:path>`,
})
export class PixelarticonsMailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailUnreadIcon],svg[pixelarticons-mail-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-6v6h6zM4 4h10v2H4v12h16v-8h2v10H2V4zm4 4H6v2h2v2h2v2h4v-2h2v-2h-2v2h-4v-2H8z"></svg:path>`,
})
export class PixelarticonsMailUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMapIcon],svg[pixelarticons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h2v2h2v2h-2v10H8V6H6V4h2zM4 8V6h2v2zm2 10v2H4v2H2V8h2v10zm0 0h2v-2H6zm6 0h-2v-2h2zm2-10V6h-2v2zm2 0h-2v10h-2v2h2v2h2v-2h2v-2h2v-2h2V2h-2v2h-2v2h-2zm0 0h2V6h2v10h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMastodonIcon],svg[pixelarticons-mastodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v2h10V2zm10 2v2h2V4zm2 2v8h2V6zm0 8h-8v2h8zm-8 2H9v2h2zm0 2v2h2v-2zm0 2H7v2h4zm-4 0v-2H5v2zm-2-2V6H3v12zM5 6h2V4H5zm4 0v2h2V6zm2 2v2h2V8zm2 0h2V6h-2zm2 0v4h2V8zM9 8H7v4h2z"></svg:path>`,
})
export class PixelarticonsMastodonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMembercardIcon],svg[pixelarticons-membercard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v14h-7v3h-2v-2h-2v2H9v-3H2zm2 2v4h16V5zm16 8H4v2h16z"></svg:path>`,
})
export class PixelarticonsMembercardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMenuIcon],svg[pixelarticons-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm16 5H4v2h16z"></svg:path>`,
})
export class PixelarticonsMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageIcon],svg[pixelarticons-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2z"></svg:path>`,
})
export class PixelarticonsMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageArrowLeftIcon],svg[pixelarticons-message-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v12h-2V4H4v18H2V2zm2 14h4v2H6v2H4v-2h2zm16 0h-6v-2h2v-2h-2v2h-2v2h-2v2h2v2h2v2h2v-2h-2v-2h6z"></svg:path>`,
})
export class PixelarticonsMessageArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageArrowRightIcon],svg[pixelarticons-message-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v10h-2V4H4v18H2V2zm2 14h4v2H6v2H4v-2h2zm16 0h-2v-2h-2v-2h-2v2h2v2h-6v2h6v2h-2v2h2v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsMessageArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageBookmarkIcon],svg[pixelarticons-message-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2zm14 4h-6v8h2v-2h2v2h2z"></svg:path>`,
})
export class PixelarticonsMessageBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageClockIcon],svg[pixelarticons-message-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v4h2V2zM8 16H6v2H4v2h2v-2h2zm6-2h2v2h2v2h-4zm6-4h-8v2h-2v8h2v2h8v-2h2v-8h-2zm0 2v8h-8v-8z"></svg:path>`,
})
export class PixelarticonsMessageClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageDeleteIcon],svg[pixelarticons-message-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2zm9 7h-2V7H9v2h2v2H9v2h2v-2h2v2h2v-2h-2zm0 0V7h2v2z"></svg:path>`,
})
export class PixelarticonsMessageDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageFlashIcon],svg[pixelarticons-message-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v10h2V2zM10 16H6v2H4v2h2v-2h4zm6-4h2v4h4v2h-2v2h-2v2h-2v-4h-4v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsMessageFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageImageIcon],svg[pixelarticons-message-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2zm10 4h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2V8h2v2h2v2h2v-2h-2V8h-2zM6 6h2v2H6z"></svg:path>`,
})
export class PixelarticonsMessageImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageMinusIcon],svg[pixelarticons-message-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2zm12 7H8v2h8z"></svg:path>`,
})
export class PixelarticonsMessageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessagePlusIcon],svg[pixelarticons-message-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2zm-7 7h3v2h-3v3h-2v-3H8V9h3V6h2z"></svg:path>`,
})
export class PixelarticonsMessagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageProcessingIcon],svg[pixelarticons-message-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2zm5 7H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsMessageProcessingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageReplyIcon],svg[pixelarticons-message-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v20h-2V4H4v12h14v2h2v2h-2v-2H2V2z"></svg:path>`,
})
export class PixelarticonsMessageReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageTextIcon],svg[pixelarticons-message-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2zM6 7h12v2H6zm8 4H6v2h8z"></svg:path>`,
})
export class PixelarticonsMessageTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMinusIcon],svg[pixelarticons-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h16v2H4z"></svg:path>`,
})
export class PixelarticonsMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMissedCallIcon],svg[pixelarticons-missed-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-4v2h2v2h-2v2h-2v2h-2v2h-2v-2H8v-2H6v-2H4V8H2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v2h2V6z"></svg:path>`,
})
export class PixelarticonsMissedCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsModemIcon],svg[pixelarticons-modem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2h-8v2H9v2h2V4h8v2h2V4h-2zm-8 6h2v2h-2zm6 0V6h-4v2zm0 0h2v2h-2zm-1 2h-2v2H2v10h20V12h-6zm4 4v6H4v-6zm-2 2h-2v2h2zm-6 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsModemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoneyIcon],svg[pixelarticons-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H2v12h4v4h16V8h-4V4zm0 2v2H6v6H4V6zm-8 4h12v8H8zm8 2h-4v4h4z"></svg:path>`,
})
export class PixelarticonsMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMonitorIcon],svg[pixelarticons-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H2v14h8v2H8v2h8v-2h-2v-2h8V3zm-6 12H4V5h16v10z"></svg:path>`,
})
export class PixelarticonsMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoodHappyIcon],svg[pixelarticons-mood-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14v2H5zm0 16H3V5h2zm14 0v2H5v-2zm0 0h2V5h-2zM10 8H8v2h2zm4 0h2v2h-2zm-5 6v-2H7v2zm6 0v2H9v-2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsMoodHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoodNeutralIcon],svg[pixelarticons-mood-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14v2H5zm0 16H3V5h2zm14 0v2H5v-2zm0 0h2V5h-2zM10 8H8v2h2zm4 0h2v2h-2zm1 5H9v2h6z"></svg:path>`,
})
export class PixelarticonsMoodNeutralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoodSadIcon],svg[pixelarticons-mood-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14v2H5zm0 16H3V5h2zm14 0v2H5v-2zm0 0h2V5h-2zM10 8H8v2h2zm4 0h2v2h-2zm-5 8v-2h6v2h2v-2h-2v-2H9v2H7v2z"></svg:path>`,
})
export class PixelarticonsMoodSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoonIcon],svg[pixelarticons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h8v2h-2v2h-2V4H6zM4 6V4h2v2zm0 10H2V6h2zm2 2H4v-2h2zm2 2H6v-2h2zm10 0v2H8v-2zm2-2v2h-2v-2zm-2-4h2v4h2v-8h-2v2h-2zm-6 0v2h6v-2zm-2-2h2v2h-2zm0 0V6H8v6z"></svg:path>`,
})
export class PixelarticonsMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoonStarIcon],svg[pixelarticons-moon-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h8v2h-2v2h-2V4H6zM4 6V4h2v2zm0 10H2V6h2zm2 2H4v-2h2zm2 2H6v-2h2zm10 0v2H8v-2zm2-2v2h-2v-2zm-2-4v-2h2v-2h2v8h-2v-4zm-6 0h6v2h-6zm-2-2h2v2h-2zm0 0V6H8v6zm8-10h2v2h2v2h-2v2h-2V6h-2V4h2z"></svg:path>`,
})
export class PixelarticonsMoonStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoonStarsIcon],svg[pixelarticons-moon-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2zM8 4h8v2h-2v2h-2V6H8zM6 8V6h2v2zm0 8H4V8h2zm2 2H6v-2h2zm8 0v2H8v-2zm2-2v2h-2v-2zm-2-4v-2h2V8h2v8h-2v-4zm-4 0h4v2h-4zm0 0V8h-2v4zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4z"></svg:path>`,
})
export class PixelarticonsMoonStarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoreHorizontalIcon],svg[pixelarticons-more-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 9h6v6H1zm2 2v2h2v-2zm6-2h6v6H9zm2 2v2h2v-2zm6-2h6v6h-6zm2 2v2h2v-2z"></svg:path>`,
})
export class PixelarticonsMoreHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoreVerticalIcon],svg[pixelarticons-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v6H9V1zm-2 2h-2v2h2zm2 6v6H9V9zm-2 2h-2v2h2zm2 6v6H9v-6zm-2 2h-2v2h2z"></svg:path>`,
})
export class PixelarticonsMoreVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMouseIcon],svg[pixelarticons-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v18H6zm2 2v4h3V5zm5 0v4h3V5zm3 6H8v8h8z"></svg:path>`,
})
export class PixelarticonsMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoveIcon],svg[pixelarticons-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0h-2v2H9v2H7v2h2V4h2v7H4V9h2V7H4v2H2v2H0v2h2v2h2v2h2v-2H4v-2h7v7H9v-2H7v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2v-7h7v2h-2v2h2v-2h2v-2h2v-2h-2V9h-2V7h-2v2h2v2h-7V4h2v2h2V4h-2V2h-2z"></svg:path>`,
})
export class PixelarticonsMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMovieIcon],svg[pixelarticons-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v2h2V5zm4 0v6h6V5zm8 0v2h2V5zm2 4h-2v2h2zm0 4h-2v2h2zm0 4h-2v2h2zm-4 2v-6H9v6zm-8 0v-2H5v2zm-2-4h2v-2H5zm0-4h2V9H5z"></svg:path>`,
})
export class PixelarticonsMovieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMusicIcon],svg[pixelarticons-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6zm0 10H4v4h4zm10 0h-4v4h4z"></svg:path>`,
})
export class PixelarticonsMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNextIcon],svg[pixelarticons-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h2v2h2v2h2v2h2v4h-2v2h-2v2H8v2H6zm12 0h-2v16h2z"></svg:path>`,
})
export class PixelarticonsNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNoteIcon],svg[pixelarticons-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v14h-2v2h-2v-2h-2v2h2v2h-2v2H3zm2 2v16h8v-6h6V4z"></svg:path>`,
})
export class PixelarticonsNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNoteDeleteIcon],svg[pixelarticons-note-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h10v14h-2v2h-2v-2h-2v2h2v2h-2v2H3V10h2v10h8v-6h6V4h-8zM7 4H5V2H3v2h2v2H3v2h2V6h2v2h2V6H7zm0 0h2V2H7z"></svg:path>`,
})
export class PixelarticonsNoteDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNoteMultipleIcon],svg[pixelarticons-note-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6H7v16h8v-2h2v-2h-2v-2h2v2h2v-2h2zM9 20V8h10v6h-6v6zm-6-2h2V4h12V2H3z"></svg:path>`,
})
export class PixelarticonsNoteMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotePlusIcon],svg[pixelarticons-note-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1H5v3H2v2h3v3h2V6h3V4H7zm12 1h-7v2h7v10h-6v6H5v-9H3v11h12v-2h2v-2h2v-2h2V2zm-2 16h-2v-2h2z"></svg:path>`,
})
export class PixelarticonsNotePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotesIcon],svg[pixelarticons-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h16v20H3V2zm14 18V4H5v16zM7 6h10v2H7zm10 4H7v2h10zM7 14h7v2H7z"></svg:path>`,
})
export class PixelarticonsNotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotesDeleteIcon],svg[pixelarticons-notes-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H3v20h10v-2H5V4h14v10h2V2zm-2 4H7v2h10zM7 10h10v2H7zm6 4H7v2h6zm6 4h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsNotesDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotesMultipleIcon],svg[pixelarticons-notes-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h16v20H5V0zm14 18V2H7v16zM9 4h10v2H9zm10 4H9v2h10zM9 12h7v2H9zm10 10H3V4H1v20h18z"></svg:path>`,
})
export class PixelarticonsNotesMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotesPlusIcon],svg[pixelarticons-notes-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h16v12h-2V4H5v16h8v2H3V2zm2 4h10v2H7zm10 4H7v2h10zM7 14h7v2H7zm13 5h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"></svg:path>`,
})
export class PixelarticonsNotesPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotificationIcon],svg[pixelarticons-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4V2h-4v2H5v2h14V4zm5 12H5v-4H3v6h5v4h2v-4h4v2h-4v2h6v-4h5v-6h-2V6h-2v8h2zM5 6v8h2V6z"></svg:path>`,
})
export class PixelarticonsNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotificationOffIcon],svg[pixelarticons-notification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2v2h5v2h-8V2zM5 16h9v2h2v4h-6v-2h4v-2h-4v4H8v-4H3v-6h2v-2h2v4H5zm16-2h-2v-2h-2V6h2v6h2zM5 2H3v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2V8H9V6H7V4H5z"></svg:path>`,
})
export class PixelarticonsNotificationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsOpenIcon],svg[pixelarticons-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h6v2H5v14h14v-6h2v8H3V3zm8 0h8v8h-2V7h-2V5h-4zm0 8h-2v2H9v2h2v-2h2zm4-4h-2v2h-2v2h2V9h2z"></svg:path>`,
})
export class PixelarticonsOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPaintBucketIcon],svg[pixelarticons-paint-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v2H8zm0 2H6v4H4v12h16V9h-2V5h-2v4H8zm8 6h2v8H6v-8h2v6h2v-4h2v2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsPaintBucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPaperclipIcon],svg[pixelarticons-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h16v10H7V9h10v2H9v2h10V7H5v10h14v2H3V5z"></svg:path>`,
})
export class PixelarticonsPaperclipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPauseIcon],svg[pixelarticons-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4H5v16h5zm9 0h-5v16h5z"></svg:path>`,
})
export class PixelarticonsPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPercentIcon],svg[pixelarticons-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-2v2h-2v2h-2v2h-2v2h-2v2H8v2H6v2H4v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V8h2V6h2zm-4 10h4v6h-6v-6zm2 4v-2h-2v2zM6 4h4v6H4V4zm2 4V6H6v2z"></svg:path>`,
})
export class PixelarticonsPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPictureInPictureIcon],svg[pixelarticons-picture-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v16H2zm2 2v12h16V6zm6 2h8v6h-8zm2 2v2h4v-2z"></svg:path>`,
})
export class PixelarticonsPictureInPictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPictureInPictureAltIcon],svg[pixelarticons-picture-in-picture-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v16H2zm2 2v12h16V6zm6 4h8v6h-8zm2 2v2h4v-2z"></svg:path>`,
})
export class PixelarticonsPictureInPictureAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPinIcon],svg[pixelarticons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v2H7zM5 6V4h2v2zm0 8H3V6h2zm2 2H5v-2h2zm2 2H7v-2h2zm2 2H9v-2h2zm2 0v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm0-8h2v8h-2zm0 0V4h-2v2zm-5 2h-4v4h4z"></svg:path>`,
})
export class PixelarticonsPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPixelarticonsIcon],svg[pixelarticons-pixelarticons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm16 2v14H5V5zM7 7h6v6H9v2H7zm8 6h-2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2zM9 9v2h2V9z"></svg:path>`,
})
export class PixelarticonsPixelarticonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPlayIcon],svg[pixelarticons-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z"></svg:path>`,
})
export class PixelarticonsPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPlaylistIcon],svg[pixelarticons-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h6V5h6v4h-4v10h-8zm2 2v2h4v-2zM2 17h6v2H2zm6-4H2v2h6zM2 9h12v2H2zm12-4H2v2h12z"></svg:path>`,
})
export class PixelarticonsPlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPlusIcon],svg[pixelarticons-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z"></svg:path>`,
})
export class PixelarticonsPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPowerIcon],svg[pixelarticons-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h-2v4H6v2H4v8h2v2h2v4h8v-2h4v-2h-4v-2h4v-2h-4v-2H8v4H6V8h12V6h2zm-6 18h-4v-6h4z"></svg:path>`,
})
export class PixelarticonsPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPrevIcon],svg[pixelarticons-prev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h2v16H6zm12 0h-2v2h-2v3h-2v2h-2v2h2v3h2v2h2v2h2z"></svg:path>`,
})
export class PixelarticonsPrevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPrintIcon],svg[pixelarticons-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v6h4v10h-4v4H6v-4H2V8h4zm2 6h8V4H8zm-2 8v-4h12v4h2v-6H4v6zm2-2v6h8v-6z"></svg:path>`,
})
export class PixelarticonsPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRadioHandheldIcon],svg[pixelarticons-radio-handheld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v5h8v15H7V2zm0 7v4h6V9zm6 6H9v5h6z"></svg:path>`,
})
export class PixelarticonsRadioHandheldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRadioOnIcon],svg[pixelarticons-radio-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H7v2H5v2H3v10h2v2h2v2h10v-2h2v-2h2V7h-2V5h-2zm0 2v2h2v10h-2v2H7v-2H5V7h2V5zm-9 6h2v2h2v2h-2v-2H8zm8-2h-2v2h-2v2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsRadioOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRadioSignalIcon],svg[pixelarticons-radio-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2h2v2h-2zm2 14V4h2v12zm0 0v2h-2v-2zM1 4h2v12H1zm2 12h2v2H3zM3 4h2V2H3zm2 2h2v8H5zm2 8h2v2H7zm0-8h2V4H7zm10 0h2v8h-2zm0 0h-2V4h2zm0 8v2h-2v-2zm-6-7h4v6h-2v9h-2v-9H9V7zm0 4h2V9h-2z"></svg:path>`,
})
export class PixelarticonsRadioSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRadioTowerIcon],svg[pixelarticons-radio-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-2v2h2v12h-2v2h2v-2h2V4h-2zM2 4H0v12h2v2h2v-2H2zm0 0V2h2v2zm4 2H4v8h2zm0 0V4h2v2zm4 0h4v2h-4zm0 6H8V8h2zm4 0h-4v2H8v4H6v4h2v-4h2v-4h4v4h2v4h2v-4h-2v-4h-2zm0 0h2V8h-2zm6-6h-2V4h-2v2h2v8h2z"></svg:path>`,
})
export class PixelarticonsRadioTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRecieptIcon],svg[pixelarticons-reciept-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h2v2h2v2H5v14h14V6h-2V4h2V2h2v20H3zm12 2V2h2v2zm-2 0h2v2h-2zm-2 0V2h2v2zM9 4h2v2H9zm0 0V2H7v2zm8 4H7v2h10zM7 12h10v2H7zm10 6v-2h-4v2z"></svg:path>`,
})
export class PixelarticonsRecieptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRecieptAltIcon],svg[pixelarticons-reciept-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H3v20h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2V2h-2v2h-2V2h-2v2h-2V2h-2v2H9V2H7v2H5zm2 2h2v2h2V4h2v2h2V4h2v2h2v12h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5V6h2zm0 4h10v2H7zm10 4H7v2h10z"></svg:path>`,
})
export class PixelarticonsRecieptAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRedoIcon],svg[pixelarticons-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-2v2h2v2H6v2H4v8h2v2h6v-2H6v-8h10v2h-2v2h2v-2h2v-2h2V8h-2V6h-2z"></svg:path>`,
})
export class PixelarticonsRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsReloadIcon],svg[pixelarticons-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-2v2h2v2H4v2H2v5h2V8h12v2h-2v2h2v-2h2V8h2V6h-2V4h-2zM6 20h2v2h2v-2H8v-2h12v-2h2v-5h-2v5H8v-2h2v-2H8v2H6v2H4v2h2z"></svg:path>`,
})
export class PixelarticonsReloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRemoveBoxIcon],svg[pixelarticons-remove-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18V3zm14 2v14H5V5zm-3 6H8v2h8z"></svg:path>`,
})
export class PixelarticonsRemoveBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRemoveBoxMultipleIcon],svg[pixelarticons-remove-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v14h14V3zm10 2v10H5V5zm4 2v12H7v2h14V7zm-6 2H7v2h6z"></svg:path>`,
})
export class PixelarticonsRemoveBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRepeatIcon],svg[pixelarticons-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1H9v2h2v2H5v2H3v10h2v2h2v-2H5V7h6v2H9v2h2V9h2V7h2V5h-2V3h-2zm8 4h-2v2h2v10h-6v-2h2v-2h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2z"></svg:path>`,
})
export class PixelarticonsRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsReplyIcon],svg[pixelarticons-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19h-2v-2H8v-2H6v-2H4v-2h2V9h2V7h2V5h2v4h8v6h-8z"></svg:path>`,
})
export class PixelarticonsReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsReplyAllIcon],svg[pixelarticons-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19h2v-4h7V9h-7V5h-2v2h-2v2H9v2H7v2h2v2h2v2h2zM8 7H6v2H4v2H2v2h2v2h2v2h2v2h2v-2H8v-2H6v-2H4v-2h2V9h2zm0 0h2V5H8z"></svg:path>`,
})
export class PixelarticonsReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRoundedCornerIcon],svg[pixelarticons-rounded-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm0 4h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm2 0h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-2-4h2v2h-2zM17 5h-2V3h-4v2h4v2h2v2h2v4h2V9h-2V7h-2zM7 3h2v2H7z"></svg:path>`,
})
export class PixelarticonsRoundedCornerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSaveIcon],svg[pixelarticons-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h14v2H4v16h2v-6h12v6h2V6h2v16H2V2zm4 18h8v-4H8zM20 6h-2V4h2zM6 6h9v4H6z"></svg:path>`,
})
export class PixelarticonsSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScaleIcon],svg[pixelarticons-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-8v2h4v2h2v4h2zm-4 4h-2v2h-2v2h2V9h2zm-8 8h2v-2H9zH7v2h2zm-4-2v4h2v2H5h6v2H3v-8z"></svg:path>`,
})
export class PixelarticonsScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScriptIcon],svg[pixelarticons-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h14v2h2v6h-2v8h-2V5H6zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2zm0 0v2H4v-2z"></svg:path>`,
})
export class PixelarticonsScriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScriptTextIcon],svg[pixelarticons-script-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h14v2h2v6h-2v8h-2V5H6zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2zm0 0v2H4v-2zM8 7h8v2H8zm8 4H8v2h8z"></svg:path>`,
})
export class PixelarticonsScriptTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScrollHorizontalIcon],svg[pixelarticons-scroll-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2H2V2zm0 18v2H2v-2zm-6-5v-2H8v2H6v-2H4v-2h2V9h2v2h8V9h2v2h2v2h-2v2zm0 0v2h-2v-2zm0-6h-2V7h2zM8 9V7h2v2zm0 6h2v2H8z"></svg:path>`,
})
export class PixelarticonsScrollHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScrollVerticalIcon],svg[pixelarticons-scroll-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v20H2zm9 18h2v-2h2v-2h2v-2h-2v2h-2V8h2v2h2V8h-2V6h-2V4h-2v2H9v2H7v2h2V8h2v8H9v-2H7v2h2v2h2zM22 2h-2v20h2z"></svg:path>`,
})
export class PixelarticonsScrollVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSdIcon],svg[pixelarticons-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h2v20H4V6h2v14h12V4H8V2zM8 4H6v2h2zm6 2h2v4h-2zm-2 0h-2v4h2z"></svg:path>`,
})
export class PixelarticonsSdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSearchIcon],svg[pixelarticons-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h8v2H6zM4 6V4h2v2zm0 8H2V6h2zm2 2H4v-2h2zm8 0v2H6v-2zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm0-8h2v8h-2zm0 0V4h-2v2z"></svg:path>`,
})
export class PixelarticonsSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionIcon],svg[pixelarticons-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm4 0H7v2h2zM7 19h2v2H7zM5 7H3v2h2zm14 0h2v2h-2zM5 11H3v2h2zm14 0h2v2h-2zM5 15H3v2h2zm14 0h2v2h-2zM5 19H3v2h2zm6-16h2v2h-2zm2 16h-2v2h2zm2-16h2v2h-2zm2 16h-2v2h2zm2-16h2v2h-2zm2 16h-2v2h2z"></svg:path>`,
})
export class PixelarticonsSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionCopyIcon],svg[pixelarticons-section-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm2 4h2v2H7zm4 0h2v2h-2zm2 12h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zM7 11h2v2H7zm14 0h-2v2h2zm-2 4h2v2h-2zM7 19h2v2H7zM19 7h2v2h-2zM7 3h2v2H7zm2 12H7v2h2zM3 7h2v2H3zm14 0h-2v2h2zM3 11h2v2H3zm2 4H3v2h2zm6-12h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsSectionCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionMinusIcon],svg[pixelarticons-section-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm4 0H7v2h2zM7 19h2v2H7zm6 0h-2v2h2zM3 7h2v2H3zm18 0h-2v2h2zm-2 4h2v2h-2zM5 11H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm6-16h2v2h-2zm6 0h-2v2h2zm2 0h2v2h-2zm2 14h-6v2h6z"></svg:path>`,
})
export class PixelarticonsSectionMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionPlusIcon],svg[pixelarticons-section-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm4 0h2v2H7zm2 16H7v2h2zm2 0h2v2h-2zM5 7H3v2h2zm14 0h2v2h-2zm2 4h-2v2h2zM3 11h2v2H3zm2 4H3v2h2zm12 0h2v2h2v2h-2v2h-2v-2h-2v-2h2zM5 19H3v2h2zm6-16h2v2h-2zm6 0h-2v2h2zm4 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsSectionPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionXIcon],svg[pixelarticons-section-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm4 0H7v2h2zM7 19h2v2H7zm6 0h-2v2h2zM3 7h2v2H3zm18 0h-2v2h2zm-2 4h2v2h-2zm2 8h-2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2zM3 11h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zM13 3h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsSectionXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsServerIcon],svg[pixelarticons-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v6h14V5zm14 8H5v6h14zM7 7h2v2H7zm2 8H7v2h2z"></svg:path>`,
})
export class PixelarticonsServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSharpCornerIcon],svg[pixelarticons-sharp-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm0 4h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm2 0h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-2-4h2v2h-2zm2-2V3H11v2h8v8zM7 3h2v2H7z"></svg:path>`,
})
export class PixelarticonsSharpCornerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsShieldIcon],svg[pixelarticons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v12h2V4h16v10h2zM6 14H4v2h2zm0 2h2v2h2v2H8v-2H6zm4 4v2h4v-2h2v-2h-2v2zm10-6h-2v2h-2v2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsShieldOffIcon],svg[pixelarticons-shield-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h14v12h-2V4H8zM2 8h2v6H2zm2 6h2v2H4zm4 2H6v2h2v2h2v2h4v-2h-4v-2H8zm10 0h-2v2h2v2h2v2h2v-2h-2v-2h-2zM4 2H2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2V8H8V6H6V4H4z"></svg:path>`,
})
export class PixelarticonsShieldOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsShipIcon],svg[pixelarticons-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v2h4v2H6v2h6V8h2v2h8v6h-2v-4H4v6h14v-2h2v2h4v2H0v-2h2v-8h2V6h2V4z"></svg:path>`,
})
export class PixelarticonsShipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsShoppingBagIcon],svg[pixelarticons-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h6v2H9zm6 4V4h2v2h4v16H3V6h4V4h2v2zm0 2H9v2H7V8H5v12h14V8h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsShuffleIcon],svg[pixelarticons-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5h-2v2h2v2h-6v2h-2v6H2v2h8v-2h2v-6h6v2h-2v2h2v-2h2v-2h2V9h-2V7h-2zM2 9h6v2H2zm20 10v-2h-8v2z"></svg:path>`,
})
export class PixelarticonsShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSlidersIcon],svg[pixelarticons-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h2v10h-2zm0 12h-2v2h2v2h2v-2h2v-2zm-4-6h-2v10h2zm-8 2H3v2h2v6h2v-6h2v-2zm8-8h-2v2H9v2h6V6h-2zM5 4h2v6H5z"></svg:path>`,
})
export class PixelarticonsSlidersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSliders2Icon],svg[pixelarticons-sliders-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M3 8h4m0 0V6h4v2M7 8v2h4V8m0 0h10M3 16h10m0 0v-2h4v2m-4 0v2h4v-2m0 0h4"></svg:path>`,
})
export class PixelarticonsSliders2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSortIcon],svg[pixelarticons-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20H6V8H4V6h2V4h2v2h2v2H8zm2-12v2h2V8zM4 8v2H2V8zm14-4h-2v12h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSortAlphabeticIcon],svg[pixelarticons-sort-alphabetic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v2h-2zm0 2v2H9V4zm2 0h2v2h-2zM9 18v2h2v2h2v-2h2v-2h-2v2h-2v-2zM8 8H2v8h2v-2h2v2h2zm-2 4H4v-2h2zm6-1v-1h2v1zm4-3h-6v8h6zm-4 6v-1h2v1zm10-6h-4v8h4v-2h-2v-4h2z"></svg:path>`,
})
export class PixelarticonsSortAlphabeticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSortNumericIcon],svg[pixelarticons-sort-numeric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v2H9v2h2V4h2v2h2V4h-2zM2 8h4v8H4v-6H2zm6 0h6v5h-4v1h4v2H8v-5h4v-1H8zm12 0h-4v2h4v1h-4v2h4v1h-4v2h6V8zm-9 10v2H9v-2zm2 2h-2v2h2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsSortNumericIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpeakerIcon],svg[pixelarticons-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H3v20h18V2zm15 2v16H5V4zm-6 2h-2v2h2zm-5 4h8v6h-2v-4h-4v4H8zm8 6H8v2h8z"></svg:path>`,
})
export class PixelarticonsSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpeedFastIcon],svg[pixelarticons-speed-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5H9v2H5v2H3v2H1v6h2v2h2v-2H3v-6h2V9h4V7h6zm8 6h-2v6h-2v2h2v-2h2zm-13 2h4v4h-4zm6-2h-2v2h2zm2-2v2h-2V9zm0 0V7h2v2z"></svg:path>`,
})
export class PixelarticonsSpeedFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpeedMediumIcon],svg[pixelarticons-speed-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h-2v8h-1v4h4v-4h-1zM9 7H5v2H3v2H1v6h2v2h2v-2H3v-6h2V9h4zm12 4h2v6h-2zm-2-2h2v2h-2zm0 0h-4V7h4zm2 8v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsSpeedMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpeedSlowIcon],svg[pixelarticons-speed-slow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5h6v2H9zm10 4h-4V7h4zm2 2h-2V9h2zm0 6v-6h2v6zm0 0v2h-2v-2zM1 11h2v6H1zm2 6h2v2H3zm11-4h-4v-2H8V9H6V7H4v2h2v2h2v2h2v4h4z"></svg:path>`,
})
export class PixelarticonsSpeedSlowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpotlightIcon],svg[pixelarticons-spotlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h16v20H3V2zm14 18V4H5v16zM13 6H7v2h6zm-6 4h10v8H7z"></svg:path>`,
})
export class PixelarticonsSpotlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsStoreIcon],svg[pixelarticons-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16v2H4zm0 4h18v8h-2v6h-2v-6h-4v6H4v-6H2V7zm8 12v-4H6v4zm0-6h8V9H4v4z"></svg:path>`,
})
export class PixelarticonsStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSubscriptionsIcon],svg[pixelarticons-subscriptions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v2h12zM4 6h16v2H4zm-2 4h20v12H2zm18 10v-8H4v8z"></svg:path>`,
})
export class PixelarticonsSubscriptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSubtitlesIcon],svg[pixelarticons-subtitles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-8v10h8v-2h-6V9h6zM3 15V7h8v2H5v6h6v2H3z"></svg:path>`,
})
export class PixelarticonsSubtitlesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSuitcaseIcon],svg[pixelarticons-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v14H2V7h6zm2 4h4V5h-4zM4 9v10h16V9zm4 2v6H6v-6zm10 0v6h-2v-6z"></svg:path>`,
})
export class PixelarticonsSuitcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSunIcon],svg[pixelarticons-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h-2v2h2zm4 2h2v2h-2zm-6 6h2v2h-2zm-8 0h2v2H3zm18 0h-2v2h2zM5 5h2v2H5zm14 14h-2v-2h2zm-8 2h2v-2h-2zm-4-2H5v-2h2zM9 7h6v2H9zm0 8H7V9h2zm0 0v2h6v-2h2V9h-2v6z"></svg:path>`,
})
export class PixelarticonsSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSunAltIcon],svg[pixelarticons-sun-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0h-2v4h2zM0 11v2h4v-2zm24 0v2h-4v-2zM13 24h-2v-4h2zM8 6h8v2H8zM6 8h2v8H6zm2 10v-2h8v2zm10-2h-2V8h2zm2-14h2v2h-2zm0 2v2h-2V4zm2 18h-2v-2h2zm-2-2h-2v-2h2zM4 2H2v2h2v2h2V4H4zM2 22h2v-2h2v-2H4v2H2z"></svg:path>`,
})
export class PixelarticonsSunAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSwitchIcon],svg[pixelarticons-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3h2v2zm4 2H5V5h2zm2 2H7V7h2zm2 2H9V9h2zm2 0h-2v2h2v2h2v2h2v2h-2v2h6v-6h-2v2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0-2v2h2v2h2V3h-6v2zM5 19v-2h2v2zm0 0v2H3v-2zm2-2v-2h2v2z"></svg:path>`,
})
export class PixelarticonsSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSyncIcon],svg[pixelarticons-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V7h12V5h2v2h2v2h-2v2h-2V9zm12 2h-2v2h2zm0-6h-2V3h2zm4 12v-2H8v-2h2v-2H8v2H6v2H4v2h2v2h2v2h2v-2H8v-2z"></svg:path>`,
})
export class PixelarticonsSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTabIcon],svg[pixelarticons-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm2 2v14h16V9h-8V5z"></svg:path>`,
})
export class PixelarticonsTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTableIcon],svg[pixelarticons-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm2 4v5h7V7zm9 0v5h7V7zm7 7h-7v5h7zm-9 5v-5H4v5z"></svg:path>`,
})
export class PixelarticonsTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTeaIcon],svg[pixelarticons-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h18v7h-4v5H4zm14 5h2V6h-2zm-2-3h-4v2h2v4H8V8h2V6H6v8h10zm3 12v2H3v-2z"></svg:path>`,
})
export class PixelarticonsTeaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTeachIcon],svg[pixelarticons-teach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H5v4h4zm7 7V7H2v9h2v6h2v-6h2v6h2V9zm-5-7h11v14H11v-2h9V4h-9z"></svg:path>`,
})
export class PixelarticonsTeachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTextAddIcon],svg[pixelarticons-text-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H3v2h16zm0 4H3v2h16zM3 12h8v2H3zm8 4H3v2h8zm7-1h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"></svg:path>`,
})
export class PixelarticonsTextAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTextColumsIcon],svg[pixelarticons-text-colums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5H3v2h8zm10 0h-8v2h8zM3 9h8v2H3zm18 0h-8v2h8zM3 13h8v2H3zm18 0h-8v2h8zM3 17h8v2H3zm18 0h-8v2h8z"></svg:path>`,
})
export class PixelarticonsTextColumsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTextSearchIcon],svg[pixelarticons-text-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4v2h16zm0 4H4v2h16zm-8 4H4v2h8zm8 0h-6v6h6v2h2v-2h-2zm-4 4v-2h2v2zm-4 0H4v2h8z"></svg:path>`,
})
export class PixelarticonsTextSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTextWrapIcon],svg[pixelarticons-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5H3v2h16v6h-6v-2h2V9h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2zM7 13H3v2h4zM3 9h6v2H3z"></svg:path>`,
})
export class PixelarticonsTextWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTimelineIcon],svg[pixelarticons-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h4v4H7zm-2 6v-2h2v2zm0 0v4H1v-4zm8 0h-2v-2h2zm4 0h-4v4h4zm2-2v2h-2v-2zm0 0h4V7h-4z"></svg:path>`,
})
export class PixelarticonsTimelineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsToggleLeftIcon],svg[pixelarticons-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16v2H4zm0 12H2V7h2zm16 0v2H4v-2zm0 0h2V7h-2zM10 9H6v6h4z"></svg:path>`,
})
export class PixelarticonsToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsToggleRightIcon],svg[pixelarticons-toggle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16v2H4zm0 12H2V7h2zm16 0v2H4v-2zm0 0h2V7h-2zm-2-8h-4v6h4z"></svg:path>`,
})
export class PixelarticonsToggleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTournamentIcon],svg[pixelarticons-tournament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H2v2h5v4H2v2h7V7h5v10H9v-3H2v2h5v4H2v2h7v-3h7v-6h6v-2h-6V5H9z"></svg:path>`,
})
export class PixelarticonsTournamentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrackChangesIcon],svg[pixelarticons-track-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v20h20V4h-2v16H4V4h7v2H6v12h12V8h-2v8H8V8h3v2h-1v4h4v-4h-1V2z"></svg:path>`,
})
export class PixelarticonsTrackChangesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrashIcon],svg[pixelarticons-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2v4h6v2h-2v14H4V8H2V6h6V2zm-2 2h-4v2h4zm0 4H6v12h12V8zm-5 2h2v8H9zm6 0h-2v8h2z"></svg:path>`,
})
export class PixelarticonsTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrashAltIcon],svg[pixelarticons-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2v4h6v2h-2v14H4V8H2V6h6V2zm-2 2h-4v2h4zm0 4H6v12h12V8z"></svg:path>`,
})
export class PixelarticonsTrashAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrendingIcon],svg[pixelarticons-trending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v14h16v2H3zm6 10H7v2h2zm2-2v2H9v-2zm2 0v-2h-2v2zm2 0h-2v2h2zm2-2h-2v2h2zm2-2v2h-2V8zm0 0V6h2v2z"></svg:path>`,
})
export class PixelarticonsTrendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrendingDownIcon],svg[pixelarticons-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h2v2h2v2h2v2h2v-2h2v-2h2v2h2v2h2v2h-4v2h8v-8h-2v4h-2v-2h-2v-2h-2V8h-2v2h-2v2H8v-2H6V8H4V6H2z"></svg:path>`,
})
export class PixelarticonsTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrendingUpIcon],svg[pixelarticons-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h8v8h-2v-4h-2V8h-4zm2 6v-2h2v2zm-2 2v-2h2v2zm-2 0h2v2h-2zm-2-2h2v2h-2zm-2 0v-2h2v2zm-2 2v-2h2v2zm-2 2v-2h2v2zm0 0v2H2v-2z"></svg:path>`,
})
export class PixelarticonsTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrophyIcon],svg[pixelarticons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H6v2H2v10h6V5h8v10h6V5h-4V3zm4 4v6h-2V7zM6 13H4V7h2zm12 2H6v2h12zm-7 2h2v2h3v2H8v-2h3z"></svg:path>`,
})
export class PixelarticonsTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTruckIcon],svg[pixelarticons-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h14v4h4v2h-4v6h6v-4h2v6h-4v2h-4v-2H8v2H4v-2H0V4zm20 8h-2v-2h2zm-8-2V6H2v10h12z"></svg:path>`,
})
export class PixelarticonsTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUndoIcon],svg[pixelarticons-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h2v2H8zm10 6V8H8V6H6v2H4v2h2v2h2v2h2v-2H8v-2zm0 8v-8h2v8zm0 0v2h-6v-2z"></svg:path>`,
})
export class PixelarticonsUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUngroupIcon],svg[pixelarticons-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H3v4h4zm0 14H3v4h4zM17 3h4v4h-4zm4 14h-4v4h4zM8 8h2v2H8zm4 2h-2v4H8v2h2v-2h4v2h2v-2h-2v-4h2V8h-2v2z"></svg:path>`,
})
export class PixelarticonsUngroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUnlinkIcon],svg[pixelarticons-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2v16h2zM4 6h5v2H4v8h5v2H2V6zm11 0h7v12h-7v-2h5V8h-5z"></svg:path>`,
})
export class PixelarticonsUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUploadIcon],svg[pixelarticons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5V3h2v2h2v2h2v2h-2V7h-2v10h-2V7H9v2H7V7h2V5zM3 15v6h18v-6h-2v4H5v-4z"></svg:path>`,
})
export class PixelarticonsUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUserIcon],svg[pixelarticons-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H9v2H7v6h2V4h6zm0 8H9v2h6zm0-6h2v6h-2zM4 16h2v-2h12v2H6v4h12v-4h2v6H4z"></svg:path>`,
})
export class PixelarticonsUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUserMinusIcon],svg[pixelarticons-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h6v2h-6v6h-2V4h2zm0 8h6v2h-6zm8-6h-2v6h2zM9 16H7v6h16v-6h-2v4H9zh12v-2H9zm-2-6H1v2h6z"></svg:path>`,
})
export class PixelarticonsUserMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUserPlusIcon],svg[pixelarticons-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-6v2h-2v6h2V4h6zm0 8h-6v2h6zm0-6h2v6h-2zM7 16h2v-2h12v2H9v4h12v-4h2v6H7zM3 8h2v2h2v2H5v2H3v-2H1v-2h2z"></svg:path>`,
})
export class PixelarticonsUserPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUserXIcon],svg[pixelarticons-user-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h6v2h-6v6h-2V4h2zm0 8h6v2h-6zm8-6h-2v6h2zM7 16v6h16v-6h-2v4H9v-4h12v-2H9v2zm-1-6H4V8H2v2h2v2H2v2h2v-2h2v2h2v-2H6zm0 0h2V8H6z"></svg:path>`,
})
export class PixelarticonsUserXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUsersIcon],svg[pixelarticons-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0H5v2H3v6h2v2h6V8H5V2h6zm0 2h2v6h-2zM0 14h2v4h12v2H0zm2 0h12v-2H2zm14 0h-2v6h2zM15 0h4v2h-4zm4 8h-4v2h4zm0-6h2v6h-2zm5 12h-2v4h-4v2h6zm-6-2h4v2h-4z"></svg:path>`,
})
export class PixelarticonsUsersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVideoIcon],svg[pixelarticons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h14v4h2V7h2V5h2v14h-2v-2h-2v-2h-2v4H2zm2 12h10V7H4z"></svg:path>`,
})
export class PixelarticonsVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVideoOffIcon],svg[pixelarticons-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H2v14h14v-4h2v2h2v2h2V5h-2v2h-2v2h-2V5zm10 12H4V7h10zm-4-6H8V9H6v2h2v2H6v2h2v-2h2v2h2v-2h-2zm0 0V9h2v2z"></svg:path>`,
})
export class PixelarticonsVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsViewColIcon],svg[pixelarticons-view-col-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v10h4V7zm6 0v10h4V7zm6 0v10h4V7z"></svg:path>`,
})
export class PixelarticonsViewColIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsViewListIcon],svg[pixelarticons-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v2h16V7zm16 4H4v2h16zm0 4H4v2h16z"></svg:path>`,
})
export class PixelarticonsViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsViewportNarrowIcon],svg[pixelarticons-viewport-narrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H8v4h2V4h4v2h2V2zM8 20v-2h2v2h4v-2h2v4H8zm9-9h5v2h-5v2h-2v-2h-2v-2h2V9h2zm0-2V7h2v2zm0 6h2v2h-2zM2 11h5V9h2v2h2v2H9v2H7v-2H2zm5 4v2H5v-2zm0-6V7H5v2z"></svg:path>`,
})
export class PixelarticonsViewportNarrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsViewportWideIcon],svg[pixelarticons-viewport-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v4h2V4h16v2h2V2zM2 20v-2h2v2h16v-2h2v4H2zm16-9h-5v2h5v2h-2v2h2v-2h2v-2h2v-2h-2V9h-2V7h-2v2h2zm-7 0H6V9h2V7H6v2H4v2H2v2h2v2h2v2h2v-2H6v-2h5z"></svg:path>`,
})
export class PixelarticonsViewportWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVisibleIcon],svg[pixelarticons-visible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v2H0zm2 2h2v2H2zm18 0h2v2h-2zm2-2h2v2h-2zM2 20h2v2H2zm-2 2h2v2H0zm20-2h2v2h-2zm2 2h2v2h-2zM8 17h8v2H8zm8-2h4v2h-4zm-8 0H4v2h4zm8-8h4v2h-4zM8 7H4v2h4zm12 2h2v2h-2zM4 9H2v2h2zm18 2h2v2h-2zM2 11H0v2h2zm18 2h2v2h-2zM4 13H2v2h2zm4-8h8v2H8zm2 5h4v4h-4z"></svg:path>`,
})
export class PixelarticonsVisibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolumeIcon],svg[pixelarticons-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v20h-2v-2h-2v-2h2V6h-2V4h2zm-4 6V6h2v2zm-2 2h2V8H7v8h4v2h2v-2h-2v-2H9z"></svg:path>`,
})
export class PixelarticonsVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolume1Icon],svg[pixelarticons-volume-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h-2v2h-2v2H9v2H5v8h4v2h2v2h2v2h2zm-4 16v-2H9v-2H7v-4h2V8h2V6h2v12zm6-8h2v4h-2z"></svg:path>`,
})
export class PixelarticonsVolume1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolume2Icon],svg[pixelarticons-volume-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v20h-2v-2H9v-2h2V6H9V4h2zM7 8V6h2v2zm0 8H3V8h4v2H5v4h2zm0 0v2h2v-2zm10-6h-2v4h2zm2-2h2v8h-2zm0 8v2h-4v-2zm0-10v2h-4V6z"></svg:path>`,
})
export class PixelarticonsVolume2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolume3Icon],svg[pixelarticons-volume-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H9v2H7v2H5v2H1v8h4v2h2v2h2v2h2zM7 18v-2H5v-2H3v-4h2V8h2V6h2v12zm6-8h2v4h-2zm8-6h-2V2h-6v2h6v2h2v12h-2v2h-6v2h6v-2h2v-2h2V6h-2zm-2 4h-2V6h-4v2h4v8h-4v2h4v-2h2z"></svg:path>`,
})
export class PixelarticonsVolume3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolumeMinusIcon],svg[pixelarticons-volume-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2v2H8v2H6v2H2v8h4v2h2v2h2v2h2zM8 18v-2H6v-2H4v-4h2V8h2V6h2v12zm14-7h-8v2h8z"></svg:path>`,
})
export class PixelarticonsVolumeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolumePlusIcon],svg[pixelarticons-volume-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h2v20h-2v-2H8v-2h2V6H8V4h2zM6 8V6h2v2zm0 8H2V8h4v2H4v4h2zm0 0v2h2v-2zm13-5h3v2h-3v3h-2v-3h-3v-2h3V8h2z"></svg:path>`,
})
export class PixelarticonsVolumePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolumeVibrateIcon],svg[pixelarticons-volume-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h-2v2h-2v2H8v2H4v8h4v2h2v2h2v2h2zm-4 16v-2H8v-2H6v-4h2V8h2V6h2v12zm8-15h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v-2h2v-2h-2v-2h2v-2h-2v-2h2V9h-2V7h2V5h-2z"></svg:path>`,
})
export class PixelarticonsVolumeVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolumeXIcon],svg[pixelarticons-volume-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v2H9v2H7v2H3v8h4v2h2v2h2v2h2zM9 18v-2H7v-2H5v-4h2V8h2V6h2v12zm10-6.777h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsVolumeXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsWalletIcon],svg[pixelarticons-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H2v18h18v-4h2V7h-2V3zm0 14v2H4V5h14v2h-8v10zm2-2h-8V9h8zm-4-4h-2v2h2z"></svg:path>`,
})
export class PixelarticonsWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsWarningBoxIcon],svg[pixelarticons-warning-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h16v2H5v14h14v2H3zm18 0h-2v18h2zM11 15h2v2h-2zm2-8h-2v6h2z"></svg:path>`,
})
export class PixelarticonsWarningBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsWindIcon],svg[pixelarticons-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3H8v2h4v2H2v2h12V3zm10 8V7h-6v2h4v2H2v2h20zM2 17v-2h14v6h-6v-2h4v-2z"></svg:path>`,
})
export class PixelarticonsWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsZapIcon],svg[pixelarticons-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2zM8 7V5h2v2zM6 9V7h2v2zm-2 2V9h2v2zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6zm2-2v2h-2v-2zm2-2v2h-2v-2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsZapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsZoomInIcon],svg[pixelarticons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6v2H4v2H2v8h2v2h2v2h8v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2V6h-2V4h-2zm0 2v2h2v8h-2v2H6v-2H4V6h2V4zM9 6h2v3h3v2h-3v3H9v-3H6V9h3z"></svg:path>`,
})
export class PixelarticonsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsZoomOutIcon],svg[pixelarticons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6v2H4v2H2v8h2v2h2v2h8v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2V6h-2V4h-2zm0 2v2h2v8h-2v2H6v-2H4V6h2V4zm0 5v2H6V9z"></svg:path>`,
})
export class PixelarticonsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticons4kBoxIcon],svg[pixelarticons-4k-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4H1v16h22V4zm18 2v12H3V6zM7 8H5v5h4v3h2V8H9v3H7zm8 0h-2v8h2v-3h2v3h2v-3h-2v-2h2V8h-2v3h-2z"></svg:path>`,
})
export class Pixelarticons4kBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticons4kIcon],svg[pixelarticons-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2v4h4V7h2v10H9v-4H3zm10 0h2v4h2v2h-2v4h-2zm6 8h-2v-2h2zm0 0h2v2h-2zm0-6h-2v2h2zm0 0V7h2v2z"></svg:path>`,
})
export class Pixelarticons4kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAbTestingIcon],svg[pixelarticons-ab-testing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h6v2H5v2h4v2H5v2h4v2H3zm6 8h2V9H9zm0-4h2V5H9zm4 4h8v10h-2v-4h-4v4h-2zm2 4h4v-2h-4zm0-12h6v6h-2V5h-4zM3 15h2v4h4v2H3z"></svg:path>`,
})
export class PixelarticonsAbTestingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
