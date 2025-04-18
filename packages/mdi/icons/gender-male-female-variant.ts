import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGenderMaleFemaleVariantIcon],svg[mdi-gender-male-female-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a5 5 0 0 0 2 4a5 5 0 0 0-2 4a5 5 0 0 0 4 4.9V18H9v2h2v2h2v-2h2v-2h-2v-2.1a5 5 0 0 0 4-4.9a5 5 0 0 0-2-4a5 5 0 0 0 2-4h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3m3 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiGenderMaleFemaleVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
