import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataScatter32Icon],svg[fluent-color-data-scatter-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataScatter320)" d="M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path><svg:path fill="url(#fluentColorDataScatter321)" d="M20 16a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path><svg:path fill="url(#fluentColorDataScatter322)" d="M23 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path><svg:path fill="url(#fluentColorDataScatter323)" d="M4.25 3c.69 0 1.25.56 1.25 1.25v20.5c0 .966.784 1.75 1.75 1.75h20.5a1.25 1.25 0 1 1 0 2.5H7.25A4.25 4.25 0 0 1 3 24.75V4.25C3 3.56 3.56 3 4.25 3"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataScatter320" x1="9" x2="17.605" y1="8.333" y2="18.513" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter321" x1="24" x2="11.2" y1="24" y2="11.2" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset=".641" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter322" x1="26.333" x2="20.6" y1="11.533" y2="5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataScatter323" x1="26.563" x2="3.809" y1="4.625" y2="38.505" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataScatter32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
