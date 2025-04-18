import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRadioactiveOffIcon],svg[tabler-radioactive-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.118 14.127q-.275.273-.618.473l3 5.19a9 9 0 0 0 1.856-1.423m1.68-2.32A9 9 0 0 0 21 12h-5m-2.5-2.6l3-5.19a9 9 0 0 0-8.536-.25M10.5 14.6l-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6M3 3l18 18"></svg:path>`,
})
export class TablerRadioactiveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
