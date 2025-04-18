import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPeople32Icon],svg[fluent-color-people-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPeople320)" d="M27.593 18A2.406 2.406 0 0 1 30 20.406S30 25 23 25h.002c-7 0-7-4.594-7-4.594A2.406 2.406 0 0 1 18.408 18z"></svg:path><svg:path fill="url(#fluentColorPeople325)" fill-opacity=".5" d="M27.593 18A2.406 2.406 0 0 1 30 20.406S30 25 23 25h.002c-7 0-7-4.594-7-4.594A2.406 2.406 0 0 1 18.408 18z"></svg:path><svg:path fill="url(#fluentColorPeople321)" d="M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorPeople322)" d="M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorPeople323)" d="M23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path fill="url(#fluentColorPeople324)" d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path><svg:defs><svg:lineargradient id="fluentColorPeople320" x1="19.331" x2="21.593" y1="18.93" y2="26.153" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPeople321" x1="6.043" x2="9.088" y1="19.196" y2="28.383" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#BD96FF"></svg:stop><svg:stop offset="1" stop-color="#9C6CFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPeople322" x1="10.5" x2="14.776" y1="16.929" y2="32.021" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#885EDB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#E362F8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPeople323" x1="20.902" x2="24.98" y1="9.063" y2="15.574" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPeople324" x1="7.616" x2="13.222" y1="6.462" y2="15.414" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#BD96FF"></svg:stop><svg:stop offset="1" stop-color="#9C6CFE"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorPeople325" cx="0" cy="0" r="1" gradientTransform="matrix(9.21155 -1.02083 .91051 8.21605 14.227 21.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".392" stop-color="#3B148A"></svg:stop><svg:stop offset="1" stop-color="#3B148A" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPeople32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
