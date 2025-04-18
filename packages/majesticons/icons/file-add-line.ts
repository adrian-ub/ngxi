import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileAddLineIcon],svg[majesticons-file-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm3 1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7v3a3 3 0 0 0 3 3h3v9a1 1 0 0 1-1 1H6zM18.586 8H16a1 1 0 0 1-1-1V4.414L18.586 8z"></svg:path><svg:path d="M12 11a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsFileAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
