import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsReset16Icon],svg[qlementine-icons-reset-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.02 9.46A5.002 5.002 0 0 0 14 9c0-2.76-2.24-5-5-5H1.71l2.15 2.15a.5.5 0 0 1-.707.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .707.707l-2.15 2.15H9c3.31 0 6 2.69 6 6s-2.69 6-6 6c-3.13 0-5.7-2.4-5.98-5.46a.5.5 0 0 1 .996-.09z"></svg:path><svg:path fill="currentColor" d="M10.7 10.1a.5.5 0 0 1-.447.895l-2-1a.5.5 0 0 1-.276-.447v-3a.5.5 0 0 1 1 0v2.69l1.72.862z"></svg:path>`,
})
export class QlementineIconsReset16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
