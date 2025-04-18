import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMinibusIcon],svg[emojione-minibus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#dae3ea" d="M62 51.6c0 .6.1 3.4-3.6 3.4H5.5c-.6 0-3.4-.5-3.5-3.2V37.1C2 29 5.6 17 17.1 17h40.1c4.8 0 4.8 3.2 4.8 8.4z"></svg:path><svg:path fill="#c5d0d8" d="M62 49.8c0 2.5 0 5.2-3.6 5.2H5.5c-.6 0-3.4-.5-3.5-3.2v-3.1h60z"></svg:path><svg:path fill="#3e4347" d="M7.9 36h4.5c3.5-4 8.2-4 8.2-4V19.6c-7.1 0-12.7 3.8-12.7 16.4M2 38.5h3s-.3-13.8 5.2-17.7H7.8c0-.1-6.2 4.7-5.8 17.7m21.4-18.9h35.1V32H23.4zm-17 32.2c0 1.1-.7 2-1.6 2c-.7 0-.7 0-.7-2s0-2 .7-2c.8 0 1.6.9 1.6 2"></svg:path><svg:path fill="#fff" d="M5.9 51.8c0 .7-.5 1.3-1.1 1.3c-.5 0-.5 0-.5-1.3s0-1.3.5-1.3c.6 0 1.1.6 1.1 1.3"></svg:path><svg:path fill="#f15744" d="m62 45.3l-2.3-2.9v-2.8H62z"></svg:path><svg:path fill="#ffd45c" d="m59.7 36.7l2.3-2.8v5.7h-2.3z"></svg:path><svg:path fill="#3e4347" d="M10.6 45.5H4.8v-3l5.8-.9z"></svg:path><svg:path fill="#fff" d="M9.1 45.1H5v-2.2l4.1-.6z"></svg:path><svg:path fill="#62727a" d="M62 46.6H35.2c-4.3 0-5.6 2.1-5.6 2.1H62z"></svg:path><svg:path fill="#c5d0d8" d="M60.2 54.7c0-5.2-4.2-9.4-9.4-9.4s-9.4 4.2-9.4 9.4c.1 2.5 18.8 2.5 18.8 0"></svg:path><svg:path fill="#3e4347" d="M57.9 54.9c0-3.9-3.2-7.1-7.1-7.1s-7.1 3.2-7.1 7.1s3.2 7.1 7.1 7.1s7.1-3.2 7.1-7.1"></svg:path><svg:circle cx="50.8" cy="54.9" r="4" fill="#dae3ea"></svg:circle><svg:g fill="#3e4347"><svg:circle cx="50.8" cy="50.9" r="1"></svg:circle><svg:circle cx="47.3" cy="52.9" r="1"></svg:circle><svg:circle cx="47.3" cy="56.9" r="1"></svg:circle><svg:circle cx="50.8" cy="59" r="1"></svg:circle><svg:circle cx="54.3" cy="56.9" r="1"></svg:circle><svg:path d="M54.8 53.8c-.5.3-1.1.1-1.4-.4s-.1-1.1.4-1.4s1.1-.1 1.4.4s.1 1.1-.4 1.4"></svg:path></svg:g><svg:circle cx="50.8" cy="54.9" r="2" fill="#62727a"></svg:circle><svg:path fill="#c5d0d8" d="M28.3 54.7c0-5.2-4.2-9.4-9.4-9.4s-9.4 4.2-9.4 9.4c0 2.5 18.8 2.5 18.8 0"></svg:path><svg:path fill="#3e4347" d="M26 54.9c0-3.9-3.2-7.1-7.1-7.1s-7.1 3.2-7.1 7.1S15 62 18.9 62s7.1-3.2 7.1-7.1"></svg:path><svg:path fill="#dae3ea" d="M22.9 54.9c0-2.2-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4c2.2.1 4-1.7 4-4"></svg:path><svg:g fill="#3e4347"><svg:circle cx="18.9" cy="50.9" r="1"></svg:circle><svg:circle cx="15.4" cy="52.9" r="1"></svg:circle><svg:path d="M14.9 56.1c.5-.3 1.1-.1 1.4.4s.1 1.1-.4 1.4s-1.1.1-1.4-.4s-.1-1.2.4-1.4"></svg:path><svg:circle cx="18.9" cy="59" r="1"></svg:circle><svg:circle cx="22.4" cy="56.9" r="1"></svg:circle><svg:circle cx="22.4" cy="52.9" r="1"></svg:circle></svg:g><svg:g fill="#62727a"><svg:circle cx="18.9" cy="54.9" r="2"></svg:circle><svg:path d="M39.2 36.3h15v.9h-15zm-14 1.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2.8c0-.3.2-.5.5-.5s.5.2.5.5zm-7.7-1.1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.8c.3 0 .5.2.5.5s-.2.5-.5.5zM2 41.6h1.9v5.6H2z"></svg:path></svg:g>`,
})
export class EmojioneMinibusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
