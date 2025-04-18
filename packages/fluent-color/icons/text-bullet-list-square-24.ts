import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTextBulletListSquare24Icon],svg[fluent-color-text-bullet-list-square-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorTextBulletListSquare240)" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3z"></svg:path><svg:path fill="url(#fluentColorTextBulletListSquare241)" d="M7.75 9.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 1 0 0 1.5h5.5a.75.75 0 1 0 0-1.5zm-.75 4.5c0 .414.336.75.75.75h5.5a.75.75 0 1 0 0-1.5h-5.5a.75.75 0 0 0-.75.75M8.75 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1 4.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorTextBulletListSquare240" x1="3.643" x2="16.065" y1="6.375" y2="19.281" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTextBulletListSquare241" x1="8.817" x2="15.189" y1="7.981" y2="25.449" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTextBulletListSquare24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
