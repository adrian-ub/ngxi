import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDevicesPinIcon],svg[tabler-devices-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 14V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></svg:path><svg:path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8m9.121 2.121a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01M16 9h2"></svg:path></svg:g>`,
})
export class TablerDevicesPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
