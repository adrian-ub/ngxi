import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSlackOutlineIcon],svg[teenyicons-slack-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 7.5V6A1.5 1.5 0 1 1 12 7.5zm0 0h-3m3 0V2a1.5 1.5 0 1 0-3 0v5.5m0 0v-3m0 3H2a1.5 1.5 0 1 1 0-3h5.5m0 3H13a1.5 1.5 0 0 1 0 3H7.5m0-3v3m0-3h-3m3 0V13a1.5 1.5 0 0 1-3 0V7.5m3-3V3A1.5 1.5 0 1 0 6 4.5zm0 6H9A1.5 1.5 0 1 1 7.5 12zm-3-3V9A1.5 1.5 0 1 1 3 7.5z"></svg:path>`,
})
export class TeenyiconsSlackOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
