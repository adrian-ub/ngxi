import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArrowPreviousRtlIcon],svg[ooui-arrow-previous-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h12.2l-5.6 5.6L10 18l8-8l-8-8l-1.4 1.4L14.2 9H2z"></svg:path>`,
})
export class OouiArrowPreviousRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
