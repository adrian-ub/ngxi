import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEqualizerIcon],svg[carbon-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h8v2H2zm0-4h8v2H2zm10 4h8v2h-8zm0-4h8v2h-8zM2 20h8v2H2zm10 0h8v2h-8zM2 16h8v2H2zm10 0h8v2h-8zm0-4h8v2h-8zm0-4h8v2h-8zm0-4h8v2h-8zm10 24h8v2h-8zm0-4h8v2h-8z"></svg:path>`,
})
export class CarbonEqualizerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
