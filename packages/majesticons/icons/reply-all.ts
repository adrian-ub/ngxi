import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsReplyAllIcon],svg[majesticons-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M13.383 4.076A1 1 0 0 1 14 5v3.028c1.855.106 3.365.513 4.586 1.158a7.46 7.46 0 0 1 3.087 3.014C22.966 14.518 23 17.27 23 19a1 1 0 1 1-2 0c0-.622-.218-1.081-.597-1.46c-.404-.403-1.021-.741-1.832-1c-1.344-.428-3.02-.574-4.571-.565V19a1 1 0 0 1-1.707.707l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.09-.217zM10 5v.586l-5.707 5.707a.997.997 0 0 0 0 1.414L10 18.414V19a1 1 0 0 1-1.707.707l-7-7a1 1 0 0 1 0-1.414l7-7A1 1 0 0 1 10 5zm9 15h-.008h.016H19z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
