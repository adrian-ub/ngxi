import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockHour5FilledIcon],svg[tabler-clock-hour-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M11 7v5.022l.003.054l.02.135l.005.025a1 1 0 0 0 .056.165l.04.082l.04.065l2.004 3.007a1 1 0 1 0 1.664-1.11L13 11.697V7a1 1 0 0 0-.883-.993L12 6a1 1 0 0 0-1 1"></svg:path>`,
})
export class TablerClockHour5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
