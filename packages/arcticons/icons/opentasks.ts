import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpentasksIcon],svg[arcticons-opentasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.67 6.09L42.5 11L21.59 31.89L11 21.31l4.82-4.82l5.75 5.74ZM28.48 25h10.34A1.24 1.24 0 0 1 40 26.14v4.6a1.24 1.24 0 0 1-1.15 1.15H6.65a1.15 1.15 0 0 1-1.15-1.15v-4.6A1.24 1.24 0 0 1 6.65 25h8m-8 10h32.17A1.23 1.23 0 0 1 40 36.17v4.59a1.23 1.23 0 0 1-1.15 1.15H6.65a1.15 1.15 0 0 1-1.15-1.15v-4.59A1.23 1.23 0 0 1 6.65 35"></svg:path>`,
})
export class ArcticonsOpentasksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
