import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookOpen20Icon],svg[fluent-color-book-open-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookOpen200)" d="M8 17c.818 0 1.544-.393 2-1l1-6l-1-5.5C9.544 3.893 8.818 3 8 3H3.5A1.5 1.5 0 0 0 2 4.5v11A1.5 1.5 0 0 0 3.5 17z"></svg:path><svg:path fill="url(#fluentColorBookOpen201)" d="M12 17a2.5 2.5 0 0 1-2-1V4.5C10 4 11 3 12 3h4.5A1.5 1.5 0 0 1 18 4.5v11a1.5 1.5 0 0 1-1.5 1.5z"></svg:path><svg:path fill="url(#fluentColorBookOpen202)" d="M3.5 3.5A.5.5 0 0 1 4 3h4.5A1.5 1.5 0 0 1 10 4.5l.5 4.5l-.5 4.5a2 2 0 0 1-2 2H4a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill="url(#fluentColorBookOpen203)" d="M16.5 3.5A.5.5 0 0 0 16 3h-4.5A1.5 1.5 0 0 0 10 4.5v9a2 2 0 0 0 2 2h4a.5.5 0 0 0 .5-.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookOpen200" x1="5.105" x2="7.757" y1="5.619" y2="20.534" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen201" x1="16.5" x2="13.252" y1="3.5" y2="20.539" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset=".908" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen202" x1="4" x2="18.51" y1="5.5" y2="11.055" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9DEAFF"></svg:stop><svg:stop offset="1" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen203" x1="16.51" x2="5" y1="3.73" y2="8" gradientUnits="userSpaceOnUse"><svg:stop offset=".229" stop-color="#9DEAFF"></svg:stop><svg:stop offset=".853" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookOpen20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
