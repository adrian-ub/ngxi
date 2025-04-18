import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPerson20Icon],svg[fluent-color-person-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPerson200)" d="M5.009 11A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18s3.583-.386 4.865-1.203C16.167 15.967 17 14.69 17 13a2 2 0 0 0-2-2z"></svg:path><svg:path fill="url(#fluentColorPerson201)" d="M5.009 11A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18s3.583-.386 4.865-1.203C16.167 15.967 17 14.69 17 13a2 2 0 0 0-2-2z"></svg:path><svg:path fill="url(#fluentColorPerson202)" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path><svg:defs><svg:lineargradient id="fluentColorPerson200" x1="6.329" x2="8.591" y1="11.931" y2="19.153" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPerson201" x1="10" x2="13.167" y1="10.167" y2="22" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#885EDB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#E362F8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPerson202" x1="7.902" x2="11.979" y1="3.063" y2="9.574" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPerson20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
