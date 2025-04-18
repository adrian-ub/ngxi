import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRechargingIcon],svg[tabler-recharging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.038 4.5a9 9 0 0 0-2.495 2.47m-1.357 3.239a9 9 0 0 0 0 3.508M4.5 16.962a9 9 0 0 0 2.47 2.495m3.239 1.357a9 9 0 0 0 3.5 0m3.253-1.314a9 9 0 0 0 2.495-2.47m1.357-3.239a9 9 0 0 0 0-3.508M19.5 7.038a9 9 0 0 0-2.47-2.495m-3.239-1.357a9 9 0 0 0-3.508-.02M12 8l-2 4h4l-2 4"></svg:path><svg:path d="M12 21a9 9 0 0 0 0-18"></svg:path></svg:g>`,
})
export class TablerRechargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
