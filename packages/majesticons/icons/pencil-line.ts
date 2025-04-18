import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPencilLineIcon],svg[majesticons-pencil-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.586 3a2 2 0 0 1 2.828 0L21 5.586a2 2 0 0 1 0 2.828l-12 12A2 2 0 0 1 7.586 21H5a2 2 0 0 1-2-2v-2.586A2 2 0 0 1 3.586 15l12-12zm-.172 3L18 8.586L19.586 7L17 4.414L15.414 6zm1.172 4L14 7.414l-9 9V19h2.586l9-9z"></svg:path></svg:g>`,
})
export class MajesticonsPencilLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
