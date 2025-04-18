import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberEightBoldIcon],svg[ph-number-eight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.44 118.91a52 52 0 1 0-68.88 0a60 60 0 1 0 68.88 0M100 80a28 28 0 1 1 28 28a28 28 0 0 1-28-28m28 124a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhNumberEightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
