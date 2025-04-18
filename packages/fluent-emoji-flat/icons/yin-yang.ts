import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatYinYangIcon],svg[fluent-emoji-flat-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M30 26a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#fff" d="M16 24.5h-.031a4.25 4.25 0 0 0 0-8.5a4.25 4.25 0 1 1-.076-8.5H16a8.5 8.5 0 0 1 0 17m0 1.5a10 10 0 1 0 0-20a10 10 0 0 0 0 20m-.031-3.625a2.125 2.125 0 1 1 0-4.25a2.125 2.125 0 0 1 0 4.25M16 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class FluentEmojiFlatYinYangIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
