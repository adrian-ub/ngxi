import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFit16FilledIcon],svg[fluent-document-fit-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 3a1 1 0 0 1 1-1h1a.5.5 0 0 1 0 1H6v1a.5.5 0 0 1-1 0zm0 8v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 0 1H6a1 1 0 0 1-1-1m5-9a1 1 0 0 1 1 1v1a.5.5 0 0 1-1 0V4H9a.5.5 0 0 1 0-1zm1 9a1 1 0 0 1-1 1H9a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0z"></svg:path>`,
})
export class FluentDocumentFit16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
