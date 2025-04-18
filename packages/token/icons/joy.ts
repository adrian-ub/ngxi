import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenJoyIcon],svg[token-joy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.186V20.7h18v-2.514c0-.6-.468-1.086-1.044-1.086H4.044C3.468 17.1 3 17.586 3 18.186m7.6-7.486h2.8v5.6h-2.8z"></svg:path><svg:path fill="currentColor" d="M7.8 15.769V17.1h8.4v-1.332a.48.48 0 0 0-.486-.468H8.28a.48.48 0 0 0-.486.468zM12 11.7a4.2 4.2 0 1 0 0-8.4a4.2 4.2 0 0 0 0 8.4"></svg:path><svg:path fill="currentColor" d="M14.292 4.65a3 3 0 0 0-1.597-.546c-.276.018-.822.157-.822.546c0 .492.48.972.78 1.236c.294.264 1.002.738 1.782.738s.864-.467.864-.6s-.083-.78-1.008-1.374"></svg:path>`,
})
export class TokenJoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
