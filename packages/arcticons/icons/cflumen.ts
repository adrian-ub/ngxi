import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCflumenIcon],svg[arcticons-cflumen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 24A21.49 21.49 0 0 1 32 4.055a21.5 21.5 0 1 0 0 39.89A21.49 21.49 0 0 1 18.5 24m20.326-6.674l2.36 4.314L45.5 24l-4.314 2.36l-2.36 4.314l-2.359-4.314L32.152 24l4.315-2.36z"></svg:path>`,
})
export class ArcticonsCflumenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
