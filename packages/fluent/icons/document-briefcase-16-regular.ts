import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentBriefcase16RegularIcon],svg[fluent-document-briefcase-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l2.915 2.914A1.5 1.5 0 0 1 14 5.414V13a2 2 0 0 1-2 2h-1.5c.219-.29.375-.63.45-1H12a1 1 0 0 0 1-1V6h-2.5A1.5 1.5 0 0 1 9 4.5V2H6a1 1 0 0 0-1 1v2h-.5q-.257 0-.5.05zm6.5 2h2.293L10 2.207V4.5a.5.5 0 0 0 .5.5M3 7.5V8h-.5A1.5 1.5 0 0 0 1 9.5v4A1.5 1.5 0 0 0 2.5 15h6a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 8.5 8H8v-.5A1.5 1.5 0 0 0 6.5 6h-2A1.5 1.5 0 0 0 3 7.5M4.5 7h2a.5.5 0 0 1 .5.5V8H4v-.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentDocumentBriefcase16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
