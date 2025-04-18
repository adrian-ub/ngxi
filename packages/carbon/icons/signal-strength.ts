import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSignalStrengthIcon],svg[carbon-signal-strength-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6h2v20h-2zm-8 5h2v15h-2zm-7 5h2v10h-2zm-7 4h2v6H4z"></svg:path>`,
})
export class CarbonSignalStrengthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
