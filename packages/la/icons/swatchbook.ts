import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSwatchbookIcon],svg[la-swatchbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v18c0 2.206 1.794 4 4 4s4-1.794 4-4V5zm2 2h4v4H7zm11.9.443l-4.398 4.4v2.827l4.396-4.399l2.83 2.829l-7.228 7.228V23c0 .056-.007.108-.008.164l10.065-10.062zM7 13h4v4H7zm0 6h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zm13.777 0l-2 2H25v4H14.777l-1.888 1.889c-.042.042-.092.071-.135.111H27v-8z"></svg:path>`,
})
export class LaSwatchbookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
