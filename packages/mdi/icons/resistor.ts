import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiResistorIcon],svg[mdi-resistor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h5l3.07 4.35L13.11 4L18 11h4v2h-5l-3.07-4.35L10.89 20L6 13H2z"></svg:path>`,
})
export class MdiResistorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
