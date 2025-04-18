import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightLightIcon],svg[ph-arrow-u-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.76 131.76L209.51 94H88a50 50 0 0 0 0 100h88a6 6 0 0 1 0 12H88a62 62 0 0 1 0-124h121.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48-8.48"></svg:path>`,
})
export class PhArrowUUpRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
