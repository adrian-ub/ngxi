import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMessagesIcon],svg[typcn-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-3c0-1.65-1.35-3-3-3H3C1.35 4 0 5.35 0 7v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3M3 15c-.542 0-1-.458-1-1V7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1H9.5A2.5 2.5 0 0 0 7 10.5V15zm19 2c0 .542-.458 1-1 1H9c-.542 0-1-.458-1-1v-6.5C8 9.673 8.673 9 9.5 9H21c.542 0 1 .458 1 1z"></svg:path>`,
})
export class TypcnMessagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
