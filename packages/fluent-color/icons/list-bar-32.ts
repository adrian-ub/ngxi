import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorListBar32Icon],svg[fluent-color-list-bar-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorListBar320)" d="M11 28h14.5a2.5 2.5 0 0 0 2.5-2.5v-2a2.5 2.5 0 0 0-2.5-2.5H11l-1 3.5zm0-9h14.5a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5H11l-1 3zm0-8h14.5A2.5 2.5 0 0 0 28 8.5v-2A2.5 2.5 0 0 0 25.5 4H11l-1 3.5z"></svg:path><svg:path fill="url(#fluentColorListBar321)" d="M11 13v6H6.5A2.5 2.5 0 0 1 4 16.5v-1A2.5 2.5 0 0 1 6.5 13zm0-9v7H6.5A2.5 2.5 0 0 1 4 8.5v-2A2.5 2.5 0 0 1 6.5 4zm0 17v7H6.5A2.5 2.5 0 0 1 4 25.5v-2A2.5 2.5 0 0 1 6.5 21z"></svg:path><svg:defs><svg:lineargradient id="fluentColorListBar320" x1="7.3" x2="27.919" y1=".571" y2="26.64" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorListBar321" x1="5.665" x2="16.071" y1="7.19" y2="12.037" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorListBar32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
