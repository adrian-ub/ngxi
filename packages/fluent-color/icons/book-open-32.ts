import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookOpen32Icon],svg[fluent-color-book-open-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookOpen320)" d="M2 6.25A2.25 2.25 0 0 1 4.25 4h8c1.524 0 2.88.718 3.75 1.834L17 16l-1 10.166A4.74 4.74 0 0 1 12.25 28h-8A2.25 2.25 0 0 1 2 25.75z"></svg:path><svg:path fill="url(#fluentColorBookOpen321)" d="M30 6.25A2.25 2.25 0 0 0 27.75 4h-8c-1.524 0-2.88.718-3.75 1.834L15 16l1 10.166A4.74 4.74 0 0 0 19.75 28h8A2.25 2.25 0 0 0 30 25.75z"></svg:path><svg:path fill="url(#fluentColorBookOpen322)" d="M4 5a1 1 0 0 1 1-1h9.5A1.5 1.5 0 0 1 16 5.5l.5 8.5l-.5 8.5a3.5 3.5 0 0 1-3.5 3.5H5a1 1 0 0 1-1-1z"></svg:path><svg:path fill="url(#fluentColorBookOpen323)" d="M28 5a1 1 0 0 0-1-1h-9.5A1.5 1.5 0 0 0 16 5.5v17a3.5 3.5 0 0 0 3.5 3.5H27a1 1 0 0 0 1-1z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookOpen320" x1="7.175" x2="11.843" y1="8.491" y2="34.013" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen321" x1="24.825" x2="20.157" y1="8.491" y2="34.013" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen322" x1="2.286" x2="38.978" y1="3.154" y2="18.992" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B6EFFF"></svg:stop><svg:stop offset=".851" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen323" x1="27.25" x2="-.775" y1="5.375" y2="10.885" gradientUnits="userSpaceOnUse"><svg:stop offset=".123" stop-color="#9DEAFF"></svg:stop><svg:stop offset=".616" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookOpen32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
