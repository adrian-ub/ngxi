import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCameraSecurityIcon],svg[si-glyph-camera-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 12h3.05v1.945H1zm3.16.227l2.028-5.768l1.183.416l-2.027 5.768z"></svg:path><svg:path d="m2.595 3.217l-.486 1.664s-.294.774.427 1.014c.812.248 6.992 2.084 6.992 2.084l1.391-2.38z"></svg:path><svg:path d="M13.709 4.971c.105-.039 2.249-1.2 2.249-1.2c-.162-.163-.257-.286-.495-.355L4.145.101a1.395 1.395 0 0 0-1.738.937l-.351 1.197s9.708 2.844 10.006 2.886l-1.019 1.798l2.946 1.025l.99-2.922c0-.001-1.11-.001-1.27-.051m-11.95 7.208l-.356-.529c1.944-1.198 2.61-4.396 2.59-6.771l.658-.006c.021 2.656-.726 5.971-2.892 7.306"></svg:path><svg:path d="M2.029 12.996c0 1.645-.908 2.977-2.029 2.977v-5.952c1.121 0 2.029 1.332 2.029 2.975"></svg:path></svg:g>`,
})
export class SiGlyphCameraSecurityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
