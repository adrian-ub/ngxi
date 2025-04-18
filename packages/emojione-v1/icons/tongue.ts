import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1TongueIcon],svg[emojione-v1-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#25333a" d="M63.66 19.657c0 17.481-14.178 31.661-31.661 31.661c-17.473 0-31.658-14.18-31.658-31.661"></svg:path><svg:path fill="#f45ba1" d="M49.05 51.747C49.05 58.517 41.415 64 32 64c-9.412 0-17.05-5.483-17.05-12.253l3.676-16.17c0-6.763 3.959-10.205 13.371-10.205c9.414 0 13.373 3.442 13.373 10.205l3.676 16.17"></svg:path><svg:path fill="#db5397" d="M32.931 60.1c0 .221-.417.4-.931.4s-.931-.18-.931-.4V29.265c0-.224.417-.403.931-.403s.931.179.931.403z"></svg:path><svg:path fill="#fff" d="M58.23 22.84c0 6.979-11.989 12.648-26.768 12.648c-14.771 0-26.76-5.669-26.76-12.648"></svg:path>`,
})
export class EmojioneV1TongueIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
