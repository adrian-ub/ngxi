import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataTrending28Icon],svg[fluent-color-data-trending-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataTrending280)" d="M23.002 9.412V12a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.584L16.5 13.086l-2.293-2.293a1 1 0 0 0-1.414 0l-5.5 5.5a1 1 0 1 0 1.414 1.414l4.793-4.793l2.293 2.293a1 1 0 0 0 1.414 0z"></svg:path><svg:path fill="url(#fluentColorDataTrending281)" d="M4 3a1 1 0 0 1 1 1v17a2 2 0 0 0 2 2h17a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataTrending280" x1="5.615" x2="30.317" y1="17.333" y2="8.069" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset=".445" stop-color="#9C6CFE"></svg:stop><svg:stop offset=".957" stop-color="#E656EB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataTrending281" x1="22.938" x2="3.685" y1="4.375" y2="33.043" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataTrending28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
