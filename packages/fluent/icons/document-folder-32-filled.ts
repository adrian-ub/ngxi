import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFolder32FilledIcon],svg[fluent-document-folder-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 2A3.25 3.25 0 0 0 5 5.25v4.416A4.8 4.8 0 0 1 6.25 9.5h4.818c1.26 0 2.468.5 3.359 1.391l6.608 6.609H23.5V5.25A3.25 3.25 0 0 0 20.25 2zM27 17.666a4.8 4.8 0 0 0-1.25-.166H25V5.75a3.25 3.25 0 0 1 2 3zM3 14.25A3.25 3.25 0 0 1 6.25 11h4.818a3.25 3.25 0 0 1 2.298.952l6.682 6.682c.235.234.553.366.884.366h4.818A3.25 3.25 0 0 1 29 22.25v3.25a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 25.5z"></svg:path>`,
})
export class FluentDocumentFolder32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
