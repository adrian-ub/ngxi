import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonGiftBoldIcon],svg[iconamoon-gift-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5"><svg:path stroke-linecap="round" d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></svg:path><svg:path d="M6 4.5A2.5 2.5 0 0 1 8.5 2A3.5 3.5 0 0 1 12 5.5V7H8.5A2.5 2.5 0 0 1 6 4.5Zm12 0A2.5 2.5 0 0 0 15.5 2A3.5 3.5 0 0 0 12 5.5V7h3.5A2.5 2.5 0 0 0 18 4.5Z"></svg:path><svg:path stroke-linecap="round" d="M3 7h18v4H3zm9 4v10"></svg:path></svg:g>`,
})
export class IconamoonGiftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
