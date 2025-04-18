import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLockClosed48Icon],svg[fluent-color-lock-closed-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLockClosed480)" d="M16 12v3h2.5v-3a5.5 5.5 0 1 1 11 0v3H32v-3a8 8 0 1 0-16 0"></svg:path><svg:path fill="url(#fluentColorLockClosed481)" d="M40 20.25A6.25 6.25 0 0 0 33.75 14h-19.5A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h19.5A6.25 6.25 0 0 0 40 35.75z"></svg:path><svg:path fill="url(#fluentColorLockClosed482)" d="M27 28a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorLockClosed480" x1="19.429" x2="31.67" y1="1.899" y2="22.113" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC205"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockClosed481" x1="42.286" x2="13.084" y1="43.75" y2="16.556" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLockClosed482" cx="0" cy="0" r="1" gradientTransform="rotate(-105.945 24.442 5.883)scale(10.9202 15.1517)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLockClosed48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
