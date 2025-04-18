import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsThumbUpIcon],svg[majesticons-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12.926 3.66a2.254 2.254 0 0 1 3.817 1.965l-.563 3.378A5 5 0 0 1 21 14v2a5 5 0 0 1-5 5H8V8.586l4.926-4.926zM6 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3V9z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsThumbUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
