import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImaginIcon],svg[arcticons-imagin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.29 32.92a4.79 4.79 0 1 0 4.79 4.79v-18.5c0-7.572 6.139-13.71 13.71-13.71S42.5 11.638 42.5 19.21s-6.138 13.71-13.71 13.71z"></svg:path>`,
})
export class ArcticonsImaginIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
