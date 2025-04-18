import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorContentView16Icon],svg[fluent-color-content-view-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorContentView160)" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5z"></svg:path><svg:path fill="url(#fluentColorContentView161)" d="M4 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M4.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm6 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"></svg:path><svg:defs><svg:lineargradient id="fluentColorContentView160" x1="6.286" x2="10.883" y1="2" y2="13.353" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorContentView161" x1="4" x2="13.609" y1="4" y2="7.266" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorContentView16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
