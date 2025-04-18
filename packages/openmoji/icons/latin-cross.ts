import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLatinCrossIcon],svg[openmoji-latin-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#B399C8" d="M53.13 28.38v2.91a3 3 0 0 1-3 3h-6.68a3 3 0 0 0-3 3v20.72a3 3 0 0 1-3 3h-2.9a3 3 0 0 1-3-3V37.29a3 3 0 0 0-3-3h-6.68a3 3 0 0 1-3-3v-2.91a3 3 0 0 1 3-3h6.68a3 3 0 0 0 3-3v-8.39a3 3 0 0 1 3-3h2.9a3 3 0 0 1 3 3v8.39a3 3 0 0 0 3 3h6.68a3 3 0 0 1 3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M53.13 28.38v2.91a3 3 0 0 1-3 3h-6.68a3 3 0 0 0-3 3v20.72a3 3 0 0 1-3 3h-2.9a3 3 0 0 1-3-3V37.29a3 3 0 0 0-3-3h-6.68a3 3 0 0 1-3-3v-2.91a3 3 0 0 1 3-3h6.68a3 3 0 0 0 3-3v-8.39a3 3 0 0 1 3-3h2.9a3 3 0 0 1 3 3v8.39a3 3 0 0 0 3 3h6.68a3 3 0 0 1 3 3"></svg:path>`,
})
export class OpenmojiLatinCrossIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
