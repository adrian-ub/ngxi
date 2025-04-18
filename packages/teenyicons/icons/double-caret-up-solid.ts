import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretUpSolidIcon],svg[teenyicons-double-caret-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.5.265l7.207 7.761l-.733.68L7.5 1.736L1.026 8.707l-.733-.68zm0 5.5l7.207 7.761l-.733.68L7.5 7.236l-6.474 6.972l-.733-.68z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretUpSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
