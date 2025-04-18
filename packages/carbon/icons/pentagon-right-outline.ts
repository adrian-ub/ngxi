import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonRightOutlineIcon],svg[carbon-pentagon-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.76 16l-8.684 11.827L5 23.301V8.7l14.076-4.526zM30 16a1 1 0 0 0-.194-.592l-9.544-13a1 1 0 0 0-1.112-.36L3.694 7.018A1 1 0 0 0 3 7.97v16.06a1 1 0 0 0 .694.952l15.456 4.97a1 1 0 0 0 1.112-.36l9.544-13A1 1 0 0 0 30 16"></svg:path>`,
})
export class CarbonPentagonRightOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
