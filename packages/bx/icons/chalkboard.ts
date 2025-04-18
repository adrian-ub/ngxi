import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChalkboardIcon],svg[bx-chalkboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h4l-1.8 2.4l1.6 1.2l2.7-3.6h3l2.7 3.6l1.6-1.2L16 18h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 16V5h16l.001 11z"></svg:path><svg:path fill="currentColor" d="M6 12h4v2H6z"></svg:path>`,
})
export class BxChalkboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
