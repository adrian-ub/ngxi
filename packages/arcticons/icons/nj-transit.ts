import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNjTransitIcon],svg[arcticons-nj-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.9 31.666l1.983 3.434A14.8 14.8 0 0 0 42.5 27.7V5.5h-7.4v22.2a7.4 7.4 0 0 1-13.809 3.7l-8.39-14.533L12.9 42.5H5.5V11.444a5.94 5.94 0 0 1 11.082-2.975L27.7 27.699V5.5h7.4"></svg:path>`,
})
export class ArcticonsNjTransitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
