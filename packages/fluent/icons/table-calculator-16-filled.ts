import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCalculator16FilledIcon],svg[fluent-table-calculator-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2H5v3H2zM6 5V2h4v3zM5 6H2v4h3zm1 0v4h2V7.5c0-.563.186-1.082.5-1.5zm2 8v-3H6v3zm-6-3h3v3h-.5A2.5 2.5 0 0 1 2 11.5zm12-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3zm-3.5 1A1.5 1.5 0 0 0 9 7.5v7a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 6zm-.5 4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM10 12.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM10 14.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM10 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class FluentTableCalculator16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
