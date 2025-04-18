import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagYemenIcon],svg[twemoji-flag-yemen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#141414" d="M0 27.063C0 29.272 1.791 31 4 31h28c2.209 0 4-1.728 4-3.937V22H0z"></svg:path><svg:path fill="#EEE" d="M0 14h36v8H0z"></svg:path><svg:path fill="#CE1126" d="M32 5H4C1.791 5 0 6.854 0 9.063V14h36V9.063C36 6.854 34.209 5 32 5"></svg:path>`,
})
export class TwemojiFlagYemenIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
