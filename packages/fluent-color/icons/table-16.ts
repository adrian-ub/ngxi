import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTable16Icon],svg[fluent-color-table-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="12" height="12" x="2" y="2" fill="url(#fluentColorTable160)" rx="3"></svg:rect><svg:path fill="url(#fluentColorTable161)" d="M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2zM6 2v3h4V2zM5 6H2v4h3zm1 4V6h4v4zm-1 1H2v.5A2.5 2.5 0 0 0 4.5 14H5zm1 3h4v-3H6zm5 0v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5zm3-8v4h-3V6zm0-1v-.5A2.5 2.5 0 0 0 11.5 2H11v3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorTable160" x1="2.857" x2="13.143" y1="2.857" y2="13.143" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#98F0B0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTable161" x1="2" x2="14" y1="2" y2="14" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTable16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
