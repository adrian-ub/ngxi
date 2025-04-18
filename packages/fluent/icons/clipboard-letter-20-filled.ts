import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClipboardLetter20FilledIcon],svg[fluent-clipboard-letter-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h3.586a1.5 1.5 0 0 1 .04-1.1l3.495-8a1.5 1.5 0 0 1 2.749-.002l.63 1.439V4.5A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2.954 6.3a.5.5 0 0 0-.916 0l-3.496 8a.5.5 0 1 0 .916.4l1.18-2.7h3.721l1.183 2.7a.5.5 0 0 0 .916-.4zm.967 4.7h-2.846l1.422-3.253z"></svg:path>`,
})
export class FluentClipboardLetter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
