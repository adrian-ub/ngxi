import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpload32FilledIcon],svg[fluent-arrow-upload-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 2a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5zm9.634 4.866a1.25 1.25 0 0 0-1.768 0l-6.75 6.75a1.25 1.25 0 0 0 1.768 1.768l4.616-4.616V28.75a1.25 1.25 0 1 0 2.5 0V10.768l4.616 4.616a1.25 1.25 0 0 0 1.768-1.768z"></svg:path>`,
})
export class FluentArrowUpload32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
