import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMailReplyAllIcon],svg[fa-mail-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1018v70q0 42-39 59q-13 5-25 5q-27 0-45-19L19 621Q0 602 0 576t19-45L531 19q29-31 70-14q39 17 39 59v69L243 531q-19 19-19 45t19 45zm1152 38q0 58-17 133.5t-38.5 138t-48 125t-40.5 90.5l-20 40q-8 17-28 17q-6 0-9-1q-25-8-23-34q43-400-106-565q-64-71-170.5-110.5T1024 837v251q0 42-39 59q-13 5-25 5q-27 0-45-19L403 621q-19-19-19-45t19-45L915 19q29-31 70-14q39 17 39 59v262q411 28 599 221q169 173 169 509"></svg:path>`,
})
export class FaMailReplyAllIcon {
  readonly viewBox = input("0 0 1792 1600")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
