import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlarmTurnOffBoldIcon],svg[solar-alarm-turn-off-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18m2.652-11.652a.75.75 0 0 1 0 1.061L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.061l-1.592 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59l-1.59-1.592a.75.75 0 1 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmTurnOffBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
