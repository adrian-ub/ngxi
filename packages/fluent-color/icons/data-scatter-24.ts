import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataScatter24Icon],svg[fluent-color-data-scatter-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataScatter240)" d="M9 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path><svg:path fill="url(#fluentColorDataScatter241)" d="M15 12a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path><svg:path fill="url(#fluentColorDataScatter242)" d="M14 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path fill="url(#fluentColorDataScatter243)" d="M5 4a1 1 0 0 0-2 0v13.5A3.5 3.5 0 0 0 6.5 21H20a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 1 5 17.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataScatter240" x1="6.75" x2="13.204" y1="6.25" y2="13.884" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter241" x1="18" x2="8.4" y1="18" y2="8.4" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset=".641" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter242" x1="19.5" x2="15.2" y1="8.9" y2="4" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter243" x1="19.313" x2="3.56" y1="4.125" y2="27.58" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataScatter24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
