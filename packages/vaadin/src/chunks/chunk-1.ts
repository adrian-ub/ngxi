import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinRocketIcon],svg[vaadin-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0s-3.5-.4-6.7 2.8C7.7 4.3 6.4 6.3 5.4 8.1l-2.5-.6l-1.6 1.6l2.8 1.4c-.3.6-.4 1-.4 1l.8.8s.4-.2 1-.4l1.4 2.8l1.6-1.6l-.5-2.5c1.7-1 3.8-2.3 5.3-3.8C16.4 3.6 16 0 16 0m-3.2 4.8c-.4.4-1.1.4-1.6 0c-.4-.4-.4-1.1 0-1.6c.4-.4 1.1-.4 1.6 0c.4.4.4 1.1 0 1.6"></svg:path><svg:path fill="currentColor" d="M4 14.2c-.8.8-2.6.4-2.6.4s-.4-1.8.4-2.6s1.5-.9 1.5-.9s-1.3-.3-2.1.6c-1.6 1.6-1 4.2-1 4.2s2.6.6 4.2-1c.9-.9.6-2.2.6-2.2s-.2.7-1 1.5"></svg:path>`,
})
export class VaadinRocketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRotateLeftIcon],svg[vaadin-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C5 0 2.4 1.6 1.1 4.1L0 3v4h4L2.5 5.5C3.5 3.5 5.6 2 8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-.8-4.5-2.1L2 13.2C3.4 14.9 5.6 16 8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8"></svg:path>`,
})
export class VaadinRotateLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRotateRightIcon],svg[vaadin-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7V3l-1.1 1.1C13.6 1.6 11 0 8 0C3.6 0 0 3.6 0 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3C11.4 13.2 9.8 14 8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5L12 7z"></svg:path>`,
})
export class VaadinRotateRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRssIcon],svg[vaadin-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 13.8a2.2 2.2 0 1 1-4.4 0a2.2 2.2 0 0 1 4.4 0"></svg:path><svg:path fill="currentColor" d="M10.6 16H7.5c0-4.1-3.4-7.5-7.5-7.5V5.4c5.9 0 10.6 4.7 10.6 10.6"></svg:path><svg:path fill="currentColor" d="M12.8 16C12.8 8.9 7.1 3.2 0 3.2V0c8.8 0 16 7.2 16 16z"></svg:path>`,
})
export class VaadinRssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinRssSquareIcon],svg[vaadin-rss-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm3.6 14c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6S4.6 14 3.6 14m4 0c0-3.1-2.5-5.6-5.6-5.6V6c4.4 0 8 3.6 8 8zm4 0c0-5.3-4.3-9.6-9.6-9.6V2c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class VaadinRssSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSafeIcon],svg[vaadin-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v16h3v-1h8v1h3V0zm13 10h-1V5h1zm0-7h-1V2H3v11h10v-1h1v2H2V1h12zM8.5 7.5c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"></svg:path><svg:path fill="currentColor" d="M7.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinSafeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSafeLockIcon],svg[vaadin-safe-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.13 14.25l-.37-.9l-.92.38l.37.9c-.659.23-1.419.363-2.21.363s-1.551-.133-2.259-.378l.419-.885l-.92-.38l-.37.9a7.06 7.06 0 0 1-3.102-3.08l.882-.41l-.38-.93l-.9.37c-.23-.659-.363-1.419-.363-2.21s.133-1.551.378-2.259l.885.419l.38-.92l-.9-.37a7.05 7.05 0 0 1 3.08-3.092l.41.882l.92-.38l-.37-.9c.659-.23 1.419-.363 2.21-.363s1.551.133 2.259.378l-.419.885l.92.38l.37-.9a7.06 7.06 0 0 1 3.102 3.08l-.882.41l.38.92l.9-.37c.23.659.363 1.419.363 2.21s-.133 1.551-.378 2.259l-.885-.419l-.38.92l.9.37a7.06 7.06 0 0 1-3.08 3.102z"></svg:path><svg:path fill="currentColor" d="M10.36 3.62L9.2 6.41A2 2 0 0 0 8.001 6h.279l1.15-2.77A4.8 4.8 0 0 0 8.003 3h-.071a5.06 5.06 0 1 0 0 10.12a5.06 5.06 0 0 0 2.454-9.486z"></svg:path>`,
})
export class VaadinSafeLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinScaleIcon],svg[vaadin-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.81 10l-2.5-5H14a.5.5 0 0 0 0-1h-.79a6.04 6.04 0 0 0-4.198-1.95L9 2a1 1 0 0 0-2 0v.05a6.17 6.17 0 0 0-4.247 1.947L2 4a.5.5 0 0 0 0 1h.69l-2.5 5H0c0 1.1 1.34 2 3 2s3-.9 3-2h-.19L3.26 4.91a.5.5 0 0 0 .159-.148A4.84 4.84 0 0 1 6.994 3.06L7 14H6v1H4v1h8v-1h-2v-1H9V3.06a4.7 4.7 0 0 1 3.524 1.693a.5.5 0 0 0 .193.186L10.19 10H10c0 1.1 1.34 2 3 2s3-.9 3-2zM5 10H1l2-3.94zm6 0l2-3.94L15 10z"></svg:path>`,
})
export class VaadinScaleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinScaleUnbalanceIcon],svg[vaadin-scale-unbalance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.81 9l-2.47-4.93l.83-.15a.509.509 0 1 0-.183-.999l-.777.14a5.96 5.96 0 0 0-4.236-1.178a.96.96 0 0 0-.967-.882h-.008a1 1 0 0 0-1 1v.2a6.33 6.33 0 0 0-4.066 2.697l-.754.153a.503.503 0 1 0 .092 1h.088l.35-.05l-2.52 5h-.19c0 1.1 1.34 2 3 2s3-.9 3-2h-.19l-2.56-5.12h.1a.51.51 0 0 0 .379-.297c.021-.093.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1V2.881a4.62 4.62 0 0 1 3.686 1.065l-.006-.005l-2.49 5.06h-.19c0 1.1 1.34 2 3 2s3-.9 3-2zM5 11H1l2-3.94zm6-2l2-3.94L15 9z"></svg:path>`,
})
export class VaadinScaleUnbalanceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinScatterChartIcon],svg[vaadin-scatter-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M5 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinScatterChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinScissorsIcon],svg[vaadin-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.1s-2.1-1.1-3.5-1c-.3 0-.5.1-.7.2L7.5 5.7L5.7 4.2c.1-.3.2-.6.3-1C6.1 1.4 4.6-.2 2.7 0C1.5.1.4 1 .1 2.2c-.3 1.3.2 2.5 1.2 3.2L4.6 8l-3.3 2.6c-1 .7-1.5 1.9-1.2 3.2c.3 1.2 1.4 2 2.6 2.2c1.9.2 3.4-1.4 3.2-3.2c0-.3-.1-.7-.3-1l1.8-1.5l4.3 3.4c.2.1.4.2.7.2c1.4.1 3.5-1 3.5-1L10.2 8zM2.8 4.6c-.9-.1-1.6-.9-1.5-1.8s.9-1.6 1.8-1.5s1.6.9 1.5 1.8c0 .9-.9 1.6-1.8 1.5m.3 10.1c-.9.1-1.7-.6-1.8-1.5s.6-1.7 1.5-1.8s1.7.6 1.8 1.5s-.6 1.7-1.5 1.8m9.3-11.5h.2c.4 0 .9.1 1.4.2L7.2 9.1L6.3 8zm1.6 9.4c-.5.2-1 .3-1.4.2h-.2l-4-3.2l1-.9z"></svg:path>`,
})
export class VaadinScissorsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinScrewdriverIcon],svg[vaadin-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 10.8l.9-.8l-.9-.9l5.7-5.7l1.2-.4L16 .8l-.7-.7l-2.3 1l-.5 1.2L6.9 8L6 7.1l-.8.9s.8.6-.1 1.5c-.5.5-1.3-.1-2.8 1.4L.2 13s-.6 1 .6 2.2s2.2.6 2.2.6l2.1-2.1c1.4-1.4.9-2.3 1.3-2.7c.9-.9 1.6-.2 1.6-.2m-3.1-.4l.7.7l-3.8 3.8l-.7-.7z"></svg:path>`,
})
export class VaadinScrewdriverIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSearchIcon],svg[vaadin-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.7 14.3l-4.2-4.2c-.2-.2-.5-.3-.8-.3c.8-1 1.3-2.4 1.3-3.8c0-3.3-2.7-6-6-6S0 2.7 0 6s2.7 6 6 6c1.4 0 2.8-.5 3.8-1.4c0 .3 0 .6.3.8l4.2 4.2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3M6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5s-2 4.5-4.5 4.5"></svg:path>`,
})
export class VaadinSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSearchMinusIcon],svg[vaadin-search-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.7 14.3l-4.2-4.2c-.2-.2-.5-.3-.8-.3c.8-1 1.3-2.4 1.3-3.8c0-3.3-2.7-6-6-6S0 2.7 0 6s2.7 6 6 6c1.4 0 2.8-.5 3.8-1.4c0 .3 0 .6.3.8l4.2 4.2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3M6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5s-2 4.5-4.5 4.5"></svg:path><svg:path fill="currentColor" d="M3 5h6v2H3z"></svg:path>`,
})
export class VaadinSearchMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSearchPlusIcon],svg[vaadin-search-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.7 14.3l-4.2-4.2c-.2-.2-.5-.3-.8-.3c.8-1 1.3-2.4 1.3-3.8c0-3.3-2.7-6-6-6S0 2.7 0 6s2.7 6 6 6c1.4 0 2.8-.5 3.8-1.4c0 .3 0 .6.3.8l4.2 4.2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3M6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5s-2 4.5-4.5 4.5"></svg:path><svg:path fill="currentColor" d="M7 3H5v2H3v2h2v2h2V7h2V5H7z"></svg:path>`,
})
export class VaadinSearchPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSelectIcon],svg[vaadin-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1m-3 5l-2-2h4z"></svg:path>`,
})
export class VaadinSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinServerIcon],svg[vaadin-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v3h10V5zm4 2H4V6h3zM3 4h10l-2-4H5zm0 8h10V9H3zm8-2h1v1h-1zm-2 0h1v1H9zm-6 6h10v-3H3zm1-2h3v1H4z"></svg:path>`,
})
export class VaadinServerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinShareIcon],svg[vaadin-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H4.9S0 3 0 8c0 3.9 3 8 3 8S1.3 9 4.8 9H10v3l6-6l-6-6z"></svg:path>`,
})
export class VaadinShareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinShareSquareIcon],svg[vaadin-share-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3H7.4S3 2.8 3 7.3C3 10.8 5 14 5 14s-.4-7 2.3-7H11v3l5-5l-5-5z"></svg:path><svg:path fill="currentColor" d="M14 9v6H1V2h9V1H0v15h15V8z"></svg:path>`,
})
export class VaadinShareSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinShieldIcon],svg[vaadin-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v7c0 5.6 7 9 7 9s7-3.4 7-9V0zm13 7c0 4.2-4.6 7.1-6 7.9V1h6z"></svg:path>`,
})
export class VaadinShieldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinShiftIcon],svg[vaadin-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm6 6v3H4V8H2l3-3l3 3z"></svg:path>`,
})
export class VaadinShiftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinShiftArrowIcon],svg[vaadin-shift-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2L1 9h4v5h6V9h4zm2 6v5H6V8H3.5L8 3.42L12.5 8z"></svg:path>`,
})
export class VaadinShiftArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinShopIcon],svg[vaadin-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15h16v1H0zM0 0v6c.005.732.401 1.37.991 1.715L1 14h9V9h3v5h2V7.72c.599-.35.995-.988 1-1.719V0zm4 2h2v4a1 1 0 0 1-2 0zM2 7a1 1 0 0 1-1-1V2h2v4a1 1 0 0 1-1 1m6 5H3V9h5zm1-6a1 1 0 0 1-2 0V2h2zm3 0a1 1 0 0 1-2 0V2h2zm3 0a1 1 0 0 1-2 0V2h2z"></svg:path>`,
})
export class VaadinShopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSignInIcon],svg[vaadin-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v2l1 1V2h7v12H8v-2l-1 1v2h9V1z"></svg:path><svg:path fill="currentColor" d="M10 8L5 4v2H0v4h5v2z"></svg:path>`,
})
export class VaadinSignInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSignInAltIcon],svg[vaadin-sign-in-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v16H0zm3 10h8v3l5-5l-5-5v3H3z"></svg:path>`,
})
export class VaadinSignInAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSignOutIcon],svg[vaadin-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4V1H0v14h9v-3H8v2H1V2h7v2z"></svg:path><svg:path fill="currentColor" d="m16 8l-5-4v2H6v4h5v2z"></svg:path>`,
})
export class VaadinSignOutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSignOutAltIcon],svg[vaadin-sign-out-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 0h2v16h-2zM8 6H0v4h8v3l5-5l-5-5z"></svg:path>`,
})
export class VaadinSignOutAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSignalIcon],svg[vaadin-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.9 13.2L8 14.3l1.1-1.1c-.3-.3-.7-.5-1.1-.5s-.9.2-1.1.5M8 4.6c2.7 0 5.1 1.1 6.9 2.8L16 6.3C14 4.3 11.1 3 8 3S2 4.3 0 6.3l1.1 1.1C2.9 5.7 5.3 4.6 8 4.6"></svg:path><svg:path fill="currentColor" d="m2.3 8.6l1.1 1.1C4.6 8.6 6.2 7.9 8 7.9s3.4.7 4.6 1.9l1.1-1.1C12.3 7.1 10.2 6.2 8 6.2s-4.3.9-5.7 2.4"></svg:path><svg:path fill="currentColor" d="M4.6 10.9L5.7 12c.6-.6 1.4-.9 2.3-.9s1.7.4 2.3.9l1.1-1.1C10.6 10 9.3 9.5 8 9.5s-2.6.5-3.4 1.4"></svg:path>`,
})
export class VaadinSignalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSitemapIcon],svg[vaadin-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 12V7.5h-6V4H10V0H6v4h1.5v3.5h-6V12H0v4h4v-4H2.5V8.5h5V12H6v4h4v-4H8.5V8.5h5V12H12v4h4v-4z"></svg:path>`,
})
export class VaadinSitemapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSliderIcon],svg[vaadin-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6h-3.6c-.7-1.2-2-2-3.4-2s-2.8.8-3.4 2H0v4h5.6c.7 1.2 2 2 3.4 2s2.8-.8 3.4-2H16zM1 9V7h4.1c0 .3-.1.7-.1 1s.1.7.1 1zm8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path>`,
})
export class VaadinSliderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSlidersIcon],svg[vaadin-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h2v3H7zM6 4v3h1v9h2V7h1V4zM2 0h2v8H2zM1 9v3h1v4h2v-4h1V9zm11-9h2v10h-2zm-1 11v3h1v2h2v-2h1v-3z"></svg:path>`,
})
export class VaadinSlidersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSmileyOIcon],svg[vaadin-smiley-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7m0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l.9-.4c.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l.9.4c-.8 2-2.6 3.1-4.6 3.1M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinSmileyOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSortIcon],svg[vaadin-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H5l3-4zM5 9h6l-3 4z"></svg:path>`,
})
export class VaadinSortIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSoundDisableIcon],svg[vaadin-sound-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H0v6h4l5 4V1zm11.9.6l-.8-.7l-2.3 2.4l-2.4-2.4l-.8.7L12 8l-2.4 2.4l.8.7l2.4-2.4l2.3 2.4l.8-.7L13.5 8z"></svg:path>`,
})
export class VaadinSoundDisableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSparkLineIcon],svg[vaadin-spark-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a2 2 0 0 0-2 2v.16l-.81.25l-2.3-3.48l-1.73 4.32L6 3.44L3.7 8.22L2.06 6.91L0 8v1.08l1.94-1l2.11 1.7l1.56-3.22l1.23 6.19l2.27-5.68l1.68 2.52l1.55-.48A2 2 0 1 0 14.004 6zm0 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class VaadinSparkLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSpecialistIcon],svg[vaadin-specialist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.1 8c.2.6.3 1.1.3 1.1c.8 1.3 1.8 1.1 1.8 1.8c0 .3-.2.6-.5.7L8 13.4l2.3-1.7c-.3-.2-.5-.4-.5-.7c0-.8 1-.5 1.8-1.8c0 0 .2-.4.3-1.1c.3-1.1.6-3.1.5-4.1h-1.5c0-.3.1-.6.1-1h1.1c-.3-1.4-1-2-2.2-2.3C9.4.3 8.7 0 8 0S6.6.3 6.1.7C4.9 1 4.3 1.6 3.9 3H5c0 .4.1.7.2 1H3.6c-.1 1 .2 3 .5 4m7.1.5l-.3.3l-.5.6c-.4.5-.8.8-1.4.9l-.4.1c-.4.1-.9.1-1.4 0l-.4-.1c-.6-.2-1.1-.5-1.5-1.1l-.2-.4l-.3-.3l-.7-.5l3.1-.9c.5-.1 1-.2 1.5 0l3.2.9zM6 3c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2"></svg:path><svg:path fill="currentColor" d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2h-.1L8 14.6L4.5 12h-.1c-1.4.1-2.6-.2-3.9 2.2c-.2.4-.4 1.1-.5 1.8h16c-.1-.7-.3-1.4-.5-1.8"></svg:path>`,
})
export class VaadinSpecialistIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSpinnerIcon],svg[vaadin-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.9.2l-.2 1C12.7 2 15 4.7 15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-.2-1C2.6 1.1 0 4.3 0 8c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8"></svg:path>`,
})
export class VaadinSpinnerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSpinnerArcIcon],svg[vaadin-spinner-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7H0c0 4 3.6 8 8 8s8-3.6 8-8z"></svg:path>`,
})
export class VaadinSpinnerArcIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSpinnerThirdIcon],svg[vaadin-spinner-third-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.9 3.1C14.2 4.3 15 6.1 15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9.8-3.7 2.1-4.9l-.8-.8C.9 3.8 0 5.8 0 8c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-.9-4.2-2.3-5.7z"></svg:path>`,
})
export class VaadinSpinnerThirdIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSplineAreaChartIcon],svg[vaadin-spline-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M10 7C8 7 7.92 6 6 6C3.66 6 2 9 2 9v5h14V2c-2 0-3.86 5-6 5"></svg:path>`,
})
export class VaadinSplineAreaChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSplineChartIcon],svg[vaadin-spline-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M12 5c-.69 1-1.41 2-2 2l-.087.001c-.601 0-1.164-.16-1.65-.44a4.5 4.5 0 0 0-2.2-.562h-.067a5.83 5.83 0 0 0-3.991 1.993l-.006 2.347c.77-1.12 2.32-2.84 4-2.84h.048c.579 0 1.121.156 1.587.428a4.7 4.7 0 0 0 2.264.573l.106-.001c1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></svg:path>`,
})
export class VaadinSplineChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSplitIcon],svg[vaadin-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 11h6v5H0zm11-1V8l-.64.64a4.43 4.43 0 0 1-1.358-3.658L11.001 5V0h-6v5h2a4.43 4.43 0 0 1-1.358 3.639l-.642-.638v2h2l-.65-.65A5.43 5.43 0 0 0 8 4.982q-.016.224-.016.45c0 1.539.639 2.928 1.665 3.917l-.648.652h2zm-1 1h6v5h-6z"></svg:path>`,
})
export class VaadinSplitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSplitHIcon],svg[vaadin-split-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14h16V1zm1 3h6.5v10H1zm14 10H8.5V4H15zm0-11h-1V2h1z"></svg:path>`,
})
export class VaadinSplitHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSplitVIcon],svg[vaadin-split-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14h16V1zm14 1h1v1h-1zm1 2v4.5H1V4zM1 14V9.5h14V14z"></svg:path>`,
})
export class VaadinSplitVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSpoonIcon],svg[vaadin-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 4.8c0-1.8-.9-4.8-3-4.8s-3 3-3 4.8c0 1.5.8 2.8 2.2 3.1c-.5 1.6-.7 4.6-.7 4.6v2c0 .8.7 1.5 1.5 1.5S9 15.3 9 14.5v-2c0-.6-.2-3.2-.7-4.6c1.4-.3 2.2-1.6 2.2-3.1"></svg:path>`,
})
export class VaadinSpoonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSquareShadowIcon],svg[vaadin-square-shadow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2V0H0v14h2v2h14V2zm-1 11H1V1h12z"></svg:path>`,
})
export class VaadinSquareShadowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStarIcon],svg[vaadin-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.9 15.4L8 12.8l-4.9 2.6L4 10L0 6.1l5.5-.8l2.4-5l2.4 5l5.5.8L12 10z"></svg:path>`,
})
export class VaadinStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStarHalfLeftIcon],svg[vaadin-star-half-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.6 5.4l-5.5.8L4 10l-.9 5.5L8 12.9V.4z"></svg:path>`,
})
export class VaadinStarHalfLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStarHalfLeftOIcon],svg[vaadin-star-half-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9 6.2l-5.5-.8L8 .4l-2.4 5l-5.5.8L4 10l-.9 5.4L8 12.9l4.9 2.6L12 10zM8 11.8V2.7l1.8 3.6l4 .6l-2.9 2.8l.7 4z"></svg:path>`,
})
export class VaadinStarHalfLeftOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStarHalfRightIcon],svg[vaadin-star-half-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 5.4l5.5.8l-4 3.8l.9 5.5L8 12.9V.4z"></svg:path>`,
})
export class VaadinStarHalfRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStarHalfRightOIcon],svg[vaadin-star-half-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9 6.2l-5.5-.8L8 .4l-2.4 5l-5.5.8L4 10l-.9 5.4L8 12.9l4.9 2.6L12 10zM4.4 13.7l.7-4l-2.9-2.8l4-.6L8 2.7v9.1z"></svg:path>`,
})
export class VaadinStarHalfRightOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStarOIcon],svg[vaadin-star-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9 6.2l-5.5-.8L8 .4l-2.4 5l-5.5.8L4 10l-.9 5.4L8 12.9l4.9 2.6L12 10zM8 11.8l-3.6 1.9l.7-4l-2.9-2.8l4-.6L8 2.7l1.8 3.6l4 .6l-2.9 2.8l.7 4z"></svg:path>`,
})
export class VaadinStarOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStartCogIcon],svg[vaadin-start-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v6h1.7l.2.7l.2.6h.1l1.2-.6l1.8 1.8l-.6 1.2v.1l.6.2l.7.2v.2L16 7zm.5 10.5c-.2 0-.4.1-.5.2c-.3.2-.5.5-.5.8s.2.7.5.8c.1.1.3.2.5.2c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path><svg:path fill="currentColor" d="M9 12v-1l-1.1-.4c-.1-.3-.2-.6-.4-.9l.5-1l-.7-.7l-1 .5c-.3-.2-.6-.3-.9-.4L5 7H4l-.4 1.1c-.3.1-.6.2-.9.4l-1-.5l-.7.7l.5 1.1c-.2.3-.3.6-.4.9L0 11v1l1.1.4c.1.3.2.6.4.9l-.5 1l.7.7l1.1-.5c.3.2.6.3.9.4L4 16h1l.4-1.1c.3-.1.6-.2.9-.4l1 .5l.7-.7l-.5-1.1c.2-.3.3-.6.4-.9zm-4.5 1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class VaadinStartCogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStepBackwardIcon],svg[vaadin-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15V1L4 8zM2 1h2v14H2z"></svg:path>`,
})
export class VaadinStepBackwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStepForwardIcon],svg[vaadin-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1v14l10-7zm10 0h2v14h-2z"></svg:path>`,
})
export class VaadinStepForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStethoscopeIcon],svg[vaadin-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.7 15.2c.3.3 1 .8 1.8.8c2.7 0 3.3-2 3.4-3.6c.2-2.3.8-2.2 1.1-2.2c.7 0 .9.4.9 1.1c-.6.4-1 1-1 1.7c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2h-.2c-.2-.9-.7-1.8-1.8-1.8c-1.6 0-2 1.4-2.1 2.9C9.7 14.2 9 15 7.5 15c-.4 0-.8-.2-1-.4c-.6-.5-.5-2.3-.5-2.3c2 0 4-1.8 4.7-4.8l-.2-.1c.3-1.2.5-2.6.5-3.6c0-1.1-.3-1.9-1-2.5S8.5.5 7.9.5C7.7.2 7.4 0 7 0c-.5 0-1 .4-1 1s.4 1 1 1c.4 0 .7-.2.8-.5q.75 0 1.5.6c.75.6.7.9.7 1.7c0 .9-.2 2.2-.5 3.5l-.2-.1C9 8.3 8 10.8 6 10.8H5c-2 0-3-2.5-3.3-3.6l-.2.1C1.2 6 1 4.7 1 3.8c0-.8.2-1.3.7-1.7c.4-.4 1-.5 1.5-.6c.1.3.4.5.8.5c.6 0 1-.4 1-1s-.4-1-1-1c-.4 0-.7.2-.9.5c-.6 0-1.4.2-2.1.8S0 2.7 0 3.8c0 1 .2 2.4.5 3.7l-.2.1C1 10.5 3 12.3 5 12.3c0 0-.1 2.2.7 2.9M14 14c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.5 1-1 1"></svg:path>`,
})
export class VaadinStethoscopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStockIcon],svg[vaadin-stock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"></svg:path>`,
})
export class VaadinStockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStopIcon],svg[vaadin-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h14v14H1z"></svg:path>`,
})
export class VaadinStopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStopCogIcon],svg[vaadin-stop-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v7.2l.5-.5l1.2.6h.1l.2-.6l.3-.7h2.4l.2.7l.2.6h.1l1.2-.6l1.8 1.8l-.6 1.2v.1l.6.2l.7.2v2.4l-.7.2l-.6.2v.1l.6 1.2l-.4.7H16V0z"></svg:path><svg:path fill="currentColor" d="M5.5 11.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M7.9 12.4L9 12v-1l-1.1-.4c-.1-.3-.2-.6-.4-.9l.5-1l-.7-.7l-1 .5c-.3-.2-.6-.3-.9-.4L5 7H4l-.4 1.1c-.3.1-.6.2-.9.4l-1-.5l-.7.7l.5 1.1c-.2.3-.3.6-.4.9L0 11v1l1.1.4c.1.3.2.6.4.9l-.5 1l.7.7l1.1-.5c.3.2.6.3.9.4L4 16h1l.4-1.1c.3-.1.6-.2.9-.4l1 .5l.7-.7l-.5-1.1c.2-.2.3-.5.4-.8m-3.4 1.1c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class VaadinStopCogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStopwatchIcon],svg[vaadin-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.14V4.5h-1v3.64a1.001 1.001 0 0 0 .5 1.866a1 1 0 0 0 .505-1.863z"></svg:path><svg:path fill="currentColor" d="M8 2a7 7 0 1 0 0 14A7 7 0 0 0 8 2m0 12.5a5.5 5.5 0 1 1 0-11A5.5 5.5 0 0 1 13.5 9a5.51 5.51 0 0 1-5.499 5.5zM6 0h4v1.5H6z"></svg:path><svg:path fill="currentColor" d="m.005 4.438l2.713-2.939L3.82 2.516L1.107 5.455zm12.181-1.919l1.102-1.017l2.713 2.939l-1.102 1.017z"></svg:path>`,
})
export class VaadinStopwatchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStorageIcon],svg[vaadin-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4L7.94 0L0 4v1h1v11h2V7h10v9h2V5h1zM4 6V5h2v1zm3 0V5h2v1zm3 0V5h2v1z"></svg:path><svg:path fill="currentColor" d="M6 9H5V8H4v3h3V8H6zm0 4H5v-1H4v3h3v-3H6zm4 0H9v-1H8v3h3v-3h-1z"></svg:path>`,
})
export class VaadinStorageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinStrikethroughIcon],svg[vaadin-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7c-.5-.3-1-.5-1.4-.7c-2-.9-2.1-1.1-2-1.9s.4-1 .6-1.2c.9-.5 2.8-.1 3.5.2L12.3.6C11.9.4 8.6-.8 6.2.6c-.8.5-1.9 1.5-2.1 3.4c-.2 1.3.1 2.3.7 3H0v1h16V7zM7.7 9s.1 0 .1.1c2 .9 2.4 1.2 2.2 2.5c-.2.9-.5 1.1-.8 1.3c-1.1.6-3.3 0-4.4-.5L3.6 15c.3.1 2.3 1 4.5 1c.9 0 1.8-.2 2.6-.6c.9-.5 2-1.4 2.4-3.4c.2-1.3 0-2.3-.4-3.1h-5z"></svg:path>`,
})
export class VaadinStrikethroughIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSubscriptIcon],svg[vaadin-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15v1h-4v-1s3.3-1.6 2.6-3.2c-.5-1.1-2-.2-2-.2l-.5-.9s1.9-1.4 3.1-.2c2.4 2.3-1.4 4.5-1.4 4.5zM12 3H8.6L6 6L3.4 3H0l4.3 5L0 13h3.4L6 10l2.6 3H12L7.7 8z"></svg:path>`,
})
export class VaadinSubscriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSuitcaseIcon],svg[vaadin-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3V1H5v2H0v12h16V3zM4 14H3V4h1zm6-11H6V2h4zm3 11h-1V4h1z"></svg:path>`,
})
export class VaadinSuitcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSunDownIcon],svg[vaadin-sun-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H9V1H7v2H6l2 3zm4 10l-1.58-1.18l.78-1.82l-2-.23L11 7.8l-1.82.78L8 7L6.82 8.58L5 7.8l-.23 2l-1.97.2l.78 1.82L2 13H0v1h16v-1zM4 13a4.143 4.143 0 0 1 3.993-4A4.143 4.143 0 0 1 12 12.993z"></svg:path>`,
})
export class VaadinSunDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSunOIcon],svg[vaadin-sun-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l-2.2-1.6L14.9 4l-2.7-.2l-.2-2.7l-2.4 1.1L8 0L6.4 2.2L4 1.1l-.2 2.7l-2.7.2l1.1 2.4L0 8l2.2 1.6L1.1 12l2.7.2l.2 2.7l2.4-1.1L8 16l1.6-2.2l2.4 1.1l.2-2.7l2.7-.2l-1.1-2.4zm-8 5c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5"></svg:path>`,
})
export class VaadinSunOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSunRiseIcon],svg[vaadin-sun-rise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h1v2h2V4h1L8 1zm6.42 7.82L13.2 10l-2-.23L11 7.8l-1.82.78L8 7L6.82 8.58L5 7.8l-.23 2l-1.97.2l.78 1.82L2 13H0v1h16v-1h-2zM4 13a4.143 4.143 0 0 1 3.993-4A4.143 4.143 0 0 1 12 12.993z"></svg:path>`,
})
export class VaadinSunRiseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSuperscriptIcon],svg[vaadin-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v1h-4V5s3.3-1.6 2.6-3.2c-.5-1.1-2-.2-2-.2l-.5-.9S14-.7 15.2.5C17.6 2.8 13.8 5 13.8 5zm-4-2H8.6L6 6L3.4 3H0l4.3 5L0 13h3.4L6 10l2.6 3H12L7.7 8z"></svg:path>`,
})
export class VaadinSuperscriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinSwordIcon],svg[vaadin-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.8.5l-.1-.2l-.2-.1c-.1 0-2.5-.8-4.2.9L4.6 7.7c-.9-.6-1.7-1.2-1.8-1l-.4.3c-.2.2.9 1.7 1.8 2.7l-2.5 3.4c-.3-.3-.8-.3-1.1 0l-.3.3c-.3.3-.3.8 0 1.1l1 1c.3.3.8.3 1.1 0l.3-.3c.3-.3.3-.8 0-1.1l3.5-2.5c1 .9 2.5 2 2.7 1.8l.4-.4c.1-.1-.4-1-1.1-1.8l6.7-6.7c1.7-1.5.9-3.9.9-4m-8.1 10l-.8-.8l6.2-6.9L6.2 9l-.7-.7L12 1.8c1-1 2.3-.8 2.9-.7c.1.6.3 1.9-.7 2.8z"></svg:path>`,
})
export class VaadinSwordIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTabIcon],svg[vaadin-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm13 9h-1V8l-3 3V9H3V7h6V5l3 3V5h1z"></svg:path>`,
})
export class VaadinTabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTabAIcon],svg[vaadin-tab-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10H0V6h9V4l5 4l-5 4zm5-6h2v8h-2z"></svg:path>`,
})
export class VaadinTabAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTableIcon],svg[vaadin-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v15h16V1zm5 14H1v-2h4zm0-3H1v-2h4zm0-3H1V7h4zm0-3H1V4h4zm5 9H6v-2h4zm0-3H6v-2h4zm0-3H6V7h4zm0-3H6V4h4zm5 9h-4v-2h4zm0-3h-4v-2h4zm0-3h-4V7h4zm0-3h-4V4h4z"></svg:path>`,
})
export class VaadinTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTabletIcon],svg[vaadin-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm13 11H2V3h11zm2-4h-1V7h1z"></svg:path>`,
})
export class VaadinTabletIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTabsIcon],svg[vaadin-tabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4V2H0v12h16V4zm-4-1h3v1h-3zM6 3h3v1H6zm9 10H1V3h4v2h10z"></svg:path>`,
})
export class VaadinTabsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTagIcon],svg[vaadin-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1H1v7l7 7l7-7zM3.75 5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class VaadinTagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTagsIcon],svg[vaadin-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H7.5l7 7l-5.3 5.2l.8.8l6-6z"></svg:path><svg:path fill="currentColor" d="M6 2H0v6l7 7l6-6zM2.8 6c-.7 0-1.3-.6-1.3-1.2s.6-1.2 1.2-1.2S4 4.1 4 4.8S3.4 6 2.8 6"></svg:path>`,
})
export class VaadinTagsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTasksIcon],svg[vaadin-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h10v4H6zm0 6h10v4H6zm0 6h10v4H6zM3 1v2H1V1zm1-1H0v4h4zM3 13v2H1v-2zm1-1H0v4h4zm1.3-6.1l-.6-.8l-.9.9H0v4h4V7.2zM2.7 7l-.7.7l-.8-.7zM1 8.2l.9.8H1zM3 9h-.9l.9-.9z"></svg:path>`,
})
export class VaadinTasksIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTaxiIcon],svg[vaadin-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 6.1l-1.4-2.9c-.4-.7-1.1-1.2-2-1.2H11V.7c0-.4-.3-.7-.7-.7H5.7c-.4 0-.7.3-.7.7V2h-.7c-.8 0-1.6.5-1.9 1.2L1 6.1c-.6.1-1 .6-1 1.1v3.5c0 .6 0 1.1 1 1.2v2c0 .6.4 1.1 1 1.1h.9c.6 0 1.1-.5 1.1-1.1V12h8v1.9c0 .6.4 1.1 1 1.1h.9c.6 0 1.1-.5 1.1-1.1v-2c1-.1 1-.6 1-1.2V7.2c0-.5-.4-1-1-1.1M4 8.4c0 .3-.3.6-.6.6H1.6c-.3 0-.6-.3-.6-.6v-.8c0-.3.3-.6.6-.6h1.8c.3 0 .6.3.6.6zm6 2.6H6v-1h4zM2.1 6l1.2-2.4c.2-.4.6-.6 1-.6h7.4c.4 0 .8.2 1 .6L13.9 6zM15 8.4c0 .3-.3.6-.6.6h-1.8c-.3 0-.6-.3-.6-.6v-.8c0-.3.3-.6.6-.6h1.8c.3 0 .6.3.6.6z"></svg:path>`,
})
export class VaadinTaxiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTeethIcon],svg[vaadin-teeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.6 7.6c-.1.1-.5.4-1.6.4c1.1 0 1.5.3 1.6.4c.2-.2.6-.4 1.5-.4c-.9 0-1.3-.2-1.5-.4"></svg:path><svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m5.1 11.6c-1 0-1.4-.8-1.6-1.6c-.2.9-.6 2-1.8 2c-1.1 0-1.5-1.1-1.7-2c-.2 1-.6 2-1.7 2s-1.6-1.1-1.8-2c-.2.8-.6 1.6-1.6 1.6c-2 0-1.9-3-1.9-3S1.2 8 2.7 8C1.2 8 1 7.5 1 7.5s-.1-3 1.9-3c1 0 1.4.8 1.6 1.6c.2-.9.6-2 1.8-2C7.4 4 7.8 5.1 8 6c.2-1 .6-2 1.7-2s1.6 1.1 1.8 2c.2-.8.6-1.6 1.6-1.6c2 0 1.9 3 1.9 3s-.3.6-1.8.6c-1.2 0-1.6-.3-1.8-.4c-.2.2-.7.4-1.6.4c-1.2 0-1.6-.2-1.8-.4c-.1.1-.6.4-1.6.4c1 0 1.4.3 1.6.4c.2-.2.6-.4 1.8-.4c1 0 1.4.2 1.7.4c0-.1.5-.4 1.7-.4c1.5 0 1.8.6 1.8.6s.1 3-1.9 3"></svg:path>`,
})
export class VaadinTeethIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTerminalIcon],svg[vaadin-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h9v1H6zm-4.9 1h1.2L6 8L2.3 3H1l3.8 5z"></svg:path>`,
})
export class VaadinTerminalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTextHeightIcon],svg[vaadin-text-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h1l-1.5-3L13 3h1v10h-1l1.5 3l1.5-3h-1zM1 0v3h4v13h3V3h4V0z"></svg:path>`,
})
export class VaadinTextHeightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTextInputIcon],svg[vaadin-text-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h1v4H2z"></svg:path><svg:path fill="currentColor" d="M1 0C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h15V0zm12 15H1V1h12zm2 0h-1v-1h1zm0-2h-1V3h1zm0-11h-1V1h1z"></svg:path>`,
})
export class VaadinTextInputIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTextLabelIcon],svg[vaadin-text-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 4.9c-1.4 0-2.5.8-2.6.9l1.2 1.6s.7-.5 1.4-.5c1.4 0 1.5 1.2 1.5 1.6c-.4-.1-1.1-.3-2-.1c-1.4.3-2.8 2-2.1 3.9c.7 1.8 3.1 2.1 4.1.6v1h2V8.6c0-2.7-1.9-3.7-3.5-3.7m-1 6.5C11.4 9.5 13 9.5 14 9.6v1c0 1.2-2.3 2.3-2.5.8M6.9 14H9L5.8 2H3.1L0 14h2.1l1-4h2.7zM3.6 8l.8-3.2l.9 3.2z"></svg:path>`,
})
export class VaadinTextLabelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTextWidthIcon],svg[vaadin-text-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.5L12 13v1H3v-1l-3 1.5L3 16v-1h9v1zM0 0v3h6v9h3V3h6V0z"></svg:path>`,
})
export class VaadinTextWidthIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinThinSquareIcon],svg[vaadin-thin-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path>`,
})
export class VaadinThinSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinThumbsDownIcon],svg[vaadin-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 7.8s.5.5.4 1.6c0 1.5-1.6 1.6-1.6 1.6H12c-.2 0-.3.2-.3.4c.3.7.8 2.1.6 3.1c-.3 1.4-1.5 1.5-1.9 1.5c-.1 0-.2-.1-.2-.2l-1-2.8s0-.1-.1-.1l-2.6-2.8c-.1-.1-.2-.1-.3-.1H6V3h.2c.7 0 3.2-2 5.4-2s2.7.3 3.1 1s.1 1.3.1 1.3s.5.3.6 1s-.1 1.1-.1 1.1s.5.4.5 1.2c.1.9-.2 1.2-.2 1.2M0 11h5V3H0zm2.5-3.5c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"></svg:path>`,
})
export class VaadinThumbsDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinThumbsDownOIcon],svg[vaadin-thumbs-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 7.3c.1-.3.3-.7.2-1.2c0-.6-.3-1.1-.5-1.3c.1-.3.1-.6 0-1.1s-.4-.8-.6-1c.1-.3.1-.8-.3-1.4C14 .3 13.2 0 10.8 0C9.1 0 7.5.8 6.2 1.5c-.4.2-1 .5-1.2.5H0v9h5v-.9l2.7 2.7l1 2.8c.2.2.4.4.8.4h.1c.5 0 2-.1 2.4-1.9c.2-.9-.1-2.2-.5-3.1h2.3c.7-.1 2.1-.6 2.2-2.1c0-.7-.2-1.3-.4-1.6m-13.1.2c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1M13.8 10h-2.5c-.3 0-.5.1-.7.4c-.2.2-.2.5-.1.8c.5 1.2.7 2.2.6 2.8c-.2.9-.9 1.1-1.4 1.1l-1-2.7c0-.1-.1-.2-.2-.3L5.6 9.2c-.1-.1-.3-.2-.5-.2H5V3c.4 0 .8-.2 1.7-.6C7.8 1.8 9.4 1 10.8 1c2.5 0 2.7.4 2.9.7c.3.5.1.9.1.9l-.2.4l.4.3s.4.2.5.7c.1.4 0 .7 0 .7l-.3.3l.3.3s.4.3.4.9c0 .5-.2.7-.2.7l-.4.3l.4.4s.4.4.3 1.2c0 1.1-1.1 1.2-1.2 1.2"></svg:path>`,
})
export class VaadinThumbsDownOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinThumbsUpIcon],svg[vaadin-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 8.2s.5-.5.4-1.6C16 5.1 14.4 5 14.4 5H12c-.2 0-.3-.2-.3-.4c.3-.7.8-2.1.6-3.1C12 .1 10.8 0 10.4 0c-.1 0-.2.1-.2.2L9.2 3s0 .1-.1.1L6.5 5.9c-.1.1-.2.1-.3.1H6v7h.2c.7 0 3.2 2 5.4 2s2.7-.3 3.1-1s.1-1.3.1-1.3s.5-.3.6-1s-.1-1.1-.1-1.1s.5-.4.5-1.2c.1-.9-.2-1.2-.2-1.2M0 14h5V6H0zm2.5-3.5c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"></svg:path>`,
})
export class VaadinThumbsUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinThumbsUpOIcon],svg[vaadin-thumbs-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.1C16 5.6 14.6 5 13.8 5h-2.2c.4-1 .7-2.2.5-3.1C11.6.1 10.1 0 9.6 0h-.1c-.4 0-.6.2-.8.5l-1 2.8L5 6H0v9h5v-1c.2 0 .7.3 1.2.6c1.2.6 2.9 1.5 4.5 1.5c2.4 0 3.2-.3 3.8-1.3c.3-.6.3-1.1.3-1.4c.2-.2.5-.5.6-1s.1-.8 0-1.1c.2-.3.4-.7.5-1.3c0-.5-.1-.9-.2-1.2c.1-.4.3-.9.3-1.7M2.5 13.5c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m12.2-4.4s.2.2.2.7c0 .6-.4.9-.4.9l-.3.3l.2.3s.2.3 0 .7c-.1.4-.5.7-.5.7l-.3.3l.2.4s.2.4-.1.9c-.2.4-.4.7-2.9.7c-1.4 0-3-.8-4.1-1.4c-.8-.4-1.3-.6-1.7-.6V7h.1c.2 0 .4-.1.6-.2L8.5 4c.1-.1.1-.2.2-.3l1-2.7c.5 0 1.2.2 1.4 1.1c.1.6-.1 1.6-.6 2.8c-.1.3-.1.5.1.8c.1.2.4.3.7.3h2.5c.1 0 1.2.2 1.2 1.1c0 .8-.3 1.2-.3 1.2l-.3.4z"></svg:path>`,
})
export class VaadinThumbsUpOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTicketIcon],svg[vaadin-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H2c0 1.1-.9 2-2 2v6c1.1 0 2 .9 2 2h12c0-1.1.9-2 2-2V5c-1.1 0-2-.9-2-2m-1 9H3V4h10z"></svg:path><svg:path fill="currentColor" d="M4 5h8v6H4z"></svg:path>`,
})
export class VaadinTicketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTimeBackwardIcon],svg[vaadin-time-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4H7v5h4V8H8z"></svg:path><svg:path fill="currentColor" d="M8 0C5 0 2.4 1.6 1.1 4.1L0 3v4h4L2.5 5.5C3.5 3.5 5.6 2 8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-.8-4.5-2.1L2 13.2C3.4 14.9 5.6 16 8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8"></svg:path>`,
})
export class VaadinTimeBackwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTimeForwardIcon],svg[vaadin-time-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4H7v5h4V8H8z"></svg:path><svg:path fill="currentColor" d="M16 7V3l-1.1 1.1C13.6 1.6 11 0 8 0C3.6 0 0 3.6 0 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3C11.4 13.2 9.8 14 8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5L12 7z"></svg:path>`,
})
export class VaadinTimeForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTimerIcon],svg[vaadin-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.06 9.06c.271-.271.439-.646.439-1.06s-.168-.789-.439-1.06c-.59-.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72a1.497 1.497 0 0 0 2.13 0"></svg:path><svg:path fill="currentColor" d="M8 0v3h1V1.59c3.153.495 5.536 3.192 5.536 6.445a6.52 6.52 0 1 1-12.07-3.423L1.55 3.29A7.94 7.94 0 0 0 .017 8a8 8 0 1 0 8-8z"></svg:path>`,
})
export class VaadinTimerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinToolboxIcon],svg[vaadin-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8h6v2h4V8h6v6H0z"></svg:path><svg:path fill="currentColor" d="M7 7h2v2H7zm4-3V2H5v2H0v3h6V6h4v1h6V4zM6 4V3h4v1z"></svg:path>`,
})
export class VaadinToolboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinToolsIcon],svg[vaadin-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.3 8.2l-.9.9l.9.9l-1.2 1.2l4.3 4.3c.6.6 1.5.6 2.1 0s.6-1.5 0-2.1zm3.9 6.8c-.4 0-.8-.3-.8-.8c0-.4.3-.8.8-.8s.8.3.8.8s-.3.8-.8.8M3.6 8l.9-.6L6 5.7l.9.9l.9-.9l-.1-.1c.2-.5.3-1 .3-1.6c0-2.2-1.8-4-4-4c-.6 0-1.1.1-1.6.3l2.9 2.9l-2.1 2.1L.3 2.4C.1 2.9 0 3.4 0 4c0 2.1 1.6 3.7 3.6 4"></svg:path><svg:path fill="currentColor" d="m8 10.8l.9-.8l-.9-.9l5.7-5.7l1.2-.4L16 .8l-.7-.7l-2.3 1l-.5 1.2L6.9 8L6 7.1l-.8.9s.8.6-.1 1.5c-.5.5-1.3-.1-2.8 1.4L.2 13s-.6 1 .6 2.2s2.2.6 2.2.6l2.1-2.1c1.4-1.4.9-2.3 1.3-2.7c.9-.9 1.6-.2 1.6-.2m-3.1-.4l.7.7l-3.8 3.8l-.7-.7z"></svg:path>`,
})
export class VaadinToolsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinToothIcon],svg[vaadin-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1c-.1-1.3-1-2.1-1.6-2.2c-.6 0-1.4.9-1.6 2.2c0 .2-.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-.2-1.4.1-3.4.2-4c-.4-1.2-1.8-5.6-.5-7C3 .2 3.6 0 4.4 0c.6 0 1.3.1 2 .3c.6.1 1.1.2 1.6.2S9 .4 9.6.3c.7-.2 1.4-.3 2-.3c.8 0 1.4.2 1.8.7c1.3 1.4-.1 5.8-.5 7c.1.5.4 2.5.2 3.9c.1 0-.5 4.4-1.8 4.4M8 8.7c1.3.1 2.4 1.4 2.6 3.1c.1 1.2.5 2.4.7 2.9c.3-.6.7-2.1.9-3.3c.2-1.4-.2-3.7-.2-3.7v-.2c.7-2.1 1.4-5.3.8-6.1c-.3-.3-.7-.4-1.2-.4s-1.2.1-1.8.3c-.6.1-1.2.2-1.8.2s-1.2-.1-1.8-.2C5.6 1.1 4.9 1 4.4 1s-.9.1-1.1.4c-.7.7 0 4 .8 6.1v.2s-.4 2.3-.2 3.7c.2 1.2.6 2.7.9 3.3c.2-.6.6-1.7.7-2.9c.1-1.6 1.2-3 2.5-3.1"></svg:path>`,
})
export class VaadinToothIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTouchIcon],svg[vaadin-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.62 6a1.3 1.3 0 0 0-.629.002a1.54 1.54 0 0 0-.402-.843a1.42 1.42 0 0 0-1.008-.42l-.053.001h-.007c-.22 0-.43.044-.621.124a1.2 1.2 0 0 0-.29-.464a1.45 1.45 0 0 0-1.115-.399H8.5a2.5 2.5 0 1 0-3.506.486L5 7.151a2.2 2.2 0 0 0-1.432.581C3 8.351 3 9.311 3 10.511v.72a3.62 3.62 0 0 0 1.402 2.764l.358.356c1.24 1.27 2.38 1.65 5.02 1.65c2.88 0 4.22-1.61 4.22-5.06v-2.51c0-.77-.22-2.12-1.38-2.43zM13 8.35v2.59C13 14.31 11.71 15 9.78 15c-2.6 0-3.4-.39-4.3-1.33l-.36-.37A2.65 2.65 0 0 1 4 11.235V10.5a3.35 3.35 0 0 1 .298-2.09c.186-.132.431-.228.698-.24l.003.7v-.22l-.34 1.5a.186.186 0 1 0 .34.151l1-1.211a.2.2 0 0 0 0-.091V3.39l-.001-.039c0-.256.083-.492.223-.684a.51.51 0 0 1 .399-.157h-.001c.21 0 .38.17.38.38v3.88a.5.5 0 0 0 1 0V5.45A.47.47 0 0 1 8.501 5A.42.42 0 0 1 9 5.412l-.001.029V6.77a.5.5 0 0 0 1 0v-.64a.45.45 0 0 1 .502-.379a.43.43 0 0 1 .338.11c.1.129.16.294.16.473v.836a.5.5 0 0 0 .504.494a.51.51 0 0 0 .496-.39a.5.5 0 0 1 .16-.273a.27.27 0 0 1 .223 0A1.38 1.38 0 0 1 13 8.327l.001-.007z"></svg:path>`,
})
export class VaadinTouchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTrainIcon],svg[vaadin-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11.2V3.8c0-1-.8-1.8-1.8-1.8H9V1h2V0H5v1h2v1H4.8C3.8 2 3 2.8 3 3.8v7.4c0 1 .8 1.8 1.8 1.8H5l-.7 1H3v1h.7L3 16h2l.6-1h4.9l.6 1h2l-.7-1h.6v-1h-1.3l-.7-1h.2c1 0 1.8-.8 1.8-1.8M4 3.9c0-.5.4-.9.9-.9H11c.6 0 1 .4 1 .9V6c0 .6-.4 1-.9 1H4.9c-.5 0-.9-.4-.9-.9zM4 11c0-.6.4-1 1-1s1 .4 1 1s-.4 1-1 1s-1-.4-1-1m5.9 3H6.1l.6-1h2.6zm.1-3c0-.6.4-1 1-1s1 .4 1 1s-.4 1-1 1s-1-.4-1-1"></svg:path>`,
})
export class VaadinTrainIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTrashIcon],svg[vaadin-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3s0-.51-2-.8v-.7A1.53 1.53 0 0 0 9.47 0h-3A1.5 1.5 0 0 0 5 1.5v.7a3.7 3.7 0 0 0-2.007.806L2 3v1h12V3zM6 1.5a.51.51 0 0 1 .499-.5h3.002a.53.53 0 0 1 .529.499v.561a10 10 0 0 0-1.527-.059c-.553 0-2.063 0-2.503.07zM2 5v1h1v9c1.234.631 2.692 1 4.236 1h1.529a9.4 9.4 0 0 0 4.289-1.025L13 6h1V5zm4 8.92q-.51-.06-1-.17V7h1zM9 14H7V7h2zm2-.28c-.267.07-.606.136-.95.184L10 7h1z"></svg:path>`,
})
export class VaadinTrashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTreeTableIcon],svg[vaadin-tree-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10V8H4V7h1V5H2v2h1v6h3v-2H4v-1z"></svg:path><svg:path fill="currentColor" d="M0 0v16h16V0zm7 15H1V3h6zm4 0H8V3h3zm4 0h-3V3h3z"></svg:path>`,
})
export class VaadinTreeTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTrendindDownIcon],svg[vaadin-trendind-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h-4l1.29-1.29L9 8.41l-3 3l-6-6V2.59l6 6l3-3l5.71 5.7L15.99 10z"></svg:path>`,
})
export class VaadinTrendindDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTrendingUpIcon],svg[vaadin-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-4l1.29 1.29L9 7.59l-3-3l-6 6v2.82l6-6l3 3l5.71-5.7L15.99 6z"></svg:path>`,
})
export class VaadinTrendingUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTrophyIcon],svg[vaadin-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 8c4.2-.3 4.3-2.7 4.3-5h-3V0H3v3H0c0 2.3.1 4.7 4.3 5c.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8s0-2-3-2v-4c.6 0 1.8-.6 2.7-2M13 4h2c-.1 1.6-.4 2.7-2.7 2.9c.3-.8.6-1.7.7-2.9M1 4h2c.1 1.2.4 2.1.7 2.9C1.5 6.7 1.1 5.6 1 4m3.5 2.1C4 4.4 4 3 4 3V1h1v2s0 1.7.4 3.1C5.9 7.8 7 9 7 9s-1.8-.2-2.5-2.9"></svg:path>`,
})
export class VaadinTrophyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTruckIcon],svg[vaadin-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h10v7H6zm9 11a2 2 0 1 1-3.999.001A2 2 0 0 1 15 14m-2-3c1.3 0 2.4.8 2.8 2h.2v-2z"></svg:path><svg:path fill="currentColor" d="M5 5H1L0 9v4h1.2c.4-1.2 1.5-2 2.8-2s2.4.8 2.8 2h3.4c.4-1.2 1.5-2 2.8-2H5zM4 9H1l.8-3H4z"></svg:path><svg:path fill="currentColor" d="M6 14a2 2 0 1 1-3.999.001A2 2 0 0 1 6 14"></svg:path>`,
})
export class VaadinTruckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTwinColSelectIcon],svg[vaadin-twin-col-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm7 11H1V3h6zm8 0H9V3h6z"></svg:path><svg:path fill="currentColor" d="M10 4h4v1h-4zM2 4h4v1H2zm0 2h4v1H2zm0 2h4v1H2z"></svg:path>`,
})
export class VaadinTwinColSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTwitterIcon],svg[vaadin-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-.6.3-1.2.4-1.9.5c.7-.4 1.2-1 1.4-1.8c-.6.4-1.3.6-2.1.8c-.6-.6-1.5-1-2.4-1c-1.7 0-3.2 1.5-3.2 3.3c0 .3 0 .5.1.7c-2.7-.1-5.2-1.4-6.8-3.4c-.3.5-.4 1-.4 1.7c0 1.1.6 2.1 1.5 2.7c-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1c-.2 0-.4 0-.6-.1c.4 1.3 1.6 2.3 3.1 2.3c-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5c6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3"></svg:path>`,
})
export class VaadinTwitterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinTwitterSquareIcon],svg[vaadin-twitter-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm12.8 5.6v.3c0 3.3-2.5 7-7 7c-1.4 0-2.7-.4-3.8-1.1h.6c1.2 0 2.2-.4 3.1-1.1c-1.1 0-2-.7-2.3-1.7h.5c.2 0 .4 0 .6-.1c-1.1-.2-2-1.2-2-2.4c.3.2.7.3 1.1.3c-.7-.4-1.1-1.2-1.1-2q0-.75.3-1.2C4 5.1 5.9 6 7.9 6.1c0-.2-.1-.4-.1-.6C7.8 4.1 8.9 3 10.3 3c.7 0 1.3.3 1.8.8c.6-.1 1.1-.3 1.6-.6c-.2.6-.6 1.1-1.1 1.4c.5-.1 1-.2 1.4-.4c-.3.6-.7 1-1.2 1.4"></svg:path>`,
})
export class VaadinTwitterSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUmbrellaIcon],svg[vaadin-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.36.9L5.09.33a.54.54 0 0 0-.773-.259a.55.55 0 0 0-.316.762l.319.577C-1.88 4.9.42 12 .42 12h.06c.25-.12.8-1.64 2.05-2.25s2.78-.09 3-.21l.12-.06a11.8 11.8 0 0 1 1.58-1.97l3.37 7.07a2.36 2.36 0 0 0 1.334 1.335a1.76 1.76 0 0 0 1.237-.069l.359-.176c.263-.145.462-.38.558-.662a2.3 2.3 0 0 0 .183-.913c0-.401-.1-.778-.277-1.108a.63.63 0 0 0-.768-.286a.55.55 0 0 0-.244.752c.041.077.529 1.067-.101 1.337s-1.19-.73-1.19-.73L8.271 7a11.5 11.5 0 0 1 2.532.005l.068-.065c.25-.12.8-1.64 2.05-2.25s2.78-.09 3-.21h.06S12.001-1.93 5.361.9zm2 5.46a3.8 3.8 0 0 0-2.211 2.224c-.55-1.082-.909-2.375-1.007-3.74C4 2.6 4.75 1.92 4.75 1.92l.77-.32a5 5 0 0 1 2.816 1.195a8.7 8.7 0 0 1 2.233 3.265c-.339-.021-.752-.067-1.175-.067c-.724 0-1.417.134-2.054.379z"></svg:path>`,
})
export class VaadinUmbrellaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUnderlineIcon],svg[vaadin-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15h12v1H2zm9-15v8.4C11 9.9 9.9 11 8.4 11h-.8C6.1 11 5 9.9 5 8.4V0H2v8.4C2 11.5 4.5 14 7.6 14h.9c3.1 0 5.6-2.5 5.6-5.6V0z"></svg:path>`,
})
export class VaadinUnderlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUnlinkIcon],svg[vaadin-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0h1v4H8zm0 12h1v4H8zM7 9H3a1 1 0 0 1 0-2h4V5H3a3 3 0 1 0 0 6h4zm6-4H9v2h4a1 1 0 0 1 0 2H9v2h4a3 3 0 1 0 0-6M4.51 15.44L7 12H5.77l-2.08 2.88zm7.98 0L10 12h1.23l2.08 2.88zm0-14.45L10 4h1.23l2.08-2.66zm-7.98 0L7 4H5.77L3.69 1.34z"></svg:path>`,
})
export class VaadinUnlinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUnlockIcon],svg[vaadin-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V4.9C8 2.7 6.2 1 4.1 1h-.3C1.6 1 0 2.7 0 4.9V7h2V4.9C2 3.8 2.7 3 3.8 3h.3c1 0 1.9.8 1.9 1.9V8H5l.1 5S5 16 10 16s5-3 5-3V8zm3 6h-1v-1.8c-.6 0-1-.6-1-1.1c0-.6.4-1.1 1-1.1s1 .4 1 .9z"></svg:path>`,
})
export class VaadinUnlockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUploadIcon],svg[vaadin-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10v2H5v-2H0v6h16v-6zm-7 4H2v-2h2z"></svg:path><svg:path fill="currentColor" d="M13 5L8 0L3 5h3v6h4V5z"></svg:path>`,
})
export class VaadinUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUploadAltIcon],svg[vaadin-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14h16v2H0zM8 0L3 5h3v8h4V5h3z"></svg:path>`,
})
export class VaadinUploadAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUserIcon],svg[vaadin-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C2.4 0 5.1 7.3 5.1 7.3c.6 1 1.4.8 1.4 1.5c0 .6-.7.8-1.4.9C4 9.7 3 9.5 2 11.3c-.6 1.1-.9 4.7-.9 4.7h13.7s-.3-3.6-.8-4.7c-1-1.9-2-1.6-3.1-1.7c-.7-.1-1.4-.3-1.4-.9s.8-.4 1.4-1.5C10.9 7.3 13.6 0 8 0"></svg:path>`,
})
export class VaadinUserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUserCardIcon],svg[vaadin-user-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v10H1V3zm1-1H0v12h16z"></svg:path><svg:path fill="currentColor" d="M8 5h6v1H8zm0 2h6v1H8zm0 2h3v1H8zM5.4 7H5v-.1c.6-.2 1-.8 1-1.4C6 4.7 5.3 4 4.5 4S3 4.7 3 5.5c0 .7.4 1.2 1 1.4V7h-.4C2.7 7 2 7.7 2 8.6V11h5V8.6C7 7.7 6.3 7 5.4 7"></svg:path>`,
})
export class VaadinUserCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUserCheckIcon],svg[vaadin-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 14.4c-.8-.8-.8-2 0-2.8s2-.8 2.8 0l.6.6l1.9-2.1c-.7-.4-1.3-.4-2-.4c-.7-.1-1.4-.3-1.4-.9s.8-.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3c-5.5 0-2.8 7.3-2.8 7.3c.6 1 1.4.8 1.4 1.5s-.7.7-1.4.8C4 9.7 3 9.5 2 11.3c-.6 1.1-.9 4.7-.9 4.7h8zm5.3 1.6h2.1s-.1-.9-.2-2z"></svg:path><svg:path fill="currentColor" d="M11 16c-.3 0-.5-.1-.7-.3l-2-2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3l3.3-3.6c.4-.4 1-.4 1.4-.1c.4.4.4 1 .1 1.4l-4 4.3c-.3.3-.5.4-.8.4"></svg:path>`,
})
export class VaadinUserCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUserClockIcon],svg[vaadin-user-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h-3v-3h1v2h2z"></svg:path><svg:path fill="currentColor" d="M16 12.5C16 10 14 8 11.5 8c-.7 0-1.4.2-2 .5c.2-.3.8-.3 1.4-1.2c0 0 2.7-7.3-2.9-7.3S5.1 7.3 5.1 7.3c.6 1 1.4.8 1.4 1.5s-.7.7-1.4.8C4 9.7 3 9.5 2 11.3c-.6 1.1-.9 4.7-.9 4.7h10.4C9.6 16 8 14.4 8 12.5S9.6 9 11.5 9s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5h3.4v-.5c.6-.8 1.1-1.8 1.1-3"></svg:path>`,
})
export class VaadinUserClockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUserHeartIcon],svg[vaadin-user-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 16h.6v-.6zm-5.6-2.1c-.7-.7-1-1.8-.8-2.8S8.6 9.3 9.5 9c0-.1-.1-.2-.1-.2c0-.6.8-.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3c-5.5 0-2.8 7.3-2.8 7.3c.6 1 1.4.8 1.4 1.5s-.7.7-1.4.8C4 9.7 3 9.5 2 11.3c-.6 1.1-.9 4.7-.9 4.7h9.6z"></svg:path><svg:path fill="currentColor" d="M14.9 10.1c-.2-.1-.5-.1-.7-.1c-.7 0-1.3.6-1.7 1.1c-.4-.5-1-1.1-1.7-1.1c-.3 0-.5 0-.7.1c-1.2.4-1.4 2-.5 2.9l3 2.9l3-2.9c.8-.9.5-2.5-.7-2.9"></svg:path>`,
})
export class VaadinUserHeartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUserStarIcon],svg[vaadin-user-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.92 13.67l-1.61-1.53l-1.5-1.42l2-.29l2.25-.32l.29-.57h-.02a1 1 0 0 1-.979-.794c-.001-.617.799-.417 1.429-1.457c.08-.02 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c.63 1 1.44.85 1.43 1.45s-.74.8-1.43.87C4 9.719 3 9.459 2 11.349c-.6 1.09-.85 4.65-.85 4.65h7.36v-.17zm2.8 2.33h.56l-.28-.14z"></svg:path><svg:path fill="currentColor" d="M12 14.73L14.47 16L14 13.31l2-1.9l-2.76-.39L12 8.57l-1.24 2.45l-2.76.39l2 1.9L9.53 16z"></svg:path>`,
})
export class VaadinUserStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinUsersIcon],svg[vaadin-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.3 9.7c-.4 0-.9-.2-.9-.6s.5-.3.9-1c0 0 1.8-4.9-1.8-4.9S1.7 8.1 1.7 8.1c.4.7.9.6.9 1s-.5.6-.9.6c-.6.1-1.1 0-1.7.6V16h5c.2-1.7.7-5.2 1.1-6.1l.1-.1c-.2-.1-.5-.1-.9-.1M16 9.5c-.7-.8-1.3-.7-2-.8c-.5-.1-1.1-.2-1.1-.7s.6-.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9c-4.4.1-2.3 6-2.3 6c.5.8 1.1.7 1.1 1.1c0 .5-.6.6-1.1.7c-.9.1-1.7 0-2.5 1.5c-.4.9-1 5.8-1 5.8h10z"></svg:path>`,
})
export class VaadinUsersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinVaadinHIcon],svg[vaadin-vaadin-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.21.35a.79.79 0 0 0-.79.79v.46c0 .5-.32.85-1.07.85H9.8c-1.61 0-1.73 1.19-1.8 1.83c-.06-.64-.18-1.83-1.79-1.83H2.64c-.75 0-1.09-.37-1.09-.86v-.47A.77.77 0 0 0 .78.35a.78.78 0 0 0-.78.78v.011v-.001v1.32C0 4 .7 4.77 2.34 4.77H6c1.09 0 1.19.46 1.19.9v.13a.851.851 0 0 0 1.69.004V5.67c0-.44.1-.9 1.19-.9h3.61C15.29 4.77 16 4 16 2.46V1.14a.79.79 0 0 0-.79-.79m-4 7.03l-.04-.001a1 1 0 0 0-.958.714l-.002.007L8 12.31l-2.3-4.2a1 1 0 0 0-.963-.731l-.039.001H4.7l-.039-.001a1.05 1.05 0 0 0-.879 1.625L3.78 9l3.29 6.1a.942.942 0 0 0 1.718.006l.002-.006L12.13 9a1.05 1.05 0 0 0-.906-1.58h-.014h.001z"></svg:path>`,
})
export class VaadinVaadinHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinVaadinVIcon],svg[vaadin-vaadin-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.8 7.16h-.13c-.44 0-.9-.1-.9-1.19V2.35C4.77.71 4 0 2.46 0H1.14a.79.79 0 0 0 0 1.58h.46c.5 0 .85.32.85 1.07V6.2c0 1.61 1.19 1.73 1.83 1.8c-.64.06-1.83.18-1.83 1.79v3.55c0 .75-.37 1.09-.86 1.09h-.47a.77.77 0 0 0-.77.77c0 .431.349.78.78.78h1.33c1.54 0 2.31-.7 2.31-2.34v-3.59c0-1.09.46-1.19.9-1.19h.13a.851.851 0 0 0 .004-1.69H5.8zm9.3.03L9 3.87a1.05 1.05 0 0 0-1.58.906v.014v-.001l-.001.04a1 1 0 0 0 .714.958l.007.002l4.21 2.26l-4.24 2.25a1 1 0 0 0-.73 1.002v-.002l-.001.039a1.05 1.05 0 0 0 1.625.879L9 12.219l6.1-3.29a.942.942 0 0 0 .006-1.718l-.006-.002z"></svg:path>`,
})
export class VaadinVaadinVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinViewportIcon],svg[vaadin-viewport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4H0V0h4v1H1zm11-3V0h4v4h-1V1zm3 11h1v4h-4v-1h3zM4 15v1H0v-4h1v3z"></svg:path><svg:path fill="currentColor" d="M13 3v10H3V3zm1-1H2v12h12z"></svg:path>`,
})
export class VaadinViewportIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinVimeoIcon],svg[vaadin-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.9 4.4c-.9 5-5.9 9.3-7.4 10.3s-2.9-.4-3.4-1.4C4.6 12 2.9 5.7 2.4 5.1C2 4.6.6 5.7.6 5.7L0 4.8s2.7-3.3 4.8-3.7C7 .7 7 4.5 7.5 6.6c.5 2 .9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c.9-1.7 0-3.3-1.9-2.2c.8-4.3 7.7-5.4 6.8-.3"></svg:path>`,
})
export class VaadinVimeoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinVimeoSquareIcon],svg[vaadin-vimeo-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm13.9 5.3c-.7 3.8-4.4 7-5.5 7.7s-2.2-.3-2.5-1.1c-.4-.9-1.7-5.7-2-6.1c-.4-.3-1.4.5-1.4.5L2 5.6s2-2.4 3.6-2.7s1.6 2.5 2 4.1c.4 1.5.6 2.4 1 2.4c.3 0 1-.9 1.7-2.2s0-2.5-1.4-1.6c.5-3.3 5.7-4.1 5-.3"></svg:path>`,
})
export class VaadinVimeoSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinVolumeIcon],svg[vaadin-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.8 2.4l-.5 1C12.4 4.8 13 6.6 13 8.5c0 1.7-.5 3.2-1.3 4.6l.7.8c1.1-1.5 1.7-3.4 1.7-5.4c-.1-2.3-.9-4.4-2.3-6.1"></svg:path><svg:path fill="currentColor" d="m10.8 4.4l-.5 1.1c.5.9.8 1.9.8 3c0 1-.3 2-.7 2.9l.7.9c.6-1.1 1-2.4 1-3.7c-.1-1.6-.5-3-1.3-4.2M4 5H0v6h4l5 4V1z"></svg:path>`,
})
export class VaadinVolumeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinVolumeDownIcon],svg[vaadin-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.8 4.4l-.5 1.1c.5.9.8 1.9.8 3c0 1-.3 2-.7 2.9l.7.9c.6-1.1 1-2.4 1-3.7c-.1-1.6-.5-3-1.3-4.2M4 5H0v6h4l5 4V1z"></svg:path>`,
})
export class VaadinVolumeDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinVolumeOffIcon],svg[vaadin-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H0v6h4l5 4V1z"></svg:path>`,
})
export class VaadinVolumeOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinVolumeUpIcon],svg[vaadin-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8.5c0 2.3-.8 4.5-2 6.2l.7.8c1.5-1.9 2.4-4.4 2.4-7c0-3.1-1.2-5.9-3.2-8l-.5 1C14 3.3 15 5.8 15 8.5"></svg:path><svg:path fill="currentColor" d="m11.8 2.4l-.5 1C12.4 4.8 13 6.6 13 8.5c0 1.7-.5 3.2-1.3 4.6l.7.8c1.1-1.5 1.7-3.4 1.7-5.4c-.1-2.3-.9-4.4-2.3-6.1"></svg:path><svg:path fill="currentColor" d="m10.8 4.4l-.5 1.1c.5.9.8 1.9.8 3c0 1-.3 2-.7 2.9l.7.9c.6-1.1 1-2.4 1-3.7c-.1-1.6-.5-3-1.3-4.2M4 5H0v6h4l5 4V1z"></svg:path>`,
})
export class VaadinVolumeUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinWalletIcon],svg[vaadin-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 4H2.38a1 1 0 0 1-1.19-.982v-.019L14 2.5V1.31A1.18 1.18 0 0 0 12.684.001L1.31 1.85A2 2 0 0 0 0 3.727v10.772a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5v-9.01l.001-.041a1.45 1.45 0 0 0-1.45-1.45l-.053.001zM13 11a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 13 11"></svg:path>`,
})
export class VaadinWalletIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinWarningIcon],svg[vaadin-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1L0 15h16zm0 12c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m-1-3V6h2v4z"></svg:path>`,
})
export class VaadinWarningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinWorkplaceIcon],svg[vaadin-workplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3V0H2v14H0v1h7v-5h2V8h5V3zm-5 7H4V8h2zm0-3H4V5h2zm0-3H4V2h2zm3 3H7V5h2zm0-3H7V2h2zm4 3h-2V5h2zm1 4h2v5H8v-5h2V9h4z"></svg:path>`,
})
export class VaadinWorkplaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinWrenchIcon],svg[vaadin-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 13.4L7.7 5.6c.2-.5.3-1 .3-1.6c0-2.2-1.8-4-4-4c-.6 0-1.1.1-1.6.3l2.9 2.9l-2.1 2.1L.3 2.4C.1 2.9 0 3.4 0 4c0 2.2 1.8 4 4 4c.6 0 1.1-.1 1.6-.3l7.8 7.8c.6.6 1.5.6 2.1 0s.6-1.5 0-2.1M6.8 7.6L5.4 6.2l.9-.9l1.4 1.4zm7.4 7.4c-.4 0-.8-.3-.8-.8c0-.4.3-.8.8-.8s.8.3.8.8s-.3.8-.8.8"></svg:path>`,
})
export class VaadinWrenchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinYoutubeIcon],svg[vaadin-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.6 0h-.9l-.6 2.3L4.5 0h-1c.2.6.4 1.1.6 1.7c.3.8.5 1.5.5 1.9V6h.9V3.6zM9 4.5V3c0-.5-.1-.8-.3-1.1s-.5-.4-.9-.4s-.7.2-.9.5c-.2.2-.3.5-.3 1v1.6c0 .5.1.8.3 1c.2.3.5.4.9.4s.7-.2.9-.5c.2-.1.3-.5.3-1m-.8.2c0 .4-.1.6-.4.6s-.4-.2-.4-.6V2.8c0-.4.1-.6.4-.6s.4.2.4.6zM12 6V1.5h-.8v3.4c-.2.3-.3.4-.5.4c-.1 0-.2-.1-.2-.2V1.5h-.8V5c0 .3 0 .5.1.7c0 .2.2.3.5.3s.6-.2.9-.5V6zm.4 4.5c-.3 0-.4.2-.4.6v.4h.8v-.4c0-.4-.1-.6-.4-.6m-2.9 0c-.1 0-.3.1-.4.2v2.7c.1.1.3.2.4.2q.3 0 .3-.6v-1.9q0-.6-.3-.6"></svg:path><svg:path fill="currentColor" d="M14.4 8.3C14.2 7.6 13.6 7 13 7c-1.6-.2-3.3-.2-5-.2s-3.3 0-5 .2c-.6 0-1.2.6-1.4 1.3c-.2 1-.2 2.1-.2 3.1s0 2.1.2 3.1c.2.7.7 1.2 1.4 1.3c1.7.2 3.3.2 5 .2s3.3 0 5-.2c.7-.1 1.3-.6 1.4-1.3c.2-1 .2-2.1.2-3.1s0-2.1-.2-3.1m-9.2.9h-1v5.1h-.9V9.2h-.9v-.9h2.8zm2.4 5.1h-.8v-.5c-.3.4-.6.5-.9.5s-.4-.1-.5-.3c0-.1-.1-.3-.1-.7V9.8h.8v3.5c0 .1.1.2.2.2c.2 0 .3-.1.5-.4V9.8h.8zm3-1.4c0 .4 0 .7-.1.9c-.1.3-.3.5-.6.5s-.6-.2-.8-.5v.4h-.8V8.3h.8v1.9c.3-.3.5-.5.8-.5s.5.2.6.5c.1.2.1.5.1.9zm3-.7H12v.8c0 .4.1.6.4.6c.2 0 .3-.1.4-.3v-.5h.8v.6c0 .2-.1.3-.2.5c-.2.3-.5.5-1 .5c-.4 0-.7-.2-1-.5c-.2-.2-.3-.6-.3-1v-1.5c0-.5.1-.8.2-1c.2-.3.5-.5 1-.5c.4 0 .7.2.9.5c.2.2.2.6.2 1v.8z"></svg:path>`,
})
export class VaadinYoutubeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinYoutubeSquareIcon],svg[vaadin-youtube-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.9 6c.2 0 .3-.2.3-.5V4.1c0-.3-.1-.5-.3-.5s-.3.2-.3.5v1.4c0 .3.1.5.3.5m-.8 5.9c-.1.2-.3.3-.4.3s-.1 0-.1-.1V9.4H6V12c0 .2 0 .4.1.5c.1.2.2.2.4.2s.4-.1.7-.4v.4h.6V9.4h-.7zm-3.3-3h.7v3.8h.7V8.9h.7v-.7H3.8zm5.6.4c-.2 0-.4.2-.6.4V8.2h-.6v4.4h.6v-.3c.2.2.4.4.6.4s.4-.1.5-.4c0-.1.1-.4.1-.7v-1.3c0-.3 0-.5-.1-.7c-.1-.1-.2-.3-.5-.3m0 2.4c0 .3-.1.4-.3.4c-.1 0-.2 0-.3-.1v-2c.1-.1.2-.1.3-.1c.2 0 .3.2.3.5zm1.9-2.4c-.3 0-.5.1-.7.3c-.1.2-.2.4-.2.8v1.2c0 .4.1.6.2.8c.2.2.4.3.7.3s.6-.1.7-.4c.1-.1.1-.2.1-.4v-.5h-.6v.4c0 .2-.1.2-.3.2s-.3-.2-.3-.5v-.6h1.2v-.7c0-.4-.1-.6-.2-.8c0 .1-.3-.1-.6-.1m.3 1.3H11v-.3c0-.3.1-.5.3-.5s.3.2.3.5z"></svg:path><svg:path fill="currentColor" d="M0 0v16h16V0zm9.3 3.1h.6v2.7c0 .1 0 .2.1.2s.2-.1.4-.3V3.1h.6v3.3h-.6v-.3c-.2.3-.5.4-.7.4s-.3-.1-.4-.2c0-.1-.1-.3-.1-.5V3.1zM7 4.2c0-.3 0-.6.2-.8s.4-.3.7-.3s.5.1.7.3c.1.2.2.4.2.8v1.2c0 .4-.1.6-.2.8c-.2.2-.4.3-.7.3s-.5-.1-.7-.3s-.2-.4-.2-.8zM5.3 2l.5 1.8l.5-1.8H7l-.8 2.7v1.8h-.7V4.7c-.1-.4-.2-.8-.4-1.5c-.2-.4-.3-.8-.5-1.2zm7.5 10.9c-.1.5-.6.9-1.1 1c-1.2.1-2.5.1-3.7.1s-2.5 0-3.7-.1c-.5-.1-1-.4-1.1-1c-.2-.8-.2-1.6-.2-2.4c0-.7 0-1.5.2-2.3c.1-.5.6-.9 1.1-1c1.2-.1 2.5-.1 3.7-.1s2.5 0 3.7.1c.5.1 1 .4 1.1 1c.2.8.2 1.6.2 2.3c0 .8 0 1.6-.2 2.4"></svg:path>`,
})
export class VaadinYoutubeSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[vaadinAltAIcon],svg[vaadin-alt-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7V6h-1V5h-1v1h-.5v1h.5v3.56c0 1 .56 1.44 2 1.44v-1a.9.9 0 0 1-.998-.495L13 7zM9 3h1v9H9zm-6 9l.57-2h2.82L7 12h1L5.73 4H4.27L2 12zm2-6.9L6.11 9H3.89z"></svg:path>`,
})
export class VaadinAltAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
