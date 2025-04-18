import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretDownSmallOutlineIcon],svg[teenyicons-double-caret-down-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="m9.5 8.5l-2 2l-2-2m4-3l-2 2l-2-2"></svg:path>`,
})
export class TeenyiconsDoubleCaretDownSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
