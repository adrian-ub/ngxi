import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuFold4FillIcon],svg[ri-menu-fold-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM3 17V7l5 5z"></svg:path>`,
})
export class RiMenuFold4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
