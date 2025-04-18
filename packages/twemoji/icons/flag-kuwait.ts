import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagKuwaitIcon],svg[twemoji-flag-kuwait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#007A3D" d="M32 5H4a4 4 0 0 0-4 4v4.5h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#CE1126" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4.5H0z"></svg:path><svg:path fill="#EEE" d="M0 13.5h36v9H0z"></svg:path><svg:path fill="#141414" d="M1.205 6.138A4 4 0 0 0 0 9v18c0 1.122.462 2.135 1.205 2.862L9 22.5v-9z"></svg:path>`,
})
export class TwemojiFlagKuwaitIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
