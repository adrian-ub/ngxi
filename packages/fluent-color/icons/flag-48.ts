import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFlag48Icon],svg[fluent-color-flag-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFlag480)" d="M8.75 44c-.69 0-1.25-.56-1.25-1.25V31H10v11.75c0 .69-.56 1.25-1.25 1.25"></svg:path><svg:path fill="url(#fluentColorFlag481)" d="M7.5 7.25C7.5 6.56 8.06 6 8.75 6h32.5a1.25 1.25 0 0 1 1.007 1.99L33.801 19.5l8.456 11.51A1.25 1.25 0 0 1 41.25 33H9a1.5 1.5 0 0 1-1.5-1.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorFlag480" x1="10" x2="8.966" y1="48.179" y2="31.477" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#63686E"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFlag481" x1="-.156" x2="15.051" y1="-1.714" y2="34.467" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFlag48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
