import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftFillIcon],svg[ph-arrow-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.66 69.66L127.31 140l46.35 46.34A8 8 0 0 1 168 200H64a8 8 0 0 1-8-8V88a8 8 0 0 1 13.66-5.66L116 128.69l70.34-70.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowDownLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
