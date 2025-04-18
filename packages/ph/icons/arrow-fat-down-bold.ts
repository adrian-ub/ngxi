import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatDownBoldIcon],svg[ph-arrow-fat-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.09 131.41A12 12 0 0 0 224 124h-36V48a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v76H32a12 12 0 0 0-8.48 20.49l96 96a12 12 0 0 0 17 0l96-96a12 12 0 0 0 2.57-13.08M128 215l-67-67h19a12 12 0 0 0 12-12V52h72v84a12 12 0 0 0 12 12h19Z"></svg:path>`,
})
export class PhArrowFatDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
