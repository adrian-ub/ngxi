import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrendUpFillIcon],svg[ph-trend-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v64a8 8 0 0 1-13.66 5.66L200 99.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69L188.69 88l-26.35-26.34A8 8 0 0 1 168 48h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTrendUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
