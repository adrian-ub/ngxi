import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFeedbackRtlIcon],svg[ooui-feedback-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7c.6.7 1 1.6 1 2.5s-.4 1.8-1 2.5L1 16V3z"></svg:path><svg:rect width="4" height="8" x="12" y="9" fill="currentColor" rx="2"></svg:rect>`,
})
export class OouiFeedbackRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
