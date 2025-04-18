import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBreadDuotoneIcon],svg[ph-bread-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 111v89a8 8 0 0 1-8 8h-56a8 8 0 0 0 8-8v-89a32 32 0 0 0-8-63h56a32 32 0 0 1 8 63" opacity=".2"></svg:path><svg:path d="M240 80a40 40 0 0 0-40-40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40.06 40.06 0 0 0 240 80M48 120a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48a8 8 0 0 0 0 16v80H48Zm152-16a8 8 0 0 0 0 16v80h-40v-83.35A40 40 0 0 0 176 56h24a24 24 0 0 1 0 48"></svg:path></svg:g>`,
})
export class PhBreadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
