import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAppsList20Icon],svg[fluent-color-apps-list-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAppsList200)" fill-rule="evenodd" d="M8 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorAppsList201)" d="M2 15.5A1.5 1.5 0 0 1 3.5 14h1A1.5 1.5 0 0 1 6 15.5v1A1.5 1.5 0 0 1 4.5 18h-1A1.5 1.5 0 0 1 2 16.5zm0-6A1.5 1.5 0 0 1 3.5 8h1A1.5 1.5 0 0 1 6 9.5v1A1.5 1.5 0 0 1 4.5 12h-1A1.5 1.5 0 0 1 2 10.5zm0-6A1.5 1.5 0 0 1 3.5 2h1A1.5 1.5 0 0 1 6 3.5v1A1.5 1.5 0 0 1 4.5 6h-1A1.5 1.5 0 0 1 2 4.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorAppsList200" x1="6.5" x2="17" y1="1" y2="17" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAppsList201" x1="2.951" x2="4.99" y1="4.127" y2="17.147" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAppsList20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
