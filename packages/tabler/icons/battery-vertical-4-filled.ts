import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryVertical4FilledIcon],svg[tabler-battery-vertical-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3a1.5 1.5 0 0 1 1.395.948l.018.052H15a3 3 0 0 1 2.995 2.824L18 7v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h.086l.019-.052a1.5 1.5 0 0 1 1.25-.941L10.5 3zm.5 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-3h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerBatteryVertical4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
