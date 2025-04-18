import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownload48FilledIcon],svg[fluent-arrow-download-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.5 6.5a1.5 1.5 0 0 0-3 0v25.379l-7.94-7.94a1.5 1.5 0 0 0-2.12 2.122l10.5 10.5a1.5 1.5 0 0 0 2.12 0l10.5-10.5a1.5 1.5 0 0 0-2.12-2.122l-7.94 7.94zM10.5 40a1.5 1.5 0 0 0 0 3h27a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class FluentArrowDownload48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
