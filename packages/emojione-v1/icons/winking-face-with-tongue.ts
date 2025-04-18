import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WinkingFaceWithTongueIcon],svg[emojione-v1-winking-face-with-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.76" cy="31.816" r="31.713" fill="#fbbf67"></svg:circle><svg:path fill="#633d19" d="M51.685 39.15c0 10.911-8.853 19.766-19.768 19.766c-10.907 0-19.762-8.854-19.762-19.766"></svg:path><svg:path fill="#fff" d="M53.36 25.09c0 6.274-4.646 11.349-10.385 11.349S32.586 31.364 32.586 25.09c0-6.267 4.65-11.348 10.389-11.348S53.36 18.824 53.36 25.09"></svg:path><svg:path fill="#f45ba1" d="M42.26 56.23c0 4.03-4.55 7.303-10.163 7.303c-5.61 0-10.16-3.27-10.16-7.303l2.19-8.422c0-4.03 2.359-5.313 7.97-5.313c5.613 0 7.972 1.282 7.972 5.313z"></svg:path><svg:path fill="#fff" d="M48.3 41.13c0 4.357-7.484 7.896-16.712 7.896c-9.219 0-16.706-3.539-16.706-7.896"></svg:path><svg:path fill="#633d19" d="M28.14 29.17c-.233 0-4.493-1.548-8.798-1.548c-3.843 0-7.72 1.548-8.798 1.548c-.935 0-1.285-1.024-.718-1.637a12.84 12.84 0 0 1 19.03 0c.562.612.213 1.637-.718 1.637"></svg:path><svg:ellipse cx="42.977" cy="25.09" fill="#25333a" rx="4.132" ry="5.01"></svg:ellipse>`,
})
export class EmojioneV1WinkingFaceWithTongueIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
