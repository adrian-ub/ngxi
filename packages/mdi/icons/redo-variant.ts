import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRedoVariantIcon],svg[mdi-redo-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7A6.5 6.5 0 0 0 4 13.5a6.5 6.5 0 0 0 6.5 6.5H14v-2h-3.5C8 18 6 16 6 13.5S8 9 10.5 9h5.67l-3.08 3.09l1.41 1.41L20 8l-5.5-5.5l-1.42 1.41L16.17 7zM18 18h-2v2h2z"></svg:path>`,
})
export class MdiRedoVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
