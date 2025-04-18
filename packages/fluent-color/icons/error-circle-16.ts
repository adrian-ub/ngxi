import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorErrorCircle16Icon],svg[fluent-color-error-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorErrorCircle160)" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8"></svg:path><svg:path fill="url(#fluentColorErrorCircle161)" d="M8 10a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-5.5a.5.5 0 0 0-.492.41L7.5 5v3.5l.008.09a.5.5 0 0 0 .984 0L8.5 8.5V5l-.008-.09A.5.5 0 0 0 8 4.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorErrorCircle160" x1="3.875" x2="11.75" y1=".125" y2="15.125" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorErrorCircle161" x1="6" x2="9.213" y1="4.5" y2="11.844" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorErrorCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
