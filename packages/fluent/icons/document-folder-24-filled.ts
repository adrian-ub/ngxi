import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFolder24FilledIcon],svg[fluent-document-folder-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 6.75l-.003-2.123A2.25 2.25 0 0 1 20 6.75v7.5a3.2 3.2 0 0 0-1.25-.25h-.25zM4 4.25v3A3.2 3.2 0 0 1 5.25 7h2.846a3.25 3.25 0 0 1 2.381 1.039L16.014 14H17.5V4.25A2.25 2.25 0 0 0 15.25 2h-9A2.25 2.25 0 0 0 4 4.25M5.25 8A2.25 2.25 0 0 0 3 10.25v8.5A3.25 3.25 0 0 0 6.25 22h11.5A3.25 3.25 0 0 0 21 18.75v-1.5A2.25 2.25 0 0 0 18.75 15h-2.846a.75.75 0 0 1-.55-.24l-5.61-6.04A2.25 2.25 0 0 0 8.097 8z"></svg:path>`,
})
export class FluentDocumentFolder24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
