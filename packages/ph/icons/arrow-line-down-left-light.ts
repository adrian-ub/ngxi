import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLeftLightIcon],svg[ph-arrow-line-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-50.24 43.76L78 193.52V112a6 6 0 0 0-12 0v96a6 6 0 0 0 6 6h96a6 6 0 0 0 0-12H86.48l101.76-101.76a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhArrowLineDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
