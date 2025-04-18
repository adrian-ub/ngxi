import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHorseVariantIcon],svg[mdi-horse-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v8l-3 1l-3.09-5.5c-.26-.46-.99-.23-.91.31L14 21L4 17l1.15-8.06A6.92 6.92 0 0 1 12 3h8l-1.58 2.37C19.36 5.88 20 6.86 20 8"></svg:path>`,
})
export class MdiHorseVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
