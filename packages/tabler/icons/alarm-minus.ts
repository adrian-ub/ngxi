import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlarmMinusIcon],svg[tabler-alarm-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13a7 7 0 1 0 14 0a7 7 0 1 0-14 0m2-9L4.25 6M17 4l2.75 2M10 13h4"></svg:path>`,
})
export class TablerAlarmMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
