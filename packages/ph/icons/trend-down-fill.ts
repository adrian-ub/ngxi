import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrendDownFillIcon],svg[ph-trend-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66L188.69 160L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L200 148.69l26.34-26.35A8 8 0 0 1 240 128"></svg:path>`,
})
export class PhTrendDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
