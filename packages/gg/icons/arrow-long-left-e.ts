import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftEIcon],svg[gg-arrow-long-left-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.263 7.757l-4.25 4.236l4.236 4.25l1.417-1.412l-1.815-1.82l12.117.04l-.008 2l6 .027l.026-6l-6-.027l-.009 2l-12.144-.04l1.842-1.837zm15.715 3.312l-.01 2l-2-.01l.01-2z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongLeftEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
