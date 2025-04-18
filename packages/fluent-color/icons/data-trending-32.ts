import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataTrending32Icon],svg[fluent-color-data-trending-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataTrending320)" d="M18.996 7.75c0-.69.56-1.25 1.25-1.25h7c.69 0 1.25.56 1.25 1.25v7a1.25 1.25 0 0 1-2.5 0v-3.978l-6.612 6.612a1.25 1.25 0 0 1-1.768 0L14.5 14.268l-5.366 5.366a1.25 1.25 0 0 1-1.768-1.768l6.25-6.25a1.25 1.25 0 0 1 1.768 0l3.116 3.116L24.232 9h-3.986c-.69 0-1.25-.56-1.25-1.25"></svg:path><svg:path fill="url(#fluentColorDataTrending321)" d="M4 3a1 1 0 0 1 1 1v20.5A2.5 2.5 0 0 0 7.5 27H28a1 1 0 1 1 0 2H7.5A4.5 4.5 0 0 1 3 24.5V4a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataTrending320" x1="5.346" x2="34.389" y1="19.25" y2="7.689" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset=".445" stop-color="#9C6CFE"></svg:stop><svg:stop offset=".957" stop-color="#E656EB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataTrending321" x1="26.563" x2="3.809" y1="4.625" y2="38.505" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataTrending32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
