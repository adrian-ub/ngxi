import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignTopIcon],svg[mdi-format-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 15l2.5 2.5l1.42-1.42L12 11.16l-4.92 4.92L8.5 17.5L11 15v6h2zM3 3h18v2H3zm0 4h10v2H3z"></svg:path>`,
})
export class MdiFormatAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
