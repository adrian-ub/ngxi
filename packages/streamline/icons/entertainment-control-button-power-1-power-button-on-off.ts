import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPower1PowerButtonOnOffIcon],svg[streamline-entertainment-control-button-power-1-power-button-on-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5V6m4-4.12a6.5 6.5 0 1 1-8 0"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPower1PowerButtonOnOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
