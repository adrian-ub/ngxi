import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFormMultiple20RegularIcon],svg[fluent-form-multiple-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m3-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path><svg:path d="M3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v6a1.99 1.99 0 0 0 .984 1.723C5.282 13.9 5.629 14 6 14h6a1.99 1.99 0 0 0 1.723-.984C13.9 12.718 14 12.371 14 12V6a2 2 0 0 0-2-2z"></svg:path><svg:path d="M8 17a3 3 0 0 1-2.236-1H12.5a3.5 3.5 0 0 0 3.5-3.5V5.764c.614.55 1 1.348 1 2.236v4.5a4.5 4.5 0 0 1-4.5 4.5z"></svg:path></svg:g>`,
})
export class FluentFormMultiple20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
