import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLyingFaceIcon],svg[fluent-emoji-flat-lying-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M10.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#402A32" d="M14 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9.106 11.447C13.066 24.104 13.995 23 16 23s2.934 1.104 3.105 1.447a1 1 0 0 0 1.79-.894C20.398 22.563 18.794 21 16 21s-4.4 1.563-4.895 2.553a1 1 0 0 0 1.79.894"></svg:path><svg:path fill="#FF822D" d="M13 17.5a2.5 2.5 0 0 1 2.5-2.5h14a2.5 2.5 0 0 1 0 5h-14a2.5 2.5 0 0 1-2.5-2.5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLyingFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
