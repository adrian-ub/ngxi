import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentTarget32FilledIcon],svg[fluent-document-target-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v7a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3H11.103a7.02 7.02 0 0 0 3.938-4a2.5 2.5 0 0 0 0-5A7.02 7.02 0 0 0 11 16.96a2.5 2.5 0 0 0-5 0a7 7 0 0 0-1 .476V5a3 3 0 0 1 3-3zm2 .117V9a1 1 0 0 0 1 1h6.883a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M9.5 17a1 1 0 1 0-2 0v1.09a5.51 5.51 0 0 0-4.41 4.41H2a1 1 0 1 0 0 2h1.09a5.51 5.51 0 0 0 4.41 4.41V30a1 1 0 1 0 2 0v-1.09a5.51 5.51 0 0 0 4.41-4.41H15a1 1 0 1 0 0-2h-1.09a5.51 5.51 0 0 0-4.41-4.41zM5 23.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentDocumentTarget32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
