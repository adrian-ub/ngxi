import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowClockwiseFillIcon],svg[ph-arrow-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1-5.66-13.66l17-17l-10.55-9.65l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 1 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164l10.93 10l19.66-19.7A8 8 0 0 1 240 56"></svg:path>`,
})
export class PhArrowClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
