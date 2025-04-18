import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftUpBoldIcon],svg[ph-arrow-u-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 80v88a68 68 0 0 1-136 0V61L48.49 88.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L100 61v107a44 44 0 0 0 88 0V80a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowULeftUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
