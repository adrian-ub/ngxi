import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHikingIcon],svg[picon-hiking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L3 5l1 1v2H3V6L2 5L1 8H0l2-6h2l1-1l-1-1l-1 1l2 2h1v1H5m2-2L6 8H5l1-6M0 2h1v2H0"></svg:path>`,
})
export class PiconHikingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
