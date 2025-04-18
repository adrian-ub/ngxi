import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCoolButtonIcon],svg[openmoji-cool-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M47.946 32.027v8h3.429m-19.42 0a2.857 2.857 0 0 1-2.857-2.857v-2.286a2.857 2.857 0 0 1 2.857-2.857h0a2.857 2.857 0 0 1 2.857 2.857v2.286a2.857 2.857 0 0 1-2.857 2.857m9.13 0a2.857 2.857 0 0 1-2.857-2.857v-2.286a2.857 2.857 0 0 1 2.857-2.857h0a2.857 2.857 0 0 1 2.857 2.857v2.286a2.857 2.857 0 0 1-2.857 2.857m-14.707-.719a2.85 2.85 0 0 1-1.896.719h0a2.857 2.857 0 0 1-2.857-2.857v-2.286v2.286v-2.286a2.857 2.857 0 0 1 2.857-2.857h0c.728 0 1.391.271 1.896.719"></svg:path></svg:g>`,
})
export class OpenmojiCoolButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
