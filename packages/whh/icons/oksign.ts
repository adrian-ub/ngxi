import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOksignIcon],svg[whh-oksign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m311-683l-44-44q-10-9-22.5-9t-22.5 9L432 599L289 457q-9-9-22-9t-22 9l-44 44q-9 9-9 22t9 23l152 151q1 11 8 18l44 44q11 11 27 8q16 3 27-8l44-44q6-7 8-18l312-312q9-9 9-22t-9-22"></svg:path>`,
})
export class WhhOksignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
