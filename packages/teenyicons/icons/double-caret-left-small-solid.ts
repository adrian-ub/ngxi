import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretLeftSmallSolidIcon],svg[teenyicons-double-caret-left-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.207 5.5l-2 2l2 2l-.707.707L3.793 7.5L6.5 4.793zm3 0l-2 2l2 2l-.707.707L6.793 7.5L9.5 4.793z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretLeftSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
