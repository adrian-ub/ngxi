import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLockClosed32Icon],svg[fluent-color-lock-closed-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLockClosed320)" d="M22 8v1.5h-2V8a4 4 0 0 0-8 0v1.5h-2V8a6 6 0 0 1 12 0"></svg:path><svg:path fill="url(#fluentColorLockClosed321)" d="M28 13.5A4.5 4.5 0 0 0 23.5 9h-15A4.5 4.5 0 0 0 4 13.5v12A4.5 4.5 0 0 0 8.5 30h15a4.5 4.5 0 0 0 4.5-4.5z"></svg:path><svg:path fill="url(#fluentColorLockClosed322)" d="M18 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorLockClosed320" x1="12.571" x2="20.529" y1=".567" y2="15.023" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC205"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockClosed321" x1="29.714" x2="7.813" y1="31.313" y2="10.917" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLockClosed322" cx="0" cy="0" r="1" gradientTransform="matrix(-1.99995 -7.00001 9.71256 -2.77495 17 22)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLockClosed32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
