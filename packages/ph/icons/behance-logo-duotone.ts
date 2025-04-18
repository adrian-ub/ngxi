import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoDuotoneIcon],svg[ph-behance-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 152h-80a40 40 0 0 1 80 0M94 124h-4a30 30 0 0 0 0-60H32v128h62a34 34 0 0 0 0-68" opacity=".2"></svg:path><svg:path d="M160 80a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m-24 78a42 42 0 0 1-42 42H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h58a38 38 0 0 1 25.65 66A42 42 0 0 1 136 158m-96-42h50a22 22 0 0 0 0-44H40Zm80 42a26 26 0 0 0-26-26H40v52h54a26 26 0 0 0 26-26m128-6a8 8 0 0 1-8 8h-71a32 32 0 0 0 56.59 11.2a8 8 0 0 1 12.8 9.61A48 48 0 1 1 248 152m-17-8a32 32 0 0 0-62 0Z"></svg:path></svg:g>`,
})
export class PhBehanceLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
