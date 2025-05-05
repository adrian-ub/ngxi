import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNswitchIcon],svg[picon-nswitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H0V0h3m2 8V2h3v6M1 1v1h1V1m5 5H6v1h1"></svg:path>`,
})
export class PiconNswitchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
