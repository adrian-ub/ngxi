import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentEndnote20FilledIcon],svg[fluent-document-endnote-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H11v-6a2 2 0 0 0-2-2H4V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM3.5 11a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 1 17.5v-5A1.5 1.5 0 0 1 2.5 11zm4 7a.5.5 0 0 0 0 1h1a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 8.5 11h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5zm-1.501-3.5a.5.5 0 0 0-1 0l.001 3a.5.5 0 1 0 1 0zm.001-2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentDocumentEndnote20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
