import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlarmTurnOffBoldDuotoneIcon],svg[solar-alarm-turn-off-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.652 10.349a.75.75 0 0 1 0 1.06L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.061l-1.592 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59l-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmTurnOffBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
