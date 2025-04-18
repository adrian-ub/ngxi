import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadioFillIcon],svg[ph-radio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64H86.51L194.3 31.67a8 8 0 0 0-4.6-15.33l-160 48A8 8 0 0 0 24 72v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M104 176H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m64 56a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhRadioFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
