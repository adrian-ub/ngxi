import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentProhibited20FilledIcon],svg[fluent-document-prohibited-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H9.743A5.5 5.5 0 0 0 4 9.207V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zm-8.682 9.068a4.5 4.5 0 1 0 6.364 6.364a4.5 4.5 0 0 0-6.364-6.364m5.657 5.657a3.5 3.5 0 0 1-4.571.328l4.9-4.9a3.5 3.5 0 0 1-.33 4.572m-.379-5.278l-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9"></svg:path>`,
})
export class FluentDocumentProhibited20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
