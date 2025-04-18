import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentAdd16RegularIcon],svg[fluent-document-add-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a2 2 0 0 0-2 2v2.207a5.5 5.5 0 0 1 1-.185V3a1 1 0 0 1 1-1h3v2.5A1.5 1.5 0 0 0 10.5 6H13v7a1 1 0 0 1-1 1H9.743a5.5 5.5 0 0 1-1.08 1H12a2 2 0 0 0 2-2V5.414a1.5 1.5 0 0 0-.44-1.06l-2.914-2.915A1.5 1.5 0 0 0 9.586 1zm6.793 4H10.5a.5.5 0 0 1-.5-.5V2.207zM10 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V10H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H6z"></svg:path>`,
})
export class FluentDocumentAdd16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
