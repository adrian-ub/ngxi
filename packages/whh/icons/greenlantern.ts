import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhGreenlanternIcon],svg[whh-greenlantern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M590 128q107 49 174.5 156T832 512t-67.5 228T590 896h242l64 128H0l64-128h242q-107-49-174.5-156T64 512t67.5-228T306 128H64L0 0h896l-64 128zM192 512q0 106 75 181t181 75t181-75t75-181t-75-181t-181-75t-181 75t-75 181"></svg:path>`,
})
export class WhhGreenlanternIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
