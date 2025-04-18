import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevbytesIcon],svg[arcticons-devbytes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.055 30.023l-26.84-12.509a2.2 2.2 0 0 1-1.27-1.992V6.6c0-.804.835-1.335 1.563-.996l26.547 12.373zM25.13 24l-13.915 6.486a2.2 2.2 0 0 0-1.27 1.992V41.4c0 .804.835 1.335 1.563.996l26.547-12.373"></svg:path>`,
})
export class ArcticonsDevbytesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
