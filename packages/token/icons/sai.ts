import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSaiIcon],svg[token-sai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 0 0 6.933-14.74L6.26 18.934A8.97 8.97 0 0 0 12 21m-6.885-3.204L17.796 5.115A8.96 8.96 0 0 0 12 3a9 9 0 0 0-9 9c0 2.208.795 4.23 2.115 5.796" clip-rule="evenodd"></svg:path>`,
})
export class TokenSaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
