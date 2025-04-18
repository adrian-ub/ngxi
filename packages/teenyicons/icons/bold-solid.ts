import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBoldSolidIcon],svg[teenyicons-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.58c0-.32.26-.58.58-.58H8.5a3.5 3.5 0 0 1 2.21 6.215A3.501 3.501 0 0 1 9.5 14H3.59a.59.59 0 0 1-.59-.59zM4 8v5h5.5a2.5 2.5 0 0 0 0-5zm0-1h4.5a2.5 2.5 0 0 0 0-5H4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBoldSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
