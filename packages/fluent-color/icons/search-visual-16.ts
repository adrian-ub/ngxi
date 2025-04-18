import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSearchVisual16Icon],svg[fluent-color-search-visual-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSearchVisual161)" fill-rule="evenodd" d="M3.5 3a.5.5 0 0 0-.5.5V5a1 1 0 0 1-2 0V3.5A2.5 2.5 0 0 1 3.5 1H5a1 1 0 0 1 0 2zM10 2a1 1 0 0 1 1-1h1.5A2.5 2.5 0 0 1 15 3.5V5a1 1 0 1 1-2 0V3.5a.5.5 0 0 0-.5-.5H11a1 1 0 0 1-1-1m-8 8a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .5.5H5a1 1 0 1 1 0 2H3.5A2.5 2.5 0 0 1 1 12.5V11a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 1-2.5 2.5H11a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5V11a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorSearchVisual160)" d="M8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4M5.25 6a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path><svg:defs><svg:radialgradient id="fluentColorSearchVisual160" cx="0" cy="0" r="1" gradientTransform="matrix(3.09374 3.4375 -2.94407 2.64964 6.22 5.875)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSearchVisual161" x1=".447" x2="11.425" y1="-.172" y2="17.561" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#3DCBFF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSearchVisual16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
