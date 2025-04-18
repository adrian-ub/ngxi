import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiMeme20FilledIcon],svg[fluent-emoji-meme-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a7.99 7.99 0 0 1 6.245 3H3.755A7.99 7.99 0 0 1 10 2m7 9h.938A8.001 8.001 0 0 1 2 10h1v1h1v1h6v-1h1v1h6zM6.185 13.44a.5.5 0 0 0-.074.703A5 5 0 0 0 10 16c1.57 0 2.973-.725 3.889-1.857a.5.5 0 1 0-.778-.629A4 4 0 0 1 10 15a4 4 0 0 1-3.111-1.486a.5.5 0 0 0-.704-.074M18 6H3v1H2v1H1v1H0v2h1V9h1V8h2v2h1v1h4v-1h1V8h1v2h1v1h4v-1h1V8h1zM6 8v1h1v1H6V9H5V8zm7 0v1h1v1h-1V9h-1V8z"></svg:path>`,
})
export class FluentEmojiMeme20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
