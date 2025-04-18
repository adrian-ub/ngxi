import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1SixOclockIcon],svg[emojione-v1-six-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0e7ec" d="M61.62 31.985c0 16.363-13.265 29.626-29.629 29.626S2.36 48.347 2.36 31.985c0-16.366 13.267-29.631 29.631-29.631S61.62 15.619 61.62 31.985"></svg:path><svg:path fill="#98a9b4" d="M0 31.985C0 49.621 14.349 63.97 31.985 63.97c17.634 0 31.986-14.35 31.986-31.985C63.971 14.349 49.619 0 31.985 0C14.349 0 0 14.349 0 31.985m6.229 0c0-14.203 11.556-25.759 25.757-25.759c14.204 0 25.759 11.556 25.759 25.759S46.189 57.742 31.986 57.742c-14.202 0-25.757-11.554-25.757-25.757"></svg:path><svg:path fill="#85939c" d="M33.863 11.03c0-1.436-.848-2.604-1.889-2.604c-1.042 0-1.89 1.169-1.89 2.604V32.1c0 1.436.848 2.602 1.89 2.602s1.889-1.166 1.889-2.602z"></svg:path><svg:path fill="#788288" d="M30.08 48.652c0 1.438.846 2.603 1.888 2.603s1.891-1.167 1.891-2.604l.005-15.25c0-1.437-.851-2.603-1.888-2.601c-1.043-.002-1.892 1.164-1.892 2.599z"></svg:path>`,
})
export class EmojioneV1SixOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
