import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenQuintIcon],svg[token-quint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 17.999v.6H21l-.528-.6z"></svg:path><svg:path fill="currentColor" d="M13.2 17.4V15H5.4V5.4H15v15.599h6v-2.4h-3.6V3H3v14.4z"></svg:path><svg:path fill="currentColor" d="m6 14.399l-.6.6h7.8l-.6-.6zM6 6l-.6-.6H15l-.6.6z"></svg:path><svg:path fill="currentColor" d="m15 5.4l-.6.6v14.4l.6.6zM9 8.1L5.4 5.4V15L9 12.3z"></svg:path>`,
})
export class TokenQuintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
