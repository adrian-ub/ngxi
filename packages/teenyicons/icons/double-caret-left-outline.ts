import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretLeftOutlineIcon],svg[teenyicons-double-caret-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="M8 1L1 7.5L8 14m5.5-13l-7 6.5l7 6.5"></svg:path>`,
})
export class TeenyiconsDoubleCaretLeftOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
