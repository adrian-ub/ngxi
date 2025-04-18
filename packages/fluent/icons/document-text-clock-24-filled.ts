import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentTextClock24FilledIcon],svg[fluent-document-text-clock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81a6.5 6.5 0 0 0 1.734-3.5h2.826a.75.75 0 0 0 0-1.5h-2.769a6.5 6.5 0 0 0-.22-1.25h2.989a.75.75 0 0 0 0-1.5h-3.62a6.5 6.5 0 0 0-.94-1.25h4.56a.75.75 0 0 0 0-1.5H9.004A6.5 6.5 0 0 0 6.5 11a6.5 6.5 0 0 0-2.5.498V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-1.5 15a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M6.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentDocumentTextClock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
