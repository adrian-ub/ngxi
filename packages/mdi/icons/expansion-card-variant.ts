import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiExpansionCardVariantIcon],svg[mdi-expansion-card-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h2.5v10H3V8.5H2M22 7v9h-8v1H7v-1H6V7m4 2H8v3h2m3-3h-2v3h2m7-3h-5v5h5z"></svg:path>`,
})
export class MdiExpansionCardVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
