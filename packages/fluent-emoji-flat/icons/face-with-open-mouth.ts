import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFaceWithOpenMouthIcon],svg[fluent-emoji-flat-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M10.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#402A32" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="#BB1D80" d="M12 22a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
