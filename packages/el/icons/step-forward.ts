import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elStepForwardIcon],svg[el-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M950 0v1200H750V650l-500 500V50l500 500V0z"></svg:path>`,
})
export class ElStepForwardIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
