import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness3Icon],svg[zmdi-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 3q88 0 150.5 62.5T277 216t-62.5 150.5T64 429q-33 0-64-9q66-21 107.5-77T149 216T107.5 89T0 12q31-9 64-9"></svg:path>`,
})
export class ZmdiBrightness3Icon {
  readonly viewBox = input("0 0 280 432")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
