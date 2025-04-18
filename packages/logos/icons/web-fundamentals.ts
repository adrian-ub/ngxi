import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosWebFundamentalsIcon],svg[logos-web-fundamentals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1C70E7" d="M79.072 0h99.949l-4.8 59.502l48.787-20.443l32.991 92.658l-54.412 15.811l34.125 46.375l-79.315 59.195l-30.475-47.422l-29.579 47.422l-80.947-59.195l38.287-46.375L0 131.717l30.366-92.658L82.67 59.502z"></svg:path><svg:path fill="#FFF" d="M107.425 27.406h41.87l-3.593 72.851l61.349-25.183l14.58 38.507l-65.354 18.819l41.459 56.94l-33.208 24.798l-39.275-59.571l-36.238 59.571l-34.741-24.798l45.753-56.94l-66.045-18.819l13.34-38.507l64.504 25.183z"></svg:path>`,
})
export class LogosWebFundamentalsIcon {
  readonly viewBox = input("0 0 256 254")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
