import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentMultiple20FilledIcon],svg[fluent-document-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v11A1.5 1.5 0 0 0 5.5 16h8a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 9 6.5m1 0V2.25L14.75 7H10.5a.5.5 0 0 1-.5-.5M17 9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3H6a1 1 0 0 0 1 1h6.06A3.94 3.94 0 0 0 17 14.06z"></svg:path>`,
})
export class FluentDocumentMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
