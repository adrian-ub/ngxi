import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuFold3LineIcon],svg[ri-menu-fold-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM9.01 8.814L7.596 7.4L3 11.996l4.596 4.596l1.414-1.414l-3.182-3.182z"></svg:path>`,
})
export class RiMenuFold3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
