import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemInterfaceIcon],svg[tdesign-system-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 7v11h16V9zm16-2V4H4v3zM6 11h2.004v2.004H6zm4 0h2.004v2.004H10zm4 0h2.004v2.004H14z"></svg:path>`,
})
export class TdesignSystemInterfaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
