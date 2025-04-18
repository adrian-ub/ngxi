import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPerson16Icon],svg[fluent-color-person-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPerson160)" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8z"></svg:path><svg:path fill="url(#fluentColorPerson161)" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8z"></svg:path><svg:path fill="url(#fluentColorPerson162)" d="M8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorPerson160" x1="5.378" x2="7.616" y1="8.798" y2="14.754" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPerson161" x1="8" x2="11.164" y1="7.286" y2="17.139" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#885EDB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#E362F8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPerson162" x1="6.558" x2="9.361" y1="2.231" y2="6.707" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPerson16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
