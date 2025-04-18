import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop16RegularIcon],svg[fluent-crop-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.5a.5.5 0 0 0-1 0V4H1.5a.5.5 0 0 0 0 1H4v4.5A2.5 2.5 0 0 0 6.5 12H11v2.5a.5.5 0 0 0 1 0V12h2.5a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 9.5zm6 5V10h1V6.5A2.5 2.5 0 0 0 9.5 4H6v1h3.5A1.5 1.5 0 0 1 11 6.5"></svg:path>`,
})
export class FluentCrop16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
