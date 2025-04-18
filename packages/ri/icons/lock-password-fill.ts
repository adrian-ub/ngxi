import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLockPasswordFillIcon],svg[ri-lock-password-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-2 0V7a4 4 0 0 0-8 0v1zm-5 6v2h2v-2zm-4 0v2h2v-2zm8 0v2h2v-2z"></svg:path>`,
})
export class RiLockPasswordFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
