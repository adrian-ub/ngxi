import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePostboxIcon],svg[emojione-postbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c94747" d="M56.7 0H9.6C4.9 0 0 7 0 26v38h4.3v-6h38.4v6H47l3.1-1.4v-6l6.7-3.1v3.9h4.3l3.1-1.4V20C64 9.1 61.3.2 56.7 0"></svg:path><svg:path fill="#ed4c5c" d="M9.7 0h46.9v32H9.7z"></svg:path><svg:path fill="#881a0e" d="M56.7 50.8H61v6.6h-4.3z"></svg:path><svg:g fill="#ed4c5c"><svg:path d="M17.1 20L0 26C0 7 4.9 0 9.6 0s7.5 9 7.5 20"></svg:path><svg:path d="M17.1 50L0 58V26l17.1-6z"></svg:path></svg:g><svg:g fill="#c94747"><svg:path d="m64 50l-17.1 8V26L64 20zM50 62.6L46.9 64v-6l3.1-1.4z"></svg:path><svg:path d="m64 55.9l-3.1 1.5v-6l3.1-1.5z"></svg:path></svg:g><svg:path fill="#ed4c5c" d="M0 26v38h4.3v-6h38.4v6h4.2V26z"></svg:path><svg:path fill="#c94747" d="M42.7 32.9c0-2.2-1.9-4-4.3-4H8.5c-2.3 0-4.3 1.8-4.3 4v18.2c0 2.2 1.9 4 4.3 4h29.9c2.3 0 4.3-1.8 4.3-4z"></svg:path><svg:path fill="#ed4c5c" d="M41.4 34.2c0-2.2-1.9-4-4.3-4H9.7c-2.3 0-4.3 1.8-4.3 4v15.6c0 2.2 1.9 4 4.3 4h27.4c2.3 0 4.3-1.8 4.3-4z"></svg:path><svg:path fill="#fff" d="M14.6 37.7h2.8v8.6h-1.8v-7.2l-1.7 7.2H12l-1.7-7.2v7.2H8.5v-8.6h2.8l1.7 6.8zm7.2 0H24l3.3 8.6h-2.1l-.6-1.8h-3.4l-.6 1.8h-2zm-.1 5.4H24l-1.2-3.4zm8.4 3.2h-1.9v-8.6h1.9zm1.9-8.6h1.9v7.1h4.6v1.6H32z"></svg:path><svg:path fill="#881a0e" d="M43.7 19.1H18.4L5.9 22.5h37.8z"></svg:path><svg:path fill="#af2b2b" d="M12.9 3.5h39.5v15.6H12.9z"></svg:path><svg:path fill="#ed4c5c" d="m59.7 20l-17.1 6c0-19 4.9-26 9.6-26s7.5 9 7.5 20"></svg:path><svg:path fill="#c94747" d="M18.4 19.1L5.9 22.5c0-13.9 3.6-19 7-19c3.5 0 5.5 7.5 5.5 15.6M64 20l-17.1 6c0-19 4.9-26 9.6-26S64 9 64 20"></svg:path>`,
})
export class EmojionePostboxIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
