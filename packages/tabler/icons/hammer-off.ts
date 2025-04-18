import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHammerOffIcon],svg[tabler-hammer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.698 10.72L4.03 17.418a2.09 2.09 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l6.696-6.676m5.011.993l2-2a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0l-2 2M3 3l18 18"></svg:path>`,
})
export class TablerHammerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
