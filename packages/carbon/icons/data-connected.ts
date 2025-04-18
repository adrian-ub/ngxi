import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataConnectedIcon],svg[carbon-data-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-6v-2h4V4h-4V2h6z"></svg:path><svg:path fill="currentColor" d="M24.91 19.59a4.51 4.51 0 0 0-2.66-3.24a4.55 4.55 0 0 0-3.5 0a5 5 0 0 0-.64.35l-2.81-2.81a4.53 4.53 0 1 0-1.41 1.41l2.81 2.81a4.48 4.48 0 0 0-.61 3.3a4.51 4.51 0 0 0 2.66 3.24a4.55 4.55 0 0 0 3.5 0a4.51 4.51 0 0 0 2.66-3.24a4.7 4.7 0 0 0 0-1.82M11.5 14a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path><svg:path fill="currentColor" d="M8 30H2V2h6v2H4v24h4z"></svg:path>`,
})
export class CarbonDataConnectedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
