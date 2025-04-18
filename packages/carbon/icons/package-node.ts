import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPackageNodeIcon],svg[carbon-package-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28H4c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v4h12c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2M4 12v14h24V12zm0-2h10V6H4z"></svg:path>`,
})
export class CarbonPackageNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
