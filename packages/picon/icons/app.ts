import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAppIcon],svg[picon-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v2h2V6M3 6v2h2V6M0 6v2h2V6M0 3v2h2V3m1 0v2h2V3m1 0v2h2V3M6 0v2h2V0M3 0v2h2V0M0 0v2h2V0"></svg:path>`,
})
export class PiconAppIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
