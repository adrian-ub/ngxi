import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSwitchIcon],svg[picon-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v1H6v2L3 5.5L6 3v2M2 2H0v1h2v2l3-2.5L2 0"></svg:path>`,
})
export class PiconSwitchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
