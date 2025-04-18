import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentLandscape20RegularIcon],svg[fluent-document-landscape-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 18 9.414zm-2 1a1 1 0 0 0 1-1v-4h-3.5A1.5 1.5 0 0 1 12 8.5V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-3-9.793V8.5a.5.5 0 0 0 .5.5h3.293z"></svg:path>`,
})
export class FluentDocumentLandscape20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
