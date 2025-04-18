import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaret12RegularIcon],svg[fluent-caret-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M7.298 3.255c.63-.63 1.707-.184 1.707.707v3.543a1.5 1.5 0 0 1-1.5 1.5H3.962c-.89 0-1.337-1.077-.707-1.707l4.043-4.043zm.707.707L3.962 8.005h3.543a.5.5 0 0 0 .5-.5V3.962z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentCaret12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
