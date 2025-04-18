import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPhoneLockLineIcon],svg[ri-phone-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v7h-2V4H7v16h5v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 10a3 3 0 0 1 3 3v1h1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v2h4zm-2-4c-.508 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiPhoneLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
