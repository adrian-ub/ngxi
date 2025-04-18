import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrendDownThinIcon],svg[ph-trend-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.34L136 101.66l-37.17 37.17a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L96 130.34l37.17-37.17a4 4 0 0 1 5.66 0L228 182.34V128a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTrendDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
