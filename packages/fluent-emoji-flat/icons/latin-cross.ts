import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLatinCrossIcon],svg[fluent-emoji-flat-latin-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M30 26a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#fff" d="M16 6a1 1 0 0 0-1 1v5h-5a1 1 0 1 0 0 2h5v11a1 1 0 1 0 2 0V14h5a1 1 0 1 0 0-2h-5V7a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLatinCrossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
