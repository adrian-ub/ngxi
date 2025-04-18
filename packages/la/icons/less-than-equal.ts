import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLessThanEqualIcon],svg[la-less-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 5L6 13.219v1.562L26 23v-2.156L9.469 14L26 7.156zM6 25v2h20v-2z"></svg:path>`,
})
export class LaLessThanEqualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
