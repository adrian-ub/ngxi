import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTriangularRulerIcon],svg[fluent-emoji-flat-triangular-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#BEBEBE" d="M2 27.667V4.12a2.121 2.121 0 0 1 3.621-1.5L29.38 26.38a2.121 2.121 0 0 1-1.5 3.621H4.333A2.333 2.333 0 0 1 2 27.667M9 24h7.262a.72.72 0 0 0 .509-1.23l-7.542-7.54A.72.72 0 0 0 8 15.737V23a1 1 0 0 0 1 1"></svg:path><svg:path fill="#8D65C5" d="m28.39 25.39l.72.72l-1.75 1.75a.508.508 0 1 1-.72-.72zm-5.5-5.5l.72.72l-1.75 1.75a.508.508 0 1 1-.72-.72zm-5.5-5.5l.72.72l-1.75 1.75a.508.508 0 1 1-.72-.72zm-5.5-5.5l.72.72l-1.75 1.75a.508.508 0 1 1-.72-.72zM7.11 4.11L5.36 5.86a.508.508 0 0 1-.72-.72l1.75-1.75zm2.25 3.25a.508.508 0 1 0-.72-.72l-1 1a.508.508 0 1 0 .72.72zm5.5 5.5a.508.508 0 0 0-.72-.72l-1 1a.508.508 0 0 0 .72.72zm5.5 5.5a.508.508 0 0 0-.72-.72l-1 1a.508.508 0 0 0 .72.72zm5.5 5.5a.508.508 0 0 0-.72-.72l-1 1a.508.508 0 0 0 .72.72z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTriangularRulerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
