import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSearchVisual20Icon],svg[fluent-color-search-visual-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSearchVisual201)" fill-rule="evenodd" d="M4.5 4a.5.5 0 0 0-.5.5V7a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2H7a1 1 0 0 1 0 2zM12 3a1 1 0 0 1 1-1h2.5A2.5 2.5 0 0 1 18 4.5V7a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H13a1 1 0 0 1-1-1m-9 9a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5H7a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 15.5V13a1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-2.5 2.5H13a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 .5-.5V13a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorSearchVisual200)" d="M10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:defs><svg:radialgradient id="fluentColorSearchVisual200" cx="0" cy="0" r="1" gradientTransform="matrix(3.375 3.75 -3.2117 2.89053 7.875 7.5)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSearchVisual201" x1="1.368" x2="13.914" y1=".66" y2="20.927" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#3DCBFF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSearchVisual20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
