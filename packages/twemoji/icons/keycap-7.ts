import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiKeycap7Icon],svg[twemoji-keycap-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M20.357 11.203H12.42c-1.674 0-2.294-1.085-2.294-2.139c0-1.085.589-2.14 2.294-2.14h11.224c1.582 0 2.233 1.426 2.233 2.232c0 .62-.341 1.271-.713 2.046l-7.69 15.627c-.868 1.736-1.209 2.355-2.604 2.355c-1.705 0-2.574-1.302-2.574-2.201c0-.372.093-.65.311-1.085z"></svg:path>`,
})
export class TwemojiKeycap7Icon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
