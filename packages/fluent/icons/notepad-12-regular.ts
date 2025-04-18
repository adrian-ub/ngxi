import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotepad12RegularIcon],svg[fluent-notepad-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5M4.5 7a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zM4 8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5m0-7a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2a2 2 0 0 1 2 2v4l-3 3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7 10V8.5a.5.5 0 0 1 .5-.5H9V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></svg:path>`,
})
export class FluentNotepad12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
