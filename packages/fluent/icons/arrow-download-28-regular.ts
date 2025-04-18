import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownload28RegularIcon],svg[fluent-arrow-download-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 3.75a.75.75 0 0 0-1.5 0v14.69l-4.97-4.97a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 1 0-1.06-1.06l-4.97 4.97zm-9 19.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentArrowDownload28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
