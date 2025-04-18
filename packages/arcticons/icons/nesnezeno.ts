import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNesnezenoIcon],svg[arcticons-nesnezeno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.748 32.272v-12.21l3.043-.299l4.527 5.78l1.053-5.665l4.352-.472V32.45h-3.074l-6.03-5.21l-.575 5.03z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.815 37.21h38.554c.925-10.749-2.891-19.406-16.467-23.755c3.14-7.604-9.422-6.46-5.817.178C7.04 18.236 4.735 27.273 4.815 37.21"></svg:path><svg:ellipse cx="23.96" cy="11.663" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.225" ry="1.093"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 39.808h38.797"></svg:path>`,
})
export class ArcticonsNesnezenoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
