import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticBoldDuotoneIcon],svg[solar-mouse-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarMouseMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
