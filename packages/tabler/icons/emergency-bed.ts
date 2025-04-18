import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEmergencyBedIcon],svg[tabler-emergency-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 8l2.1 2.8A3 3 0 0 0 8.5 12H20M10 6h4m-2-2v4"></svg:path><svg:path d="M12 12v2l-2.5 2.5m5 0L12 14"></svg:path></svg:g>`,
})
export class TablerEmergencyBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
