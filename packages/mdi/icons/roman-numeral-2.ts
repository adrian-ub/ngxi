import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRomanNumeral2Icon],svg[mdi-roman-numeral-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v2h-1v6h1v2H7v-2h1V9H7V7zm6 0v2h-1v6h1v2h-4v-2h1V9h-1V7z"></svg:path>`,
})
export class MdiRomanNumeral2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
