import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUnFlagRtlIcon],svg[ooui-un-flag-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1.2l4.27 4.27L0 7l11.84 6.04l.16.16V20h2v-4.8l4.74 4.74l1.198-1.198L1.198.002zM14 2L7.809 4.209L14 10.399z"></svg:path>`,
})
export class OouiUnFlagRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
