import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignOrderAscendingIcon],svg[tdesign-order-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2.586L23.414 7L22 8.414l-2-2V20h-2V6.414l-2 2L14.586 7zM2 4h11v2H2zm0 7h13v2H2zm0 7h13v2H2z"></svg:path>`,
})
export class TdesignOrderAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
