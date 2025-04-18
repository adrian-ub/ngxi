import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1UpsideDownFaceIcon],svg[noto-v1-upside-down-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1UpsideDownFace0" d="M.41 0H128v128H.41z"></svg:path></svg:defs><svg:clippath id="notoV1UpsideDownFace1"><svg:use href="#notoV1UpsideDownFace0"></svg:use></svg:clippath><svg:g clip-path="url(#notoV1UpsideDownFace1)"><svg:path fill="#fcc21b" d="M127.79 34.67c0-13.83-28.55-25.03-63.79-25.03C28.77 9.64.21 20.84.21 34.67S1.69 118.35 64 118.35c62.32.01 63.79-69.85 63.79-83.68"></svg:path></svg:g><svg:g fill="#2f2f2f" clip-path="url(#notoV1UpsideDownFace1)"><svg:path d="M42 82c-4.49.04-8.17-4.27-8.22-9.62c-.05-5.37 3.55-9.75 8.04-9.79c4.48-.04 8.17 4.27 8.22 9.64c.05 5.36-3.55 9.73-8.04 9.77m44.11 0c4.48-.01 8.11-4.36 8.1-9.71c-.01-5.37-3.66-9.7-8.14-9.69c-4.49.01-8.13 4.36-8.12 9.73c.02 5.35 3.67 9.68 8.16 9.67M63.89 30.94c-14.13 0-22.18 8.14-22.52 8.48a3.254 3.254 0 0 0 4.67 4.53c.25-.25 6.58-6.51 17.85-6.51s17.6 6.25 17.87 6.52a3.26 3.26 0 0 0 4.59.04a3.24 3.24 0 0 0 .06-4.58c-.34-.34-8.39-8.48-22.52-8.48"></svg:path></svg:g>`,
})
export class NotoV1UpsideDownFaceIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
