import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLockClosed16Icon],svg[fluent-color-lock-closed-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLockClosed160)" d="M11 3.5v1h-1v-1a2 2 0 1 0-4 0v1H5v-1a3 3 0 0 1 6 0"></svg:path><svg:path fill="url(#fluentColorLockClosed161)" d="M14 6.5A2.5 2.5 0 0 0 11.5 4h-7A2.5 2.5 0 0 0 2 6.5v5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5z"></svg:path><svg:path fill="url(#fluentColorLockClosed162)" d="M9 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorLockClosed160" x1="6.286" x2="10.672" y1="-.264" y2="7.206" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC205"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockClosed161" x1="14.857" x2="4.404" y1="14.625" y2="4.404" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLockClosed162" cx="0" cy="0" r="1" gradientTransform="matrix(-.99997 -3.5 4.85626 -1.38747 8.5 10)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLockClosed16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
