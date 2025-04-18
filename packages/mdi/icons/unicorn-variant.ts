import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUnicornVariantIcon],svg[mdi-unicorn-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12v7l-3 1l-3-4.67c-.29-.44-1-.19-.92.34L14 23L4 18l.96-5.25C5.56 9.42 8.46 7 11.84 7H13l6-6l-2 6h3l-1.58 2.37C19.36 9.88 20 10.86 20 12"></svg:path>`,
})
export class MdiUnicornVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
