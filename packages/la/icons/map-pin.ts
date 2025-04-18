import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMapPinIcon],svg[la-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-3.855 0-7 3.145-7 7c0 3.516 2.617 6.418 6 6.906V28h2v-9.094c3.383-.488 6-3.39 6-6.906c0-3.855-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m0 1c-2.2 0-4 1.8-4 4h2c0-1.117.883-2 2-2z"></svg:path>`,
})
export class LaMapPinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
