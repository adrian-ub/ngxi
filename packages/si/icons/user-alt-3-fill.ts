import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siUserAlt3FillIcon],svg[si-user-alt-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 7a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M5 16.4A1.4 1.4 0 0 1 6.4 15h11.2a1.4 1.4 0 0 1 1.4 1.4V21a1 1 0 1 0 2 0v-4.6a3.4 3.4 0 0 0-3.4-3.4H6.4A3.4 3.4 0 0 0 3 16.4V21a1 1 0 1 0 2 0z"></svg:path>`,
})
export class SiUserAlt3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
