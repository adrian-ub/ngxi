import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataCheckIcon],svg[carbon-data-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 27.18l-2.59-2.59L19 26l4 4l7-7l-1.41-1.41z"></svg:path><svg:circle cx="11" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="24" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h8v-2H8v-6h18V5a2 2 0 0 0-2-2m0 16H8v-6h16Zm0-8H8V5h16Z"></svg:path>`,
})
export class CarbonDataCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
