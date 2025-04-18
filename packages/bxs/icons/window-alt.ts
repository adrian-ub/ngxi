import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsWindowAltIcon],svg[bxs-window-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-3 3h2v2h-2zm-3 0h2v2h-2zM4 19v-9h16.001l.001 9z"></svg:path>`,
})
export class BxsWindowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
