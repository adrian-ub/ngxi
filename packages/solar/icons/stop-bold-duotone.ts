import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStopBoldDuotoneIcon],svg[solar-stop-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535l17.072-17.07C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.071 0 8.536-1.464C22 19.07 22 16.714 22 12s0-7.07-1.464-8.535z" opacity=".5"></svg:path>`,
})
export class SolarStopBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
