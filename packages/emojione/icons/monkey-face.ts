import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonkeyFaceIcon],svg[emojione-monkey-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="53.7" cy="33" fill="#89664c" rx="8.3" ry="8.2"></svg:ellipse><svg:circle cx="53.7" cy="33" r="5.4" fill="#ffc5d3"></svg:circle><svg:circle cx="10.2" cy="33" r="8.2" fill="#89664c"></svg:circle><svg:circle cx="10.2" cy="33" r="5.4" fill="#ffc5d3"></svg:circle><svg:g fill="#89664c"><svg:path d="M43.4 10.8c1.1-.6 1.9-.9 1.9-.9c-3.2-1.1-6-1.8-8.5-2.1c1.3-1 2.1-1.3 2.1-1.3C18.5 3.6 8.8 15.5 8.8 26h46.4c-.7-7.4-4.8-12.4-11.8-15.2"></svg:path><svg:path d="M55.3 27.6C55.3 17.9 44.9 10 32 10S8.7 17.9 8.7 27.6c0 2.3.6 4.4 1.6 6.4c-1 2-1.6 4.2-1.6 6.4C8.7 50.1 19.1 58 32 58s23.3-7.9 23.3-17.6c0-2.3-.6-4.4-1.6-6.4c1-2 1.6-4.2 1.6-6.4"></svg:path></svg:g><svg:path fill="#e0ac7e" d="M52 28.2c0-16.9-20-6.1-20-6.1s-20-10.8-20 6.1c0 4.7 2.9 9 7.5 11.7c-1.3 1.7-2.1 3.6-2.1 5.7c0 6.1 6.6 11 14.7 11s14.7-4.9 14.7-11c0-2.1-.8-4-2.1-5.7c4.4-2.7 7.3-7 7.3-11.7"></svg:path><svg:g fill="#3b302a"><svg:path d="M35.1 38.7c0 1.1-.4 2.1-1 2.1s-1-.9-1-2.1c0-1.1.4-2.1 1-2.1c.6.1 1 1 1 2.1m-4.2 0c0 1.1-.4 2.1-1 2.1s-1-.9-1-2.1c0-1.1.4-2.1 1-2.1c.5.1 1 1 1 2.1"></svg:path><svg:ellipse cx="40.7" cy="31.7" rx="3.5" ry="4.5"></svg:ellipse><svg:ellipse cx="23.3" cy="31.7" rx="3.5" ry="4.5"></svg:ellipse><svg:path d="M41.8 44.5c1.4 1.2-2.9 6.9-9.8 7c-6.9 0-11.3-5.8-9.8-7c.4-.3 5.2.9 9.8.9c4.7 0 9.5-1.2 9.8-.9"></svg:path></svg:g>`,
})
export class EmojioneMonkeyFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
