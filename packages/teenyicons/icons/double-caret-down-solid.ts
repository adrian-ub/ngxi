import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretDownSolidIcon],svg[teenyicons-double-caret-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.707 1.474L7.5 9.234L.293 1.475l.733-.68L7.5 7.764L13.974.793zm-13.68 4.82l6.473 6.97l6.474-6.972l.733.68L7.5 14.736L.293 6.974z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretDownSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
