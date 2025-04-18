import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAdjustVerticalAltOutlineIcon],svg[teenyicons-adjust-vertical-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 0v8.5m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0V15m8-15v2.5m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0V15"></svg:path>`,
})
export class TeenyiconsAdjustVerticalAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
