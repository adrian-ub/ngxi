import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMessageTypingIcon],svg[typcn-message-typing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H5C3.35 6 2 7.35 2 9v7c0 1.65 1.35 3 3 3h1v3l3-3h9c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3m1 10c0 .542-.458 1-1 1H5c-.542 0-1-.458-1-1V9c0-.542.458-1 1-1h13c.542 0 1 .458 1 1zM7 14.5a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 14.5m0-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4.5 3a2 2 0 1 1 .001-4.001A2 2 0 0 1 11.5 14.5m0-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4.5 3a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14.5m0-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class TypcnMessageTypingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
