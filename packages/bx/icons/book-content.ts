import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBookContentIcon],svg[bx-book-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 19V5h7v14zm9 0V5h7l.001 14z"></svg:path><svg:path fill="currentColor" d="M15 7h3v2h-3zm0 4h3v2h-3z"></svg:path>`,
})
export class BxBookContentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
