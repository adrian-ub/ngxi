import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiClosedBookIcon],svg[openmoji-closed-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m15.009 57.99l41.848-.38c1.653-.006 2.99-1.097 2.99-2.75V15.15a3 3 0 0 0-3-3H16.955a3 3 0 0 0-2.172.93l-1.954 2.051a3 3 0 0 0-.828 2.07v37.79a3 3 0 0 0 3.009 3"></svg:path><svg:path fill="#d22f27" d="M55.002 61H11.999a1 1 0 0 1-.999-.998V16.999c0-.552.447-.999.999-.999h43.003c.551 0 .998.447.998.999v43.003a1 1 0 0 1-.998.998"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.164 16.451L15.999 12h43.003c.551 0 .998.447.998.999v43.003a1 1 0 0 1-.998.998"></svg:path><svg:path d="M55.002 61H11.999a1 1 0 0 1-.999-.998V16.999c0-.552.447-.999.999-.999h43.003c.551 0 .998.447.998.999v43.003a1 1 0 0 1-.998.998"></svg:path></svg:g>`,
})
export class OpenmojiClosedBookIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
