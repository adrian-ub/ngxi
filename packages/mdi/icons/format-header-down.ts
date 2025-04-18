import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderDownIcon],svg[mdi-format-header-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 4h2v6h4V4h2v14H8v-6H4v6H2V4zm18.586 4.585L17 12.172l-3.586-3.587L12 9.999L17 15l5-5.001l-1.414-1.414z" fill="currentColor"></svg:path>`,
})
export class MdiFormatHeaderDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
