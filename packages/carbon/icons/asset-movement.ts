import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAssetMovementIcon],svg[carbon-asset-movement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h14.2l-2.6 2.6L25 17l5-5l-5-5l-1.4 1.4l2.6 2.6H12zm16 6H14.8l2.6-2.6L16 15l-5 5l5 5l1.4-1.4l-2.6-2.6H28zM22 7V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3H4V4h16v3z"></svg:path>`,
})
export class CarbonAssetMovementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
