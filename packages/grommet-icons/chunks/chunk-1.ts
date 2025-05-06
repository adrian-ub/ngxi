import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusGoodIcon],svg[grommet-icons-status-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10ZM7 12l4 3l5-7"></svg:path>`,
})
export class GrommetIconsStatusGoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusGoodSmallIcon],svg[grommet-icons-status-good-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="6" r="5" fill="currentColor" fill-rule="evenodd" stroke="currentColor"></svg:circle>`,
})
export class GrommetIconsStatusGoodSmallIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusInfoIcon],svg[grommet-icons-status-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 3.99C2 2.892 2.898 2 3.99 2h16.02C21.108 2 22 2.898 22 3.99v16.02c0 1.099-.898 1.99-1.99 1.99H3.99A1.995 1.995 0 0 1 2 20.01zM12 10v8m0-12v2"></svg:path>`,
})
export class GrommetIconsStatusInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusInfoSmallIcon],svg[grommet-icons-status-info-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="10" x="1" y="1" fill="currentColor" fill-rule="evenodd" stroke="currentColor" rx="1"></svg:rect>`,
})
export class GrommetIconsStatusInfoSmallIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusPlaceholderIcon],svg[grommet-icons-status-placeholder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="20" height="20" x="2" y="2" fill="none" stroke="currentColor" stroke-width="2" rx="2"></svg:rect>`,
})
export class GrommetIconsStatusPlaceholderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusPlaceholderSmallIcon],svg[grommet-icons-status-placeholder-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="10" x="1" y="1" fill="currentColor" fill-rule="evenodd" stroke="currentColor" rx="1"></svg:rect>`,
})
export class GrommetIconsStatusPlaceholderSmallIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusUnknownIcon],svg[grommet-icons-status-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 3.99C2 2.892 2.898 2 3.99 2h16.02C21.108 2 22 2.898 22 3.99v16.02c0 1.099-.898 1.99-1.99 1.99H3.99A1.995 1.995 0 0 1 2 20.01zM12 15v-1c0-1 0-1.5 1-2s2-1 2-2.5c0-1-1-2.5-3-2.5s-3 1.264-3 3m3 6v2"></svg:path>`,
})
export class GrommetIconsStatusUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusUnknownSmallIcon],svg[grommet-icons-status-unknown-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="10" x="1" y="1" fill="currentColor" fill-rule="evenodd" stroke="currentColor" rx="1"></svg:rect>`,
})
export class GrommetIconsStatusUnknownSmallIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusWarningIcon],svg[grommet-icons-status-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m12 3l10 18H2zm0 6v6m0 1v2"></svg:path>`,
})
export class GrommetIconsStatusWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusWarningSmallIcon],svg[grommet-icons-status-warning-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" d="m6 1l5 9H1z"></svg:path>`,
})
export class GrommetIconsStatusWarningSmallIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStepsIcon],svg[grommet-icons-steps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16 6h-5v5H6v5H1v7h22V1h-7z"></svg:path>`,
})
export class GrommetIconsStepsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStepsOptionIcon],svg[grommet-icons-steps-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M24 9h-5v5h-5v5H9v5m-8 0v-7.003c0-.55.313-1.31.703-1.7L15.297 1.703c.388-.388 1.156-.703 1.7-.703H24"></svg:path>`,
})
export class GrommetIconsStepsOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStopIcon],svg[grommet-icons-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 4h16v16H4z"></svg:path>`,
})
export class GrommetIconsStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStopFillIcon],svg[grommet-icons-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 4h16v16H4zm2 2h12v12H6zm2 2h8v8H8zm2 2h4v4h-4zm1 1h2v2h-2z"></svg:path>`,
})
export class GrommetIconsStopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStorageIcon],svg[grommet-icons-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 5.077S3.667 2 12 2s10 3.077 10 3.077v13.846S20.333 22 12 22S2 18.923 2 18.923zM2 13s3.333 3 10 3s10-3 10-3M2 7s3.333 3 10 3s10-3 10-3"></svg:path>`,
})
export class GrommetIconsStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStreetViewIcon],svg[grommet-icons-street-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16 5a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-1 18v-6h3v-2c0-3.34-2.76-5.97-6-6c-3.21.03-6 2.66-6 6v2h3v6m-5.5 0h17z"></svg:path>`,
})
export class GrommetIconsStreetViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStrikeThroughIcon],svg[grommet-icons-strike-through-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.77 12.17h12.46v1.09H5.77zm10.93 1.48h-3.81c.59.34 1 .6 1.18.74a3.4 3.4 0 0 1 1 1.07a2.4 2.4 0 0 1 .31 1.14a2.3 2.3 0 0 1-.82 1.76a3.18 3.18 0 0 1-2.22.74a4.7 4.7 0 0 1-2.23-.54a3.77 3.77 0 0 1-1.55-1.36a7.4 7.4 0 0 1-.79-2.46h-.41V20h.41a1.35 1.35 0 0 1 .24-.7a.6.6 0 0 1 .44-.17a6.5 6.5 0 0 1 1.39.35a13 13 0 0 0 1.45.41a7.3 7.3 0 0 0 1.25.1A4.87 4.87 0 0 0 16 18.72a4 4 0 0 0 1.34-3a3.8 3.8 0 0 0-.42-1.72c-.06-.13-.14-.23-.22-.35m-7.81-2.44c.21.17.49.36.81.57h4.87c-.48-.29-1.07-.62-1.76-1a12.5 12.5 0 0 1-3.33-2.24A1.93 1.93 0 0 1 9 7.26a2.18 2.18 0 0 1 .77-1.63a2.72 2.72 0 0 1 1.93-.71a4.14 4.14 0 0 1 2 .53a3.8 3.8 0 0 1 1.49 1.43a6.6 6.6 0 0 1 .73 2.42h.41V4h-.41a1.4 1.4 0 0 1-.3.7a.67.67 0 0 1-.48.17a2.6 2.6 0 0 1-.89-.28A6.45 6.45 0 0 0 11.68 4a4.5 4.5 0 0 0-3.21 1.21A3.75 3.75 0 0 0 7.21 8a3.6 3.6 0 0 0 .43 1.73a4.7 4.7 0 0 0 1.25 1.48"></svg:path>`,
})
export class GrommetIconsStrikeThroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStripeIcon],svg[grommet-icons-stripe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h22v22H1zm10.12 8.19c0-.604.494-.836 1.314-.836c1.174 0 2.658.356 3.833.99V5.71c-1.283-.509-2.55-.71-3.833-.71c-3.138 0-5.225 1.639-5.225 4.375c0 4.266 5.874 3.586 5.874 5.425c0 .711-.619.943-1.484.943c-1.283 0-2.922-.525-4.22-1.236v3.679c1.437.618 2.89.88 4.22.88c3.215 0 5.426-1.591 5.426-4.358c-.016-4.607-5.905-3.788-5.905-5.519"></svg:path>`,
})
export class GrommetIconsStripeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSubscriptIcon],svg[grommet-icons-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.74 3.63l.19 4.07h-.49a4.9 4.9 0 0 0-.38-1.54A2.6 2.6 0 0 0 17 5.07a3.7 3.7 0 0 0-1.73-.35h-2.44V18a3.54 3.54 0 0 0 .35 2a1.92 1.92 0 0 0 1.5.54h.6V21H7.92v-.5h.61a1.76 1.76 0 0 0 1.56-.67a3.9 3.9 0 0 0 .29-1.83V4.72H8.29a5.8 5.8 0 0 0-1.73.18a2.37 2.37 0 0 0-1.14.93a3.8 3.8 0 0 0-.56 1.87h-.48l.21-4.07Zm3.74 13.05h.33v5.59a1.1 1.1 0 0 0 .06.4a.4.4 0 0 0 .17.21a.6.6 0 0 0 .28.08h.4v.27h-2.96V23h.45a.6.6 0 0 0 .29-.1a.38.38 0 0 0 .15-.22a1.4 1.4 0 0 0 0-.37v-3.89a4.5 4.5 0 0 0 0-.64c0-.15-.1-.23-.24-.23a.8.8 0 0 0-.28 0l-.3.13l-.18-.25Z"></svg:path>`,
})
export class GrommetIconsSubscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSubtractIcon],svg[grommet-icons-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h20"></svg:path>`,
})
export class GrommetIconsSubtractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSubtractCircleIcon],svg[grommet-icons-subtract-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10ZM6 12h12"></svg:path>`,
})
export class GrommetIconsSubtractCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSunIcon],svg[grommet-icons-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93m14.14 14.14l-1.414-1.414M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path>`,
})
export class GrommetIconsSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSuperscriptIcon],svg[grommet-icons-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.74 3.63l.19 4.07h-.49a4.9 4.9 0 0 0-.38-1.54A2.57 2.57 0 0 0 17 5.07a3.7 3.7 0 0 0-1.73-.35h-2.44V18a3.56 3.56 0 0 0 .34 2a1.92 1.92 0 0 0 1.5.54h.6V21H7.92v-.5h.61a1.76 1.76 0 0 0 1.56-.67a3.9 3.9 0 0 0 .29-1.83V4.72H8.29a5.8 5.8 0 0 0-1.73.18a2.37 2.37 0 0 0-1.14.93a3.8 3.8 0 0 0-.56 1.87h-.48l.21-4.07ZM22.48 1h.33v5.62a1.1 1.1 0 0 0 .06.4a.4.4 0 0 0 .17.21a.6.6 0 0 0 .28.08h.4v.29h-2.96v-.27h.45a.6.6 0 0 0 .29-.1a.38.38 0 0 0 .15-.23a1.4 1.4 0 0 0 0-.37V2.77a4.5 4.5 0 0 0 0-.64c0-.15-.1-.23-.24-.23a.8.8 0 0 0-.28 0l-.3.13l-.18-.25Z"></svg:path>`,
})
export class GrommetIconsSuperscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSupportIcon],svg[grommet-icons-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.222 19.778c4.296 4.296 11.26 4.296 15.556 0s4.296-11.26 0-15.556s-11.26-4.296-15.556 0s-4.296 11.26 0 15.556ZM6.343 21.9l4.243-4.242m-8.485 0l4.242-4.243m11.314-2.828l4.242-4.243m-8.485 0l4.243-4.242m-9.9 14.142a6 6 0 1 0 8.486-8.486a6 6 0 0 0-8.486 8.486Zm-5.656-9.9l4.242 4.243m0-8.485l4.243 4.242m2.828 11.314l4.243 4.242m0-8.485l4.242 4.243"></svg:path>`,
})
export class GrommetIconsSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSuseIcon],svg[grommet-icons-suse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 8.285c-1.42-2.294-3.663-3.936-6.087-4.354c-2.037-.354-5.752-.391-7.72 3.322c-.822 1.55-.771 3.568.13 5.268c.919 1.74 2.561 2.859 4.504 3.072c1.928.21 3.376-.236 4.19-1.288c.82-1.063.972-2.509.39-3.687c-.624-1.265-1.567-1.937-2.875-2.048c-.999-.089-1.737.327-2.005.75a1.4 1.4 0 0 0-.218.737c0 .95.867 1.21 1.043 1.222c.054-.003.316-.008.662-.095l.168-.056l.2-.056a1.234 1.234 0 0 1 1.463 1.21c0 .408-.207.789-.631 1.071c-.182.115-.35.179-.525.234a4.4 4.4 0 0 1-1.373.236c-1.505-.002-3.6-1.295-3.626-3.724c-.014-1.371.673-2.618 1.885-3.422c1.394-.922 3.803-1.235 6.04.137c2.75 1.682 3.469 4.981 2.75 7.23c-1.043 3.258-3.98 5-7.853 4.653c-2.745-.244-5.295-1.693-6.812-3.874a9.6 9.6 0 0 1-1.44-3.119c-.62-2.456.006-5.066.472-6.222c.8-1.981 1.993-3.813 3.566-5.482H1.001A1 1 0 0 0 0 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1z"></svg:path>`,
})
export class GrommetIconsSuseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSwiftIcon],svg[grommet-icons-swift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.103 21.018c-2.827 1.633-6.714 1.801-10.625.125c-3.166-1.347-5.794-3.705-7.478-6.4c.808.674 1.752 1.213 2.762 1.684c4.039 1.893 8.077 1.764 10.918.005l-.004-.005C9.634 13.328 6.198 9.286 3.638 5.985c-.54-.539-.943-1.212-1.348-1.819c3.1 2.83 8.018 6.4 9.769 7.411C8.354 7.67 5.053 2.82 5.187 2.954c5.861 5.928 11.319 9.297 11.319 9.297c.18.101.32.186.432.262q.177-.45.308-.936C18.19 8.141 17.112 4.234 14.754 1c5.456 3.301 8.69 9.499 7.343 14.686q-.053.21-.115.414l.048.058c2.694 3.369 1.953 6.94 1.616 6.266c-1.461-2.86-4.167-1.986-5.543-1.406"></svg:path>`,
})
export class GrommetIconsSwiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSwimIcon],svg[grommet-icons-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 13c.5.5 2.13-.112 3.262-.5c1.46-.5 3.238 0 2.738-.5l-2-2s-4.5 2.5-4 3m-9 7c2 0 3-1 5-1s3 1 5 1s3-1 5-1s3 1 5 1M2 16c2 0 3-1 5-1s3 1 5 1s3-1 5-1s3 1 5 1M17.5 4l-5.278 3l3.278 3.5L12 12m7.222-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class GrommetIconsSwimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSwitchIcon],svg[grommet-icons-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1h14v22H5zm2.5 10H17v10H7V11zM15 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-4 13v-5h2v5zm1-13.998a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSyncIcon],svg[grommet-icons-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5 19h11a7 7 0 0 0 7-7V9M8 15l-4 4l4 4M19 5H8a7 7 0 0 0-7 7v3M16 1l4 4l-4 4"></svg:path>`,
})
export class GrommetIconsSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSystemIcon],svg[grommet-icons-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 19h22V1H1zm4 4h14zm3 0h8v-4H8zM7.757 5.757l2.122 2.122zM9 10H6zm.879 2.121l-2.122 2.122zM12 13v3zm2.121-.879l2.122 2.122zM18 10h-3zm-1.757-4.243l-2.122 2.122zM12 7V4zm0 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></svg:path>`,
})
export class GrommetIconsSystemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTableIcon],svg[grommet-icons-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 5v18m8-18v18M1 11h22M1 5h22M1 17h22M1 1h22v22H1z"></svg:path>`,
})
export class GrommetIconsTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTableAddIcon],svg[grommet-icons-table-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 5v18m8-18v6M1 11h16M1 5h22M1 17h10m6 6H1V1h22v16m-6 6a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-9v6m0-6v6m-3-3h6"></svg:path>`,
})
export class GrommetIconsTableAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTagIcon],svg[grommet-icons-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M11.706 22.294a.99.99 0 0 1-1.41.003l-8.593-8.594a1 1 0 0 1 .003-1.409L13 1h10v10zM6 12l6 6M9 9l6 6m2-9a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path>`,
})
export class GrommetIconsTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTapeIcon],svg[grommet-icons-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 2h20v20H2zm17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Zm-7-3c-1.655 0-3 1.345-3 3s1.345 3 3 3s3-1.345 3-3s-1.345-3-3-3Z"></svg:path>`,
})
export class GrommetIconsTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTapeOptionIcon],svg[grommet-icons-tape-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 2h21v20H2V7m10 12a7 7 0 0 1-7-7m7 7a7 7 0 0 0 0-14H1m11 4c-1.655 0-3 1.345-3 3s1.345 3 3 3s3-1.345 3-3s-1.345-3-3-3Z"></svg:path>`,
})
export class GrommetIconsTapeOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTargetIcon],svg[grommet-icons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-5 0c0-3.309-2.691-6-6-6s-6 2.691-6 6s2.691 6 6 6s6-2.691 6-6Zm-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"></svg:path>`,
})
export class GrommetIconsTargetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTaskIcon],svg[grommet-icons-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 20h12m-12-8h12M12 4h12M1 19l3 3l5-5m-8-6l3 3l5-5m0-8L4 6L1 3"></svg:path>`,
})
export class GrommetIconsTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTasksIcon],svg[grommet-icons-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 3h22v4H1zm0 7h22v4H1zm0 7h22v4H1zM1 4h15v2H1zm0 7h5v2H1zm0 7h10v2H1z"></svg:path>`,
})
export class GrommetIconsTasksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTechnologyIcon],svg[grommet-icons-technology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5 6l8-8M5.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13-13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 21l2-2"></svg:path>`,
})
export class GrommetIconsTechnologyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTemplateIcon],svg[grommet-icons-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 3h22v18H1zm0 5h22M7 8v13"></svg:path>`,
})
export class GrommetIconsTemplateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTerminalIcon],svg[grommet-icons-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m2 5l6 6l-6 6m7 0h14"></svg:path>`,
})
export class GrommetIconsTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTestIcon],svg[grommet-icons-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M9 1v7L2 20v3h20v-3L15 8V1m0 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-6 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm9-7c-7-3-6 4-12 1M6 1h12"></svg:path>`,
})
export class GrommetIconsTestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTestDesktopIcon],svg[grommet-icons-test-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18.218 1H23v18H1V1h5m11 9c-4-3-6 3-10 0M5 23h14zm5-22v4.773l-5 7.182V15h14v-2.045l-5-7.182V1M8 1h8zm0 22h8v-4H8z"></svg:path>`,
})
export class GrommetIconsTestDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTextAlignCenterIcon],svg[grommet-icons-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.46 3.06h23.08v2.18H.46zM4.1 8.29h15.81v2.18H4.1zM.46 13.53h23.08v2.18H.46zm3.64 5.23h15.81v2.18H4.1z"></svg:path>`,
})
export class GrommetIconsTextAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTextAlignFullIcon],svg[grommet-icons-text-align-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.46 3.06h23.08v2.18H.46zm0 5.23h23.08v2.18H.46zm0 5.24h23.08v2.18H.46zm0 5.23h15.81v2.18H.46z"></svg:path>`,
})
export class GrommetIconsTextAlignFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTextAlignLeftIcon],svg[grommet-icons-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.46 3.06h23.08v2.18H.46zm0 5.23h15.81v2.18H.46zm0 5.24h23.08v2.18H.46zm0 5.23h15.81v2.18H.46z"></svg:path>`,
})
export class GrommetIconsTextAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTextAlignRightIcon],svg[grommet-icons-text-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.46 3.06h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73zM.46 13.53h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73z"></svg:path>`,
})
export class GrommetIconsTextAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTextWrapIcon],svg[grommet-icons-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M17 10h7zM1 14h13V2H1zm5-8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m11 0h7zm0-4h7zm0 12h7zM0 18h24zm0 4h24zm14-8v-1l-4-5l-3 3l-1-1l-4 4z"></svg:path>`,
})
export class GrommetIconsTextWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsThreadsIcon],svg[grommet-icons-threads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.067 11.123a9 9 0 0 0-.315-.142c-.185-3.414-2.05-5.368-5.182-5.388h-.042c-1.873 0-3.431.8-4.39 2.255L9.86 9.029c.716-1.087 1.84-1.318 2.669-1.318h.028c1.031.006 1.81.306 2.313.89c.367.426.612 1.015.733 1.757a13.2 13.2 0 0 0-2.96-.143c-2.977.172-4.892 1.909-4.763 4.322c.065 1.223.675 2.277 1.717 2.964c.88.582 2.015.866 3.194.802c1.558-.085 2.78-.68 3.632-1.766c.647-.825 1.056-1.894 1.237-3.241c.742.448 1.292 1.037 1.596 1.745c.516 1.205.546 3.184-1.068 4.797c-1.415 1.414-3.116 2.025-5.686 2.044c-2.851-.02-5.008-.935-6.41-2.717c-1.313-1.67-1.991-4.08-2.016-7.165c.025-3.085.703-5.496 2.016-7.165c1.402-1.782 3.558-2.696 6.41-2.717c2.871.02 5.065.94 6.521 2.73c.714.879 1.252 1.983 1.607 3.27l2.018-.538c-.43-1.585-1.107-2.95-2.027-4.083C18.755 1.2 16.025.024 12.509 0h-.014c-3.51.024-6.208 1.205-8.021 3.51C2.86 5.56 2.028 8.414 2 11.992v.016c.028 3.578.86 6.431 2.474 8.482c1.813 2.305 4.511 3.486 8.02 3.51h.015c3.12-.022 5.319-.838 7.13-2.649c2.371-2.368 2.3-5.336 1.518-7.158c-.56-1.307-1.629-2.368-3.09-3.07m-5.387 5.065c-1.305.074-2.66-.512-2.728-1.766c-.05-.93.662-1.969 2.808-2.092q.369-.022.724-.021c.78 0 1.508.075 2.171.22c-.247 3.088-1.697 3.59-2.975 3.66Z"></svg:path>`,
})
export class GrommetIconsThreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsThreatsIcon],svg[grommet-icons-threats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M9 23A7 7 0 1 0 9 9a7 7 0 0 0 0 14ZM9 6V5c0-3 2-4 4-4s4 1 4 4v3c0 1 0 3 2 3s2-2 2-3c0-2 1-2 2-2m-11 7l-6 6m0-6l6 6m-6-9V6h6v4"></svg:path>`,
})
export class GrommetIconsThreatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsThreeDIcon],svg[grommet-icons-three-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 5.5v13l10 4l10-4v-13l-10-4zM13 12h5v5M2 5.5l10 4l10-4M6 14s6 6.5 12-2"></svg:path>`,
})
export class GrommetIconsThreeDIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsThreeDEffectsIcon],svg[grommet-icons-three-d-effects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M11 3h2l9 3v11l-10 3.5L2 17V6.5L4 6l9 2.5l-2 .5l-9-2.5"></svg:path>`,
})
export class GrommetIconsThreeDEffectsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTicketIcon],svg[grommet-icons-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M7 16h10V8H7zm13-4q0 3 3 3v5H1v-5q3 0 3-3T1 9V4h22v5q-3 0-3 3Z"></svg:path>`,
})
export class GrommetIconsTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTictokIcon],svg[grommet-icons-tictok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.459 6.846v3.659c-.197 0-.433.04-.669.04a7.295 7.295 0 0 1-4.682-1.732v7.79a6.987 6.987 0 0 1-1.416 4.25a7.02 7.02 0 0 1-5.626 2.832a6.993 6.993 0 0 1-5.941-3.305c1.259 1.18 2.95 1.928 4.8 1.928a6.893 6.893 0 0 0 5.586-2.833c.866-1.18 1.417-2.636 1.417-4.249v-7.83c1.259 1.102 2.872 1.732 4.682 1.732c.236 0 .433 0 .669-.04v-2.36c.354.079.669.118 1.023.118z"></svg:path><svg:path d="M11.05 9.56v4.053a3.277 3.277 0 0 0-.866-.118c-1.732 0-3.148 1.456-3.148 3.226c0 .394.079.748.197 1.102c-.787-.59-1.338-1.535-1.338-2.597c0-1.77 1.416-3.226 3.148-3.226c.314 0 .59.04.865.118V9.521h.236c.315 0 .63 0 .905.04zm6.648-5.626c-.708-.63-1.22-1.495-1.495-2.4h.945v.551a6.25 6.25 0 0 0 .55 1.85z"></svg:path><svg:path d="M21.318 6.767v2.36c-.197.04-.433.04-.669.04a7.295 7.295 0 0 1-4.682-1.73v7.79a6.987 6.987 0 0 1-1.416 4.248c-1.299 1.732-3.305 2.833-5.587 2.833c-1.85 0-3.541-.747-4.8-1.928a7.136 7.136 0 0 1-1.062-3.737c0-3.817 3.03-6.925 6.806-7.043v2.597a3.277 3.277 0 0 0-.865-.118c-1.732 0-3.148 1.455-3.148 3.226c0 1.062.512 2.046 1.338 2.597c.433 1.22 1.613 2.124 2.95 2.124c1.732 0 3.148-1.456 3.148-3.226V1.534h2.872c.276.945.787 1.77 1.495 2.4a5.397 5.397 0 0 0 3.62 2.833"></svg:path><svg:path d="M9.908 8.184V9.52c-3.777.118-6.806 3.226-6.806 7.043c0 1.377.393 2.636 1.062 3.738A7.122 7.122 0 0 1 2 15.148c0-3.896 3.148-7.043 7.003-7.043c.315 0 .63.04.905.079"></svg:path><svg:path d="M16.203 1.534h-2.872v15.187c0 1.77-1.416 3.227-3.147 3.227c-1.377 0-2.518-.866-2.951-2.125c.511.354 1.14.59 1.81.59c1.73 0 3.147-1.416 3.147-3.187V0h3.817v.079c0 .157 0 .314.039.472c0 .315.079.669.157.983m5.115 3.777v1.417c-1.574-.315-2.911-1.377-3.659-2.794a5.11 5.11 0 0 0 3.659 1.377"></svg:path></svg:g>`,
})
export class GrommetIconsTictokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTiktokIcon],svg[grommet-icons-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.459 6.846v3.659c-.197 0-.433.04-.669.04a7.3 7.3 0 0 1-4.682-1.732v7.79a7 7 0 0 1-1.416 4.25a7.02 7.02 0 0 1-5.626 2.832a6.99 6.99 0 0 1-5.941-3.305c1.259 1.18 2.95 1.928 4.8 1.928a6.9 6.9 0 0 0 5.586-2.833c.866-1.18 1.417-2.636 1.417-4.249v-7.83c1.259 1.102 2.872 1.732 4.682 1.732c.236 0 .433 0 .669-.04v-2.36c.354.079.669.118 1.023.118z"></svg:path><svg:path d="M11.05 9.56v4.053a3.3 3.3 0 0 0-.866-.118c-1.732 0-3.148 1.456-3.148 3.226c0 .394.079.748.197 1.102c-.787-.59-1.338-1.535-1.338-2.597c0-1.77 1.416-3.226 3.148-3.226c.314 0 .59.04.865.118V9.521h.236c.315 0 .63 0 .905.04zm6.648-5.626c-.708-.63-1.22-1.495-1.495-2.4h.945v.551a6.3 6.3 0 0 0 .55 1.85z"></svg:path><svg:path d="M21.318 6.767v2.36c-.197.04-.433.04-.669.04a7.3 7.3 0 0 1-4.682-1.73v7.79a7 7 0 0 1-1.416 4.248c-1.299 1.732-3.305 2.833-5.587 2.833c-1.85 0-3.541-.747-4.8-1.928a7.14 7.14 0 0 1-1.062-3.737c0-3.817 3.03-6.925 6.806-7.043v2.597a3.3 3.3 0 0 0-.865-.118c-1.732 0-3.148 1.455-3.148 3.226c0 1.062.512 2.046 1.338 2.597c.433 1.22 1.613 2.124 2.95 2.124c1.732 0 3.148-1.456 3.148-3.226V1.534h2.872c.276.945.787 1.77 1.495 2.4a5.4 5.4 0 0 0 3.62 2.833"></svg:path><svg:path d="M9.908 8.184V9.52c-3.777.118-6.806 3.226-6.806 7.043c0 1.377.393 2.636 1.062 3.738A7.12 7.12 0 0 1 2 15.148c0-3.896 3.148-7.043 7.003-7.043c.315 0 .63.04.905.079"></svg:path><svg:path d="M16.203 1.534h-2.872v15.187c0 1.77-1.416 3.227-3.147 3.227c-1.377 0-2.518-.866-2.951-2.125c.511.354 1.14.59 1.81.59c1.73 0 3.147-1.416 3.147-3.187V0h3.817v.079c0 .157 0 .314.039.472c0 .315.079.669.157.983m5.115 3.777v1.417c-1.574-.315-2.911-1.377-3.659-2.794a5.1 5.1 0 0 0 3.659 1.377"></svg:path></svg:g>`,
})
export class GrommetIconsTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTimeIcon],svg[grommet-icons-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 13h4l2.5-9l5 16.5L17 9l2 4h4"></svg:path>`,
})
export class GrommetIconsTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTipIcon],svg[grommet-icons-tip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16.007 18H22V2H2v16h6.243l3.882 4z"></svg:path>`,
})
export class GrommetIconsTipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsToastIcon],svg[grommet-icons-toast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 2a4 4 0 0 0-2 7.465V16h12V9.465A4 4 0 0 0 16 2zm3.321 4.874a1.004 1.004 0 0 1 1.38-.37l1.715.991c.483.279.652.889.37 1.38l-.991 1.715a1.004 1.004 0 0 1-1.38.37L10.7 9.968a1.004 1.004 0 0 1-.37-1.379zM8 18v2m4-2v5m4-5v3"></svg:path>`,
})
export class GrommetIconsToastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsToolsIcon],svg[grommet-icons-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m11 2l11 11l-4.5 4.5l-11-11zm5 4l1-1l2 2l-1 1m-5 5l-9 9l-2-2l9-9m-6 7l1 1"></svg:path>`,
})
export class GrommetIconsToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTooltipIcon],svg[grommet-icons-tooltip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16.5 18L12 22.5L7.5 18H1V1h22v17zM6 10h1V9H6zm5.5 0h1V9h-1zm5.5 0h1V9h-1z"></svg:path>`,
})
export class GrommetIconsTooltipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTopCornerIcon],svg[grommet-icons-top-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16 4H4v12"></svg:path>`,
})
export class GrommetIconsTopCornerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTrainIcon],svg[grommet-icons-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5 1h14a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2Zm4 1h6M3 5h18M4 23h16M3 12h18M7 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM12 5v7m-3 8l-2 3m8-3l2 3"></svg:path>`,
})
export class GrommetIconsTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTransactionIcon],svg[grommet-icons-transaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 7h18m-4-5l5 5l-5 5m6 5H4m4-5l-5 5l5 5"></svg:path>`,
})
export class GrommetIconsTransactionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTrashIcon],svg[grommet-icons-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 5h16v18H4zM1 5h22M9 1h6v4H9zm0 0h6v4H9zm6 8v10M9 9v10"></svg:path>`,
})
export class GrommetIconsTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTreeIcon],svg[grommet-icons-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 1h6v6H4zm12 10h4v4h-4zm0 8h4v4h-4zM7 7v14h9m-9-8h9"></svg:path>`,
})
export class GrommetIconsTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTreeOptionIcon],svg[grommet-icons-tree-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m7 13l4.375-7H9l3-4l3 4h-2.375L17 13h-2l4 6.667H5L9 13zm5 11v-4"></svg:path>`,
})
export class GrommetIconsTreeOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTriggerIcon],svg[grommet-icons-trigger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 14h6l-3 9h2L20 9h-6l4-8H7z"></svg:path>`,
})
export class GrommetIconsTriggerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTrophyIcon],svg[grommet-icons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 15a6 6 0 0 1-6-6V1h12v8a6 6 0 0 1-6 6ZM6 3H1v4c0 2.509 1.791 4 4 4h1zm12 8h1c2.209 0 4-1.491 4-4V3h-5zM5 23h14v-4H5zm11-4a4 4 0 1 0-8 0"></svg:path>`,
})
export class GrommetIconsTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTroubleshootIcon],svg[grommet-icons-troubleshoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 5c0-2 1-4 2-4l2 4h2l2-4c1 0 2 2 2 4c0 2.254-1 4-3 5v11c0 1 0 2-2 2s-2-1-2-2V10C2 9 1 7.254 1 5Zm18 7v6m-2 0l1 5h2l1-5zm-3-6h10zm7 0V3a2 2 0 1 0-4 0v9"></svg:path>`,
})
export class GrommetIconsTroubleshootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTtyIcon],svg[grommet-icons-tty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 19h10a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H7h0a1 1 0 0 1-1-1h0a1 1 0 0 1 1-1Zm0-9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm5-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm5-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path>`,
})
export class GrommetIconsTtyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTumblrIcon],svg[grommet-icons-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.639 19.17c-.446.212-1.3.398-1.937.415c-1.92.05-2.293-1.35-2.31-2.367v-7.47h4.82V6.114H13.41V0H9.894c-.057 0-.158.051-.172.18C9.516 2.051 8.64 5.335 5 6.647v3.1h2.428v7.842c0 2.685 1.981 6.499 7.21 6.41c1.763-.031 3.722-.77 4.155-1.406z"></svg:path>`,
})
export class GrommetIconsTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTurbolinuxIcon],svg[grommet-icons-turbolinux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.419 6.222l.547 1.23h-3.35L6 6.223zm3.692 5.949L7.094 0l7.042 4.17l.41 1.984h3.351l-.752 2.051h-2.188l1.778 8.274l-4.171-2.052L14.684 24L8.187 10.803z"></svg:path>`,
})
export class GrommetIconsTurbolinuxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTwitchIcon],svg[grommet-icons-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.673 16.163l3.43-3.429V1.959H3.939v14.204h4.408v2.939l2.94-2.939zM1 3.92L1.98 0h20.08v13.715l-7.836 7.835h-3.917L7.857 24H5.409v-2.45H1zm10.286 7.836h-1.96V5.877h1.96v5.878Zm5.387 0h-1.959V5.877h1.96v5.878Z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTwitterIcon],svg[grommet-icons-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 4.309a9.8 9.8 0 0 1-2.828.775a4.94 4.94 0 0 0 2.165-2.724a9.9 9.9 0 0 1-3.127 1.196a4.925 4.925 0 0 0-8.39 4.49A13.97 13.97 0 0 1 1.671 2.9a4.9 4.9 0 0 0-.667 2.476c0 1.708.869 3.216 2.191 4.099A4.94 4.94 0 0 1 .964 8.86v.06a4.926 4.926 0 0 0 3.95 4.829a5 5 0 0 1-2.224.085a4.93 4.93 0 0 0 4.6 3.42a9.9 9.9 0 0 1-6.115 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01q0-.32-.014-.636A10 10 0 0 0 24 4.309"></svg:path>`,
})
export class GrommetIconsTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUbuntuIcon],svg[grommet-icons-ubuntu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12c-6.628 0-12-5.373-12-12S5.372 0 12 0c6.627 0 12 5.373 12 12M3.84 10.398a1.602 1.602 0 1 0 0 3.204a1.602 1.602 0 0 0 0-3.204m11.44 7.282a1.601 1.601 0 1 0 1.6 2.774a1.601 1.601 0 0 0-1.6-2.774M7.32 12c0-1.583.787-2.982 1.99-3.829L8.14 6.21a6.97 6.97 0 0 0-2.878 4.046c.506.413.829 1.041.829 1.745s-.323 1.332-.83 1.745A6.97 6.97 0 0 0 8.14 17.79l1.171-1.962A4.67 4.67 0 0 1 7.32 12M12 7.32a4.68 4.68 0 0 1 4.66 4.265l2.284-.033a6.94 6.94 0 0 0-2.068-4.515c-.61.23-1.313.195-1.92-.156a2.24 2.24 0 0 1-1.097-1.588a6.96 6.96 0 0 0-4.943.468l1.113 1.994A4.7 4.7 0 0 1 12 7.32m0 9.36a4.7 4.7 0 0 1-1.971-.435l-1.114 1.994a6.96 6.96 0 0 0 4.944.467a2.25 2.25 0 0 1 1.096-1.587a2.25 2.25 0 0 1 1.921-.156a6.94 6.94 0 0 0 2.068-4.515l-2.283-.033A4.68 4.68 0 0 1 12 16.68m3.279-10.36a1.601 1.601 0 1 0 1.602-2.773A1.601 1.601 0 0 0 15.28 6.32"></svg:path>`,
})
export class GrommetIconsUbuntuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUnderlineIcon],svg[grommet-icons-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.41 4.53v-.35h4.66v.36h-.49a1.34 1.34 0 0 0-1.19.65a3 3 0 0 0-.2 1.4v5.33a9.5 9.5 0 0 1-.41 3.08a3.85 3.85 0 0 1-1.54 1.87a5.5 5.5 0 0 1-3.13.78a5.9 5.9 0 0 1-3.27-.75a4 4 0 0 1-1.58-2A11.1 11.1 0 0 1 7 11.64V6.5a2.58 2.58 0 0 0-.33-1.59a1.38 1.38 0 0 0-1.08-.38H5v-.35h5.68v.36h-.5A1.3 1.3 0 0 0 9.06 5a2.87 2.87 0 0 0-.25 1.5v5.73A12.5 12.5 0 0 0 9 14a3.7 3.7 0 0 0 .51 1.54a2.8 2.8 0 0 0 1.06.91a3.7 3.7 0 0 0 1.7.36a4.7 4.7 0 0 0 2.31-.56a3 3 0 0 0 1.39-1.44a8.3 8.3 0 0 0 .37-3V6.5A2.7 2.7 0 0 0 16 5a1.43 1.43 0 0 0-1.12-.43ZM4.93 20v-1H19v1Z"></svg:path>`,
})
export class GrommetIconsUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUndoIcon],svg[grommet-icons-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.18 4L8.6 5.44L6.06 8h9.71a6 6 0 0 1 0 12h-2v-2h2a4 4 0 0 0 0-8H6.06l2.54 2.51l-1.42 1.41L2.23 9Z"></svg:path>`,
})
export class GrommetIconsUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUnlinkIcon],svg[grommet-icons-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m17 11l4.586 4.586a2 2 0 0 1 0 2.828l-3.172 3.172a2 2 0 0 1-2.828 0L11 17m6-9h4m-5-1V3M8 21v-4m-5-1h4m0-3L2.414 8.414a2 2 0 0 1 0-2.828l3.172-3.172a2 2 0 0 1 2.828 0L13 7"></svg:path>`,
})
export class GrommetIconsUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUnlockIcon],svg[grommet-icons-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M23 23V11H9v12zm-9-6h4m-7-6V7c0-3 0-6-5-6S1 4 1 7v4"></svg:path>`,
})
export class GrommetIconsUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUnorderedListIcon],svg[grommet-icons-unordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.94 6.42H24v1.75H5.94zm0 5.29H24v1.75H5.94zm0 5.28H24v1.75H5.94z"></svg:path><svg:circle cx="1.85" cy="7.29" r="1.52" fill="currentColor"></svg:circle><svg:circle cx="1.85" cy="12.58" r="1.52" fill="currentColor"></svg:circle><svg:circle cx="1.85" cy="17.87" r="1.52" fill="currentColor"></svg:circle>`,
})
export class GrommetIconsUnorderedListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUnsortedIcon],svg[grommet-icons-unsorted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.204 15.321l1.597-1.597l.707.707l-2.45 2.45l-.354.354l-.353-.353l-2.45-2.45l.707-.708l1.596 1.597V7.217h1zm-5.9-6.407v8.104h1V8.914l1.597 1.597l.707-.707l-2.45-2.45L9.803 7l-.354.354L7 9.804l.707.707z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsUnsortedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUpIcon],svg[grommet-icons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m2 15.999l10.173-9.824l9.824 10.173"></svg:path>`,
})
export class GrommetIconsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUpdateIcon],svg[grommet-icons-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1.75 16.002C3.353 20.098 7.338 23 12 23c6.075 0 11-4.925 11-11m-.75-4.002C20.649 3.901 16.663 1 12 1C5.925 1 1 5.925 1 12m8 4H1v8M23 0v8h-8"></svg:path>`,
})
export class GrommetIconsUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUpgradeIcon],svg[grommet-icons-upgrade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 18V8zm0 5c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11Zm5-11l-5-5l-5 5"></svg:path>`,
})
export class GrommetIconsUpgradeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUploadIcon],svg[grommet-icons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 17v6h22v-6M12 2v17M5 9l7-7l7 7"></svg:path>`,
})
export class GrommetIconsUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUploadOptionIcon],svg[grommet-icons-upload-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m17 12l-5-5l-5 5m5-4v10m0 5c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11z"></svg:path>`,
})
export class GrommetIconsUploadOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUsbKeyIcon],svg[grommet-icons-usb-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h14v-1h7V7h-7V6zm14 3v5h5V9zm-2 6V8H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm4-3.992h1.01v-1.01H19zm.51 2h-.5v-1.01h1.01v1.01z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsUsbKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserIcon],svg[grommet-icons-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 24v-5m8 5v-5M3 24v-5c0-4.97 4.03-8 9-8s9 3.03 9 8v5m-9-13a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path>`,
})
export class GrommetIconsUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserAddIcon],svg[grommet-icons-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5 24v-5m6 5v-5M1 24v-6c0-4.97 3.134-7 7-7s7 2 7 7v6M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm8 0h8m-4-4v8"></svg:path>`,
})
export class GrommetIconsUserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserAdminIcon],svg[grommet-icons-user-admin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h7m2-3.5a2.5 2.5 0 1 0 5.002-.002A2.5 2.5 0 0 0 10 19.5ZM23 15l-3-3l-6 6m3.5-3.5l3 3z"></svg:path>`,
})
export class GrommetIconsUserAdminIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserExpertIcon],svg[grommet-icons-user-expert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm6.643 4.696a6.75 6.75 0 0 0-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22L23 13"></svg:path>`,
})
export class GrommetIconsUserExpertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserFemaleIcon],svg[grommet-icons-user-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M20 24v-5c0-4-4.06-5-5-5c3.948 0 5-2 5-2s-3.057-1.969-3-6c-.057-3-2.15-5-5-5c-2.988 0-5.081 2-5 5c-.081 3.969-3 6-3 6s.914 2 5 2c-1.079 0-5 1-5 5v5m12-5v5m-8-5v5"></svg:path>`,
})
export class GrommetIconsUserFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserManagerIcon],svg[grommet-icons-user-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16 12c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 1a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm6-6c-1.5 0-3 .36-5-2c-2 2.36-4.5 3-7 2m1 6l5.025 5.257L17 13m-5 5v5"></svg:path>`,
})
export class GrommetIconsUserManagerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserNewIcon],svg[grommet-icons-user-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18 24V12m5 10l-10-7m10 0l-10 7M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10"></svg:path>`,
})
export class GrommetIconsUserNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserPoliceIcon],svg[grommet-icons-user-police-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16 14c2.374 1.183 4 3.65 4 7v2H4v-2c0-3.354 1.631-5.825 4-7m4 1c3.26 0 5.903-2.686 5.903-5.999c0-.702.218-1.375 0-2.001M6.093 7c-.21.615 0 1.313 0 2.001C6.093 12.314 8.738 15 12 15M6 8h12l3-4c-1.912-1.735-5.21-3-9-3c-3.836 0-7.168 1.296-9 3zm6-3a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1Z"></svg:path>`,
})
export class GrommetIconsUserPoliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserSettingsIcon],svg[grommet-icons-user-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18 21c-1.655 0-3-1.346-3-3s1.345-3 3-3c1.654 0 3 1.346 3 3s-1.346 3-3 3Zm6-3h-3zm-3.879 2.122l2.121 2.12zM18.001 24v-3zm-4.244-1.757l2.121-2.122zM12 18h3zm3.878-2.121l-2.12-2.121zm2.122-.88v-3zm2.121.88l2.121-2.121zM12.5 12.5C11.266 11.446 9.775 11 8 11c-3.866 0-7 2.03-7 7v5h10M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Z"></svg:path>`,
})
export class GrommetIconsUserSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUserWorkerIcon],svg[grommet-icons-user-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M3 6h18zm7-4v2m4-2v2m2 8c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 4.5V23m0-10a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm-4-1a4 4 0 1 0 8 0"></svg:path>`,
})
export class GrommetIconsUserWorkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsValidateIcon],svg[grommet-icons-validate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M20 15c-1 1 1.25 3.75 0 5s-4-1-5 0s-1.5 3-3 3s-2-2-3-3s-3.75 1.25-5 0s1-4 0-5s-3-1.5-3-3s2-2 3-3s-1.25-3.75 0-5s4 1 5 0s1.5-3 3-3s2 2 3 3s3.75-1.25 5 0s-1 4 0 5s3 1.5 3 3s-2 2-3 3ZM7 12l3 3l7-7"></svg:path>`,
})
export class GrommetIconsValidateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVendIcon],svg[grommet-icons-vend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M3 2.002A1 1 0 0 1 3.993 1h16.014c.548 0 .993.44.993 1.002V23H3zM15 1v22M3 16h12m-7 1h2m-3-1v-4m0-3V5m4 11v-4m0-3V5m6 7h1m-1-3h2m-2 11h2M3 9h12"></svg:path>`,
})
export class GrommetIconsVendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVenmoIcon],svg[grommet-icons-venmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#grommetIconsVenmo0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.628-5.372 12-12 12c-6.627 0-12-5.372-12-12C0 5.373 5.373 0 12 0c6.628 0 12 5.373 12 12m-5.982-3.571c0-1-.21-1.79-.677-2.558l-4.035.814c.256.535.42 1.185.42 2.14c0 1.744-1.237 4.303-2.24 5.93L10.413 6.15l-4.431.42l2.03 12.094h5.06c2.216-2.907 4.946-7.047 4.946-10.234Z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="grommetIconsVenmo0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GrommetIconsVenmoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVideoIcon],svg[grommet-icons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m15 9l8-4v14l-8-4zM1 5h14v14H1z"></svg:path>`,
})
export class GrommetIconsVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsViewIcon],svg[grommet-icons-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 21c-5 0-11-5-11-9s6-9 11-9s11 5 11 9s-6 9-11 9Zm0-14a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z"></svg:path>`,
})
export class GrommetIconsViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVimeoIcon],svg[grommet-icons-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.988 6.802q-.16 3.504-4.894 9.595q-4.895 6.36-8.282 6.36q-2.1 0-3.55-3.873q-.968-3.552-1.938-7.103q-1.077-3.873-2.312-3.874q-.27.001-1.884 1.13L0 7.583q1.776-1.56 3.502-3.123q2.371-2.046 3.556-2.155q2.802-.27 3.449 3.83q.7 4.423.97 5.5q.81 3.669 1.779 3.668q.753 0 2.262-2.382q1.508-2.378 1.616-3.623q.216-2.054-1.616-2.055q-.862 0-1.776.393q1.77-5.792 6.76-5.632q3.7.11 3.486 4.798"></svg:path>`,
})
export class GrommetIconsVimeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVirtualMachineIcon],svg[grommet-icons-virtual-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 23h13V10H1zm9-4h13V6H10zm-5-5h13V1H5z"></svg:path>`,
})
export class GrommetIconsVirtualMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVirtualStorageIcon],svg[grommet-icons-virtual-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 22c4.97 0 9-2.239 9-5s-4.03-5-9-5s-9 2.239-9 5s4.03 5 9 5Zm0-4.5c4.97 0 9-2.239 9-5s-4.03-5-9-5s-9 2.239-9 5s4.03 5 9 5Zm0-5.5c4.97 0 9-2.239 9-5s-4.03-5-9-5s-9 2.239-9 5s4.03 5 9 5Z"></svg:path>`,
})
export class GrommetIconsVirtualStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVisaIcon],svg[grommet-icons-visa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.756 6.342C4.344 5.56 2.733 4.93.931 4.494l.059-.35h7.407c.997.036 1.804.355 2.082 1.422l1.61 7.743v.001l.48 2.335l4.497-11.491h4.865L14.7 20.974l-4.86.005z"></svg:path>`,
})
export class GrommetIconsVisaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVmMaintenanceIcon],svg[grommet-icons-vm-maintenance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M19 10V2H7v12h7V7H2v12h8m4 4l6-6m1-3a2 2 0 1 0 2 2"></svg:path>`,
})
export class GrommetIconsVmMaintenanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVmwareIcon],svg[grommet-icons-vmware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.574 0c-.959 0-1.728.754-1.728 1.68v5.744H1.728C.77 7.424 0 8.18 0 9.104v12.438c0 .926.77 1.68 1.728 1.68H14.58c.96 0 1.753-.754 1.753-1.68v-2.045h5.939c.958 0 1.728-.757 1.728-1.68V5.38c0-.924-.77-1.655-1.728-1.655h-2.118V1.68c0-.926-.771-1.68-1.728-1.68zm0 .95h12.852c.42 0 .755.323.755.73v2.044H9.42c-.957 0-1.753.731-1.753 1.655v2.045H4.82V1.68c0-.407.332-.73.755-.73m3.846 3.7h9.76v9.443a.76.76 0 0 1-.754.755h-2.093V9.103c0-.923-.794-1.68-1.753-1.68h-5.94V5.38c0-.406.36-.73.779-.73m10.734 0h2.118c.42 0 .754.323.754.73v12.437c0 .406-.334.73-.754.73h-5.94v-2.75h2.094c.957 0 1.728-.778 1.728-1.704zM1.728 8.372h2.118v5.72c0 .926.769 1.704 1.728 1.704h2.093v2.02c0 .923.796 1.68 1.753 1.68h5.939v2.045c0 .406-.356.73-.779.73H1.728a.735.735 0 0 1-.754-.73V9.103c0-.405.329-.73.754-.73m3.091 0h2.848v6.475H5.574a.757.757 0 0 1-.755-.755zm3.822 0h5.94c.422 0 .778.325.778.73v5.745H8.641zm0 7.424h6.718v2.75h-5.94c-.419 0-.778-.324-.778-.73z"></svg:path>`,
})
export class GrommetIconsVmwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVolumeIcon],svg[grommet-icons-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M15 16a4 4 0 0 0 0-8m0 12c5 0 8-3.589 8-8s-3.589-8-8-8M1 12V8h5l6-5v18l-6-5H1v-4"></svg:path>`,
})
export class GrommetIconsVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVolumeControlIcon],svg[grommet-icons-volume-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12ZM8 8l3 3m1 11a9.99 9.99 0 0 0 8.307-4.43A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12"></svg:path>`,
})
export class GrommetIconsVolumeControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVolumeLowIcon],svg[grommet-icons-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 8v8h5.099L12 21V3L6 8zm14 8a4 4 0 1 0 0-8"></svg:path>`,
})
export class GrommetIconsVolumeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVolumeMuteIcon],svg[grommet-icons-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 8v8h5.099L12 21V3L6 8zm14 1l6 6m0-6l-6 6"></svg:path>`,
})
export class GrommetIconsVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVulnerabilityIcon],svg[grommet-icons-vulnerability-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 0v24zM0 12h24zm17 0c0-2.757-2.243-5-5-5s-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5Zm-5 9c-4.962 0-9-4.037-9-9s4.038-9 9-9s9 4.037 9 9s-4.038 9-9 9Z"></svg:path>`,
})
export class GrommetIconsVulnerabilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWaypointIcon],svg[grommet-icons-waypoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m3 11l8 2l2 8l8-18z"></svg:path>`,
})
export class GrommetIconsWaypointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWebcamIcon],svg[grommet-icons-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M20 22H4"></svg:path><svg:path d="M15.5 18v3m-7.5.5V18"></svg:path><svg:path d="M12 19a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" clip-rule="evenodd"></svg:path><svg:path d="M12 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" clip-rule="evenodd"></svg:path><svg:path d="M12 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" clip-rule="evenodd"></svg:path><svg:path d="M12 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GrommetIconsWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWechatIcon],svg[grommet-icons-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.502 19.228C23.026 18.123 24 16.49 24 14.674c0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024c.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914l.139.045a.24.24 0 0 0 .241-.241l-.039-.176l-.326-1.215l-.025-.154a.48.48 0 0 1 .202-.392M8.675 2C3.884 2 0 5.236 0 9.229c0 2.178 1.168 4.139 2.997 5.464a.57.57 0 0 1 .243.471l-.03.184l-.391 1.458l-.047.211c0 .16.13.29.289.29l.168-.054l1.899-1.097a.9.9 0 0 1 .46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012a5.6 5.6 0 0 1-.291-1.771c0-3.641 3.542-6.593 7.911-6.593l.471.012C16.589 4.641 13.002 2 8.675 2m5.686 11.711a.964.964 0 1 1 .001-1.927a.964.964 0 0 1-.001 1.927m4.82 0a.964.964 0 1 1 0-1.928a.964.964 0 0 1 0 1.928M5.783 8.072a1.156 1.156 0 1 1 0-2.312a1.156 1.156 0 0 1 0 2.312m5.783 0a1.156 1.156 0 1 1 0-2.312a1.156 1.156 0 0 1 0 2.312" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsWechatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWhatsappIcon],svg[grommet-icons-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#grommetIconsWhatsapp0)"><svg:path fill="currentColor" d="m.057 24l1.687-6.163a11.87 11.87 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488a11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592c5.448 0 9.886-4.434 9.889-9.885c.002-5.462-4.415-9.89-9.881-9.892c-5.452 0-9.887 4.434-9.89 9.884c0 2.225.652 3.891 1.747 5.634l-1 3.648zm11.387-5.464c-.074-.124-.272-.198-.57-.347s-1.758-.868-2.031-.967c-.272-.099-.47-.149-.67.149c-.197.297-.767.967-.94 1.165s-.347.223-.644.074s-1.255-.462-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.297-.347.446-.521c.15-.172.2-.296.3-.495c.099-.198.05-.372-.025-.521c-.075-.148-.67-1.611-.916-2.206c-.242-.579-.487-.501-.67-.51l-.57-.01c-.197 0-.52.074-.791.372c-.272.298-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074s2.095 3.2 5.076 4.487c.709.306 1.263.489 1.694.626c.712.226 1.36.194 1.872.118c.57-.085 1.758-.719 2.006-1.413s.248-1.29.173-1.414"></svg:path></svg:g><svg:defs><svg:clippath id="grommetIconsWhatsapp0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GrommetIconsWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWheelchairIcon],svg[grommet-icons-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v9h7l2 6h2m-6-9H9a6 6 0 1 0 6 6M11 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class GrommetIconsWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWheelchairActiveIcon],svg[grommet-icons-wheelchair-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 6l3-3l7 3v2l-3 3M9 22a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-5l5 3l-2 6m2-17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6 6l4-4m-6 4l4-4"></svg:path>`,
})
export class GrommetIconsWheelchairActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWifiIcon],svg[grommet-icons-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0"></svg:path>`,
})
export class GrommetIconsWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWifiLowIcon],svg[grommet-icons-wifi-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"><svg:path d="M12 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-4.243-6.243a6 6 0 0 1 8.486 0"></svg:path><svg:path stroke-opacity=".2" d="M4.929 10.929c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0" opacity=".8"></svg:path></svg:g>`,
})
export class GrommetIconsWifiLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWifiMediumIcon],svg[grommet-icons-wifi-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M12 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0"></svg:path><svg:path stroke-opacity=".2" d="M2.1 8.1c5.468-5.467 14.332-5.467 19.8 0" opacity=".8"></svg:path></svg:g>`,
})
export class GrommetIconsWifiMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWifiNoneIcon],svg[grommet-icons-wifi-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="18" r="2"></svg:circle><svg:path stroke-opacity=".2" d="M7.757 13.757a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0" opacity=".8"></svg:path></svg:g>`,
})
export class GrommetIconsWifiNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWindowsIcon],svg[grommet-icons-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.923 0L10.959 1.893v9.588l12.964-.102zM0 3.398l.009 8.155l9.773-.055l-.004-9.432zm.008 17.283l9.773 1.344l-.008-9.44l-9.766-.063zm10.951 1.49L23.923 24l.004-11.326l-12.986-.022z"></svg:path>`,
})
export class GrommetIconsWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWindowsLegacyIcon],svg[grommet-icons-windows-legacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.613 10.096l.282-.985q1-3.452 1.996-6.904c.026-.09.054-.164.157-.205c1.15-.461 2.327-.825 3.565-.959c1.666-.18 3.195.21 4.607 1.094c.184.115.362.24.55.347c.12.069.136.142.098.272Q13.04 5.601 12.22 8.45c-.192.661-.388 1.322-.574 1.986c-.04.148-.075.173-.211.08c-.814-.553-1.672-1.017-2.633-1.263c-1.212-.312-2.423-.25-3.632.015c-.862.19-1.692.474-2.557.828m14.664 2.929c-1.529.01-2.878-.526-4.134-1.351c-.355-.234-.354-.232-.238-.635l2.134-7.376c.07-.241.019-.285.29-.104c.895.6 1.839 1.094 2.908 1.31c1.128.228 2.248.15 3.362-.099c.7-.157 1.38-.377 2.048-.635c.096-.036.195-.098.294-.007c.097.09.052.19.022.293q-1.07 3.697-2.134 7.397c-.033.115-.093.171-.2.214c-1.162.465-2.351.831-3.604.95c-.248.025-.498.03-.748.043m4.1.327l-.442 1.533c-.602 2.08-1.206 4.162-1.801 6.245a.44.44 0 0 1-.298.32c-1.026.395-2.069.72-3.163.874q-2.538.358-4.73-.963c-.242-.146-.475-.306-.72-.45c-.12-.07-.13-.144-.093-.272c.523-1.796 1.04-3.594 1.56-5.392l.635-2.194c.067-.23.068-.23.28-.09c.76.501 1.551.936 2.434 1.186c1.273.36 2.547.3 3.822.018c.849-.187 1.668-.472 2.516-.815m-10.198-1.305l-.366 1.261c-.623 2.156-1.249 4.312-1.866 6.47c-.054.185-.103.19-.253.088c-.857-.585-1.764-1.065-2.787-1.298c-1.157-.264-2.309-.193-3.458.059c-.72.157-1.418.384-2.106.649c-.09.034-.183.085-.277.008c-.105-.086-.06-.191-.03-.291l2.132-7.377a.28.28 0 0 1 .185-.203c1.18-.475 2.389-.844 3.663-.962c1.571-.144 3.026.212 4.372 1.029q.344.211.684.43c.058.038.138.07.107.137"></svg:path>`,
})
export class GrommetIconsWindowsLegacyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWordpressIcon],svg[grommet-icons-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 12a12 12 0 0 0 6.763 10.799L1.039 7.116A12 12 0 0 0 0 11.999m20.1-.605c0-1.483-.533-2.51-.99-3.309c-.607-.99-1.178-1.826-1.178-2.815c0-1.103.836-2.13 2.015-2.13c.053 0 .104.007.155.01A11.95 11.95 0 0 0 12 0C7.807 0 4.12 2.151 1.973 5.408c.282.01.548.014.773.014c1.255 0 3.198-.152 3.198-.152c.646-.038.723.913.076.989c0 0-.65.076-1.373.114l4.37 12.998l2.626-7.876l-1.869-5.121a22 22 0 0 1-1.26-.115c-.646-.038-.57-1.027.077-.989c0 0 1.982.153 3.16.153c1.256 0 3.199-.153 3.199-.153c.647-.038.723.913.076.989c0 0-.65.076-1.373.114l4.337 12.899l1.197-3.999c.518-1.66.913-2.852.913-3.879m-7.89 1.655L8.61 23.51a12 12 0 0 0 7.374-.192a1 1 0 0 1-.085-.165zm10.32-6.807q.078.573.08 1.234c0 1.217-.228 2.586-.912 4.298l-3.666 10.597A11.99 11.99 0 0 0 24 12c0-2.086-.533-4.047-1.47-5.757"></svg:path>`,
})
export class GrommetIconsWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWorkshopIcon],svg[grommet-icons-workshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4zM6.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z"></svg:path>`,
})
export class GrommetIconsWorkshopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsXIcon],svg[grommet-icons-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.058 1l9.267 12.39L0 23.462h2.099l8.163-8.82l6.596 8.82H24l-9.788-13.087L22.892 1h-2.1l-7.517 8.122L7.2 1zm3.087 1.546h3.28l14.488 19.37h-3.28L3.145 2.547Z"></svg:path>`,
})
export class GrommetIconsXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsXingIcon],svg[grommet-icons-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#grommetIconsXing0)"><svg:path d="M3.86 4.74c-.209 0-.384.074-.472.217c-.092.147-.078.338.02.53l2.34 4.052q.006.01 0 .02l-3.678 6.49c-.096.19-.091.383 0 .53a.51.51 0 0 0 .453.237h3.461c.517 0 .767-.35.944-.669l3.737-6.608l-2.38-4.15c-.172-.306-.433-.649-.963-.649zM18.401 0c-.517 0-.74.326-.927.66c0 0-7.456 13.224-7.702 13.658l4.918 9.023c.172.307.437.659.967.659h3.457c.209 0 .372-.078.46-.221c.092-.148.09-.343-.007-.535l-4.88-8.915a.02.02 0 0 1 0-.023L22.351.756c.096-.192.098-.387.007-.535C22.27.08 22.106 0 21.898 0H18.4Z"></svg:path></svg:g><svg:defs><svg:clippath id="grommetIconsXing0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GrommetIconsXingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsYogaIcon],svg[grommet-icons-yoga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 11l-1 3l1 3h-1.5L9 14l.5-4.5zm1-9L9 6v8l1 3H6l-3 5m17.5 0l-5-3.5L12 17l-1-3l1-3l3.5 2v5.5M14 8.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-3 2L10 17v-3.5z"></svg:path>`,
})
export class GrommetIconsYogaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsYoutubeIcon],svg[grommet-icons-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.522 15.553V8.81l6.484 3.383zM23.76 7.641s-.235-1.654-.954-2.382c-.913-.956-1.936-.96-2.405-1.016C17.043 4 12.005 4 12.005 4h-.01s-5.038 0-8.396.243c-.47.055-1.492.06-2.406 1.016C.474 5.987.24 7.641.24 7.641S0 9.584 0 11.525v1.822c0 1.942.24 3.884.24 3.884s.234 1.653.953 2.382c.914.956 2.113.926 2.647 1.026c1.92.184 8.16.241 8.16.241s5.043-.007 8.401-.25c.47-.056 1.492-.061 2.405-1.017c.72-.729.954-2.382.954-2.382s.24-1.942.24-3.885v-1.82c0-1.942-.24-3.885-.24-3.885"></svg:path>`,
})
export class GrommetIconsYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsZoomIcon],svg[grommet-icons-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M0 8a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"></svg:path><svg:path d="M5 9a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v4a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3zm10.5 2.752a2 2 0 0 1 .495-1.318l1.69-1.932c.457-.52 1.315-.198 1.315.494v6.008c0 .693-.858 1.015-1.314.494l-1.691-1.932a2 2 0 0 1-.495-1.317z"></svg:path></svg:g>`,
})
export class GrommetIconsZoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsZoomInIcon],svg[grommet-icons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m16 16l7 7zm-6 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-3V5m-5 5h10"></svg:path>`,
})
export class GrommetIconsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsZoomOutIcon],svg[grommet-icons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m16 16l7 7zm-6 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-5-8h10"></svg:path>`,
})
export class GrommetIconsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAdobeCreativeCloudIcon],svg[grommet-icons-adobe-creative-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 11.456v.79q-.013.064-.022.128c-.04.343-.067.69-.124 1.03a8.4 8.4 0 0 1-1.176 3.093a8.8 8.8 0 0 1-3.645 3.303a8.5 8.5 0 0 1-2.812.83l-.652.071H7.138c-.043-.008-.085-.02-.128-.023a7.2 7.2 0 0 1-2.448-.588C2.865 19.347 1.6 18.143.771 16.486a7.1 7.1 0 0 1-.7-2.33L0 13.563v-.767c.008-.043.02-.085.023-.128a7 7 0 0 1 .461-2.139C1.2 8.68 2.45 7.31 4.222 6.42a7.3 7.3 0 0 1 2.928-.756a8 8 0 0 1 1.503.069a.2.2 0 0 0 .142-.046a8.9 8.9 0 0 1 2.457-1.781a8.6 8.6 0 0 1 2.826-.833q.35-.039.7-.073h.72q.07.012.14.021c.357.042.715.068 1.068.127a8.5 8.5 0 0 1 3.073 1.166a8.8 8.8 0 0 1 3.319 3.652c.438.883.719 1.835.83 2.814zM10.58 6.343c.015.02.019.028.025.031q.741.366 1.41.853c.028.02.098.012.132-.01c1.222-.774 2.547-1.041 3.97-.789c1.395.247 2.53.944 3.397 2.057c.982 1.26 1.357 2.684 1.085 4.27c-.181 1.061-.607 2.014-1.33 2.812c-1.32 1.456-2.972 2.057-4.917 1.803a5.2 5.2 0 0 1-3.086-1.538c-1.098-1.11-2.204-2.211-3.305-3.318c-.147-.147-.31-.265-.521-.291a.83.83 0 0 0-.864.47c-.142.296-.124.63.185.934c1.227 1.205 2.444 2.421 3.67 3.627q.315.313.674.573c.896.65 1.906 1.01 3 1.155a7.2 7.2 0 0 0 2.555-.1a7.08 7.08 0 0 0 4-2.455a7.03 7.03 0 0 0 1.576-3.609a7 7 0 0 0-.065-2.32c-.244-1.251-.773-2.37-1.62-3.322c-1.618-1.816-3.653-2.627-6.074-2.446a6.75 6.75 0 0 0-2.641.777a7 7 0 0 0-1.255.836ZM9.989 19.02l-.1-.093c-.501-.474-1.006-.945-1.502-1.425a.4.4 0 0 0-.32-.135c-.502.012-1.005.015-1.5-.097c-2.461-.557-3.89-3.233-2.983-5.587c.715-1.857 2.696-2.988 4.649-2.639c.875.156 1.644.527 2.275 1.177c.769.794 1.56 1.566 2.338 2.352c.177.179.38.26.626.225c.316-.045.569-.196.683-.507a.75.75 0 0 0-.173-.83c-.816-.826-1.613-1.673-2.462-2.465c-1.647-1.536-3.588-1.992-5.736-1.34c-2.888.878-4.579 3.86-3.919 6.804a5.816 5.816 0 0 0 5.691 4.566h2.299c.038 0 .076-.003.134-.006"></svg:path>`,
})
export class GrommetIconsAdobeCreativeCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
