import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownload48RegularIcon],svg[fluent-arrow-download-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.25 6.25a1.25 1.25 0 1 0-2.5 0v26.482l-8.366-8.366a1.25 1.25 0 0 0-1.768 1.768l10.5 10.5a1.25 1.25 0 0 0 1.768 0l10.5-10.5a1.25 1.25 0 0 0-1.768-1.768l-8.366 8.366zm-14 34.25a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentArrowDownload48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
