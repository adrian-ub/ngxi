import { Component, input } from '@angular/core'

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
