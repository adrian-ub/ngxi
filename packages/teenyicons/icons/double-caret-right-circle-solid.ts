import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretRightCircleSolidIcon],svg[teenyicons-double-caret-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m5.5-2.707L8.207 7.5L5.5 10.207L4.793 9.5l2-2l-2-2zm3 0L11.207 7.5L8.5 10.207L7.793 9.5l2-2l-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretRightCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
