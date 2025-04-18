import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneControlKnobsIcon],svg[emojione-control-knobs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="30.3" cy="36.7" r="23.1" fill="#7d8993"></svg:circle><svg:circle cx="30.3" cy="38.3" r="20.2" fill="#5b636b"></svg:circle><svg:path fill="#fff" d="M31.6 33.7c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4V18.4c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4z"></svg:path><svg:path fill="#94989b" d="M63.4 43.4c1.1-6.1.6-12.5-1.6-18.3s-6.1-11-11.2-14.7c-5-3.7-11.2-5.9-17.5-6.2c-6.3-.2-12.6 1.4-18 4.8c-5.3 3.3-9.7 8.3-12.3 14.1S-.6 35.5.4 41.7c.7 4.3 2.3 8.4 4.7 12.1h3.2C6 50.4 4.5 46.6 3.8 42.6c-.9-5.3-.3-10.8 1.6-15.7c2-5 5.4-9.3 9.7-12.4s9.5-4.9 14.7-5c5.3-.2 10.5 1.3 14.9 4.1s7.9 7 9.9 11.8c2.1 4.8 2.6 10.2 1.7 15.3c-.9 5-3.2 9.5-6.7 13.2h9.9c1.9-3.2 3.2-6.8 3.9-10.5"></svg:path>`,
})
export class EmojioneControlKnobsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
