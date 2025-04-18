import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataTrending20Icon],svg[fluent-color-data-trending-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataTrending200)" d="M12 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7.414l-4.293 4.293a1 1 0 0 1-1.414 0L9 10.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0L11 9.586L14.586 6H13a1 1 0 0 1-1-1"></svg:path><svg:path fill="url(#fluentColorDataTrending201)" d="M2.75 2a.75.75 0 0 1 .75.75v12.5c0 .69.56 1.25 1.25 1.25h12.5a.75.75 0 0 1 0 1.5H4.75A2.75 2.75 0 0 1 2 15.25V2.75A.75.75 0 0 1 2.75 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataTrending200" x1="4" x2="22" y1="12.5" y2="6" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset=".445" stop-color="#9C6CFE"></svg:stop><svg:stop offset=".957" stop-color="#E656EB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataTrending201" x1="16.5" x2="2.498" y1="3" y2="23.849" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataTrending20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
