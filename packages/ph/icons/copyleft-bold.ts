import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCopyleftBoldIcon],svg[ph-copyleft-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m52-84a52 52 0 0 1-93.59 31.21a12 12 0 1 1 19.18-14.41a28 28 0 1 0 0-33.6a12 12 0 1 1-19.18-14.41A52 52 0 0 1 180 128"></svg:path>`,
})
export class PhCopyleftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
