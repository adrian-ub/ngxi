import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFlag16Icon],svg[fluent-color-flag-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFlag160)" d="M3.5 14a.5.5 0 0 1-.5-.5v-4h1v4a.5.5 0 0 1-.5.5"></svg:path><svg:path fill="url(#fluentColorFlag161)" d="M13 10H3.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .407.79L11.114 6l2.293 3.21A.5.5 0 0 1 13 10"></svg:path><svg:defs><svg:lineargradient id="fluentColorFlag160" x1="4" x2="3.69" y1="15.446" y2="9.659" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#63686E"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFlag161" x1=".703" x2="5.169" y1="-.286" y2="10.475" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFlag16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
