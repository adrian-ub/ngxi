import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLogIcon],svg[tdesign-system-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 8v10h16V10zm16-2V4H4v4zM5 5h2.004v2.004H5zm1 7h12v2H6zm0 4h6v2H6z"></svg:path>`,
})
export class TdesignSystemLogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
