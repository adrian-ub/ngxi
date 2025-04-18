import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1SlightlySmilingFaceIcon],svg[emojione-v1-slightly-smiling-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbbf67" d="M63.904 32c0 17.622-14.28 31.9-31.902 31.9C14.377 63.9.098 49.622.098 32C.098 14.381 14.377.098 32.002.098C49.624.098 63.904 14.381 63.904 32"></svg:path><svg:g fill="#fff" transform="translate(-.096 -.1)"><svg:ellipse cx="21.13" cy="24.771" rx="6.484" ry="9.714"></svg:ellipse><svg:ellipse cx="43.07" cy="24.771" rx="6.483" ry="9.714"></svg:ellipse></svg:g><svg:path fill="#25333a" d="M25.231 24.671c0 2.812-1.879 5.088-4.195 5.088c-2.32 0-4.197-2.277-4.197-5.088c0-2.804 1.877-5.086 4.197-5.086c2.316 0 4.195 2.282 4.195 5.086m21.943 0c0 2.812-1.879 5.088-4.197 5.088s-4.194-2.277-4.194-5.088c0-2.804 1.875-5.086 4.194-5.086s4.197 2.282 4.197 5.086"></svg:path><svg:path fill="#633d19" d="M44.384 43.13h-1.857c-.094 0-.16.035-.247.049c-.094.014-.184.018-.278.057c-.16.059-.29.153-.403.261c-.023.021-.055.025-.078.051c-4.475 4.361-10.337 5.356-15.921 2.484c-2.998-1.542-2.75-2.901-5.96-2.901c-1.312 0-1.802 1.522-1.01 2.434c7.241 8.354 19.521 8.354 26.763 0c.79-.912.304-2.435-1.01-2.435"></svg:path>`,
})
export class EmojioneV1SlightlySmilingFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
