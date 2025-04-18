import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentMargins24FilledIcon],svg[fluent-document-margins-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 2h-7v4.25a.75.75 0 0 1-1.5 0V2h-.75A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22H7v-4.25a.75.75 0 0 1 1.5 0V22h7v-4.25a.75.75 0 0 1 1.5 0V22h.75A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2H17v4.25a.75.75 0 0 1-1.5 0zM7.75 8.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m9.25.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentDocumentMargins24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
