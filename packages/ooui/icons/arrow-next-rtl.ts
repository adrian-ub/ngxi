import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArrowNextRtlIcon],svg[ooui-arrow-next-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 10l8 8l1.4-1.4L5.8 11H18V9H5.8l5.6-5.6L10 2z"></svg:path>`,
})
export class OouiArrowNextRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
