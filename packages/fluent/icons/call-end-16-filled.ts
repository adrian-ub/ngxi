import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCallEnd16FilledIcon],svg[fluent-call-end-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.827 9.7l.138-.754a2.27 2.27 0 0 0-.71-2.063Q12.197 4.993 7.826 5q-4.365.006-6.234 1.895c-.528.533-.72 1.324-.505 2.075l.216.754c.202.704.884 1.175 1.594 1.1l1.424-.149A1.35 1.35 0 0 0 5.52 9.55l.274-1.604A5.5 5.5 0 0 1 7.99 7.43q1.18-.036 2.162.382l.442 1.714a1.53 1.53 0 0 0 1.315 1.14l1.432.144a1.354 1.354 0 0 0 1.485-1.11"></svg:path>`,
})
export class FluentCallEnd16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
