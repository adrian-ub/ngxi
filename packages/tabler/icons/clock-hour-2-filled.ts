import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockHour2FilledIcon],svg[tabler-clock-hour-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M11 7v5.022l.003.054l.02.135l.005.025a1 1 0 0 0 .056.165l.04.082l.062.099l.07.087l.075.074l.094.075l.08.052l.07.035l.132.051l.135.031l.082.01l.124.002l.113-.012l.108-.024l.106-.036l.108-.051l.065-.04l3.007-2.004a1 1 0 1 0-1.11-1.664L13 10.13V7a1 1 0 0 0-.883-.993L12 6a1 1 0 0 0-1 1"></svg:path>`,
})
export class TablerClockHour2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
