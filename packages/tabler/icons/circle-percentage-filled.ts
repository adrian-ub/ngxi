import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCirclePercentageFilledIcon],svg[tabler-circle-percentage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0l.004-.28C2.152 6.327 6.57 2 12 2m3 12.12a1 1 0 0 0-1 1v.015a1 1 0 0 0 2 0v-.015a1 1 0 0 0-1-1m.707-5.752a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414M9 8.105a1 1 0 0 0-1 1v.015a1 1 0 1 0 2 0v-.015a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerCirclePercentageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
