import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilLoginSolidIcon],svg[basil-login-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 19a.75.75 0 0 1 .75-.75h6a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25h-6a.75.75 0 0 1 0-1.5h6c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 18 19.75h-6a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M3.5 13.115a1 1 0 0 0 1 1h4.856q.035.533.086 1.066l.03.305a.718.718 0 0 0 1.025.578a16.8 16.8 0 0 0 4.884-3.539l.03-.031a.72.72 0 0 0 0-.998l-.03-.031a16.8 16.8 0 0 0-4.884-3.539a.718.718 0 0 0-1.025.578l-.03.305q-.051.532-.086 1.066H4.5a1 1 0 0 0-1 1z"></svg:path>`,
})
export class BasilLoginSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
