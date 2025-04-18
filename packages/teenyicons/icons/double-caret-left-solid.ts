import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretLeftSolidIcon],svg[teenyicons-double-caret-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.707 1.026L1.735 7.5l6.972 6.474l-.68.733L.264 7.5L8.026.293zm5.5 0L7.235 7.5l6.972 6.474l-.68.733L5.764 7.5L13.526.293z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretLeftSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
