import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laNeuterIcon],svg[la-neuter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-4.406 0-8 3.594-8 8c0 4.066 3.066 7.438 7 7.938V28h2v-8.063c3.934-.5 7-3.87 7-7.937c0-4.406-3.594-8-8-8m0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaNeuterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
