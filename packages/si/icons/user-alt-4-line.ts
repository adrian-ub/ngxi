import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siUserAlt4LineIcon],svg[si-user-alt-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 7a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"></svg:path>`,
})
export class SiUserAlt4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
