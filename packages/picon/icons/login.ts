import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLoginIcon],svg[picon-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h5v8H3l1-1h3V1H4M0 3h2V1l3 3l-3 3V5H0"></svg:path>`,
})
export class PiconLoginIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
