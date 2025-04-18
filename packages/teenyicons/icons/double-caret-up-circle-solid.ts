import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretUpCircleSolidIcon],svg[teenyicons-double-caret-up-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 15a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m2.707-5.5L7.5 6.793L4.793 9.5l.707.707l2-2l2 2zm0-3L7.5 3.793L4.793 6.5l.707.707l2-2l2 2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDoubleCaretUpCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
