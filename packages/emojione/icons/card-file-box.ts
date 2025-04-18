import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneCardFileBoxIcon],svg[emojione-card-file-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#534741" d="M64 57.3L28 64L6.5 50.6L42.6 44z"></svg:path><svg:path fill="#3e4347" d="M42.6 44L6.5 50.7V37.5l36.1-6.7z"></svg:path><svg:path fill="#d0d0d0" d="M64 57.4L42.6 44V30.8L64 47.4z"></svg:path><svg:path fill="#ed4c5c" d="m46 43.4l-36 6.7V36.8l18-3.3v1.9l18-3.2z"></svg:path><svg:path fill="#ff8736" d="m51.4 46.5l-36.1 6.6V39.9l18-3.3v2.3l18.1-3.5z"></svg:path><svg:path fill="#83bf4f" d="m56.7 49.9l-36 6.6V43.3l18-3.3v2l18-3.2z"></svg:path><svg:path fill="#ffce31" d="m62.1 53.3l-36 6.7V46.7l18-3.3V46l18-3.8z"></svg:path><svg:path fill="#d0d0d0" d="M28 64L6.5 50.6V37.4L28 54.1z"></svg:path><svg:path fill="#3e4347" d="M64 57.3L28 64v-9.9l36-6.7zM36 26.8L0 33.4V6.6L36 0z"></svg:path><svg:path fill="#94989b" d="M36 26.8L0 33.4l6.5 4.1l36.1-6.7z"></svg:path><svg:path fill="#d0d0d0" d="m0 6.6l3.3 2l3.2 28.8l-6.5-4zM36 0l3.3 2l3.3 28.8l-6.6-4z"></svg:path><svg:path fill="#94989b" d="M36 0L0 6.6l3.3 2l36-6.6z"></svg:path>`,
})
export class EmojioneCardFileBoxIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
