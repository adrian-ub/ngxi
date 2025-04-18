import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop16FilledIcon],svg[fluent-crop-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.75a.75.75 0 0 0-1.5 0V3.5H1.75a.75.75 0 0 0 0 1.5H3.5v4.5a3 3 0 0 0 3 3H11v1.75a.75.75 0 0 0 1.5 0V12.5h1.75a.75.75 0 0 0 0-1.5H6.5A1.5 1.5 0 0 1 5 9.5zm6 4.75V10h1.5V6.5a3 3 0 0 0-3-3H6V5h3.5A1.5 1.5 0 0 1 11 6.5"></svg:path>`,
})
export class FluentCrop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
