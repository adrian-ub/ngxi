import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShare1Icon],svg[tdesign-share-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 1.85L23.553 12L11.5 22.15v-6.227c-4.194.2-7.073 1.7-9.186 4.658L.52 19.804c.523-2.617 1.58-5.295 3.478-7.462c1.761-2.014 4.209-3.543 7.502-4.187zm2 4.3v3.717l-.858.123c-3.27.467-5.551 1.853-7.14 3.669a12 12 0 0 0-1.744 2.658C6.096 14.666 8.978 13.9 12.5 13.9h1v3.95L20.448 12z"></svg:path>`,
})
export class TdesignShare1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
