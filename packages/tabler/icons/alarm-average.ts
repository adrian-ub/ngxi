import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlarmAverageIcon],svg[tabler-alarm-average-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0-14 0m2-9L4.25 6M17 4l2.75 2"></svg:path><svg:path d="M8 13h1l2 3l2-6l2 3h1"></svg:path></svg:g>`,
})
export class TablerAlarmAverageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
