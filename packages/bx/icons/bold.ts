import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBoldIcon],svg[bx-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.061 11.22A4.46 4.46 0 0 0 18 8.5C18 6.019 15.981 4 13.5 4H6v15h8c2.481 0 4.5-2.019 4.5-4.5a4.48 4.48 0 0 0-1.439-3.28M13.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H9V7zm.5 9H9v-3h5c.827 0 1.5.673 1.5 1.5S14.827 16 14 16"></svg:path>`,
})
export class BxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
