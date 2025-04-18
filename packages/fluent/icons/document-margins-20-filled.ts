import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentMargins20FilledIcon],svg[fluent-document-margins-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2v-3.5a.5.5 0 0 1 1 0V18h6v-3.5a.5.5 0 0 1 1 0V18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2v3.5a.5.5 0 0 1-1 0V2H7v3.5a.5.5 0 0 1-1 0zm.5 11a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5m7 0a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class FluentDocumentMargins20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
