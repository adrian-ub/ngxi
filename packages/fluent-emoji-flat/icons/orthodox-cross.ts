import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatOrthodoxCrossIcon],svg[fluent-emoji-flat-orthodox-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M30 26a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#fff" d="M16 6a1 1 0 0 0-1 1v1h-2a1 1 0 1 0 0 2h2v2h-5a1 1 0 1 0 0 2h5v5.155l-1.134-.655a1 1 0 1 0-1 1.732L15 21.464V25a1 1 0 1 0 2 0v-2.381l1.928 1.113a1 1 0 1 0 1-1.732L17 20.31V14h5a1 1 0 1 0 0-2h-5v-2h2a1 1 0 1 0 0-2h-2V7a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatOrthodoxCrossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
