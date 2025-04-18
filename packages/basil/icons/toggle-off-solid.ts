import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilToggleOffSolidIcon],svg[basil-toggle-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.346 13.014a6.5 6.5 0 0 1-6.42 5.486H8.074a6.5 6.5 0 1 1 0-13h7.852a6.5 6.5 0 0 1 6.42 7.514M8 15.5a3.496 3.496 0 0 1-3.464-3.868A3.496 3.496 0 0 1 8 8.5a3.496 3.496 0 0 1 3.464 3.868A3.496 3.496 0 0 1 8 15.5" clip-rule="evenodd"></svg:path>`,
})
export class BasilToggleOffSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
