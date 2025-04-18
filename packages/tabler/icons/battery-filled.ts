import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryFilledIcon],svg[tabler-battery-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6a3 3 0 0 1 2.995 2.824L20 9v.086l.052.019a1.5 1.5 0 0 1 .941 1.25L21 10.5v3a1.5 1.5 0 0 1-.948 1.395l-.052.018V15a3 3 0 0 1-2.824 2.995L17 18H6a3 3 0 0 1-2.995-2.824L3 15V9a3 3 0 0 1 2.824-2.995L6 6z"></svg:path>`,
})
export class TablerBatteryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
