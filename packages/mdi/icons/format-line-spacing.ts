import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLineSpacingIcon],svg[mdi-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h12v-2H10m0 8h12v-2H10m0-10h12V5H10M6 7h2.5L5 3.5L1.5 7H4v10H1.5L5 20.5L8.5 17H6z"></svg:path>`,
})
export class MdiFormatLineSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
