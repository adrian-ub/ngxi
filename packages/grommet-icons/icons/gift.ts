import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsGiftIcon],svg[grommet-icons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M3 11h18v12H3zm-1 0V7h20v4zm10 12V7zM7 7h5s-2-5-5-5C3.5 2 3 7 7 7Zm10.184 0h-5s1.816-5 5-5c3.316 0 4 5 0 5Z"></svg:path>`,
})
export class GrommetIconsGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
