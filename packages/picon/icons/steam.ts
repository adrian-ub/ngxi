import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSteamIcon],svg[picon-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v1h1V4m2-3L5 2l1 1l1-1M2 7L0 5V3l2 2l2-3l2-2l2 2l-2 2"></svg:path>`,
})
export class PiconSteamIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
