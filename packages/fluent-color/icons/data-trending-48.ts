import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataTrending48Icon],svg[fluent-color-data-trending-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataTrending480)" d="M38 17.121V23.5a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5h-10a1.5 1.5 0 0 0 0 3h6.379l-8.428 8.428l-4.442-4.038a1.5 1.5 0 0 0-2.037.018l-8.5 8a1.5 1.5 0 1 0 2.056 2.184l7.49-7.049l4.473 4.067a1.5 1.5 0 0 0 2.07-.05z"></svg:path><svg:path fill="url(#fluentColorDataTrending481)" d="M7.5 6A1.5 1.5 0 0 1 9 7.5v28a3.5 3.5 0 0 0 3.5 3.5h28a1.5 1.5 0 0 1 0 3h-28A6.5 6.5 0 0 1 6 35.5v-28A1.5 1.5 0 0 1 7.5 6"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataTrending480" x1="9.769" x2="48.823" y1="29" y2="13.27" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset=".445" stop-color="#9C6CFE"></svg:stop><svg:stop offset=".957" stop-color="#E656EB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataTrending481" x1="38.625" x2="7.121" y1="8.25" y2="55.161" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataTrending48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
