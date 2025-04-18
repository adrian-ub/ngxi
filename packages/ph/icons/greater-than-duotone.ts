import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanDuotoneIcon],svg[ph-greater-than-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128L64 200V56Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-4.58 7.23l-152 72a8 8 0 1 1-6.85-14.46L197.31 128L60.58 63.23a8 8 0 1 1 6.85-14.46l152 72A8 8 0 0 1 224 128"></svg:path></svg:g>`,
})
export class PhGreaterThanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
