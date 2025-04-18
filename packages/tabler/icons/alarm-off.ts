import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlarmOffIcon],svg[tabler-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35-2.645a7 7 0 0 0-8.536-8.56"></svg:path><svg:path d="M12 12v1h1M5.261 5.265L4.25 6M17 4l2.75 2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAlarmOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
