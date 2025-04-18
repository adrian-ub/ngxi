import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLeftIcon],svg[ph-arrow-line-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-53.66 42.34L80 188.69V112a8 8 0 0 0-16 0v96a8 8 0 0 0 8 8h96a8 8 0 0 0 0-16H91.31l98.35-98.34a8 8 0 0 0-11.32-11.32"></svg:path>`,
})
export class PhArrowLineDownLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
