import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaBrowserFillIcon],svg[eva-browser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-6 3a1 1 0 1 1-1 1a1 1 0 0 1 1-1M8 6a1 1 0 1 1-1 1a1 1 0 0 1 1-1m11 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14Z"></svg:path>`,
})
export class EvaBrowserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
