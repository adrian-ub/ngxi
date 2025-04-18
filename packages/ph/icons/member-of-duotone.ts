import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMemberOfDuotoneIcon],svg[ph-member-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160h-72a80 80 0 0 1-80-80a80 80 0 0 1 80-80Z" opacity=".2"></svg:path><svg:path d="M200 136H56.46A72.08 72.08 0 0 0 128 200h72a8 8 0 0 1 0 16h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72.08 72.08 0 0 0-71.54 64H200a8 8 0 0 1 0 16"></svg:path></svg:g>`,
})
export class PhMemberOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
