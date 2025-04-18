import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubtractDuotoneIcon],svg[ph-subtract-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 160a72 72 0 0 1-143.6 7.6a73 73 0 0 0 7.6.4a72 72 0 0 0 72-72a73 73 0 0 0-.4-7.6A72 72 0 0 1 232 160" opacity=".2"></svg:path><svg:path d="M174.63 81.35a80 80 0 1 0-93.28 93.28a80 80 0 1 0 93.28-93.28M32 96a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64m128 128a63.81 63.81 0 0 1-62-48a80.07 80.07 0 0 0 78-78a64 64 0 0 1-16 126"></svg:path></svg:g>`,
})
export class PhSubtractDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
