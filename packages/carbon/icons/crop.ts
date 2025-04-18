import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCropIcon],svg[carbon-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 20h-2V9H12V7h11a2 2 0 0 1 2 2Z"></svg:path><svg:path fill="currentColor" d="M9 23V2H7v5H2v2h5v14a2 2 0 0 0 2 2h14v5h2v-5h5v-2Z"></svg:path>`,
})
export class CarbonCropIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
