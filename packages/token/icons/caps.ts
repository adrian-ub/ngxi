import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCapsIcon],svg[token-caps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.087 20.747A9.023 9.023 0 0 0 12 3.253a9.023 9.023 0 0 0-3.087 17.494h.452a1.515 1.515 0 0 0 1.402-.958a1.5 1.5 0 0 0 .104-.588v-5.226H9.094c-.576 0-1.044-.508-1.044-1.128c0-.621.468-1.129 1.044-1.129h5.812c.576 0 1.044.508 1.044 1.129c0 .62-.468 1.128-1.044 1.128H13.13v5.226a1.574 1.574 0 0 0 1.58 1.546zM12 10.025a2.257 2.257 0 1 0 0-4.514a2.257 2.257 0 0 0 0 4.514m-6.208 3.95a1.128 1.128 0 1 0 0-2.257a1.128 1.128 0 0 0 0 2.257m13.544-1.128a1.129 1.129 0 1 1-2.257 0a1.129 1.129 0 0 1 2.257 0" clip-rule="evenodd"></svg:path>`,
})
export class TokenCapsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
