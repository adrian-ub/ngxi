import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentTarget20FilledIcon],svg[fluent-document-target-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H8.329a4.5 4.5 0 0 0 1.422-2.021a1.5 1.5 0 0 0 0-2.958a4.51 4.51 0 0 0-2.772-2.772a1.5 1.5 0 0 0-2.958 0L4 10.256V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM6 10.5a.5.5 0 0 0-1 0v.535A3.5 3.5 0 0 0 2.035 14H1.5a.5.5 0 0 0 0 1h.535A3.5 3.5 0 0 0 5 17.965v.535a.5.5 0 0 0 1 0v-.535A3.5 3.5 0 0 0 8.965 15H9.5a.5.5 0 0 0 0-1h-.535A3.5 3.5 0 0 0 6 11.035zm2 4a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentDocumentTarget20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
