import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCompassDiscoverFillIcon],svg[ri-compass-discover-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22C7.477 22 3 17.523 3 12S7.477 2 13 2s10 4.477 10 10s-4.477 10-10 10M8 11.5l4 1.5l1.5 4.002L17 8z"></svg:path>`,
})
export class RiCompassDiscoverFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
