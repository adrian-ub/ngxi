import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentHeaderDismiss24FilledIcon],svg[fluent-document-header-dismiss-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.746 2a2.25 2.25 0 0 1 2.245 2.096l.005.154v7.248a6.499 6.499 0 0 0-7.19 10.496H6.25a2.25 2.25 0 0 1-2.244-2.096L4 19.745V4.25a2.25 2.25 0 0 1 2.095-2.245L6.25 2zM8.504 5.004a1.5 1.5 0 0 0 0 2.999h6.998a1.5 1.5 0 0 0 0-3zM23 17.5a5.499 5.499 0 1 1-10.997 0A5.499 5.499 0 0 1 23 17.5m-7.145-2.353a.5.5 0 1 0-.707.707l1.646 1.646l-1.646 1.646a.5.5 0 0 0 .707.707l1.646-1.646l1.646 1.646a.5.5 0 0 0 .707-.707L18.208 17.5l1.646-1.646a.5.5 0 0 0-.707-.707l-1.646 1.646z"></svg:path>`,
})
export class FluentDocumentHeaderDismiss24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
