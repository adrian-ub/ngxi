import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiAirfieldIcon],svg[maki-airfield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.818.682H4.773C4.09.682 4.09 0 4.773 0h5.454c.682 0 .682.682 0 .682H8.182S9 1.272 9 2.636V4h6v2L9 8l-.5 5l2.5 1.318V15H4v-.682L6.5 13L6 8L0 6V4h6V2.636c0-1.363.818-1.954.818-1.954"></svg:path>`,
})
export class MakiAirfieldIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
