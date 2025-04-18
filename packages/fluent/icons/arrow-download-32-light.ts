import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownload32LightIcon],svg[fluent-arrow-download-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a.5.5 0 0 1 .5.5v18.293l6.646-6.647a.5.5 0 0 1 .708.708l-7.5 7.5a.5.5 0 0 1-.708 0l-7.5-7.5a.5.5 0 0 1 .708-.708l6.646 6.647V3.5A.5.5 0 0 1 16 3M6.5 28.5a.5.5 0 0 1 0-1h19a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class FluentArrowDownload32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
