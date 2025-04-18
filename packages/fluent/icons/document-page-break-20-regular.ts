import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPageBreak20RegularIcon],svg[fluent-document-page-break-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.5V6c0 .828-.679 1.5-1.5 1.5H5.488A1.495 1.495 0 0 1 4 6V2.5c0-.276.222-.5.496-.5s.496.224.496.5V6c0 .275.222.5.496.5H14.5c.274 0 .5-.225.5-.5V2.5c0-.276.226-.5.5-.5s.5.224.5.5m-13 7a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1zm3.2 0a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1zm2.7.5a.5.5 0 0 1 .5-.5h1.2a.5.5 0 0 1 0 1H9.4a.5.5 0 0 1-.5-.5m3.7-.5a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1zm2.7.5a.5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1h-1.2a.5.5 0 0 1-.5-.5m.7 4v3.5c0 .276-.226.5-.5.5a.5.5 0 0 1-.5-.5V14c0-.275-.226-.5-.5-.5H5.488a.5.5 0 0 0-.496.5v3.5c0 .276-.222.5-.496.5A.5.5 0 0 1 4 17.5V14c0-.828.667-1.5 1.488-1.5H14.5c.821 0 1.5.672 1.5 1.5"></svg:path>`,
})
export class FluentDocumentPageBreak20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
