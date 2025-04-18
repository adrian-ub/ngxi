import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsNookIcon],svg[flat-color-icons-nook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90A4AE" d="M8 39V9c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v30c0 3.3-2.7 6-6 6H14c-3.3 0-6-2.7-6-6"></svg:path><svg:path fill="#ECEFF1" d="M34 7H14c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2"></svg:path><svg:path fill="#B0BEC5" d="M16 12h16v3H16zm0 7h16v2H16zm0 4h12v2H16zm0 4h16v2H16zm0 4h12v2H16z"></svg:path><svg:path fill="none" stroke="#eee" stroke-miterlimit="10" stroke-width="2" d="M22 43v-1c0-1.1.9-2 2-2s2 .9 2 2v1"></svg:path>`,
})
export class FlatColorIconsNookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
