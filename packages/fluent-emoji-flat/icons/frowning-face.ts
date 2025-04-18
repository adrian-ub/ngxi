import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFrowningFaceIcon],svg[fluent-emoji-flat-frowning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M10.42 16.224a4.206 4.206 0 1 0 0-8.411a4.206 4.206 0 0 0 0 8.411m11.148.077a4.244 4.244 0 1 0 0-8.489a4.244 4.244 0 0 0 0 8.49"></svg:path><svg:path fill="#402A32" d="M14 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m10 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M10.894 22.447C11.098 22.04 12.46 20 16 20s4.902 2.04 5.106 2.447a1 1 0 1 0 1.788-.894C22.431 20.627 20.46 18 16 18s-6.431 2.627-6.894 3.553a1 1 0 1 0 1.788.894"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFrowningFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
