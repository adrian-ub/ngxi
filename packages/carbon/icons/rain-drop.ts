import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRainDropIcon],svg[carbon-rain-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24v-2a3.3 3.3 0 0 0 3-3h2a5.267 5.267 0 0 1-5 5"></svg:path><svg:path fill="currentColor" d="M16 28a9.01 9.01 0 0 1-9-9a10 10 0 0 1 1.494-4.955l6.659-10.608a1.04 1.04 0 0 1 1.694 0l6.63 10.556A10.06 10.06 0 0 1 25 19a9.01 9.01 0 0 1-9 9m0-22.152l-5.782 9.208A8 8 0 0 0 9 19a7 7 0 0 0 14 0a8.06 8.06 0 0 0-1.248-3.995Z"></svg:path>`,
})
export class CarbonRainDropIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
