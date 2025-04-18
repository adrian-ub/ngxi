import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLessThanIcon],svg[la-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6L6 15.219v1.562L26 26v-2.156L9.469 16L26 8.156z"></svg:path>`,
})
export class LaLessThanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
