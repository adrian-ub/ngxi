import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagArmeniaIcon],svg[twemoji-flag-armenia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D90012" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#F2A800" d="M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4"></svg:path><svg:path fill="#0033A0" d="M0 13h36v10H0z"></svg:path>`,
})
export class TwemojiFlagArmeniaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
