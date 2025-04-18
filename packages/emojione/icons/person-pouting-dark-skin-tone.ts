import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePersonPoutingDarkSkinToneIcon],svg[emojione-person-pouting-dark-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#231f20" d="M32 2C17.5 2 9.6 11 9.6 22.9V60h44.8V22.9c0-17.7-12.1-17.4-12.1-17.4S41.4 2 32 2"></svg:path><svg:path fill="#b386e2" d="M42 49.1V42H22v7.1C9.5 49.4 7 51.5 7 62h50c0-10.5-2.5-12.6-15-12.9"></svg:path><svg:path fill="#8a6859" d="M15.3 33s-3.4-.9-3.4-5.8c0-3.9 2.5-4.6 2.5-4.6c9.1 0 25.9-11.7 25.9-11.7s3.5 10.3 8.9 11.7c0 0 2.6.5 2.6 4.6c0 4.9-3.5 5.8-3.5 5.8c0 7.4-10.3 16.4-16.5 16.4s-16.5-9-16.5-16.4"></svg:path><svg:path fill="#705041" d="M32 37.8c-3.2 0-4.8-2.3-3.2-2.3h6.4c1.6 0 0 2.3-3.2 2.3"></svg:path><svg:path fill="#f5f5f5" d="M36.8 31c-1.1 0-1-1.4-1-1.4c1.7-8.8 11.5-4.1 11.5-4.1c.8 1.5-1.8 5.3-2.5 5.5c-3.2.8-8 0-8 0"></svg:path><svg:circle cx="41.2" cy="27.4" r="3.5" fill="#664e27"></svg:circle><svg:circle cx="41.2" cy="27.4" r="1.2" fill="#2b2925"></svg:circle><svg:path fill="#3b3226" d="M35.8 29.6c1.7-10.5 10.4-3.5 13.8-5c-3.4 3.3-10.3-3.8-13.8 5"></svg:path><svg:path fill="#f5f5f5" d="M27.1 31c1.1 0 1-1.4 1-1.4c-1.7-8.8-11.5-4.1-11.5-4.1c-.8 1.5 1.8 5.3 2.5 5.5c3.2.8 8 0 8 0"></svg:path><svg:circle cx="22.7" cy="27.4" r="3.5" fill="#664e27"></svg:circle><svg:path fill="#3b3226" d="M28.1 29.6c-1.7-10.5-10.4-3.5-13.8-5c3.4 3.3 10.4-3.8 13.8 5"></svg:path><svg:circle cx="22.7" cy="27.4" r="1.2" fill="#2b2925"></svg:circle><svg:circle cx="32" cy="43.5" r="3" fill="#574137"></svg:circle>`,
})
export class EmojionePersonPoutingDarkSkinToneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
