import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentCatchUp20FilledIcon],svg[fluent-document-catch-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5V13h1.5a1.5 1.5 0 0 0 1.342-.83l.034-.068l1.24 2.975a1.5 1.5 0 0 0 2.726.094L11.927 13h.573a1.5 1.5 0 0 0 0-3H11a1.5 1.5 0 0 0-1.342.83l-.034.068l-1.24-2.975a1.5 1.5 0 0 0-2.726-.094L4.573 10H4V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM7.462 8.308a.5.5 0 0 0-.91-.032L5.192 11H3.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .447-.276L6.96 9.7l2.08 4.991a.5.5 0 0 0 .908.032L11.31 12h1.19a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.447.276L9.54 13.3z"></svg:path>`,
})
export class FluentDocumentCatchUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
