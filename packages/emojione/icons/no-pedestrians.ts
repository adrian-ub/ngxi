import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNoPedestriansIcon],svg[emojione-no-pedestrians-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ff5a79"></svg:circle><svg:circle cx="32" cy="32" r="24" fill="#333"></svg:circle><svg:g fill="#fff"><svg:path d="m42 47.2l-3.9-9.3c-.3-.8-.5-3.2-.5-3.2c0-.3-.1-.5-.1-.8l-2.3-8.8l3 1.5v2.8c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-4.8L33 20.3c-.5-.3-1.1-.4-1.8-.4c-1.2 0-2.3.5-3.1 1.4l-4 4.1h-5c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6h6.3l2.3-2.3l1.5 6.7l-4.1 4.2v10.5c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-9.2l3.3-3.4c.3-.3.7-.5 1.1-.5c.6 0 1.2.4 1.4.9l5.3 12.7c.2.6.8 1 1.5 1c.9 0 1.6-.7 1.6-1.6c-.4 0-.4-.2-.5-.4"></svg:path><svg:circle cx="29.8" cy="15.7" r="2.9"></svg:circle></svg:g><svg:path fill="#ff5a79" d="m9.23 13.474l4.243-4.243l41.295 41.295l-4.243 4.242z"></svg:path>`,
})
export class EmojioneNoPedestriansIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
