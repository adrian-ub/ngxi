import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFit24FilledIcon],svg[fluent-document-fit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2zM9 6.5a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V7a2 2 0 0 1 2-2h1.25a.75.75 0 0 1 0 1.5zm0 11h1.25a.75.75 0 0 1 0 1.5H9a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 1.5 0V17a.5.5 0 0 0 .5.5M15.5 7a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5H15a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-1.5 0zM15 17.5a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 1.5 0V17a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentDocumentFit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
