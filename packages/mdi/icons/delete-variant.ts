import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteVariantIcon],svg[mdi-delete-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.03 3L18 20.31c-.17.96-1 1.69-2 1.69H8c-1 0-1.83-.73-2-1.69L2.97 3zM5.36 5L8 20h8l2.64-15zM9 18v-4h4v4zm4-4.82L9.82 10L13 6.82L16.18 10z"></svg:path>`,
})
export class MdiDeleteVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
