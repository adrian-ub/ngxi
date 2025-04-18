import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentQueue24FilledIcon],svg[fluent-document-queue-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5h-4.75a1.75 1.75 0 0 1-1.75-1.75V2zm1.75 3h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5M8 8.75A.75.75 0 0 1 8.75 8h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 8 8.75M8.75 11h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5M14 2.002L19 7h-4.75a.25.25 0 0 1-.25-.25zM2.75 15a.75.75 0 0 1 .75.75v1.75a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-1.75a.75.75 0 0 1 1.5 0v1.75a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-1.75a.75.75 0 0 1 .75-.75M12.5 2H14Z"></svg:path>`,
})
export class FluentDocumentQueue24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
