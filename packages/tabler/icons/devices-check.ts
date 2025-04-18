import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDevicesCheckIcon],svg[tabler-devices-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 15.5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4"></svg:path><svg:path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7m5-9h2m-3 10l2 2l4-4"></svg:path></svg:g>`,
})
export class TablerDevicesCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
