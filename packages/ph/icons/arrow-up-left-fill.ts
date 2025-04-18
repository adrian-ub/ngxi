import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftFillIcon],svg[ph-arrow-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.66 197.66a8 8 0 0 1-11.32 0L116 127.31l-46.34 46.35A8 8 0 0 1 56 168V64a8 8 0 0 1 8-8h104a8 8 0 0 1 5.66 13.66L127.31 116l70.35 70.34a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowUpLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
