import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentText48FilledIcon],svg[fluent-document-text-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 15.25V4H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V19H27.75A3.75 3.75 0 0 1 24 15.25M16.25 23h15.5a1.25 1.25 0 1 1 0 2.5h-15.5a1.25 1.25 0 1 1 0-2.5M15 30.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5h-15.5c-.69 0-1.25-.56-1.25-1.25M16.25 35h15.5a1.25 1.25 0 1 1 0 2.5h-15.5a1.25 1.25 0 1 1 0-2.5M26.5 15.25V4.464L39.462 16.5H27.75c-.69 0-1.25-.56-1.25-1.25"></svg:path>`,
})
export class FluentDocumentText48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
