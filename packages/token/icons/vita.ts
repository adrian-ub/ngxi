import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVitaIcon],svg[token-vita-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.393 9.58c1.292-2.616.265-3.892-.704-4.548a2.8 2.8 0 0 0-1.53-.445c-2.24-.016-3.707 1.975-6.206 1.975c-2.361 0-4.04-1.933-6.206-1.975a2.65 2.65 0 0 0-1.884.773c-1.292 1.048-.89 3.235-.355 4.22c1.615 3.267 4.966 9.833 8.445 9.833s7.148-7.223 8.44-9.833"></svg:path>`,
})
export class TokenVitaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
