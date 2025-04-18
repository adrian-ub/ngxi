import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCarSolidIcon],svg[teenyicons-car-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.197 2.698A3.5 3.5 0 0 1 5.198 1h4.604a3.5 3.5 0 0 1 3 1.698L15 6.358V12.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V12H4v.5A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5V6.358zM12 7H3V6h9zM2 10h3V9H2zm11-1h-3v1h3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsCarSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
