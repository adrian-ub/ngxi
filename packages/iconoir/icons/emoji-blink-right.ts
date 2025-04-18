import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiBlinkRightIcon],svg[iconoir-emoji-blink-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M14 9h2m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M7.5 14.5s1.5 2 4.5 2s4.5-2 4.5-2"></svg:path></svg:g>`,
})
export class IconoirEmojiBlinkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
