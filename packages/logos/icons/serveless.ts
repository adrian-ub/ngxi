import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosServelessIcon],svg[logos-serveless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFD426" d="M0 218.14l119.805-16.955l-105.676 173.49l240.742-217.569l-103.984 10.172L256 0z"></svg:path>`,
})
export class LogosServelessIcon {
  readonly viewBox = input("0 0 256 375")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
