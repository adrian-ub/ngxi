import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWarning16Icon],svg[fluent-color-warning-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWarning160)" d="M9.092 2.638a1.25 1.25 0 0 0-2.182 0L2.157 11.14A1.25 1.25 0 0 0 3.247 13h9.504a1.25 1.25 0 0 0 1.091-1.86z"></svg:path><svg:path fill="url(#fluentColorWarning161)" d="M8.75 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7.5 8V5.5a.5.5 0 0 1 1 0V8a.5.5 0 0 1-1 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorWarning160" x1="3.872" x2="10.725" y1=".279" y2="14.525" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWarning161" x1="6" x2="8.466" y1="5" y2="11.575" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWarning16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
