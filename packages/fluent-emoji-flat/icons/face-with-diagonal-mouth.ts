import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFaceWithDiagonalMouthIcon],svg[fluent-emoji-flat-face-with-diagonal-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.84 29.999c9.334 0 13.998-6.268 13.998-13.999S25.174 2.001 15.84 2.001c-9.335 0-14 6.269-14 13.999s4.665 13.999 14 13.999"></svg:path><svg:path fill="#fff" d="M14.84 11.5a4.5 4.5 0 1 1-9.002 0a4.5 4.5 0 0 1 9.001 0m1.999 0a4.5 4.5 0 1 0 9.001 0a4.5 4.5 0 0 0-9 0"></svg:path><svg:path fill="#402A32" d="M10.96 14.69a3.21 3.21 0 1 0 0-6.42a3.21 3.21 0 0 0 0 6.42m9.757 0a3.21 3.21 0 1 1 0-6.42a3.21 3.21 0 0 1 0 6.42m-9.621 5.591a.75.75 0 1 0 .426 1.438l9.06-2.685a.75.75 0 1 0-.426-1.438z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFaceWithDiagonalMouthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
