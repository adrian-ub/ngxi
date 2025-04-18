import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleDuotoneIcon],svg[ph-user-rectangle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8h-20.1a72 72 0 0 0-67.9-48a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-67.9 48H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-23.43 80a64 64 0 0 1 110.86 0ZM216 200h-14.67a80.14 80.14 0 0 0-43.69-42.28a48 48 0 1 0-59.28 0A80.14 80.14 0 0 0 54.67 200H40V56h176z"></svg:path></svg:g>`,
})
export class PhUserRectangleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
