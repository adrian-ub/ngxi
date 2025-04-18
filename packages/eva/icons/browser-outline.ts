import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaBrowserOutlineIcon],svg[eva-browser-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14ZM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3Z"></svg:path><svg:circle cx="8" cy="7.03" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="7.03" r="1" fill="currentColor"></svg:circle>`,
})
export class EvaBrowserOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
