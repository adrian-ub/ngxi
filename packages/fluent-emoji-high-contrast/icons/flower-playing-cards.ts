import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFlowerPlayingCardsIcon],svg[fluent-emoji-high-contrast-flower-playing-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12.114A12 12 0 0 0 22.37 19c-1.408 0-2.752.25-3.98.706C17.136 16.948 14.076 15 10.5 15c-.87 0-1.71.115-2.5.33zm12.5 3.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path d="M5 4a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2 2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastFlowerPlayingCardsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
