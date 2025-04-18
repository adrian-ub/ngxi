import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsEmojiHappyIcon],svg[majesticons-emoji-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm7-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm.757 2.1a1 1 0 0 0-1.514 1.307C9.053 15.344 10.283 16 12 16c1.716 0 2.947-.656 3.757-1.593a1 1 0 1 0-1.514-1.307c-.419.485-1.091.9-2.243.9s-1.824-.415-2.243-.9zM16 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsEmojiHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
