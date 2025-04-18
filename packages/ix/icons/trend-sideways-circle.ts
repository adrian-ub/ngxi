import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendSidewaysCircleIcon],svg[ix-trend-sideways-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M135.358 376.586c66.65 66.65 174.709 66.65 241.359 0c66.65-66.649 66.65-174.709 0-241.359c-64.116-64.116-166.555-66.553-233.585-7.311L112.916 97.7c83.737-75.878 213.188-73.426 293.971 7.357c83.311 83.311 83.312 218.387 0 301.699c-83.311 83.311-218.388 83.311-301.699 0c-36.248-36.248-56.726-82.295-61.43-129.614a214.5 214.5 0 0 1 .01-42.569l281.446.001l-69.176-69.177l30.17-30.17l120.679 120.68l-120.68 120.679l-30.169-30.17l69.176-69.176l-238.513.001c4.55 36.319 20.769 71.458 48.657 99.345" clip-rule="evenodd"></svg:path>`,
})
export class IxTrendSidewaysCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
