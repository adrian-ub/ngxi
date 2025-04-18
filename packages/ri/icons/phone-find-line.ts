import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPhoneFindLineIcon],svg[ri-phone-find-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v8h-2V4H7v16h4v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21l-1.413 1.415l-2.212-2.21A4 4 0 1 1 15 12m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiPhoneFindLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
