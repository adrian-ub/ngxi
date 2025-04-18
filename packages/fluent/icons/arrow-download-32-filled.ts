import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownload32FilledIcon],svg[fluent-arrow-download-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 4.25a1.25 1.25 0 1 0-2.5 0v15.482l-4.616-4.616a1.25 1.25 0 0 0-1.768 1.768l6.75 6.75a1.25 1.25 0 0 0 1.768 0l6.75-6.75a1.25 1.25 0 0 0-1.768-1.768l-4.616 4.616zm-11 22.25a1.25 1.25 0 1 0 0 2.5h19.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentArrowDownload32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
