import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeLineIcon],svg[si-north-west-escape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7h.6C16.93 7 18 8.07 18 9.4v6.2c0 1.33-1.07 2.4-2.4 2.4H9.4C8.07 18 7 16.93 7 15.6V15m7-1L6 6m0 0h4M6 6v4"></svg:path>`,
})
export class SiNorthWestEscapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
