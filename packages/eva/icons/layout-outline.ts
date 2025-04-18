import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaLayoutOutlineIcon],svg[eva-layout-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1M5 18v-8h6v9H6a1 1 0 0 1-1-1m13 1h-5v-9h6v8a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaLayoutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
