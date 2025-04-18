import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPageNumber20FilledIcon],svg[fluent-document-page-number-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.753 9.502l-.22 1.5H9.295l.22-1.5zM5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 2zm2.572 10.444l.065-.442H7.5a.5.5 0 1 1 0-1h.784l.22-1.5H8a.5.5 0 0 1 0-1h.65l.157-1.074a.5.5 0 0 1 .99.145l-.137.93h1.24l.157-1.075a.5.5 0 0 1 .99.145l-.136.93h.589a.5.5 0 0 1 0 1h-.736l-.22 1.5H12a.5.5 0 0 1 0 1h-.602l-.086.586a.5.5 0 1 1-.99-.145l.065-.442h-1.24l-.085.587a.5.5 0 1 1-.99-.145"></svg:path>`,
})
export class FluentDocumentPageNumber20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
