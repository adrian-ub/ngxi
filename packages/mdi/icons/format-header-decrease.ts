import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderDecreaseIcon],svg[mdi-format-header-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h2v6h4V4h2v14h-2v-6H6v6H4zm16.42 3.41L16.83 11l3.59 3.59L19 16l-5-5l5-5z"></svg:path>`,
})
export class MdiFormatHeaderDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
