import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParagraphBoldIcon],svg[ph-paragraph-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H96a68 68 0 0 0 0 136h36v36a12 12 0 0 0 24 0V60h16v148a12 12 0 0 0 24 0V60h12a12 12 0 0 0 0-24m-76 112H96a44 44 0 0 1 0-88h36Z"></svg:path>`,
})
export class PhParagraphBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
