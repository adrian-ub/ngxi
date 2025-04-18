import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonConnectTargetIcon],svg[carbon-connect-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2h2v28h-2zm-8 8l-1.414 1.414L22.172 15H11.899a5 5 0 1 0 0 2h10.273l-3.586 3.586L20 22l6-6zM7 19a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonConnectTargetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
