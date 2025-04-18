import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPulse32FilledIcon],svg[fluent-pulse-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.53 5a1.25 1.25 0 0 1 1.173.91l4.354 15.438l3.25-10.468a1.25 1.25 0 0 1 2.331-.147l2.167 4.767h2.945a1.25 1.25 0 1 1 0 2.5H24a1.25 1.25 0 0 1-1.138-.733l-1.141-2.51l-3.527 11.364a1.25 1.25 0 0 1-2.397-.032L11.4 10.502l-2.214 6.643A1.25 1.25 0 0 1 8 18H4.25a1.25 1.25 0 1 1 0-2.5h2.849l3.215-9.645A1.25 1.25 0 0 1 11.53 5"></svg:path>`,
})
export class FluentPulse32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
