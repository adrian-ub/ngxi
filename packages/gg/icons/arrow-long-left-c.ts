import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftCIcon],svg[gg-arrow-long-left-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.27 7.757l-4.25 4.236l4.236 4.25l1.416-1.412l-1.814-1.82l12.288.042a3.001 3.001 0 0 0 5.834-.975a3 3 0 0 0-5.825-1.025L4.839 11.01l1.843-1.836zm13.71 4.303a1 1 0 1 1 2 .009a1 1 0 0 1-2-.01" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongLeftCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
