import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentEndnote24FilledIcon],svg[fluent-document-endnote-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v6a2 2 0 0 0 2 2h6v10.5a1.5 1.5 0 0 1-1.5 1.5H13v-8a2 2 0 0 0-2-2H4V3.5A1.5 1.5 0 0 1 5.5 2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-6.25 15a.75.75 0 0 0-1.5 0V21a.75.75 0 0 0 1.5 0zm0-2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2.75-1.5a.75.75 0 0 1-.75.75H2.5v7h1.25a.75.75 0 0 1 0 1.5H2.5A1.5 1.5 0 0 1 1 21.5v-7A1.5 1.5 0 0 1 2.5 13h1.25a.75.75 0 0 1 .75.75m4.75.75a.75.75 0 0 1 0-1.5h1.25a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9.25a.75.75 0 0 1 0-1.5h1.25v-7z"></svg:path>`,
})
export class FluentDocumentEndnote24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
