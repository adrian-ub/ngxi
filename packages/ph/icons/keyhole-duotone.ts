import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phKeyholeDuotoneIcon],svg[ph-keyhole-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 139.72L160 176H96l16-36.28a32 32 0 1 1 32 0" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-104a40 40 0 1 0-65.94 30.44l-13.38 30.33A8 8 0 0 0 96 184h64a8 8 0 0 0 7.32-11.23l-13.38-30.33A40.14 40.14 0 0 0 168 112m-31.32 31l11 25.05h-39.41l11-25.05a8 8 0 0 0-3.27-10.21a24 24 0 1 1 24 0a8 8 0 0 0-3.32 10.21"></svg:path></svg:g>`,
})
export class PhKeyholeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
