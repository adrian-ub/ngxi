import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTransgenderSymbolIcon],svg[fluent-emoji-flat-transgender-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M10.031 5a1 1 0 1 1 0 2H8.26l1.932 1.984l1.102-1.102a1 1 0 1 1 1.414 1.415l-1.12 1.12l.854.877A5.97 5.97 0 0 1 16 10.125c1.346 0 2.589.443 3.59 1.192L23.727 7h-1.774a1 1 0 1 1 0-2H26a1 1 0 0 1 1 1v4.047a1 1 0 1 1-2 0V8.562l-4.028 4.203A6.002 6.002 0 0 1 17 22.042V24h1.5a1 1 0 1 1 0 2H17v1a1 1 0 1 1-2 0v-1h-1.5a1 1 0 1 1 0-2H15v-1.958a6.002 6.002 0 0 1-3.95-9.309l-.878-.902l-1 1.001a1 1 0 0 1-1.415-1.414l1.02-1.02l-1.808-1.856v1.52a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 16.125a4 4 0 1 0 8 0a4 4 0 0 0-8 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTransgenderSymbolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
