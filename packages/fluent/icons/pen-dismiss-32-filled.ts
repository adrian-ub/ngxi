import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPenDismiss32FilledIcon],svg[fluent-pen-dismiss-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.65 3.434a4.889 4.889 0 1 1 6.915 6.914l-4.018 4.018a9 9 0 0 0-11.182 11.183l-2.094 2.094a3.7 3.7 0 0 1-1.841 1.002l-6.22 1.333a1 1 0 0 1-1.188-1.187l1.333-6.221a3.7 3.7 0 0 1 1.002-1.84zM22 15.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m2.72 3.72L22 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L20.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L22 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L23.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06"></svg:path>`,
})
export class FluentPenDismiss32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
