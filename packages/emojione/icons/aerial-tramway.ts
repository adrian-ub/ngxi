import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneAerialTramwayIcon],svg[emojione-aerial-tramway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#94989b"><svg:path d="M30 11.5h4v12h-4z"></svg:path><svg:path d="M39.6 13L23.9 9.9l.5-2.9l3.5.7l3-2.5l3.9.7l2.1 3.5l3.2.6z"></svg:path></svg:g><svg:path fill="#3e4347" d="M62 19.1L2 7V5l60 12z"></svg:path><svg:path fill="#ed4c5c" d="M55 49H9V31.5c0-5.5 4.5-10 10-10h26c5.5 0 10 4.5 10 10z"></svg:path><svg:path fill="#3e4347" d="M51 44.9H13V33.4c0-4.6 3.7-8.3 8.3-8.3h21.4c4.6 0 8.3 3.7 8.3 8.3z"></svg:path><svg:path fill="#dae3ea" d="M55 49c0 5.5-4.5 10-10 10H19c-5.5 0-10-4.5-10-10z"></svg:path><svg:path fill="#ed4c5c" d="M24.8 46.9h-2.7c0-11.8 4-24 4-24h2.7c0-.1-4 12.2-4 24m14.4 0h2.7c0-11.8-4-24-4-24h-2.7c0-.1 4 12.2 4 24M54.1 53c.3-.6.5-1.3.6-2H9.2c.1.7.4 1.4.6 2z"></svg:path>`,
})
export class EmojioneAerialTramwayIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
