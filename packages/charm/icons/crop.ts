import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCropIcon],svg[charm-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.25 1.75v10h10M11.8 14.2v-2.5m0-2.5v-5h-5m-2.5 0H1.8"></svg:path>`,
})
export class CharmCropIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
