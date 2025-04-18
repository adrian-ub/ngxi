import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siUserAlt2FillIcon],svg[si-user-alt-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 6a4.75 4.75 0 0 1 9.5 0v1a4.75 4.75 0 1 1-9.5 0zm3.85 7C6.086 13 2 17.018 2 22a1 1 0 1 0 2 0c0-3.854 3.167-7 7.1-7h1.8c3.933 0 7.1 3.146 7.1 7a1 1 0 1 0 2 0c0-4.982-4.086-9-9.1-9z"></svg:path>`,
})
export class SiUserAlt2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
