import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMovieCameraIcon],svg[emojione-movie-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#94989b" d="M3.6 22c-.6 0-1.1.5-1.1 1.1v19.8c0 .6.5 1.1 1.1 1.1l2.9-.7V22.7z"></svg:path><svg:g fill="#3e4347"><svg:path d="M6.5 22.7v20.6l40-10.3zm36 18.3h-5l-9 21h-4.1v2h6.7l7.4-18v16h-3v2h9v-2h-3V46l7.6 18h6.4v-2h-4z"></svg:path><svg:circle cx="29.5" cy="12" r="12"></svg:circle></svg:g><svg:circle cx="29.5" cy="12" r="4" fill="#94989b"></svg:circle><svg:circle cx="49.5" cy="12" r="12" fill="#3e4347"></svg:circle><svg:circle cx="49.5" cy="12" r="4" fill="#94989b"></svg:circle><svg:path fill="#3e4347" d="M61.5 42.9c0 .6-.5 1.1-1.1 1.1H18.6c-.6 0-1.1-.5-1.1-1.1V23.1c0-.6.5-1.1 1.1-1.1h41.8c.6 0 1.1.5 1.1 1.1z"></svg:path><svg:path fill="#94989b" d="M59.5 41c0 .6-.5 1-1.1 1H20.6c-.6 0-1.1-.4-1.1-1s.5-1 1.1-1h37.8c.6 0 1.1.4 1.1 1m-18-15h16v12h-16z"></svg:path><svg:path fill="#3e4347" d="M42.5 27h14v10h-14z"></svg:path><svg:path fill="#94989b" d="M21.5 33h16v4h-16zm0-6h16v4h-16z"></svg:path>`,
})
export class EmojioneMovieCameraIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
