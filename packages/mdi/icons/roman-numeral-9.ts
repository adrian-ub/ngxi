import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral9Icon],svg[mdi-roman-numeral-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v2h-1v6h1v2H7v-2h1V9H7V7zm1 0l2 5l-2 5h2l1-2.5l1 2.5h2l-2-5l2-5h-2l-1 2.5L14 7z"></svg:path>`,
})
export class MdiRomanNumeral9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
