import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRepeatIcon],svg[zmdi-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 109v86H43V67h256V3l85 85l-85 85v-64zm214 214v-86h42v128H85v64L0 344l85-85v64z"></svg:path>`,
})
export class ZmdiRepeatIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
