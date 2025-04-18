import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenu2FillIcon],svg[ri-menu-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"></svg:path>`,
})
export class RiMenu2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
