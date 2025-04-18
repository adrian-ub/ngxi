import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendDownwardFilledIcon],svg[ix-trend-downward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M120.981 90.81C204.78 22.15 328.63 26.93 406.85 105.15c83.312 83.313 83.312 218.388 0 301.7s-218.387 83.312-301.7 0c-78.22-78.22-83-202.071-14.34-285.869l199.006 199.004L192 320v42.667h170.667V192H320l.002 97.832Z"></svg:path>`,
})
export class IxTrendDownwardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
