import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1GrinningFaceWithBigEyesIcon],svg[emojione-v1-grinning-face-with-big-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbbf67" d="M63.58 32.04c0 17.522-14.2 31.728-31.726 31.728S.128 49.562.128 32.04C.128 14.514 14.328.308 31.854.308S63.58 14.514 63.58 32.04"></svg:path><svg:path fill="#fff" d="M27.28 20.789c0 7.417-2.887 13.419-6.447 13.419c-3.564 0-6.451-6-6.451-13.419c0-7.415 2.886-13.418 6.451-13.418c3.56 0 6.447 6 6.447 13.418m21.81 0c0 7.417-2.883 13.419-6.447 13.419c-3.56 0-6.448-6-6.448-13.419c0-7.415 2.889-13.418 6.448-13.418c3.564 0 6.447 6 6.447 13.418"></svg:path><svg:g fill="#25333a"><svg:ellipse cx="20.827" cy="21.416" rx="4.174" ry="5.06"></svg:ellipse><svg:ellipse cx="42.649" cy="21.416" rx="4.172" ry="5.06"></svg:ellipse></svg:g><svg:path fill="#633d19" d="M51.12 40.34c0 11.02-8.941 19.963-19.966 19.963c-11.02 0-19.959-8.942-19.959-19.963"></svg:path><svg:path fill="#fff" d="M47.695 42.34c0 4.4-7.56 7.975-16.879 7.975c-9.312 0-16.873-3.574-16.873-7.975"></svg:path>`,
})
export class EmojioneV1GrinningFaceWithBigEyesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
