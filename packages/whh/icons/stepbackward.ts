import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhStepbackwardIcon],svg[whh-stepbackward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1025q-53 0-90.5-37.5T768 897V128q0-53 37.5-90.5T896 0t90.5 37.5T1024 128v769q0 53-37.5 90.5T896 1025m-446-11L15 551Q0 535 0 513t15-38L450 12q25-27 62 12v977q-37 40-62 13"></svg:path>`,
})
export class WhhStepbackwardIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
