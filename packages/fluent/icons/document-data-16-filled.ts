import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentData16FilledIcon],svg[fluent-document-data-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 5h3.25L9 1.25V4.5a.5.5 0 0 0 .5.5m0 1A1.5 1.5 0 0 1 8 4.5V1H4.5A1.5 1.5 0 0 0 3 2.5v11A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V6zM6 12.5a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 1 0zm2.5 0a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zm2.5 0a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0z"></svg:path>`,
})
export class FluentDocumentData16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
