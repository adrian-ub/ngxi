import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBook48Icon],svg[fluent-color-book-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBook480)" d="M10 37h29.5s-.5.6-.5 3s.5 3 .5 3H15a5 5 0 0 1-5-5z"></svg:path><svg:path fill="url(#fluentColorBook481)" d="M14.25 4A6.25 6.25 0 0 0 8 10.25v27.5A6.25 6.25 0 0 0 14.25 44h24.5a1.25 1.25 0 1 0 0-2.5h-24.5a3.75 3.75 0 0 1-3.675-3H37.75A2.25 2.25 0 0 0 40 36.25v-26A6.25 6.25 0 0 0 33.75 4z"></svg:path><svg:path fill="url(#fluentColorBook482)" d="M16.25 10A2.25 2.25 0 0 0 14 12.25v4.5A2.25 2.25 0 0 0 16.25 19h15.5A2.25 2.25 0 0 0 34 16.75v-4.5A2.25 2.25 0 0 0 31.75 10z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBook480" x1="23.87" x2="23.87" y1="41.8" y2="37" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9DEAFF"></svg:stop><svg:stop offset=".716" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook481" x1="19.041" x2="25.195" y1="11.484" y2="54.565" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook482" x1="20.898" x2="31.713" y1="8.456" y2="23.413" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBook48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
