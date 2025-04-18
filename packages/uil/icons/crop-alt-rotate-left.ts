import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCropAltRotateLeftIcon],svg[uil-crop-alt-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.71 16.29a1 1 0 0 0-1.42 1.42l.3.29H8a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0v2a5 5 0 0 0 5 5h.59l-.3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 0-1.42ZM20 12h-1V5a1 1 0 0 0-1-1h-7V3a1 1 0 0 0-2 0v1H8a1 1 0 0 0 0 2h1v7a1 1 0 0 0 1 1h7v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m-3 0h-6V6h6Z"></svg:path>`,
})
export class UilCropAltRotateLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
