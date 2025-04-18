import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFilmProjectorIcon],svg[emojione-film-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#94989b" d="M27.2 58.6h12.3V64H27.2z"></svg:path><svg:g fill="#3e4347"><svg:path d="M49 55.8c0 1.4-1.2 2.7-2.7 2.7H19.1c-1.5 0-2.7-1.3-2.7-2.7v-19c0-1.4 1.2-2.7 2.7-2.7h27.2c1.5 0 2.7 1.3 2.7 2.7z"></svg:path><svg:circle cx="17.7" cy="17.7" r="17.7"></svg:circle></svg:g><svg:g fill="#d0d0d0"><svg:circle cx="11.4" cy="8.7" r="4.1"></svg:circle><svg:circle cx="24" cy="8.7" r="4.1"></svg:circle><svg:circle cx="28" cy="20.3" r="4.1"></svg:circle><svg:circle cx="17.7" cy="28.4" r="4.1"></svg:circle><svg:circle cx="7.4" cy="20.3" r="4.1"></svg:circle><svg:circle cx="16.2" cy="15.4" r="1"></svg:circle><svg:circle cx="19.3" cy="15.4" r="1"></svg:circle><svg:circle cx="20.3" cy="18.3" r="1"></svg:circle><svg:circle cx="17.7" cy="20.3" r="1"></svg:circle><svg:circle cx="15.1" cy="18.3" r="1"></svg:circle></svg:g><svg:circle cx="49" cy="20.4" r="15" fill="#3e4347"></svg:circle><svg:g fill="#d0d0d0"><svg:circle cx="43.7" cy="12.9" r="3.4"></svg:circle><svg:circle cx="54.3" cy="12.8" r="3.4"></svg:circle><svg:circle cx="57.8" cy="22.6" r="3.4"></svg:circle><svg:circle cx="49" cy="29.5" r="3.4"></svg:circle><svg:circle cx="40.3" cy="22.6" r="3.4"></svg:circle><svg:circle cx="47.7" cy="18.5" r=".9"></svg:circle><svg:circle cx="50.4" cy="18.5" r=".9"></svg:circle><svg:circle cx="51.2" cy="20.9" r=".9"></svg:circle><svg:circle cx="49" cy="22.7" r=".9"></svg:circle><svg:circle cx="46.9" cy="20.9" r=".9"></svg:circle></svg:g><svg:path fill="#3e4347" d="M6.8 40.9v20.4l10.9-5.5v-9.5zm49-5.5v9.5L49 43.6v-6.8z"></svg:path>`,
})
export class EmojioneFilmProjectorIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
