import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTriangularFlagIcon],svg[fluent-emoji-flat-triangular-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F8312F" d="M27.626 11.944L8 4H7v17h1l19.626-7.944a.6.6 0 0 0 0-1.112"></svg:path><svg:path fill="#E39D89" d="M4 4a2 2 0 1 1 4 0v26H4z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTriangularFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
