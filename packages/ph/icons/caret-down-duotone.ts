import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDownDuotoneIcon],svg[ph-caret-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 96l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="M215.39 92.94A8 8 0 0 0 208 88H48a8 8 0 0 0-5.66 13.66l80 80a8 8 0 0 0 11.32 0l80-80a8 8 0 0 0 1.73-8.72M128 164.69L67.31 104h121.38Z"></svg:path></svg:g>`,
})
export class PhCaretDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
