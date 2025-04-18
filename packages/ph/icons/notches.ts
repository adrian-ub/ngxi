import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotchesIcon],svg[ph-notches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 133.66l-80 80a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 11.32m-16-99.32a8 8 0 0 0-11.32 0l-152 152a8 8 0 0 0 11.32 11.32l152-152a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhNotchesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
