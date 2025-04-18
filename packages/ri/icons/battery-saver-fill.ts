import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBatterySaverFillIcon],svg[ri-battery-saver-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 7h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class RiBatterySaverFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
