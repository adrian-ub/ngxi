import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral4Icon],svg[mdi-roman-numeral-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7l2 10h2l2-10h-2l-1 5l-1-5zm-1 0v2h-1v6h1v2H7v-2h1V9H7V7z"></svg:path>`,
})
export class MdiRomanNumeral4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
