import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPeaceSymbolIcon],svg[fluent-emoji-flat-peace-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M30 26a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#fff" d="M16 26c5.523 0 10-4.477 10-10S21.523 6 16 6S6 10.477 6 16s4.477 10 10 10m-1-7.172v5.11a7.96 7.96 0 0 1-3.669-1.44zM15 16l-5.135 5.135A8.001 8.001 0 0 1 15 8.062zm7.135 5.135L17 16V8.062a8.001 8.001 0 0 1 5.135 13.073m-1.466 1.362A7.96 7.96 0 0 1 17 23.938v-5.11z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPeaceSymbolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
