import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataPie32Icon],svg[fluent-color-data-pie-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataPie320)" d="M15 7.012a1 1 0 0 0-1.047-1C7.855 6.3 3 11.333 3 17.5C3 23.851 8.149 29 14.5 29c6.168 0 11.201-4.855 11.487-10.953A1 1 0 0 0 24.988 17H17.5a2.5 2.5 0 0 1-2.5-2.5z"></svg:path><svg:path fill="url(#fluentColorDataPie321)" d="M18.047 3.013A1 1 0 0 0 17 4.012V14a1 1 0 0 0 1 1h9.988a1 1 0 0 0 1-1.047C28.71 8.037 23.962 3.29 18.046 3.013"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataPie320" x1="25.988" x2="-10.793" y1="29" y2="-7.781" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset=".641" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataPie321" x1="27.989" x2="19.398" y1="12.802" y2="3.012" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataPie32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
