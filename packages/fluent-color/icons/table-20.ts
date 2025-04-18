import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTable20Icon],svg[fluent-color-table-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="14" height="14" x="3" y="3" fill="url(#fluentColorTable200)" rx="3.5"></svg:rect><svg:path fill="url(#fluentColorTable201)" d="M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4zm0-5V8h4v4zm-1 0H8V8h4zm-4 1h4v4H8zm-1-1V8H3v4zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-1-4v4H8V3zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorTable200" x1="4" x2="16" y1="4" y2="16" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#98F0B0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTable201" x1="3" x2="17" y1="3" y2="17" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTable20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
