import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLayoutPinIcon],svg[gg-layout-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.93 4.016h-2.165a3.001 3.001 0 0 0-5.67 0H6.932a3 3 0 0 0-3 3v2.196a3.001 3.001 0 0 0 0 5.608v2.196a3 3 0 0 0 3 3h2.154a3.001 3.001 0 0 0 5.692 0h2.154a3 3 0 0 0 3-3v-2.171a3.001 3.001 0 0 0 0-5.658V7.016a3 3 0 0 0-3-3m-11 10.853v2.147a1 1 0 0 0 1 1H9.12a3.001 3.001 0 0 1 5.623 0h2.189a1 1 0 0 0 1-1v-2.17a3.001 3.001 0 0 1 0-5.66v-2.17a1 1 0 0 0-1-1h-2.177a3.001 3.001 0 0 1-5.647 0H6.931a1 1 0 0 0-1 1v2.147a3.001 3.001 0 0 1 0 5.706" clip-rule="evenodd"></svg:path>`,
})
export class GgLayoutPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
