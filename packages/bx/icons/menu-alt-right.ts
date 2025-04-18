import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMenuAltRightIcon],svg[bx-menu-alt-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></svg:path>`,
})
export class BxMenuAltRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
