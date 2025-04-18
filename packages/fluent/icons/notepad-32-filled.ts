import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotepad32FilledIcon],svg[fluent-notepad-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a1 1 0 0 0-1 1v1H8.25A3.25 3.25 0 0 0 5 7.25v18.5A3.25 3.25 0 0 0 8.25 29h9.25v-5.75A3.25 3.25 0 0 1 20.75 20H27V7.25A3.25 3.25 0 0 0 23.75 4H22V3a1 1 0 1 0-2 0v1h-3V3a1 1 0 1 0-2 0v1h-3V3a1 1 0 0 0-1-1m15.414 20H20.75c-.69 0-1.25.56-1.25 1.25v5.616a1 1 0 0 0 .207-.159zM10 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1m1 4h10a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2m-1 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentNotepad32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
