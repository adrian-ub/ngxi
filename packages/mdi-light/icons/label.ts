import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightLabelIcon],svg[mdi-light-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h8c.97 0 1.83.46 2.38 1.18l4.16 5.32l-4.16 5.32C15.83 18.54 14.97 19 14 19H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m9.58 11.23l3.69-4.73l-3.69-4.73C15.21 7.3 14.64 7 14 7H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8c.64 0 1.21-.3 1.58-.77"></svg:path>`,
})
export class MdiLightLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
