import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageKotlinIcon],svg[mdi-language-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20L12 12l10 10H2Z"></svg:path>`,
})
export class MdiLanguageKotlinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
