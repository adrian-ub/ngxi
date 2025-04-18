import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataBaseIcon],svg[carbon-data-base-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v6H8V5ZM8 19v-6h16v6Zm0 8v-6h16v6Z"></svg:path><svg:circle cx="11" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="24" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonDataBaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
