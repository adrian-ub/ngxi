import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsDocumentIcon],svg[majesticons-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 21H5c-1.126 0-1.926-.491-2.412-1.166A3.23 3.23 0 0 1 2 18V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5h3a1 1 0 0 1 1 1v6c0 .493-.14 1.211-.588 1.834C20.925 20.51 20.125 21 19 21m1-7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
