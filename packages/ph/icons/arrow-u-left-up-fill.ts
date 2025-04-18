import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftUpFillIcon],svg[ph-arrow-u-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80v88a64 64 0 0 1-128 0V88H40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 136 88H96v80a48 48 0 0 0 96 0V80a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowULeftUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
