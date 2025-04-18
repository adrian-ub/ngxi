import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJavaIcon],svg[hugeicons-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.175 10.333c-1.208.408-1.955.97-1.955 1.593c0 .848 1.389 1.587 3.44 1.97m0 0c-.762.386-1.217.875-1.217 1.408c0 1.243 2.487 2.251 5.555 2.251a13 13 0 0 0 2.223-.187m-6.56-3.471a18 18 0 0 0 3.226.28c1.708 0 3.265-.216 4.445-.573m1.11-3.48c-1.411.417-3.379.676-5.555.676c-4.295 0-7.778-1.008-7.778-2.252c0-.96 2.077-1.78 5-2.104"></svg:path><svg:path d="M22 19.07C22 20.688 17.523 22 12 22S2 20.688 2 19.07c0-1.15 1.707-2.146 5-2.626m11.76-7.656c4.214-1.094 4.816 5.468-1.205 7.656M17.558 2c-.74.123-2.133.815-1.778 2.593c.356 1.777-.148 2.716-.444 2.963M13.113 2c-.741.148-2.134.978-1.778 3.111s-.148 2.704-.444 3"></svg:path></svg:g>`,
})
export class HugeiconsJavaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
