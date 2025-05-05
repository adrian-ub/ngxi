import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTruckIcon],svg[picon-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4V0h4v4m3 2L6 8H5L4 6H3L2 8H1L0 6V5h5V1h1l2 2v3"></svg:path>`,
})
export class PiconTruckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
