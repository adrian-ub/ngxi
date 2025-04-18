import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaret12FilledIcon],svg[fluent-caret-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M9.005 3.962c0-.89-1.077-1.337-1.707-.707L3.255 7.298c-.63.63-.184 1.707.707 1.707h3.543a1.5 1.5 0 0 0 1.5-1.5V3.962z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentCaret12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
