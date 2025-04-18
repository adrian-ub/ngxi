import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayStepIcon],svg[subway-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 39.5C95.5 49.5 0 151.1 0 275.2C0 406 106 512 236.8 512c124.1 0 225.7-95.5 235.8-217H217zM256.5 0v255.5H512C502.3 118.7 393.3 9.7 256.5 0"></svg:path>`,
})
export class SubwayStepIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
