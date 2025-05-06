import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riP2pLineIcon],svg[ri-p2p-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6M7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2zm-9-8a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m7-2a2 2 0 0 0-2 2h-2a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2M5 21a2 2 0 1 1 4 0h2a4 4 0 0 0-8 0z"></svg:path>`,
})
export class RiP2pLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPageSeparatorIcon],svg[ri-page-separator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5zM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3zM2 9l4 3l-4 3zm20 0v6l-4-3z"></svg:path>`,
})
export class RiPageSeparatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPagesFillIcon],svg[ri-pages-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1m1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM7 11v4h4v-4zm0 6v2h10v-2zm6-5v2h4v-2z"></svg:path>`,
})
export class RiPagesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPagesLineIcon],svg[ri-pages-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8v12h14V8zm0-2h14V4H5zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 10h4v4H7zm0 6h10v2H7zm6-5h4v2h-4z"></svg:path>`,
})
export class RiPagesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaintBrushFillIcon],svg[ri-paint-brush-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2.997h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1m2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2zm11.732 1.732L19.5 11.96l1.768 1.768a2.5 2.5 0 1 1-3.536 0"></svg:path>`,
})
export class RiPaintBrushFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaintBrushLineIcon],svg[ri-paint-brush-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.997v3h14v-3zm-1-2h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1m2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2zm11.732 1.732L19.5 11.96l1.768 1.768a2.5 2.5 0 1 1-3.536 0"></svg:path>`,
})
export class RiPaintBrushLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaintFillIcon],svg[ri-paint-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.228 18.732l1.767-1.767l1.768 1.767a2.5 2.5 0 1 1-3.535 0M8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778l-2.122-2.121zM11 6.03L3.929 13.1H18.07z"></svg:path>`,
})
export class RiPaintFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaintLineIcon],svg[ri-paint-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.228 18.732l1.767-1.767l1.768 1.767a2.5 2.5 0 1 1-3.535 0M8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778l-2.122-2.121zM11 6.03L3.929 13.1l7.07 7.072l7.072-7.071z"></svg:path>`,
})
export class RiPaintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaletteFillIcon],svg[ri-palette-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.522 0 10 3.978 10 8.889a5.56 5.56 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667c0 .422.167.811.422 1.1c.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22C6.478 22 2 17.522 2 12S6.478 2 12 2M7.5 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiPaletteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaletteLineIcon],svg[ri-palette-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.522 0 10 3.978 10 8.889a5.56 5.56 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667c0 .422.167.811.422 1.1c.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22C6.478 22 2 17.522 2 12S6.478 2 12 2m-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.56 3.56 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972a3.65 3.65 0 0 1-.513-1.86M7.5 12a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M12 9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiPaletteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPantoneFillIcon],svg[ri-pantone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 18.922l-1.35-.545a1 1 0 0 1-.552-1.302L4 12.367zM8.86 21H7a1 1 0 0 1-1-1v-6.078zM6.022 5.968l9.272-3.746a1 1 0 0 1 1.302.552l5.619 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L5.47 7.27a1 1 0 0 1 .553-1.302M9 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiPantoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPantoneLineIcon],svg[ri-pantone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.765 8l-.296-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.302.552l5.619 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302zM8 19h2.209L8 13.533zm-2-6.244l-1.673 4.141L6 17.608zm1.698-5.309l4.87 12.054l7.418-2.997l-4.87-12.053zm2.979 2.033a1 1 0 1 1-.75-1.855a1 1 0 0 1 .75 1.855"></svg:path>`,
})
export class RiPantoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParagraphIcon],svg[ri-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6v15h-2v-5a6 6 0 0 1 0-12h10v2h-3v15h-2V6zm-2 0a4 4 0 1 0 0 8z"></svg:path>`,
})
export class RiParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParentFillIcon],svg[ri-parent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10.5 4a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 1a4.5 4.5 0 0 1 4.5 4.5v.5h-9v-.5a4.5 4.5 0 0 1 4.5-4.5M7 12a5 5 0 0 1 5 5v4H2v-4a5 5 0 0 1 5-5"></svg:path>`,
})
export class RiParentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParentLineIcon],svg[ri-parent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10.5 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m2.5 6v-.5a2.5 2.5 0 0 0-5 0v.5h-2v-.5a4.5 4.5 0 1 1 9 0v.5zm-10 0v-4a3 3 0 1 0-6 0v4H2v-4a5 5 0 0 1 10 0v4z"></svg:path>`,
})
export class RiParentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParenthesesFillIcon],svg[ri-parentheses-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.923 21C5.113 18.664 4 15.493 4 12s1.113-6.664 2.923-9h2.014C7.235 5.388 6.2 8.542 6.2 12s1.035 6.612 2.737 9zm10.151 0H15.06c1.702-2.388 2.737-5.542 2.737-9s-1.035-6.612-2.737-9h2.014c1.81 2.336 2.923 5.507 2.923 9s-1.112 6.664-2.923 9"></svg:path>`,
})
export class RiParenthesesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParenthesesLineIcon],svg[ri-parentheses-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.923 21C5.113 18.664 4 15.493 4 12s1.113-6.664 2.923-9h2.014C7.235 5.388 6.2 8.542 6.2 12s1.035 6.612 2.737 9zm10.151 0H15.06c1.702-2.388 2.737-5.542 2.737-9s-1.035-6.612-2.737-9h2.014c1.81 2.336 2.923 5.507 2.923 9s-1.112 6.664-2.923 9"></svg:path>`,
})
export class RiParenthesesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParkingBoxFillIcon],svg[ri-parking-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14h1.5a3.5 3.5 0 1 0 0-7H9v10h2zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 6h1.5a1.5 1.5 0 0 1 0 3H11z"></svg:path>`,
})
export class RiParkingBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParkingBoxLineIcon],svg[ri-parking-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm4 2h3.5a3.5 3.5 0 1 1 0 7H11v3H9zm2 2v3h1.5a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class RiParkingBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParkingFillIcon],svg[ri-parking-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h7a6 6 0 0 1 0 12h-3v6H6zm4 4v4h3a2 2 0 1 0 0-4z"></svg:path>`,
})
export class RiParkingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParkingLineIcon],svg[ri-parking-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h7a6 6 0 0 1 0 12H8v6H6zm2 2v8h5a4 4 0 0 0 0-8z"></svg:path>`,
})
export class RiParkingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassExpiredFillIcon],svg[ri-pass-expired-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm9 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-5.473 7.025l-1.414-1.414A5.5 5.5 0 0 1 8.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16c-.967 0-1.84.39-2.475 1.025M16 10.585l1.793-1.792l1.414 1.414L17.414 12l1.793 1.793l-1.414 1.414L16 13.414l-1.793 1.793l-1.414-1.414L14.586 12l-1.793-1.793l1.414-1.414z"></svg:path>`,
})
export class RiPassExpiredFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassExpiredLineIcon],svg[ri-pass-expired-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18V6H3zM1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.5 5.5 0 0 1 8.002 14a5.5 5.5 0 0 1 3.889 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16m9.79-7.207L16 10.586l-1.793-1.793l-1.414 1.414L14.586 12l-1.793 1.793l1.414 1.414L16 13.414l1.793 1.793l1.414-1.414L17.414 12l1.793-1.793z"></svg:path>`,
})
export class RiPassExpiredLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassPendingFillIcon],svg[ri-pass-pending-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm7 6a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-5.473 7.025l-1.414-1.414A5.5 5.5 0 0 1 8.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16c-.967 0-1.84.39-2.475 1.025M13 15V9h2v6zm4 0V9h2v6z"></svg:path>`,
})
export class RiPassPendingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassPendingLineIcon],svg[ri-pass-pending-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18V6H3zM1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.5 5.5 0 0 1 8.002 14a5.5 5.5 0 0 1 3.889 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16M13 9v6h2V9zm4 0v6h2V9z"></svg:path>`,
})
export class RiPassPendingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassValidFillIcon],svg[ri-pass-valid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm7 6a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-5.473 7.025l-1.414-1.414A5.5 5.5 0 0 1 8.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16c-.967 0-1.84.39-2.475 1.025m14.68-6.318l-4 4l-.707.707l-.707-.707l-2.5-2.5l1.414-1.414l1.793 1.793l3.293-3.293z"></svg:path>`,
})
export class RiPassValidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassValidLineIcon],svg[ri-pass-valid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18V6H3zM1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.5 5.5 0 0 1 8.002 14a5.5 5.5 0 0 1 3.889 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16m8.205-1.293l4-4l-1.414-1.414l-3.293 3.293l-1.793-1.793l-1.414 1.414l2.5 2.5l.707.707z"></svg:path>`,
})
export class RiPassValidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassportFillIcon],svg[ri-passport-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-4 14H8v2h8zM12 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiPassportFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassportLineIcon],svg[ri-passport-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 2H5v16h14zm-3 12v2H8v-2zM12 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiPassportLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPatreonFillIcon],svg[ri-patreon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.001 17a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m-13-15h4v20h-4z"></svg:path>`,
})
export class RiPatreonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPatreonLineIcon],svg[ri-patreon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.001 17a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m0-2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-13-13h5v20h-5zm2 2v16h1V4z"></svg:path>`,
})
export class RiPatreonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseCircleFillIcon],svg[ri-pause-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M9 9v6h2V9zm4 0v6h2V9z"></svg:path>`,
})
export class RiPauseCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseCircleLineIcon],svg[ri-pause-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M9 9h2v6H9zm4 0h2v6h-2z"></svg:path>`,
})
export class RiPauseCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseFillIcon],svg[ri-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h2v14H6zm10 0h2v14h-2z"></svg:path>`,
})
export class RiPauseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseLargeFillIcon],svg[ri-pause-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h2v18H6zm10 0h2v18h-2z"></svg:path>`,
})
export class RiPauseLargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseLargeLineIcon],svg[ri-pause-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h2v18H6zm10 0h2v18h-2z"></svg:path>`,
})
export class RiPauseLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseLineIcon],svg[ri-pause-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h2v14H6zm10 0h2v14h-2z"></svg:path>`,
})
export class RiPauseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseMiniFillIcon],svg[ri-pause-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zM7 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z"></svg:path>`,
})
export class RiPauseMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseMiniLineIcon],svg[ri-pause-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zM7 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z"></svg:path>`,
})
export class RiPauseMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaypalFillIcon],svg[ri-paypal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.067 8.478c.492.88.557 2.014.3 3.327c-.74 3.806-3.275 5.12-6.513 5.12h-.5a.805.805 0 0 0-.794.68l-.041.22l-.63 3.993l-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.519l.949-6.02h1.386c4.678 0 7.749-2.203 8.795-6.502m-2.96-5.09c.762.868.984 1.81.753 3.285c-.02.123-.04.24-.063.36c-.735 3.773-3.088 5.446-6.955 5.446H8.957c-.63 0-1.173.414-1.353 1.002l-.015-.002l-.93 5.894H3.123a.05.05 0 0 1-.051-.06L5.67 2.803A.95.95 0 0 1 6.608 2h5.975c2.183 0 3.717.469 4.524 1.388"></svg:path>`,
})
export class RiPaypalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaypalLineIcon],svg[ri-paypal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.496 20.667h1.551l.538-3.376a2.805 2.805 0 0 1 2.77-2.366h.5c2.677 0 4.06-.983 4.55-3.503c.208-1.066.117-1.73-.171-2.102c-1.207 3.054-3.79 4.16-6.962 4.16h-.884c-.384 0-.793.209-.852.58zm-4.944-.294a.55.55 0 0 1-.544-.637l2.674-16.96A.92.92 0 0 1 6.59 2h6.424c2.213 0 3.942.467 4.9 1.558c.869.99 1.122 2.084.87 3.692q.542.285.916.706c.819.933.979 2.26.669 3.85c-.741 3.805-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.795.679l-.702 4.383a.804.804 0 0 1-.794.679H6.72a.483.483 0 0 1-.477-.558l.274-1.736zm6.836-8.894h.885c3.189 0 4.894-1.212 5.482-4.229q.03-.15.054-.309c.166-1.06.05-1.553-.399-2.063c-.465-.53-1.603-.878-3.396-.878h-5.5L5.247 18.373h1.561l.73-4.628l.008.001a2.915 2.915 0 0 1 2.842-2.267"></svg:path>`,
})
export class RiPaypalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPenNibFillIcon],svg[ri-pen-nib-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.929 21.482l5.846-5.846a2 2 0 1 0-1.414-1.414l-5.846 5.846l-1.06-1.06c2.828-3.3 3.888-6.954 5.302-13.082l6.364-.708l5.657 5.657l-.707 6.364c-6.128 1.415-9.782 2.475-13.081 5.304zM16.596 2.037l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23l-5.656-5.657l.212-1.485a.5.5 0 0 1 .848-.282"></svg:path>`,
})
export class RiPenNibFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPenNibLineIcon],svg[ri-pen-nib-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.596 1.037l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23l-5.656-5.657l.212-1.485a.5.5 0 0 1 .848-.282M4.595 20.147c3.722-3.33 7.995-4.327 12.643-5.52l.446-4.017l-4.297-4.298l-4.018.447c-1.192 4.648-2.189 8.92-5.52 12.643l-1.395-1.395c2.829-3.3 3.89-6.953 5.303-13.081l6.364-.708l5.657 5.657l-.707 6.364c-6.128 1.415-9.782 2.475-13.081 5.304zm5.284-6.029a2 2 0 1 1 2.828-2.828a2 2 0 0 1-2.828 2.828"></svg:path>`,
})
export class RiPenNibLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilFillIcon],svg[ri-pencil-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.9 6.855l4.242 4.242l-9.9 9.9H3v-4.243zm1.414-1.415l2.121-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415l-2.122 2.121z"></svg:path>`,
})
export class RiPencilFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilLineIcon],svg[ri-pencil-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.728 9.576l-1.414-1.414L5 17.476v1.414h1.414zm1.414-1.414l1.414-1.414l-1.414-1.414l-1.414 1.414zm-9.9 12.728H3v-4.243L16.435 3.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414z"></svg:path>`,
})
export class RiPencilLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilRuler2FillIcon],svg[ri-pencil-ruler-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.636 12.707l1.829 1.829l1.414-1.415l-1.829-1.828l1.415-1.414l1.828 1.828l1.414-1.414L9.88 8.464l1.414-1.414l1.828 1.829l1.415-1.415l-1.829-1.828l2.829-2.828a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1 0 1.414L8.465 21.192a1 1 0 0 1-1.415 0L2.808 16.95a1 1 0 0 1 0-1.414zm8.485 5.656l4.243-4.242L21 16.756V21h-4.242zM5.636 9.878L2.808 7.05a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 0 1 1.414 0l2.83 2.828z"></svg:path>`,
})
export class RiPencilRuler2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilRuler2LineIcon],svg[ri-pencil-ruler-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 14.121l-2.12 2.122l2.828 2.828L19.071 7.757L16.243 4.93L14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415l-1.414 1.415l1.414 1.414l-1.414 1.414l-1.414-1.414l-1.414 1.414l1.414 1.414l-1.414 1.415zm9.9-11.313l4.243 4.242a1 1 0 0 1 0 1.414L8.465 21.192a1 1 0 0 1-1.415 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0m-2.83 15.555l1.415-1.414l2.242 2.243h1.414v-1.414l-2.242-2.243l1.414-1.414L21 16.756V21h-4.242zM5.636 9.878L2.808 7.05a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 0 1 1.414 0l2.83 2.828L8.464 7.05l-2.12-2.122l-1.415 1.415l2.121 2.12z"></svg:path>`,
})
export class RiPencilRuler2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilRulerFillIcon],svg[ri-pencil-ruler-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18v2h4v-2zM3 7l4-5l4 5v15H3zm18 1h-2v2h2v2h-3v2h3v2h-2v2h2v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiPencilRulerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilRulerLineIcon],svg[ri-pencil-ruler-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8v12h4V8zM3 7l4-5l4 5v15H3zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiPencilRulerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPentagonFillIcon],svg[ri-pentagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .7l10.747 7.808l-4.105 12.634H5.358L1.253 8.508z"></svg:path>`,
})
export class RiPentagonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPentagonLineIcon],svg[ri-pentagon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.03l8.53 6.198l-3.258 10.028H6.729L3.47 9.228zm10.747 5.478L12 .7L1.253 8.508l4.105 12.634h13.284z"></svg:path>`,
})
export class RiPentagonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPercentFillIcon],svg[ri-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.505 21.003a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m-11-11a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m12.571-6.486l1.414 1.415L4.934 20.488L3.52 19.074z"></svg:path>`,
})
export class RiPercentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPercentLineIcon],svg[ri-percent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.505 21.003a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-11-9a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m12.571-4.486l1.414 1.415L4.934 20.488L3.52 19.074z"></svg:path>`,
})
export class RiPercentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPerplexityFillIcon],svg[ri-perplexity-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.735 2l5.695 5.247V2.012h1.109v5.259L18.259 2v5.983h2.349v8.629h-2.342v5.327l-5.727-5.032v5.09h-1.11V16.99L5.742 22v-5.388H3.393v-8.63h2.342zm4.86 7.078H4.5v6.439h1.24v-2.031zM6.85 13.972v5.585l4.58-4.034V9.81zm5.72 1.497l4.588 4.03v-2.887h-.006v-2.646l-4.582-4.16zm5.696.048H19.5v-6.44h-6.047l4.814 4.363zm-1.115-7.534V4.519l-3.76 3.464zm-6.548 0l-3.76-3.464v3.464z"></svg:path>`,
})
export class RiPerplexityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPerplexityLineIcon],svg[ri-perplexity-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.173 3.26L5.5 1.74V7.5H3V17h2.5v5.26l1.673-1.52L11 17.26V22h2v-4.74l3.827 3.48l1.673 1.52V17H21V7.5h-2.5V1.74l-1.673 1.52L13 6.74V2h-2v4.74zM16.5 7.5h-1.363L16.5 6.26zm-7.637 0H7.5V6.26zm1.1 2l-4.136 3.76l-.327.298V15H5V9.5zm4.074 0H19V15h-.5v-1.442l-.327-.298zM7.5 14.442l3.5-3.181v3.297L7.5 17.74zm5.5-3.181l3.5 3.181v3.297L13 14.558z"></svg:path>`,
})
export class RiPerplexityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneCameraFillIcon],svg[ri-phone-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.803 4A6 6 0 0 0 23 12.197V19a.996.996 0 0 1-1.003 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1zM20 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1 6v3h2v-3z"></svg:path>`,
})
export class RiPhoneCameraFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneCameraLineIcon],svg[ri-phone-camera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.803 4a6 6 0 0 0-.72 2H3v12h18v-5.083a6 6 0 0 0 2-.72V19a.996.996 0 0 1-1.003 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1zM20 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m-2 2h2v3h-2z"></svg:path>`,
})
export class RiPhoneCameraLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneFillIcon],svg[ri-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.42v3.536a1 1 0 0 1-.93.998Q19.415 21 19 21C10.163 21 3 13.837 3 5q0-.414.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45q.034.344.064.552A13.9 13.9 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.05 13.05 0 0 0 6.844 6.844l1.54-2.154a.46.46 0 0 1 .573-.149a13.9 13.9 0 0 0 4 1.205q.208.03.55.064a.5.5 0 0 1 .449.498"></svg:path>`,
})
export class RiPhoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneFindFillIcon],svg[ri-phone-find-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v8.529A6 6 0 0 0 9 16c0 3.238 2.76 6 6 6H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21l-1.413 1.415l-2.211-2.21A4 4 0 1 1 15 12m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiPhoneFindFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneFindLineIcon],svg[ri-phone-find-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v8h-2V4H7v16h4v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21l-1.413 1.415l-2.212-2.21A4 4 0 1 1 15 12m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiPhoneFindLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneLineIcon],svg[ri-phone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.366 10.682a10.56 10.56 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296a11.4 11.4 0 0 0 4.583 1.364a1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995Q19.307 21 18.5 21C9.94 21 3 14.06 3 5.5q0-.807.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.4 11.4 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294zm-2.522-.657l1.9-1.357A13.4 13.4 0 0 1 7.647 5H5.01Q5 5.25 5 5.5C5 12.956 11.044 19 18.5 19q.25 0 .5-.01v-2.637a13.4 13.4 0 0 1-3.668-1.097l-1.357 1.9a12.5 12.5 0 0 1-1.588-.75l-.058-.033a12.56 12.56 0 0 1-4.702-4.702l-.033-.058a12.4 12.4 0 0 1-.75-1.588"></svg:path>`,
})
export class RiPhoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneLockFillIcon],svg[ri-phone-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1l.001 7.1A5 5 0 0 0 13.1 14H12v8H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 10a3 3 0 0 1 3 3v1h1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5h1v-1a3 3 0 0 1 3-3m0 2c-.513 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiPhoneLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneLockLineIcon],svg[ri-phone-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v7h-2V4H7v16h5v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 10a3 3 0 0 1 3 3v1h1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v2h4zm-2-4c-.508 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiPhoneLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhpFillIcon],svg[ri-php-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.931 9.46H3.594l-.73 3.751h1.187q1.181 0 1.76-.445q.577-.445.779-1.486q.194-.999-.176-1.41t-1.483-.41m2.45 4.153c-.369.354-.814.62-1.298.78q-.715.232-1.82.233H2.588l-.463 2.382H.174l1.742-8.962H5.67q1.694 0 2.471.89q.778.888.468 2.482a4 4 0 0 1-.432 1.2a4 4 0 0 1-.795.995m5.701 1.013l.77-3.965q.132-.677-.097-.922q-.227-.247-.973-.247h-1.547l-.997 5.136H8.3l1.742-8.964h1.937l-.463 2.383h1.725q1.63 0 2.247.568t.373 1.84l-.81 4.171zm10.763-3.208c-.078.42-.224.825-.432 1.2a4 4 0 0 1-.795.995c-.37.353-.814.62-1.299.78q-.715.232-1.822.233h-1.671l-.464 2.383H15.41l1.743-8.962h3.752q1.694 0 2.471.89q.778.886.469 2.48M20.169 9.46h-1.336l-.731 3.751h1.187q1.183 0 1.76-.445t.78-1.486q.194-.999-.177-1.41t-1.483-.41"></svg:path>`,
})
export class RiPhpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhpLineIcon],svg[ri-php-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.15 5.55l-1.717 8.834h2l.858-4.417h1.5c.553 0 .915.44.81.982l-.668 3.435h2l.668-3.435c.316-1.627-.771-2.945-2.428-2.945h-1.5l.477-2.454zM2.173 8.004h3.75c1.795 0 2.972 1.428 2.63 3.19s-2.075 3.19-3.87 3.19h-1.75l-.477 2.455h-2zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227c.131-.678-.321-1.227-1.012-1.227h-1.75zm13.859-4.417h3.75c1.795 0 2.972 1.428 2.63 3.19s-2.076 3.19-3.87 3.19h-1.75l-.477 2.455h-2zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227c.131-.678-.321-1.227-1.012-1.227h-1.75z"></svg:path>`,
})
export class RiPhpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPicture2FillIcon],svg[ri-picture-in-picture-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043l-2.25-2.25z"></svg:path>`,
})
export class RiPictureInPicture2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPicture2LineIcon],svg[ri-picture-in-picture-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2h-6v4h6zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043l-2.25-2.25z"></svg:path>`,
})
export class RiPictureInPicture2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPictureExitFillIcon],svg[ri-picture-in-picture-exit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-9.5-6L9.457 9.043l2.25 2.25l-1.414 1.414l-2.25-2.25L6 12.5V7z"></svg:path>`,
})
export class RiPictureInPictureExitFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPictureExitLineIcon],svg[ri-picture-in-picture-exit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2h-6v4h6zm-8.5-8L9.457 9.043l2.25 2.25l-1.414 1.414l-2.25-2.25L6 12.5V7z"></svg:path>`,
})
export class RiPictureInPictureExitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPictureFillIcon],svg[ri-picture-in-picture-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiPictureInPictureFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPictureLineIcon],svg[ri-picture-in-picture-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2h-6v4h6z"></svg:path>`,
})
export class RiPictureInPictureLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChart2FillIcon],svg[ri-pie-chart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m2-1.507C18.554 1.02 22.979 5.447 23.457 11H13z"></svg:path>`,
})
export class RiPieChart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChart2LineIcon],svg[ri-pie-chart-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5C18.351.5 23.5 5.649 23.5 12q0 .505-.043 1h-1.506c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95V.542Q11.495.5 12 .5m-1 3.562A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7H11zm2-1.51V11h8.448A9.5 9.5 0 0 0 13 2.552"></svg:path>`,
})
export class RiPieChart2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChartBoxFillIcon],svg[ri-pie-chart-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m13.9 10H11V7.1a5.002 5.002 0 0 0 1 9.9a5 5 0 0 0 4.9-4m0-2A5.01 5.01 0 0 0 13 7.1V11z"></svg:path>`,
})
export class RiPieChartBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChartBoxLineIcon],svg[ri-pie-chart-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm12.9 8A5.002 5.002 0 0 1 7 12a5 5 0 0 1 4-4.9V13zm0-2H13V7.1a5.01 5.01 0 0 1 3.9 3.9"></svg:path>`,
})
export class RiPieChartBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChartFillIcon],svg[ri-pie-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m2 0A10 10 0 0 1 21.95 11H13z"></svg:path>`,
})
export class RiPieChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChartLineIcon],svg[ri-pie-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.458v2.124A8.003 8.003 0 0 0 12 20a8 8 0 0 0 7.419-5h2.123c-1.274 4.057-5.064 7-9.542 7c-5.523 0-10-4.477-10-10c0-4.478 2.943-8.268 7-9.542M12 2c5.523 0 10 4.477 10 10q0 .507-.05 1H11V2.05Q11.493 2 12 2m1 2.062V11h6.938A8.004 8.004 0 0 0 13 4.062"></svg:path>`,
})
export class RiPieChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPinDistanceFillIcon],svg[ri-pin-distance-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.39 10.39L7.5 14.277L3.61 10.39a5.5 5.5 0 1 1 7.78 0M7.5 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12.89 10.89l-3.89 3.888l-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiPinDistanceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPinDistanceLineIcon],svg[ri-pin-distance-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.975 8.975a3.5 3.5 0 1 0-4.95 0L7.5 11.45zM7.5 14.278L3.61 10.39a5.5 5.5 0 1 1 7.78 0zM7.5 8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 12.45l2.475-2.475a3.5 3.5 0 1 0-4.95 0zm3.89-1.06l-3.89 3.888l-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiPinDistanceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPingPongFillIcon],svg[ri-ping-pong-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a9.5 9.5 0 0 1 9.5 9.5c0 1.53-.361 2.974-1.003 4.254l2.463 2.464a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.415 0l-2.463-2.463A9.46 9.46 0 0 1 11.5 21a9.5 9.5 0 0 1 0-19m5.303 13.388l-1.414 1.414l3.536 3.535l1.414-1.414zm1.864-6.105l-9.384 9.384A7.5 7.5 0 0 0 11.5 19a7.5 7.5 0 0 0 2.74-.516l-.972-.974a1 1 0 0 1 0-1.414l2.828-2.828a1 1 0 0 1 1.414 0l.974.972A7.5 7.5 0 0 0 19 11.5c0-.772-.117-1.516-.333-2.217"></svg:path>`,
})
export class RiPingPongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPingPongLineIcon],svg[ri-ping-pong-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a9.5 9.5 0 0 1 9.5 9.5c0 1.53-.361 2.974-1.003 4.254l2.463 2.464a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.415 0l-2.463-2.463A9.46 9.46 0 0 1 11.5 21a9.5 9.5 0 0 1 0-19m5.303 13.388l-1.414 1.414l3.536 3.535l1.414-1.414zm1.864-6.105l-9.384 9.384A7.5 7.5 0 0 0 11.5 19a7.5 7.5 0 0 0 2.74-.516l-.972-.974a1 1 0 0 1 0-1.414l2.828-2.828a1 1 0 0 1 1.414 0l.974.972A7.5 7.5 0 0 0 19 11.5c0-.772-.117-1.516-.333-2.217M11.5 4a7.5 7.5 0 0 0-4.136 13.757L17.757 7.364A7.5 7.5 0 0 0 11.5 4"></svg:path>`,
})
export class RiPingPongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPinterestFillIcon],svg[ri-pinterest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.372 2.094a10.003 10.003 0 0 0-5.369 19.074a7.8 7.8 0 0 1 .162-2.292c.185-.839 1.296-5.463 1.296-5.463a3.7 3.7 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.897 0 3.17-2.431 3.17-5.301c0-2.201-1.457-3.847-4.143-3.847a4.746 4.746 0 0 0-4.93 4.793a2.96 2.96 0 0 0 .648 1.97a.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.785a.354.354 0 0 1-.51.253c-1.384-.554-2.036-2.077-2.036-3.816c0-2.847 2.384-6.255 7.154-6.255c3.796 0 6.319 2.777 6.319 5.747c0 3.909-2.176 6.848-5.393 6.848a2.86 2.86 0 0 1-2.454-1.246s-.579 2.316-.692 2.754a8 8 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.99 9.99 0 0 0 9.996-10.002a10 10 0 0 0-8.635-9.904"></svg:path>`,
})
export class RiPinterestFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPinterestLineIcon],svg[ri-pinterest-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.492 19.191q.035-.505.143-1.001c.063-.295.254-1.13.534-2.34l.007-.03l.387-1.668c.079-.34.14-.604.181-.692a3.5 3.5 0 0 1-.284-1.423c0-1.337.756-2.373 1.736-2.373c.36-.006.704.15.942.426s.348.643.302.996c0 .453-.085.798-.453 2.035a28 28 0 0 0-.165.571a11 11 0 0 0-.133.522c-.096.386-.008.797.237 1.105a1.2 1.2 0 0 0 1.006.457c1.492 0 2.6-1.985 2.6-4.548c0-1.97-1.29-3.274-3.432-3.274A3.88 3.88 0 0 0 9.201 9.1a4.13 4.13 0 0 0-1.195 2.961a2.55 2.55 0 0 0 .512 1.644c.181.14.25.383.175.59c-.041.168-.14.552-.177.68a.41.41 0 0 1-.215.297a.39.39 0 0 1-.355.002c-1.16-.479-1.796-1.778-1.796-3.44c0-2.985 2.491-5.584 6.192-5.584c3.135 0 5.481 2.329 5.481 5.14c0 3.532-1.932 6.104-4.69 6.104a2.5 2.5 0 0 1-2.046-.959l-.043.177l-.207.852l-.002.008c-.146.6-.248 1.017-.288 1.173q-.16.534-.4 1.04a8 8 0 1 0-1.655-.593M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class RiPinterestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPinyinInputIcon],svg[ri-pinyin-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.934 3.036l1.732 1L18.531 6H21v2h-2v4h2v2h-2v7h-2v-7h-3.084c-.325 2.862-1.564 5.394-3.37 7.193l-1.562-1.27c1.52-1.438 2.596-3.522 2.917-5.922L10 14v-2l2-.001V8h-2V6h2.467l-1.133-1.964l1.732-1L14.777 6h1.444zM5 13.803l-2 .536v-2.071l2-.536V8H3V6h2V3h2v3h2v2H7v3.197l2-.536v2.07l-2 .536V18.5A2.5 2.5 0 0 1 4.5 21H3v-2h1.5a.5.5 0 0 0 .492-.41L5 18.5zM17 8h-3v4h3z"></svg:path>`,
})
export class RiPinyinInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPixFillIcon],svg[ri-pix-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.475 1.768a3.5 3.5 0 0 0-4.95 0L5.4 5.894a4 4 0 0 1 3.079 1.164l2.992 2.993a.75.75 0 0 0 1.061 0l2.992-2.993a4 4 0 0 1 3.08-1.163zm5.979 5.978l1.779 1.78a3.5 3.5 0 0 1 .015 4.933l-1.774 1.774a3 3 0 0 1-4.243 0l-2.993-2.993a1.75 1.75 0 0 0-2.475 0L7.77 16.234a3 3 0 0 1-4.243 0l-1.78-1.78a3.5 3.5 0 0 1 .021-4.929l1.775-1.774a3 3 0 0 1 4.228.014l2.992 2.993a1.75 1.75 0 0 0 2.475 0l2.993-2.993a3 3 0 0 1 4.223-.019M5.398 18.105a4 4 0 0 0 3.079-1.164l2.993-2.994a.75.75 0 0 1 1.061 0l2.993 2.994a4 4 0 0 0 3.08 1.163l-4.129 4.128a3.5 3.5 0 0 1-4.95 0z"></svg:path>`,
})
export class RiPixFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPixLineIcon],svg[ri-pix-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.473 1.745l7.778 7.778a3.5 3.5 0 0 1 0 4.95l-7.778 7.778a3.5 3.5 0 0 1-4.95 0l-7.778-7.778a3.5 3.5 0 0 1 0-4.95l7.778-7.778a3.5 3.5 0 0 1 4.95 0m-2.475 13.082l-2.475 2.475c-.38.38-.825.653-1.299.822l2.713 2.713a1.5 1.5 0 0 0 2.122 0l2.713-2.713a3.5 3.5 0 0 1-1.3-.822zm-6.01-6.719l-2.829 2.83a1.5 1.5 0 0 0 0 2.12l2.829 2.83a1.5 1.5 0 0 0 2.12 0l2.476-2.476a2 2 0 0 1 2.828 0l2.475 2.475a1.5 1.5 0 0 0 2.121 0l2.829-2.828a1.5 1.5 0 0 0 0-2.121l-2.829-2.829a1.5 1.5 0 0 0-2.121 0l-2.475 2.475a2 2 0 0 1-2.828 0L8.109 8.109a1.5 1.5 0 0 0-2.12 0m4.95-4.949L8.223 5.872c.474.17.92.443 1.299.823l2.475 2.475l2.475-2.475c.38-.38.824-.654 1.299-.823L13.059 3.16a1.5 1.5 0 0 0-2.122 0"></svg:path>`,
})
export class RiPixLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPixelfedFillIcon],svg[ri-pixelfed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10m1.031 6.099h-2.624c-.988 0-1.789.776-1.789 1.733v6.748l2.595-2.471h1.818c1.713 0 3.101-1.345 3.101-3.005s-1.388-3.005-3.1-3.005"></svg:path>`,
})
export class RiPixelfedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPixelfedLineIcon],svg[ri-pixelfed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m1.031 4.099c1.713 0 3.101 1.345 3.101 3.005s-1.388 3.005-3.1 3.005h-1.819L8.62 16.58V9.832c0-.957.801-1.733 1.79-1.733z"></svg:path>`,
})
export class RiPixelfedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlaneFillIcon],svg[ri-plane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0z"></svg:path>`,
})
export class RiPlaneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlaneLineIcon],svg[ri-plane-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0z"></svg:path>`,
})
export class RiPlaneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlanetFillIcon],svg[ri-planet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.322 5.966A9.2 9.2 0 0 1 7.2 4.386a4.5 4.5 0 0 0-.844-.157c-.572-.043-.823.093-.93.2c-.106.106-.242.357-.2.93q.022.275.097.607m15.404 8.245q.091.184.177.366c.476 1.02.791 2.017.859 2.913c.067.892-.106 1.82-.78 2.495c-.674.674-1.603.847-2.495.78c-.78-.06-1.637-.306-2.52-.684l-.003.002a13 13 0 0 1-.462-.208c-2.033-.963-4.359-2.654-6.542-4.838c-2.181-2.181-3.872-4.505-4.835-6.536q-.11-.233-.209-.463l.001-.002c-.379-.885-.626-1.745-.685-2.527c-.068-.892.105-1.82.78-2.495c.673-.674 1.602-.847 2.494-.78c.896.068 1.892.383 2.913.86q.186.085.373.18a9 9 0 0 1 8.572 2.362a9 9 0 0 1 2.362 8.575m-1.113 2.593a9 9 0 0 1-1.576 1.871q.328.075.6.095c.573.043.824-.093.93-.2c.108-.106.244-.357.2-.93a4.5 4.5 0 0 0-.154-.836m-13.977 1.56a9 9 0 0 1-2.417-8.342c1.082 1.981 2.705 4.1 4.68 6.076c1.977 1.977 4.098 3.6 6.08 4.683a9 9 0 0 1-8.343-2.417"></svg:path>`,
})
export class RiPlanetFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlanetLineIcon],svg[ri-planet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.918 8.037A9 9 0 0 0 15.966 20.08c.873.373 1.719.618 2.49.681c.902.074 1.844-.095 2.526-.777c.752-.752.88-1.816.746-2.812c-.123-.91-.48-1.92-1.002-2.961A9 9 0 0 0 9.791 3.274c-1.044-.524-2.055-.882-2.965-1.006c-.997-.135-2.062-.007-2.815.746c-.682.683-.851 1.626-.777 2.528c.064.773.31 1.62.684 2.495m1.404-2.071a4 4 0 0 1-.095-.587c-.048-.586.09-.842.198-.95c.12-.12.423-.275 1.132-.179q.298.04.643.136a9 9 0 0 0-1.878 1.58m14.29 10.837a5 5 0 0 1 .134.637c.096.709-.06 1.012-.178 1.13c-.109.109-.364.247-.95.199a4 4 0 0 1-.581-.094a9 9 0 0 0 1.575-1.872m-3.73 1.023c-1.677-.878-3.625-2.323-5.507-4.205c-1.88-1.88-3.324-3.825-4.203-5.5A7.02 7.02 0 0 1 9.97 5.298a7 7 0 0 1 5.912 12.528m-2.277.99a7 7 0 0 1-8.42-8.419c.964 1.516 2.25 3.112 3.776 4.638c1.528 1.528 3.126 2.815 4.644 3.78"></svg:path>`,
})
export class RiPlanetLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlantFillIcon],svg[ri-plant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z"></svg:path>`,
})
export class RiPlantFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlantLineIcon],svg[ri-plant-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 2a7 7 0 0 1 6.197 3.741A6.49 6.49 0 0 1 17.498 3h3.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-1.5v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-2h-2a7 7 0 0 1-7-7V2zm10 13h-8v5h8zm3-10h-1.5a4.5 4.5 0 0 0-4.5 4.5v.5h1.5a4.5 4.5 0 0 0 4.5-4.5zm-13-1h-2a5 5 0 0 0 5 5h2a5 5 0 0 0-5-5"></svg:path>`,
})
export class RiPlantLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayCircleFillIcon],svg[ri-play-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666z"></svg:path>`,
})
export class RiPlayCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayCircleLineIcon],svg[ri-play-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"></svg:path>`,
})
export class RiPlayCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayFillIcon],svg[ri-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832"></svg:path>`,
})
export class RiPlayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayLargeFillIcon],svg[ri-play-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20.196V3.804a1 1 0 0 1 1.53-.848l13.113 8.196a1 1 0 0 1 0 1.696L7.53 21.044A1 1 0 0 1 6 20.196"></svg:path>`,
})
export class RiPlayLargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayLargeLineIcon],svg[ri-play-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18.392V5.608L18.226 12zM6 3.804v16.392a1 1 0 0 0 1.53.848l13.113-8.196a1 1 0 0 0 0-1.696L7.53 2.956A1 1 0 0 0 6 3.804"></svg:path>`,
})
export class RiPlayLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayLineIcon],svg[ri-play-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.394 12L10 7.737v8.526zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832"></svg:path>`,
})
export class RiPlayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayList2FillIcon],svg[ri-play-list-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18v2H2v-2zM2 3.5l8 5l-8 5zM22 11v2H12v-2zm0-7v2H12V4z"></svg:path>`,
})
export class RiPlayList2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayList2LineIcon],svg[ri-play-list-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18v2H2v-2zM2 3.5l8 5l-8 5zM22 11v2H12v-2zM4 7.109v2.783L6.226 8.5zM22 4v2H12V4z"></svg:path>`,
})
export class RiPlayList2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayListAddFillIcon],svg[ri-play-list-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h10v2H2zm0-7h20v2H2zm0-7h20v2H2zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path>`,
})
export class RiPlayListAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayListAddLineIcon],svg[ri-play-list-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h10v2H2zm0-7h20v2H2zm0-7h20v2H2zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path>`,
})
export class RiPlayListAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayListFillIcon],svg[ri-play-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83"></svg:path>`,
})
export class RiPlayListFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayListLineIcon],svg[ri-play-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83M18 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiPlayListLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayMiniFillIcon],svg[ri-play-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.752 5.439l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.13V5.87a.5.5 0 0 1 .752-.431"></svg:path>`,
})
export class RiPlayMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayMiniLineIcon],svg[ri-play-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.482v7.036L15.03 12zM7.752 5.44l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.13V5.87a.5.5 0 0 1 .752-.431"></svg:path>`,
})
export class RiPlayMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseFillIcon],svg[ri-play-reverse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.624 12.416l10.599 7.066a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L4.624 11.584a.5.5 0 0 0 0 .832"></svg:path>`,
})
export class RiPlayReverseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseLargeFillIcon],svg[ri-play-reverse-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20.196V3.804a1 1 0 0 0-1.53-.848L3.357 11.152a1 1 0 0 0 0 1.696l13.113 8.196a1 1 0 0 0 1.53-.848"></svg:path>`,
})
export class RiPlayReverseLargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseLargeLineIcon],svg[ri-play-reverse-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18.392V5.608L5.774 12zm2-14.588v16.392a1 1 0 0 1-1.53.848L3.357 12.848a1 1 0 0 1 0-1.696L16.47 2.956a1 1 0 0 1 1.53.848"></svg:path>`,
})
export class RiPlayReverseLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseLineIcon],svg[ri-play-reverse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.606 12L14 7.737v8.526zm-2.982.416l10.599 7.066a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L4.624 11.584a.5.5 0 0 0 0 .832"></svg:path>`,
})
export class RiPlayReverseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseMiniFillIcon],svg[ri-play-reverse-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.248 5.439L5.74 11.569a.5.5 0 0 0 0 .863l10.508 6.13A.5.5 0 0 0 17 18.13V5.87a.5.5 0 0 0-.752-.431"></svg:path>`,
})
export class RiPlayReverseMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseMiniLineIcon],svg[ri-play-reverse-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8.482v7.036L8.97 12zm1.248-3.043L5.74 11.569a.5.5 0 0 0 0 .863l10.508 6.13A.5.5 0 0 0 17 18.13V5.87a.5.5 0 0 0-.752-.431"></svg:path>`,
})
export class RiPlayReverseMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlaystationFillIcon],svg[ri-playstation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.585 17.011c-.43.543-1.483.93-1.483.93l-7.832 2.817V18.68l5.764-2.057c.654-.234.754-.566.223-.74s-1.492-.125-2.147.111l-3.84 1.354v-2.155l.221-.076s1.11-.393 2.67-.566c1.561-.172 3.472.024 4.972.593c1.69.535 1.88 1.323 1.452 1.866m-8.57-3.537V8.162c0-.624-.115-1.198-.7-1.36c-.447-.144-.725.272-.725.895V21l-3.583-1.139V4c1.523.283 3.743.953 4.936 1.355c3.035 1.043 4.064 2.342 4.064 5.267c0 2.851-1.758 3.932-3.992 2.852m-11.583 4.99c-1.736-.49-2.025-1.51-1.234-2.097c.731-.542 1.975-.95 1.975-.95l5.138-1.83v2.086l-3.698 1.325c-.653.234-.753.566-.223.74c.532.175 1.493.125 2.147-.11l1.774-.644v1.865l-.354.06c-1.774.29-3.663.169-5.525-.445"></svg:path>`,
})
export class RiPlaystationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlaystationLineIcon],svg[ri-playstation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.585 17.011c-.43.543-1.483.93-1.483.93l-7.832 2.817V18.68l5.764-2.057c.654-.234.754-.566.223-.74s-1.492-.125-2.147.111l-3.84 1.354v-2.155l.221-.076s1.11-.393 2.67-.566c1.561-.172 3.472.024 4.972.593c1.69.535 1.88 1.323 1.452 1.866m-8.57-3.537V8.162c0-.624-.115-1.198-.7-1.36c-.447-.144-.725.272-.725.895V21l-3.583-1.139V4c1.523.283 3.743.953 4.936 1.355c3.035 1.043 4.064 2.342 4.064 5.267c0 2.851-1.758 3.932-3.992 2.852m-11.583 4.99c-1.736-.49-2.025-1.51-1.234-2.097c.731-.542 1.975-.95 1.975-.95l5.138-1.83v2.086l-3.698 1.325c-.653.234-.753.566-.223.74c.532.175 1.493.125 2.147-.11l1.774-.644v1.865l-.354.06c-1.774.29-3.663.169-5.525-.445"></svg:path>`,
})
export class RiPlaystationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlug2FillIcon],svg[ri-plug-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4v-4h16v4a4 4 0 0 1-4 4zm4-12h2a1 1 0 0 1 1 1v2H4V7a1 1 0 0 1 1-1h2V2h2v4h6V2h2zm-5 8.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M11 2h2v3h-2z"></svg:path>`,
})
export class RiPlug2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlug2LineIcon],svg[ri-plug-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h2V2h2v4h6V2h2v4h2a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2m10-8H6v1h12zm-6 6.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M11 2h2v3h-2z"></svg:path>`,
})
export class RiPlug2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlugFillIcon],svg[ri-plug-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4v-4h16v4a4 4 0 0 1-4 4zm3-12h3a1 1 0 0 1 1 1v2H4V7a1 1 0 0 1 1-1h3V2h2v4h4V2h2zm-4 8.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiPlugFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlugLineIcon],svg[ri-plug-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h3V2h2v4h4V2h2v4h3a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2m10-8H6v1h12zm-6 6.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiPlugLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerClubsFillIcon],svg[ri-poker-clubs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.775 11.04C14.933 9.266 16 7.632 16 6a4 4 0 0 0-8 0c0 1.633 1.067 3.267 2.225 5.04h.001l.234.359q-.433-.331-.808-.626C8.276 9.697 7.386 9 6 9a4 4 0 0 0 0 8c1.633 0 3.267-1.067 5.04-2.225l.03-.02c-.093 2.281-.958 3.683-1.913 5.23l-.369.602c-.384.636.087 1.413.83 1.413h4.764c.743 0 1.214-.777.83-1.413l-.369-.602c-.955-1.547-1.82-2.949-1.913-5.23l.03.02C14.734 15.933 16.368 17 18 17a4 4 0 0 0 0-8c-1.386 0-2.276.697-3.652 1.773q-.375.296-.808.626z"></svg:path>`,
})
export class RiPokerClubsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerClubsLineIcon],svg[ri-poker-clubs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.236 7.46c.338 1.08.99 2.092 1.627 3.044l.15.222q.23.342.447.673s-.557-.43-.808-.626c-1.125-.88-1.925-1.506-2.938-1.705A3.7 3.7 0 0 0 6 9a4 4 0 0 0 0 8c.676 0 1.353-.183 2.039-.48c.683-.295 1.376-.703 2.09-1.155c-.017.971-.134 1.78-.33 2.521c-.247.93-.618 1.755-1.07 2.668A.997.997 0 0 0 9.617 22h4.764c.743 0 1.22-.78.89-1.446c-.453-.913-.824-1.738-1.07-2.668a10.3 10.3 0 0 1-.33-2.521c.713.452 1.406.86 2.09 1.155c.685.297 1.362.48 2.038.48a4 4 0 0 0 0-8q-.399 0-.752.075c-.995.207-1.789.829-2.9 1.698c-.251.197-.808.626-.808.626l.233-.357l.002-.002v-.001l.355-.544c.674-1.043 1.28-2.04 1.61-3.024c.164-.493.26-.982.26-1.471a4 4 0 0 0-8 0c0 .5.088.987.236 1.46m5.222.26c-.35.682-.808 1.383-1.356 2.223L12 10.1l-.38-.57c-.381-.566-.72-1.07-1.022-1.63C10.188 7.141 10 6.534 10 6a2 2 0 1 1 4 0c0 .414-.147.954-.542 1.72m-2.962 5.68A2 2 0 0 0 12 12.675a2 2 0 0 0 1.504.723A2 2 0 0 0 12 14.66a2 2 0 0 0-1.504-1.261m.69 6.601c.367-.889.657-1.822.814-2.927c.157 1.105.447 2.038.815 2.927zm2.723-6.635c.544-.102.993-.467 1.421-.816q.127-.103.25-.2C17.06 11.19 17.416 11 18 11a2 2 0 1 1 0 4c-.699 0-1.594-.396-3.056-1.324a2 2 0 0 0-1.035-.311M6 11c.585 0 .94.19 2.42 1.348q.124.098.25.201c.428.349.877.714 1.422.816c-.361.006-.72.11-1.036.31C7.594 14.605 6.7 15 6 15a2 2 0 1 1 0-4"></svg:path>`,
})
export class RiPokerClubsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerDiamondsFillIcon],svg[ri-poker-diamonds-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.036 10.734l7.19-8.788a1 1 0 0 1 1.548 0l7.19 8.788a2 2 0 0 1 0 2.533l-7.19 8.787a1 1 0 0 1-1.548 0l-7.19-8.787a2 2 0 0 1 0-2.533"></svg:path>`,
})
export class RiPokerDiamondsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerDiamondsLineIcon],svg[ri-poker-diamonds-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.036 10.734a2 2 0 0 0 0 2.533l7.19 8.787a1 1 0 0 0 1.548 0l7.19-8.787a2 2 0 0 0 0-2.533l-7.19-8.788a1 1 0 0 0-1.548 0zM12 4.158L18.416 12L12 19.842L5.584 12z"></svg:path>`,
})
export class RiPokerDiamondsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerHeartsFillIcon],svg[ri-poker-hearts-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.5a5.5 5.5 0 0 1 10-3.163A5.5 5.5 0 0 1 22 8.5c0 7.5-10 12.985-10 12.985S2 16 2 8.5"></svg:path>`,
})
export class RiPokerHeartsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerHeartsLineIcon],svg[ri-poker-hearts-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.81l1.635-2.322A3.5 3.5 0 0 1 20 8.5c0 2.879-1.96 5.621-4.357 7.836A27 27 0 0 1 12 19.146a27 27 0 0 1-3.643-2.81C5.959 14.122 4 11.379 4 8.5a3.5 3.5 0 0 1 6.365-2.012zm-1.444-4.884A5.5 5.5 0 0 0 2 8.5C2 16 12 21.485 12 21.485S22 16 22 8.5a5.5 5.5 0 0 0-10-3.163a5.5 5.5 0 0 0-1.444-1.41"></svg:path>`,
})
export class RiPokerHeartsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerSpadesFillIcon],svg[ri-poker-spades-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.951 15.893A5.83 5.83 0 0 1 7.5 17C4.462 17 2 14.761 2 12c0-3.548 3.525-6.089 6.644-8.338C9.92 2.742 11.129 1.872 12 1c.871.871 2.08 1.742 3.356 2.662C18.476 5.911 22 8.452 22 12c0 2.761-2.462 5-5.5 5a5.83 5.83 0 0 1-3.451-1.107c.284 1.646 1.009 2.82 1.794 4.092l.369.602c.384.636-.087 1.413-.83 1.413H9.618c-.743 0-1.214-.777-.83-1.413l.369-.602c.785-1.272 1.51-2.446 1.794-4.092"></svg:path>`,
})
export class RiPokerSpadesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPokerSpadesLineIcon],svg[ri-poker-spades-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.916a2 2 0 0 0-2.8-1.295A3.9 3.9 0 0 1 7.5 15C5.383 15 4 13.482 4 12c0-1.06.515-2.115 1.613-3.29c1.133-1.212 2.655-2.311 4.285-3.486c.693-.5 1.421-1.024 2.102-1.567c.68.543 1.409 1.067 2.102 1.567c1.63 1.175 3.152 2.274 4.285 3.486C19.485 9.885 20 10.94 20 12c0 1.482-1.383 3-3.5 3a3.9 3.9 0 0 1-1.7-.379a2 2 0 0 0-2.8 1.295M12 1c-.871.871-2.08 1.742-3.356 2.662C5.524 5.911 2 8.452 2 12c0 2.761 2.462 5 5.5 5c.927 0 1.8-.208 2.566-.576a9.6 9.6 0 0 1-.536 2.317c-.22.604-.491 1.188-.802 1.813A.997.997 0 0 0 9.618 22h4.764c.743 0 1.22-.78.89-1.446a18 18 0 0 1-.802-1.813a9.6 9.6 0 0 1-.536-2.317A5.9 5.9 0 0 0 16.5 17c3.038 0 5.5-2.239 5.5-5c0-3.548-3.525-6.09-6.644-8.338C14.08 2.742 12.871 1.872 12 1m0 16.074c.158 1.11.451 2.047.815 2.926h-1.63c.364-.879.657-1.816.815-2.926"></svg:path>`,
})
export class RiPokerSpadesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPolaroid2FillIcon],svg[ri-polaroid-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM6 17v2h12v-2zM5 5v2h2V5zm7 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class RiPolaroid2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPolaroid2LineIcon],svg[ri-polaroid-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V5H5v10zM3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8M6 6h2v2H6zm0 11v2h12v-2z"></svg:path>`,
})
export class RiPolaroid2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPolaroidFillIcon],svg[ri-polaroid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.659 10a6 6 0 1 0 0 4H21v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6zM5 6v3h2V6zm10 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiPolaroidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPolaroidLineIcon],svg[ri-polaroid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2V5H5v14h14v-1h2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM6 6h2v3H6zm9 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiPolaroidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPoliceBadgeFillIcon],svg[ri-police-badge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.913 11.674C3.236 10.195 3.54 8.808 2 6.5l3.5-4S9 4 12 1.5c3 2.5 6.5 1 6.5 1l3.5 4c-1.539 2.308-1.236 3.695-.913 5.174c.306 1.404.63 2.89-.587 5.326c-1.157 2.315-3.152 3.123-5.015 3.877c-1.356.55-2.642 1.07-3.485 2.123c-.842-1.053-2.129-1.574-3.485-2.123C6.652 20.123 4.658 19.315 3.5 17c-1.218-2.435-.893-3.922-.587-5.326m11.465 1.099l2.377-2.318l-3.286-.478L12 7l-1.47 2.977l-3.285.478l2.377 2.318l-.561 3.272L12 14.5l2.939 1.545z"></svg:path>`,
})
export class RiPoliceBadgeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPoliceBadgeLineIcon],svg[ri-police-badge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.475 4.935c.505-.025.962-.09 1.351-.168l1.732 1.98c-.39.82-.612 1.602-.695 2.377c-.124 1.157.089 2.143.245 2.863l.007.033c.162.744.269 1.234.253 1.809c-.015.541-.147 1.256-.657 2.277c-1.1 2.201-3.695 2.666-5.715 3.675c-.326.164-.662.35-.996.569a10 10 0 0 0-.996-.569c-2.02-1.01-4.614-1.474-5.715-3.675c-.51-1.02-.642-1.736-.657-2.277c-.016-.575.09-1.065.253-1.81l.007-.032c.156-.72.369-1.706.245-2.863a7.3 7.3 0 0 0-.695-2.377l1.732-1.98c.389.078.846.143 1.351.168C8.79 4.998 10.402 4.81 12 3.918c1.598.892 3.21 1.08 4.475 1.017m4.612 6.739c-.323-1.479-.626-2.866.913-5.174l-3.5-4S15 4 12 1.5c-3 2.5-6.5 1-6.5 1L2 6.5c1.539 2.308 1.236 3.695.913 5.174c-.306 1.404-.63 2.89.587 5.326c1.577 3.154 4.708 3.51 6.943 4.745c.6.332 1.134.726 1.557 1.255c.423-.529.958-.923 1.558-1.255C15.792 20.51 18.923 20.154 20.5 17c1.218-2.435.893-3.922.587-5.326m-6.71 1.099l.562 3.272l-2.94-1.545l-2.938 1.545l.561-3.273l-2.377-2.317l3.285-.478L12 7l1.47 2.977l3.285.478z"></svg:path>`,
})
export class RiPoliceBadgeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPoliceCarFillIcon],svg[ri-police-car-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5h1.929L4.48 6.212A2 2 0 0 1 6.319 5H8V3h3v2h2V3h3v2h1.681a2 2 0 0 1 1.838 1.212L21.572 11H23.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.758.97zM4 15v2a1 1 0 0 0 1 1h3.245a.5.5 0 0 0 .44-.736Q7.476 15 4 15m16 0q-3.476 0-4.686 2.264a.5.5 0 0 0 .441.736H19a1 1 0 0 0 1-1zM6 7l-1.451 3.629A1 1 0 0 0 5.477 12h13.046a1 1 0 0 0 .928-1.371L18 7z"></svg:path>`,
})
export class RiPoliceCarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPoliceCarLineIcon],svg[ri-police-car-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13v5h16v-5zm1.618-2h12.764a1 1 0 0 0 .894-1.447L18 7H6L4.724 9.553A1 1 0 0 0 5.618 11M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.447-4.894A2 2 0 0 1 6.237 5H8V3h3v2h2V3h3v2h1.764a2 2 0 0 1 1.789 1.106L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.758.97zM5 14q3.476 0 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736Q15.524 14 19 14"></svg:path>`,
})
export class RiPoliceCarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPresentationFillIcon],svg[ri-presentation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10z"></svg:path>`,
})
export class RiPresentationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPresentationLineIcon],svg[ri-presentation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm1-7a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1m13-4h-9V3h10a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3.424l2.823 6h-2.21l-2.824-6H10v-2h9z"></svg:path>`,
})
export class RiPresentationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTag2FillIcon],svg[ri-price-tag-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.005 7l8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm9 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4 5v2h8v-2zm0-3v2h8v-2z"></svg:path>`,
})
export class RiPriceTag2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTag2LineIcon],svg[ri-price-tag-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.005 7l8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm3 7.93h8v2h-8zm0-3h8v2h-8zm4-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiPriceTag2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTag3FillIcon],svg[ri-price-tag-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.904 2.1l9.9 1.414l1.414 9.9l-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm2.829 8.486a2 2 0 1 0 2.828-2.829a2 2 0 0 0-2.828 2.829"></svg:path>`,
})
export class RiPriceTag3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTag3LineIcon],svg[ri-price-tag-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.904 2.1l9.9 1.414l1.414 9.9l-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm.707 2.122L3.833 12l8.485 8.485l7.779-7.778l-1.061-7.425zm2.122 6.363a2 2 0 1 1 2.828-2.828a2 2 0 0 1-2.828 2.829"></svg:path>`,
})
export class RiPriceTag3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTagFillIcon],svg[ri-price-tag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.005 7l8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm9 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiPriceTagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPriceTagLineIcon],svg[ri-price-tag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.005 7l8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm7 2.93a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiPriceTagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPrinterCloudFillIcon],svg[ri-printer-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10a1 1 0 0 1 1 1v3H6V3a1 1 0 0 1 1-1m15 7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2v-5h7.194q.364-1.337 1.417-2.39Q15.22 11 17.5 11t3.89 1.61q.34.343.61.714zM8 10v2H5v-2zm13 6.5a3.5 3.5 0 1 0-7 0l.003.102a2.751 2.751 0 0 0 .58 5.393l.167.005h5.5l.168-.005a2.75 2.75 0 0 0 .58-5.392zM7 17h3.562A4.6 4.6 0 0 0 10 19.25q0 1.548.871 2.75H7z"></svg:path>`,
})
export class RiPrinterCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPrinterCloudLineIcon],svg[ri-printer-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v5.324a6 6 0 0 0-.61-.713A5.6 5.6 0 0 0 20 11.583V9H4v8h2v-1a1 1 0 0 1 1-1h5.194a5 5 0 0 0-.07.283q-.645.428-1.142 1.074q-.24.312-.42.643H8v3h2.054a4.5 4.5 0 0 0 .817 2H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 2H8v3h8zm-8 6v2H5v-2zm13 6.5a3.5 3.5 0 1 0-7 0l.003.102a2.751 2.751 0 0 0 .58 5.393l.167.005h5.5l.168-.005a2.75 2.75 0 0 0 .58-5.392zm-4.993-.145a1.5 1.5 0 0 1 2.986 0L19 16.5v1.62q1.044.298 1.444.406A.75.75 0 0 1 20.255 20h-5.51a.75.75 0 0 1-.19-1.474q.357-.096 1.22-.342L16 18.12V16.5z"></svg:path>`,
})
export class RiPrinterCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPrinterFillIcon],svg[ri-printer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h10v5H7zm12 3v-5H5v5H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM5 10v2h3v-2zm2-8h10a1 1 0 0 1 1 1v3H6V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiPrinterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPrinterLineIcon],svg[ri-printer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 15H8v3h8zm4-8H4v8h2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2zM8 10v2H5v-2zm8-6H8v3h8z"></svg:path>`,
})
export class RiPrinterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProductHuntFillIcon],svg[ri-product-hunt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m1.334-10H10.5V9h2.834a1.5 1.5 0 0 1 0 3m0-5H8.5v10h2v-3h2.834a3.5 3.5 0 1 0 0-7"></svg:path>`,
})
export class RiProductHuntFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProductHuntLineIcon],svg[ri-product-hunt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1.334-8a1.5 1.5 0 0 0 0-3H10.5v3zm0-5a3.5 3.5 0 1 1 0 7H10.5v3h-2V7z"></svg:path>`,
})
export class RiProductHuntLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProfileFillIcon],svg[ri-profile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM6 15v2h12v-2zm0-8v6h6V7zm8 0v2h4V7zm0 4v2h4v-2zM8 9h2v2H8z"></svg:path>`,
})
export class RiProfileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProfileLineIcon],svg[ri-profile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.008 3c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM20 5H4v14h16zm-2 10v2H6v-2zm-6-8v6H6V7zm6 4v2h-4v-2zm-8-2H8v2h2zm8-2v2h-4V7z"></svg:path>`,
})
export class RiProfileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress1FillIcon],svg[ri-progress-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-10V6a5.98 5.98 0 0 1 4.243 1.757z"></svg:path>`,
})
export class RiProgress1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress1LineIcon],svg[ri-progress-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 0V6a5.98 5.98 0 0 1 4.243 1.757z"></svg:path>`,
})
export class RiProgress1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress2FillIcon],svg[ri-progress-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-10V6a6 6 0 0 1 6 6z"></svg:path>`,
})
export class RiProgress2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress2LineIcon],svg[ri-progress-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 0V6a6 6 0 0 1 6 6z"></svg:path>`,
})
export class RiProgress2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress3FillIcon],svg[ri-progress-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m6-10a5.98 5.98 0 0 1-1.757 4.243L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress3LineIcon],svg[ri-progress-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0a5.98 5.98 0 0 1-1.757 4.243L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress4FillIcon],svg[ri-progress-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m6-10a6 6 0 0 1-6 6V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress4LineIcon],svg[ri-progress-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0a6 6 0 0 1-6 6V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress5FillIcon],svg[ri-progress-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m6-10a6 6 0 0 1-10.243 4.243L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress5LineIcon],svg[ri-progress-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0a6 6 0 0 1-10.243 4.243L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress6FillIcon],svg[ri-progress-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m6-10a6 6 0 0 1-12 0h6V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress6FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress6LineIcon],svg[ri-progress-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0a6 6 0 0 1-12 0h6V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress7FillIcon],svg[ri-progress-7-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m6-10A6 6 0 1 1 7.757 7.757L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress7FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress7LineIcon],svg[ri-progress-7-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-2 0A6 6 0 1 1 7.757 7.757L12 12V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress7LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress8FillIcon],svg[ri-progress-8-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-4a6 6 0 1 1 0-12a6 6 0 0 1 0 12"></svg:path>`,
})
export class RiProgress8FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProgress8LineIcon],svg[ri-progress-8-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m18 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 6a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path>`,
})
export class RiProgress8LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProhibited2FillIcon],svg[ri-prohibited-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.257 18.329A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2c2.401 0 4.605.846 6.329 2.257zM19.743 5.67A9.96 9.96 0 0 1 22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-6.329-2.257z"></svg:path>`,
})
export class RiProhibited2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProhibited2LineIcon],svg[ri-prohibited-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.906 5.68L5.68 16.906A8 8 0 0 1 16.906 5.68M7.094 18.32L18.32 7.094A8 8 0 0 1 7.094 18.32M12 2C6.477 2 2 6.477 2 12s4.478 10 10 10s10-4.477 10-10S17.522 2 12 2"></svg:path>`,
})
export class RiProhibited2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProhibitedFillIcon],svg[ri-prohibited-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.743 18.329A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-6.329 2.257zM4.257 5.67A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.329-2.257z"></svg:path>`,
})
export class RiProhibitedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProhibitedLineIcon],svg[ri-prohibited-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.094 5.68L18.32 16.906A8 8 0 0 0 7.094 5.68m9.812 12.64L5.68 7.094A8 8 0 0 0 16.906 18.32M4.929 4.929A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.929-7.071"></svg:path>`,
})
export class RiProhibitedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProjector2FillIcon],svg[ri-projector-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9.81a6.48 6.48 0 0 1 4.69-2c1.843 0 3.508.767 4.69 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1m-5.5-5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M4 13v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class RiProjector2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProjector2LineIcon],svg[ri-projector-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10.528A6 6 0 0 1 17 3c1.777 0 3.374.773 4.472 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1M11.341 7H3v10h18v-3.528A6 6 0 0 1 11.341 7M17 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5 13h2v2H5zm3 0h2v2H8z"></svg:path>`,
})
export class RiProjector2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProjectorFillIcon],svg[ri-projector-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v6h-3.126a4.002 4.002 0 0 0-7.748 0H2V4a1 1 0 0 1 1-1m-1 9v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8h-3.126a4.002 4.002 0 0 1-7.748 0zm13-3a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-9 6h2v2H6z"></svg:path>`,
})
export class RiProjectorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riProjectorLineIcon],svg[ri-projector-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.126 9H4v7h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0m0-2a4.002 4.002 0 0 1 7.748 0H20V5H4v5zM15 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9 2h2v2H6z"></svg:path>`,
})
export class RiProjectorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPsychotherapyFillIcon],svg[ri-psychotherapy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.245-3.305A8 8 0 0 1 11 2m0 5a1 1 0 0 0-1 1v.999L9 9a1 1 0 0 0 0 2l1-.001V12a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiPsychotherapyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPsychotherapyLineIcon],svg[ri-psychotherapy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.245-3.305A8 8 0 0 1 11 2m0 2a6 6 0 0 0-4.684 9.75C7.41 15.114 8 16.667 8 18.306V20h5l.002-3H17v-4.248l1.55-.664l-1.543-2.425l-.057-.442A6 6 0 0 0 11 4m0 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1.001L9 11a1 1 0 1 1 0-2l1-.001V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiPsychotherapyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPulseAiFillIcon],svg[ri-pulse-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M15 21.538l-6-14L6.66 13H1v-2h4.34L9 2.461l6 14L17.34 11H23v2h-4.34z"></svg:path>`,
})
export class RiPulseAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPulseAiLineIcon],svg[ri-pulse-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M15 21.538l-6-14L6.66 13H1v-2h4.34L9 2.461l6 14L17.34 11H23v2h-4.34z"></svg:path>`,
})
export class RiPulseAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPulseFillIcon],svg[ri-pulse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7.539l6 14L18.66 13H23v-2h-5.66L15 16.461l-6-14L5.34 11H1v2h5.66z"></svg:path>`,
})
export class RiPulseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPulseLineIcon],svg[ri-pulse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 7.539l6 14L18.66 13H23v-2h-5.66L15 16.461l-6-14L5.34 11H1v2h5.66z"></svg:path>`,
})
export class RiPulseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPushpin2FillIcon],svg[ri-pushpin-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3z"></svg:path>`,
})
export class RiPushpin2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPushpin2LineIcon],svg[ri-pushpin-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3zM9 5v6.606L7.404 14h9.192L15 11.606V5z"></svg:path>`,
})
export class RiPushpin2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPushpinFillIcon],svg[ri-pushpin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.313 10.175l-1.415 1.414l-.707-.707l-4.242 4.243l-.707 3.536l-1.415 1.414l-4.242-4.243l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.243-4.243l1.414-1.414l3.536-.707l4.242-4.243l-.707-.707l1.414-1.414z"></svg:path>`,
})
export class RiPushpinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPushpinLineIcon],svg[ri-pushpin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.827 1.69l8.486 8.485l-1.415 1.414l-.707-.707l-4.242 4.243l-.707 3.536l-1.415 1.414l-4.242-4.243l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.243-4.243l1.414-1.414l3.536-.707l4.242-4.243l-.707-.707zm.707 3.536l-4.67 4.67l-2.822.565l6.5 6.5l.564-2.822l4.671-4.67z"></svg:path>`,
})
export class RiPushpinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPuzzle2FillIcon],svg[ri-puzzle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a3 3 0 1 1 5.83 1H20a1 1 0 0 1 1 1v3.126a1 1 0 0 1-1.25.969a3 3 0 1 0 0 5.811a1 1 0 0 1 1.25.968V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.17C8.06 4.687 8 4.35 8 4"></svg:path>`,
})
export class RiPuzzle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPuzzle2LineIcon],svg[ri-puzzle-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a4 4 0 1 1 8 0h5a1 1 0 0 1 1 1v4.17a1 1 0 0 1-1.333.944a2 2 0 1 0 0 3.773a1 1 0 0 1 1.333.942V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h14v-2a4 4 0 0 1 0-8V7h-5.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiPuzzle2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPuzzleFillIcon],svg[ri-puzzle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a3 3 0 1 1 5.83 1H18a1 1 0 0 1 1 1v4.17a3 3 0 1 1 0 5.659V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.17C8.06 4.687 8 4.35 8 4"></svg:path>`,
})
export class RiPuzzleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPuzzleLineIcon],svg[ri-puzzle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a4 4 0 1 1 8 0h3a1 1 0 0 1 1 1v3a4 4 0 0 1 0 8v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h12v-3.17a1 1 0 0 1 1.333-.944Q18.646 15 19 15a2 2 0 1 0-.667-3.886A1 1 0 0 1 17 10.17V7h-3.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiPuzzleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQqFillIcon],svg[ri-qq-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.914 14.529a32 32 0 0 0-.676-1.886l-.91-2.246c.002-.026.013-.468.013-.696C18.34 5.86 16.508 2 12 2S5.66 5.86 5.66 9.7c0 .229.011.671.012.697l-.91 2.246a32 32 0 0 0-.675 1.886c-.86 2.737-.581 3.87-.369 3.895c.455.054 1.771-2.06 1.771-2.06c0 1.224.637 2.822 2.016 3.976c-.515.157-1.147.399-1.554.695c-.365.267-.319.54-.253.65c.289.481 4.955.307 6.303.157c1.347.15 6.014.324 6.302-.158c.066-.11.112-.382-.253-.649c-.407-.296-1.039-.538-1.555-.695c1.379-1.154 2.016-2.752 2.016-3.977c0 0 1.316 2.115 1.771 2.06c.212-.025.49-1.157-.37-3.894"></svg:path>`,
})
export class RiQqFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQqLineIcon],svg[ri-qq-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.536 12.514l-.696-1.796c0-.021.01-.375.01-.558C16.85 7.088 15.447 4 12 4s-4.848 3.088-4.848 6.16c0 .183.009.537.01.557l-.696 1.797c-.19.515-.38 1.05-.517 1.51c-.657 2.189-.444 3.095-.282 3.115c.348.043 1.354-1.648 1.354-1.648c0 .98.487 2.258 1.542 3.18c-.394.127-.878.32-1.188.557c-.28.214-.245.431-.194.52c.22.385 3.79.245 4.82.125c1.03.12 4.599.26 4.82-.126c.05-.088.085-.305-.194-.519c-.311-.237-.795-.43-1.19-.556c1.055-.923 1.542-2.202 1.542-3.181c0 0 1.007 1.691 1.355 1.648c.162-.02.378-.928-.283-3.116a27 27 0 0 0-.516-1.509m1.021 8.227c-.373.652-.833.892-1.438 1.057a5 5 0 0 1-.794.138c-.44.045-.986.065-1.613.064a33 33 0 0 1-2.71-.116c-.692.065-1.785.114-2.71.116a16 16 0 0 1-1.614-.064a5 5 0 0 1-.793-.138c-.605-.164-1.065-.405-1.44-1.059a2.27 2.27 0 0 1-.239-1.652c-.592-.132-1.001-.482-1.279-.911a2.4 2.4 0 0 1-.309-.71a4 4 0 0 1-.116-1.106c.013-.785.187-1.762.532-2.912c.14-.466.327-1.008.567-1.655l.554-1.43l-.002-.203C5.153 5.605 7.589 2 12 2c4.413 0 6.848 3.605 6.848 8.16l-.001.203l.553 1.43l.01.026c.225.606.413 1.153.556 1.626c.348 1.15.522 2.128.535 2.916q.012.61-.118 1.108c-.066.246-.161.48-.31.708c-.276.427-.684.776-1.277.91c.13.554.055 1.14-.24 1.654"></svg:path>`,
})
export class RiQqLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrCodeFillIcon],svg[ri-qr-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1zm5 4h-4v-2h2v-2h2zM3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h3v2h-3zM6 6v2h2V6zm0 10v2h2v-2zM16 6v2h2V6z"></svg:path>`,
})
export class RiQrCodeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrCodeLineIcon],svg[ri-qr-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1zm5 4h-4v-2h2v-2h2zM3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm13-2h3v2h-3zM6 6h2v2H6zm0 10h2v2H6zM16 6h2v2h-2z"></svg:path>`,
})
export class RiQrCodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrScan2FillIcon],svg[ri-qr-scan-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v6h-6zM9 3v6H3V3zm6 18v-6h6v6zm-6 0H3v-6h6zM3 11h18v2H3z"></svg:path>`,
})
export class RiQrScan2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrScan2LineIcon],svg[ri-qr-scan-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v5h-2V5h-4zM9 3v2H5v3H3V3zm6 18v-2h4v-3h2v5zm-6 0H3v-5h2v3h4zM3 11h18v2H3z"></svg:path>`,
})
export class RiQrScan2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrScanFillIcon],svg[ri-qr-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v5.007a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007V15zM2 11h20v2H2zm19-2H3V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993z"></svg:path>`,
})
export class RiQrScanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQrScanLineIcon],svg[ri-qr-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16v5H3v-5h2v3h14v-3zM3 11h18v2H3zm18-3h-2V5H5v3H3V3h18z"></svg:path>`,
})
export class RiQrScanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionAnswerFillIcon],svg[ri-question-answer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h10.237L20 19.385V9h1a1 1 0 0 1 1 1v13.5L17.546 20H9a1 1 0 0 1-1-1zm-2.545-2L1 19.5V4a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12z"></svg:path>`,
})
export class RiQuestionAnswerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionAnswerLineIcon],svg[ri-question-answer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12zm-.692-2H16V4H3v10.385zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.546 19H9a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiQuestionAnswerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionFillIcon],svg[ri-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1-7v2h2v-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.5 3.5 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2z"></svg:path>`,
})
export class RiQuestionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionLineIcon],svg[ri-question-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-5h2v2h-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355"></svg:path>`,
})
export class RiQuestionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionMarkIcon],svg[ri-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0-17a6 6 0 0 1 6 6c0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8a4 4 0 0 0-8 0v1H6V8a6 6 0 0 1 6-6"></svg:path>`,
})
export class RiQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionnaireFillIcon],svg[ri-questionnaire-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 14v2h2v-2zM8.567 8.813l1.962.393A1.5 1.5 0 1 1 12 11h-1v2h1a3.5 3.5 0 1 0-3.433-4.187"></svg:path>`,
})
export class RiQuestionnaireFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuestionnaireLineIcon],svg[ri-questionnaire-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 14h2v2h-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794z"></svg:path>`,
})
export class RiQuestionnaireLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuillPenAiFillIcon],svg[ri-quill-pen-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251m-1.65 14.485C4.09 15.422 6.312 1.997 21 1.997c-1.496 3-2.5 4.5-3.5 5.5l-1 1l1.5 1c-1 3-4 6.5-8 7q-4.003.5-5.002 5.5H3z"></svg:path>`,
})
export class RiQuillPenAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuillPenAiLineIcon],svg[ri-quill-pen-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251m1.621 8.687c.176-.582.373-1.159.605-1.782c2.056-5.527 5.48-8.951 11.074-9.818c-.513 1.143-.998 1.938-1.427 2.367l-1.001 1.002L14.172 9l1.456 1.454c-1.13 2.085-3.363 3.745-5.876 4.059c-1.317.165-2.459.607-3.418 1.303M18 9.997l-1-1l1.003-1.003Q19.502 6.493 21 1.997c-14.689 0-16.911 13.425-17.936 19.616L3 21.997h1.998q.999-5 5.002-5.5c4-.5 7-3.5 8-6.5"></svg:path>`,
})
export class RiQuillPenAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuillPenFillIcon],svg[ri-quill-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1.997c-15 0-17 14-18 20h1.998q.999-5 5.002-5.5c4-.5 7-4 8-7l-1.5-1l1-1c1-1 2.004-2.5 3.5-5.5"></svg:path>`,
})
export class RiQuillPenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuillPenLineIcon],svg[ri-quill-pen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.94 14.033a30 30 0 0 0-.606 1.783c.96-.697 2.101-1.14 3.418-1.304c2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455l1.413-1.415l1-1.002c.43-.429.915-1.224 1.428-2.367c-5.593.867-9.018 4.291-11.074 9.818M17 8.997l1 1c-1 3-4 6-8 6.5q-4.003.5-5.002 5.5H3c1-6 3-20 18-20q-1.5 4.496-2.997 5.997z"></svg:path>`,
})
export class RiQuillPenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riQuoteTextIcon],svg[ri-quote-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3v2h18zm0 7H8v2h13zm0 7H8v2h13zM5 11H3v9h2z"></svg:path>`,
})
export class RiQuoteTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadarFillIcon],svg[ri-radar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.369 4.398l-3.485 6.035l1.732 1l3.485-6.035c4.169 2.772 6.305 7.08 4.56 10.102c-1.86 3.222-7.19 3.355-11.91.63C4.028 13.402 1.48 8.721 3.34 5.5c1.745-3.023 6.543-3.327 11.028-1.102m1.515-2.625l1.732 1l-1.5 2.598l-1.732-1zM6.732 20H17v2H5.018a1 1 0 0 1-1.015-.922a1 1 0 0 1 .131-.578l2.25-3.897l1.732 1z"></svg:path>`,
})
export class RiRadarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadarLineIcon],svg[ri-radar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.507 3.623l-1.024 1.772c-2.91-.879-5.513-.45-6.41 1.105c-1.178 2.04.79 5.652 4.677 7.897c3.888 2.245 8.001 2.142 9.179.103c.897-1.555-.033-4.024-2.25-6.105l1.024-1.772c3.082 2.709 4.462 6.27 2.957 8.877c-1.86 3.222-7.188 3.355-11.91.63C4.03 13.402 1.48 8.721 3.34 5.5c1.505-2.607 5.28-3.192 9.167-1.877m3.377-1.85l1.732 1l-5 8.66l-1.732-1zM6.732 20H17v2H5.018a1 1 0 0 1-1.015-.922a1 1 0 0 1 .131-.578l2.25-3.897l1.732 1z"></svg:path>`,
})
export class RiRadarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadio2FillIcon],svg[ri-radio-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zm3 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5-6v2h4V9zm0 4v2h4v-2z"></svg:path>`,
})
export class RiRadio2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadio2LineIcon],svg[ri-radio-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM4 5v14h16V5zm5 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6m5-6h4v2h-4zm0 4h4v2h-4z"></svg:path>`,
})
export class RiRadio2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadioButtonFillIcon],svg[ri-radio-button-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-6a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class RiRadioButtonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadioButtonLineIcon],svg[ri-radio-button-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-3a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class RiRadioButtonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadioFillIcon],svg[ri-radio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10h3V6H4v4h11V8h2zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zm1 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiRadioFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRadioLineIcon],svg[ri-radio-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10V8h-2v2H5V6h14v4zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM4 5v14h16V5zm4 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiRadioLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRainbowFillIcon],svg[ri-rainbow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c6.075 0 11 4.925 11 11v5h-3v-5a8 8 0 0 0-7.75-7.996L12 7a8 8 0 0 0-7.996 7.75L4 15v5H1v-5C1 8.925 5.925 4 12 4m0 4a7 7 0 0 1 7 7v5h-3v-5a4 4 0 0 0-3.8-3.995L12 11a4 4 0 0 0-3.995 3.8L8 15v5H5v-5a7 7 0 0 1 7-7m0 4a3 3 0 0 1 3 3v5H9v-5a3 3 0 0 1 3-3"></svg:path>`,
})
export class RiRainbowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRainbowLineIcon],svg[ri-rainbow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c6.075 0 11 4.925 11 11v5h-2v-5a9 9 0 0 0-8.735-8.996L12 6a9 9 0 0 0-8.996 8.735L3 15v5H1v-5C1 8.925 5.925 4 12 4m0 4a7 7 0 0 1 7 7v5h-2v-5a5 5 0 0 0-4.783-4.995L12 10a5 5 0 0 0-4.995 4.783L7 15v5H5v-5a7 7 0 0 1 7-7m0 4a3 3 0 0 1 3 3v5h-2v-5a1 1 0 0 0-.883-.993L12 14a1 1 0 0 0-.993.883L11 15v5H9v-5a3 3 0 0 1 3-3"></svg:path>`,
})
export class RiRainbowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRainyFillIcon],svg[ri-rainy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.86 18l-3.153-3.153a1 1 0 0 0-1.414 0L8.18 17.96a8.001 8.001 0 1 1 7.8-11.873A6 6 0 1 1 17 18zm-5.628.732L12 16.965l1.768 1.767a2.5 2.5 0 1 1-3.536 0"></svg:path>`,
})
export class RiRainyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRainyLineIcon],svg[ri-rainy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a8 8 0 0 1 6.98 4.087A6 6 0 1 1 17 18zm-5.768.732L12 16.965l1.768 1.767a2.5 2.5 0 1 1-3.536 0"></svg:path>`,
})
export class RiRainyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRam2FillIcon],svg[ri-ram-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1v2a1 1 0 0 1-1 1h-7.414l-1-1h-1.172l-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 11v1h5.586l1-1zm9.414 0l1 1H20v-1zM7 9H5v3h2zm2 0v3h2V9zm6 0h-2v3h2zm2 0v3h2V9z"></svg:path>`,
})
export class RiRam2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRam2LineIcon],svg[ri-ram-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a1 1 0 0 0 1 1h7.414l1-1h1.172l1 1H21a1 1 0 0 0 1-1v-2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm18 11v1h-5.586l-1-1zm-9.414 0l-1 1H4v-1zM3 14V7h18v7zm2-5h2v3H5zm6 0H9v3h2zm2 0h2v3h-2zm6 0h-2v3h2z"></svg:path>`,
})
export class RiRam2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRamFillIcon],svg[ri-ram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm3 4h6v3H5zm8 0h6v3h-6z"></svg:path>`,
})
export class RiRamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRamLineIcon],svg[ri-ram-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18v10h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3zM2 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm9 4H5v3h6zm2 0h6v3h-6z"></svg:path>`,
})
export class RiRamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReactjsFillIcon],svg[ri-reactjs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.448 16.24a22 22 0 0 1-1.747 2.175c1.673 1.623 3.228 2.383 4.091 1.884c.863-.498.982-2.225.413-4.484c-.853.19-1.779.334-2.757.424m-1.31.087a28 28 0 0 1-2.275 0c.376.492.758.948 1.137 1.363q.571-.623 1.138-1.364m5.04-7.894c2.665.764 4.406 2.034 4.406 3.567s-1.74 2.803-4.405 3.567c.67 2.69.44 4.832-.887 5.598c-1.327.767-3.297-.105-5.292-2.031c-1.994 1.925-3.964 2.798-5.291 2.031s-1.557-2.908-.887-5.598C3.157 14.803 1.417 13.533 1.417 12s1.74-2.803 4.405-3.567c-.67-2.69-.44-4.832.887-5.599c1.327-.766 3.297.106 5.291 2.032c1.995-1.926 3.965-2.798 5.292-2.032c1.327.767 1.557 2.909.887 5.599m-.973-.248c.57-2.26.45-3.986-.413-4.485c-.863-.498-2.418.262-4.09 1.885a22 22 0 0 1 1.746 2.175c.978.09 1.904.234 2.757.425m-10.41 7.63c-.569 2.26-.45 3.986.414 4.484c.863.498 2.418-.261 4.09-1.884a22 22 0 0 1-1.746-2.176a22 22 0 0 1-2.757-.425m4.068-8.142a28 28 0 0 1 2.275 0A21 21 0 0 0 12 6.31q-.57.625-1.137 1.364m-1.31.087a22 22 0 0 1 1.746-2.175C9.627 3.962 8.072 3.202 7.21 3.7c-.863.499-.983 2.226-.413 4.485c.853-.19 1.779-.334 2.757-.425m4.34 7.52A25.4 25.4 0 0 0 15.788 12a25.4 25.4 0 0 0-1.893-3.28a25.4 25.4 0 0 0-3.787 0A25.4 25.4 0 0 0 8.213 12a25.4 25.4 0 0 0 1.894 3.28a25.4 25.4 0 0 0 3.787 0m1.285-.132q.924-.12 1.75-.303a21 21 0 0 0-.612-1.667a28 28 0 0 1-1.137 1.97M8.823 8.851q-.924.121-1.75.304q.255.806.613 1.667a28 28 0 0 1 1.137-1.97m-1.75 5.994q.826.182 1.75.303a28 28 0 0 1-1.137-1.97a21 21 0 0 0-.613 1.667m-.978-.245c.262-.834.6-1.708 1.01-2.6a22 22 0 0 1-1.01-2.6c-2.241.636-3.677 1.604-3.677 2.6s1.436 1.963 3.677 2.6M16.93 9.155q-.827-.183-1.75-.304a28 28 0 0 1 1.137 1.97q.357-.86.613-1.666m.977.245c-.26.834-.6 1.708-1.01 2.6c.41.892.75 1.766 1.01 2.6c2.242-.637 3.678-1.604 3.678-2.6s-1.436-1.963-3.678-2.6M12 13.879a1.88 1.88 0 1 1 0-3.758a1.88 1.88 0 0 1 0 3.758"></svg:path>`,
})
export class RiReactjsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReactjsLineIcon],svg[ri-reactjs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-.528 2.994q.262.316.528.609q.266-.292.528-.609a25 25 0 0 1-1.056 0m-1.995-.125a21 21 0 0 1-2.285-.367q-.113.525-.17 1.015c-.19 1.583.075 2.545.478 2.777s1.368-.019 2.645-.974q.395-.296.794-.655a21 21 0 0 1-1.462-1.796m7.331-.367a21 21 0 0 1-2.285.367a21 21 0 0 1-1.462 1.796q.4.36.794.655c1.277.955 2.242 1.207 2.645.974c.403-.232.667-1.194.479-2.777a11 11 0 0 0-.17-1.015m1.45-.388c.577 2.639.274 4.74-1.008 5.48s-3.253-.048-5.25-1.867c-1.997 1.819-3.968 2.606-5.25 1.866s-1.585-2.84-1.009-5.48C3.168 14.794 1.501 13.48 1.501 12s1.667-2.793 4.241-3.613c-.576-2.64-.273-4.74 1.009-5.48s3.253.047 5.25 1.866c1.997-1.819 3.968-2.606 5.25-1.866s1.585 2.84 1.009 5.48c2.573.82 4.24 2.133 4.24 3.613s-1.668 2.794-4.241 3.614m-7.32-9.779q-.398-.359-.793-.655C8.869 4.225 7.904 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.778q.06.49.17 1.015a21 21 0 0 1 2.286-.368q.714-.981 1.462-1.796m3.585 1.796a21 21 0 0 1 2.285.368q.113-.526.17-1.015c.19-1.584-.075-2.546-.478-2.778s-1.368.019-2.645.974q-.395.296-.794.655q.748.815 1.462 1.796m-1.995-.125q-.262-.316-.528-.609q-.265.293-.528.609a25 25 0 0 1 1.056 0m-4.156 7.198a25 25 0 0 1-.528-.914q-.143.385-.263.762q.386.083.79.152m1.932.234a23 23 0 0 0 3.392 0A23 23 0 0 0 15.393 12a23 23 0 0 0-1.696-2.938a23 23 0 0 0-3.392 0A23 23 0 0 0 8.609 12a23 23 0 0 0 1.696 2.938m5.852-4.728q.143-.385.263-.761a18 18 0 0 0-.79-.153a25 25 0 0 1 .527.914M6.131 9.837q-.51.165-.964.36c-1.465.628-2.166 1.338-2.166 1.803s.7 1.175 2.166 1.803q.454.195.964.36c.222-.7.497-1.426.825-2.163a21 21 0 0 1-.825-2.163m1.45-.388q.121.375.264.76a25 25 0 0 1 .528-.913q-.405.069-.791.153m10.29 4.714q.51-.165.964-.36C20.3 13.175 21 12.465 21 12s-.7-1.175-2.166-1.803q-.454-.195-.965-.36c-.22.7-.496 1.426-.824 2.163c.328.737.603 1.463.825 2.163m-1.45.389q-.122-.377-.264-.762a25 25 0 0 1-.528.914q.405-.07.791-.152"></svg:path>`,
})
export class RiReactjsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReceiptFillIcon],svg[ri-receipt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4L6 2L3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2H7v2a1 1 0 1 1-2 0v-4h16V4l-3-2l-3 2l-3-2z"></svg:path>`,
})
export class RiReceiptFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReceiptLineIcon],svg[ri-receipt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4L6 2L3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3h-2V4l-3-2l-3 2l-3-2zm10 12H7v3a1 1 0 1 1-2 0V5.07l1-.666l3 2l3-2l3 2l3-2l1 .666zm1 4H8.83c.11-.313.17-.65.17-1v-1h12v1a1 1 0 0 1-1 1"></svg:path>`,
})
export class RiReceiptLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecordCircleFillIcon],svg[ri-record-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-7a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiRecordCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecordCircleLineIcon],svg[ri-record-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-5a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiRecordCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecordMailFillIcon],svg[ri-record-mail-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.743 15h4.514a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2M5.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m13 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiRecordMailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecordMailLineIcon],svg[ri-record-mail-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.257 15a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2zM5.5 15a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m13 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class RiRecordMailLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRectangleFillIcon],svg[ri-rectangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiRectangleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRectangleLineIcon],svg[ri-rectangle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 2v12h16V6z"></svg:path>`,
})
export class RiRectangleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecycleFillIcon],svg[ri-recycle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.561 12.099l1.532 2.651A3.5 3.5 0 0 1 18.06 20H16v2l-5-3.5l5-3.5v2h2.062a.5.5 0 0 0 .471-.668l-.038-.082l-1.53-2.652zM7.736 9.384l.531 6.08l-1.731-1l-1.032 1.786a.5.5 0 0 0 .343.742l.09.008H9v3H5.937a3.5 3.5 0 0 1-3.031-5.25l1.032-1.786l-1.733-1zM13.75 2.97a3.5 3.5 0 0 1 1.28 1.28l1.031 1.786l1.733-1l-.532 6.08l-5.53-2.58l1.73-1l-1.03-1.786a.5.5 0 0 0-.814-.074l-.052.074l-1.53 2.652l-2.598-1.5l1.53-2.652a3.5 3.5 0 0 1 4.782-1.28"></svg:path>`,
})
export class RiRecycleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRecycleLineIcon],svg[ri-recycle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.56 12.098l1.532 2.652A3.5 3.5 0 0 1 18.061 20h-2.062v2.5l-5-3.5l5-3.5V18h2.062a1.5 1.5 0 0 0 1.299-2.25l-1.532-2.652zM7.304 9.134l.53 6.08l-2.165-1.25l-1.03 1.786A1.5 1.5 0 0 0 5.937 18h3.062v2H5.937a3.5 3.5 0 0 1-3.032-5.25l1.031-1.787l-2.165-1.249zm6.446-6.165a3.5 3.5 0 0 1 1.28 1.281l1.032 1.786l2.165-1.25l-.531 6.08l-5.531-2.58l2.165-1.25l-1.031-1.786a1.5 1.5 0 0 0-2.598 0L9.168 7.903l-1.732-1L8.968 4.25a3.5 3.5 0 0 1 4.78-1.281"></svg:path>`,
})
export class RiRecycleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRedPacketFillIcon],svg[ri-red-packet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 5.94a12 12 0 0 1-6.806 3.863a2.5 2.5 0 0 0-4.388 0A12 12 0 0 1 3.005 5.94V3.003a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm0 2.787v12.276a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V8.727a13.95 13.95 0 0 0 6.63 3.076a2.501 2.501 0 0 0 4.739 0a13.95 13.95 0 0 0 6.63-3.076"></svg:path>`,
})
export class RiRedPacketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRedPacketLineIcon],svg[ri-red-packet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.178 9.766a10 10 0 0 0 4.827-2.622V4.003h-14v3.141a10 10 0 0 0 4.827 2.622a2.5 2.5 0 0 1 4.346 0m.208 2a2.501 2.501 0 0 1-4.762 0a11.9 11.9 0 0 1-4.62-2.015v10.252h14V9.75a11.9 11.9 0 0 1-4.618 2.016M4.005 2.004h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiRedPacketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRedditFillIcon],svg[ri-reddit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m6.67-10a1.46 1.46 0 0 0-2.47-1a7.1 7.1 0 0 0-3.85-1.23l.65-3.12l2.14.45a1 1 0 1 0 .13-.61L12.821 6a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23a1.46 1.46 0 1 0-1.61 2.39a3 3 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a3 3 0 0 0 0-.44a1.46 1.46 0 0 0 .81-1.33m-10 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5.81 2.75a3.84 3.84 0 0 1-2.47.77a3.84 3.84 0 0 1-2.47-.77a.27.27 0 0 1 .38-.38a3.27 3.27 0 0 0 2.08.63a3.28 3.28 0 0 0 2.09-.61a.28.28 0 1 1 .39.4zm-.18-1.71a1 1 0 1 1 1-1a1 1 0 0 1-1.01 1.04z"></svg:path>`,
})
export class RiRedditFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRedditLineIcon],svg[ri-reddit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.053 7.815l.751-3.536a2 2 0 0 1 2.372-1.54l3.196.68a2 2 0 1 1-.415 1.956l-3.197-.68l-.666 3.135c1.785.137 3.558.73 5.164 1.7A3.192 3.192 0 0 1 23 12.203v.021a3.2 3.2 0 0 1-1.207 2.55l-.008.123c0 3.998-4.45 7.03-9.799 7.03c-5.333 0-9.708-3.024-9.705-6.953l-.01-.181a3.193 3.193 0 0 1 3.454-5.35a11.45 11.45 0 0 1 5.329-1.628m9.285 5.526a1.19 1.19 0 0 0 .662-1.075a1.192 1.192 0 0 0-2.016-.806l-.585.56l-.67-.455c-1.615-1.098-3.452-1.725-5.23-1.764h-1.006c-1.875.028-3.652.6-5.237 1.675l-.664.45l-.583-.55a1.192 1.192 0 1 0-1.315 1.952l.633.29l-.053.695a4 4 0 0 0 .003.584c0 2.71 3.356 5.03 7.708 5.03c4.371 0 7.799-2.336 7.802-5.107a3 3 0 0 0 0-.507l-.052-.672zM6.951 13.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m7 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m-1.985 5.103c-1.397 0-2.766-.37-3.881-1.21a.424.424 0 0 1 .597-.597c.945.693 2.123.99 3.269.99s2.33-.275 3.284-.959a.44.44 0 0 1 .732.206a.47.47 0 0 1-.12.423c-.683.797-2.483 1.147-3.88 1.147"></svg:path>`,
})
export class RiRedditLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefreshFillIcon],svg[ri-refresh-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4.82-4.924A7 7 0 0 0 9.032 5.658l.975 1.755A5 5 0 0 1 17 12h-3zm-1.852 1.266l-.975-1.755A5 5 0 0 1 7 12h3L7.18 6.924a7 7 0 0 0 7.788 11.418"></svg:path>`,
})
export class RiRefreshFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefreshLineIcon],svg[ri-refresh-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.463 4.433A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228zm13.074 15.134A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772z"></svg:path>`,
})
export class RiRefreshLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefund2FillIcon],svg[ri-refund-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-6.383-2.302l-.244-.209l.901-1.902a8 8 0 1 0-2.27-5.837l-.004.25h2.5l-2.706 5.716A9.95 9.95 0 0 1 2.005 12c0-5.523 4.477-10 10-10m1 4v2h2.5v2h-5.5a.5.5 0 0 0-.09.992l.09.008h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5v-2h5.5a.5.5 0 0 0 .09-.992l-.09-.008h-4a2.5 2.5 0 1 1 0-5h1V6z"></svg:path>`,
})
export class RiRefund2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefund2LineIcon],svg[ri-refund-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.676 4.257c3.928-3.219 9.733-2.995 13.4.672c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0a9.99 9.99 0 0 1-2.678-9.304l.077-.313l1.934.51a8 8 0 1 0 3.053-4.45l-.22.166l1.017 1.017l-4.596 1.06l1.06-4.596zM13.005 6v2h2.5v2h-5.5a.5.5 0 0 0-.09.992l.09.008h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5v-2h5.5a.5.5 0 0 0 .09-.992l-.09-.008h-4a2.5 2.5 0 1 1 0-5h1V6z"></svg:path>`,
})
export class RiRefund2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefundFillIcon],svg[ri-refund-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 7h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm0 2v11a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V9zm-11 5v-2.5l-4.5 4.5h10.5v-2z"></svg:path>`,
})
export class RiRefundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRefundLineIcon],svg[ri-refund-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 8V5h-16v3zm0 2h-16v9h16zm-17-7h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 11h6v2h-10.5l4.5-4.5z"></svg:path>`,
})
export class RiRefundLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRegisteredFillIcon],svg[ri-registered-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.5 5H8v10h2v-3h2.217l2.18 3h2.472l-2.55-3.51a3.5 3.5 0 0 0-1.627-6.486zm0 2a1.5 1.5 0 0 1 1.493 1.355L14 10.5l-.007.145a1.5 1.5 0 0 1-1.348 1.348L12.5 12H10V9z"></svg:path>`,
})
export class RiRegisteredFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRegisteredLineIcon],svg[ri-registered-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m.5 3a3.5 3.5 0 0 1 1.82 6.49L16.868 17h-2.472l-2.18-3H10v3H8V7zm0 2H10v3h2.5a1.5 1.5 0 0 0 1.493-1.355L14 10.5A1.5 1.5 0 0 0 12.5 9"></svg:path>`,
})
export class RiRegisteredLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemixRunFillIcon],svg[ri-remix-run-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.116 20c0-1.064 0-2.04-.162-4.119c-.2-2.09-1.289-3.148-3.15-3.52c2.205-.286 3.837-2.004 3.837-4.637C19.64 4.204 17.32 2 12.656 2H4v3.669h7.797c2.061 0 3.092.884 3.092 2.344c0 1.66-1.03 2.287-3.092 2.287H4v3.75h7.568c1.632 0 2.52.457 2.662 2.518a25 25 0 0 1 .082 2.773v.003c-.004.214-.008.425-.008.656zM4 17.205V20h6.122v-1.79c0-.375-.184-1.005-1.034-1.005z"></svg:path>`,
})
export class RiRemixRunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemixRunLineIcon],svg[ri-remix-run-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h10.5a6 6 0 0 1 3.054 11.166A6 6 0 0 1 20 18v3h-2v-3a4 4 0 0 0-4-4H4v-2h10.5a4 4 0 0 0 0-8H4zm7 19H4v-2h7z"></svg:path>`,
})
export class RiRemixRunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemixiconFillIcon],svg[ri-remixicon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 17.53L20.001 21h-17V4h10.667v.008A7 7 0 0 1 14.137 4q-.135.556-.136 1.166c0 2.318 2.015 4.333 4.667 4.333a4.2 4.2 0 0 0 2.032-.538a7 7 0 0 1-4.17 8.567M18.501 7.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class RiRemixiconFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemixiconLineIcon],svg[ri-remixicon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.365 6l8.784 9.663l.72-.283c1.685-.661 2.864-2.156 3.092-3.896q-.23.016-.46.016A6.5 6.5 0 0 1 12.077 6zM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947c0 2.891-1.822 5.365-4.4 6.377L20 21H3V4h11.111A4.5 4.5 0 0 0 14 5m4.5 2.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M5 7.47V19h10.48z"></svg:path>`,
})
export class RiRemixiconLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemoteControl2FillIcon],svg[ri-remote-control-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 13h-2v2h2zm-4 0H9v2h2zm2-9h-2v2H9v2h1.999L11 12h2l-.001-2H15V8h-2z"></svg:path>`,
})
export class RiRemoteControl2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemoteControl2LineIcon],svg[ri-remote-control-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 2H7v16h10zm-2 11v2h-2v-2zm-4 0v2H9v-2zm2-9v2h2v2h-2.001L13 12h-2l-.001-2H9V8h2V6z"></svg:path>`,
})
export class RiRemoteControl2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemoteControlFillIcon],svg[ri-remote-control-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a1 1 0 0 1 1 1v9H6v-9a1 1 0 0 1 1-1zm-7 2H8v2h2zm2-8a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.156 0l-1.79-.895A6 6 0 0 1 12 6m0-4a10 10 0 0 1 8.947 5.527l-1.79.895A8 8 0 0 0 12 4a8 8 0 0 0-7.157 4.422l-1.79-.895A10 10 0 0 1 12 2"></svg:path>`,
})
export class RiRemoteControlFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRemoteControlLineIcon],svg[ri-remote-control-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a1 1 0 0 1 1 1v9h-2v-8H8v8H6v-9a1 1 0 0 1 1-1zm-5 4v2h-2v-2zm0-10a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.156 0l-1.79-.895A6 6 0 0 1 12 6m0-4a10 10 0 0 1 8.947 5.527l-1.79.895A8 8 0 0 0 12 4a8 8 0 0 0-7.157 4.422l-1.79-.895A10 10 0 0 1 12 2"></svg:path>`,
})
export class RiRemoteControlLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeat2FillIcon],svg[ri-repeat-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v1.933a.5.5 0 0 1-.82.384l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4z"></svg:path>`,
})
export class RiRepeat2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeat2LineIcon],svg[ri-repeat-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4z"></svg:path>`,
})
export class RiRepeat2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeatFillIcon],svg[ri-repeat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4l-5 4z"></svg:path>`,
})
export class RiRepeatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeatLineIcon],svg[ri-repeat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4l-5 4z"></svg:path>`,
})
export class RiRepeatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeatOneFillIcon],svg[ri-repeat-one-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v1.933a.5.5 0 0 1-.82.384l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4zm-5 4h2v8h-2v-6H9V9z"></svg:path>`,
})
export class RiRepeatOneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRepeatOneLineIcon],svg[ri-repeat-one-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v1.933a.5.5 0 0 1-.82.384l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-17.932a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zM11 8h2v8h-2v-6H9V9z"></svg:path>`,
})
export class RiRepeatOneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay10FillIcon],svg[ri-replay-10-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2m2.5 6.25a2.5 2.5 0 0 0-2.5 2.5v2.5a2.5 2.5 0 0 0 5 0v-2.5a2.5 2.5 0 0 0-2.5-2.5m1 2.5v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0M10 8.5H8.5v7H10z"></svg:path>`,
})
export class RiReplay10FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay10LineIcon],svg[ri-replay-10-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4m3.5 11.25a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0zm-1-5a2.5 2.5 0 0 0-2.5 2.5v2.5a2.5 2.5 0 0 0 5 0v-2.5a2.5 2.5 0 0 0-2.5-2.5m-6 7.25v-7H10v7z"></svg:path>`,
})
export class RiReplay10LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay15FillIcon],svg[ri-replay-15-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2M8.5 8.5H10v7H8.5zm8.25 0H12v4.25h2.875a.625.625 0 1 1 0 1.25H12v1.5h2.875a2.125 2.125 0 0 0 0-4.25H13.5V10h3.25z"></svg:path>`,
})
export class RiReplay15FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay15LineIcon],svg[ri-replay-15-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4M8.5 15.5v-7H10v7zm3.5-7h4.75V10H13.5v1.25h1.375a2.125 2.125 0 0 1 0 4.25H12V14h2.875a.625.625 0 1 0 0-1.25H12z"></svg:path>`,
})
export class RiReplay15LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay30FillIcon],svg[ri-replay-30-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10a9.98 9.98 0 0 0-7.553 3.446L2 3v6h4.75v1h2.625a.625.625 0 1 1 0 1.25H7.5v1.5h1.875a.625.625 0 1 1 0 1.25H6.75v1.5h2.625a2.125 2.125 0 0 0 1.62-3.5a2.125 2.125 0 0 0-1.62-3.5H7.5L5.865 6.865A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10m-9.5-1.25a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1-5 0zm2.5-1a1 1 0 0 0-1 1v2.5a1 1 0 1 0 2 0v-2.5a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiReplay30FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay30LineIcon],svg[ri-replay-30-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10a9.99 9.99 0 0 0-8 4V3.5H2v6h4.75v.5h2.625a.625.625 0 1 1 0 1.25H7.5v1.5h1.875a.625.625 0 1 1 0 1.25H6.75v1.5h2.625a2.125 2.125 0 0 0 1.62-3.5a2.125 2.125 0 0 0-1.62-3.5H8v-1H5.385A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10m-9.5-1.25a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1-5 0zm2.5-1a1 1 0 0 0-1 1v2.5a1 1 0 1 0 2 0v-2.5a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiReplay30LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay5FillIcon],svg[ri-replay-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10a9.98 9.98 0 0 0-7.553 3.446L2 3v6h6L5.865 6.865A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10m-7.5-2V8.5h-5v4.25h3.125a.625.625 0 1 1 0 1.25H9.5v1.5h3.125a2.125 2.125 0 0 0 0-4.25H11V10z"></svg:path>`,
})
export class RiReplay5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplay5LineIcon],svg[ri-replay-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4M9.5 8.5h5V10H11v1.25h1.625a2.125 2.125 0 0 1 0 4.25H9.5V14h3.125a.625.625 0 1 0 0-1.25H9.5z"></svg:path>`,
})
export class RiReplay5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplyAllFillIcon],svg[ri-reply-all-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5V9c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L16 15h-2v4.5L6 12zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5L0 12z"></svg:path>`,
})
export class RiReplyAllFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplyAllLineIcon],svg[ri-reply-all-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5V9c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L16 15h-2v4.5L6 12zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5L0 12zm4 4.616L8.924 12L12 14.883V13h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.98 7.98 0 0 0 14 11h-2z"></svg:path>`,
})
export class RiReplyAllLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplyFillIcon],svg[ri-reply-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81A9 9 0 0 0 13 15h-2z"></svg:path>`,
})
export class RiReplyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReplyLineIcon],svg[ri-reply-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L13 15h-2zm-2-7h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.98 7.98 0 0 0 11 11H9V8.161L4.202 12L9 15.839z"></svg:path>`,
})
export class RiReplyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReservedFillIcon],svg[ri-reserved-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM8 8v2h8V8z"></svg:path>`,
})
export class RiReservedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riReservedLineIcon],svg[ri-reserved-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-8-2h14V5H5zm3-5h8v2H8z"></svg:path>`,
})
export class RiReservedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riResetLeftFillIcon],svg[ri-reset-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2v2a8 8 0 1 0 5.135 1.865L15 8V2h6l-2.447 2.447A9.98 9.98 0 0 1 22 12"></svg:path>`,
})
export class RiResetLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riResetLeftLineIcon],svg[ri-reset-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2v2a8 8 0 1 0 4.5 1.385V8h-2V2h6v2H18a9.99 9.99 0 0 1 4 8"></svg:path>`,
})
export class RiResetLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riResetRightFillIcon],svg[ri-reset-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2v2a8 8 0 1 1-5.135 1.865L9 8V2H3l2.446 2.447A9.98 9.98 0 0 0 2 12"></svg:path>`,
})
export class RiResetRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riResetRightLineIcon],svg[ri-reset-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2v2a8 8 0 1 1-4.5 1.385V8h2V2h-6v2H6a9.99 9.99 0 0 0-4 8"></svg:path>`,
})
export class RiResetRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestTimeFillIcon],svg[ri-rest-time-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v8h8a8 8 0 1 1-16 0c0-4.335 3.58-8 8-8m10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2z"></svg:path>`,
})
export class RiRestTimeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestTimeLineIcon],svg[ri-rest-time-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v2a6 6 0 1 0 5.996 6.225L17 14h2a8 8 0 1 1-16 0c0-4.335 3.58-8 8-8m10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2z"></svg:path>`,
})
export class RiRestTimeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestartFillIcon],svg[ri-restart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4.82-4.924a7 7 0 1 0-1.853 1.266l-.974-1.755A5 5 0 1 1 17 12h-3z"></svg:path>`,
})
export class RiRestartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestartLineIcon],svg[ri-restart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.537 19.567A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772z"></svg:path>`,
})
export class RiRestartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestaurant2FillIcon],svg[ri-restaurant-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.222 3.808l6.718 6.717l-2.829 2.829l-3.889-3.89a4 4 0 0 1 0-5.656m10.046 8.338l-.853.854l7.07 7.071l-1.413 1.414L12 14.415l-7.072 7.07l-1.414-1.414l9.339-9.339c-.588-1.457.02-3.555 1.621-5.157c1.953-1.952 4.644-2.427 6.01-1.06c1.368 1.366.893 4.057-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.621"></svg:path>`,
})
export class RiRestaurant2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestaurant2LineIcon],svg[ri-restaurant-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.268 12.147l-.853.853l7.07 7.071l-1.413 1.414L12 14.415l-7.072 7.07l-1.414-1.414l9.339-9.339c-.588-1.457.02-3.555 1.621-5.156c1.953-1.953 4.644-2.428 6.01-1.061c1.368 1.367.893 4.058-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.622M4.222 3.807l6.718 6.718l-2.829 2.829l-3.889-3.89a4 4 0 0 1 0-5.656m13.789 5.304c1.257-1.257 1.516-2.726 1.06-3.182s-1.924-.196-3.181 1.06c-1.258 1.258-1.517 2.727-1.061 3.183s1.925.196 3.182-1.06"></svg:path>`,
})
export class RiRestaurant2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestaurantFillIcon],svg[ri-restaurant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2v20h-2v-8h-3V7a5 5 0 0 1 5-5M9 13.9V22H7v-8.1A5 5 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5 5 0 0 1-4 4.9"></svg:path>`,
})
export class RiRestaurantFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRestaurantLineIcon],svg[ri-restaurant-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6m-2 2.53C18.17 5 17 6.17 17 8v5h2zM9 13.9V22H7v-8.1A5 5 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5 5 0 0 1-4 4.9"></svg:path>`,
})
export class RiRestaurantLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindFillIcon],svg[ri-rewind-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.667l9.223-6.149a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L12 13.333v5.733a.5.5 0 0 1-.777.416L.624 12.416a.5.5 0 0 1 0-.832l10.599-7.066a.5.5 0 0 1 .777.416z"></svg:path>`,
})
export class RiRewindFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindLineIcon],svg[ri-rewind-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.667l9.223-6.149a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L12 13.333v5.733a.5.5 0 0 1-.777.416L.624 12.416a.5.5 0 0 1 0-.832l10.599-7.066a.5.5 0 0 1 .777.416zm-2 5.596V7.737L3.606 12zm10 0V7.737L13.606 12z"></svg:path>`,
})
export class RiRewindLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindMiniFillIcon],svg[ri-rewind-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.035a.5.5 0 0 1-.788.409l-7.133-5.035a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409zm1.079-4.626a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"></svg:path>`,
})
export class RiRewindMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindMiniLineIcon],svg[ri-rewind-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9.86L5.968 12L9 14.14zm1.909 7.463a.5.5 0 0 1-.697.12l-7.133-5.035a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.091.288M18 14.14V9.86L14.968 12zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"></svg:path>`,
})
export class RiRewindMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindStartFillIcon],svg[ri-rewind-start-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0v-5.667l9.223 6.149a.5.5 0 0 0 .777-.416v-5.733l9.223 6.149a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L13 10.666V4.934a.5.5 0 0 0-.777-.416L3 10.667V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiRewindStartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindStartLineIcon],svg[ri-rewind-start-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0v-5.667l9.223 6.149a.5.5 0 0 0 .777-.416v-5.733l9.223 6.149a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L13 10.666V4.934a.5.5 0 0 0-.777-.416L3 10.667V5a1 1 0 0 0-1-1m9 3.737v8.526L4.606 12zm10 0v8.526L14.606 12z"></svg:path>`,
})
export class RiRewindStartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindStartMiniFillIcon],svg[ri-rewind-start-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m9.909 11.323a.5.5 0 0 0 .091-.288V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0 0 .817l7.133 5.035a.5.5 0 0 0 .697-.12m1.05-5.035a.5.5 0 0 0 .12.12l7.133 5.035a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0-.12.697"></svg:path>`,
})
export class RiRewindStartMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRewindStartMiniLineIcon],svg[ri-rewind-start-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m4.968 6L11 9.86v4.28zm4.244 5.443a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0 0 .817zM16.968 12L20 9.86v4.28zm-3.01.288a.5.5 0 0 0 .12.12l7.134 5.035a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0-.12.697"></svg:path>`,
})
export class RiRewindStartMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRfidFillIcon],svg[ri-rfid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.364 18.364a9 9 0 0 0 0-12.728l1.414-1.414c4.296 4.296 4.296 11.26 0 15.556zM5.636 5.636a9 9 0 0 0 0 12.728l-1.414 1.414c-4.296-4.295-4.296-11.26 0-15.556zm9.9 9.9a5 5 0 0 0 0-7.072L16.95 7.05a7 7 0 0 1 0 9.9zM8.464 8.464a5 5 0 0 0 0 7.072L7.05 16.95a7 7 0 0 1 0-9.9zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiRfidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRfidLineIcon],svg[ri-rfid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.364 18.364a9 9 0 0 0 0-12.728l1.414-1.414c4.296 4.296 4.296 11.26 0 15.556zM5.636 5.636a9 9 0 0 0 0 12.728l-1.414 1.414c-4.296-4.295-4.296-11.26 0-15.556zm9.9 9.9a5 5 0 0 0 0-7.072L16.95 7.05a7 7 0 0 1 0 9.9zM8.464 8.464a5 5 0 0 0 0 7.072L7.05 16.95a7 7 0 0 1 0-9.9zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiRfidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRhythmFillIcon],svg[ri-rhythm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9h2v12H2zm6-6h2v18H8zm6 9h2v9h-2zm6-6h2v15h-2z"></svg:path>`,
})
export class RiRhythmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRhythmLineIcon],svg[ri-rhythm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9h2v12H2zm6-6h2v18H8zm6 9h2v9h-2zm6-6h2v15h-2z"></svg:path>`,
})
export class RiRhythmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRidingFillIcon],svg[ri-riding-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m13 3a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-6.969-8.203L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.97 6.97 0 0 0 3.917 1.975l-.01 2.015a8.96 8.96 0 0 1-5.321-2.575zM16 5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRidingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRidingLineIcon],svg[ri-riding-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-7.477-8.695L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.97 6.97 0 0 0 3.917 1.975l-.01 2.015a8.96 8.96 0 0 1-5.321-2.575zM16 5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRidingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRoadMapFillIcon],svg[ri-road-map-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.95 11.95a7 7 0 0 0 1.858-6.582l2.495-1.07a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46V7l3.129-1.341a7 7 0 0 0 1.921 6.29L12 16.9zm-1.414-1.414L12 14.07l-3.536-3.535a5 5 0 1 1 7.072 0"></svg:path>`,
})
export class RiRoadMapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRoadMapLineIcon],svg[ri-road-map-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.143v12.824l5.065-2.17l6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46V7zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0M12 12.657l2.828-2.829a4 4 0 1 0-5.656 0z"></svg:path>`,
})
export class RiRoadMapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRoadsterFillIcon],svg[ri-roadster-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5h1.875l2.138-5.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L21.625 11H23.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.758.97zM4 15v2a1 1 0 0 0 1 1h3.245a.5.5 0 0 0 .44-.736Q7.476 15 4 15m16 0q-3.476 0-4.686 2.264a.5.5 0 0 0 .441.736H19a1 1 0 0 0 1-1zM6 6l-1.561 4.684A1 1 0 0 0 5.387 12h13.226a1 1 0 0 0 .948-1.316L18 6z"></svg:path>`,
})
export class RiRoadsterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRoadsterLineIcon],svg[ri-roadster-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.48-5.788A2 2 0 0 1 6.32 4h11.36a2 2 0 0 1 1.838 1.212L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.758.97L22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm1-2v-5H4v5zM5.477 11h13.046a1 1 0 0 0 .928-1.371L18 6H6L4.549 9.629A1 1 0 0 0 5.477 11M5 14q3.476 0 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736Q15.524 14 19 14"></svg:path>`,
})
export class RiRoadsterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobot2FillIcon],svg[ri-robot-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2c0 .444-.193.843-.5 1.118V5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h5V3.118A1.5 1.5 0 1 1 13.5 2M0 10h2v6H0zm24 0h-2v6h2zM9 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7.5-1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class RiRobot2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobot2LineIcon],svg[ri-robot-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2c0 .444-.193.843-.5 1.118V5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h5V3.118A1.5 1.5 0 1 1 13.5 2M6 7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-4 3H0v6h2zm20 0h2v6h-2zM9 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiRobot2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobot3FillIcon],svg[ri-robot-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-4V1h-2v1H7a3 3 0 0 0-3 3v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a3 3 0 0 0-3-3m-6 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M4 22a8 8 0 1 1 16 0z"></svg:path>`,
})
export class RiRobot3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobot3LineIcon],svg[ri-robot-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1v1H7a3 3 0 0 0-3 3v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a3 3 0 0 0-3-3h-4V1zM6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm3.5 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M6 22a6 6 0 0 1 12 0h2a8 8 0 1 0-16 0z"></svg:path>`,
})
export class RiRobot3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobotFillIcon],svg[ri-robot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.055A9 9 0 0 1 21 13v9H3v-9a9 9 0 0 1 8-8.945V1h2zM12 18a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiRobotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRobotLineIcon],svg[ri-robot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.055A9 9 0 0 1 21 13v9H3v-9a9 9 0 0 1 8-8.945V1h2zM19 20v-7a7 7 0 1 0-14 0v7zm-7-2a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiRobotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRocket2FillIcon],svg[ri-rocket-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.498 20.005h7.004A6.52 6.52 0 0 1 12 23.507a6.52 6.52 0 0 1-3.502-3.502M18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545c3.496 1.098 6 4.062 6 7.545zm-6-3.805a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiRocket2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRocket2LineIcon],svg[ri-rocket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.502 20.005A6.52 6.52 0 0 1 12 23.507a6.52 6.52 0 0 1-3.502-3.502h2.26c.326.488.747.912 1.242 1.243c.495-.33.916-.755 1.242-1.243zM18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545c3.496 1.098 6 4.062 6 7.545zm-.73 2.195L16 15.565v-6.56c0-2.318-1.57-4.43-4-5.421c-2.43.99-4 3.103-4 5.42v6.561l-1.27 1.44zm-5.27-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRocket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRocketFillIcon],svg[ri-rocket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.33 15.929a13 13 0 0 1-.33-2.93c0-5.087 2.903-9.435 7-11.181C16.099 3.564 19 7.912 19 13c0 1.01-.114 1.991-.33 2.929l2.02 1.795a.5.5 0 0 1 .097.631l-2.457 4.096a.5.5 0 0 1-.782.096l-2.255-2.254a1 1 0 0 0-.707-.293H9.415a1 1 0 0 0-.707.293l-2.255 2.254a.5.5 0 0 1-.782-.096l-2.457-4.096a.5.5 0 0 1 .096-.63zm6.67-2.93A2 2 0 1 0 12 9a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiRocketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRocketLineIcon],svg[ri-rocket-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13c0-5.088 2.902-9.436 7-11.182C16.097 3.564 19 7.912 19 13q-.002 1.236-.221 2.403l1.94 1.832a.5.5 0 0 1 .096.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.235-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.235 2.234a.5.5 0 0 1-.792-.114l-2.496-4.575a.5.5 0 0 1 .096-.603l1.94-1.832Q5.002 14.236 5 13m1.475 6.696l.817-.817a3 3 0 0 1 2.122-.88h5.171a3 3 0 0 1 2.122.88l.817.817l.982-1.8l-1.1-1.04a2 2 0 0 1-.593-1.82A11 11 0 0 0 17 13c0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13q0 1.038.186 2.036a2 2 0 0 1-.593 1.82l-1.1 1.04zM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRocketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRotateLockFillIcon],svg[ri-rotate-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10c0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 1 0-2.46 5.772l.998 1.795A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 5a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3m0 2a1 1 0 0 0-.993.883L11 10v1h2v-1a1 1 0 0 0-.883-.993z"></svg:path>`,
})
export class RiRotateLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRotateLockLineIcon],svg[ri-rotate-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10c0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 1 0-2.46 5.772l.998 1.795A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 5a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v1h4zm-2-4a1 1 0 0 0-.993.883L11 10v1h2v-1a1 1 0 0 0-.883-.993z"></svg:path>`,
})
export class RiRotateLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRoundedCornerIcon],svg[ri-rounded-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2H7v-2zm-4 0v2H3v-2zm16-4v2h-2v-2zM5 15v2H3v-2zm0-4v2H3v-2zm11-8a5 5 0 0 1 4.995 4.783L21 8v5h-2V8a3.01 3.01 0 0 0-2.824-2.995L16 5h-5V3zM5 7v2H3V7zm0-4v2H3V3zm4 0v2H7V3z"></svg:path>`,
})
export class RiRoundedCornerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRouteFillIcon],svg[ri-route-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 0 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5l-4-5z"></svg:path>`,
})
export class RiRouteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRouteLineIcon],svg[ri-route-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 0 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5l-4-5zm15-8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiRouteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRouterFillIcon],svg[ri-router-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14v-3h2v3h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM2.51 8.837C3.835 4.864 7.584 2 12 2c4.418 0 8.166 2.864 9.49 6.837l-1.898.632a8.004 8.004 0 0 0-15.183 0zm3.797 1.265a6.003 6.003 0 0 1 11.387 0l-1.898.633a4.002 4.002 0 0 0-7.592 0z"></svg:path>`,
})
export class RiRouterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRouterLineIcon],svg[ri-router-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14v-3h2v3h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM2.51 8.837C3.835 4.864 7.584 2 12 2c4.418 0 8.166 2.864 9.49 6.837l-1.898.632a8.004 8.004 0 0 0-15.183 0zm3.797 1.265a6.003 6.003 0 0 1 11.387 0l-1.898.633a4.002 4.002 0 0 0-7.592 0zM7 16v4h10v-4z"></svg:path>`,
})
export class RiRouterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRssFillIcon],svg[ri-rss-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8zm0 7a4 4 0 0 1 4 4H3z"></svg:path>`,
})
export class RiRssFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRssLineIcon],svg[ri-rss-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17a4 4 0 0 1 4 4H3zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16z"></svg:path>`,
})
export class RiRssLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRuler2FillIcon],svg[ri-ruler-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2z"></svg:path>`,
})
export class RiRuler2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRuler2LineIcon],svg[ri-ruler-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19h2v-5h-9V5H5v2h2v2H5v2h3v2H5v2h2v2H5v2h2v-2h2v2h2v-3h2v3h2v-2h2zm-5-7h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiRuler2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRulerFillIcon],svg[ri-ruler-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.929 13.314l2.121 2.121l1.415-1.414L6.343 11.9l2.122-2.122l2.828 2.829l1.414-1.414L9.88 8.364L12 6.243l2.121 2.121l1.415-1.414l-2.122-2.121L16.243 2a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415z"></svg:path>`,
})
export class RiRulerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRulerLineIcon],svg[ri-ruler-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.343 14.728l-2.828 2.829l3.535 3.535L20.485 7.657L16.95 4.121l-2.121 2.122l1.414 1.414l-1.414 1.414l-1.415-1.414l-2.121 2.121l2.121 2.122L12 13.314l-2.12-2.121l-2.122 2.12l1.415 1.415l-1.415 1.414zM17.657 2l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415L16.243 2a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class RiRulerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRunFillIcon],svg[ri-run-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.83 8.79L8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.402-2.547l-.581 3.297L15 15.67V23h-2v-5.986l-2.05-1.987l-.947 4.298l-6.894-1.215l.348-1.97l4.924.868zM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riRunLineIcon],svg[ri-run-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.83 8.79L8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.402-2.547l-.697 3.956L15 16.17V23h-2v-5.898l-2.27-1.904l-.727 4.127l-6.894-1.215l.348-1.97l4.924.868zM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafariFillIcon],svg[ri-safari-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.701 6.8l-6.114 3.786L6.802 16.7l-.104-.104l-1.415 1.414l.708.707l1.414-1.414L7.3 17.2l6.114-3.785L17.2 7.3l.104.104L18.72 5.99l-.708-.708l-1.414 1.415zm-4.7 15.2c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-.5-19v2h1V3zm0 16v2h1v-2zM8.095 3.876l.765 1.848l.924-.383l-.765-1.847zm6.123 14.783l.765 1.847l.924-.382l-.765-1.848zm.765-15.165l-.765 1.847l.924.383l.765-1.848zM8.86 18.276l-.765 1.848l.924.382l.765-1.848zM21.001 11.5h-2v1h2zm-16 0h-2v1h2zm15.458 3.616l-1.835-.795l-.397.918l1.835.794zM5.775 8.76L3.94 7.967l-.397.918l1.835.794zm14.35-.667l-1.848.765l.383.924l1.847-.765zM5.342 14.217l-1.847.765l.382.924l1.848-.765zM18.72 18.01l-1.415-1.414l-.707.707l1.414 1.415zM7.404 6.697L5.99 5.282l-.708.708l1.415 1.414zm3.908 4.615l3.611-2.235l-2.235 3.61z"></svg:path>`,
})
export class RiSafariFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafariLineIcon],svg[ri-safari-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.813 6.503l-4.398 6.911l-6.911 4.398A7.97 7.97 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37l1.414-1.414l1.37 1.37A7.96 7.96 0 0 0 19.939 13h-1.938v-2h1.938a7.97 7.97 0 0 0-2.126-4.497m-.315-.315a7.97 7.97 0 0 0-4.497-2.126V6h-2V4.062A7.96 7.96 0 0 0 7.095 5.68l1.37 1.37l-1.414 1.414l-1.37-1.37A7.96 7.96 0 0 0 4.063 11H6v2H4.063a7.97 7.97 0 0 0 2.126 4.497l4.398-6.911zM12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class RiSafariLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafe2FillIcon],svg[ri-safe-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.005 20h-4v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.59a.5.5 0 0 1 .582-.493L21.17 2.86a1 1 0 0 1 .836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 0 1-.836.986l-1.164.194V22h-2v-1.334l-7.418 1.237a.5.5 0 0 1-.582-.493zm2-.361l8-1.334V4.694l-8-1.333zm4.5-5.64c-.828 0-1.5-1.119-1.5-2.5c0-1.38.672-2.5 1.5-2.5s1.5 1.12 1.5 2.5c0 1.381-.672 2.5-1.5 2.5"></svg:path>`,
})
export class RiSafe2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafe2LineIcon],svg[ri-safe-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 20.333V22h-2v-1.334l-7.418 1.237a.5.5 0 0 1-.582-.493V20h-4v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.59a.5.5 0 0 1 .582-.493L21.17 2.86a1 1 0 0 1 .836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 0 1-.836.986zM4.005 5v13h6V5zm8 14.639l8-1.334V4.694l-8-1.333zm4.5-5.64c-.828 0-1.5-1.119-1.5-2.5c0-1.38.672-2.5 1.5-2.5s1.5 1.12 1.5 2.5c0 1.381-.672 2.5-1.5 2.5"></svg:path>`,
})
export class RiSafe2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafe3FillIcon],svg[ri-safe-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h1v2h2v-2h12v2h2v-2h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12.35 5.236l1.332-1.332l1.414 1.414l-1.333 1.333a3.76 3.76 0 0 1 0 3.698l1.333 1.333l-1.414 1.414l-1.333-1.333a3.76 3.76 0 0 1-3.698 0l-1.333 1.333l-1.414-1.414l1.333-1.333a3.76 3.76 0 0 1 0-3.698L8.904 8.318l1.414-1.414l1.333 1.332a3.76 3.76 0 0 1 3.698 0m-.613 2.026a1.75 1.75 0 1 0-2.474 2.475a1.75 1.75 0 0 0 2.474-2.475M5 8h2v7H5z"></svg:path>`,
})
export class RiSafe3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafe3LineIcon],svg[ri-safe-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2H6v2H4v-2H3a1 1 0 0 1-1-1zm2 14h16V5H4zm11.35-9.764a3.76 3.76 0 0 0-3.7 0l-1.332-1.332l-1.414 1.414l1.333 1.333a3.76 3.76 0 0 0 0 3.698l-1.333 1.333l1.414 1.414l1.333-1.333a3.76 3.76 0 0 0 3.698 0l1.333 1.333l1.414-1.414l-1.333-1.333a3.76 3.76 0 0 0 0-3.698l1.333-1.333l-1.414-1.414zm-.613 2.026a1.75 1.75 0 1 1-2.474 2.475a1.75 1.75 0 0 1 2.474-2.475M5 8v7h2V8z"></svg:path>`,
})
export class RiSafe3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafeFillIcon],svg[ri-safe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.005 20h-12v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2zm-7-6.126V17h2v-3.126a4.002 4.002 0 0 0-1-7.874a4 4 0 0 0-1 7.874m1-1.874a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiSafeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSafeLineIcon],svg[ri-safe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.005 20h-12v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2zm-14-2h16V5h-16zm9-4.126V17h-2v-3.126a4.002 4.002 0 0 1 1-7.874a4 4 0 0 1 1 7.874m-1-1.874a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSafeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSailboatFillIcon],svg[ri-sailboat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18a.5.5 0 0 1 .4.8l-2.1 2.8a1 1 0 0 1-.8.4h-13a1 1 0 0 1-.8-.4l-2.1-2.8A.5.5 0 0 1 3 18M15 2.425V15a1 1 0 0 1-1 1H4.04a.5.5 0 0 1-.39-.812L14.11 2.113a.5.5 0 0 1 .89.312"></svg:path>`,
})
export class RiSailboatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSailboatLineIcon],svg[ri-sailboat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18a.5.5 0 0 1 .4.8l-2.1 2.8a1 1 0 0 1-.8.4h-13a1 1 0 0 1-.8-.4l-2.1-2.8A.5.5 0 0 1 3 18m4.161-4H13V6.702zM15 2.425V15a1 1 0 0 1-1 1H4.04a.5.5 0 0 1-.39-.812L14.11 2.113a.5.5 0 0 1 .89.312"></svg:path>`,
})
export class RiSailboatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSave2FillIcon],svg[ri-save-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6M5 5v4h10V5z"></svg:path>`,
})
export class RiSave2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSave2LineIcon],svg[ri-save-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V7.828L16.172 5zM4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6M6 6h9v4H6z"></svg:path>`,
})
export class RiSave2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSave3FillIcon],svg[ri-save-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 1v5h9V4zm-1 8v7h12v-7zm7-7h2v3h-2z"></svg:path>`,
})
export class RiSave3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSave3LineIcon],svg[ri-save-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h1V6.828L17.172 5H16v4H7V5H5v14h1v-7h12zM4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 11v5h8v-5z"></svg:path>`,
})
export class RiSave3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSaveFillIcon],svg[ri-save-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21v-8H6v8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13l4 4v13a1 1 0 0 1-1 1zm-2 0H8v-6h8z"></svg:path>`,
})
export class RiSaveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSaveLineIcon],svg[ri-save-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19v-6h10v6h2V7.828L16.172 5H5v14zM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 12v4h6v-4z"></svg:path>`,
})
export class RiSaveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScales2FillIcon],svg[ri-scales-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 0 1-3 3h-4l.001 2.062A8 8 0 0 1 19.998 15v6a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-6a8 8 0 0 1 7-7.938V5h-4c-1.66 0-3-1.34-3-3zm6 9a4 4 0 1 0 3.446 1.968l-2.739 2.74l-.094.082a1 1 0 0 1-1.32-1.497l2.739-2.74A4 4 0 0 0 11.998 11"></svg:path>`,
})
export class RiScales2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScales2LineIcon],svg[ri-scales-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 0 1-3 3h-4l.001 2.062A8 8 0 0 1 19.998 15v6a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-6a8 8 0 0 1 7-7.938V5h-4c-1.66 0-3-1.34-3-3zm6 7c-3.238 0-6 2.76-6 6v5h12v-5c0-3.238-2.762-6-6-6m0 2c.742 0 1.437.202 2.032.554l-2.74 2.739a1 1 0 0 0 1.32 1.497l.095-.083l2.74-2.739A4 4 0 1 1 11.998 11"></svg:path>`,
})
export class RiScales2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScales3FillIcon],svg[ri-scales-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.999 2l-.001 1.278l5 1.668l3.633-1.21l.632 1.896l-3.031 1.011l3.095 8.512A5.98 5.98 0 0 1 17.998 17a5.98 5.98 0 0 1-4.328-1.845l3.094-8.512l-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.98 5.98 0 0 1 6 17a5.98 5.98 0 0 1-4.33-1.845l3.095-8.512l-3.03-1.01l.632-1.898L6 4.945l4.999-1.667V2zm5 7.103L16.58 13h2.835zm-12 0L4.58 13h2.835z"></svg:path>`,
})
export class RiScales3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScales3LineIcon],svg[ri-scales-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.999 2l-.001 1.278l5 1.668l3.633-1.21l.632 1.896l-3.031 1.011l3.095 8.512A5.98 5.98 0 0 1 17.998 17a5.98 5.98 0 0 1-4.328-1.845l3.094-8.512l-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.98 5.98 0 0 1 6 17a5.98 5.98 0 0 1-4.33-1.845l3.095-8.512l-3.03-1.01l.632-1.898L6 4.945l4.999-1.667V2zm5 7.103l-1.959 5.386a4 4 0 0 0 1.959.511c.7 0 1.37-.18 1.958-.51zm-12 0L4.04 14.489A4 4 0 0 0 5.999 15c.7 0 1.37-.18 1.958-.51z"></svg:path>`,
})
export class RiScales3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScalesFillIcon],svg[ri-scales-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2zm-8 4.343l2.828 2.829a4 4 0 1 1-5.657 0zm14 0l2.828 2.829a4 4 0 1 1-5.657 0zm0 2.829l-1.414 1.414A2 2 0 0 0 16.998 12l4 .001c0-.54-.212-1.041-.586-1.415zm-14 0l-1.414 1.414A2 2 0 0 0 2.998 12l4 .001c0-.54-.212-1.041-.586-1.415z"></svg:path>`,
})
export class RiScalesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScalesLineIcon],svg[ri-scales-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2zm-8 4.343l2.828 2.829a4 4 0 1 1-5.657 0zm14 0l2.828 2.829a4 4 0 1 1-5.657 0zm-14 2.829l-1.414 1.414a2 2 0 1 0 2.828 0zm14 0l-1.414 1.414a2 2 0 1 0 2.828 0z"></svg:path>`,
})
export class RiScalesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScan2FillIcon],svg[ri-scan-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.257 5.671l2.137 2.137a7 7 0 1 0 1.414-1.414L5.67 4.257A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329m3.571 3.572L12 13.414L13.414 12L9.243 7.828a5 5 0 1 1-1.414 1.414"></svg:path>`,
})
export class RiScan2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScan2LineIcon],svg[ri-scan-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.671 4.257L13.414 12L12 13.414L8.554 9.968a4 4 0 1 0 3.696-1.96l-1.804-1.805a6 6 0 1 1-3.337 2.32L5.68 7.094a8 8 0 1 0 3.196-2.461L7.374 3.132A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.671-7.743"></svg:path>`,
})
export class RiScan2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScanFillIcon],svg[ri-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.257 5.671L12 13.414L13.414 12L5.671 4.257A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329"></svg:path>`,
})
export class RiScanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScanLineIcon],svg[ri-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.671 4.257L13.414 12L12 13.414l-6.32-6.32a8 8 0 1 0 3.706-2.658L7.85 2.9A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.671-7.743"></svg:path>`,
})
export class RiScanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSchoolFillIcon],svg[ri-school-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 19h-1V9h-4V6.586l-6-6l-6 6V9H2v10H1v2h22zM6 19H4v-8h2zm12-8h2v8h-2zm-7 1h2v7h-2z"></svg:path>`,
})
export class RiSchoolFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSchoolLineIcon],svg[ri-school-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .586l6 6V9h4v10h1v2H1v-2h1V9h4V6.586zM18 19h2v-8h-2zM6 11H4v8h2zm2-3.586V19h3v-7h2v7h3V7.414l-4-4z"></svg:path>`,
})
export class RiSchoolLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissors2FillIcon],svg[ri-scissors-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.118l-2.317 2.316a4 4 0 1 1-2.121-2.121l2.317-2.316L4.21 6.329a2 2 0 0 1 0-2.828l.708-.707L12 9.875l7.081-7.081l.708.707a2 2 0 0 1 0 2.828l-5.668 5.668l2.317 2.316a4 4 0 1 1-2.121 2.121zm-6 5.879a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiScissors2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissors2LineIcon],svg[ri-scissors-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.41l-2.554 2.555a4 4 0 1 1-1.414-1.414l2.554-2.554l-6.021-6.021a2 2 0 0 1 0-2.829L12 10.582l7.435-7.435a2 2 0 0 1 0 2.829l-6.02 6.02l2.553 2.554a4 4 0 1 1-1.414 1.414zm-6 6.587a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiScissors2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissorsCutFillIcon],svg[ri-scissors-cut-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.879 11.997L7.562 9.68a4 4 0 1 1 2.121-2.12L12 9.875l6.374-6.374a2 2 0 0 1 2.829 0l.707.707L9.683 16.435a4 4 0 1 1-2.121-2.121zM6 7.997a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9.535-6.587l6.375 6.375l-.707.707a2 2 0 0 1-2.829 0l-4.96-4.96zM16 10.997h2v2h-2zm4 0h2v2h-2zm-14 0h2v2H6zm-4 0h2v2H2z"></svg:path>`,
})
export class RiScissorsCutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissorsCutLineIcon],svg[ri-scissors-cut-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.997c0 .732-.197 1.419-.54 2.01L12 10.582l6.728-6.728a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554l-2.554-2.554A4 4 0 1 1 10 5.997m-2 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m13.556 14.142a2 2 0 0 1-2.828 0l-5.317-5.317l1.415-1.414zM16 10.997h2v2h-2zm4 0h2v2h-2zm-14 0h2v2H6zm-4 0h2v2H2zm4 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiScissorsCutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissorsFillIcon],svg[ri-scissors-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.683 7.559L12 9.875l6.374-6.374a2 2 0 0 1 2.829 0l.707.707L9.683 16.435a4 4 0 1 1-2.121-2.121l2.317-2.317L7.562 9.68a4 4 0 1 1 2.121-2.12M6 7.997a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9.535-6.587l6.375 6.375l-.707.707a2 2 0 0 1-2.829 0l-4.96-4.96z"></svg:path>`,
})
export class RiScissorsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScissorsLineIcon],svg[ri-scissors-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.446 8.029L12 10.582l6.728-6.727a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554l-2.554-2.554a4 4 0 1 1 1.414-1.414m5.38 5.379l6.73 6.73a2 2 0 0 1-2.828 0l-5.317-5.316zm-7.412 3.175a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.829m0-9.172a2 2 0 1 0-2.828-2.828A2 2 0 0 0 7.414 7.41"></svg:path>`,
})
export class RiScissorsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScreenshot2FillIcon],svg[ri-screenshot-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm7.667 4l1.036-1.555A1 1 0 0 1 12.535 9h2.93a1 1 0 0 1 .832.445L17.333 11H20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM14 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiScreenshot2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScreenshot2LineIcon],svg[ri-screenshot-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm7.667 4l1.036-1.555A1 1 0 0 1 12.535 9h2.93a1 1 0 0 1 .832.445L17.333 11H20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM9 19h10v-6h-2.737l-1.333-2h-1.86l-1.333 2H9zm5-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiScreenshot2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScreenshotFillIcon],svg[ri-screenshot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.993 14.407l-1.552 1.552a4 4 0 1 1-1.418-1.41l1.555-1.556l-3.124-3.125a1.5 1.5 0 0 1 0-2.121l.354-.354l4.185 4.185l4.189-4.189l.353.354a1.5 1.5 0 0 1 0 2.12l-3.128 3.13l1.561 1.56a4 4 0 1 1-1.414 1.414zM19 13V5H5v8H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9zM7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiScreenshotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScreenshotLineIcon],svg[ri-screenshot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.993 14.407l-1.552 1.552a4 4 0 1 1-1.418-1.41l1.555-1.556l-4.185-4.185l1.415-1.415l4.185 4.185l4.189-4.189l1.414 1.414l-4.19 4.19l1.562 1.56a4 4 0 1 1-1.414 1.414zM7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2-7V5H5v8H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9z"></svg:path>`,
})
export class RiScreenshotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScrollToBottomFillIcon],svg[ri-scroll-to-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.859 2H11.14c-2.014 0-3.094.278-4.072.801A5.45 5.45 0 0 0 4.801 5.07C4.278 6.047 4 7.127 4 9.141v5.718c0 2.014.278 3.094.801 4.071A5.45 5.45 0 0 0 7.07 21.2c.978.522 2.058.801 4.072.801h1.718c2.014 0 3.094-.279 4.071-.801a5.45 5.45 0 0 0 2.269-2.27c.522-.977.801-2.057.801-4.071V9.14c0-2.014-.279-3.094-.801-4.072A5.45 5.45 0 0 0 16.931 2.8c-.978-.522-2.058-.8-4.071-.8M11 11V6h2v5zm-3.242 2.758l1.414-1.414l2.829 2.828l2.828-2.828l1.414 1.414l-4.242 4.243z"></svg:path>`,
})
export class RiScrollToBottomFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riScrollToBottomLineIcon],svg[ri-scroll-to-bottom-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.013 4.565C8.753 4.169 9.559 4 11.14 4h1.718c1.582 0 2.387.169 3.128.565q.945.504 1.448 1.448c.396.74.565 1.546.565 3.128v5.718c0 1.582-.169 2.387-.565 3.128a3.45 3.45 0 0 1-1.448 1.448c-.74.396-1.546.565-3.128.565H11.14c-1.582 0-2.387-.169-3.128-.565a3.45 3.45 0 0 1-1.448-1.448C6.169 17.247 6 16.441 6 14.86V9.14c0-1.582.169-2.387.565-3.128a3.45 3.45 0 0 1 1.448-1.448M12.859 2H11.14c-2.014 0-3.094.278-4.072.801A5.45 5.45 0 0 0 4.801 5.07C4.278 6.047 4 7.127 4 9.141v5.718c0 2.014.278 3.094.801 4.071A5.45 5.45 0 0 0 7.07 21.2c.978.522 2.058.801 4.072.801h1.718c2.014 0 3.094-.279 4.071-.801a5.45 5.45 0 0 0 2.269-2.27c.522-.977.801-2.057.801-4.071V9.14c0-2.014-.279-3.094-.801-4.072A5.45 5.45 0 0 0 16.931 2.8c-.978-.522-2.058-.8-4.071-.8M13 6h-2v5h2zm-5.242 7.758L12 18.001l4.242-4.243l-1.414-1.414L12 15.172l-2.829-2.828z"></svg:path>`,
})
export class RiScrollToBottomLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSdCardFillIcon],svg[ri-sd-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.293 6.707L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5v4h2V5zm-3 0v4h2V5zM9 5v4h2V5z"></svg:path>`,
})
export class RiSdCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSdCardLineIcon],svg[ri-sd-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.828V20h12V4H9.828zm-1.707-1.12L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5h2v4h-2zm-3 0h2v4h-2zM9 6h2v3H9z"></svg:path>`,
})
export class RiSdCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSdCardMiniFillIcon],svg[ri-sd-card-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.707l1.562-1.567A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1m8 2v4h2V4zm-3 0v4h2V4zM9 4v4h2V4z"></svg:path>`,
})
export class RiSdCardMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSdCardMiniLineIcon],svg[ri-sd-card-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v5.793a2.5 2.5 0 0 1-.73 1.765L6 12.833V20h12V4zM7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.707l1.562-1.567A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1m8 3h2v4h-2zm-3 0h2v4h-2zM9 5h2v4H9z"></svg:path>`,
})
export class RiSdCardMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearch2FillIcon],svg[ri-search-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9m8.485 16.071l2.829 2.828l-1.415 1.415l-2.828-2.829z"></svg:path>`,
})
export class RiSearch2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearch2LineIcon],svg[ri-search-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9m0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829z"></svg:path>`,
})
export class RiSearch2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearchEyeFillIcon],svg[ri-search-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-5.853-9.44a4 4 0 1 0 2.646 2.646a2 2 0 1 1-2.646-2.647"></svg:path>`,
})
export class RiSearchEyeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearchEyeLineIcon],svg[ri-search-eye-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975zm-3.847-8.699a2 2 0 1 0 2.646 2.646a4 4 0 1 1-2.646-2.646"></svg:path>`,
})
export class RiSearchEyeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearchFillIcon],svg[ri-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617"></svg:path>`,
})
export class RiSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSearchLineIcon],svg[ri-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"></svg:path>`,
})
export class RiSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSecurePaymentFillIcon],svg[ri-secure-payment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.005 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v2h-13V8a1 1 0 0 1 1-1h7V5.97l-6-1.876l-6 1.876v7.404a4 4 0 0 0 1.558 3.169l.189.136l4.253 2.9L14.787 17h-4.782a1 1 0 0 1-1-1v-4h13v4a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11.005 22l-5.38-3.668a6 6 0 0 1-2.62-4.958V5.235a1 1 0 0 1 .702-.954z"></svg:path>`,
})
export class RiSecurePaymentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSecurePaymentLineIcon],svg[ri-secure-payment-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.005 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11.005 22l-5.38-3.668a6 6 0 0 1-2.62-4.958V5.235a1 1 0 0 1 .702-.954zm0 2.094l-6 1.876v7.404a4 4 0 0 0 1.558 3.169l.189.136l4.253 2.9L14.787 17h-4.782a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7V5.97zm0 7.906v3h9v-3zm0-2h9V9h-9z"></svg:path>`,
})
export class RiSecurePaymentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSeedlingFillIcon],svg[ri-seedling-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.998 7v2.5a6.5 6.5 0 0 1-6.5 6.5h-2.5v5h-2v-7l.019-1a6.5 6.5 0 0 1 6.481-6zm-16-4a7 7 0 0 1 6.643 4.786A7.48 7.48 0 0 0 10.014 13H8.998a7 7 0 0 1-7-7V3z"></svg:path>`,
})
export class RiSeedlingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSeedlingLineIcon],svg[ri-seedling-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 3a7 7 0 0 1 6.913 5.895A6.48 6.48 0 0 1 17.498 7h4.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-2.5v5h-2v-8h-2a7 7 0 0 1-7-7V3zm14 6h-2.5a4.5 4.5 0 0 0-4.5 4.5v.5h2.5a4.5 4.5 0 0 0 4.5-4.5zm-14-4h-2v1a5 5 0 0 0 5 5h2v-1a5 5 0 0 0-5-5"></svg:path>`,
})
export class RiSeedlingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSendBackwardIcon],svg[ri-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v8h4v-3a1 1 0 0 1 1-1h3z"></svg:path>`,
})
export class RiSendBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSendPlane2FillIcon],svg[ri-send-plane-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.439l18.462 10.155a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154z"></svg:path>`,
})
export class RiSendPlane2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSendPlane2LineIcon],svg[ri-send-plane-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1.346a.5.5 0 0 1 .241.061l18.462 10.155a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .5-.5M5 4.382V11h5v2H5v6.617L18.85 12z"></svg:path>`,
})
export class RiSendPlane2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSendPlaneFillIcon],svg[ri-send-plane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"></svg:path>`,
})
export class RiSendPlaneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSendPlaneLineIcon],svg[ri-send-plane-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.727 2.957l-5.454 19.086c-.15.529-.475.553-.717.07L11 13L1.923 9.37c-.51-.205-.503-.51.034-.689L21.043 2.32c.529-.176.832.12.684.638m-2.692 2.14L6.812 9.17l5.637 2.255l3.04 6.08z"></svg:path>`,
})
export class RiSendPlaneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSendToBackIcon],svg[ri-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2H7a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 5h-4v3a1 1 0 0 1-1 1H8v4h4v-3a1 1 0 0 1 1-1h3z"></svg:path>`,
})
export class RiSendToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSensorFillIcon],svg[ri-sensor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8v2h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"></svg:path>`,
})
export class RiSensorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSensorLineIcon],svg[ri-sensor-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"></svg:path>`,
})
export class RiSensorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSeoFillIcon],svg[ri-seo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a7 7 0 0 0 0 14h1.07a7 7 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6a7 7 0 0 1 1.426 2A7 7 0 0 0 16 3zm3 13a5 5 0 1 1 9.172 2.757l2.535 2.536l-1.414 1.414l-2.536-2.535A5 5 0 0 1 11 16"></svg:path>`,
})
export class RiSeoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSeoLineIcon],svg[ri-seo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a7 7 0 0 0 0 14h1.07a7 7 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6a7 7 0 0 1 1.426 2A7 7 0 0 0 16 3zm8 10a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 9.172 2.757l2.535 2.536l-1.414 1.414l-2.536-2.535A5 5 0 0 1 11 16"></svg:path>`,
})
export class RiSeoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSeparatorIcon],svg[ri-separator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h2v2H2zm4 0h12v2H6zm14 0h2v2h-2z"></svg:path>`,
})
export class RiSeparatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServerFillIcon],svg[ri-server-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v7H3V4a1 1 0 0 1 1-1M3 13h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 3v2h3v-2zM7 6v2h3V6z"></svg:path>`,
})
export class RiServerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServerLineIcon],svg[ri-server-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h14V5H5zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1m-2 9H5v6h14zM7 15h3v2H7zm0-8h3v2H7z"></svg:path>`,
})
export class RiServerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServiceBellFillIcon],svg[ri-service-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2h-2v1.05c5.053.501 9 4.765 9 9.95H2c0-5.185 3.947-9.449 9-9.95V5H9V3zm8 17v-2H1v2z"></svg:path>`,
})
export class RiServiceBellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServiceBellLineIcon],svg[ri-service-bell-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9v2h2v1.05c-5.053.5-9 4.764-9 9.95v1h20v-1c0-5.185-3.947-9.449-9-9.95V5h2zm-3 5a8 8 0 0 1 7.938 7H4.062A8 8 0 0 1 12 8m11 12v-2H1v2z"></svg:path>`,
})
export class RiServiceBellLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServiceFillIcon],svg[ri-service-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 0 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135zM3.161 4.468a6.5 6.5 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137l4.243 4.242l-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192"></svg:path>`,
})
export class RiServiceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riServiceLineIcon],svg[ri-service-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328a6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101l-7.764-7.791a6.5 6.5 0 0 1 .34-8.826m1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.305l-3.535-3.534l-1.06 1.06a3 3 0 0 1-4.244-4.242l2.102-2.103a4.5 4.5 0 0 0-5.837.189zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242l.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146l-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078z"></svg:path>`,
})
export class RiServiceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings2FillIcon],svg[ri-settings-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiSettings2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings2LineIcon],svg[ri-settings-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1zM6 6v3.515L3.515 12L6 14.485V18h3.515L12 20.485L14.485 18H18v-3.515L20.485 12L18 9.515V6h-3.515L12 3.515L9.515 6zm6 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSettings2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings3FillIcon],svg[ri-settings-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.954 2.21a10 10 0 0 1 4.09-.002A4 4 0 0 0 16 5.07a4 4 0 0 0 3.457.261A10 10 0 0 1 21.5 8.877a4 4 0 0 0-1.5 3.122c0 1.264.586 2.391 1.501 3.124a10 10 0 0 1-2.045 3.543a4 4 0 0 0-3.456.261a4 4 0 0 0-1.955 2.86a10 10 0 0 1-4.09.004A4 4 0 0 0 8 18.927a4 4 0 0 0-3.457-.26A10 10 0 0 1 2.5 15.121A4 4 0 0 0 4 11.999c0-1.264-.587-2.39-1.502-3.124a10 10 0 0 1 2.045-3.542A4 4 0 0 0 8 5.07a4 4 0 0 0 1.954-2.86M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiSettings3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings3LineIcon],svg[ri-settings-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.34 17a10 10 0 0 1-.979-2.326a3 3 0 0 0 .003-5.347a10 10 0 0 1 2.5-4.337a3 3 0 0 0 4.632-2.674a10 10 0 0 1 5.007.003a3 3 0 0 0 4.632 2.671a10.06 10.06 0 0 1 2.503 4.336a3 3 0 0 0-.002 5.347a10 10 0 0 1-2.501 4.337a3 3 0 0 0-4.632 2.674a10 10 0 0 1-5.007-.002a3 3 0 0 0-4.631-2.672A10 10 0 0 1 3.339 17m5.66.196a5 5 0 0 1 2.25 2.77q.75.07 1.499.002a5 5 0 0 1 2.25-2.772a5 5 0 0 1 3.526-.564q.435-.614.748-1.298A5 5 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8 8 0 0 0-.75-1.298A5 5 0 0 1 15 6.804a5 5 0 0 1-2.25-2.77q-.75-.071-1.5-.001A5 5 0 0 1 9 6.804a5 5 0 0 1-3.526.564q-.436.614-.747 1.298A5 5 0 0 1 6 12c0 1.26-.471 2.437-1.273 3.334a8 8 0 0 0 .75 1.298A5 5 0 0 1 9 17.196M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSettings3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings4FillIcon],svg[ri-settings-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.334 4.545a10 10 0 0 1 3.542-2.048A4 4 0 0 0 12 4a4 4 0 0 0 3.124-1.502a10 10 0 0 1 3.542 2.048A4 4 0 0 0 18.928 8a4 4 0 0 0 2.863 1.955a10 10 0 0 1 0 4.09c-1.16.178-2.23.86-2.863 1.955a4 4 0 0 0-.262 3.455a10 10 0 0 1-3.542 2.047A4 4 0 0 0 12 20a4 4 0 0 0-3.124 1.503a10 10 0 0 1-3.542-2.048A4 4 0 0 0 5.072 16a4 4 0 0 0-2.863-1.954a10 10 0 0 1 0-4.091A4 4 0 0 0 5.072 8a4 4 0 0 0 .262-3.454M13.5 14.597a3 3 0 1 0-3-5.196a3 3 0 0 0 3 5.196"></svg:path>`,
})
export class RiSettings4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings4LineIcon],svg[ri-settings-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-.865.11-1.704.316-2.504A3 3 0 0 0 4.99 4.867a10 10 0 0 1 4.335-2.506a3 3 0 0 0 5.348 0a10 10 0 0 1 4.335 2.506a3 3 0 0 0 2.675 4.63c.206.8.316 1.638.316 2.503c0 .864-.11 1.703-.316 2.503a3 3 0 0 0-2.675 4.63a10 10 0 0 1-4.335 2.505a3 3 0 0 0-5.348 0a10 10 0 0 1-4.335-2.505a3 3 0 0 0-2.675-4.63C2.11 13.703 2 12.864 2 12m4.804 3c.63 1.091.81 2.346.564 3.524q.613.436 1.297.75A5 5 0 0 1 12 18c1.26 0 2.438.471 3.335 1.274q.684-.314 1.297-.75A5 5 0 0 1 17.196 15a5 5 0 0 1 2.77-2.25a8 8 0 0 0 0-1.5A5 5 0 0 1 17.196 9a5 5 0 0 1-.564-3.524a8 8 0 0 0-1.297-.75A5 5 0 0 1 12 6a5 5 0 0 1-3.335-1.274a8 8 0 0 0-1.297.75A5 5 0 0 1 6.804 9a5 5 0 0 1-2.77 2.25a8 8 0 0 0 0 1.5A5 5 0 0 1 6.805 15M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSettings4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings5FillIcon],svg[ri-settings-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.131 13.63a10 10 0 0 1 .001-3.26c1.101.026 2.092-.502 2.477-1.431c.385-.93.058-2.003-.74-2.763a10 10 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.763.74c.93-.385 1.458-1.376 1.431-2.477a10 10 0 0 1 3.261 0c-.026 1.102.502 2.092 1.431 2.477c.93.385 2.003.058 2.763-.74a10 10 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764s1.376 1.458 2.477 1.43a10 10 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43c-.385.93-.058 2.004.74 2.764a10 10 0 0 1-2.306 2.306c-.76-.798-1.834-1.125-2.764-.74s-1.458 1.376-1.43 2.478a10 10 0 0 1-3.262-.001c.027-1.101-.502-2.092-1.43-2.477c-.93-.385-2.004-.058-2.764.74a10 10 0 0 1-2.306-2.306c.798-.76 1.125-1.834.74-2.763c-.385-.93-1.376-1.458-2.478-1.431M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiSettings5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings5LineIcon],svg[ri-settings-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.212 14.06a9.95 9.95 0 0 1 .001-4.12c1.11.131 2.079-.236 2.396-1.001s-.109-1.71-.986-2.402a9.95 9.95 0 0 1 2.913-2.914c.692.878 1.637 1.303 2.402.986s1.133-1.286 1.002-2.396a9.95 9.95 0 0 1 4.12 0c-.131 1.11.236 2.08 1.001 2.396c.765.317 1.71-.108 2.402-.985a9.9 9.9 0 0 1 2.914 2.912c-.878.692-1.303 1.638-.986 2.403s1.286 1.132 2.396 1.001a9.95 9.95 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.002c-.317.764.108 1.71.985 2.402a9.95 9.95 0 0 1-2.912 2.914c-.693-.878-1.638-1.304-2.403-.987s-1.132 1.286-1.001 2.397a9.9 9.9 0 0 1-4.12-.001c.13-1.11-.237-2.079-1.002-2.396s-1.71.109-2.402.986a9.9 9.9 0 0 1-2.914-2.913c.878-.692 1.304-1.637.987-2.402s-1.286-1.133-2.397-1.002M4 12.21c1.1.305 2.007 1.002 2.456 2.086c.45 1.085.3 2.22-.262 3.212q.145.153.298.298c.993-.563 2.127-.712 3.212-.262c1.084.449 1.781 1.356 2.085 2.456q.21.006.42 0c.305-1.1 1.002-2.007 2.087-2.456c1.084-.45 2.219-.3 3.212.262q.152-.145.297-.298c-.562-.993-.711-2.127-.262-3.212c.45-1.084 1.357-1.781 2.456-2.085q.006-.21 0-.421c-1.1-.304-2.007-1.001-2.456-2.086c-.45-1.084-.3-2.22.262-3.212a8 8 0 0 0-.297-.297c-.993.562-2.128.711-3.212.262C13.21 6.007 12.514 5.1 12.21 4a8 8 0 0 0-.42 0c-.305 1.1-1.002 2.008-2.086 2.457c-1.085.45-2.22.3-3.212-.262q-.153.144-.298.297c.563.993.712 2.128.262 3.212S5.1 11.485 4 11.79q-.006.21 0 .42M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSettings5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings6FillIcon],svg[ri-settings-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526zM8.634 8.17l5 8.66l1.732-1l-5-8.66z"></svg:path>`,
})
export class RiSettings6FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettings6LineIcon],svg[ri-settings-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526zm-1.155 2h-8.69L3.309 12l4.346 7.526h8.69L20.691 12zM8.634 8.17l1.732-1l5 8.66l-1.732 1z"></svg:path>`,
})
export class RiSettings6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettingsFillIcon],svg[ri-settings-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zm0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiSettingsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSettingsLineIcon],svg[ri-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShadowFillIcon],svg[ri-shadow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1zm6 15v2h3.44l-2-2zm3.56 0l2 2h2.88l-2-2zM20 20v-1.44l-2-2V17a1 1 0 0 1-1 1h-.44l2 2zm0-6.44l-2-2v2.88l2 2zm0-2.12V8h-2v1.44z"></svg:path>`,
})
export class RiShadowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShadowLineIcon],svg[ri-shadow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1zm15 9.56l2 2v2.88l-2-2zm0-2.12V8h2v3.44zM18 17v-.44l2 2V20h-1.44l-2-2H17a1 1 0 0 0 1-1m-3.56 1l2 2h-2.88l-2-2zm-5 0l2 2H8v-2zM4 16V4h12v12z"></svg:path>`,
})
export class RiShadowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShakeHandsFillIcon],svg[ri-shake-hands-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.291 6h.71a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2l-4.17-5.836a2 2 0 0 0-2.201-.753l-2.486.746a2 2 0 0 1-1.988-.502l-.293-.293a1 1 0 0 1 .152-1.539l5.401-3.6a2 2 0 0 1 2.183-.024l4.156 2.645A1 1 0 0 0 19.29 6M5.027 14.295l-1.616 1.414a1 1 0 0 0 .041 1.538l5.14 4.04a1 1 0 0 0 1.487-.29l.704-1.232a2 2 0 0 0-.257-2.338l-2.702-2.972a2 2 0 0 0-2.797-.16M7.046 5H3a1 1 0 0 0-1 1v7.516a2 2 0 0 0 .35 1.13l.074-.066l1.615-1.414a3.5 3.5 0 0 1 4.895.28l2.702 2.972a3.5 3.5 0 0 1 .45 4.09l-.655 1.146a2 2 0 0 0 1.738-.155l4.41-2.646a1 1 0 0 0 .299-1.438l-5.267-7.379a.5.5 0 0 0-.55-.188l-2.486.745a3.5 3.5 0 0 1-3.48-.877l-.293-.293a2.5 2.5 0 0 1 .38-3.848z"></svg:path>`,
})
export class RiShakeHandsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShakeHandsLineIcon],svg[ri-shake-hands-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.861 2.39a3 3 0 0 1 3.275-.034L19.29 5H21a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1.52a2.65 2.65 0 0 1-1.285 2.449l-5.093 3.056a2 2 0 0 1-2.07-.008a2 2 0 0 1-2.561.073l-5.14-4.039a2 2 0 0 1-.565-2.446A2 2 0 0 1 2 13.51V6a1 1 0 0 1 1-1h4.947zM4.173 13.646l.692-.605a3 3 0 0 1 4.195.24l2.702 2.972a3 3 0 0 1 .396 3.487l5.009-3.005a.66.66 0 0 0 .278-.79l-4.427-6.198a1 1 0 0 0-1.101-.377l-2.486.745a3 3 0 0 1-2.983-.752l-.293-.292A2 2 0 0 1 5.68 7H4v6.51zm9.89-9.602a1 1 0 0 0-1.093.012l-5.4 3.6l.292.293a1 1 0 0 0 .995.25l2.485-.745a3 3 0 0 1 3.303 1.13L18.515 14H20V7h-.709a2 2 0 0 1-1.074-.313zM6.181 14.545l-1.616 1.414l5.14 4.039l.705-1.232a1 1 0 0 0-.129-1.169L7.58 14.625a1 1 0 0 0-1.398-.08"></svg:path>`,
})
export class RiShakeHandsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShape2FillIcon],svg[ri-shape-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5v5H2zm0 15h5v5H2zM17 2h5v5h-5zm0 15h5v5h-5zM8 4h8v2H8zM4 8h2v8H4zm14 0h2v8h-2zM8 18h8v2H8z"></svg:path>`,
})
export class RiShape2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShape2LineIcon],svg[ri-shape-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2zM4 4v2h2V4zm0 14v2h2v-2zM18 4v2h2V4zm0 14v2h2v-2z"></svg:path>`,
})
export class RiShape2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShapeFillIcon],svg[ri-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6M5 22a3 3 0 1 1 0-6a3 3 0 0 1 0 6M9 4h6v2H9zm0 14h6v2H9zM4 9h2v6H4zm14 0h2v6h-2z"></svg:path>`,
})
export class RiShapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShapeLineIcon],svg[ri-shape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.83 20A3.001 3.001 0 1 1 4 16.17V7.83A3.001 3.001 0 1 1 7.83 4h8.34A3.001 3.001 0 1 1 20 7.83v8.34A3.001 3.001 0 1 1 16.17 20zm0-2h8.34A3 3 0 0 1 18 16.17V7.83A3 3 0 0 1 16.17 6H7.83A3 3 0 0 1 6 7.83v8.34A3 3 0 0 1 7.83 18M5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiShapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShapesFillIcon],svg[ri-shapes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l6 10H6zm1 12.5h8v8h-8zM6.75 22a4.75 4.75 0 1 0 0-9.5a4.75 4.75 0 0 0 0 9.5"></svg:path>`,
})
export class RiShapesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShapesLineIcon],svg[ri-shapes-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L6 11h12zm0 3.887L14.468 9H9.532zM6.75 20a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5m0 2a4.75 4.75 0 1 0 0-9.5a4.75 4.75 0 0 0 0 9.5M15 15.5v4h4v-4zm-2 6v-8h8v8z"></svg:path>`,
})
export class RiShapesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShare2FillIcon],svg[ri-share-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.414 9L12 2.586L5.586 9H11v7h2V9zM3 14v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4h-2v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4z"></svg:path>`,
})
export class RiShare2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShare2LineIcon],svg[ri-share-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.586l6.207 6.207l-1.414 1.414L13 6.414V16h-2V6.414l-3.793 3.793l-1.414-1.414zM3 18v-4h2v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3"></svg:path>`,
})
export class RiShare2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareBoxFillIcon],svg[ri-share-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.707 4.707L12 13.414L10.586 12l5.707-5.707L13 3h8v8z"></svg:path>`,
})
export class RiShareBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareBoxLineIcon],svg[ri-share-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12z"></svg:path>`,
})
export class RiShareBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareCircleFillIcon],svg[ri-share-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m7.707 4.657L12 13.414L10.586 12l6.707-6.707L14 2h8v8z"></svg:path>`,
})
export class RiShareCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareCircleLineIcon],svg[ri-share-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2z"></svg:path>`,
})
export class RiShareCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareFillIcon],svg[ri-share-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.5 3.5 0 0 1 0 1.457l5.11 2.788a3.5 3.5 0 1 1-.958 1.755"></svg:path>`,
})
export class RiShareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForward2FillIcon],svg[ri-share-forward-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zm8-9H9a6 6 0 0 0-4.854 2.473A8 8 0 0 1 12 6V2l8 6l-8 6z"></svg:path>`,
})
export class RiShareForward2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForward2LineIcon],svg[ri-share-forward-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zM16.172 7l-3.95-3.95l1.414-1.414L20 8l-6.364 6.364l-1.414-1.415L16.172 9H5V7z"></svg:path>`,
})
export class RiShareForward2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForwardBoxFillIcon],svg[ri-share-forward-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H4v14h16v-9h2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7 2V1l7 6h-9a2 2 0 0 0-2 2v6h-2V9a4 4 0 0 1 4-4z"></svg:path>`,
})
export class RiShareForwardBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForwardBoxLineIcon],svg[ri-share-forward-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H4v14h16v-9h2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.95 2L16 2.05L17.414.636l5.34 5.34A.6.6 0 0 1 22.33 7H14a2 2 0 0 0-2 2v6h-2V9a4 4 0 0 1 4-4z"></svg:path>`,
})
export class RiShareForwardBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForwardFillIcon],svg[ri-share-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8l-10 8z"></svg:path>`,
})
export class RiShareForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareForwardLineIcon],svg[ri-share-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11L13 19.5zm-2-2h4v3.308L20.321 11L15 6.692V10h-2a7.98 7.98 0 0 0-6.057 2.774A11 11 0 0 1 11 12"></svg:path>`,
})
export class RiShareForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShareLineIcon],svg[ri-share-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .958 1.755l-4.2 2.29a4 4 0 0 1 0 1.954l4.2 2.29a4 4 0 1 1-.959 1.755M6 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiShareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldCheckFillIcon],svg[ri-shield-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm4.452 7.222l-4.95 4.949l-2.828-2.828l-1.414 1.414L11.503 16l6.364-6.364z"></svg:path>`,
})
export class RiShieldCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldCheckLineIcon],svg[ri-shield-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm0 2.049L5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604zm4.452 5.173l1.415 1.414L11.503 16L7.26 11.757l1.414-1.414l2.828 2.828z"></svg:path>`,
})
export class RiShieldCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldCrossFillIcon],svg[ri-shield-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M11 10H8v2h3v3h2v-3h3v-2h-3V7h-2z"></svg:path>`,
})
export class RiShieldCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldCrossLineIcon],svg[ri-shield-cross-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2z"></svg:path>`,
})
export class RiShieldCrossLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldFillIcon],svg[ri-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976"></svg:path>`,
})
export class RiShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldFlashFillIcon],svg[ri-shield-flash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M13 10V5l-5 7h3v5l5-7z"></svg:path>`,
})
export class RiShieldFlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldFlashLineIcon],svg[ri-shield-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM13 10h3l-5 7v-5H8l5-7z"></svg:path>`,
})
export class RiShieldFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldKeyholeFillIcon],svg[ri-shield-keyhole-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm0 6a2 2 0 0 0-1 3.732V15h2l.001-4.268A2 2 0 0 0 12 7"></svg:path>`,
})
export class RiShieldKeyholeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldKeyholeLineIcon],svg[ri-shield-keyhole-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm0 2.049L5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604zM12 7a2 2 0 0 1 1.001 3.732L13 15h-2v-4.268A2 2 0 0 1 12 7"></svg:path>`,
})
export class RiShieldKeyholeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldLineIcon],svg[ri-shield-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05z"></svg:path>`,
})
export class RiShieldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldStarFillIcon],svg[ri-shield-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M12 13.5l2.939 1.545l-.561-3.272l2.377-2.318l-3.285-.478L12 6l-1.47 2.977l-3.285.478l2.377 2.318l-.56 3.272z"></svg:path>`,
})
export class RiShieldStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldStarLineIcon],svg[ri-shield-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M12 13.5l-2.939 1.545l.561-3.272l-2.377-2.318l3.286-.478L12 6l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272z"></svg:path>`,
})
export class RiShieldStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldUserFillIcon],svg[ri-shield-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M12 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-4.473 5h8.946a4.5 4.5 0 0 0-8.946 0"></svg:path>`,
})
export class RiShieldUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShieldUserLineIcon],svg[ri-shield-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM12 11a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m-4.473 5a4.5 4.5 0 0 1 8.946 0z"></svg:path>`,
})
export class RiShieldUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShining2FillIcon],svg[ri-shining-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5L16 8l7.5 4l-7.5 4l-4 7.5L8 16L.5 12L8 8z"></svg:path>`,
})
export class RiShining2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShining2LineIcon],svg[ri-shining-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l7.5 4l-7.5 4l-4 7.5L8 16L.5 12L8 8l4-7.5zm3.25 4l-4.728-2.522L12 4.75L9.478 9.478L4.75 12l4.728 2.522L12 19.25l2.522-4.728z"></svg:path>`,
})
export class RiShining2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShiningFillIcon],svg[ri-shining-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10z"></svg:path>`,
})
export class RiShiningFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShiningLineIcon],svg[ri-shining-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10zm4.803 1A12.04 12.04 0 0 1 12 18.197A12.04 12.04 0 0 1 18.197 12A12.04 12.04 0 0 1 12 5.803A12.04 12.04 0 0 1 5.803 12"></svg:path>`,
})
export class RiShiningLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShip2FillIcon],svg[ri-ship-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74l-3.937 7.217A4.99 4.99 0 0 1 15 16a5 5 0 0 1-4 2a5 5 0 0 1-4-2a4.99 4.99 0 0 1-4.55 1.97l-1.236-6.791A1 1 0 0 1 2.198 10H3V5a1 1 0 0 1 1-1h1V1h4zm-4 6h11.392l-2.5-4H5zM3 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 11 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 19 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 11 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 3 22H1v-2z"></svg:path>`,
})
export class RiShip2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShip2LineIcon],svg[ri-ship-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74L19.637 18H19a6 6 0 0 1-1.535-.198L20.63 12H3.4l1.048 5.824A6 6 0 0 1 3 18h-.545l-1.24-6.821A1 1 0 0 1 2.197 10H3V5a1 1 0 0 1 1-1h1V1h4zm-4 6h11.392l-2.5-4H5zM3 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 11 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 19 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 11 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 3 22H1v-2z"></svg:path>`,
})
export class RiShip2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShipFillIcon],svg[ri-ship-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .683 1.2l-1.517 6.068A4.99 4.99 0 0 1 16 16a5 5 0 0 1-4 2a5 5 0 0 1-4-2a4.99 4.99 0 0 1-4.252 1.994l-1.516-6.068a1 1 0 0 1 .682-1.2zm2-.6L12 8l2.754.826l1.809.543L18 9.8V5H6zM4 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 12 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 20 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 12 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 4 22H2v-2z"></svg:path>`,
})
export class RiShipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShipLineIcon],svg[ri-ship-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .683 1.2l-1.517 6.068a5 5 0 0 1-1.902-.273l1.25-5.351L12 10l-7.6 2.37l1.25 5.351a5 5 0 0 1-1.902.273l-1.516-6.068a1 1 0 0 1 .682-1.2zm2-.6L12 8l6 1.8V5H6zM4 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 12 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 20 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 12 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 4 22H2v-2z"></svg:path>`,
})
export class RiShipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShirtFillIcon],svg[ri-shirt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.998 4v7l5-2.5l5 2.5V4h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4l-4.5-5h9zm1 3.236l-1-.5l-1 .5V20h2zm2 2.764v2h4v-2z"></svg:path>`,
})
export class RiShirtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShirtLineIcon],svg[ri-shirt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 20h6v-4h-4v-2h4V6h-2v5l-4-1.6zm-2 0V9.4l-4 1.6V6h-2v14zm-4-16V3h10v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4l3.5-3h-7z"></svg:path>`,
})
export class RiShirtLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag2FillIcon],svg[ri-shopping-bag-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 22h-16a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-11-16h-2v2a5 5 0 0 0 10 0V6h-2v2a3 3 0 0 1-6 0z"></svg:path>`,
})
export class RiShoppingBag2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag2LineIcon],svg[ri-shopping-bag-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 22h-16a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4h-14v16zm-10-14v2a3 3 0 1 0 6 0V6h2v2a5 5 0 0 1-10 0V6z"></svg:path>`,
})
export class RiShoppingBag2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag3FillIcon],svg[ri-shopping-bag-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12 4l-1.5-2h-10l-1.5 2zm-9.5 4h-2v2a5 5 0 0 0 10 0v-2h-2v2a3 3 0 0 1-6 0z"></svg:path>`,
})
export class RiShoppingBag3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag3LineIcon],svg[ri-shopping-bag-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12.5 6h-14v12h14zm-.5-2l-1.5-2h-10l-1.5 2zm-9.5 4v2a3 3 0 1 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2z"></svg:path>`,
})
export class RiShoppingBag3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag4FillIcon],svg[ri-shopping-bag-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a3 3 0 1 1 6 0zM7 6H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3A5 5 0 0 0 7 6m2 4a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z"></svg:path>`,
})
export class RiShoppingBag4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag4LineIcon],svg[ri-shopping-bag-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6a3 3 0 1 0-6 0M7 6a5 5 0 0 1 10 0h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM5 8v12h14V8zm4 2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z"></svg:path>`,
})
export class RiShoppingBag4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBagFillIcon],svg[ri-shopping-bag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5m5 10h-2v1a1 1 0 0 0 1.993.116l.007-.116zm-8 0h-2v1a1 1 0 0 0 1.993.116L9.005 12zm3-8A3 3 0 0 0 9.01 5.823L9.005 6v2h6V6a3 3 0 0 0-2.824-2.995z"></svg:path>`,
})
export class RiShoppingBagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBagLineIcon],svg[ri-shopping-bag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.005 8V6a5 5 0 0 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0 2h-2v10h14V10h-2v2h-2v-2h-6v2h-2zm2-2h6V6a3 3 0 0 0-6 0z"></svg:path>`,
})
export class RiShoppingBagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBasket2FillIcon],svg[ri-shopping-basket-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.37 3.44l3.212 5.562h3.423v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917l-.757-9.083H2.005v-2h3.422L8.639 3.44l1.732 1l-2.634 4.562h8.535L13.639 4.44zm-2.365 9.562h-2v4h2zm-4 0h-2v4h2zm8 0h-2v4h2z"></svg:path>`,
})
export class RiShoppingBasket2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBasket2LineIcon],svg[ri-shopping-basket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.37 3.44l3.212 5.562h3.423v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917l-.757-9.083H2.005v-2h3.422L8.639 3.44l1.732 1l-2.634 4.562h8.535L13.639 4.44zm3.46 7.562H5.179l.667 8h12.319zm-5.825 2v4h-2v-4zm-4 0v4h-2v-4zm8 0v4h-2v-4z"></svg:path>`,
})
export class RiShoppingBasket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBasketFillIcon],svg[ri-shopping-basket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917L3.171 11H2.005V9h4V8a6 6 0 0 1 6-6m1 11h-2v4h2zm-4 0h-2v4h2zm8 0h-2v4h2zm-5-9A4 4 0 0 0 8.01 7.8l-.005.2v1h8V8a4 4 0 0 0-3.8-3.995z"></svg:path>`,
})
export class RiShoppingBasketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingBasketLineIcon],svg[ri-shopping-basket-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917L3.171 11H2.005V9h4V8a6 6 0 0 1 6-6m6.826 9H5.178l.667 8h12.319zm-5.826 2v4h-2v-4zm-4 0v4h-2v-4zm8 0v4h-2v-4zm-5-9A4 4 0 0 0 8.01 7.8l-.005.2v1h8V8a4 4 0 0 0-3.8-3.995z"></svg:path>`,
})
export class RiShoppingBasketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingCart2FillIcon],svg[ri-shopping-cart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.004 6.417L.762 3.174L2.176 1.76l3.243 3.243H20.66a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6.004v2h11v2h-12a1 1 0 0 1-1-1zm1.5 16.586a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiShoppingCart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingCart2LineIcon],svg[ri-shopping-cart-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.004 6.417L.762 3.174L2.176 1.76l3.243 3.243H20.66a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6.004v2h11v2h-12a1 1 0 0 1-1-1zm2 .586v6h11.512l1.8-6zm-.5 16a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiShoppingCart2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingCartFillIcon],svg[ri-shopping-cart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.005 9h13.938l.5-2H8.005V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5.004a1 1 0 0 1-1-1V4h-2V2h3a1 1 0 0 1 1 1zm0 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m12 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiShoppingCartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShoppingCartLineIcon],svg[ri-shopping-cart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.005 16V4h-2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8.005V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5.004a1 1 0 0 1-1-1m2 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m12 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiShoppingCartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShowersFillIcon],svg[ri-showers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18H9v3H7v-3.252a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18H17v3.001h-2zm-4 2h2v3h-2z"></svg:path>`,
})
export class RiShowersFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShowersLineIcon],svg[ri-showers-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472zM7 16h2v4H7zm8 0h2v4h-2zm-4 3h2v4h-2z"></svg:path>`,
})
export class RiShowersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShuffleFillIcon],svg[ri-shuffle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17.883V16l5 3l-5 3v-2.09a9 9 0 0 1-6.997-5.365L11 14.54l-.003.006A9 9 0 0 1 2.725 20H2v-2h.725a7 7 0 0 0 6.434-4.243L9.912 12l-.753-1.757A7 7 0 0 0 2.725 6H2V4h.725a9 9 0 0 1 8.272 5.455L11 9.46l.003-.006A9 9 0 0 1 18 4.09V2l5 3l-5 3V6.117a7 7 0 0 0-5.159 4.126L12.088 12l.753 1.757A7 7 0 0 0 18 17.883"></svg:path>`,
})
export class RiShuffleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShuffleLineIcon],svg[ri-shuffle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17.883V16l5 3l-5 3v-2.09a9 9 0 0 1-6.997-5.365L11 14.54l-.003.006A9 9 0 0 1 2.725 20H2v-2h.725a7 7 0 0 0 6.434-4.243L9.912 12l-.753-1.757A7 7 0 0 0 2.725 6H2V4h.725a9 9 0 0 1 8.272 5.455L11 9.46l.003-.006A9 9 0 0 1 18 4.09V2l5 3l-5 3V6.117a7 7 0 0 0-5.159 4.126L12.088 12l.753 1.757A7 7 0 0 0 18 17.883"></svg:path>`,
})
export class RiShuffleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShutDownFillIcon],svg[ri-shut-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.05V12h2V2.05c5.053.501 9 4.765 9 9.95c0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95"></svg:path>`,
})
export class RiShutDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riShutDownLineIcon],svg[ri-shut-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.99 9.99 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4.265-8.193M11 12V2h2v10z"></svg:path>`,
})
export class RiShutDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSideBarFillIcon],svg[ri-side-bar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6 2v14h11V5z"></svg:path>`,
})
export class RiSideBarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSideBarLineIcon],svg[ri-side-bar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 2H4v14h4zm2 0v14h10V5z"></svg:path>`,
})
export class RiSideBarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSidebarFoldFillIcon],svg[ri-sidebar-fold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM11 8.5v7L7 12z"></svg:path>`,
})
export class RiSidebarFoldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSidebarFoldLineIcon],svg[ri-sidebar-fold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h8v14H5zm14 14h-4V5h4zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 9l4-3.5v7z"></svg:path>`,
})
export class RiSidebarFoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSidebarUnfoldFillIcon],svg[ri-sidebar-unfold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM7 8.5l4 3.5l-4 3.5z"></svg:path>`,
})
export class RiSidebarUnfoldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSidebarUnfoldLineIcon],svg[ri-sidebar-unfold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h8v14H5zm14 14h-4V5h4zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm7 9L7 8.5v7z"></svg:path>`,
})
export class RiSidebarUnfoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalTowerFillIcon],svg[ri-signal-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.116 20.087A9.99 9.99 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4.116 8.087l-1.015-1.739a8 8 0 1 0-9.738 0zm2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0zM11 13h2l1 9h-4z"></svg:path>`,
})
export class RiSignalTowerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalTowerLineIcon],svg[ri-signal-tower-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.116 20.087l1.015-1.739a8 8 0 1 1 9.738 0l1.015 1.739A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.99 9.99 0 0 0 4.116 8.087m2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0zM11 13h2v9h-2z"></svg:path>`,
})
export class RiSignalTowerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi1FillIcon],svg[ri-signal-wifi-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 2a15.9 15.9 0 0 0-8.42 2.392l5.109 6.324A8 8 0 0 1 12 13c1.18 0 2.302.256 3.311.716L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi1LineIcon],svg[ri-signal-wifi-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 12a6 6 0 0 0-2 .34l2 2.477l2-2.477a6 6 0 0 0-2-.34m0-10a15.9 15.9 0 0 0-8.42 2.392l5.109 6.324A8 8 0 0 1 12 13c1.18 0 2.302.256 3.311.716L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi2FillIcon],svg[ri-signal-wifi-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 2a15.9 15.9 0 0 0-8.42 2.392l3.179 3.935A10.95 10.95 0 0 1 12 10c1.897 0 3.683.48 5.241 1.327L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi2LineIcon],svg[ri-signal-wifi-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 9c-1.42 0-2.764.33-3.958.915L12 17.817l3.958-4.902A9 9 0 0 0 12 12m0-7a15.9 15.9 0 0 0-8.42 2.392l3.179 3.935A10.95 10.95 0 0 1 12 10c1.897 0 3.683.48 5.241 1.327L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi3FillIcon],svg[ri-signal-wifi-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 2a15.9 15.9 0 0 0-8.42 2.392l1.904 2.357A12.94 12.94 0 0 1 12.001 8c2.374 0 4.6.637 6.516 1.749L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi3LineIcon],svg[ri-signal-wifi-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 7c-1.897 0-3.683.48-5.24 1.327l5.24 6.49l5.242-6.49A10.95 10.95 0 0 0 12 10m0-5a15.9 15.9 0 0 0-8.42 2.392l1.904 2.357A12.94 12.94 0 0 1 12.001 8c2.374 0 4.6.637 6.516 1.749L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
