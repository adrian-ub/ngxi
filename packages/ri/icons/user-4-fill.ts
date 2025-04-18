import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUser4FillIcon],svg[ri-user-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14v2H5zm7-2a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class RiUser4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
