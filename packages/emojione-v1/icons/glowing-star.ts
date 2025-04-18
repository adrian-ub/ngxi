import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1GlowingStarIcon],svg[emojione-v1-glowing-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#edc26e"><svg:ellipse cx="47.49" cy="10.518" rx="1.502" ry="8.976" transform="rotate(-134.991 47.492 10.518)"></svg:ellipse><svg:path d="M8.838 40.42c-3.905 3.058-6.653 6.07-6.141 6.718c.512.653 4.093-1.293 7.992-4.351c3.905-3.057 6.656-6.06 6.144-6.713c-.51-.656-4.088 1.293-7.995 4.346m46.018 0c3.904 3.058 6.654 6.07 6.143 6.718c-.512.653-4.093-1.293-7.992-4.351c-3.906-3.057-6.656-6.06-6.146-6.713c.51-.656 4.088 1.293 7.995 4.346M33.21 53.713c.003 4.953-.668 8.975-1.499 8.975c-.828.004-1.503-4.02-1.503-8.971c-.008-4.961.662-8.98 1.49-8.98c.831 0 1.504 4.02 1.512 8.976"></svg:path><svg:ellipse cx="15.14" cy="10.518" rx="1.502" ry="8.976" transform="rotate(-45.017 15.142 10.516)"></svg:ellipse><svg:path d="m56.28 20.523l-19.25-.091L31.17.959l-5.86 19.473l-19.25.091l15.628 12.433l-7.902 21.2L31.17 40.685l17.385 13.471l-7.901-21.2z"></svg:path></svg:g><svg:path fill="#faec78" d="m49.44 23.23l-12.41-2.283l-5.86-10.422l-5.86 10.422l-11.958 2.413l8.336 10.11l-2.185 13.469l11.667-5.737l11.99 5.86l-2.506-13.592z"></svg:path>`,
})
export class EmojioneV1GlowingStarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
