import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentCopy20FilledIcon],svg[fluent-document-copy-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6.5V2H7.5A1.5 1.5 0 0 0 6 3.5v11A1.5 1.5 0 0 0 7.5 16h8a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 11 6.5m1 0V2.25L16.75 7H12.5a.5.5 0 0 1-.5-.5M4 5a1 1 0 0 1 1-1v10.5A2.5 2.5 0 0 0 7.5 17H15a1 1 0 0 1-1 1H7.548A3.55 3.55 0 0 1 4 14.452z"></svg:path>`,
})
export class FluentDocumentCopy20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
