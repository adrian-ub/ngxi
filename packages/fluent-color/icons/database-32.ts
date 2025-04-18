import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDatabase32Icon],svg[fluent-color-database-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDatabase320)" d="M16 10.124c3.256 0 6.3-.596 8.606-1.644c.823-.374 1.668-.865 2.394-1.48v18c0 2.761-4.925 5-11 5S5 27.761 5 25V7c.726.615 1.571 1.106 2.394 1.48C9.7 9.528 12.744 10.123 16 10.123"></svg:path><svg:path fill="url(#fluentColorDatabase321)" fill-opacity=".7" d="M16 10.124c3.256 0 6.3-.596 8.606-1.644c.823-.374 1.668-.865 2.394-1.48v18c0 2.761-4.925 5-11 5S5 27.761 5 25V7c.726.615 1.571 1.106 2.394 1.48C9.7 9.528 12.744 10.123 16 10.123"></svg:path><svg:path fill="url(#fluentColorDatabase322)" d="M5 7c0-2.761 4.925-5 11-5s11 2.239 11 5s-4.925 5-11 5S5 9.761 5 7"></svg:path><svg:defs><svg:lineargradient id="fluentColorDatabase320" x1="10.194" x2="22.985" y1="1.819" y2="27.512" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#29C3FF"></svg:stop><svg:stop offset="1" stop-color="#367AF2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDatabase321" x1="19.405" x2="24.153" y1="9.825" y2="32.392" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDatabase322" x1="35.25" x2="24.303" y1="17" y2="-4.917" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#58AAFE"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDatabase32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
