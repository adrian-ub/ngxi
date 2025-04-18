import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFeedbackLtrIcon],svg[ooui-feedback-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16L2 12a3.83 3.83 0 0 1-1-2.5A3.83 3.83 0 0 1 2 7l17-4z"></svg:path><svg:rect width="4" height="8" x="4" y="9" fill="currentColor" rx="2"></svg:rect>`,
})
export class OouiFeedbackLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
