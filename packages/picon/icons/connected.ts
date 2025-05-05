import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconConnectedIcon],svg[picon-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V3h8v2M4.5 1q4.5 3 0 6M4 7q-5-3 0-6"></svg:path>`,
})
export class PiconConnectedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
