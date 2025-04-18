import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPageTopRight20FilledIcon],svg[fluent-document-page-top-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.753 5.502l-.22 1.5h-1.239l.22-1.5zM5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 2zm4.573 6.444l.064-.442H9.5a.5.5 0 1 1 0-1h.784l.22-1.5H10a.5.5 0 1 1 0-1h.65l.157-1.074a.5.5 0 0 1 .99.145l-.136.93H12.9l.157-1.075a.5.5 0 0 1 .99.145l-.136.93h.589a.5.5 0 0 1 0 1h-.736l-.22 1.5H14a.5.5 0 0 1 0 1h-.602l-.086.586a.5.5 0 0 1-.99-.145l.065-.442h-1.24l-.085.587a.5.5 0 0 1-.99-.145"></svg:path>`,
})
export class FluentDocumentPageTopRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
