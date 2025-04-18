import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTouchpadIcon],svg[gg-touchpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 21a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3zM4 5h16a1 1 0 0 1 1 1v8H3V6a1 1 0 0 1 1-1M3 16v2a1 1 0 0 0 1 1h7v-3zm10 3v-3h8v2a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GgTouchpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
