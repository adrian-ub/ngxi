import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHistory20Icon],svg[fluent-color-history-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHistory200)" d="M10 5.5a1 1 0 0 1 1 1V9h1.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1"></svg:path><svg:path fill="url(#fluentColorHistory201)" d="M6.031 5.5A6 6 0 1 1 4 10a1 1 0 0 0-2 0a8 8 0 1 0 2.5-5.81V3a1 1 0 0 0-2 0v3A1.5 1.5 0 0 0 4 7.5h3a1 1 0 0 0 0-2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorHistory200" x1="8.156" x2="20.094" y1="16.45" y2="11.414" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D373FC"></svg:stop><svg:stop offset="1" stop-color="#6D37CD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHistory201" x1="2" x2="6.295" y1="2.941" y2="20.923" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHistory20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
