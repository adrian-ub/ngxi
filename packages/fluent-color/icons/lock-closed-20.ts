import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLockClosed20Icon],svg[fluent-color-lock-closed-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLockClosed200)" fill-rule="evenodd" d="M10 3a2 2 0 0 0-2 2v1.734H6.5V5a3.5 3.5 0 1 1 7 0v1.734H12V5a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorLockClosed201)" d="M6 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorLockClosed202)" d="M10 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorLockClosed200" x1="8" x2="14.039" y1=".5" y2="9.669" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC205"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockClosed201" x1="18" x2="5.469" y1="18.75" y2="6.838" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLockClosed202" cx="0" cy="0" r="1" gradientTransform="matrix(-.99997 -3.5 4.85626 -1.38747 10.5 13)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLockClosed20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
