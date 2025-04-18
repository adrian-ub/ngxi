import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpBoldIcon],svg[ph-arrow-u-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 88.49a12 12 0 0 1-17 0L180 61v107a68 68 0 0 1-136 0V80a12 12 0 0 1 24 0v88a44 44 0 0 0 88 0V61l-27.51 27.49a12 12 0 1 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhArrowURightUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
