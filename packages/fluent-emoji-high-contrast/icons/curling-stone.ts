import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastCurlingStoneIcon],svg[fluent-emoji-high-contrast-curling-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.686 9.686c-.165.164-.186.302-.186.314v2H21a2 2 0 0 1 2 2v2a7 7 0 1 1 0 14H9a7 7 0 1 1 0-14v-2a2 2 0 0 1 2-2h.5v-2c0-.988.479-1.85 1.064-2.436S14.012 6.5 15 6.5h6a1.5 1.5 0 0 1 0 3h-6c-.012 0-.15.021-.314.186M4.999 20q-.3.401-.519.858A5 5 0 0 0 9 28h14a5 5 0 0 0 4-8z"></svg:path>`,
})
export class FluentEmojiHighContrastCurlingStoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
