import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProtonCalendarIcon],svg[arcticons-proton-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsProtonCalendar0" fill="none" stroke="currentColor" d="M8.535 7.862A4.035 4.035 0 0 0 4.5 11.897v24.206a4.035 4.035 0 0 0 4.035 4.035h20.62v-9.862a4.483 4.483 0 0 1 4.483-4.483H43.5V11.897a4.035 4.035 0 0 0-4.035-4.035Z"></svg:path></svg:defs><svg:use href="#arcticonsProtonCalendar0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsProtonCalendar0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.207 25.793V15.82a3.14 3.14 0 0 0-3.138-3.138H4.5m17.707 27.456V38.26a4.04 4.04 0 0 1 .964-2.617l7.105-8.338v.005m8.242 3.095l1.759-.957m0 0v7.035m-5.235-3.517a1.76 1.76 0 0 0 1.759-1.758h0a1.76 1.76 0 0 0-1.759-1.758"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.042 36.483a1.76 1.76 0 0 0 1.759-1.758h0a1.76 1.76 0 0 0-1.759-1.759m-2.663 2.924a2.95 2.95 0 0 0 2.17.594h.493m-2.664-6.448a2.95 2.95 0 0 1 2.173-.588l.492.002m-1.332 3.516h1.331"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.155 40.138h10.31a4.035 4.035 0 0 0 4.035-4.035v-10.31"></svg:path>`,
})
export class ArcticonsProtonCalendarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
