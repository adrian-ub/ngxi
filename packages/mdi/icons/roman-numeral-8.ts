import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral8Icon],svg[mdi-roman-numeral-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l2 10h2L7 7H5l-1 5l-1-5zm11 0v2h-1v6h1v2H8v-2h1V9H8V7zm5 0v2h-1v6h1v2h-4v-2h1V9h-1V7zm5 0v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiRomanNumeral8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
