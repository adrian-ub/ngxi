import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneGrapesIcon],svg[emojione-grapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8cc63e" d="M38.8 22.1c5.8-4.7-.8-18.4-.8-18.4s-.6 2.6-2 5.8C30.8 4.6 22.6 2 22.6 2s4.4 6.7 5.5 14.9c-3.5 0-6.2-.9-6.2-.9s9.2 12.4 16.9 6.1m9.5 18.5c-5.5 5.1-3 14.6-3 14.6s1-2.2 2.8-5.1c3 2.8 8.9 3.1 8.9 3.1s-2.1-4.4-1.3-10.8c2.7-.7 4.6-.6 4.6-.6s-4.7-8-12-1.2"></svg:path><svg:g fill="#843dc9"><svg:ellipse cx="44.7" cy="23" rx="6.6" ry="6.9"></svg:ellipse><svg:ellipse cx="25.3" cy="26" rx="6.1" ry="6.4"></svg:ellipse><svg:ellipse cx="30.9" cy="55.6" rx="6.1" ry="6.4"></svg:ellipse><svg:ellipse cx="42.8" cy="48.5" rx="4.7" ry="4.9"></svg:ellipse></svg:g><svg:ellipse cx="35.4" cy="27.8" fill="#ab7dcc" rx="8" ry="8.4"></svg:ellipse><svg:g fill="#6f43a3"><svg:ellipse cx="29.4" cy="36.3" rx="7" ry="7.4"></svg:ellipse><svg:ellipse cx="43.4" cy="37.9" rx="7" ry="7.4"></svg:ellipse></svg:g><svg:ellipse cx="19.2" cy="39.8" fill="#843dc9" rx="8.9" ry="9.3"></svg:ellipse><svg:ellipse cx="22" cy="51.7" fill="#6f43a3" rx="6.1" ry="6.4"></svg:ellipse><svg:path fill="none" stroke="#9fc427" stroke-miterlimit="10" stroke-width="2" d="M15.1 49.8c6.8-4.5 33.7-16.5 38.7-34.7"></svg:path><svg:g fill="#ab7dcc"><svg:ellipse cx="32" cy="44.7" rx="8.3" ry="8.7"></svg:ellipse><svg:path d="M18.3 52.2c0 4.7-3.6 8.5-8.1 8.5s-8.1-3.8-8.1-8.5s3.6-8.5 8.1-8.5c4.4 0 8.1 3.8 8.1 8.5"></svg:path><svg:ellipse cx="53.3" cy="32.1" rx="8.7" ry="9.1"></svg:ellipse></svg:g>`,
})
export class EmojioneGrapesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
