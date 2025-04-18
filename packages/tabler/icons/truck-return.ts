import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTruckReturnIcon],svg[tabler-truck-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 17H3V6a1 1 0 0 1 1-1h9v6H8l2 2m0-4l-2 2m1 6h6M13 6h5l3 5v6h-2"></svg:path></svg:g>`,
})
export class TablerTruckReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
