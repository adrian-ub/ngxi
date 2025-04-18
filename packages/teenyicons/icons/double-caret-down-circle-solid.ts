import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretDownCircleSolidIcon],svg[teenyicons-double-caret-down-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M4.793 5.5L7.5 8.207L10.207 5.5L9.5 4.793l-2 2l-2-2zm0 3L7.5 11.207L10.207 8.5L9.5 7.793l-2 2l-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretDownCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
