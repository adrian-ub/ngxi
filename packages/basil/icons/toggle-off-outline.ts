import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilToggleOffOutlineIcon],svg[basil-toggle-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15.5a3.496 3.496 0 0 1-3.464-3.868A3.496 3.496 0 0 1 8 8.5a3.496 3.496 0 0 1 3.464 3.868A3.496 3.496 0 0 1 8 15.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.074 18.75h7.852a6.75 6.75 0 0 0 0-13.5H8.074a6.75 6.75 0 0 0 0 13.5m0-1.5a5.25 5.25 0 1 1 0-10.5h7.852a5.25 5.25 0 1 1 0 10.5z" clip-rule="evenodd"></svg:path>`,
})
export class BasilToggleOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
