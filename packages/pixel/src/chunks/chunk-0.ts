import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelAdIcon],svg[pixel-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm-1 13H3V6h18z"></svg:path><svg:path fill="currentColor" d="M18 7v3h-4v1h-1v5h1v1h5v-1h1V7zm-3 5h3v3h-3zm-5-2V9H9V8H8V7H7v1H6v1H5v1H4v7h2v-2h3v2h2v-7zm-1 3H6v-2h1v-1h1v1h1z"></svg:path>`,
})
export class PixelAdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAnalyticsSolidIcon],svg[pixel-analytics-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11h1v10h-1v1H8v-1H7V11h1v-1h2zm1-6h1v1h-1zm1 1h1v1h-1zm4 2h1v2h-1v1h-2v-1h-1V8h1V7h2zm0 7h1v6h-1v1h-2v-1h-1v-6h1v-1h2zm1-9h1v1h-1zm1-1h1v1h-1zm5-3v2h-1v1h-2V4h-1V2h1V1h2v1zm-1 9h1v10h-1v1h-2v-1h-1V11h1v-1h2zM5 7h1v1H5zM4 9h1v2H4v1H2v-1H1V9h1V8h2zm0 7h1v5H4v1H2v-1H1v-5h1v-1h2zM6 6h1v1H6zm2-2H7V2h1V1h2v1h1v2h-1v1H8z"></svg:path>`,
})
export class PixelAnalyticsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAdSolidIcon],svg[pixel-ad-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zM9 8v1h1v1h1v7H9v-2H6v2H4v-7h1V9h1V8h1V7h1v1zm4 8v-5h1v-1h4V7h2v9h-1v1h-5v-1z"></svg:path><svg:path fill="currentColor" d="M9 11v2H6v-2h1v-1h1v1zm6 1h3v3h-3z"></svg:path>`,
})
export class PixelAdSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAnalyticsIcon],svg[pixel-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15h2v7H2zm6-5h2v12H8zm6 4h2v8h-2zm6-4h2v12h-2zm-2-5h1v1h-1zm-1 1h1v1h-1zm-3 1h2v1h-2zm0 3h2v1h-2zm-1-2h1v2h-1zm3 0h1v2h-1zm-4-2h1v1h-1zm-1-1h1v1h-1zM8 4h2v1H8zm0-3h2v1H8zm2 1h1v2h-1zM7 2h1v2H7zm13 2h2v1h-2zm-1-2h1v2h-1zm1-1h2v1h-2zm2 1h1v2h-1zM6 6h1v1H6zM5 7h1v1H5zM4 9h1v2H4zM1 9h1v2H1zm1-1h2v1H2zm0 3h2v1H2z"></svg:path>`,
})
export class PixelAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAndroidIcon],svg[pixel-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10h1v2H5zm13 0h1v2h-1zm4 10v-2h-1v-1h-1v-1h-1v-1h-1v-3h-1v2h-2v-1H9v1H7v-2H6v3H5v1H4v1H3v1H2v2H1v3h22v-3zM8 18v2H6v-2zm8 0h2v2h-2z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngellistIcon],svg[pixel-angellist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12h1v7h-1zm0-10h1v3h-1zm-1 17h1v1h-1zm0-8h1v1h-1zm0-6h1v3h-1zm-1 15h1v1h-1zm0-12h1v2h-1zm0-7h2v1h-2zm-2 9h3v1h-3zm1-8h1v2h-1zm-1 19h2v1h-2zm0-17h1v3h-1zm-1 15h1v1h-1zm1-12v3h-3V9h1V7zm2 6v1h-1v1h-1v1h-1v3h-1v-1h-1v1h-1v-2h2v-3h-1v-1zm-5-9h1v3h-1zm-1 18h4v1h-4zm0-10h1v1h-1zm0-10h1v2h-1zM9 16h1v1H9zm2-6v1h-1v1H9v-1H7v-1h2V8h1v2zM8 21h2v1H8zm0-2h2v1H8zm0-4h1v1H8zM8 5h1v3H8zm0-4h2v1H8zM7 20h1v1H7zm0-2h1v1H7zM7 2h1v3H7zM6 19h1v1H6zm0-2h1v1H6zm0-6h1v3H6zm-1 7h1v1H5zm0-4h3v1H5zm-1 1h1v3H4z"></svg:path>`,
})
export class PixelAngellistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngleDownIcon],svg[pixel-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5V9H4V8h1V7h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1V9h1V8h1V7h1v1z"></svg:path>`,
})
export class PixelAngleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngleDownSolidIcon],svg[pixel-angle-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h2v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1V9h1V8h1V7h2v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4V8h1z"></svg:path>`,
})
export class PixelAngleDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngleLeftIcon],svg[pixel-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1z"></svg:path>`,
})
export class PixelAngleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngleLeftSolidIcon],svg[pixel-angle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v2h-1v1h-1v1h-1v1h-1v1h-1v2h1v1h1v1h1v1h1v1h1v2h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h2v1z"></svg:path>`,
})
export class PixelAngleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngleRightIcon],svg[pixel-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v-1H7v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8H9V7H8V6H7V5h1V4h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelAngleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngleRightSolidIcon],svg[pixel-angle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19v-2h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9H9V8H8V7H7V5h1V4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1z"></svg:path>`,
})
export class PixelAngleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngleUpIcon],svg[pixel-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v-1H4v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h2v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAngleUpSolidIcon],svg[pixel-angle-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H5v-1H4v-2h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1z"></svg:path>`,
})
export class PixelAngleUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAppleIcon],svg[pixel-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v3h-1v1h-1v1h-2V3h1V2h1V1zm6 16v1h-1v2h-1v1h-1v1h-1v1h-2v-1h-5v1H8v-1H7v-1H6v-1H5v-1H4v-2H3v-7h1V8h1V7h2V6h3v1h4V6h3v1h2v1h1v1h-1v1h-1v5h1v1h1v1z"></svg:path>`,
})
export class PixelAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowAltCircleDownIcon],svg[pixel-arrow-alt-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6zm-6-1v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1v6h-1v2h-1v2h-2v1h-2v1z"></svg:path><svg:path fill="currentColor" d="M13 17h-2v-1h-1v-1H9v-1H8v-1H7v-1h4V6h2v6h4v1h-1v1h-1v1h-1v1h-1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelArrowAltCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowAltCircleLeftIcon],svg[pixel-arrow-alt-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6zm1-6h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1v6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3z"></svg:path><svg:path fill="currentColor" d="M7 13v-2h1v-1h1V9h1V8h1V7h1v4h6v2h-6v4h-1v-1h-1v-1H9v-1H8v-1z"></svg:path>`,
})
export class PixelArrowAltCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowAltCircleDownSolidIcon],svg[pixel-arrow-alt-circle-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6zm-5-6v-1H9v-1H8v-1H7v-1h4V6h2v6h4v1h-1v1h-1v1h-1v1h-1v1h-2v-1z"></svg:path>`,
})
export class PixelArrowAltCircleDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowAltCircleLeftSolidIcon],svg[pixel-arrow-alt-circle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-10 4v4h-1v-1h-1v-1H9v-1H8v-1H7v-2h1v-1h1V9h1V8h1V7h1v4h6v2z"></svg:path>`,
})
export class PixelArrowAltCircleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowAltCircleRightIcon],svg[pixel-arrow-alt-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1z"></svg:path><svg:path fill="currentColor" d="M17 11v2h-1v1h-1v1h-1v1h-1v1h-1v-4H6v-2h6V7h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelArrowAltCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowAltCircleRightSolidIcon],svg[pixel-arrow-alt-circle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-6 5h-1v1h-1v1h-1v1h-1v-4H6v-2h6V7h1v1h1v1h1v1h1v1h1v2h-1z"></svg:path>`,
})
export class PixelArrowAltCircleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowAltCircleUpIcon],svg[pixel-arrow-alt-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9zm6 1v1h2v1h2v2h1v2h1v6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3z"></svg:path><svg:path fill="currentColor" d="M11 7h2v1h1v1h1v1h1v1h1v1h-4v6h-2v-6H7v-1h1v-1h1V9h1V8h1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelArrowAltCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowAltCircleUpSolidIcon],svg[pixel-arrow-alt-circle-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9zm5 6v1h1v1h1v1h1v1h-4v6h-2v-6H7v-1h1v-1h1V9h1V8h1V7h2v1z"></svg:path>`,
})
export class PixelArrowAltCircleUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleDownIcon],svg[pixel-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8zm-1 8h-1v2h-1v1h-1v1h-2v1H8v-1H6v-1H5v-1H4v-2H3V8h1V6h1V5h1V4h2V3h8v1h2v1h1v1h1v2h1z"></svg:path><svg:path fill="currentColor" d="M19 12v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1h1v-1h1v1h1v1h1v1h1v1h1V5h2v10h1v-1h1v-1h1v-1h1v-1h1v1z"></svg:path>`,
})
export class PixelArrowCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleDownSolidIcon],svg[pixel-arrow-circle-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8zm9-1V5h2v10h1v-1h1v-1h1v-1h1v-1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1h1v-1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelArrowCircleDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleLeftIcon],svg[pixel-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-1V3h-1V2h-2V1H8zm8 2h2v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-2v1H8v-1H6v-1H5v-1H4v-2H3V8h1V6h1V5h1V4h2V3h8z"></svg:path><svg:path fill="currentColor" d="M11 5h1v1h1v1h-1v1h-1v1h-1v1H9v1h10v2H9v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-2h1v-1h1V9h1V8h1V7h1V6h1z"></svg:path>`,
})
export class PixelArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleLeftSolidIcon],svg[pixel-arrow-circle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-1V3h-1V2h-2V1H8zm1 9h10v2H9v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1v1h1v1h-1v1h-1v1h-1v1H9z"></svg:path>`,
})
export class PixelArrowCircleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleRightIcon],svg[pixel-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22h2v-1h1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8zm-8-2H6v-1H5v-1H4v-2H3V8h1V6h1V5h1V4h2V3h8v1h2v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-2v1H8z"></svg:path><svg:path fill="currentColor" d="M13 19h-1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1H5v-2h10v-1h-1V9h-1V8h-1V7h-1V6h1V5h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1z"></svg:path>`,
})
export class PixelArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleRightSolidIcon],svg[pixel-arrow-circle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22h2v-1h1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8zm-1-9H5v-2h10v-1h-1V9h-1V8h-1V7h-1V6h1V5h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-1h1z"></svg:path>`,
})
export class PixelArrowCircleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleUpIcon],svg[pixel-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8zm-2 8v2h-1v1h-1v1h-2v1H8v-1H6v-1H5v-1H4v-2H3V8h1V6h1V5h1V4h2V3h8v1h2v1h1v1h1v2h1v8z"></svg:path><svg:path fill="currentColor" d="M19 11v1h-1v1h-1v-1h-1v-1h-1v-1h-1V9h-1v10h-2V9h-1v1H9v1H8v1H7v1H6v-1H5v-1h1v-1h1V9h1V8h1V7h1V6h1V5h2v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelArrowCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleUpSolidIcon],svg[pixel-arrow-circle-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8zm-9 1v10h-2V9h-1v1H9v1H8v1H7v1H6v-1H5v-1h1v-1h1V9h1V8h1V7h1V6h1V5h2v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1V9z"></svg:path>`,
})
export class PixelArrowCircleUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowDownIcon],svg[pixel-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-1h1v-1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1V1h2v18h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1z"></svg:path>`,
})
export class PixelArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowDownSolidIcon],svg[pixel-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 23h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1h1v1h1v1h1V1h4v15h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1z"></svg:path>`,
})
export class PixelArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowLeftIcon],svg[pixel-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2H5v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1v1h1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1z"></svg:path>`,
})
export class PixelArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowLeftSolidIcon],svg[pixel-arrow-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1h15v4H8v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1z"></svg:path>`,
})
export class PixelArrowLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowRightIcon],svg[pixel-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1H1v-2h18v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h1V1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowRightSolidIcon],svg[pixel-arrow-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1H1v-4h15V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h1V2h1V1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelArrowRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowUpIcon],svg[pixel-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v1h-1v1h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1v18h-2V5h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v-1H1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelArrowUpSolidIcon],svg[pixel-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-1v15h-4V8H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1z"></svg:path>`,
})
export class PixelArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAtIcon],svg[pixel-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V8h-1V6h-1V4h-1V3h-2V2h-3V1h-4v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h3v1h4v-1h3v-2h-3v1h-4v-1H7v-1H6v-1H5v-2H4v-2H3v-4h1V8h1V6h1V5h1V4h3V3h4v1h3v1h1v1h1v2h1v2h1v4h-1v1h-2v-5h-1V8h-1V7h-2V6h-4v1H8v1H7v2H6v4h1v2h1v1h2v1h4v-1h2v-1h1v1h4v-1h1v-2h1v-4zm-6 4h-1v1h-1v1h-4v-1H9v-1H8v-4h1V9h1V8h4v1h1v1h1z"></svg:path>`,
})
export class PixelAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelAtSolidIcon],svg[pixel-at-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V8h-1V6h-1V4h-1V3h-2V2h-3V1h-4v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h3v1h4v-1h3v-3h-3v1h-4v-1H7v-1H6v-2H5v-2H4v-4h1V8h1V6h1V5h3V4h4v1h3v1h1v2h1v2h1v4h-2v-4h-1V8h-1V7h-2V6h-4v1H8v1H7v2H6v4h1v2h1v1h2v1h4v-1h2v-1h1v1h4v-1h1v-2h1v-4zm-7 4h-1v1h-4v-1H9v-4h1V9h4v1h1z"></svg:path>`,
})
export class PixelAtSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBadgeCheckIcon],svg[pixel-badge-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V9h-1V5h-1V4h-1V3h-4V2h-1V1h-4v1H9v1H5v1H4v1H3v4H2v1H1v4h1v1h1v4h1v1h1v1h4v1h1v1h4v-1h1v-1h4v-1h1v-1h1v-4h1v-1h1v-4zm-1 4h-1v1h-1v4h-4v1h-1v1h-4v-1H9v-1H5v-4H4v-1H3v-4h1V9h1V5h4V4h1V3h4v1h1v1h4v4h1v1h1z"></svg:path><svg:path fill="currentColor" d="M17 9v2h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-2h1v-1h1v1h1v1h2v-1h1v-1h1V9h1V8h1v1z"></svg:path>`,
})
export class PixelBadgeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBadgeCheckSolidIcon],svg[pixel-badge-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V9h-1V5h-1V4h-1V3h-4V2h-1V1h-4v1H9v1H5v1H4v1H3v4H2v1H1v4h1v1h1v4h1v1h1v1h4v1h1v1h4v-1h1v-1h4v-1h1v-1h1v-4h1v-1h1v-4zM7 11h1v-1h1v1h1v1h2v-1h1v-1h1V9h1V8h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7z"></svg:path>`,
})
export class PixelBadgeCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBankIcon],svg[pixel-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4v2h-1v1h-2V6h-1V4h1V3h2v1zm7 16v-1h-1v-9h-2v9h-2v-9h-2v9h-4v-9H8v9H6v-9H4v9H3v1H1v2h1v1h20v-1h1v-2zm0 2H3v-1h1v-1h16v1h1zm1-15v1h-1v1H3V8H2V7h2v1h16V7z"></svg:path><svg:path fill="currentColor" d="M23 5v2h-1V6h-3V5h-2V4h-2V3h-2V2h-2v1H9v1H7v1H5v1H2v1H1V5h3V4h2V3h2V2h2V1h4v1h2v1h2v1h2v1z"></svg:path>`,
})
export class PixelBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBankSolidIcon],svg[pixel-bank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20v2h-1v1H2v-1H1v-2h2v-1h1v-9h2v9h2v-9h2v9h4v-9h2v9h2v-9h2v9h1v1zM20 5V4h-2V3h-2V2h-2V1h-4v1H8v1H6v1H4v1H1v2h1v1h1v1h18V8h1V7h1V5zm-9 2V6h-1V4h1V3h2v1h1v2h-1v1z"></svg:path>`,
})
export class PixelBankSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBarsIcon],svg[pixel-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h22v2H1zm0 8h22v2H1zM1 3h22v2H1z"></svg:path>`,
})
export class PixelBarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBarsSolidIcon],svg[pixel-bars-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h1v2h-1v1H2v-1H1v-2h1v-1h20zm0 8h1v2h-1v1H2v-1H1v-2h1v-1h20zm1-16v2h-1v1H2V5H1V3h1V2h20v1z"></svg:path>`,
})
export class PixelBarsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBehanceIcon],svg[pixel-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v-1h-1V9h-6v1h-1v1h-1v6h1v1h1v1h6v-1h1v-1h1v-1h-3v1h-3v-1h-1v-1h7v-4Zm-6 2v-2h4v2Zm-1-7h6v2h-6zm-4 7v-1h-1v-2h1V7h-1V6H9V5H1v14h9v-1h1v-1h1v-4ZM4 7h3v1h1v2H7v1H4Zm5 9H8v1H4v-4h4v1h1Z"></svg:path>`,
})
export class PixelBehanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBellIcon],svg[pixel-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v2h-1v1h-4v-1H9v-2zm6-3v-1h-1v-2h-1V8h-1V6h-1V5h-1V4h-2V3h-1V1h-2v2h-1v1H8v1H7v1H6v2H5v6H4v2H3v1H2v1h1v1h18v-1h1v-1zM6 16v-2h1V8h1V6h2V5h4v1h2v2h1v6h1v2h1v1H5v-1z"></svg:path>`,
})
export class PixelBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBellExclaimationIcon],svg[pixel-bell-exclaimation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v2h-1v1h-4v-1H9v-2zm6-3v-1h-1v-2h-1V8h-1V6h-1V5h-1V4h-2V3h-1V1h-2v2h-1v1H8v1H7v1H6v2H5v6H4v2H3v1H2v1h1v1h18v-1h1v-1zm-2 0H5v-1h1v-2h1V8h1V6h2V5h4v1h2v2h1v6h1v2h1z"></svg:path><svg:path fill="currentColor" d="M11 14h2v2h-2zm3-7v3h-1v3h-2v-3h-1V7z"></svg:path>`,
})
export class PixelBellExclaimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBellExclaimationSolidIcon],svg[pixel-bell-exclaimation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v2h-1v1h-4v-1H9v-2zm6-3v-1h-1v-2h-1V8h-1V6h-1V5h-1V4h-2V3h-1V1h-2v2h-1v1H8v1H7v1H6v2H5v6H4v2H3v1H2v1h1v1h18v-1h1v-1zM14 6v3h-1v3h-2V9h-1V6zm-3 8h2v2h-2z"></svg:path>`,
})
export class PixelBellExclaimationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBellMuteIcon],svg[pixel-bell-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h1v1H3zm2 0H4v-2h1V8h1V6h1V5h1V4h2V3h1V1h2v2h1v1h2v1h-1v1h-1V5h-4v1H8v2H7v6H6v1H5zm-3 1h1v1H2zm13 3v2h-1v1h-4v-1H9v-2zm6-3h1v1h-1v1H9v-1h1v-1h9v-1h-1v-2h-1v-4h1V9h1v5h1v2h1zm1-14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1z"></svg:path>`,
})
export class PixelBellMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBellMuteSolidIcon],svg[pixel-bell-mute-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h1v1h-1zm2 1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3zm-1 14h1v1h-1v1H9v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1v5h1v2h1zM2 17h1v1H2zm3-1H4v-2h1V8h1V6h1V5h1V4h2V3h1V1h2v2h1v1h2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5zm-2 0h1v1H3zm12 4v2h-1v1h-4v-1H9v-2z"></svg:path>`,
})
export class PixelBellMuteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBellSolidIcon],svg[pixel-bell-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v2h-1v1h-4v-1H9v-2zm7-3v1h-1v1H3v-1H2v-1h1v-1h1v-2h1V8h1V6h1V5h1V4h2V3h1V1h2v2h1v1h2v1h1v1h1v2h1v6h1v2h1v1z"></svg:path>`,
})
export class PixelBellSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBloombergIcon],svg[pixel-bloomberg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zM7 5h7v1h1v1h1v4h-1v1h1v1h1v4h-1v1h-1v1H7z"></svg:path><svg:path fill="currentColor" d="M15 14v2h-1v1H9v-4h5v1zm-1-6v2h-1v1H9V7h4v1z"></svg:path>`,
})
export class PixelBloombergIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBlueskyIcon],svg[pixel-bluesky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v8h-1v2h-2v1h-2v1h2v1h1v3h-1v1h-1v1h-2v1h-2v-1h-1v-1h-1v-2h-2v2h-1v1H9v1H7v-1H5v-1H4v-1H3v-3h1v-1h2v-1H4v-1H2v-2H1V3h1V2h2v1h2v1h1v1h1v1h1v1h1v2h1v1h2V9h1V7h1V6h1V5h1V4h1V3h2V2h2v1z"></svg:path>`,
})
export class PixelBlueskyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBoldIcon],svg[pixel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v-1h-2v-1h1v-1h1V4h-1V3h-1V2h-1V1H5v1H4v20h1v1h12v-1h1v-1h1v-1h1v-7zM6 3h10v1h1v6H6zm12 17h-1v1H6v-9h10v1h1v1h1z"></svg:path>`,
})
export class PixelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBoldSolidIcon],svg[pixel-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v-1h-2v-1h1v-1h1V4h-1V3h-1V2h-1V1H5v1H4v20h1v1h12v-1h1v-1h1v-1h1v-7zm-3 6v1H7v-7h9v1h1v5zm0-14v4h-1v1H7V4h8v1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelBoldSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBoltIcon],svg[pixel-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10V6h1V3h1V1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1h7v4H9v3H8v2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1zm4 2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-5H6v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1v5h5z"></svg:path>`,
})
export class PixelBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBoltSolidIcon],svg[pixel-bolt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v-2h1v-3h1v-4H3v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1v2h-1v3h-1v4z"></svg:path>`,
})
export class PixelBoltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBookHeartIcon],svg[pixel-book-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v3h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V6h1V5h3v1h1v1h1V6h1V5h3v1z"></svg:path><svg:path fill="currentColor" d="M20 17h1v-1h1V2h-1V1H4v1H3v1H2v18h1v1h1v1h17v-1h1v-1h-1v-1h-1zm-2 4H5v-1H4v-2h1v-1h13zM4 3h16v12H4z"></svg:path>`,
})
export class PixelBookHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBookHeartSolidIcon],svg[pixel-book-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17v-1h1V2h-1V1H4v1H3v1H2v18h1v1h1v1h17v-1h1v-1h-1v-1h-1v-3zm-3 4H6v-1H5v-2h1v-1h12zm0-12h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V6h1V5h3v1h1v1h1V6h1V5h3v1h1z"></svg:path>`,
})
export class PixelBookHeartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBookmarkIcon],svg[pixel-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2V1H5v1H4v21h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1V2zm-1 16h-1v-1h-1v-1h-1v-1h-1v-1h-4v1H9v1H8v1H7v1H6V4h1V3h10v1h1z"></svg:path>`,
})
export class PixelBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBookmarkSolidIcon],svg[pixel-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v21h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4V2h1V1h14v1z"></svg:path>`,
})
export class PixelBookmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBoxUsdIcon],svg[pixel-box-usd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V4h-1V3h-1V2h-1V1H5v1H4v1H3v1H2v2H1v16h1v1h20v-1h1V6zm-9-3h5v1h1v1h1v2h-7zM4 5h1V4h1V3h5v4H4zM3 21V9h8v2H9v4h1v1h3v1H9v2h2v2zm18 0h-8v-2h2v-4h-1v-1h-3v-1h4v-2h-2V9h8z"></svg:path>`,
})
export class PixelBoxUsdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBoxUsdSolidIcon],svg[pixel-box-usd-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 9v13h1v1h20v-1h1V9zm12 11v2h-2v-2H9v-2h4v-1h-3v-1H9v-4h2v-2h2v2h2v2h-4v1h3v1h1v4zM11 1v6H1V6h1V4h1V3h1V2h1V1zm12 5v1H13V1h6v1h1v1h1v1h1v2z"></svg:path>`,
})
export class PixelBoxUsdSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBrightnessHighIcon],svg[pixel-brightness-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H3V4h1V3h1v1h1v1h1v1h1v1H7v1H6V7H5V6H4zm-3 6h5v2H1zm6 6h1v1H7v1H6v1H5v1H4v-1H3v-1h1v-1h1v-1h1v-1h1zm4 1h2v5h-2zm0-17h2v5h-2zm7 10h5v2h-5zm-1-4h-1V6h1V5h1V4h1V3h1v1h1v1h-1v1h-1v1h-1v1h-1zm4 12v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1v1h1v1h1v1zm-5-5h1v-4h-1V8h-2V7h-4v1H8v2H7v4h1v2h2v1h4v-1h2zm-1 0h-1v1h-4v-1H9v-4h1V9h4v1h1z"></svg:path>`,
})
export class PixelBrightnessHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBrightnessHighSolidIcon],svg[pixel-brightness-high-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h5v2H1zm3-6H3V4h1V3h1v1h1v1h1v1h1v1H7v1H6V7H5V6H4zm3 12h1v1H7v1H6v1H5v1H4v-1H3v-1h1v-1h1v-1h1v-1h1zm4 1h2v5h-2zm0-17h2v5h-2zm9 18h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1v1h1v1h1zm-2-8h5v2h-5zm-1-4h-1V6h1V5h1V4h1V3h1v1h1v1h-1v1h-1v1h-1v1h-1zm-1 9h-2v1h-4v-1H8v-2H7v-4h1V8h2V7h4v1h2v2h1v4h-1z"></svg:path>`,
})
export class PixelBrightnessHighSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBrightnessLowIcon],svg[pixel-brightness-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h1v2h-1zm3 0h1v2h-1zm-2-1h2v1h-2zm0 3h2v1h-2zm-3-9h1v2h-1zm1 2h2v1h-2zm2-2h1v2h-1zm-2-1h2v1h-2zm0 14h2v1h-2zm2 1h1v2h-1zm-3 0h1v2h-1zm1 2h2v1h-2zm-7-1h2v1h-2zm0 3h2v1h-2zm2-2h1v2h-1zm-3 0h1v2h-1zm3-18h1v2h-1zm-3 0h1v2h-1zm1-1h2v1h-2zm0 3h2v1h-2zm5 6V8h-2V7h-4v1H8v2H7v4h1v2h2v1h4v-1h2v-2h1v-4zm-2 4v1h-4v-1H9v-4h1V9h4v1h1v4zM3 18h1v2H3zm1 2h2v1H4zm0-3h2v1H4zm2 1h1v2H6zM6 4h1v2H6zM4 3h2v1H4zm0 3h2v1H4zM3 4h1v2H3zm-1 9h2v1H2zm0-3h2v1H2zm-1 1h1v2H1zm3 0h1v2H4z"></svg:path>`,
})
export class PixelBrightnessLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBrightnessLowSolidIcon],svg[pixel-brightness-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h1v2H6v1H4v-1H3v-2h1v-1h2zM4 6H3V4h1V3h2v1h1v2H6v1H4zm-2 8v-1H1v-2h1v-1h2v1h1v2H4v1zm11 6h1v2h-1v1h-2v-1h-1v-2h1v-1h2zM11 4h-1V2h1V1h2v1h1v2h-1v1h-2zm7 2h-1V4h1V3h2v1h1v2h-1v1h-2zm-1 8h-1v2h-2v1h-4v-1H8v-2H7v-4h1V8h2V7h4v1h2v2h1zm3 4h1v2h-1v1h-2v-1h-1v-2h1v-1h2zm3-7v2h-1v1h-2v-1h-1v-2h1v-1h2v1z"></svg:path>`,
})
export class PixelBrightnessLowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBulletListIcon],svg[pixel-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h3v3H2zm0 6h3v3H2zm0 6h3v3H2zm6 1h14v1H8zM8 6h14v1H8zm0 6h14v1H8z"></svg:path>`,
})
export class PixelBulletListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBulletListSolidIcon],svg[pixel-bullet-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h3v3H2zm0 12h3v3H2zm0-6h3v3H2zm21-5v1h-1v1H10V7H9V6h1V5h12v1zm-1 6h1v1h-1v1H10v-1H9v-1h1v-1h12zm0 6h1v1h-1v1H10v-1H9v-1h1v-1h12z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelBulletListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBullhornIcon],svg[pixel-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V9h-1V3h-1V2h-1v1h-1v1h-2v1h-2v1h-2v1H2v1H1v7h1v1h3v5h1v1h2v-1h1v-5h3v1h2v1h2v1h2v1h1v1h1v-1h1v-6h1v-1h1v-3zm-3 7h-2v-1h-2v-1h-2v-1h-3V9h3V8h2V7h2V6h2z"></svg:path>`,
})
export class PixelBullhornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBullhornSolidIcon],svg[pixel-bullhorn-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10v3h-1v1h-1V9h1v1zM2 7h6v15H6v-1H5v-5H2v-1H1V8h1zm18-5v19h-1v-1h-1v-1h-2v-1h-2v-1h-2v-1h-2V7h2V6h2V5h2V4h2V3h1V2z"></svg:path>`,
})
export class PixelBullhornSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelBusinessIcon],svg[pixel-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.505 15.503v7.002h-1v1H3.5v-1h-1v-7.002h7.002v2h6.001v-2z"></svg:path><svg:path fill="currentColor" d="M14.503 15.503h-4v1h4zm0-2h-4v1h4z"></svg:path><svg:path fill="currentColor" d="M22.505 5.5v-1h-6.002v-2h-1v-1H9.502v1h-1v2H2.5v1h-1v8.003h1v1h7.002v-2h6.001v2h7.002v-1h1V5.5zm-12.003-2h4.001v1h-4.001z"></svg:path>`,
})
export class PixelBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCalenderIcon],svg[pixel-calender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1h2v1h-2zm6 4V4h-3V2h-1v5h-2V2h-1v2H9V2H8v5H6V2H5v2H2v1H1v17h1v1h20v-1h1V5zM2 6h1V5h2v2H2zm4 16H3v-1H2v-3h4zm0-5H2v-4h4zm0-5H2V8h4zm11-4v4h-4V8zm0 9h-4v-4h4zM9 5h6v2H9zm2 17H7v-4h4zm0-5H7v-4h4zm0-5H7V8h4zm2 10v-4h4v4zm9-1h-1v1h-3v-4h4zm0-4h-4v-4h4zm0-5h-4V8h4zm0-5h-3V5h2v1h1zM6 1h2v1H6z"></svg:path>`,
})
export class PixelCalenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCalenderSolidIcon],svg[pixel-calender-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1h2v1H6zm10 0h2v1h-2zm6 4V4h-3V2h-1v5h-2V2h-1v2H9V2H8v5H6V2H5v2H2v1H1v17h1v1h20v-1h1V5zm-1 3v3h-3V8zm0 8h-3v-3h3zm0 5h-3v-3h3zM3 18h3v3H3zm0-5h3v3H3zm13 3h-3v-3h3zm-5 0H8v-3h3zm-3 2h3v3H8zm5 0h3v3h-3zm3-7h-3V8h3zm-5-3v3H8V8zm-5 3H3V8h3z"></svg:path>`,
})
export class PixelCalenderSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCcIcon],svg[pixel-cc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm-1 13H3V6h18z"></svg:path><svg:path fill="currentColor" d="M20 7v2h-4v1h-1v4h1v1h4v2h-5v-1h-1v-1h-1V9h1V8h1V7zm-9 0v2H7v1H6v4h1v1h4v2H6v-1H5v-1H4V9h1V8h1V7z"></svg:path>`,
})
export class PixelCcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCcSolidIcon],svg[pixel-cc-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zM11 9H7v1H6v4h1v1h4v2H6v-1H5v-1H4V9h1V8h1V7h5zm9 0h-4v1h-1v4h1v1h4v2h-5v-1h-1v-1h-1V9h1V8h1V7h5z"></svg:path>`,
})
export class PixelCcSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelChartLineIcon],svg[pixel-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5v7h-1V8h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1H9v1H8v1H7v1H6v-2h1v-1h1V9h1V8h1v1h1v1h1v1h1v1h1v-1h1v-1h1V9h1V8h1V7h1V6h-4V5z"></svg:path><svg:path fill="currentColor" d="M23 18v2H2v-1H1V4h2v14z"></svg:path>`,
})
export class PixelChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelChartLineSolidIcon],svg[pixel-chart-line-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13v-2h1v-1h1V9h1V8h1v1h1v1h1v1h1v1h1v-1h1v-1h1V9h1V7h-1V6h-1V5h7v7h-1v-1h-1v-1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1H9v1H8v1z"></svg:path><svg:path fill="currentColor" d="M23 17v3H2v-1H1V4h3v13z"></svg:path>`,
})
export class PixelChartLineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelChartNetworkIcon],svg[pixel-chart-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7H5V6H4V4h1V3h2v1h1v2H7zm-2 4h1v3H5v1H2v-1H1v-3h1v-1h3zm4-3h1v1H9zm6 7h1v1h-1zm2-7h1v1h-1zM8 7h1v1H8zm-1 5h1v1H7z"></svg:path><svg:path fill="currentColor" d="M16 14v-3h-1v-1h-1V9h-3v1h-1v1H9v3h1v1h1v1h3v-1h1v-1zm-5 0v-3h3v3zm5-5h1v1h-1zm0 7h1v1h-1zm5 2h1v3h-1v1h-3v-1h-1v-3h1v-1h3zm1-13v2h-1v1h-2V7h-1V5h1V4h2v1z"></svg:path>`,
})
export class PixelChartNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelChartNetworkSolidIcon],svg[pixel-chart-network-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14v-4h1V9h1V8h2V7h1V5h-1V4h-2v1h-1v2h-1v1h-1v1h-2V8h-4V7H9V6H8V4H7V3H5v1H4v2h1v1h2v1h1v1h1v2H8v1H6v-1H5v-1H2v1H1v3h1v1h3v-1h4v1h1v1h1v1h3v-1h1v1h1v1h1v3h1v1h3v-1h1v-3h-1v-1h-3v-1h-1v-1h-1v-1zm-3 0h-3v-3h3z"></svg:path>`,
})
export class PixelChartNetworkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCheckIcon],svg[pixel-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-2h2v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4z"></svg:path>`,
})
export class PixelCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCheckBoxIcon],svg[pixel-check-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1h1v-1h1V9h1v1h1v1h1v1h2v-1h1v-1h1V9h1V8h1V7h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-1 19H3V3h18z"></svg:path>`,
})
export class PixelCheckBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCheckBoxSolidIcon],svg[pixel-check-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zM5 11h1v-1h1V9h1v1h1v1h1v1h2v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5z"></svg:path>`,
})
export class PixelCheckBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCheckCircleIcon],svg[pixel-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1h1v-1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V9h1V8h1v1z"></svg:path><svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-2 6v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1v6z"></svg:path>`,
})
export class PixelCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCheckCircleSolidIcon],svg[pixel-check-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-4 3h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-2h1v-1h2v1h1v1h2v-1h1v-1h1v-1h1V9h1V8h2v1h1v2h-1z"></svg:path>`,
})
export class PixelCheckCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCheckListIcon],svg[pixel-check-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h14v1H9zm0-6h14v1H9zm0-6h14v1H9zm-2 9h1v2H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-2h1v1h1v1h1v-1h1v-1h1v-1h1zm1-6v2H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-2h1v1h1v1h1v-1h1v-1h1v-1h1V9zm0-6v2H7v1H6v1H5v1H4v1H3V8H2V7H1V5h1v1h1v1h1V6h1V5h1V4h1V3z"></svg:path>`,
})
export class PixelCheckListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCheckListSolidIcon],svg[pixel-check-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v1h-1v1H10V7H9V6h1V5h12v1zm-1 12h1v1h-1v1H10v-1H9v-1h1v-1h12zm0-6h1v1h-1v1H10v-1H9v-1h1v-1h12zM8 15v2H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-2h1v1h1v1h1v-1h1v-1h1v-1h1v-1zm0-6v2H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-2h1v1h1v1h1v-1h1v-1h1v-1h1V9zm0-6v2H7v1H6v1H5v1H4v1H3V8H2V7H1V5h1v1h1v1h1V6h1V5h1V4h1V3z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelCheckListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCheckSolidIcon],svg[pixel-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 5v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-1h1v-1h1V9h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1v1h1v1z"></svg:path>`,
})
export class PixelCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelChevronDownIcon],svg[pixel-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4V9H3V8H2V6h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6z"></svg:path>`,
})
export class PixelChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelChevronDownSolidIcon],svg[pixel-chevron-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V9H1V8h1V7h1V6h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1v1h1v1z"></svg:path>`,
})
export class PixelChevronDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelChevronUpIcon],svg[pixel-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H2v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelChevronUpSolidIcon],svg[pixel-chevron-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelChevronUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCircleNotchIcon],svg[pixel-circle-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h1v1h1v1h-1v1H8v1H6v1H5v2H4v2H3v4h1v2h1v2h1v1h2v1h2v1h4v-1h2v-1h2v-1h1v-2h1v-2h1v-4h-1V8h-1V6h-1V5h-2V4h-2V3h-1V2h1V1h1v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelCircleNotchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCircleNotchSolidIcon],svg[pixel-circle-notch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h1v1h1v2H9v1H7v1H6v1H5v2H4v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V9h-1V7h-1V6h-1V5h-2V4h-2V2h1V1h1v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelCircleNotchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelClipboardIcon],svg[pixel-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5V4h-3V3h-1V2h-1V1h-4v1H9v1H8v1H5v1H4v17h1v1h14v-1h1V5zm-9-2h1V2h2v1h1v2h-1v1h-2V5h-1zM6 6h2v1h8V6h2v15H6z"></svg:path>`,
})
export class PixelClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelClipboardSolidIcon],svg[pixel-clipboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3V2h-1V1h-4v1H9v1H8v3h1v1h6V6h1V3zm-4 3V5h-1V3h1V2h2v1h1v2h-1v1z"></svg:path><svg:path fill="currentColor" d="M20 5v17h-1v1H5v-1H4V5h1V4h2v3h1v1h8V7h1V4h2v1z"></svg:path>`,
})
export class PixelClipboardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelClockIcon],svg[pixel-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1z"></svg:path><svg:path fill="currentColor" d="M16 15v1h-1v1h-1v-1h-1v-1h-1v-1h-1V5h2v8h1v1h1v1z"></svg:path>`,
})
export class PixelClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelClockSolidIcon],svg[pixel-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-9 7v-1h-1v-1h-1V5h2v8h1v1h1v1h1v1h-1v1h-1v-1z"></svg:path>`,
})
export class PixelClockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCloudIcon],svg[pixel-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.505 17.503h-2v2h2zm-5.001 4.001h-2v2h2zm2-4v1h-2v-1h-1v-3.001h1v2h1v1zm-4.001 2v1h-2v-1h-1v-5.001h1v4h1v1.001zm-5.001-5.001v5.001h-1v1h-2v-1h1v-1h1v-4.001zm-3 7.001h-2v2h2zm-1.001-7.001v3h-1v1h-2v-1h1v-1h1v-2zm15.004-7.002v-1h-1v-1h-2v-2h-1.001v-1h-1V1.5h-5.002v1h-1v1h-1v1h-1v-1h-3v1H5.5v1h-1v2.001h-2v1h-1v3.001h1v1h1v1h18.005v-1h1v-1h1v-4zm-8.002 3.001v-1h-1v-2h1v1h1V5.5h1v3h1v-1h1v2h-1v1.001h-1v1h-1v-1zm-4.001-4v1h1v2h-1v-1h-1v3h-1v-3h-1v1h-1v-2h1v-1h1V5.5h1v1zM3.5 17.503h-2v2h2z"></svg:path>`,
})
export class PixelCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCloudDownloadAltIcon],svg[pixel-cloud-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13v2h-1v1h-1v1h-1v1h-1v-1H9v-1H8v-1H7v-2h1v1h1v1h1V9h1v6h1v-1h1v-1z"></svg:path><svg:path fill="currentColor" d="M22 12v-1h-2V9h-1V8h-1V7h-3v1h-1V6h-1V5H8v1H7v1H6v1H5v3H2v1H1v5h1v1h1v1h2v1h14v-1h2v-1h1v-1h1v-5zm0 4h-1v1h-1v1h-2v1H6v-1H4v-1H3v-1H2v-3h1v-1h3V9h1V8h1V7h1V6h3v1h1v2h3V8h1v1h1v1h1v2h2v1h1z"></svg:path>`,
})
export class PixelCloudDownloadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCloudDownloadSolidIcon],svg[pixel-cloud-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v-1h-2V9h-1V8h-1V7h-3v1h-1V6h-1V5H8v1H7v1H6v1H5v3H2v1H1v5h1v1h1v1h2v1h14v-1h2v-1h1v-1h1v-5zM9 17v-1H8v-1H7v-1H6v-1h3V9h3v4h3v1h-1v1h-1v1h-1v1h-1v1h-1v-1z"></svg:path>`,
})
export class PixelCloudDownloadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCloudUploadIcon],svg[pixel-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12v2h-1v-1h-1v-1h-1v6h-1v-6H9v1H8v1H7v-2h1v-1h1v-1h1V9h1v1h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M22 12v-1h-2V9h-1V8h-1V7h-3v1h-1V6h-1V5H8v1H7v1H6v1H5v3H2v1H1v5h1v1h1v1h2v1h14v-1h2v-1h1v-1h1v-5zm0 4h-1v1h-1v1h-2v1H6v-1H4v-1H3v-1H2v-3h1v-1h3V9h1V8h1V7h1V6h3v1h1v2h3V8h1v1h1v1h1v2h2v1h1z"></svg:path>`,
})
export class PixelCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCloudUploadSolidIcon],svg[pixel-cloud-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v-1h-2V9h-1V8h-1V7h-3v1h-1V6h-1V5H8v1H7v1H6v1H5v3H2v1H1v5h1v1h1v1h2v1h14v-1h2v-1h1v-1h1v-5zM9 14H6v-1h1v-1h1v-1h1v-1h1V9h1v1h1v1h1v1h1v1h1v1h-3v4H9z"></svg:path>`,
})
export class PixelCloudUploadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCodeIcon],svg[pixel-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v1H6v1H5v1H4v1H3v2h1v1h1v1h1v1h1v1H5v-1H4v-1H3v-1H2v-1H1v-2h1v-1h1V9h1V8h1V7zm8-4h1v3h-1v3h-1v3h-1v2h-1v3h-1v3h-1v1H9v-3h1v-3h1v-3h1v-2h1V7h1V4h1zm8 8v2h-1v1h-1v1h-1v1h-1v1h-2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-1V7h2v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCodeSolidIcon],svg[pixel-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h1v2h-1v3h-1v3h-1v2h-1v3h-1v3h-1v1H9v-1H8v-2h1v-3h1v-3h1v-2h1V7h1V4h1V3h1zm8 7v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V7h2v1h1v1h1v1h1v1zM7 7v2H6v1H5v1H4v2h1v1h1v1h1v2H5v-1H4v-1H3v-1H2v-1H1v-2h1v-1h1V9h1V8h1V7z"></svg:path>`,
})
export class PixelCodeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCogIcon],svg[pixel-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10V9h-1V7h1V5h-1V4h-1V3h-2v1h-2V3h-1V1h-4v2H9v1H7V3H5v1H4v1H3v2h1v2H3v1H1v4h2v1h1v2H3v2h1v1h1v1h2v-1h2v1h1v2h4v-2h1v-1h2v1h2v-1h1v-1h1v-2h-1v-2h1v-1h2v-4zm0 3h-1v1h-1v1h-1v2h1v2h-2v-1h-2v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H7v1H5v-2h1v-2H5v-1H4v-1H3v-2h1v-1h1V9h1V7H5V5h2v1h2V5h1V4h1V3h2v1h1v1h1v1h2V5h2v2h-1v2h1v1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M16 10V9h-1V8h-1V7h-4v1H9v1H8v1H7v4h1v1h1v1h1v1h4v-1h1v-1h1v-1h1v-4zm-1 4h-1v1h-4v-1H9v-4h1V9h4v1h1z"></svg:path>`,
})
export class PixelCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCogSolidIcon],svg[pixel-cog-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10V9h-1V7h1V5h-1V4h-1V3h-2v1h-2V3h-1V1h-4v2H9v1H7V3H5v1H4v1H3v2h1v2H3v1H1v4h2v1h1v2H3v2h1v1h1v1h2v-1h2v1h1v2h4v-2h1v-1h2v1h2v-1h1v-1h1v-2h-1v-2h1v-1h2v-4zm-11 0V9h4v1h1v4h-1v1h-4v-1H9v-4z"></svg:path>`,
})
export class PixelCogSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCommentIcon],svg[pixel-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-2V3h-3V2H9v1H6v1H4v1H3v1H2v2H1v6h1v2h1v2H2v1H1v2h5v-1h1v-1h2v1h6v-1h3v-1h2v-1h1v-1h1v-2h1V8zm-2 6v2h-2v1h-3v1H9v-1H7v1H6v1H4v-1h1v-2H4v-2H3V8h1V6h2V5h3V4h6v1h3v1h2v2h1v6z"></svg:path>`,
})
export class PixelCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCommentDotsIcon],svg[pixel-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10v2h-1v1h-2v-1h-1v-2h1V9h2v1zm-5 0v2h-1v1h-2v-1h-1v-2h1V9h2v1zm-5 0v2H8v1H6v-1H5v-2h1V9h2v1z"></svg:path><svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-2V3h-3V2H9v1H6v1H4v1H3v1H2v2H1v6h1v2h1v2H2v1H1v2h5v-1h1v-1h2v1h6v-1h3v-1h2v-1h1v-1h1v-2h1V8zm-1 6h-1v2h-2v1h-3v1H9v-1H7v1H6v1H4v-1h1v-2H4v-2H3V8h1V6h2V5h3V4h6v1h3v1h2v2h1z"></svg:path>`,
})
export class PixelCommentDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCommentDotsSolidIcon],svg[pixel-comment-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-2V3h-3V2H9v1H6v1H4v1H3v1H2v2H1v6h1v2h1v2H2v1H1v2h5v-1h1v-1h2v1h6v-1h3v-1h2v-1h1v-1h1v-2h1V8zm-6 5v-1h-1v-2h1V9h2v1h1v2h-1v1zm-6-1v-2h1V9h2v1h1v2h-1v1h-2v-1zM8 9v1h1v2H8v1H6v-1H5v-2h1V9z"></svg:path>`,
})
export class PixelCommentDotsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCommentQuoteIcon],svg[pixel-comment-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v8h-1v1h-3v-1h1v-1h1v-2h-2V7zm-6 0v8h-1v1H7v-1h1v-1h1v-2H7V7z"></svg:path><svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-2V3h-3V2H9v1H6v1H4v1H3v1H2v2H1v6h1v2h1v2H2v1H1v2h5v-1h1v-1h2v1h6v-1h3v-1h2v-1h1v-1h1v-2h1V8zm-2 6v2h-2v1h-3v1H9v-1H7v1H6v1H4v-1h1v-2H4v-2H3V8h1V6h2V5h3V4h6v1h3v1h2v2h1v6z"></svg:path>`,
})
export class PixelCommentQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCommentQuoteSolidIcon],svg[pixel-comment-quote-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-2V3h-3V2H9v1H6v1H4v1H3v1H2v2H1v6h1v2h1v2H2v1H1v2h5v-1h1v-1h2v1h6v-1h3v-1h2v-1h1v-1h1v-2h1V8zM7 15h1v-1h1v-2H7V7h4v8h-1v1H7zm6 0h1v-1h1v-2h-2V7h4v8h-1v1h-3z"></svg:path>`,
})
export class PixelCommentQuoteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCommentSolidIcon],svg[pixel-comment-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8v6h-1v2h-1v1h-1v1h-2v1h-3v1H9v-1H7v1H6v1H1v-2h1v-1h1v-2H2v-2H1V8h1V6h1V5h1V4h2V3h3V2h6v1h3v1h2v1h1v1h1v2z"></svg:path>`,
})
export class PixelCommentSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCommentsIcon],svg[pixel-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16v-5h-1V9h-2V8h-2V7h-3V5h-2V4h-2V3H6v1H4v1H2v2H1v5h1v2H1v4h3v-1h1v-1h4v2h2v1h2v1h6v1h1v1h3v-4h-1v-2zM5 14v1H4v1H3v-2h1v-2H3V7h1V6h2V5h5v1h2v1h1v5h-1v1h-2v1zm16 2h-1v2h1v2h-1v-1h-1v-1h-6v-1h-2v-2h2v-1h2v-2h1V9h2v1h2v1h1z"></svg:path>`,
})
export class PixelCommentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCommentsSolidIcon],svg[pixel-comments-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16v1H4v1H1v-4h1v-2H1V7h1V5h2V4h2V3h5v1h2v1h2v2h1v5h-1v2h-2v1h-2v1z"></svg:path><svg:path fill="currentColor" d="M23 11v5h-1v2h1v4h-3v-1h-1v-1h-6v-1h-2v-1H9v-1h3v-1h2v-1h2v-2h1V7h1v1h2v1h2v2z"></svg:path>`,
})
export class PixelCommentsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCopyIcon],svg[pixel-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20v2h-1v1H3v-1H2V6h1V5h3v15z"></svg:path><svg:path fill="currentColor" d="M16 7V1H8v1H7v16h1v1h13v-1h1V7zm4 10H9V3h5v6h6z"></svg:path><svg:path fill="currentColor" d="M22 5v1h-5V1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCopySolidIcon],svg[pixel-copy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20v2h-1v1H3v-1H2V6h1V5h3v15z"></svg:path><svg:path fill="currentColor" d="M22 7v11h-1v1H8v-1H7V2h1V1h8v6z"></svg:path><svg:path fill="currentColor" d="M22 5v1h-5V1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelCopySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCreditCardIcon],svg[pixel-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm-1 13H3v-7h18zm0-10H3V6h18z"></svg:path><svg:path fill="currentColor" d="M4 15h4v1H4zm6 0h6v1h-6z"></svg:path>`,
})
export class PixelCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCreditCardSolidIcon],svg[pixel-credit-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11v8h1v1h20v-1h1v-8zm3 4h4v1H4zm6 0h6v1h-6zM23 5v3H1V5h1V4h20v1z"></svg:path>`,
})
export class PixelCreditCardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCrownIcon],svg[pixel-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7V6h-2v1h-1v2h1v1h-1v1h-1v1h-2v-1h-1V9h-1V7h-1V6h1V4h-1V3h-2v1h-1v2h1v1h-1v2H9v2H8v1H6v-1H5v-1H4V9h1V7H4V6H2v1H1v2h1v1h1v4h1v3h1v2h1v2h12v-2h1v-2h1v-3h1v-4h1V9h1V7zm-4 7v3h-1v2H7v-2H6v-3H5v-1h1v1h2v-1h1v-1h1v-1h1V9h2v2h1v1h1v1h1v1zv-1h1v1z"></svg:path>`,
})
export class PixelCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCrownSolidIcon],svg[pixel-crown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7v2h-1v1h-1v4h-1v3h-1v2h-1v2H6v-2H5v-2H4v-3H3v-4H2V9H1V7h1V6h2v1h1v2H4v1h1v1h1v1h2v-1h1V9h1V7h1V6h-1V4h1V3h2v1h1v2h-1v1h1v2h1v2h1v1h2v-1h1v-1h1V9h-1V7h1V6h2v1z"></svg:path>`,
})
export class PixelCrownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCrunchbaseIcon],svg[pixel-crunchbase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zM5 10h5v1h1v2H9v-1H6v3h3v-1h2v2h-1v1H5v-1H4v-5h1zm14 7h-4v-1h-1v1h-1V7h2v3h4v1h1v5h-1z"></svg:path><svg:path fill="currentColor" d="M15 12h3v3h-3z"></svg:path>`,
})
export class PixelCrunchbaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelCybersecurityIcon],svg[pixel-cybersecurity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-1v1h1zm-1 1h-1v1h1zm-1 1h-4v1h4zm-4-1h-2v1h2zm-2-1h-1v1h1zm-1-1h-2v1h2zm-2 1h-1v1h1zm-1 1H8v1h2zM8 4H4v1h4zM4 3H3v1h1zM3 2H2v1h1zm0 12H2v2h1zm1 2H3v2h1zm1 2H4v1h1zm2 1H5v1h2zm2 1H7v1h2zm2 1H9v1h2zm2 1h-2v1h2zm2-1h-2v1h2zm2-1h-2v1h2zm2-1h-2v1h2zm1-1h-1v1h1zm1-2h-1v2h1zm1-2h-1v2h1zm1-11h-1v11h1zM2 3H1v11h1z"></svg:path><svg:path fill="currentColor" d="M20 5v1h-4V5h-2V4h-1V3h-2v1h-1v1H8v1H4V5H3v9h1v2h1v2h2v1h2v1h2v1h2v-1h2v-1h2v-1h2v-2h1v-2h1V5zM10 17v-2h1v-3h-1V9h1V8h2v1h1v3h-1v3h1v2z"></svg:path>`,
})
export class PixelCybersecurityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDataScienceIcon],svg[pixel-data-science-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.505 22.505v1h-3v-1h1v-1h1v1zm-4.001 0v1h-3v-1h1v-1h1v1zm-4.001 0v1h-2v-2h1v1zm-4.001-1.001v2h-2v-1h1v-1zm-3 1.001v1H5.5v-1h1v-1h1v1zm-4.002 0v1h-3v-1h1v-1h1v1zm18.005-5.002v3.001h-1v-2h-3.001v2h-1v-2h-3.001v2h-1v-2h-2v2h-1v-2H7.5v2h-1v-2h-3v2h-1v-3zm-3.001-6.001v1h-1v1H6.5v-1h-1v-1h-1v3.001h1v1h1v1h12.003v-1h1v-1h1v-3zM9.502 15.503v-1h6.001v1z"></svg:path><svg:path fill="currentColor" d="M19.504 7.501v1h-1v1H6.5v-1h-1v-1h-1v3.001h1v1h1v1h12.003v-1h1v-1h1v-3zM9.502 11.502v-1h6.001v1z"></svg:path><svg:path fill="currentColor" d="M19.504 3.5v-1h-1v-1H6.5v1h-1v1h-1v3.001h1v1h1v1h12.003v-1h1v-1h1v-3zm-12.003 0v1h10.003v-1h1v1h-1v1H7.5v-1h-1v-1zm2 4.001v-1h6.002v1z"></svg:path>`,
})
export class PixelDataScienceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDiggIcon],svg[pixel-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5h2v2H8zM5 5v3H2v8h5V5zm0 9H4v-4h1zm3-6h2v8H8zm3 0v8h3v1h-3v2h5V8zm2 2h1v4h-1zm4-2v8h3v1h-3v2h5V8zm2 2h1v4h-1z"></svg:path>`,
})
export class PixelDiggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDiscordIcon],svg[pixel-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11V8h-1V6h-1V5h-2V4h-3v1H9V4H6v1H4v1H3v2H2v3H1v7h2v1h2v1h2v-2H6v-1h2v1h1v1h6v-1h1v-1h2v1h-1v2h2v-1h2v-1h2v-7ZM9 15H7v-1H6v-2h1v-1h2v1h1v2H9Zm9-1h-1v1h-2v-1h-1v-2h1v-1h2v1h1Z"></svg:path>`,
})
export class PixelDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDiscourseIcon],svg[pixel-discourse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v14h14v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-5-1v1h1v6h-1v1h-1v1h-1v1h-5v-1H9v1H7v1H5v-1h1v-2h1v-1H6V9h1V8h1V7h1V6h6v1h1v1z"></svg:path>`,
})
export class PixelDiscourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDividerIcon],svg[pixel-divider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18v1H3zm-2 5h22v2H1zm2 6h18v1H3z"></svg:path>`,
})
export class PixelDividerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDividerSolidIcon],svg[pixel-divider-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7H3V6h1V5h16v1h1v1h-1v1H4zm16 10h1v1h-1v1H4v-1H3v-1h1v-1h16zM1 11h22v2H1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelDividerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDownloadIcon],svg[pixel-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10H4V8h2v1h1v1h1v1h1v1h1v1h1V1h2v12h1v-1h1v-1h1v-1h1V9h1V8h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5zM2 21h20v2H2z"></svg:path>`,
})
export class PixelDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDownloadAltIcon],svg[pixel-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-1h-6v-1h1v-1h1v-1h1v-1h-4V2h-1V1h-4v1H9v9H5v1h1v1h1v1h1v1H2v1H1v6h1v1h20v-1h1v-6zm-1 5H3v-4h7v1h1v1h2v-1h1v-1h7zM9 12h2V3h2v9h2v1h-1v1h-1v1h-2v-1h-1v-1H9z"></svg:path><svg:path fill="currentColor" d="M19 19h1v1h-1zm-2 0h1v1h-1z"></svg:path>`,
})
export class PixelDownloadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDownloadAltSolidIcon],svg[pixel-download-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H5v-1h4V2h1V1h4v1h1v9h4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6z"></svg:path><svg:path fill="currentColor" d="M22 16v-1h-5v1h-1v1h-1v1h-1v1h-4v-1H9v-1H8v-1H7v-1H2v1H1v6h1v1h20v-1h1v-6zm-2 4h-1v-1h1zm-2-1v1h-1v-1z"></svg:path>`,
})
export class PixelDownloadAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelDownloadSolidIcon],svg[pixel-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20v3H2zM20 8v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4V8h1V7h2v1h1v1h1v1h1V1h4v9h1V9h1V8h1V7h2v1z"></svg:path>`,
})
export class PixelDownloadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEditIcon],svg[pixel-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v3h-1v1h-1V7h-1V6h2V5h-1V4h-1v2h-1V5h-1V4h1V3h3v1zm-4 10v7h-1v1H2v-1H1V6h1V5h12v1h-1v1H3v13h13v-5h1v-1z"></svg:path><svg:path fill="currentColor" d="M18 8V7h-1V6h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v4h4v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8zm-1 2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h2z"></svg:path>`,
})
export class PixelEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEditSolidIcon],svg[pixel-edit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v3h-1v1h-1V7h-1V6h-1V5h-1V4h1V3h3v1zm-5 10h1v7h-1v1H2v-1H1V6h1V5h12v1h-1v1H3v13h13v-5h1z"></svg:path><svg:path fill="currentColor" d="M18 8h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H7v-4h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1z"></svg:path>`,
})
export class PixelEditSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesHorizontalIcon],svg[pixel-ellipses-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10H5V9H3v1H2v1H1v2h1v1h1v1h2v-1h1v-1h1v-2H6zm-1 3H3v-2h2zm9-3h-1V9h-2v1h-1v1H9v2h1v1h1v1h2v-1h1v-1h1v-2h-1zm-1 3h-2v-2h2zm9-2v-1h-1V9h-2v1h-1v1h-1v2h1v1h1v1h2v-1h1v-1h1v-2zm-3 2v-2h2v2z"></svg:path>`,
})
export class PixelEllipsesHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesHorizontalCircleIcon],svg[pixel-ellipses-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11v2h-1v1h-2v-1h-1v-2h1v-1h2v1zm5 0v2h-1v1h-2v-1h-1v-2h1v-1h2v1zM9 11v2H8v1H6v-1H5v-2h1v-1h2v1z"></svg:path><svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-2 6v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1v6z"></svg:path>`,
})
export class PixelEllipsesHorizontalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesHorizontalCircleSolidIcon],svg[pixel-ellipses-horizontal-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-9 1v1h1v2h-1v1h-2v-1h-1v-2h1v-1zm-8 1h1v-1h2v1h1v2H8v1H6v-1H5zm14 2h-1v1h-2v-1h-1v-2h1v-1h2v1h1z"></svg:path>`,
})
export class PixelEllipsesHorizontalCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesHorizontalSolidIcon],svg[pixel-ellipses-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h1v2h-1v1h-1v1h-2v-1h-1v-1H9v-2h1v-1h1V9h2v1h1zm-8 0h1v2H6v1H5v1H3v-1H2v-1H1v-2h1v-1h1V9h2v1h1zm17 0v2h-1v1h-1v1h-2v-1h-1v-1h-1v-2h1v-1h1V9h2v1h1v1z"></svg:path>`,
})
export class PixelEllipsesHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesVerticalIcon],svg[pixel-ellipses-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18h-1v-1h-2v1h-1v1H9v2h1v1h1v1h2v-1h1v-1h1v-2h-1zm-1 3h-2v-2h2zm1-11h-1V9h-2v1h-1v1H9v2h1v1h1v1h2v-1h1v-1h1v-2h-1zm-1 3h-2v-2h2zm1-10V2h-1V1h-2v1h-1v1H9v2h1v1h1v1h2V6h1V5h1V3zm-3 2V3h2v2z"></svg:path>`,
})
export class PixelEllipsesVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesVerticalCircleIcon],svg[pixel-ellipses-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10h2v1h1v2h-1v1h-2v-1h-1v-2h1zm0-5h2v1h1v2h-1v1h-2V8h-1V6h1zm0 10h2v1h1v2h-1v1h-2v-1h-1v-2h1z"></svg:path><svg:path fill="currentColor" d="M9 2H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9zm6 2h2v1h2v2h1v2h1v6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6z"></svg:path>`,
})
export class PixelEllipsesVerticalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesVerticalCircleSolidIcon],svg[pixel-ellipses-vertical-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9zm1 9h1v-1h2v1h1v2h-1v1h-2v-1h-1zm1 8v-1h-1v-2h1v-1h2v1h1v2h-1v1zm2-14v1h1v2h-1v1h-2V8h-1V6h1V5z"></svg:path>`,
})
export class PixelEllipsesVerticalCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesVerticalSolidIcon],svg[pixel-ellipses-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2h-1v1h-1v1h-2V6h-1V5H9V3h1V2h1V1h2v1h1v1zm-1 8h1v2h-1v1h-1v1h-2v-1h-1v-1H9v-2h1v-1h1V9h2v1h1zm0 8h1v2h-1v1h-1v1h-2v-1h-1v-1H9v-2h1v-1h1v-1h2v1h1z"></svg:path>`,
})
export class PixelEllipsesVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEnvelopeIcon],svg[pixel-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5V4H3v1H1v14h1v1h20v-1h1V5zm-11 7v-1H9v-1H8V9H7V8H6V7H5V6h14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1zM4 7v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1v11H3V7z"></svg:path>`,
})
export class PixelEnvelopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEnvelopeSolidIcon],svg[pixel-envelope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8V9H7V8H6V7H5V6H4V5H3V4z"></svg:path><svg:path fill="currentColor" d="M23 5v14h-1v1H2v-1H1V5h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5z"></svg:path>`,
})
export class PixelEnvelopeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelExclaimationIcon],svg[pixel-exclaimation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h-1V1h4v8h-1v6h-2zm4 10v1h-1v1h-1v1h-2v-1h-1v-1H9v-1h1v-1h1v-1h2v1h1v1z"></svg:path>`,
})
export class PixelExclaimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelExclaimationSolidIcon],svg[pixel-exclaimation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18v3h-1v1h-1v1h-4v-1H9v-1H8v-3h1v-1h1v-1h4v1h1v1zM10 8H9V1h6v7h-1v6h-4z"></svg:path>`,
})
export class PixelExclaimationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelExclamationTriangleIcon],svg[pixel-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11v3h-1v3h-2v-3h-1v-3zm-3 7h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M22 20v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1V8h-1V6h-1V4h-1V2h-1V1h-2v1h-1v2H9v2H8v2H7v2H6v2H5v2H4v2H3v2H2v2H1v2h1v1h20v-1h1v-2zM3 21v-1h1v-2h1v-2h1v-2h1v-2h1v-2h1V8h1V6h1V4h2v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1z"></svg:path>`,
})
export class PixelExclamationTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelExclamationTriangleSolidIcon],svg[pixel-exclamation-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1V8h-1V6h-1V4h-1V2h-1V1h-2v1h-1v2H9v2H8v2H7v2H6v2H5v2H4v2H3v2H2v2H1v2h1v1h20v-1h1v-2zm-12-9h4v3h-1v3h-2v-3h-1zm1 7h2v2h-2z"></svg:path>`,
})
export class PixelExclamationTriangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelExpandIcon],svg[pixel-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v2H3v6H1V2h1V1zm0 20v2H2v-1H1v-7h2v6zm14-6v7h-1v1h-7v-2h6v-6zm0-13v7h-2V3h-6V1h7v1z"></svg:path>`,
})
export class PixelExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelExpandSolidIcon],svg[pixel-expand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v3H2v-1H1v-7h3v5zM9 1v3H4v5H1V2h1V1zm14 14v7h-1v1h-7v-3h5v-5zm0-13v7h-3V4h-5V1h7v1z"></svg:path>`,
})
export class PixelExpandSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelExternalLinkIcon],svg[pixel-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15v7h-1v1H2v-1H1V5h1V4h9v2H3v15h15v-6z"></svg:path><svg:path fill="currentColor" d="M23 1v8h-2V5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H7v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h-4V1z"></svg:path>`,
})
export class PixelExternalLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelExternalLinkSolidIcon],svg[pixel-external-link-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1v8h-2V8h-1V7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v-1H7v-1H6v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h-1V3h-1V1z"></svg:path><svg:path fill="currentColor" d="M20 15v7h-1v1H2v-1H1V5h1V4h9v3H4v13h13v-5z"></svg:path>`,
})
export class PixelExternalLinkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEyeIcon],svg[pixel-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h1v2h-1zm0 2v2h-1v1h-2v-1h1v-1h1v-1zm0-4v2h-1v-1h-1V9h-1V8h2v1zm-5 7h2v1h-2zm0-1v1H9v-1H8v-2h1v1h1v1zm2-8v1h-1v3h-1v1H8v1H7v-2h1V9h1V8h2V7z"></svg:path><svg:path fill="currentColor" d="M22 11V9h-1V8h-1V7h-1V6h-2V5H7v1H5v1H4v1H3v1H2v2H1v2h1v2h1v1h1v1h1v1h2v1h10v-1h2v-1h1v-1h1v-1h1v-2h1v-2zm-1 3h-1v1h-1v1h-1v1h-2v1H8v-1H7v-1H5v-1H4v-1H3v-4h1V9h1V8h1V7h2V6h8v1h2v1h1v1h1v1h1z"></svg:path>`,
})
export class PixelEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEyeCrossIcon],svg[pixel-eye-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h1v2h-1v1h-2v-1h1v-1h1zm1-2h1v2h-1z"></svg:path><svg:path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h7v-1h2v-1h1v-1h1v-1h1v-4h-1V9h-1V8h2v1h1v2zM2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1H8v1H6v1H5v1H4v1H3v4h1v1h1v1H3v-1H2z"></svg:path><svg:path fill="currentColor" d="M13 7v1h-1v1h-1v1h-1v1H9v1H8v1H7v-2h1V9h1V8h2V7zM9 17H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm2-1h2v1h-2z"></svg:path>`,
})
export class PixelEyeCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEyeCrossSolidIcon],svg[pixel-eye-cross-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1h-1v1h-1V6h-2v1H9v1H8v1H7v2H6v2h1v1H6v1H5v1H3v-1H2z"></svg:path><svg:path fill="currentColor" d="M8 11h1v1H8zm3-3h1v1h-1zm-2 9H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm3-2h1v1h-1zm1-1h1v1h-1zm2-2h1v1h-1zm-1 1h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h1v-1h1v1h2v-1h2v-1h1v-1h1v-2h1v-2h-1v-1h1V9h1V8h2v1h1v2z"></svg:path>`,
})
export class PixelEyeCrossSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelEyeSolidIcon],svg[pixel-eye-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11v2h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-2h2v-1h1V8h2v1h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M22 11V9h-1V8h-1V7h-1V6h-2V5H7v1H5v1H4v1H3v1H2v2H1v2h1v2h1v1h1v1h1v1h2v1h10v-1h2v-1h1v-1h1v-1h1v-2h1v-2zm-4 2h-1v2h-1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-2H6v-2h1V9h1V8h1V7h2V6h2v1h2v1h1v1h1v2h1z"></svg:path>`,
})
export class PixelEyeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFaceThinkingIcon],svg[pixel-face-thinking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7h1v1h-2V7h-1V6H8v1H6V6h1V5h4v1h1zm1 6v1h-3v-1H8v-1h3v1zM8 8h2v2H8zm6 1h2v2h-2zm5-1v2h-1V9h-1V8h-2V7h3v1zm-5 7v2h-1v1h-2v2h-1v2H9v1H5v-1H4v-6h1v-1h1v3h2v-1h2v-1h2v-1z"></svg:path><svg:path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1h-4v-2h4v-1h2v-1h1v-1h1v-1h1v-2h1V9h-1V7h-1V6h-1V5h-1V4h-2V3H9v1H7v1H6v1H5v1H4v2H3v5h1v1H3v1H2v-1H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelFaceThinkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFaceThinkingSolidIcon],svg[pixel-face-thinking-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20h-1v2H9v1H5v-1H4v-6h1v-1h1v3h2v-1h2v-1h2v-1h2v2h-1v1h-2z"></svg:path><svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v1h1v-1h1v-1h3v2h2v-1h2v-1h-1v-1H8v-1h3v1h2v1h2v4h-1v1h-2v2h-1v2h4v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-7-2h3v1h1v2h-1V9h-1V8h-2zm-1 2h2v2h-2zm-4 1H8V8h2zm1-2V7h-1V6H8v1H6V6h1V5h4v1h1v1h1v1z"></svg:path>`,
})
export class PixelFaceThinkingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFacebookRoundIcon],svg[pixel-facebook-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1h-1v-8h2v-1h1v-2h-3V9h1V8h2V5h-4v1h-2v2h-1v4H7v3h3v8H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelFacebookRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFacebookSquareIcon],svg[pixel-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v20h-1v1h-8v-8h2v-1h1v-2h-3V9h1V8h2V5h-4v1h-2v2h-1v4H7v3h3v8H2v-1H1V2h1V1h20v1z"></svg:path>`,
})
export class PixelFacebookSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFigmaIcon],svg[pixel-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3.5v-1h-1v-1H7v1H6v1H5v3h1v1h1v2H6v1H5v3h1v1h1v2H6v1H5v3h1v1h1v1h5v-1h1v-6h4v-1h1v-1h1v-3h-1v-1h-1v-2h1v-1h1v-3zm-7 18H8v-1H7v-3h1v-1h3zm0-7H8v-1H7v-3h1v-1h3zm0-7H8v-1H7v-3h1v-1h3zm6 3v3h-1v1h-2v-1h-1v-3h1v-1h2v1zm-1-4v1h-3v-5h3v1h1v3z"></svg:path>`,
})
export class PixelFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFileImportIcon],svg[pixel-file-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15v-2h11V8h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-5z"></svg:path><svg:path fill="currentColor" d="M23 6v16h-1v1H7v-1H6v-6h2v5h13V8h-5V3H8v9H6V2h1V1h11v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelFileImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFileImportSolidIcon],svg[pixel-file-import-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13h5v3H1zm22-5v14h-1v1H7v-1H6v-6h6v4h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9h-1v4H6V2h1V1h9v7z"></svg:path><svg:path fill="currentColor" d="M23 6v1h-6V1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelFileImportSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFilterIcon],svg[pixel-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v4h1v1h1v1h1v1h1v1h1v1h1v1h1v2h1v3h1v1h1v1h1v1h1v1h1v1h1v-8h1v-2h1v-1h1v-1h1V9h1V8h1V7h1V6h1V2zm20 3h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v3h-1v3h-1v-1h-1v-2h-1v-3H9v-1H8V9H7V8H6V7H5V6H4V5H3V4h18z"></svg:path>`,
})
export class PixelFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFilterAltCircleIcon],svg[pixel-filter-alt-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1z"></svg:path><svg:path fill="currentColor" d="M10 15h4v2h-4zm-2-4h8v2H8zM6 7h12v2H6z"></svg:path>`,
})
export class PixelFilterAltCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFilterAltCircleSolidIcon],svg[pixel-filter-alt-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-8 8h-4v-2h4zm-6-4v-2h8v2zM6 9V7h12v2z"></svg:path>`,
})
export class PixelFilterAltCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFilterSolidIcon],svg[pixel-filter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v2h-1v8h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-3H8v-2H7v-1H6v-1H5V9H4V8H3V7H2V6H1V2z"></svg:path>`,
})
export class PixelFilterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFinanceIcon],svg[pixel-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.502 13.503v1h3v3h-2v1.001h-1v-1h-1v-1h3v-1h-3v-3.001h2v-1h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M18.504 12.503v-2h-1V9.501h-1v-1h-1v-1H5.5v1h-1v1h-1v1h-1v2h-1v6.002h1v2h1v1h1v1h1v1.001h10.003v-1h1v-1h1v-1h1v-2.001h1.001v-6.001zm-10.002-2V9.501h4v1h2.001v2h1v5.002h-1v2h-2v1H8.502v-1h-2v-2H5.5v-5.001h1v-2zm9.002-4.002h-1v1h1zm2 1h-2v1h2zm1 1h-1v1h1zm1.001-3v3h-1v-2h-1.001v-1zM19.504 4.5h-3v1h3zm-3.001 1.001h-1v1h1zm-2 0H6.5v1h8.002zM16.504 1.5v1h-1v1h-1.001v1H6.501v-1h-1v-1h-1v-1h2v1h3v-1h2.001v1h3.001v-1z"></svg:path>`,
})
export class PixelFinanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFireIcon],svg[pixel-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v-3h-1V9h-1V6h-1V4h-1V3h-1V2h-1V1h-2v1h1v2h-1v2h-1v1H9v1H8v1H7v1H6v3h1v2H6v-1H5v-2H4v2H3v3h1v2h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-2h1v-5zm-3 7v1h-2v1h-4v-1H9v-3h1v-1h1v-1h1v-1h1v-4h1v2h1v4h-1v2h1v-1h1v-1h1v3zm3-3h-1v-1h-2v-4h-1v-2h-1V9h-3v1h1v4h-1v1h-1v1H9v1H8v3H7v-1H6v-1H5v-2h3v-4H7v-1h1v-1h1V9h1V8h1V7h1V5h1V4h1v1h1v2h1v3h1v1h1v3h1z"></svg:path>`,
})
export class PixelFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFireSolidIcon],svg[pixel-fire-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v-3h-1V9h-1V6h-1V4h-1V3h-1V2h-1V1h-2v1h1v2h-1v2h-1v1H9v1H8v1H7v1H6v3h1v2H6v-1H5v-2H4v2H3v3h1v2h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-2h1v-5zm-2 7h-1v1h-2v1h-4v-1H9v-4h1v-1h1v-1h1v-1h1v-3h-1v-1h-1V9h1v1h2v2h1v5h-1v2h1v-1h1v-1h1z"></svg:path>`,
})
export class PixelFireSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFlagIcon],svg[pixel-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v1h-2v1h-6V5H6v1H5V5h1V3H5V2H3v1H2v2h1v17h2v-4h1v-1h7v1h6v-1h2v-1h1V4zm-1 11h-1v1h-6v-1H6v1H5V8h1V7h7v1h6V7h1z"></svg:path>`,
})
export class PixelFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFlagCheckeredIcon],svg[pixel-flag-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v1h-2v1h-6V5H6v1H5V5h1V3H5V2H3v1H2v2h1v17h2v-4h1v-1h7v1h6v-1h2v-1h1V4zm-9 11H6v1H5v-3h1v-1h6zm0-5H6v1H5V8h1V7h6zm8 5h-1v1h-5v-3h5v-1h1zm0-5h-1v1h-5V8h5V7h1z"></svg:path>`,
})
export class PixelFlagCheckeredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFlagCheckeredSolidIcon],svg[pixel-flag-checkered-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v12h-1v1h-2v1h-6v-1H6v-1h6v-4H6v1H5v4h1v1H5v4H3V5H2V3h1V2h2v1h1v2H5v1h1V5h7v1h6v1h-5v4h5v-1h2V6h-2V5h2V4z"></svg:path>`,
})
export class PixelFlagCheckeredSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFlagSolidIcon],svg[pixel-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v12h-1v1h-2v1h-6v-1H6v1H5v4H3V5H2V3h1V2h2v1h1v2H5v1h1V5h7v1h6V5h2V4z"></svg:path>`,
})
export class PixelFlagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFolderIcon],svg[pixel-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V5h-9V4h-1V3h-1V2H2v1H1v18h1v1h20v-1h1V6zm-1 14H3V4h7v1h1v1h1v1h9z"></svg:path>`,
})
export class PixelFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFolderOpenIcon],svg[pixel-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10v2H5v2H4v2H3v2H2v3h1v1h15v-1h1v-3h1v-2h1v-2h1v-2h1v-2zm14 4h-1v2h-1v2h-1v2H4v-2h1v-2h1v-2h1v-2h13z"></svg:path><svg:path fill="currentColor" d="M20 5v4h-2V6H9V5H8V4H3v10H2v2H1V3h1V2h7v1h1v1h9v1z"></svg:path>`,
})
export class PixelFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFolderOpenSolidIcon],svg[pixel-folder-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16H1V3h1V2h7v1h1v1h9v1h1v4H5v1H4v2H3v2H2z"></svg:path><svg:path fill="currentColor" d="M23 10v2h-1v2h-1v2h-1v2h-1v3h-1v1H3v-1H2v-3h1v-2h1v-2h1v-2h1v-2z"></svg:path>`,
})
export class PixelFolderOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFolderSolidIcon],svg[pixel-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v15h-1v1H2v-1H1V3h1V2h9v1h1v1h1v1h9v1z"></svg:path>`,
})
export class PixelFolderSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelFuturismIcon],svg[pixel-futurism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.505 17.503v2h-1v1.001h-6.002v1h-1v1h-1v1h-4.001v-1h-1v-1h-1v-1H2.5v-1h-1v-2zm0-2v1h-2v-2h1v1zm-3.001-7.001v8.001h-1v-4h-1v-1h-3v-1.001h3v-1h-3v-2h-1.001v-1h-1V5.5h-1v-2h1v-2h1v1h1v1h1v1h1v3.001h2.001v1zm-14.003 4v4.001H1.5v-1h1v-2h1v-1z"></svg:path><svg:path fill="currentColor" d="M18.504 12.503v4H7.5v-4h-1v-1h-2V4.5h1v-3h3v14.003h1V3.5h1.001v1h1v1h1v1.001h1v1h1.001v8.002h1v-3z"></svg:path>`,
})
export class PixelFuturismIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGamingIcon],svg[pixel-gaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.503 13.502H9.502v2h6.001z"></svg:path><svg:path fill="currentColor" d="M22.505 10.501v-2h-1v-2h-1v-1h-1V4.5h-4.002v1H9.502v-1H5.5v1h-1v1h-1v2h-1v2.001h-1v8.002h1v1h3v-1h1.001v-1h1v-1h1v-3.001h1v-1h6.002v1h1v3h1v1.001h1v1h1.001v1h3v-1h1.001v-8.002zm-17.004-2v-1h1v-1h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1zm8.002 1h-1v1h-1v-1h-1.001v-1h1v-1h1v1h1zm7.001 1h-2v2h-2v-2h-2.001v-2h2v-2h2v2h2.001z"></svg:path><svg:path fill="currentColor" d="M18.504 8.501h-2v2h2z"></svg:path>`,
})
export class PixelGamingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGiphyIcon],svg[pixel-giphy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h1v14H3V1h9v1h-1v1H5v18h14V10h1z"></svg:path><svg:path fill="currentColor" d="M21 6v2h-8V1h2v2h3v3z"></svg:path>`,
})
export class PixelGiphyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGithubIcon],svg[pixel-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGlobeIcon],svg[pixel-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v7h1v1h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 1v4h-3v-4zm-5-6h1v1h2v2h1v1h-3V5h-1zm-2 14v2h-1v1h-2v-1h-1v-2H9v-2h6v2zm2-8v4H8v-4zM9 6h1V4h1V3h2v1h1v2h1v2H9zM4 7h1V5h2V4h1v1H7v3H4zm-1 7v-4h3v4zm2 5v-2H4v-1h3v3h1v1H7v-1zm14-2v2h-2v1h-1v-1h1v-3h3v1z"></svg:path>`,
})
export class PixelGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGlobeAmericasIcon],svg[pixel-globe-americas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zM9 21v-1H7v-1H5v-2H4v-2H3v-4h1v1h1v1h1v1h2v3h1v1h1v3zm6-2h-1v2h-2v-3h-1v-1h-1v-3H9v-1H8v-1H7v-1H6v-1H5V9H4V7h1V6h1V5h1V4h3V3h2v1h1v4h-2v3h-1v-1H8v2h3v1h4v1h1v3h-1zm5-2h-1v2h-2v1h-1v-1h1v-2h1v-3h-1v-1h-1v-1h-1v-1h-2V9h1V8h1V4h-1V3h1v1h2v1h2v2h-1v1h-1v1h-1v3h1v1h1v1h1v1h1zm1-4h-2v-1h-1V9h1V8h1v1h1z"></svg:path>`,
})
export class PixelGlobeAmericasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGlobeAmericasSolidIcon],svg[pixel-globe-americas-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-4 3V9h1V8h1v1h1v4h-2v-1zm-4 7v2h-2v-3h-1v-1h-1v-3H9v-1H8v-1H7v-1H6v-1H5V9H4V7h1V6h1V5h1V4h3V3h2v1h1v4h-2v2h1v1h-2v-1H8v2h3v1h4v1h1v3h-1v2z"></svg:path>`,
})
export class PixelGlobeAmericasSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGlobeSolidIcon],svg[pixel-globe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h1v1H9zm0 1v1H8v2H7v3H2V7h1V5h1V4h1V3h2V2zm4 0h1v2h1v2h1v2H8V6h1V4h1V2h1V1h2zm1-1h1v1h-1zm8 6v1h-5V5h-1V3h-1V2h2v1h2v1h1v1h1v2zm-5 3v4h-1v1H8v-1H7v-4h1V9h8v1zM1 9h6v1H6v4h1v1H1zm22 0v6h-6v-1h1v-4h-1V9zm-1 7v1h-1v2h-1v1h-1v1h-2v1h-2v-1h1v-2h1v-3zM9 22h1v1H9zm0-1v1H7v-1H5v-1H4v-1H3v-2H2v-1h5v3h1v2zm5 1h1v1h-1zm0 0h-1v1h-2v-1h-1v-2H9v-2H8v-2h8v2h-1v2h-1z"></svg:path>`,
})
export class PixelGlobeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGoldenIcon],svg[pixel-golden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9h1v1H6z"></svg:path><svg:path fill="currentColor" d="M23 9v6h-1v1h-1v2h-1v1h-1v1h-1v1h-2v1h-2v1h-4v-1H8v-1H6v-1H5v-1H4v-8h1v2h1v2h1v1h2v1h5v-1h2v-1h1v-1h1v-2h1v-1h1V5h1v2h1v2z"></svg:path><svg:path fill="currentColor" d="M5 10h1v1H5zm11 1h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M4 10H3v7H2v-3H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h1v1h1v6h-1v1h-1V8h-2V7H7v1H5v1H4z"></svg:path>`,
})
export class PixelGoldenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGoogleIcon],svg[pixel-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10v5h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v2h-1v1h-1v1h-2V6H9v1H7v2H6v6h1v2h2v1h6v-1h2v-2h1v-1h-6v-4z"></svg:path>`,
})
export class PixelGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGoogleNewsIcon],svg[pixel-google-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V9H4v1H3v11h1v1h16v-1h1V10zm-7 3h5v1h-5zm-2 5h-1v1H6v-1H5v-4h1v-1h4v1H7v1H6v2h1v1h2v-1h1v-1H8v-1h3zm7 0h-5v-1h5zm-5-2v-1h6v1z"></svg:path><svg:path fill="currentColor" d="M23 8v4h-1V9h-1V8h-5V6h3v1h3v1zm-8-5h-5v1H7v1H5V3h1V2h12v1h1v2h-4z"></svg:path><svg:path fill="currentColor" d="M14 6h1v2H3v1H2v3H1V8h1V7h3V6h3V5h3V4h3z"></svg:path>`,
})
export class PixelGoogleNewsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGridIcon],svg[pixel-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13H2v1H1v8h1v1h8v-1h1v-8h-1zm-1 8H3v-6h6zm1-19V1H2v1H1v8h1v1h8v-1h1V2zM3 9V3h6v6zm19 4h-8v1h-1v8h1v1h8v-1h1v-8h-1zm-1 8h-6v-6h6zm1-19V1h-8v1h-1v8h1v1h8v-1h1V2zm-1 7h-6V3h6z"></svg:path>`,
})
export class PixelGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelGridSolidIcon],svg[pixel-grid-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h1v8h-1v1H2v-1H1v-8h1v-1h8zm0-12h1v8h-1v1H2v-1H1V2h1V1h8zm12 12h1v8h-1v1h-8v-1h-1v-8h1v-1h8zm1-12v8h-1v1h-8v-1h-1V2h1V1h8v1z"></svg:path>`,
})
export class PixelGridSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelH1Icon],svg[pixel-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18v2h-9v-2h4V6h-1v1h-1v1h-2V6h1V5h1V4h4v14zM12 4v16h-2v-8H3v8H1V4h2v6h7V4z"></svg:path>`,
})
export class PixelH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelH2Icon],svg[pixel-h2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v16h-2v-8H3v8H1V4h2v6h7V4zm11 2v5h-1v1h-1v2h-1v1h-1v1h-1v1h-1v1h6v2h-9v-3h1v-1h1v-1h1v-1h1v-1h1v-2h1v-1h1V7h-1V6h-3v1h-1v3h-2V6h1V5h1V4h5v1h1v1z"></svg:path>`,
})
export class PixelH2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelH3Icon],svg[pixel-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v5h-1v2h1v5h-1v1h-1v1h-5v-1h-1v-1h-1v-4h2v3h1v1h3v-1h1v-3h-1v-1h-1v-2h1v-1h1V7h-1V6h-3v1h-1v3h-2V6h1V5h1V4h5v1h1v1zM12 4v16h-2v-8H3v8H1V4h2v6h7V4z"></svg:path>`,
})
export class PixelH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHackernoonIcon],svg[pixel-hackernoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6H3v3h2zM3 9H1v6h2zm2 6H3v3h2zm12 3v5H5v-5h3v2h6v-2zm2-3h-2v3h2zm4-4v2h-2v2h-2V9h2v2zm-4-5h-2v3h2zm-2-5v5h-3V4h-2v9h-2V4H8v2H5V1z"></svg:path>`,
})
export class PixelHackernoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHackernoonPurcatIcon],svg[pixel-hackernoon-purcat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 6.501h-2v3h2zm-2 3.001h-2v6.001h2zm2 6.001h-2v3h2zm12.004 3.001v5.001H5.5v-5.001h3v2h6.002v-2zm2-3.001h-2v3h2zm4.001-4.001v2h-2v2.001h-2V9.502h2v2zm-4.001-5.001h-2v3h2zm-2-5.001v5.001h-3.001v-2h-2v9.002h-2.001V4.5h-2v2H5.5v-5z"></svg:path>`,
})
export class PixelHackernoonPurcatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHeading1SolidIcon],svg[pixel-heading-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v16H9v-7H4v7H1V4h3v6h5V4zm11 13v3h-9v-3h3V8h-1v1h-2V6h1V5h1V4h4v13z"></svg:path>`,
})
export class PixelHeading1SolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHeading2SolidIcon],svg[pixel-heading-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4h3v16H9v-7H4v7H1V4h3v6h5zm14 2v5h-1v1h-1v2h-1v1h-1v1h-1v1h5v3h-9v-3h1v-1h1v-2h1v-1h1v-2h1v-1h1V7h-3v3h-3V6h1V5h1V4h5v1h1v1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelHeading2SolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHeading3SolidIcon],svg[pixel-heading-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h1v5h-1v1h-1v1h-5v-1h-1v-1h-1v-4h3v3h3v-3h-1v-1h-1v-2h1v-1h1V7h-3v3h-3V6h1V5h1V4h5v1h1v1h1v5h-1zM9 4h3v16H9v-7H4v7H1V4h3v6h5z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelHeading3SolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHeadphonesIcon],svg[pixel-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V6h-1V5h-1V4h-1V3h-2V2H8v1H6v1H5v1H4v1H3v1H2v2H1v11h1v2h1v1h3v-1h1v-9H6v-1H3v2H2v-4h1V8h1V7h1V6h1V5h1V4h2V3h6v1h2v1h1v1h1v1h1v1h1v2h1v4h-1v-2h-3v1h-1v9h1v1h3v-1h1v-2h1V9zM3 15h1v-1h1v7H4v-1H3zm18 5h-1v1h-1v-7h1v1h1z"></svg:path>`,
})
export class PixelHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHeadphonesSolidIcon],svg[pixel-headphones-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v11h-1v2h-1v1h-3v-1h-1v-9h1v-1h3v2h1v-4h-1V8h-1V7h-1V6h-1V5h-1V4h-2V3H9v1H7v1H6v1H5v1H4v1H3v2H2v4h1v-2h3v1h1v9H6v1H3v-1H2v-2H1V9h1V7h1V6h1V5h1V4h1V3h2V2h8v1h2v1h1v1h1v1h1v1h1v2z"></svg:path>`,
})
export class PixelHeadphonesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHeartIcon],svg[pixel-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V5h-1V4h-1V3h-6v1h-1v1h-2V4h-1V3H4v1H3v1H2v1H1v5h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V6zm-2 4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3V7h1V6h1V5h4v1h1v1h1v1h2V7h1V6h1V5h4v1h1v1h1v3z"></svg:path>`,
})
export class PixelHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHeartSolidIcon],svg[pixel-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1V6h1V5h1V4h1V3h6v1h1v1h2V4h1V3h6v1h1v1h1v1z"></svg:path>`,
})
export class PixelHeartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHighlightIcon],svg[pixel-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v8H11V1H9v10h1v2h1v2h1v6H1v2h19v-8h1v-2h1v-2h1V1zm-3 20h-4v-4h4zm2-8h-1v2h-6v-2h-1v-2h8z"></svg:path>`,
})
export class PixelHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHighlightSolidIcon],svg[pixel-highlight-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1v7h-8V1H9v10h1v2h1v2h1v5H1v3h19v-8h1v-2h1v-2h1V1zm-2 19h-4v-3h4zm1-7h-1v2h-4v-2h-1v-2h6z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelHighlightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHockeyMaskIcon],svg[pixel-hockey-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h1v2h-1zm-1 2h1v1h-1zm-2 1h2v1h-2zm-1-1h1v1h-1zm0-3h4v1h-4zm-1-4h2v2h-2zm0 15h1v1h-1zm0-3h1v1h-1zm0-3h1v1h-1zm0-4h1v2h-1zm-2-3h2v2h-2zm-1 13h1v1h-1zm0-3h1v1h-1zm0-3h1v1h-1zm0-4h1v2h-1zm-1 2h1v1H9zm0-7h2v2H9zm-2 8h2v1H7zm-1-1h1v1H6z"></svg:path><svg:path fill="currentColor" d="M20 6V5h-1V4h-1V3h-1V2h-2V1H9v1H7v1H6v1H5v1H4v1H3v12h1v1h1v1h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-1h1v-1h1V6zm0 10h-1v2h-1v1h-1v1h-1v1h-2v1h-4v-1H8v-1H7v-1H6v-1H5v-2H4V8h1V6h1V5h1V4h1V3h2V2h4v1h2v1h1v1h1v1h1v2h1z"></svg:path><svg:path fill="currentColor" d="M6 8h4v1H6zM5 9h1v2H5z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelHockeyMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHockeyMaskSolidIcon],svg[pixel-hockey-mask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6V5h-1V4h-1V3h-1V2h-2V1H9v1H7v1H6v1H5v1H4v1H3v12h1v1h1v1h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-1h1v-1h1V6zM10 19h1v1h-1zm1-5h-1v-1h1zm0 2v1h-1v-1zm2 4v-1h1v1zm1-6h-1v-1h1zm0 2v1h-1v-1zm4-7v2h-1v1h-2v-1h-1V9zM9 4h2v2h2V4h2v2h-2v2h-2V6H9zM6 9h4v2H9v1H7v-1H6z"></svg:path>`,
})
export class PixelHockeyMaskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHomeIcon],svg[pixel-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v1h3v10h1v1h4v-7h6v7h4v-1h1V12h3v-1zm-3 0h-1v10h-1v-6h-1v-1H8v1H7v6H6V11H5v-1h1V9h1V8h1V7h1V6h1V5h1V4h2v1h1v1h1v1h1v1h1v1h1v1h1z"></svg:path>`,
})
export class PixelHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHomeSolidIcon],svg[pixel-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v1h-3v10h-1v1h-4v-7H9v7H5v-1H4V12H1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelHomeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelHuggingfaceIcon],svg[pixel-huggingface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h1v1h-1zm-1 1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm0-2h1v1h-1zm-1 1h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M19 19v1h-5v-3h1v-1h1v1h1v1h1v1zm3-4h1v5h-1zm-1-7h1v7h-1zm-1 12h2v1h-2zm0-14h1v2h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm-2-1h2v1h-2zm-2 18h6v1h-6zm-4-1h4v1h-4zM8 2h8v1H8zM7 15h1v1H7zM6 3h2v1H6zm0 13h1v1H6zm0-2h1v1H6z"></svg:path><svg:path fill="currentColor" d="M10 17v3H5v-1h1v-1h1v-1h1v-1h1v1z"></svg:path><svg:path fill="currentColor" d="M5 17h1v1H5zm0-2h1v1H5zM5 4h1v1H5zM4 21h6v1H4zm0-3h1v1H4zm0-2h1v1H4zm0-2h1v1H4zm15-5V7h-1V6h-1V5h-2V4H9v1H7v1H6v1H5v2H4v4h3v1h1v1h1v1h1v1h1v2h2v-2h1v-1h1v-1h1v-1h1v-1h3V9zM7 10H6V9h1zm1 0V8h2v1H9v1zm7 3h-1v1h-1v-1h-2v1h-1v-1H9v-2h1v1h4v-1h1zm1-3h-1V9h-1V8h2zm2 0h-1V9h1zM4 5h1v1H4zM2 20h2v1H2zm1-3h1v1H3zm0-2h1v1H3zm0-9h1v2H3zM2 8h1v7H2zm-1 7h1v5H1z"></svg:path>`,
})
export class PixelHuggingfaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelImageIcon],svg[pixel-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v3H8v1H5V9H4V6h1V5h3v1z"></svg:path><svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-5 12v1h1v1h1v1h1v1h1v3H8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1zm3 1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v-1H6v-1H5v-1H4v-1H3V3h18v12zM5 18v1h1v1h1v1H3v-4h1v1z"></svg:path>`,
})
export class PixelImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelImageSolidIcon],svg[pixel-image-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20v2h-1v1H2v-1H1v-7h1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M22 2V1H2v1H1v10h1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1V2zM9 6v3H8v1H5V9H4V6h1V5h3v1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelImageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelImgurIcon],svg[pixel-imgur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h1v1h-1zm0 0v-1h-2v1h-1v1h-1v1h1v1h-1v-1h-1v1H8v-1H7v-1H6v-1H5v-2H4v1H3v-1H2v-1h1v-1h1v1h1v-1h1v-1h1v-1H6v-1h1v1h1V9H7V8H6v1H5v1H4v1H3v1H1v9h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h-1v-1zM3 20H2v-1h1zm0-3h1v1H3zm4 4H6v1H5v-1H4v-1h1v-1h1v1h1zm3 1H9v-1h1z"></svg:path><svg:path fill="currentColor" d="M23 3v18h-1v1h-1v1h-8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V5H7v1H6v1H5v1H4v1H3v1H2v1H1V3h1V2h1V1h18v1h1v1z"></svg:path><svg:path fill="currentColor" d="M13 15h-1v1h-1v1h-1v1H8v-1H7v-1H6v-2h1v-1h1v-1h1v-1h1V9H9V8H8V7h1V6h9v9h-1v1h-1v-1h-1v-1h-2z"></svg:path>`,
})
export class PixelImgurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelInfoCircleIcon],svg[pixel-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15v2h-4v-2h1v-5h-1V9h3v6zm-3-9h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 6h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1H7v-1H6v-1H5v-1H4v-2H3V9h1V7h1V6h1V5h1V4h2V3h6v1h2v1h1v1h1v1h1v2h1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelInfoCircleSolidIcon],svg[pixel-info-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zM11 6h2v2h-2zm-1 9h1v-5h-1V9h3v6h1v2h-4z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelInfoCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelInstagramIcon],svg[pixel-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9V8h-1V7h-1V6H9v1H8v1H7v1H6v6h1v1h1v1h1v1h6v-1h1v-1h1v-1h1V9zm-1 5h-1v1h-1v1h-4v-1H9v-1H8v-4h1V9h1V8h4v1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M22 5V3h-1V2h-2V1H5v1H3v1H2v2H1v14h1v2h1v1h2v1h14v-1h2v-1h1v-2h1V5zm-1 14h-1v1h-1v1H5v-1H4v-1H3V5h1V4h1V3h14v1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M17 5h2v2h-2z"></svg:path>`,
})
export class PixelInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelIosIcon],svg[pixel-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v3h-1v1h-1v1h-2V3h1V2h1V1zm6 16v1h-1v2h-1v1h-1v1h-1v1h-2v-1h-5v1H8v-1H7v-1H6v-1H5v-1H4v-2H3v-7h1V8h1V7h2V6h3v1h4V6h3v1h2v1h1v1h-1v1h-1v5h1v1h1v1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelItalicsIcon],svg[pixel-italics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v2h-5v1h-1v2h-1v2h-1v3h-1v2h-1v3h-1v2h-1v2H9v1h7v2H2v-2h5v-1h1v-2h1v-2h1v-3h1v-2h1V8h1V6h1V4h1V3H8V1z"></svg:path>`,
})
export class PixelItalicsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelItalicsSolidIcon],svg[pixel-italics-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v3h-5v2h-1v2h-1v3h-1v2h-1v3h-1v2h-1v2h5v3H2v-3h5v-2h1v-2h1v-3h1v-2h1V8h1V6h1V4H8V1z"></svg:path>`,
})
export class PixelItalicsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelKaggleIcon],svg[pixel-kaggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-4v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v1H8v4H5V1h3v14h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1z"></svg:path>`,
})
export class PixelKaggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLifeHackingIcon],svg[pixel-life-hacking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.503 18.504v3h-1v1h-1.001v1.001h-2v-1h-1v-1h-1v-3.001zm5.001-11.003v4.001h-1v2h-1v1.001h-1.001v1h-1v1h-1v1h-1v-5h1v-1h1v-1.001h-1v1h-1v1h-1.001v5.002h-2v-5.002h-1v-1h-1v-1H8.5v1h1v1h1v5.002h-1v-1h-1v-1h-1v-1.001h-1v-1h-1v-2h-1V7.5h1v-2h1v-1h1v-1h1v-1h2.001v-1h4.001v1h2v1h1.001v1h1v1h1v2.001z"></svg:path>`,
})
export class PixelLifeHackingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLightbulbIcon],svg[pixel-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v1h-1v1h-2v-1h-1v-1zM11 4h2v1h-2zm-1 1h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M19 7V5h-1V4h-1V3h-1V2h-2V1h-4v1H8v1H7v1H6v1H5v2H4v4h1v2h1v1h1v1h1v1h1v4h6v-4h1v-1h1v-1h1v-1h1v-2h1V7zm-1 4h-1v2h-1v1h-1v1h-1v1h-4v-1H9v-1H8v-1H7v-2H6V7h1V5h1V4h2V3h4v1h2v1h1v2h1z"></svg:path><svg:path fill="currentColor" d="M9 6h1v1H9zM8 7h1v2H8z"></svg:path>`,
})
export class PixelLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLightbulbSolidIcon],svg[pixel-lightbulb-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h1v1H2zm1 1h1v1H3zm1 1h1v1H4zM1 16h1v1H1zm1-1h1v1H2zm1-1h1v1H3zm19 2h1v1h-1zm-1-1h1v1h-1zm-1-1h1v1h-1zm1-13h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zM1 8h2v1H1zm14 10v3h-1v1h-1v1h-2v-1h-1v-1H9v-3zm4-13h-1V4h-1V3h-1V2h-2V1h-4v1H8v1H7v1H6v1H5v2H4v4h1v2h1v1h1v1h1v1h1v1h6v-1h1v-1h1v-1h1v-1h1v-2h1V7h-1zM7 7h1V6h1V5h1V4h3v1h-3v1H9v1H8v2H7zm14 1h2v1h-2z"></svg:path>`,
})
export class PixelLightbulbSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLinkIcon],svg[pixel-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h1v7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H5v-1H4v-1H3v-1H2v-1H1v-5h1v-1h1v-1h1v-1h1v3H4v1H3v3h1v1h1v1h1v1h4v-1h1v-1h1v-1h1v-1h1v-1h1v-5h-1v-1h-1V9h1V8h1v1h1z"></svg:path><svg:path fill="currentColor" d="M23 5v5h-1v1h-1v1h-1v1h-1v-3h1V9h1V6h-1V5h-1V4h-1V3h-4v1h-1v1h-1v1h-1v1h-1v1H9v5h1v1h1v1h-1v1H9v-1H8v-1H7V7h1V6h1V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLinkSolidIcon],svg[pixel-link-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h1v7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H5v-1H4v-1H3v-1H2v-1H1v-5h1v-1h1v-1h1v-1h1v4H4v3h1v1h1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-3h-1v-1h-1v-1h1V9h1V8h1v1h1z"></svg:path><svg:path fill="currentColor" d="M23 5v5h-1v1h-1v1h-1v1h-1V9h1V6h-1V5h-1V4h-3v1h-1v1h-1v1h-1v1h-1v1h-1v3h1v1h1v1h-1v1h-1v1H9v-1H8v-1H7V7h1V6h1V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelLinkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLinkedinIcon],svg[pixel-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 10v8h-3V9h3v1h1V9h4v1h1v10h-3v-8zM4 8V5h3v3zm3 1v11H4V9z"></svg:path>`,
})
export class PixelLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLocationPinIcon],svg[pixel-location-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8v2h-1v1h-1v1h-2v-1h-1v-1H9V8h1V7h1V6h2v1h1v1z"></svg:path><svg:path fill="currentColor" d="M19 6V4h-1V3h-1V2h-2V1H9v1H7v1H6v1H5v2H4v6h1v2h1v1h1v2h1v1h1v2h1v1h1v2h2v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1V6zm-2 6v2h-1v1h-1v2h-1v1h-1v2h-2v-2h-1v-1H9v-2H8v-1H7v-2H6V6h1V4h2V3h6v1h2v2h1v6z"></svg:path>`,
})
export class PixelLocationPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLocationPinSolidIcon],svg[pixel-location-pin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V4h-1V3h-1V2h-2V1H9v1H7v1H6v1H5v2H4v6h1v2h1v1h1v2h1v1h1v2h1v1h1v2h2v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1V6zm-5 5h-1v1h-2v-1h-1v-1H9V8h1V7h1V6h2v1h1v1h1v2h-1z"></svg:path>`,
})
export class PixelLocationPinSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLockIcon],svg[pixel-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v-1h-3V5h-1V3h-1V2h-2V1h-4v1H8v1H7v2H6v6H3v1H2v10h1v1h18v-1h1V12zm-1 1v8H4v-8zM9 5V4h1V3h4v1h1v1h1v6H8V5z"></svg:path>`,
})
export class PixelLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLockAltIcon],svg[pixel-lock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12v-1h-2V5h-1V3h-1V2h-2V1h-4v1H8v1H7v2H6v6H4v1H3v10h1v1h16v-1h1V12zM9 5V4h1V3h4v1h1v1h1v6H8V5zM5 21v-8h14v8z"></svg:path>`,
})
export class PixelLockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLockAltSolidIcon],svg[pixel-lock-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12v-1h-1V6h-1V4h-1V3h-1V2h-2V1h-4v1H8v1H7v1H6v2H5v5H4v1H3v10h1v1h16v-1h1V12zM8 6h1V5h1V4h4v1h1v1h1v5H8z"></svg:path>`,
})
export class PixelLockAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLockOpenIcon],svg[pixel-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V3h-1V2h-2V1h-4v1h-2v1h-1v2h-1v6H2v1H1v10h1v1h15v-1h1V12h-1v-1h-4V5h1V4h1V3h4v1h1v1h1v6h2V5zm-6 8v8H3v-8z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLockOpenSolidIcon],svg[pixel-lock-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v5h-3V6h-1V5h-4v1h-1v5h3v1h1v9h-1v1H2v-1H1v-9h1v-1h9V6h1V4h1V3h2V2h4v1h2v1h1v2z"></svg:path>`,
})
export class PixelLockOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLockSolidIcon],svg[pixel-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v-1h-3V5h-1V3h-1V2h-2V1h-4v1H8v1H7v2H6v6H3v1H2v10h1v1h18v-1h1V12zm-6-1H9V5h1V4h4v1h1z"></svg:path>`,
})
export class PixelLockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLoginIcon],svg[pixel-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19v1H8v-2h1v-1h1v-1h1v-1h1v-1h1v-1H1v-2h12v-1h-1V9h-1V8h-1V7H9V6H8V4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1zM21 2h2v20h-2z"></svg:path>`,
})
export class PixelLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLoginSolidIcon],svg[pixel-login-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h3v20h-3zM8 4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-2h1v-1h1v-1h1v-1H1v-4h9V9H9V8H8V7H7V5h1z"></svg:path>`,
})
export class PixelLoginSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLogoutIcon],svg[pixel-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1h1v-1h1v-1h1v-1H7v-2h12v-1h-1V9h-1V8h-1V7h-1V6h-1zM1 2h2v20H1z"></svg:path>`,
})
export class PixelLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelLogoutSolidIcon],svg[pixel-logout-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5V4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-2h1v-1h1v-1h1v-1H7v-4h9V9h-1V8h-1V7h-1V5zM1 2h3v20H1z"></svg:path>`,
})
export class PixelLogoutSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMachineLearningIcon],svg[pixel-machine-learning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.505 9.502v2h-2v1h-2v-1h-2.001v1h1v1h1v1.001h2v-1h1v-1h1.001v4h-1v3.001h-1v1h-1v-1h-1v-1h-3.002v1h2v1h1.001v2h-1v1.001h-4.001v-1h-1v-1h-1v-4.001h1v-1h1v-3.001h-1v-1h-1V8.502h1V5.5h-1v-3h1v-1h3v1h2v1h1.001v1h1v2.001h-2v1h-1v1h-1v1h2v-1h1v-1h2v1h1v1zM11.502 19.504h-1v1h1zm-1-1h-1v1h1zm1-14.004h-1v1h1zm-1 1.001h-1v1h1zM6.501 9.502h-1v1h1zm1-1.001h-1v1h1zm2.001-1h-1v1h1zm-1-1h-1v1h1zm2 2h-1v1h1zm1 1.001h-1v1h1zm1.001 4.001h-1v1h1zm-1.001 1h-1v1h1zm-1 1h-1v1h1zm-1 1h-1v1h1zm-1 1h-1v1h1zm-1.001-2h-1v1h1zm-1-1h-1v1h1zm1 5.001v2h-1v1h-2v-1h-1v-2h1v-1h2v1zM5.5 11.502v2h-1v1h-2v-1h-1v-2h1v-1h2v1zM7.501 3.5v2h-1v1h-2v-1h-1v-2h1v-1h2v1z"></svg:path>`,
})
export class PixelMachineLearningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelManagementIcon],svg[pixel-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.502 20.504v1H4.5v-3h1v2zm12.002-2v3h-3v-1h2v-2zm-4.001 3.001v2H9.502v-2h1v-1h2v-1h-1v-1.001h-1v-3h1v-1.001h3.001v1h1v3h-1v1.001h-1v1h2v1zm7.002-6.002v2h-7.002v-2h1v-1h2.001v-1h-1v-1h-1V9.501h1v-1h3v1h1v3h-1v1h-1v1h2v1.001zm-15.003 0v2H1.5v-2h1v-1h2v-1h-1v-1h-1V9.501h1v-1h3.001v1h1v3h-1v1h-1v1h2v1.001zm0-12.003v1H5.5v3.001h-1v-4zm12.002 0v4.001h-1v-3h-4v-1zm-5.001 5.002v2H8.502v-2h1v-1h2v-1h-1V5.5h-1v-3h1v-1h3v1h1.001v3h-1v1.001h-1v1h2v1z"></svg:path>`,
})
export class PixelManagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMastodonIcon],svg[pixel-mastodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7V4h-1V3h-1V2h-1V1H5v1H4v1H3v1H2v3H1v9h1v3h1v1h1v1h1v1h2v1h7v-1h2v-2H9v-1H8v-2h1v1h9v-1h2v-1h1v-1h1v-2h1V7zm-3 7h-3V7h-2v1h-1v4h-2V8h-1V7H8v7H5V6h1V5h1V4h3v1h1v1h2V5h1V4h3v1h1v1h1z"></svg:path>`,
})
export class PixelMastodonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMediaIcon],svg[pixel-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.504 21.505v1h-1v1H2.5v-1h-1V6.5h1v-1h1v15.003h1v1z"></svg:path><svg:path fill="currentColor" d="M22.505 5.5v-1h-6.002v-1h-1v-1h-1v-1H6.5v1h-2v17.004h1v1h17.004v-1h1V5.501zm-7.002 7.002v1h1v1.001h1v1h1v1h1.001v1H6.501v-5h1v-1h1v-1.001h1v-1h1.001v-1h1v1h1v1h1v1h1v1zm-9.002-8h1v-1h2v1h1.001v2h-1v1h-2v-1h-1zm16.004 13.003h-1v-1h-1v-1h-1v-1.001h-1.001v-1h-1v-1h-1v-1h-1v-1.001h1v-1h1v-1h1v1h1v1h1v1h1v1h1z"></svg:path>`,
})
export class PixelMediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMessageIcon],svg[pixel-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v16h1v1h6v4h1v-1h1v-1h1v-1h2v-1h9v-1h1V2zm-1 15H3V3h18z"></svg:path>`,
})
export class PixelMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMessageDotsIcon],svg[pixel-message-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9v2h-1v1h-2v-1h-1V9h1V8h2v1zm-5 0v2h-1v1h-2v-1h-1V9h1V8h2v1zM9 9v2H8v1H6v-1H5V9h1V8h2v1z"></svg:path><svg:path fill="currentColor" d="M22 2V1H2v1H1v16h1v1h6v4h1v-1h1v-1h1v-1h2v-1h9v-1h1V2zm-1 15H3V3h18z"></svg:path>`,
})
export class PixelMessageDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMessageDotsSolidIcon],svg[pixel-message-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v16h1v1h6v4h1v-1h1v-1h1v-1h2v-1h9v-1h1V2zM9 11H8v1H6v-1H5V9h1V8h2v1h1zm5 0h-1v1h-2v-1h-1V9h1V8h2v1h1zm5 0h-1v1h-2v-1h-1V9h1V8h2v1h1z"></svg:path>`,
})
export class PixelMessageDotsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMessageSolidIcon],svg[pixel-message-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v16h-1v1h-9v1h-2v1h-1v1H9v1H8v-4H2v-1H1V2h1V1h20v1z"></svg:path>`,
})
export class PixelMessageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMindsIcon],svg[pixel-minds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v4h-1v1h-4v-1H9v-4zm4-13v7h-1v1h-1v1h-1v3H8v-3H7v-1H6v-1H5V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelMindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMinusIcon],svg[pixel-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h22v2H1z"></svg:path>`,
})
export class PixelMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMinusSolidIcon],svg[pixel-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2h-1v1H2v-1H1v-2h1v-1h20v1z"></svg:path>`,
})
export class PixelMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMoonIcon],svg[pixel-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17v1h-2v1h-4v-1h-2v-1h-2v-1h-1v-2H9v-2H8V8h1V6h1V4h1V3h2V2h2V1h-5v1H8v1H6v1H5v1H4v2H3v2H2v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2zM8 20v-1H6v-2H5v-2H4V9h1V7h1V5h2v1H7v2H6v4h1v2h1v2h1v1h1v1h1v1h2v1h2v1h-5v-1z"></svg:path>`,
})
export class PixelMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMoonSolidIcon],svg[pixel-moon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-1v1h-1v1h-2v1h-2v1h-6v-1H8v-1H6v-1H5v-1H4v-2H3v-2H2V9h1V7h1V5h1V4h1V3h2V2h2V1h5v1h-2v1h-2v1h-1v2H9v2H8v4h1v2h1v2h1v1h2v1h2v1h4v-1h2v-1z"></svg:path>`,
})
export class PixelMoonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMusicIcon],svg[pixel-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v1h-3v1h-3v1h-4v1H8v1H6v10H3v1H2v1H1v3h1v1h1v1h4v-1h1v-1h1V11h2v-1h4V9h3V8h2v5h-3v1h-1v1h-1v3h1v1h1v1h4v-1h1v-1h1V1zM3 21v-3h4v3zM18 6v1h-3v1h-4v1H8V7h3V6h4V5h3V4h3v2zm-1 12v-3h4v3z"></svg:path>`,
})
export class PixelMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelMusicSolidIcon],svg[pixel-music-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1v17h-1v1h-1v1h-4v-1h-1v-1h-1v-3h1v-1h1v-1h3V8h-2v1h-3v1h-4v1H9v10H8v1H7v1H3v-1H2v-1H1v-3h1v-1h1v-1h3V6h2V5h3V4h4V3h3V2h3V1z"></svg:path>`,
})
export class PixelMusicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelNewsbreakIcon],svg[pixel-newsbreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v4h-1v6h-1v5h-1v1h-2v1h-2v1h-2v1h-2v-1h-1v-2h-1v-2H9v-2H8v1H7v1H6v1H5v2H4v1H3v1H2v1H1v-3h1v-4h1v-4h1V7h1V6h2V5h2V4h2V3h2v2h1v2h1v2h1v2h2V9h1V7h1V5h1V3h1V2z"></svg:path>`,
})
export class PixelNewsbreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelNewspaperIcon],svg[pixel-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V5H3v1H2v1H1v11h1v1h20v-1h1V6zM4 17H3V7h1zm17 0H6V7h15z"></svg:path><svg:path fill="currentColor" d="M14 14h5v2h-5zm0-3h5v2h-5zm0-3h5v2h-5zM7 8v5h6V8zm4 3H9v-1h2zm-4 3h6v2H7z"></svg:path>`,
})
export class PixelNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelNewspaperSolidIcon],svg[pixel-newspaper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V5H3v1H2v1H1v11h1v1h20v-1h1V6zM4 17H3V7h1zm8-2H6v-5h6zm9 0h-8v-1h8zm-8-2v-1h7v1zm8-2h-8v-1h8zm0-2H6V7h15z"></svg:path><svg:path fill="currentColor" d="M7 11h4v3H7z"></svg:path>`,
})
export class PixelNewspaperSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelNpmIcon],svg[pixel-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zM12 8v11H5V5h14v14h-3V8z"></svg:path>`,
})
export class PixelNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelNumberedListIcon],svg[pixel-numbered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h1v2H4zm0-3h1v1H2V8h1V6H2V5h1V4h1zm0 2v1H3v1H2v-2zm1 6v5H2v-1h2v-1H3v-1h1v-1H2v-1zm-2-3h1v1h1v1H2v-1h1zm6-7h14v1H9zm0 6h14v1H9zm0 6h14v1H9z"></svg:path>`,
})
export class PixelNumberedListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelNumberedListSolidIcon],svg[pixel-numbered-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8v1H2V8h1V6H2V5h1V4h1v4zm0 8v5H2v-1h2v-1H3v-1h1v-1H2v-1zm-2-3h1v1h1v1H2v-1h1zm1-2h1v2H4zm0-1v1H3v1H2v-2zm18 2h1v1h-1v1H10v-1H9v-1h1v-1h12zm0 6h1v1h-1v1H10v-1H9v-1h1v-1h12zm1-12v1h-1v1H10V7H9V6h1V5h12v1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelNumberedListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelOctagonCheckIcon],svg[pixel-octagon-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9v2h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-2h1v-1h2v1h2v-1h1V9h1V8h2v1z"></svg:path><svg:path fill="currentColor" d="M22 8V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v8h1v1h1v1h1v1h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8zm-1 7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3V9h1V8h1V7h1V6h1V5h1V4h1V3h6v1h1v1h1v1h1v1h1v1h1v1h1z"></svg:path>`,
})
export class PixelOctagonCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelOctagonCheckSolidIcon],svg[pixel-octagon-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v8h1v1h1v1h1v1h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8zm-12 2v1h2v-1h1V9h1V8h2v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-2h1v-1z"></svg:path>`,
})
export class PixelOctagonCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelOctagonTimesIcon],svg[pixel-octagon-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8v2h-1v1h-1v2h1v1h1v2h-1v1h-2v-1h-1v-1h-2v1h-1v1H8v-1H7v-2h1v-1h1v-2H8v-1H7V8h1V7h2v1h1v1h2V8h1V7h2v1z"></svg:path><svg:path fill="currentColor" d="M22 8V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v8h1v1h1v1h1v1h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8zm-2 7v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3V9h1V8h1V7h1V6h1V5h1V4h1V3h6v1h1v1h1v1h1v1h1v1h1v1h1v6z"></svg:path>`,
})
export class PixelOctagonTimesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelOctagonTimesSolidIcon],svg[pixel-octagon-times-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v8h1v1h1v1h1v1h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8zm-6 9h-2v-1h-1v-1h-2v1h-1v1H8v-1H7v-2h1v-1h1v-2H8v-1H7V8h1V7h2v1h1v1h2V8h1V7h2v1h1v2h-1v1h-1v2h1v1h1v2h-1z"></svg:path>`,
})
export class PixelOctagonTimesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPageBreakIcon],svg[pixel-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V1h2v5h14V1h2v7zm-2 3h5v2H1zm9 0h4v2h-4zm11 5v7h-2v-5H5v5H3v-7zm-3-5h5v2h-5z"></svg:path>`,
})
export class PixelPageBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPageBreakSolidIcon],svg[pixel-page-break-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h5v2H1zm9 0h4v2h-4zm11 5v7h-3v-4H6v4H3v-7zm0-15v7H3V1h3v4h12V1zm-3 10h5v2h-5z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelPageBreakSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPaperclipIcon],svg[pixel-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-3h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V5h-1V4h-1V3h-3v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v5h1v1h1v1h1v1h5v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H7v-1H5v-1H4v-1H3v-2H2v-6h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h2V1h4v1h1v1h1v1z"></svg:path>`,
})
export class PixelPaperclipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPaperclipSolidIcon],svg[pixel-paperclip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-3h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V5h-1V4h-3v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v5h1v1h1v1h5v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H7v-1H5v-1H4v-1H3v-2H2v-6h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h2V1h4v1h1v1h1v1z"></svg:path>`,
})
export class PixelPaperclipSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelParagraphIcon],svg[pixel-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v1H5v1H4v1H3v2H2v6h1v2h1v1h1v1h2v1h4v6h2V3h3v20h2V3h4V1zm4 14H7v-1H5v-2H4V6h1V4h2V3h4z"></svg:path>`,
})
export class PixelParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelParagraphSolidIcon],svg[pixel-paragraph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v3h-3v19h-3V4h-2v19h-3v-6H7v-1H5v-1H4v-1H3v-2H2V6h1V4h1V3h1V2h2V1z"></svg:path>`,
})
export class PixelParagraphSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPauseIcon],svg[pixel-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1H2v1H1v20h1v1h7v-1h1V2H9zM8 3v18H3V3zm14-1V1h-7v1h-1v20h1v1h7v-1h1V2zm-1 1v18h-5V3z"></svg:path>`,
})
export class PixelPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPauseSolidIcon],svg[pixel-pause-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v20h-1v1h-7v-1h-1V2h1V1h7v1zM9 2h1v20H9v1H2v-1H1V2h1V1h7z"></svg:path>`,
})
export class PixelPauseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPenIcon],svg[pixel-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 5v2h-1v1h-1v1h-1v1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1zm-6 5V9h-1V8h-1V7h-1V6h-2v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v6h6v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2zm-2 2v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H3v-4h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h2v1h1v1h1v2z"></svg:path>`,
})
export class PixelPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPenNibIcon],svg[pixel-pen-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4V3h-1V2h-1V1h-3v1h-1v1h-1v1h-1v1h-2v1H9v1H6v1H5v2H4v3H3v3H2v3H1v3h1v1h3v-1h3v-1h3v-1h3v-1h2v-1h1v-3h1v-3h1v-2h1V9h1V8h1V7h1V4zm-6 8v3h-1v2h-1v1h-3v1H8v1H6v-1h1v-1h1v-1h1v-1h3v-3h-1v-1H8v3H7v1H6v1H5v1H4v-2h1v-3h1v-3h1V9h2V8h3V7h3v1h1v1h1v3z"></svg:path>`,
})
export class PixelPenNibIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPenNibSolidIcon],svg[pixel-pen-nib-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4v3h-1v1h-1v1h-1v1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h1V3h1V2h1V1h3v1h1v1h1v1zm-5 7h1v1h-1v3h-1v3h-1v1h-2v1h-3v1H8v1H5v1H3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h3v-3h-1v-1H8v3H7v1H6v1H5v1H4v1H3v1H2v1H1v-2h1v-3h1v-3h1v-3h1V8h1V7h3V6h3V5h1v1h1v1h1v1h1v1h1v1h1z"></svg:path>`,
})
export class PixelPenNibSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPenSolidIcon],svg[pixel-pen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H1v-6h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1zm6-5v2h-1v1h-1v1h-1v1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelPenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPencilIcon],svg[pixel-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4V3h-1V2h-1V1h-4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v7h7v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V4zM8 20H7v1H4v-1H3v-3h1v-1h1v1h1v1h1v1h1zm9-9h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v-1H8v-1H7v-1H6v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h2v1h1v1h1zm1-3V7h-1V6h-1V4h1V3h2v1h1v1h1v2h-1v1z"></svg:path>`,
})
export class PixelPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPencilRulerIcon],svg[pixel-pencil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11v-1h1V9h1V8h1V7h1V4h-1V3h-1V2h-1V1h-3v1h-1v1h-1v1h-1v1h-1v1h-2V5h-1V4H9V3H8V2H7V1H5v1H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v1h1v2H5v1H4v1H3v1H2v1H1v6h6v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2zM7 10V9H6V8H5V7H4V5h1V4h2v1h1v1H7v1h1v1h1V7h1v2H9v1zm6 3v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H3v-3h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h-1v1h-1v1h-1v1zm6 3v1h1v2h-1v1h-2v-1h-1v-1h-1v-1h-1v-2h1v-1h2v1h-1v1h1v1h1v-1zm-2-9V6h-1V5h1V4h1V3h1v1h1v1h1v1h-1v1h-1v1h-1V7z"></svg:path>`,
})
export class PixelPencilRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPencilRulerSolidIcon],svg[pixel-pencil-ruler-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7H1V5h1V4h1V3h1V2h1V1h2v1h1v2H7v1H6v1h1v1h1V6h1V5h2v1h-1v1H9v1H8v1H7v1H6v1H5v-1H4V9H3V8H2zm11 10h-1v1h-1v1h-1v1H9v1H8v1H7v1H1v-6h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1zM23 4v3h-1v1h-1v1h-2V8h-1V7h-1V6h-1V5h-1V3h1V2h1V1h3v1h1v1h1v1zm-1 13h1v2h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v2h-1v1h-1v1h1v1h1v-1h1v-1h2z"></svg:path>`,
})
export class PixelPencilRulerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPencilSolidIcon],svg[pixel-pencil-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20h1v1H8v1H7v1H1v-6h1v-1h1v-1h1v1h1v1h1v1h1v1h1zm9-10h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1zm6-6v3h-1v1h-1v1h-2V8h-1V7h-1V6h-1V5h-1V3h1V2h1V1h3v1h1v1h1v1z"></svg:path>`,
})
export class PixelPencilSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPeopleCarryIcon],svg[pixel-people-carry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h1v2H3zm1-1h2v1H4zm0 3h2v1H4zm2-2h1v2H6zM3 17h1v1H3v2H1v-3h1v-1h1z"></svg:path><svg:path fill="currentColor" d="M20 15h1v-1h1v-3h-1V8h-1V7h-2v1h-1v2h-1v1h-1V7H9v4H8v-1H7V8H6V7H4v1H3v3H2v3h1v1h1v1h1v4h1v1h1v-1h1v-3H7v-3H6v-2h1v1h1v1h8v-1h1v-1h1v2h-1v3h-1v3h1v1h1v-1h1v-4h1zm-6-2h-4V8h4z"></svg:path><svg:path fill="currentColor" d="M23 17v3h-2v-2h-1v-1h1v-1h1v1zM17 3h1v2h-1zm1-1h2v1h-2zm0 3h2v1h-2zm2-2h1v2h-1z"></svg:path>`,
})
export class PixelPeopleCarryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPeopleCarrySolidIcon],svg[pixel-people-carry-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h1v1H3v2H1v-3h1v-1h1zM4 5H3V3h1V2h2v1h1v2H6v1H4zm19 12v3h-2v-2h-1v-1h1v-1h1v1z"></svg:path><svg:path fill="currentColor" d="M20 16h-1v4h-1v1h-1v-1h-1v-3h1v-3h1v-2h-1v1h-1v1H8v-1H7v-1H6v2h1v3h1v3H7v1H6v-1H5v-4H4v-1H3v-1H2v-3h1V8h1V7h2v1h1v2h1v1h1V7h6v4h1v-1h1V8h1V7h2v1h1v3h1v3h-1v1h-1zM18 5h-1V3h1V2h2v1h1v2h-1v1h-2z"></svg:path>`,
})
export class PixelPeopleCarrySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPhoneRingingHighIcon],svg[pixel-phone-ringing-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h2v2h-2zm6-1h1v3h-2v-2h-1V9h-1V8h-1V7h-2V5h3v1h1v1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M23 8v4h-2V8h-1V7h-1V6h-1V5h-1V4h-1V3h-4V1h4v1h2v1h1v1h1v1h1v1h1v2zm-1 9v-1h-1v-1h-2v-1h-3v1h-1v1h-3v-1h-1v-1h-1v-1H9v-1H8V9h1V8h1V5H9V3H8V2H7V1H4v1H2v1H1v5h1v4h1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v1h4v1h5v-1h1v-2h1v-3zm-2 3v1h-4v-1h-4v-1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-2H4V8H3V4h1V3h3v2h1v3H7v1H6v3h1v1h1v1h1v1h1v1h1v1h1v1h3v-1h1v-1h3v1h2v3z"></svg:path>`,
})
export class PixelPhoneRingingHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPhoneRingingHighSolidIcon],svg[pixel-phone-ringing-high-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5h3v1h1v1h1v1h1v1h1v3h-2v-2h-1V9h-1V8h-1V7zm0 3h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M23 8v4h-2V8h-1V7h-1V6h-1V5h-1V4h-1V3h-4V1h4v1h2v1h1v1h1v1h1v1h1v2zm-1 9h1v3h-1v2h-1v1h-5v-1h-4v-1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-2H2V8H1V3h1V2h2V1h3v1h1v1h1v2h1v3H9v1H8v3h1v1h1v1h1v1h1v1h3v-1h1v-1h3v1h2v1h1z"></svg:path>`,
})
export class PixelPhoneRingingHighSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPhoneRingingLowIcon],svg[pixel-phone-ringing-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5h3v1h1v1h1v1h1v1h1v3h-2v-2h-1V9h-1V8h-1V7z"></svg:path><svg:path fill="currentColor" d="M22 17v-1h-1v-1h-2v-1h-3v1h-1v1h-3v-1h-1v-1h-1v-1H9v-1H8V9h1V8h1V5H9V3H8V2H7V1H4v1H2v1H1v5h1v4h1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v1h4v1h5v-1h1v-2h1v-3zm-1 3h-1v1h-4v-1h-4v-1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-2H4V8H3V4h1V3h3v2h1v3H7v1H6v3h1v1h1v1h1v1h1v1h1v1h1v1h3v-1h1v-1h3v1h2z"></svg:path>`,
})
export class PixelPhoneRingingLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPhoneRingingLowSolidIcon],svg[pixel-phone-ringing-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5h3v1h1v1h1v1h1v1h1v3h-2v-2h-1V9h-1V8h-1V7z"></svg:path><svg:path fill="currentColor" d="M23 17v3h-1v2h-1v1h-5v-1h-4v-1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-2H2V8H1V3h1V2h2V1h3v1h1v1h1v2h1v3H9v1H8v3h1v1h1v1h1v1h1v1h3v-1h1v-1h3v1h2v1h1v1z"></svg:path>`,
})
export class PixelPhoneRingingLowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPinterestIcon],svg[pixel-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-2h1v-3h1v-1h1v1h4v-1h1v-1h1v-2h1v-4h-1V8h-1V7h-1V6h-2V5h-4v1H8v1H7v1H6v2H5v4h1v1h1v1h1v-2H7v-4h1V8h2V7h4v1h2v1h1v5h-1v1h-1v1h-4v-2h1V9h-2v1H9v7H8v3H7v1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelPinterestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlaneIcon],svg[pixel-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v-1h-7V9h-1V7h-1V6h-1V4h-1V3h-1V2H7v3h1v3h1v2H5V9H4V8H3V7H1v3h1v4H1v3h2v-1h1v-1h1v-1h4v2H8v3H7v3h3v-1h1v-1h1v-2h1v-1h1v-2h1v-1h7v-1h1v-2zm-8 2v1h-1v2h-1v1h-1v2h-1v1H9v1H8v-1h1v-3h1v-4H4v1H3v-4h1v1h6V7H9V4H8V3h1v1h1v1h1v2h1v1h1v2h1v1h7v2z"></svg:path>`,
})
export class PixelPlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlaneDepartureIcon],svg[pixel-plane-departure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 18h22v2H1zM19 4v1h-2v1h-2v1h-2V6h-2V5H9V4H7V3H6v1H5v1H4v1h1v1h1v1h1v1h1v1H7v1H5v-1H4V9H1v3h1v1h1v1h1v1h6v-1h2v-1h2v-1h2v-1h2v-1h2V9h2V8h1V4zm3 3h-1v1h-2v1h-2v1h-2v1h-2v1h-2v1H9v1H5v-1H4v-1H3v-1H2v-1h1v1h1v1h4v-1h1V8H8V7H7V6H6V5h2v1h2v1h2v1h4V7h2V6h2V5h2z"></svg:path>`,
})
export class PixelPlaneDepartureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlaneDepartureSolidIcon],svg[pixel-plane-departure-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4v4h-1v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1H4v-1H3v-1H2v-1H1v-2h1V9h2v1h1v1h2v-1h1V9H7V8H6V7H5V6H4V5h1V4h1V3h1v1h2v1h2v1h2v1h2V6h2V5h2V4zM1 18h22v2H1z"></svg:path>`,
})
export class PixelPlaneDepartureSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlaneSolidIcon],svg[pixel-plane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2h-1v1h-7v1h-1v2h-1v1h-1v2h-1v1h-1v1H7v-3h1v-3h1v-2H5v1H4v1H3v1H1v-3h1v-4H1V7h2v1h1v1h1v1h4V8H8V5H7V2h3v1h1v1h1v2h1v1h1v2h1v1h7v1z"></svg:path>`,
})
export class PixelPlaneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlayIcon],svg[pixel-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11v-1h-1V9h-2V8h-2V7h-1V6h-2V5h-2V4h-1V3H8V2H6V1H3v1H2v20h1v1h3v-1h2v-1h2v-1h1v-1h2v-1h2v-1h1v-1h2v-1h2v-1h1v-1h1v-2zm-2 2h-2v1h-2v1h-1v1h-2v1h-2v1H9v1H7v1H5v1H4V3h1v1h2v1h2v1h1v1h2v1h2v1h1v1h2v1h2z"></svg:path>`,
})
export class PixelPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlaySolidIcon],svg[pixel-play-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v2h-1v1h-1v1h-2v1h-2v1h-1v1h-2v1h-2v1h-1v1H8v1H6v1H3v-1H2V2h1V1h3v1h2v1h2v1h1v1h2v1h2v1h1v1h2v1h2v1h1v1z"></svg:path>`,
})
export class PixelPlaySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlaylistIcon],svg[pixel-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v1h-2v1h-2v1h-1v12h-4v1h-2v1H9v3h1v1h2v1h5v-1h1v-1h1V8h2V7h2V1zM11 20v-1h1v-1h5v2h-1v1h-4v-1zm8-14v1h-1V5h1V4h2v2zM1 15h6v2H1z"></svg:path><svg:path fill="currentColor" d="M1 9h12v2H1zm0-6h12v2H1z"></svg:path>`,
})
export class PixelPlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlaylistSolidIcon],svg[pixel-playlist-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h12v3H1zm0 6h12v3H1zm0 6h6v3H1z"></svg:path><svg:path fill="currentColor" d="M23 1v6h-2v1h-2v13h-1v1h-1v1h-5v-1h-2v-1H9v-3h1v-1h2v-1h4V4h1V3h2V2h2V1z"></svg:path>`,
})
export class PixelPlaylistSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlusIcon],svg[pixel-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2H13v10h-2V13H1v-2h10V1h2v10z"></svg:path>`,
})
export class PixelPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPlusSolidIcon],svg[pixel-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2h-1v1h-8v8h-1v1h-2v-1h-1v-8H2v-1H1v-2h1v-1h8V2h1V1h2v1h1v8h8v1z"></svg:path>`,
})
export class PixelPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPodcastsIcon],svg[pixel-podcasts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14H8v-2h3v-1H8V9h3V8H8V6h3V5H8V3h1V2h1V1h4v1h1v1h1v2h-3v1h3v2h-3v1h3v2h-3v1h3v2h-1v1h-1v1h-4v-1H9z"></svg:path><svg:path fill="currentColor" d="M19 12v3h-1v2h-1v1h-2v1h-2v2h3v2H8v-2h3v-2H9v-1H7v-1H6v-2H5v-3h1v2h1v2h1v1h2v1h4v-1h2v-1h1v-2h1v-2z"></svg:path>`,
})
export class PixelPodcastsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPrintIcon],svg[pixel-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12h2v1h-2zm2-9v5h-2V4h-1V3H6v5H4V1h14v1h1v1z"></svg:path><svg:path fill="currentColor" d="M1 9v8h3v6h16v-6h3V9zm17 12H6v-5h12zm3-6h-2v-1H5v1H3v-4h18z"></svg:path>`,
})
export class PixelPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelPrintSolidIcon],svg[pixel-print-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3v5h-3V5h-1V4H7v4H4V1h14v1h1v1zM1 9v8h3v6h16v-6h3V9zm16 11H7v-4h10zm1-8h2v1h-2z"></svg:path>`,
})
export class PixelPrintSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelProIcon],svg[pixel-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm0 13H2V6h20z"></svg:path><svg:path fill="currentColor" d="M15 9v6h6V9zm4 4h-2v-2h2zM9 9v6h2v-1h1v1h2v-2h-1v-1h1V9zm2 3v-2h1v2zM3 9v6h2v-2h3V9zm2 3v-2h1v2z"></svg:path>`,
})
export class PixelProIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelProSolidIcon],svg[pixel-pro-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h2v2h-2zm-6-1h1v2h-1z"></svg:path><svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm-1 10h-6V9h6zm-7-3h-1v1h1v2h-2v-1h-1v1H9V9h5zM8 9v4H5v2H3V9z"></svg:path><svg:path fill="currentColor" d="M5 10h1v2H5z"></svg:path>`,
})
export class PixelProSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelProductHuntIcon],svg[pixel-product-hunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9v2h-1v1h-4V8h4v1z"></svg:path><svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-6 4h-2v1h-4v4H8V6h6v1h2v1h1v4h-1z"></svg:path>`,
})
export class PixelProductHuntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelProductManagementIcon],svg[pixel-product-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.503 4.5v-1h-2v2H4.501v-2h-2v1H1.5v18.005h1v1h13.003v-1h-1v-1h1v-1h-1v-2.001h1v-1h-1v-1h1v-1h1v-1.001h1V4.501zm-4 14.004H8.502v-2h4zm0 3H3.5v-1h9.003zM3.5 8.503h1v1h1v-1h1.001v-1h1v1h-1v1h-1v1h-1v-1h-1zm0 4h1v1h1v-1h1.001v-1h1v1h-1v1h-1v1.001h-1v-1h-1zm1 4.001v1h1v-1h1.001v-1h1v1h-1v1h-1v1h-1v-1h-1v-1zm11.003-3h-1v1H8.502v-2h7.001zm0-3H8.502V8.501h7.001z"></svg:path><svg:path fill="currentColor" d="M23.505 17.503v-1h-1v-1h-1v1h-1v-1h-2.001v1h-1v-1h-1v1h-1v1h1v1h-1v2.001h1v1h-1v1h1v1h1v-1h1v1h2v-1h1v1h1v-1h1.001v-1h-1v-1h1v-2h-1v-1zm-3 3.001h-2.001v-2h2zM13.503 2.5v2H5.5v-2h1v-1h6.001v1z"></svg:path>`,
})
export class PixelProductManagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelProgrammingIcon],svg[pixel-programming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 6.501v15.003h1v1h1v1h18.005v-1h1v-1h1V6.501zm8.002 3h-1v1h-1v2.001h-1v1H5.5v2.001h1v1h1v2h1v1h1v1.001h-2v-1h-1v-1h-1v-2h-1v-1.001h-1v-2h1v-1h1v-2.001h1v-1h1v-1h2zm5.001 3.001h-1v4.001h-1v4.001h-1v1h-1.001v-5h1v-3.001h1V8.5h1v-1h1.001zm7.002 3.001h-1v1h-1v2h-1.001v1h-1v1.001h-2v-1h1v-1h1v-2h1v-1.001h1v-2h-1v-1h-1v-2.001h-1v-1h-1v-1h2v1h1v1h1v2h1v1h1zm1-12.003v-1h-1v-1H3.5v1h-1v1h-1v2h22.005v-2zM4.5 4.5v-2h2v2zm3 0v-2h2v2zm3.001 0v-2h2v2z"></svg:path>`,
})
export class PixelProgrammingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelQuestionIcon],svg[pixel-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18h3v3h-3zm7-13v6h-1v1h-1v1h-2v2h-3v-3h1v-1h2v-1h1V6h-4v1H9v1H7V5h1V4h1V3h6v1h1v1z"></svg:path>`,
})
export class PixelQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelQuestionSolidIcon],svg[pixel-question-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5v6h-1v1h-2v1h-1v2H9v-3h1v-1h1v-1h2V9h1V7h-1V6h-2v1h-1v1H9v1H8V8H7V7H6V6H5V5h1V4h1V3h2V2h6v1h1v1h1v1zm-5 13h1v3h-1v1h-3v-1H9v-3h1v-1h3z"></svg:path>`,
})
export class PixelQuestionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelQuoteLeftIcon],svg[pixel-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v-1h-5V8h1V7h2V6h1V3h-1V2h-2v1h-2v1h-1v1h-1v2h-1v14h1v1h8v-1h1v-8zm-7 0h1v1h5v6h-6zm-5 0v-1H5V8h1V7h2V6h1V3H8V2H6v1H4v1H3v1H2v2H1v14h1v1h8v-1h1v-8zm-7 0h1v1h5v6H3z"></svg:path>`,
})
export class PixelQuoteLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelQuoteLeftSolidIcon],svg[pixel-quote-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h1v8h-1v1H2v-1H1V7h1V5h1V4h1V3h2V2h2v1h1v3H8v1H6v1H5v4h5zm13 0v8h-1v1h-8v-1h-1V7h1V5h1V4h1V3h2V2h2v1h1v3h-1v1h-2v1h-1v4h5v1z"></svg:path>`,
})
export class PixelQuoteLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelQuoteRightIcon],svg[pixel-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H2v1H1v8h1v1h5v4H6v1H4v1H3v3h1v1h2v-1h2v-1h1v-1h1v-2h1V3h-1zm-1 9H8v-1H3V4h6zm13-8V2h-8v1h-1v8h1v1h5v4h-1v1h-2v1h-1v3h1v1h2v-1h2v-1h1v-1h1v-2h1V3zm-7 7V4h6v7h-1v-1z"></svg:path>`,
})
export class PixelQuoteRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelQuoteRightSolidIcon],svg[pixel-quote-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h1v14h-1v2H9v1H8v1H6v1H4v-1H3v-3h1v-1h2v-1h1v-4H2v-1H1V3h1V2h8zm13 0v14h-1v2h-1v1h-1v1h-2v1h-2v-1h-1v-3h1v-1h2v-1h1v-4h-5v-1h-1V3h1V2h8v1z"></svg:path>`,
})
export class PixelQuoteRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelReceiptIcon],svg[pixel-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h10v2H7zm0-4h10v2H7zm0-4h10v2H7z"></svg:path><svg:path fill="currentColor" d="M19 1v1h-1v1h-1V2h-1V1h-2v1h-1v1h-2V2h-1V1H8v1H7v1H6V2H5V1H4v22h1v-1h1v-1h1v1h1v1h2v-1h1v-1h2v1h1v1h2v-1h1v-1h1v1h1v1h1V1zm-3 19v1h-2v-1h-1v-1h-2v1h-1v1H8v-1H7v-1H6V5h1V4h1V3h2v1h1v1h2V4h1V3h2v1h1v1h1v14h-1v1z"></svg:path>`,
})
export class PixelReceiptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelReceiptSolidIcon],svg[pixel-receipt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1v1h-1v1h-1V2h-1V1h-2v1h-1v1h-2V2h-1V1H8v1H7v1H6V2H5V1H4v22h1v-1h1v-1h1v1h1v1h2v-1h1v-1h2v1h1v1h2v-1h1v-1h1v1h1v1h1V1zm-1 8H6V7h12zm0 4H6v-2h12zm0 4H6v-2h12z"></svg:path>`,
})
export class PixelReceiptSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRedditIcon],svg[pixel-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h1v1h-1zm-1-3h2v2h-2zm-4 0h2v2H9zm0 3h1v1H9z"></svg:path><svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-3 5h-1v1h-1v2h-1v1h-2v1h-4v-1H8v-1H7v-3H6v-1H5v-2h1v-1h2v1h1v-1h3V5h2v1h3v2h-2V7h-2v3h2v1h1v-1h2v1h1z"></svg:path><svg:path fill="currentColor" d="M10 16h4v1h-4z"></svg:path>`,
})
export class PixelRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRefreshIcon],svg[pixel-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 14v1h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H3v1H2v1H1v-7h7v1H7v1H6v2h1v1h2v1h6v-1h2v-1h2v-2h1v-3zm0-12v7h-7V8h1V7h1V5h-1V4h-2V3H9v1H7v1H5v2H4v3H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h2V3h1V2z"></svg:path>`,
})
export class PixelRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRefreshSolidIcon],svg[pixel-refresh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 14v1h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H3v1H2v1H1v-8h8v1H8v1H7v2h1v1h2v1h4v-1h2v-1h1v-1h1v-2h1v-1zm0-12v8h-8V9h1V8h1V6h-1V5h-2V4h-4v1H8v1H7v1H6v2H5v1H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h2V3h1V2z"></svg:path>`,
})
export class PixelRefreshSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRemoteIcon],svg[pixel-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.503 16.503h-2v1h2zm3 1v2H8.502v-2h3v1h2v-1zm1.001-4v3h-3.001v-1h-4.001v1h-3v-3zm-4.001-2.001h-2v1h2zM7.501 3.5v2h-1v1.001h-1v1h-1v-4z"></svg:path><svg:path fill="currentColor" d="M22.505 11.502v-1h-1v-1h-1v-1h-1v-1h-1.001v-1h-1V5.5h-1v-1h-1v-1h-1.001v-1h-1v-1h-2v1h-1.001v1h-1v1h-1v1h-1v1.001h-1v1H5.5v1h-1v1h-1v1.001h-1v1h-1v1h3v11.003h16.004V12.503h3.001v-1zm-4.001 6.002h-1v2h-1v1H8.501v-1h-1v-2h-1v-4.001h1v-1h3v-2.001h4.001v2h3v1h1z"></svg:path>`,
})
export class PixelRemoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRetroCameraIcon],svg[pixel-retro-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3V2H2v1H1v18h1v1h20v-1h1V3zM3 4h6v1H3zm7 16H3V10h7v1H8v2H7v4h1v2h2zm-1-3v-4h1v-1h4v1h1v4h-1v1h-4v-1zm12 3h-7v-1h2v-2h1v-4h-1v-2h-2v-1h7zm0-12H3V7h6V6h1V5h1V4h10z"></svg:path><svg:path fill="currentColor" d="M13 13v1h-2v2h-1v-3z"></svg:path>`,
})
export class PixelRetroCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRetroCameraSolidIcon],svg[pixel-retro-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3V2H2v1H1v18h1v1h20v-1h1V3zM3 4h6v1H3zm14 13h-1v2h-2v1h-4v-1H8v-2H7v-4h1v-2h2v-1h4v1h2v2h1zm4-9H3V7h6V6h1V5h1V4h10z"></svg:path><svg:path fill="currentColor" d="M15 13v4h-1v1h-4v-1H9v-4h1v3h1v-2h2v-1h-3v-1h4v1z"></svg:path>`,
})
export class PixelRetroCameraSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRobotIcon],svg[pixel-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h3v1h-3zm-3 0h2v1h-2zm-4 0h3v1H7z"></svg:path><svg:path fill="currentColor" d="M19 7h-1V6h-5V3h-2v3H6v1H5v1H4v10h1v1h1v1h12v-1h1v-1h1V8h-1zm-2 10v1H7v-1H6V9h1V8h10v1h1v8zm6-6v5h-1v1h-1v-7h1v1zM2 10h1v7H2v-1H1v-5h1z"></svg:path><svg:path fill="currentColor" d="M14 10h3v3h-3zm-7 0h3v3H7z"></svg:path>`,
})
export class PixelRobotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRobotSolidIcon],svg[pixel-robot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h1v7H2v-1H1v-5h1zm17-3h-1V6h-5V3h-2v3H6v1H5v1H4v10h1v1h1v1h12v-1h1v-1h1V8h-1zm-2 6h-3v-3h3zm-4 4h-2v-1h2zm-6-1h3v1H7zm0-6h3v3H7zm7 7v-1h3v1zm9-6v5h-1v1h-1v-7h1v1z"></svg:path>`,
})
export class PixelRobotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelRssIcon],svg[pixel-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-6 16v-3h-1v-2h-1v-1h-1v-1h-1v-1h-1V9H9V8H7V7H4V4h3v1h2v1h2v1h2v1h1v1h1v1h1v1h1v2h1v2h1v2h1v3h-3v-2zm-5 0v-2h-1v-1H9v-1H8v-1H6v-1H4V9h2v1h2v1h2v1h1v1h1v1h1v2h1v2h1v2h-3v-2zm-7 1v-3h1v-1h3v1h1v3H8v1H5v-1z"></svg:path>`,
})
export class PixelRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSaveIcon],svg[pixel-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14v4h-1v1h-4v-1H9v-4h1v-1h4v1z"></svg:path><svg:path fill="currentColor" d="M22 7V6h-1V5h-1V4h-1V3h-1V2h-1V1H2v1H1v20h1v1h20v-1h1V7zm-7 3V3h1v1h1v1h1v1h1v1h1v1h1v13H3V3h1v7zM6 3h7v5H6z"></svg:path>`,
})
export class PixelSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSaveSolidIcon],svg[pixel-save-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7V6h-1V5h-1V4h-1V3h-1V2h-1V1H2v1H1v20h1v1h20v-1h1V7zM9 19v-4h1v-1h4v1h1v4h-1v1h-4v-1zm7-9H4V4h12z"></svg:path>`,
})
export class PixelSaveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelScienceIcon],svg[pixel-science-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 20.504h-1v2h1zm1-2h-1v2h1zm1-2.001h-1v2h1zm1-1h-1v1h1zm1.001-1h-1v1h1zm1-1h-1v1h1zm1.001-1.001h-1v1h1zm7.001 0h-1v1h1zm1 1.001h-1v1h1zm1.001 1h-1v1h1zm1 1h-1v1h1zm1 1h-1v2h1zm1 2.001h-1v2h1zm1.001 2h-1v2h1zm-1.001 2.001H2.5v1h18.004z"></svg:path><svg:path fill="currentColor" d="M18.504 20.505v-2h-1v-2.001h-1v-1h-1v-1h-1.001v-1.001h-3v1h-1v1H6.5v1h-1v2.001h-1v2h-1v1h16.003v-1zM7.5 17.504h2v2h-2zm4.001-1h1v1h-1zM14.503 3.5h-1v9.002h1zm-5.001 0h-1v9.002h1zm6.001-1h-1v1h1zm-7.001 0h-1v1h1zm6.001-1H8.502v1h6.001z"></svg:path>`,
})
export class PixelScienceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSearchIcon],svg[pixel-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20v-1h-1v-1h-1v-1h-1v-1h-2v-1h1v-2h1V7h-1V5h-1V4h-1V3h-1V2h-2V1H7v1H5v1H4v1H3v1H2v2H1v6h1v2h1v1h1v1h1v1h2v1h6v-1h2v-1h1v2h1v1h1v1h1v1h1v1h2v-1h1v-2zm-10-5v1H8v-1H6v-1H5v-2H4V8h1V6h1V5h2V4h4v1h2v1h1v2h1v4h-1v2h-1v1z"></svg:path>`,
})
export class PixelSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSearchSolidIcon],svg[pixel-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h6v1h2v1h1v1h1v1h1v2h1v6h-1v2h-1v1h-1zm7 3v2h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelSearchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSeedlingsIcon],svg[pixel-seedlings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2v1h-2v1h-2v1h-1v1h-1v2h1v2h1v2h2v-1h2v-1h2V9h1V8h1V6h1V2zm2 4v2h-2v1h-2v1h-1V8h-1V6h2V5h2V4h3v2zm-8 3h-1V8h-1V7H8V6H6V5H1v3h1v2h1v2h1v1h1v1h2v1h4v7h2V11h-1zm-7 3v-2H4V8H3V7h3v1h2v1h2v2h1v2H7v-1z"></svg:path>`,
})
export class PixelSeedlingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSeedlingsSolidIcon],svg[pixel-seedlings-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h1v11h-2v-7H7v-1H5v-1H4v-1H3v-2H2V8H1V5h5v1h2v1h2v1h1v1h1zm11-9v4h-1v2h-1v1h-1v1h-2v1h-2v1h-2v-2h-1V8h-1V6h1V5h1V4h2V3h2V2z"></svg:path>`,
})
export class PixelSeedlingsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelShareIcon],svg[pixel-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9V8h1V6h1V4h-1V2h-1V1h-5v1h-1v2h-1v2h-1v1h-1v1h-1v1H9V8H4v1H3v2H2v2h1v2h1v1h5v-1h1v1h1v1h1v1h1v2h1v2h1v1h5v-1h1v-2h1v-2h-1v-2h-1v-1h-5v1h-2v-1h-1v-1h-1v-4h1V9h1V8h2v1zM9 13H8v1H5v-1H4v-2h1v-1h3v1h1zm6 5h1v-1h3v1h1v2h-1v1h-3v-1h-1zm0-14h1V3h3v1h1v2h-1v1h-3V6h-1z"></svg:path>`,
})
export class PixelShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelShareSolidIcon],svg[pixel-share-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v2h-1v2h-1v1h-5V8h-2v1h-1v1h-1v4h1v1h1v1h2v-1h5v1h1v2h1v2h-1v2h-1v1h-5v-1h-1v-2h-1v-2h-1v-1h-1v-1h-1v-1H9v1H4v-1H3v-2H2v-2h1V9h1V8h5v1h1V8h1V7h1V6h1V4h1V2h1V1h5v1h1v2z"></svg:path>`,
})
export class PixelShareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelShopIcon],svg[pixel-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11v9h-1v1H4v-1H3v-9h2v5h7v-5zm5 0h2v10h-2zm3-4V6h-1V4h-1V3H4v1H3v2H2v1H1v2h1v1h20V9h1V7zM3 8V7h1V6h1V5h14v1h1v1h1v1z"></svg:path>`,
})
export class PixelShopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelShopSolidIcon],svg[pixel-shop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7v2h-1v1H2V9H1V7h1V6h1V4h1V3h16v1h1v2h1v1zm-9 4v9h-1v1H4v-1H3v-9h2v5h7v-5zm5 0h2v10h-2z"></svg:path>`,
})
export class PixelShopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelShoppingCartIcon],svg[pixel-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19h1v2H9v1H7v-1H6v-2h1v-1h2zm11 0h1v2h-1v1h-2v-1h-1v-2h1v-1h2zM4 3V2H1v2h3v3h1v5h1v4h1v1h13v-2H8v-2h12v-1h1V9h1V6h1V3zm16 3v3h-1v2H7V7H6V5h15v1z"></svg:path>`,
})
export class PixelShoppingCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelShoppingCartSolidIcon],svg[pixel-shopping-cart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19h1v2H9v1H7v-1H6v-2h1v-1h2zm11 0h1v2h-1v1h-2v-1h-1v-2h1v-1h2zm3-16v3h-1v3h-1v3h-1v1H8v2h12v2H7v-1H6v-4H5V7H4V4H1V2h3v1z"></svg:path>`,
})
export class PixelShoppingCartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelShuffleIcon],svg[pixel-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15h1v2H8v1H7v1H1v-2h6v-1h1zm13 1h1v2h-1v1h-1v1h-1v1h-1v-3h-4v-1h-1v-1h-1v-2h-1v-1h-1v-2H9v-1H8V8H7V7H1V5h7v1h1v2h1v2h1v1h1v2h1v1h1v2h4v-3h1v1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M22 5v2h-1v1h-1v1h-1v1h-1V7h-4v1h-1v1h-1V7h1V6h1V5h4V2h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelShuffleSolidIcon],svg[pixel-shuffle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14h1v3H8v1H7v1H1v-3h6v-1h1z"></svg:path><svg:path fill="currentColor" d="M22 17h1v1h-1v1h-1v1h-1v1h-1v1h-1v-3h-4v-1h-1v-1h-1v-2h-1v-1h-1v-2H9v-1H8V9H7V8H1V5h7v1h1v2h1v2h1v1h1v2h1v1h1v2h4v-3h1v1h1v1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M23 6v1h-1v1h-1v1h-1v1h-1v1h-1V8h-4v1h-1v1h-1V7h1V6h1V5h4V2h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelShuffleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSocietyIcon],svg[pixel-society-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.502 9.502h-1v1h1zm4.001 0h-1v1h1z"></svg:path><svg:path fill="currentColor" d="M22.505 9.502v-2h-1V5.5h-1v-1h-1v-1h-2.001v-1h-2v-1H9.501v1h-2v1H5.5v1h-1v1h-1v2.001h-1v2h-1v6.002h1v2h1v2.001h1v1h1v1h2.001v1h2v1.001h6.002v-1h2v-1h2.001v-1h1v-1h1v-2.001h1v-2h1.001V9.501zm-2 6.001h-5.002v1h1v2H9.502v-2h1v-1H5.501v-2h1v-1h2v-1h-1v-1.001h-1v-3h1v-1h3.001v1h1v2h3.001v-2h1v-1h3v1h1.001v3h-1v1h-1v1h2v1h1z"></svg:path><svg:path fill="currentColor" d="M12.503 14.503v1h-2v-2h1v1zm3-1v2h-2v-1h1v-1zm1-3.001h-1v3h1zm-6.001 0h-1v3h1z"></svg:path>`,
})
export class PixelSocietyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSortIcon],svg[pixel-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v-1H5v1H4v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2zm-2 2h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1h10zm2-8V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v2h1v1h14v-1h1V8zm-2 1H7V8h1V7h1V6h1V5h1V4h2v1h1v1h1v1h1v1h1z"></svg:path>`,
})
export class PixelSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSortSolidIcon],svg[pixel-sort-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v2h-1v1H5v-1H4V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1zm0 6v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-2h1v-1h14v1z"></svg:path>`,
})
export class PixelSortSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSoundMuteIcon],svg[pixel-sound-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v2h-1v1h-1v2h1v1h1v2h-2v-1h-1v-1h-1v1h-1v1h-2v-2h1v-1h1v-2h-1v-1h-1V8h2v1h1v1h1V9h1V8zM11 2v1h-1v1H9v1H8v1H7v1H6v1H1v8h5v1h1v1h1v1h1v1h1v1h1v1h3V2zm-8 8h4V9h1V8h1V7h1V6h1V5h1v14h-1v-1h-1v-1H9v-1H8v-1H7v-1H3z"></svg:path>`,
})
export class PixelSoundMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSoundMuteSolidIcon],svg[pixel-sound-mute-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2v20h-3v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H1V8h5V7h1V6h1V5h1V4h1V3h1V2zm8 6v2h-1v1h-1v2h1v1h1v2h-2v-1h-1v-1h-1v1h-1v1h-2v-2h1v-1h1v-2h-1v-1h-1V8h2v1h1v1h1V9h1V8z"></svg:path>`,
})
export class PixelSoundMuteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSoundOnIcon],svg[pixel-sound-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15v-1h-1v-1h1v-2h-1v-1h1V9h1v1h1v4h-1v1z"></svg:path><svg:path fill="currentColor" d="M23 10v4h-1v2h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-4h-1V9h-1V8h-1V7h1V6h1v1h1v1h1v2zM11 2v1h-1v1H9v1H8v1H7v1H6v1H1v8h5v1h1v1h1v1h1v1h1v1h1v1h3V2zm1 17h-1v-1h-1v-1H9v-1H8v-1H7v-1H3v-4h4V9h1V8h1V7h1V6h1V5h1z"></svg:path>`,
})
export class PixelSoundOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSoundOnSolidIcon],svg[pixel-sound-on-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2v20h-3v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H1V8h5V7h1V6h1V5h1V4h1V3h1V2zm3 13v-1h-1v-1h1v-2h-1v-1h1V9h1v1h1v4h-1v1z"></svg:path><svg:path fill="currentColor" d="M23 10v4h-1v2h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-4h-1V9h-1V8h-1V7h1V6h1v1h1v1h1v2z"></svg:path>`,
})
export class PixelSoundOnSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSpinnerIcon],svg[pixel-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13h2v1h-2zm2-2h1v2h-1zm-2-1h2v1h-2zm-1 1h1v2h-1zm-2 8h2v1h-2zm2-2h1v2h-1zm-2-1h2v1h-2zm-1 1h1v2h-1zm-6 3h1v2h-1zm1 2h2v1h-2zm2-2h1v2h-1zm-2-1h2v1h-2zm-6 0h2v1H5zm8-17h1v2h-1zm-2 2h2v1h-2zm0-3h2v1h-2zm-1 1h1v2h-1zM7 17h1v2H7zM7 5h1v2H7zM5 7h2v1H5zm0 9h2v1H5zM5 4h2v1H5zM4 17h1v2H4zm0-6h1v2H4zm0-6h1v2H4zm-2 5h2v1H2zm0 3h2v1H2zm-1-2h1v2H1z"></svg:path>`,
})
export class PixelSpinnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSpinnerSolidIcon],svg[pixel-spinner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h1v2H7v1H5V7H4V5h1V4h2zm6-3h1v2h-1v1h-2V4h-1V2h1V1h2zM4 14H2v-1H1v-2h1v-1h2v1h1v2H4zm3 3h1v2H7v1H5v-1H4v-2h1v-1h2zm16-6v2h-1v1h-2v-1h-1v-2h1v-1h2v1zm-4 6h1v2h-1v1h-2v-1h-1v-2h1v-1h2zm-6 3h1v2h-1v1h-2v-1h-1v-2h1v-1h2z"></svg:path>`,
})
export class PixelSpinnerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSpinnerThirdIcon],svg[pixel-spinner-third-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-2v-2h1V9h-1V7h-1V5h-2V4h-2V3h-3V1h3v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelSpinnerThirdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSpinnerThirdSolidIcon],svg[pixel-spinner-third-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-3v-2h1V9h-1V7h-1V6h-1V5h-2V4h-2V3h-1V1h3v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelSpinnerThirdSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelStarIcon],svg[pixel-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8V6h-1V4h-1V2h-1V1h-2v1h-1v2H9v2H8v2H1v2h1v1h1v1h1v1h1v1h1v5H5v4h2v-1h2v-1h2v-1h2v1h2v1h2v1h2v-4h-1v-5h1v-1h1v-1h1v-1h1v-1h1V8zm4 3h-1v1h-1v1h-1v1h-1v5h1v1h-2v-1h-2v-1h-2v1H9v1H7v-1h1v-5H7v-1H6v-1H5v-1H4v-1h4V9h1V8h1V6h1V4h2v2h1v2h1v1h1v1h4z"></svg:path>`,
})
export class PixelStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelStarCrescentIcon],svg[pixel-star-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10v1h-1v1h-1v2h1v3h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v-3h1v-2h-1v-1h-1v-1h3V8h1V7h1v1h1v2z"></svg:path><svg:path fill="currentColor" d="M8 10V8h1V6h1V5h2V4h2V3h3V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h-3v-1h-2v-1h-2v-1H9v-2H8v-2H7v-4zm-2 4v2h1v2h1v1h1v1h1v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h1v1H9v1H8v1H7v2H6v2H5v4z"></svg:path>`,
})
export class PixelStarCrescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelStarCrescentSolidIcon],svg[pixel-star-crescent-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21h3v1h-2v1H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h-3v1h-2v1h-2v1H9v2H8v2H7v4h1v2h1v2h1v1h2v1h2z"></svg:path><svg:path fill="currentColor" d="M23 10v1h-1v1h-1v2h1v3h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v-3h1v-2h-1v-1h-1v-1h3V8h1V7h1v1h1v2z"></svg:path>`,
})
export class PixelStarCrescentSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelStarSolidIcon],svg[pixel-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8v2h-1v1h-1v1h-1v1h-1v1h-1v5h1v4h-2v-1h-2v-1h-2v-1h-2v1H9v1H7v1H5v-4h1v-5H5v-1H4v-1H3v-1H2v-1H1V8h7V6h1V4h1V2h1V1h2v1h1v2h1v2h1v2z"></svg:path>`,
})
export class PixelStarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelStartupsIcon],svg[pixel-startups-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.505 1.5v5.001h-1v2h-1v1h-1v-1h-1v-1h-1.001v-1h-1v-1h-1v-1h-1v-1h1v-1h2V1.5zM11.502 13.503v2h-1v1h-1v1h-1v1.001h-1v1H5.5v-2h1v-1h1v-1h1v-1h1v-1.001z"></svg:path><svg:path fill="currentColor" d="M19.504 9.502v-1h-1v-1h-1V6.5h-1v-1h-1v-1h-1.001v1h-1v1h-1v1h-1v1h-1.001v1H4.501v1h-1v1.001h-1v1H1.5v2h4v-1h1.001v-1h1v-1h1v-1h1v1h-1v1h-1v2h1v-1h1v-1h3.002v3.001h-1v1h-1.001v1h2v-1h1v-1h1.001v1h-1v1h-1v1h-1v1h-1.001v4.002h2v-1h1v-1h1.001v-1h1v-6.002h1v-1h1v-1h1v-1h1.001v-1.001h1v-1zm-2-1v2h-1v1h-2.001v-1h-1v-2h1v-1h2v1z"></svg:path>`,
})
export class PixelStartupsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSteamIcon],svg[pixel-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-1v3h1zm-1 3h-3v1h3zm0-4h-3v1h3zm-3 1h-1v3h1zm-4 10H7v1h3zm0-4H8v1h2zm1 1h-1v3h1z"></svg:path><svg:path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2h1v1h2v1h2v1H6v1h1v1h3v-1h1v-1h1v-2h1v-1h2v-1h2v-1h2v-2h1V8h-1V6h-2V5h-3v1h-2v2h-1v3h-1v1H9v1H7v1H6v-1H4v-1H2v-1H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelStrikeThroughIcon],svg[pixel-strike-through-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h20v2H2zm17-9v1H9v1H8v5H6V3h1V2h1V1h10v1zm-1 13v6h-1v1h-1v1H6v-1H5v-1h10v-1h1v-5z"></svg:path>`,
})
export class PixelStrikeThroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelStrikeThroughSolidIcon],svg[pixel-strike-through-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16v5h-1v1h-1v1H6v-1H5v-2h9v-1h1v-3zm4-5v2h-1v1H3v-1H2v-2h1v-1h18v1zM6 8V3h1V2h1V1h10v1h1v2h-9v1H9v3z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelStrikeThroughSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSunIcon],svg[pixel-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11v-1h1V9h1V7h-3V6h-2V4h-1V1h-2v1h-1v1h-1v1h-2V3h-1V2H9V1H7v3H6v2H4v1H1v2h1v1h1v1h1v2H3v1H2v1H1v2h3v1h2v2h1v3h2v-1h1v-1h1v-1h2v1h1v1h1v1h2v-3h1v-2h2v-1h3v-2h-1v-1h-1v-1h-1v-2zm-2 2v1h1v1h1v1h-3v1h-1v1h-1v3h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v-3H7v-1H6v-1H3v-1h1v-1h1v-1h1v-2H5v-1H4V9H3V8h3V7h1V6h1V3h1v1h1v1h1v1h2V5h1V4h1V3h1v2h1v2h1v1h3v1h-1v1h-1v1h-1v2z"></svg:path><svg:path fill="currentColor" d="M16 10V9h-1V8h-1V7h-4v1H9v1H8v1H7v4h1v1h1v1h1v1h4v-1h1v-1h1v-1h1v-4zm-1 4h-1v1h-4v-1H9v-4h1V9h4v1h1z"></svg:path>`,
})
export class PixelSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelSunSolidIcon],svg[pixel-sun-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10v4h-1v1h-1v1h-1v1h-4v-1H9v-1H8v-1H7v-4h1V9h1V8h1V7h4v1h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M21 11v-1h1V9h1V7h-3V6h-2V4h-1V1h-2v1h-1v1h-1v1h-2V3h-1V2H9V1H7v3H6v2H4v1H1v2h1v1h1v1h1v2H3v1H2v1H1v2h3v1h2v2h1v3h2v-1h1v-1h1v-1h2v1h1v1h1v1h2v-3h1v-2h2v-1h3v-2h-1v-1h-1v-1h-1v-2zm-3 4h-1v1h-1v1h-1v1H9v-1H8v-1H7v-1H6V9h1V8h1V7h1V6h6v1h1v1h1v1h1z"></svg:path>`,
})
export class PixelSunSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTableIcon],svg[pixel-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 14h8v5h-8zm0-1V9h8v6zm0-7V3h8v5zm-2 1v6H3V9zM3 8V3h8v5zm8 8v5H3v-5z"></svg:path>`,
})
export class PixelTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTableSolidIcon],svg[pixel-table-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 12v-4h7v4zm7 2v4h-7v-4zm-7-8V4h7v4zm-9 6v-4h7v4zm7 2v4H4v-4zM4 8V4h7v4z"></svg:path>`,
})
export class PixelTableSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTagIcon],svg[pixel-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v2H7v1H5V7H4V5h1V4h2v1z"></svg:path><svg:path fill="currentColor" d="M22 13v-1h-1v-1h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1H2v1H1v9h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2zM3 3h7v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3z"></svg:path>`,
})
export class PixelTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTagSolidIcon],svg[pixel-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v-1h-1v-1h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1H2v1H1v9h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2zM4 5h1V4h2v1h1v2H7v1H5V7H4z"></svg:path>`,
})
export class PixelTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTechCompaniesIcon],svg[pixel-tech-companies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.502 1.5v22.005h1v-5.001h3.001v5.001h6.002V1.5zm6.002 1v2h-2v-2zm0 5.001h-2v-2h2zm0 3.001h-2v-2h2zm0 3h-2v-2h2zm0 3.001h-2v-2h2zM12.502 2.5h2v2h-2zm0 3h2v2.001h-2zm0 3.002h2v2h-2zm0 3h2v2h-2zm0 3.001h2v2h-2zm8.002 7.002h-4v-3.001h4zm0-5.002h-2v-2h2zm0-3h-2v-2h2zm0-3.001h-2v-2h2zm0-3h-2V5.5h2zm0-3.001h-2v-2h2zm-19.004 4v15.004h3v-4.001h3.001v4h3.001V8.502zm1 1h3v2.001h-3zm0 3.001h3v2h-3zm0 5.001v-2h3v2zm7.002 0h-3v-2h3zm0-3h-3v-2h3zm0-3h-3V9.501h3z"></svg:path>`,
})
export class PixelTechCompaniesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTechStoriesIcon],svg[pixel-tech-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 2V1H2v1H1v20.005h1v1h20.005v-1h1V2zm-1 3H3V3h18.005zm0 11.003H3V9.002h18.005zM3 17.003h3.001v3.001h-3zm16.004 1H8.002v-1h11.002zM8.002 19.005h11.002v1H8.002zM3 6.001h12.003v2H3zm5.002 16.004v-1h11.002v1z"></svg:path>`,
})
export class PixelTechStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTechnologyIcon],svg[pixel-technology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.504 7.501H7.5v10.003h10.003z"></svg:path><svg:path fill="currentColor" d="M21.505 5.5v-2h-2v-2h-2.001v2h-2v-2h-2.001v2h-2v-2H9.501v2h-2v-2H5.5v2h-2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h2v2.001h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v-2h2.001v-2.001h-2v-2h2v-2.001h-2v-2h2V9.501h-2v-2h2V5.5zm-2 14.004H5.5V5.501h14.003z"></svg:path>`,
})
export class PixelTechnologyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThemesIcon],svg[pixel-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18v1H6v1H5v-1H4v-1h1v-1h1v1z"></svg:path><svg:path fill="currentColor" d="M22 16v-1h-1v-1h-4v-1h1v-1h1v-1h1v-1h1V9h1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-2v1h-1v1h-1v1h-1v1h-1v1h-1V3H9V2H8V1H3v1H2v1H1v17h1v2h1v1h18v-1h1v-1h1v-5ZM8 20H7v1H4v-1H3v-6h5Zm0-8H3V9h5Zm0-5H3V4h1V3h3v1h1Zm2 3h1V9h1V8h1V7h1V6h1V5h2v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1Zm11 10h-1v1H10v-1h1v-1h1v-1h1v-1h1v-1h6v1h1Z"></svg:path>`,
})
export class PixelThemesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThemesSolidIcon],svg[pixel-themes-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-1h-1v-1h-4v-1h1v-1h1v-1h1v-1h1V9h1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-2v1h-1v1h-1v1h-1v1h-1v1h-1V3H9V2H8V1H3v1H2v1H1v17h1v2h1v1h18v-1h1v-1h1v-5ZM8 7v2H3V7Zm-5 5h5v2H3Zm4 7H6v1H5v-1H4v-1h1v-1h1v1h1Zm9-7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-7h1V9h1V8h1V7h1V6h1V5h2v1h1v1h1v2h-1v1h-1v1h-1Z"></svg:path>`,
})
export class PixelThemesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThreadsIcon],svg[pixel-threads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v3H2v8h1v3h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-7h-1v-1h-1v-1h-3V8h-1V7h-1V6h-4v1H9v1H8v1h3V8h2v1h1v1h-4v1H9v1H8v4h1v1h1v1h4v-1h1v-1h1v-4h2v1h1v5h-1v1h-1v1h-2v1H9v-1H7v-1H6v-1H5v-3H4V9h1V6h1V5h1V4h2V3h6v1h2v1h1v1h1v2h3V7zm-8 8v1h-2v-1h-1v-2h1v-1h2v1h1v2z"></svg:path>`,
})
export class PixelThreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThumbsdownIcon],svg[pixel-thumbsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v13H2v-1H1V3h1V2zm16 10V9h-1V6h-1V3h-1V2h-7v1h-2v1H9v1H8v9h1v1h1v1h1v2h1v3h1v1h2v-1h1v-4h-1v-2h7v-1h1v-2zm-2 1h-6v1h-1v1h-1v-1h-1v-1h-1V6h1V5h2V4h5v2h1v3h1z"></svg:path>`,
})
export class PixelThumbsdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThumbsdownSolidIcon],svg[pixel-thumbsdown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v13H2v-1H1V3h1V2zm17 10v2h-1v1h-7v2h1v4h-1v1h-2v-1h-1v-3h-1v-2h-1v-1H9v-1H8V5h1V4h1V3h2V2h7v1h1v3h1v3h1v3z"></svg:path>`,
})
export class PixelThumbsdownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThumbsupIcon],svg[pixel-thumbsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V9h-7V7h1V3h-1V2h-2v1h-1v3h-1v2h-1v1H9v1H8v9h1v1h1v1h2v1h7v-1h1v-3h1v-3h1v-3h1v-2zm-3 5v3h-1v2h-5v-1h-2v-1h-1v-7h1v-1h1V9h1v1h1v1h6v4zM6 9v13H2v-1H1V10h1V9z"></svg:path>`,
})
export class PixelThumbsupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThumbsupSolidIcon],svg[pixel-thumbsup-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10v2h-1v3h-1v3h-1v3h-1v1h-7v-1h-2v-1H9v-1H8v-9h1V9h1V8h1V6h1V3h1V2h2v1h1v4h-1v2h7v1zM6 9v13H2v-1H1V10h1V9z"></svg:path>`,
})
export class PixelThumbsupSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThumbtackIcon],svg[pixel-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13v-1h-1v-1h-1V4h2V2h-1V1H7v1H6v2h2v7H7v1H6v1H5v2h1v1h5v7h2v-7h5v-1h1v-2zM9 3h6v1h-1v8h1v1h1v1H8v-1h1v-1h1V4H9z"></svg:path>`,
})
export class PixelThumbtackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelThumbtackSolidIcon],svg[pixel-thumbtack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v2h-1v1h-5v7h-2v-7H6v-1H5v-2h1v-1h1v-1h1V4H6V2h1V1h10v1h1v2h-2v7h1v1h1v1z"></svg:path>`,
})
export class PixelThumbtackSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTiktokIcon],svg[pixel-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7v4h-2v-1h-2V9h-1v10h-1v1h-1v1h-1v1h-1v1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-4h1v-2h1v-1h1v-1h1V9h4v4H8v1H7v3h1v1h3v-1h1V1h4v1h1v2h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTimesIcon],svg[pixel-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2H9v-1H8V9H7V8H6V7H5V6H4V5H3V4H2V3h1V2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1z"></svg:path>`,
})
export class PixelTimesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTimesCircleIcon],svg[pixel-times-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v-1H7v-1h1v-1h1v-1h1v-2H9v-1H8V9H7V8h1V7h1v1h1v1h1v1h2V9h1V8h1V7h1v1h1v1h-1v1h-1v1h-1z"></svg:path><svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1z"></svg:path>`,
})
export class PixelTimesCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTimesCircleSolidIcon],svg[pixel-times-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-8 7v-1h-1v-1h-2v1h-1v1H9v1H8v-1H7v-1h1v-1h1v-1h1v-2H9v-1H8V9H7V8h1V7h1v1h1v1h1v1h2V9h1V8h1V7h1v1h1v1h-1v1h-1v1h-1v2h1v1h1v1h1v1h-1v1h-1v-1z"></svg:path>`,
})
export class PixelTimesCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTimesSolidIcon],svg[pixel-times-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v-1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2H8v-1H7V9H6V8H5V7H4V6H3V5H2V4h1V3h1V2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1z"></svg:path>`,
})
export class PixelTimesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTranslateIcon],svg[pixel-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22h11v1H11zm11-12h1v12h-1zM11 9h11v1H11zm11-4v1h-1v1h-1v1h-2V7h-1V6h-1V5h2V4h-1V3h-1V2h3v1h1v2zm-2 11v-2h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v2h-1v5h2v-3h5v3h2v-5zm-1 1h-5v-1h1v-2h3v2h1zm-9-7h1v12h-1zm3-8h1v6h-1zM2 1h11v1H2zM1 2h1v12H1zm1 12h7v1H2z"></svg:path><svg:path fill="currentColor" d="M12 4V3H3v1h4v2H6V5H4v1H3v4h1v1h2v-1h1v3h1V8h1V7h2v1h1V6h-1V5H9v1H8V4zM7 8H6v1H4V7h3zM6 19v1h1v1h1v1H5v-1H4v-2H2v-1h1v-1h1v-1h2v1h1v1h1v1z"></svg:path>`,
})
export class PixelTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTranslateSolidIcon],svg[pixel-translate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16v1h-5v-1h1v-2h3v2zm3-11v1h-1v1h-1v1h-2V7h-1V6h-1V5h2V4h-1V3h-1V2h3v1h1v2z"></svg:path><svg:path fill="currentColor" d="M22 10V9H11v1h-1v12h1v1h11v-1h1V10zm-1 11h-2v-3h-5v3h-2v-5h1v-2h1v-1h1v-1h1v-1h1v1h1v1h1v1h1v2h1zM7 7v1H6v1H4V7z"></svg:path><svg:path fill="currentColor" d="M14 2v6h-2V6h-1V5H9v1H8V4h4V3H3v1h4v2H6V5H4v1H3v4h1v1h2v-1h1v3h1V8h1V7h2v1h-1v1H9v6H2v-1H1V2h1V1h11v1zM6 19v1h1v1h1v1H5v-1H4v-2H2v-1h1v-1h1v-1h2v1h1v1h1v1z"></svg:path>`,
})
export class PixelTranslateSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTrashIcon],svg[pixel-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v8h1v8h1v1h12v-1h1v-8h1V6zm14 7h-1v8H7v-8H6V8h12zm3-10v2H3V3h1V2h5V1h6v1h5v1z"></svg:path>`,
})
export class PixelTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTrashAltIcon],svg[pixel-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V4h-1V3h-1V2h-1V1H9v1H8v1H7v1H6v1H2v2h2v15h1v1h14v-2h1V7h1V5zM8 4h1V3h6v1h1v1H8zm10 17H6V7h12z"></svg:path><svg:path fill="currentColor" d="M8 9h2v10H8zm6 0h2v10h-2z"></svg:path>`,
})
export class PixelTrashAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTrashAltSolidIcon],svg[pixel-trash-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3v2H2V3h6V2h1V1h6v1h1v1zM4 7v15h1v1h14v-2h1V7zm12 12h-2V9h2zm-6 0H8V9h2z"></svg:path>`,
})
export class PixelTrashAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTrashSolidIcon],svg[pixel-trash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6v8h-1v8h-1v1H6v-1H5v-8H4V6zm1-3v2H3V3h1V2h5V1h6v1h5v1z"></svg:path>`,
})
export class PixelTrashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTrendingIcon],svg[pixel-trending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 5v9h-1v-1h-1v-1h-1v-1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H5v1H4v1H3v1H1v-2h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5z"></svg:path>`,
})
export class PixelTrendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTrendingSolidIcon],svg[pixel-trending-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 5v10h-1v-1h-1v-1h-1v-1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H5v1H4v1H1v-3h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5z"></svg:path>`,
})
export class PixelTrendingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTrophyIcon],svg[pixel-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V2H6v2H1v5h1v2h1v1h1v1h1v1h1v1h3v1h2v3H7v3h10v-3h-4v-3h2v-1h3v-1h1v-1h1v-1h1v-1h1V9h1V4zM8 13H6v-1H5v-1H4V9H3V6h2v1h1v2h1v3h1zm0-4V4h8v5h-1v3h-1v2h-4v-2H9V9zm12 0v2h-1v1h-1v1h-2v-1h1v-2h1V7h1V6h2v3z"></svg:path>`,
})
export class PixelTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTrophySolidIcon],svg[pixel-trophy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V2H6v2H1v5h1v2h1v1h1v1h1v1h1v1h3v1h2v3H7v3h10v-3h-4v-3h2v-1h3v-1h1v-1h1v-1h1v-1h1V9h1V4zM5 12v-1H4V9H3V6h2v1h1v2h1v3h1v1H6v-1zm16-3h-1v2h-1v1h-1v1h-2v-1h1v-2h1V7h1V6h2z"></svg:path>`,
})
export class PixelTrophySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTwitchIcon],svg[pixel-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v1H5v1H4v1H3v1H2v14h5v4h1v-1h1v-1h1v-1h1v-1h4v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V1Zm14 11h-1v1h-1v1h-5v1h-1v1h-1v1h-1v-3H7V3h13Z"></svg:path><svg:path fill="currentColor" d="M16 5h2v5h-2zm-5 0h2v5h-2z"></svg:path>`,
})
export class PixelTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelTwitterIcon],svg[pixel-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5h1v1h-1zm0-2h1v1h-1zm-1 2v1h1v1h-1v5h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-3v1H4v-1H2v-1H1v-1h2v1h3v-1h1v-1H5v-1H4v-1H3v-1h2v-1H3v-1H2v-2h2V9H3V8H2V4h1v1h1v1h1v1h2v1h3v1h2V5h1V4h1V3h5v1h3v1z"></svg:path>`,
})
export class PixelTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUnderlineIcon],svg[pixel-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v15h-1v2h-1v2h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-2H3v-2H2V1h2v15h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V1z"></svg:path>`,
})
export class PixelUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUnderlineSolidIcon],svg[pixel-underline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v15h-1v2h-1v2h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-2H3v-2H2V1h3v15h1v2h1v1h2v1h6v-1h2v-1h1v-2h1V1z"></svg:path>`,
})
export class PixelUnderlineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUnlockIcon],svg[pixel-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v-1H8V5h1V4h1V3h4v1h1v1h1v4h2V5h-1V3h-1V2h-2V1h-4v1H8v1H7v2H6v6H3v1H2v10h1v1h18v-1h1V12zm-1 9H4v-8h16z"></svg:path>`,
})
export class PixelUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUnlockAltIcon],svg[pixel-unlock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12v-1H8V5h1V4h1V3h4v1h1v1h1v4h2V5h-1V3h-1V2h-2V1h-4v1H8v1H7v2H6v6H4v1H3v10h1v1h16v-1h1V12zm-1 9H5v-8h14z"></svg:path>`,
})
export class PixelUnlockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUnlockAltSolidIcon],svg[pixel-unlock-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v10h-1v1H4v-1H3V12h1v-1h1V6h1V4h1V3h1V2h2V1h4v1h2v1h1v1h1v2h1v3h-3V6h-1V5h-1V4h-4v1H9v1H8v5h12v1z"></svg:path>`,
})
export class PixelUnlockAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUnlockSolidIcon],svg[pixel-unlock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v10h-1v1H3v-1H2V12h1v-1h3V5h1V3h1V2h2V1h4v1h2v1h1v2h1v4h-3V5h-1V4h-4v1H9v6h12v1z"></svg:path>`,
})
export class PixelUnlockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUnsplashIcon],svg[pixel-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1h8v6H8zm15 10v12H1V11h7v6h8v-6z"></svg:path>`,
})
export class PixelUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUploadIcon],svg[pixel-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-2V9h-1V8h-1V7h-1V6h-1V5h-1v12h-2V5h-1v1H9v1H8v1H7v1H6v1zM2 20h20v3H2z"></svg:path>`,
})
export class PixelUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUploadAltIcon],svg[pixel-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h1v1h-1zm-2 0h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M22 16v-1h-7V8h4V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1h4v7H2v1H1v6h1v1h20v-1h1v-6zM9 6h1V5h1V4h2v1h1v1h1v1h-2v9h-2V7H9zm12 15H3v-4h7v1h4v-1h7z"></svg:path>`,
})
export class PixelUploadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUploadAltSolidIcon],svg[pixel-upload-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-1h-6v3h-1v1H9v-1H8v-3H2v1H1v6h1v1h20v-1h1v-6zm-4 4h-1v-1h1zm2 0h-1v-1h1z"></svg:path><svg:path fill="currentColor" d="M19 7v1h-4v9h-1v1h-4v-1H9V8H5V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelUploadAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUploadSolidIcon],svg[pixel-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10H4V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-2v-1h-1V9h-1V8h-1v9h-4V8H9v1H8v1H7v1H5zM2 20h20v3H2z"></svg:path>`,
})
export class PixelUploadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUserIcon],svg[pixel-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5V3h-1V2h-2V1h-4v1H8v1H7v2H6v4h1v2h1v1h2v1h4v-1h2v-1h1V9h1V5zm-2 4v1h-1v1h-4v-1H9V9H8V5h1V4h1V3h4v1h1v1h1v4zm6 10v-1h-1v-1h-1v-1h-2v-1H7v1H5v1H4v1H3v1H2v3h1v1h18v-1h1v-3zM5 19v-1h2v-1h10v1h2v1h1v2H4v-2z"></svg:path>`,
})
export class PixelUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUserCheckIcon],svg[pixel-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16v-1h-1v-1h-1v-1h-2v1H6v-1H4v1H3v1H2v1H1v4h1v1h13v-1h1v-4zm-1 3H3v-3h1v-1h2v1h5v-1h2v1h1zm9-10v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h1v-1h1v1h2v-1h1V9h1V8h1v1zM12 6V4h-2V3H7v1H5v2H4v3h1v2h2v1h3v-1h2V9h1V6zm-2 3v1H7V9H6V6h1V5h3v1h1v3z"></svg:path>`,
})
export class PixelUserCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUserCheckSolidIcon],svg[pixel-user-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h1v-1h1v1h2v-1h1V9h1V8h1v1zM13 6v3h-1v2h-2v1H7v-1H5V9H4V6h1V4h2V3h3v1h2v2zm3 10v4h-1v1H2v-1H1v-4h1v-1h1v-1h1v-1h2v1h5v-1h2v1h1v1h1v1z"></svg:path>`,
})
export class PixelUserCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUserHeadsetIcon],svg[pixel-user-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7H9v1H8v3h1v3H8v-1H7v-1H6V8h1V6h1V5h1V4h6v1h1v1h1v2h1v2h-1v1h-1V8h-1V6h-5z"></svg:path><svg:path fill="currentColor" d="M20 6v6h-1v1h-1v1h-2v1h-6v-3h3v1h4v-1h1v-1h1V7h-1V5h-1V4h-1V3h-1V2H9v1H8v1H7v1H6v2H5v4H4v-1H3V7h1V6h1V4h1V3h1V2h1V1h8v1h1v1h1v1h1v2zm1 13v-1h-1v-1h-1v-1h-4v1H9v-1H5v1H4v1H3v1H2v3h1v1h18v-1h1v-3zm-1 2H4v-2h1v-1h3v1h8v-1h3v1h1z"></svg:path>`,
})
export class PixelUserHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUserHeadsetSolidIcon],svg[pixel-user-headset-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6v6h-1v1h-1v1h-2v1h-6v-3h3v1h4v-1h1v-1h1V7h-1V5h-1V4h-1V3h-1V2H9v1H8v1H7v1H6v2H5v4H4v-1H3V7h1V6h1V4h1V3h1V2h1V1h8v1h1v1h1v1h1v2z"></svg:path><svg:path fill="currentColor" d="M18 8v2h-1v1h-1v1h-2v-1H9v3H8v-1H7v-1H6V8h1V6h1V5h1V4h6v1h1v1h1v2zm4 11v3h-1v1H3v-1H2v-3h1v-1h1v-1h1v-1h4v1h6v-1h4v1h1v1h1v1z"></svg:path>`,
})
export class PixelUserHeadsetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUserSolidIcon],svg[pixel-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9H6V5h1V3h1V2h2V1h4v1h2v1h1v2h1v4h-1v2h-1v1h-2v1h-4v-1H8v-1H7zm15 10v3h-1v1H3v-1H2v-3h1v-1h1v-1h1v-1h2v-1h10v1h2v1h1v1h1v1z"></svg:path>`,
})
export class PixelUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUsersIcon],svg[pixel-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18v-1h-1v-1h-2v-1H8v1H6v1H5v1H4v3h1v1h14v-1h1v-3zM8 18v-1h8v1h2v2H6v-2zm7-11V6h-1V5h-4v1H9v1H8v4h1v1h1v1h4v-1h1v-1h1V7zm-5 4V7h4v4zM7 5h1v1H7v2H5V7H4V5h1V4h2zm0 7h1v1H2v-1H1v-2h1V9h5zm10-6h-1V5h1V4h2v1h1v2h-1v1h-2zm6 4v2h-1v1h-6v-1h1V9h5v1z"></svg:path>`,
})
export class PixelUsersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUsersCrownIcon],svg[pixel-users-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12v-1h1V5h4v1h1v5h-1v1zm0-9h-1v1h-1v1h-1V4H9V3H8v1H7v1H6V4H5V3H4v7h1v1h1v1h5v-1h1v-1h1zm-2 6h-1v1H7V9H6V7h5zm12 8v3h-1v1h-6v-1h1v-4h-1v-1h-1v-1h5v1h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M15 17v-1h-1v-1h-1v-1H4v1H3v1H2v1H1v3h1v1h13v-1h1v-3zM4 17v-1h9v1h1v2H3v-2z"></svg:path>`,
})
export class PixelUsersCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUsersCrownSolidIcon],svg[pixel-users-crown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20h-1v1H2v-1H1v-3h1v-1h1v-1h1v-1h9v1h1v1h1v1h1zm-3-8v-1h1V5h4v1h1v5h-1v1z"></svg:path><svg:path fill="currentColor" d="M23 17v3h-1v1h-6v-1h1v-4h-1v-1h-1v-1h5v1h1v1h1v1zM12 3v1h-1v1h-1V4H9V3H8v1H7v1H6V4H5V3H4v7h1v1h1v1h5v-1h1v-1h1V3zm-1 6h-1v1H7V9H6V7h5z"></svg:path>`,
})
export class PixelUsersCrownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelUsersSolidIcon],svg[pixel-users-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13v-1H1v-2h1V9h5v3h1v1zm3-6H4V5h1V4h2v1h1v1H7v2H5zm3 0h1V6h1V5h4v1h1v1h1v4h-1v1h-1v1h-4v-1H9v-1H8zm11 11h1v3h-1v1H5v-1H4v-3h1v-1h1v-1h2v-1h8v1h2v1h1zm4-8v2h-1v1h-6v-1h1V9h5v1zm-6-4h-1V5h1V4h2v1h1v2h-1v1h-2z"></svg:path>`,
})
export class PixelUsersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelViewblocksIcon],svg[pixel-viewblocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11V9h-1V7h-1V6h-1V5h-1V4h-2V3h-2V1h-2v2H9v1H7v1H6v1H5v1H4v2H3v2H1v2h2v2h1v2h1v1h1v1h1v1h2v1h2v2h2v-2h2v-1h2v-1h1v-1h1v-1h1v-2h1v-2h2v-2zm-10 8h-1v-1H8v-1H7v-1H6v-1H5V9h1v1h1v1h1v1h2v1h1zm-1-8v-1H8V9H7V8H6V7h2V6h2V5h4v1h2v1h2v1h-1v1h-1v1h-2v1zm9 4h-1v1h-1v1h-1v1h-2v1h-1v-6h1v-1h2v-1h1v-1h1V9h1z"></svg:path>`,
})
export class PixelViewblocksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelVoteYeahIcon],svg[pixel-vote-yeah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1h1V9h1v1h2V9h1V8h1V7h1v1z"></svg:path><svg:path fill="currentColor" d="M18 5V4H6v1H5v12h14V5zm-1 10H7V6h10z"></svg:path><svg:path fill="currentColor" d="M23 15v4h-1v1H2v-1H1v-4h1v-1h2v2H3v2h18v-2h-1v-2h2v1z"></svg:path>`,
})
export class PixelVoteYeahIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelVoteYeahSolidIcon],svg[pixel-vote-yeah-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V4H6v1H5v12h14V5zm-2 4h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1h1V9h1v1h2V9h1V8h1V7h1v1h1z"></svg:path><svg:path fill="currentColor" d="M23 15v4h-1v1H2v-1H1v-4h1v-1h2v2H3v2h18v-2h-1v-2h2v1z"></svg:path>`,
})
export class PixelVoteYeahSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelWalletIcon],svg[pixel-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12v1h1v2h-1v1h-2v-1h-1v-2h1v-1z"></svg:path><svg:path fill="currentColor" d="M23 8v13h-1v1H2v-1H1V3h1V2h19v1h1v1H3v16h18V9H5V7h17v1z"></svg:path>`,
})
export class PixelWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelWalletSolidIcon],svg[pixel-wallet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V7H4V5h18V3h-1V2H2v1H1v18h1v1h20v-1h1V8zm-1 7h-1v1h-2v-1h-1v-2h1v-1h2v1h1z"></svg:path>`,
})
export class PixelWalletSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelWeb3Icon],svg[pixel-web3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.502 22.505h-1v1h1zm-1-1v1h-2v-1H5.5v-1h-1v-1h-1v-1.001h-1v-2h5v3h1v2z"></svg:path><svg:path fill="currentColor" d="M16.503 16.503v2h-1v2.001h-1v2h-1v1.001h-2v-1h-1.001v-2h-1v-2.001h-1v-2zm-1 6.002h-1v1h1zm7.002-6.002v2h-1v1.001h-1v1h-1v1h-2.001v1h-2v-1h1v-2h1v-3zm-6.002-6.001h-2v1h2zm0 2h-2v1h2z"></svg:path><svg:path fill="currentColor" d="M1.5 8.501v7.002h22.005V8.501zm6.001 4.001h-1v2h-1v-2h-1v2h-1v-2h-1v-3h1v3h1v-1h1v1h1v-3h1zm5.001-2h-3v1h2v1h-2v1h3v1h-4v-5h4zm5.002 1h-1v1h1v1h-1v1h-3.001v-5h3v1h1zm5 0h-1v1h1v1h-1v1h-3v-1h3v-1h-2v-1h2v-1h-3v-1h3v1h1zm.001-5.002v1.001h-5.001v-2h-1v-2h-1V2.5h2v1h2v1h1v1h1v1zm-7.002-5h-1v1h1zm1 5.001v1H8.502v-1h1v-2h1v-2h1V1.5h2v1h1.001v2h1v2.001zM10.502 1.5h-1v1h1zm-1 1v1h-1v2h-1v2.001H2.5v-1h1v-1h1v-1h1v-1h2.001V2.5z"></svg:path>`,
})
export class PixelWeb3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelWikipediaIcon],svg[pixel-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 5v1h-1v1h-1v2h-1v2h-1v2h-1v2h-1v3h-1v1h-1v-1h-1v-3h-1v-2h-1v2h-1v2h-1v1H9v1H8v-1H7v-3H6v-2H5v-2H4V9H3V7H2V6H1V5h5v1H5v1h1v2h1v2h1v2h1v2h1v-1h1v-2h1v-1h-1V9h-1V7H9V6H8V5h4v1h-1v1h1v1h2V6h-1V5h4v1h-1v1h-1v2h-1v3h1v2h2v-2h1v-2h1V8h1V6h-1V5z"></svg:path>`,
})
export class PixelWikipediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelWindowCloseIcon],svg[pixel-window-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-1 19H3V3h18z"></svg:path><svg:path fill="currentColor" d="M15 13h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v-1H7v-1H6v-1h1v-1h1v-1h1v-2H8v-1H7V9H6V8h1V7h1V6h1v1h1v1h1v1h2V8h1V7h1V6h1v1h1v1h1v1h-1v1h-1v1h-1z"></svg:path>`,
})
export class PixelWindowCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelWindowCloseSolidIcon],svg[pixel-window-close-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-4 7h-1v1h-1v1h-1v2h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v-1H7v-1H6v-1h1v-1h1v-1h1v-2H8v-1H7V9H6V8h1V7h1V6h1v1h1v1h1v1h2V8h1V7h1V6h1v1h1v1h1z"></svg:path>`,
})
export class PixelWindowCloseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelWritingIcon],svg[pixel-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.505 7.501v2h-1v1h-1v-1h-1v-1h-1.001v-1h1v-1h2v1zm-2 3.001v1h-1v1h-1v1h-1.001v1h-1v1.001h-1v1h-1v1h-1.001v1h-3v-3h1v-1h1v-1h1v-1h1v-1h1v-1.001h1v-1h1v-1h1.001v1h1v1z"></svg:path><svg:path fill="currentColor" d="M17.504 2.5v-1H2.5v1h-1v20.005h1v1h15.004v-1h1v-6.002h-1v1h-1v1h-1v1.001h-5.002v-5.001h1v-1h1v-1h1v-1h1.001v-1.001h1v-1h1v-1h1v-1h1V2.5zm-1 3H3.5v-1h13.003zm-2.001 3.002H3.5v-1h11.003zm-6.001 9.002H3.5v-1h5.002zM3.5 14.503v-1h6.002v1zm0-3v-1.001h9.003v1z"></svg:path>`,
})
export class PixelWritingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelXIcon],svg[pixel-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 10V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2V7h-1V6h-1V4h-1V3h-1V2h-7v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1zm0 4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1V9h-1V7h-1V6h-1V4h3v1h1v2h1v1h1v2h1v1h1v1h1v2z"></svg:path>`,
})
export class PixelXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pixelYoutubeIcon],svg[pixel-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7V5h-2V4H4v1H2v2H1v10h1v2h2v1h16v-1h2v-2h1V7zm-10 8h-2V9h2v1h2v1h2v2h-2v1h-2z"></svg:path>`,
})
export class PixelYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
