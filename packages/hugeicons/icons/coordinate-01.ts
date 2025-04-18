import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoordinate01Icon],svg[hugeicons-coordinate-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.008 5c.59-.607 2.159-3 2.999-3s2.409 2.393 2.999 3m-3-2.15V22m11.996-8.005c.607.59 3 2.159 3 2.999s-2.393 2.409-3 2.998m2.189-2.998H1.998" color="currentColor"></svg:path>`,
})
export class HugeiconsCoordinate01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
