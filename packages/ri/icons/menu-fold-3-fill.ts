import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuFold3FillIcon],svg[ri-menu-fold-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM8 17V7l-5 5z"></svg:path>`,
})
export class RiMenuFold3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
