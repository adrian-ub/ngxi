import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuIcon],svg[tdesign-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v5.5h16V4zm16 7.5H4V20h16zM5.996 6H8v2h-.004v.004h-2zM10 6h8v2h-8z"></svg:path>`,
})
export class TdesignMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
