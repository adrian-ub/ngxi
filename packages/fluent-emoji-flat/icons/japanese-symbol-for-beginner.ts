import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatJapaneseSymbolForBeginnerIcon],svg[fluent-emoji-flat-japanese-symbol-for-beginner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F9C23C" d="M26.25 2.07L16 7.99L5.75 2.07A.502.502 0 0 0 5 2.5l.01 20.8c0 .36.19.69.5.87l9.88 5.66c.39.22.86.22 1.24 0l9.87-5.66c.31-.18.5-.51.5-.87V2.5c0-.38-.42-.62-.75-.43"></svg:path><svg:path fill="#44911B" d="m16.63 29.83l9.87-5.66c.31-.18.5-.51.5-.87V2.5c0-.38-.42-.63-.75-.43L16 7.99L16.01 30c.21 0 .43-.05.62-.17"></svg:path></svg:g>`,
})
export class FluentEmojiFlatJapaneseSymbolForBeginnerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
