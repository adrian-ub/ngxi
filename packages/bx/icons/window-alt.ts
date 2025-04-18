import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxWindowAltIcon],svg[bx-window-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m0 2l.001 4H4V5zM4 19v-8h16.001l.001 8z"></svg:path><svg:path fill="currentColor" d="M14 6h2v2h-2zm3 0h2v2h-2z"></svg:path>`,
})
export class BxWindowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
