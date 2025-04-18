import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendUpwardFilledIcon],svg[ix-trend-upward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M105.15 105.15c83.313-83.311 218.388-83.311 301.7 0c83.312 83.313 83.312 218.388 0 301.7c-78.221 78.22-202.072 83-285.87 14.34l199.005-199.005L320 320h42.667V149.334H192V192l97.832-.002L90.81 391.019c-68.66-83.797-63.88-207.648 14.34-285.868"></svg:path>`,
})
export class IxTrendUpwardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
