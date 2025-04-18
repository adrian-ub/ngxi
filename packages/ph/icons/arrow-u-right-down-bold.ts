import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownBoldIcon],svg[ph-arrow-u-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.49 184.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L156 195V88a44 44 0 0 0-88 0v88a12 12 0 0 1-24 0V88a68 68 0 0 1 136 0v107l27.51-27.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowURightDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
