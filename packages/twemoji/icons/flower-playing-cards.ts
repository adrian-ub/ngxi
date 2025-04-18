import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlowerPlayingCardsIcon],svg[twemoji-flower-playing-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M32 28H4V4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z"></svg:path><svg:path d="M8 36h20a4 4 0 0 0 4-4v-4c-4.117-2.744-21.139-8.233-28 0v4a4 4 0 0 0 4 4"></svg:path><svg:circle cx="15.276" cy="12.495" r="7.578" fill="#FFF"></svg:circle>`,
})
export class TwemojiFlowerPlayingCardsIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
