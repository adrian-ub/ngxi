import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWeddingIcon],svg[openmoji-wedding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M44 34V19.435l-7.294-5.216a1.25 1.25 0 0 0-1.412 0L28 19.435V34"></svg:path><svg:path fill="#FFF" d="M53 41.495v24.508c0 .55-.4.997-.895.997h-32.21c-.494 0-.895-.446-.895-.997V41.495c0-.29.113-.565.31-.755l16.105-15.498a.827.827 0 0 1 1.17 0L52.69 40.74c.197.19.31.465.31.755"></svg:path><svg:path fill="#A57939" d="M41 58.943c0-3.85-3.348-6.126-4.565-6.825a.86.86 0 0 0-.87 0c-1.217.7-4.565 2.974-4.565 6.825v7.09c0 .534.41.967.914.967h8.172c.505 0 .914-.433.914-.968z"></svg:path><svg:path fill="#EA5A47" d="m36 45.825l-4.87-6.244l-.156-.232A2.863 2.863 0 1 1 36 36.621a2.863 2.863 0 1 1 4.888 2.936z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" stroke-miterlimit="10" d="M53 41.495v24.508c0 .55-.4.997-.895.997h-32.21c-.494 0-.895-.446-.895-.997V41.495c0-.29.113-.565.31-.755l16.105-15.498a.827.827 0 0 1 1.17 0L52.69 40.74c.197.19.31.465.31.755"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="10" d="M43 27v-8.565l-6.382-5.216a.98.98 0 0 0-1.236 0L29 18.435V27"></svg:path><svg:path stroke-miterlimit="10" d="M36 13V5m-3.5 3h7M41 58.943c0-3.85-3.348-6.126-4.565-6.825a.86.86 0 0 0-.87 0c-1.217.7-4.565 2.974-4.565 6.825v7.09c0 .534.41.967.914.967h8.172c.505 0 .914-.433.914-.968z"></svg:path><svg:path stroke-linejoin="round" d="m36 45.825l-4.87-6.244l-.156-.232A2.863 2.863 0 1 1 36 36.621a2.863 2.863 0 1 1 4.888 2.936z"></svg:path></svg:g>`,
})
export class OpenmojiWeddingIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
