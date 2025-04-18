import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentWidth20FilledIcon],svg[fluent-document-width-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h8a2 2 0 0 1 2 2v2.336a1.5 1.5 0 0 0-.98 1.662h-.52a1.5 1.5 0 0 0-.001 3h.522A1.5 1.5 0 0 0 16 12.664V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.336a1.5 1.5 0 0 0 .98-1.662h.52a1.5 1.5 0 0 0 .001-3H4.98A1.5 1.5 0 0 0 4 6.335V4a2 2 0 0 1 2-2M3.876 7.42a.5.5 0 0 1-.047.706L2.831 9H5.5a.5.5 0 1 1 0 1H2.83l1 .874a.5.5 0 0 1-.66.752l-2-1.75a.5.5 0 0 1 0-.752l2-1.75a.5.5 0 0 1 .706.047M17.17 10l-.998.874a.5.5 0 0 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 0 0-.658.752L17.17 9l-2.669-.003a.5.5 0 0 0 0 1z"></svg:path>`,
})
export class FluentDocumentWidth20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
