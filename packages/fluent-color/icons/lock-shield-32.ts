import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLockShield32Icon],svg[fluent-color-lock-shield-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLockShield320)" d="M22 8v1.5h-2V8a4 4 0 0 0-8 0v1.5h-2V8a6 6 0 0 1 12 0"></svg:path><svg:path fill="url(#fluentColorLockShield321)" d="M28 13.5A4.5 4.5 0 0 0 23.5 9h-15A4.5 4.5 0 0 0 4 13.5v12A4.5 4.5 0 0 0 8.5 30h15a4.5 4.5 0 0 0 4.5-4.5z"></svg:path><svg:path fill="url(#fluentColorLockShield323)" d="M18 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="url(#fluentColorLockShield324)" d="M28 13.5A4.5 4.5 0 0 0 23.5 9h-15A4.5 4.5 0 0 0 4 13.5v12A4.5 4.5 0 0 0 8.5 30h15a4.5 4.5 0 0 0 4.5-4.5z"></svg:path><svg:path fill="url(#fluentColorLockShield322)" d="M25.207 16.265c.943.888 2.755 2.3 4.983 2.589c.444.058.81.389.81.803v3.87c0 5.204-5.17 7.093-6.288 7.44a.7.7 0 0 1-.423 0C23.171 30.62 18 28.731 18 23.527v-3.87c0-.414.366-.745.81-.803c2.228-.29 4.04-1.701 4.983-2.589c.375-.353 1.038-.353 1.414 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorLockShield320" x1="12.571" x2="20.529" y1=".567" y2="15.023" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC205"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockShield321" x1="29.714" x2="7.813" y1="31.313" y2="10.917" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockShield322" x1="20.438" x2="31.661" y1="16" y2="29.957" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#62BE55"></svg:stop><svg:stop offset="1" stop-color="#1E794A"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLockShield323" cx="0" cy="0" r="1" gradientTransform="matrix(-1.99995 -7.00001 9.71256 -2.77495 17 22)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorLockShield324" cx="0" cy="0" r="1" gradientTransform="rotate(156.371 9.177 15.293)scale(8.42026 9.22588)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset=".99" stop-color="#EB4824" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLockShield32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
