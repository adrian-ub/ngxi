import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRootListIcon],svg[tdesign-root-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm2 3.5h12v2H6zm0 4h8v2H6z"></svg:path>`,
})
export class TdesignRootListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
