import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretDownSmallSolidIcon],svg[teenyicons-double-caret-down-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.5 4.793l2 2l2-2l.707.707L7.5 8.207L4.793 5.5zm0 3l2 2l2-2l.707.707L7.5 11.207L4.793 8.5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretDownSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
