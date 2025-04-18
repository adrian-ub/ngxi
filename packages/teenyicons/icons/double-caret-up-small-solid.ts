import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretUpSmallSolidIcon],svg[teenyicons-double-caret-up-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 3.793L10.207 6.5l-.707.707l-2-2l-2 2l-.707-.707zm0 3L10.207 9.5l-.707.707l-2-2l-2 2l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretUpSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
