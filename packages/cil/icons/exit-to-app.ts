import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilExitToAppIcon],svg[cil-exit-to-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 16H40a24.03 24.03 0 0 0-24 24v160h32V48h416v416H48V304H16v168a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V40a24.03 24.03 0 0 0-24-24"></svg:path><svg:path fill="currentColor" d="m209.377 363.306l22.627 22.627L366.627 251.31L232.004 116.687l-22.627 22.626l95.997 95.998H16v32h289.372z"></svg:path>`,
})
export class CilExitToAppIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
