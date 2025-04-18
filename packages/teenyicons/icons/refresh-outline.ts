import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRefreshOutlineIcon],svg[teenyicons-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 14.5A7 7 0 0 1 3.17 2M7.5.5A7 7 0 0 1 11.83 13m-.33-3v3.5H15M0 1.5h3.5V5"></svg:path>`,
})
export class TeenyiconsRefreshOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
