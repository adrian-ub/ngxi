import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotepad12FilledIcon],svg[fluent-notepad-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2a2 2 0 0 1 2 2v3H7.5A1.5 1.5 0 0 0 6 8.5V11H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m0 2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5M4.5 9a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M7 8.5a.5.5 0 0 1 .5-.5H10l-3 3z"></svg:path>`,
})
export class FluentNotepad12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
