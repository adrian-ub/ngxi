import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataScatter20Icon],svg[fluent-color-data-scatter-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="7.5" cy="7.5" r="2.5" fill="url(#fluentColorDataScatter200)"></svg:circle><svg:circle cx="12.5" cy="12.5" r="2.5" fill="url(#fluentColorDataScatter201)"></svg:circle><svg:circle cx="14.5" cy="5.5" r="2.5" fill="url(#fluentColorDataScatter202)"></svg:circle><svg:path fill="url(#fluentColorDataScatter203)" d="M2.75 2a.75.75 0 0 1 .75.75v12.5c0 .69.56 1.25 1.25 1.25h12.5a.75.75 0 0 1 0 1.5H4.75A2.75 2.75 0 0 1 2 15.25V2.75A.75.75 0 0 1 2.75 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataScatter200" x1="5.625" x2="11.003" y1="5.208" y2="11.57" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter201" x1="15" x2="7" y1="15" y2="7" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset=".641" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter202" x1="16.583" x2="13" y1="7.083" y2="3" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter203" x1="16.5" x2="2.498" y1="3" y2="23.849" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataScatter20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
