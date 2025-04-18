import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookOpen16Icon],svg[fluent-color-book-open-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookOpen160)" d="M1 3.75C1 2.784 1.784 2 2.75 2H6c.788 0 1.499.331 2 .863L8.813 8L8 13.137A2.74 2.74 0 0 1 6 14H2.75A1.75 1.75 0 0 1 1 12.25z"></svg:path><svg:path fill="url(#fluentColorBookOpen161)" d="M15 3.75A1.75 1.75 0 0 0 13.25 2H10c-.788 0-1.499.331-2 .863L7.188 8L8 13.137A2.74 2.74 0 0 0 10 14h3.25A1.75 1.75 0 0 0 15 12.25z"></svg:path><svg:path fill="url(#fluentColorBookOpen162)" d="M2 2.5a.5.5 0 0 1 .5-.5H7a1 1 0 0 1 1 1l.266 4L8 11a2 2 0 0 1-2 2H2.5a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill="url(#fluentColorBookOpen163)" d="M14 2.5a.5.5 0 0 0-.5-.5H9a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h3.5a.5.5 0 0 0 .5-.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookOpen160" x1="3.696" x2="5.941" y1="4.245" y2="17.039" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen161" x1="13.535" x2="11.071" y1="2.429" y2="17.152" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset=".908" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen162" x1="1.143" x2="19.489" y1="1.577" y2="9.496" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B6EFFF"></svg:stop><svg:stop offset=".851" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen163" x1="13.625" x2="-.388" y1="2.688" y2="5.442" gradientUnits="userSpaceOnUse"><svg:stop offset=".123" stop-color="#9DEAFF"></svg:stop><svg:stop offset=".616" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookOpen16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
