import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBatteryIcon],svg[gg-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6v6z"></svg:path><svg:path fill-rule="evenodd" d="M18 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a3 3 0 0 0-3-3m0 2H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
