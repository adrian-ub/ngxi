import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemBlockedIcon],svg[tdesign-system-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v9.5h-2V3H3v13h8.5v2H1zm17.5 13a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18.5 14m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M13 17.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M2.25 21h9.25v2H2.25z"></svg:path>`,
})
export class TdesignSystemBlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
