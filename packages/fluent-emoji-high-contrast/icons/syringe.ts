import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastSyringeIcon],svg[fluent-emoji-high-contrast-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.187 7.92l5.392-4.856c.237-.203.56.12.357.357L24.08 8.813l.308.308a1 1 0 0 1 0 1.415l-.643.643L25 12.432a2 2 0 0 1 0 2.829L13.06 27.2l.29.291a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.415 0l-2.987-2.987l-1.682 1.682l.132.133a.75.75 0 0 1-1.06 1.06l-3.182-3.18a.75.75 0 0 1 1.06-1.06l.177.176l1.682-1.682l-2.886-2.887a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 0l.196.196L16.739 7a2 2 0 0 1 2.829 0l1.35 1.35l.643-.643a1 1 0 0 1 1.414 0zM5.852 27.6l1.682-1.681l-1.459-1.459l-1.682 1.682zm17.734-13.753l-5.432-5.433l-1.34 1.34l.874.873a.75.75 0 0 1-1.06 1.06l-.874-.873l-.97.97l.843.843a.75.75 0 0 1-1.06 1.06l-.844-.842l-.909.909l.874.873a.75.75 0 0 1-1.06 1.06l-.874-.873l-5.541 5.541l5.432 5.432z"></svg:path>`,
})
export class FluentEmojiHighContrastSyringeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
