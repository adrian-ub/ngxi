import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableChecker20FilledIcon],svg[fluent-table-checker-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3zm5 5H8v4h4zm1 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13zM8 4h6.5A1.5 1.5 0 0 1 16 5.5V12h1V5.5A2.5 2.5 0 0 0 14.5 3H8zM5.5 16H12v1H5.5A2.5 2.5 0 0 1 3 14.5V8h1v6.5A1.5 1.5 0 0 0 5.5 16"></svg:path>`,
})
export class FluentTableChecker20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
