import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftThinIcon],svg[ph-arrow-up-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.83 194.83a4 4 0 0 1-5.66 0L68 73.66V168a4 4 0 0 1-8 0V64a4 4 0 0 1 4-4h104a4 4 0 0 1 0 8H73.66l121.17 121.17a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowUpLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
