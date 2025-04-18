import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxWindowOpenIcon],svg[bx-window-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h5v-2H4V7h16v12h-5v2h5c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2"></svg:path><svg:path fill="currentColor" d="M13 21v-5h3l-4-5l-4 5h3v5z"></svg:path>`,
})
export class BxWindowOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
