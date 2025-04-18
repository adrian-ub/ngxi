import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidGaugeSimpleHighIcon],svg[fa6-solid-gauge-simple-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m320 96c0-15.9-5.8-30.4-15.3-41.6L381.3 163c6.1-11.8 1.5-26.3-10.2-32.4s-26.2-1.5-32.4 10.2l-76.6 147.5c-2-.2-4-.3-6.1-.3c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64"></svg:path>`,
})
export class Fa6SolidGaugeSimpleHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
