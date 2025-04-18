import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCropAltRotateRightIcon],svg[uil-crop-alt-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-.59l.3-.29a1 1 0 1 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.3-.29H16a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V9a5 5 0 0 0-5-5m0 14h-1v-7a1 1 0 0 0-1-1H7V9a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h1v7a1 1 0 0 0 1 1h7v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m-3 0H7v-6h6Z"></svg:path>`,
})
export class UilCropAltRotateRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
