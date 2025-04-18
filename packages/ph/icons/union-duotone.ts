import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUnionDuotoneIcon],svg[ph-union-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 64v80a72 72 0 0 1-144 0V64Z" opacity=".2"></svg:path><svg:path d="M208 64v80a80 80 0 0 1-160 0V64a8 8 0 0 1 16 0v80a64 64 0 0 0 128 0V64a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhUnionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
