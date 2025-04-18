import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftDuotoneIcon],svg[ph-arrow-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 64L64 168V64Z" opacity=".2"></svg:path><svg:path d="M197.66 186.34L127.31 116l46.35-46.34A8 8 0 0 0 168 56H64a8 8 0 0 0-8 8v104a8 8 0 0 0 13.66 5.66L116 127.31l70.34 70.35a8 8 0 0 0 11.32-11.32M72 72h76.69l-38.34 38.34L72 148.69Z"></svg:path></svg:g>`,
})
export class PhArrowUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
