import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPathBoldIcon],svg[ph-path-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 164a36.07 36.07 0 0 0-33.94 24H72a28 28 0 0 1 0-56h96a44 44 0 0 0 0-88H72a12 12 0 0 0 0 24h96a20 20 0 0 1 0 40H72a52 52 0 0 0 0 104h94.06A36 36 0 1 0 200 164m0 48a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhPathBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
