import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPageNumber20RegularIcon],svg[fluent-document-page-number-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.072 12.442a.5.5 0 1 0 .99.145L9.148 12h1.24l-.066.442a.5.5 0 1 0 .99.145l.086-.587H12a.5.5 0 0 0 0-1h-.456l.22-1.5h.736a.5.5 0 0 0 0-1h-.59l.137-.93a.5.5 0 0 0-.99-.145L10.9 8.5H9.66l.137-.93a.5.5 0 0 0-.99-.145L8.65 8.5H8a.5.5 0 0 0 0 1h.503l-.22 1.5H7.5a.5.5 0 1 0 0 1h.637zM10.753 9.5l-.22 1.5H9.295l.22-1.5zM6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentDocumentPageNumber20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
