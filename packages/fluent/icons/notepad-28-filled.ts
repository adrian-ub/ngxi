import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotepad28FilledIcon],svg[fluent-notepad-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a.75.75 0 0 1 .75.75V4h3.75V2.75a.75.75 0 0 1 1.5 0V4h.75A2.25 2.25 0 0 1 23 6.25v12.246h-4.754a2.25 2.25 0 0 0-2.25 2.25V25.5H6.75a2.25 2.25 0 0 1-2.25-2.25v-17A2.25 2.25 0 0 1 6.75 4H8V2.75a.75.75 0 0 1 1.5 0V4h3.75V2.75A.75.75 0 0 1 14 2m-6 8.25c0 .414.336.75.75.75h10a.75.75 0 0 0 0-1.5h-10a.75.75 0 0 0-.75.75m0 4.5c0 .414.336.75.75.75h10a.75.75 0 0 0 0-1.5h-10a.75.75 0 0 0-.75.75m0 4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75m9.496 5.81l5.065-5.064h-4.315a.75.75 0 0 0-.75.75z"></svg:path>`,
})
export class FluentNotepad28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
