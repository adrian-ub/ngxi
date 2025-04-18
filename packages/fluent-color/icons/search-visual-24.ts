import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSearchVisual24Icon],svg[fluent-color-search-visual-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSearchVisual241)" fill-rule="evenodd" d="M4.5 4a.5.5 0 0 0-.5.5V8a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2H8a1 1 0 0 1 0 2zM15 3a1 1 0 0 1 1-1h3.5A2.5 2.5 0 0 1 22 4.5V8a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H16a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1 1v3.5a.5.5 0 0 0 .5.5H8a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 19.5V16a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3.5a2.5 2.5 0 0 1-2.5 2.5H16a1 1 0 1 1 0-2h3.5a.5.5 0 0 0 .5-.5V16a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorSearchVisual240)" d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6M7.5 8.75a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path><svg:defs><svg:radialgradient id="fluentColorSearchVisual240" cx="0" cy="0" r="1" gradientTransform="rotate(48.013 -4.98 14.305)scale(7.35745 6.30132)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSearchVisual241" x1="1.21" x2="16.893" y1=".325" y2="25.659" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#3DCBFF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSearchVisual24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
