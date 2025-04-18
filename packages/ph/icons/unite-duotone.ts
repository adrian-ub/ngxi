import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUniteDuotoneIcon],svg[ph-unite-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 160a72 72 0 0 1-143.6 7.6a72 72 0 1 1 79.2-79.2A72 72 0 0 1 232 160" opacity=".2"></svg:path><svg:path d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M32 96a64 64 0 0 1 126-16a80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 0a64.07 64.07 0 0 1-64 64a64.07 64.07 0 0 1 64-64m0 128a64.11 64.11 0 0 1-62-48a80.08 80.08 0 0 0 78-78a64 64 0 0 1-16 126"></svg:path></svg:g>`,
})
export class PhUniteDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
