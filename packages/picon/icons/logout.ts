import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLogoutIcon],svg[picon-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0H0v8h4L3 7H1V1h2m0 2h2V1l3 3l-3 3V5H3"></svg:path>`,
})
export class PiconLogoutIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
