import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimLockIcon],svg[uim-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1M9 9h6V7a3 3 0 0 0-6 0Z" opacity=".5"></svg:path><svg:rect width="16" height="13" x="4" y="9" fill="currentColor" rx="3"></svg:rect>`,
})
export class UimLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
