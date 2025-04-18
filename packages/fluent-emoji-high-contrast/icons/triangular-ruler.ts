import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastTriangularRulerIcon],svg[fluent-emoji-high-contrast-triangular-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.936 14.522C8.853 13.438 7 14.206 7 15.738V23a2 2 0 0 0 2 2h7.262c1.532 0 2.3-1.853 1.216-2.936zM15.586 23H9v-6.586z"></svg:path><svg:path d="M4.121 1A3.12 3.12 0 0 0 1 4.121v23.546A3.333 3.333 0 0 0 4.333 31H27.88a3.121 3.121 0 0 0 2.207-5.328L6.328 1.914A3.12 3.12 0 0 0 4.121 1M3 4.121a1.121 1.121 0 0 1 1.914-.793l.77.77L4.64 5.14a.508.508 0 1 0 .718.718l1.043-1.042l2.031 2.03l-.792.794a.508.508 0 1 0 .718.718l.793-.792l2.032 2.03l-1.043 1.044a.508.508 0 1 0 .718.718l1.043-1.043l2.032 2.032l-.793.793a.508.508 0 1 0 .718.718l.793-.793l2.031 2.032l-1.042 1.043a.508.508 0 1 0 .718.718l1.043-1.043l2.031 2.032l-.792.793a.508.508 0 1 0 .718.718l.793-.793l2.031 2.032l-1.042 1.043a.508.508 0 1 0 .718.718l1.043-1.043l2.031 2.032l-.792.793a.508.508 0 1 0 .718.718l.793-.793l2.031 2.032l-1.042 1.043a.508.508 0 1 0 .718.718l1.043-1.043l.27.27A1.121 1.121 0 0 1 27.879 29H4.333A1.333 1.333 0 0 1 3 27.667z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastTriangularRulerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
