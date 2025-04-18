import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRestartBoldDuotoneIcon],svg[solar-restart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.873 7.873a7.25 7.25 0 0 1 7.928-1.563l1.13-1.13a8.75 8.75 0 1 0 4.751 6.727a.75.75 0 0 0-1.488.187a7.25 7.25 0 1 1-12.32-4.22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.721 4.201a.75.75 0 0 0-1.28-.53l-1.51 1.51l-1.13 1.13l-1.603 1.603a.75.75 0 0 0 .53 1.28h4.243a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class SolarRestartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
