import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiScriptIcon],svg[oi-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0c-.55 0-1 .45-1 1v5.5c0 .28-.22.5-.5.5S1 6.78 1 6.5V5H0v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V4H3V1.5c0-.28.22-.5.5-.5s.5.22.5.5V3h4V1c0-.55-.45-1-1-1z"></svg:path>`,
})
export class OiScriptIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
