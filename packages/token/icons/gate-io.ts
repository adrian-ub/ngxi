import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGateIoIcon],svg[token-gate-io-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.95a4.95 4.95 0 1 1 0-9.9V3a9 9 0 1 0 9 9h-4.05A4.95 4.95 0 0 1 12 16.95"></svg:path><svg:path fill="currentColor" d="M16.95 7.05H12V12h4.95z"></svg:path>`,
})
export class TokenGateIoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
