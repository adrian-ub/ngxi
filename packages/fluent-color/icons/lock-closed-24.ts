import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLockClosed24Icon],svg[fluent-color-lock-closed-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLockClosed240)" d="M12 2a4 4 0 0 0-4 4v1.5h1.5V6a2.5 2.5 0 0 1 5 0v1.5H16V6a4 4 0 0 0-4-4"></svg:path><svg:path fill="url(#fluentColorLockClosed241)" d="M20 10.25A3.25 3.25 0 0 0 16.75 7h-9.5A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75z"></svg:path><svg:path fill="url(#fluentColorLockClosed242)" d="M12 15.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:defs><svg:lineargradient id="fluentColorLockClosed240" x1="9.714" x2="15.835" y1=".949" y2="11.057" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC205"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockClosed241" x1="21.143" x2="6.542" y1="21.875" y2="8.278" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLockClosed242" cx="0" cy="0" r="1" gradientTransform="matrix(-1.49996 -5.25 7.28439 -2.0812 12.75 15.5)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLockClosed24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
