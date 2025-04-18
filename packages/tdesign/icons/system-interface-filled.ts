import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemInterfaceFilledIcon],svg[tdesign-system-interface-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v5h20zM2 9v13h20V9zm3 3h2.004v2.004H5zm4 0h2.004v2.004H9zm4 0h2.004v2.004H13z"></svg:path>`,
})
export class TdesignSystemInterfaceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
