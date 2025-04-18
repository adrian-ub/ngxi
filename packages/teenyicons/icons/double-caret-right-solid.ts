import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretRightSolidIcon],svg[teenyicons-double-caret-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.474.293L9.234 7.5l-7.76 7.207l-.68-.733L7.764 7.5L.793 1.026zm5.5 0l7.76 7.207l-7.76 7.207l-.68-.733l6.97-6.474l-6.971-6.474z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretRightSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
