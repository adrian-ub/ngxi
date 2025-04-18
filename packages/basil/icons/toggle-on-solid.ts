import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilToggleOnSolidIcon],svg[basil-toggle-on-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.654 13.014a6.5 6.5 0 0 0 6.42 5.486h7.852a6.5 6.5 0 1 0 0-13H8.074a6.5 6.5 0 0 0-6.42 7.514M16 15.5a3.496 3.496 0 0 0 3.464-3.868A3.496 3.496 0 0 0 16 8.5a3.496 3.496 0 0 0-3.464 3.868A3.496 3.496 0 0 0 16 15.5" clip-rule="evenodd"></svg:path>`,
})
export class BasilToggleOnSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
