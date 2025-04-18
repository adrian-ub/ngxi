import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHistory24Icon],svg[fluent-color-history-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHistory240)" d="M12 7a1 1 0 0 1 1 1v3h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></svg:path><svg:path fill="url(#fluentColorHistory241)" d="M12 5a7 7 0 1 1-6.946 6.124a1 1 0 1 0-1.984-.248Q3 11.43 3 12a9 9 0 1 0 4-7.484V4a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-.608A6.97 6.97 0 0 1 12 5"></svg:path><svg:defs><svg:lineargradient id="fluentColorHistory240" x1="10.156" x2="22.094" y1="18.45" y2="13.414" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D373FC"></svg:stop><svg:stop offset="1" stop-color="#6D37CD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHistory241" x1="3" x2="7.831" y1="4.059" y2="24.288" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHistory24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
