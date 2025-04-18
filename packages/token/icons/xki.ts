import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXkiIcon],svg[token-xki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.097 3H5.613v13.355h3.484v-5.934l5.226 5.934h4.064l-5.806-6.678L17.806 3h-4.064L9.097 8.934zM7.355 21a1.742 1.742 0 1 0 0-3.483a1.742 1.742 0 0 0 0 3.483"></svg:path>`,
})
export class TokenXkiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
