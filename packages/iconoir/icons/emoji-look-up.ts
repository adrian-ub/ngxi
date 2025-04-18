import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiLookUpIcon],svg[iconoir-emoji-look-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8.5 7a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M10 11h4m8 1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class IconoirEmojiLookUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
