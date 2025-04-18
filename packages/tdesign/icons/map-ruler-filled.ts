import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapRulerFilledIcon],svg[tdesign-map-ruler-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.669 8.027L15.857.216L12.26 3.814l3.016 3.016l-1.414 1.414l-3.016-3.016L8.66 7.412l3.816 3.816l-1.415 1.414l-3.815-3.815l-2.185 2.184l3.016 3.016l-1.414 1.414l-3.016-3.016L.05 16.023l7.811 7.812z"></svg:path>`,
})
export class TdesignMapRulerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
