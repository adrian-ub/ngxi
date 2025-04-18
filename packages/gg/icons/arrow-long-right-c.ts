import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongRightCIcon],svg[gg-arrow-long-right-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.73 7.757l4.25 4.236l-4.236 4.25l-1.416-1.412l1.814-1.82l-12.288.042a3.001 3.001 0 1 1-.009-2l12.316-.043l-1.843-1.836zM5.02 12.06a1 1 0 1 0-2 .009a1 1 0 0 0 2-.01" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongRightCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
