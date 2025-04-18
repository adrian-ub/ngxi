import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiInboxIcon],svg[oi-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.19 0C.08 0 0 .08 0 .19v7.63c0 .11.08.19.19.19h7.63c.11 0 .19-.08.19-.19V.19c0-.11-.08-.19-.19-.19zM1 2h6v3H6L5 6H3L2 5H1z"></svg:path>`,
})
export class OiInboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
