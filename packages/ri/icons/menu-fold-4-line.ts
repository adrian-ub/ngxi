import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuFold4LineIcon],svg[ri-menu-fold-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM1.99 8.814L3.402 7.4L8 11.996l-4.597 4.596l-1.414-1.414l3.182-3.182z"></svg:path>`,
})
export class RiMenuFold4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
