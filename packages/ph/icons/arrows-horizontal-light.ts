import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsHorizontalLightIcon],svg[ph-arrows-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 132.24l-32 32a6 6 0 0 1-8.48-8.48L217.51 134h-179l21.75 21.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48L38.49 122h179l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 .02 8.48"></svg:path>`,
})
export class PhArrowsHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
