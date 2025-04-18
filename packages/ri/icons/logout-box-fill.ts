import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLogoutBoxFillIcon],svg[ri-logout-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m4 9V8l-5 4l5 4v-3h6v-2z"></svg:path>`,
})
export class RiLogoutBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
