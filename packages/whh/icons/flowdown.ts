import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFlowdownIcon],svg[whh-flowdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1012 259L818 440q-20 24-49-11V321H640q-26 0-45 18.5T576 385v192q0 70-19.5 120.5T501 777t-81 42.5T320 833H0V641h320q27 0 45.5-19t18.5-45V385q0-70 20-121t55.5-79.5t80.5-42T640 129h129V21q29-34 49-11l194 182q12 14 12 33.5t-12 33.5"></svg:path>`,
})
export class WhhFlowdownIcon {
  readonly viewBox = input("0 0 1024 833")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
