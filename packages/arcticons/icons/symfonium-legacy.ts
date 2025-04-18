import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSymfoniumLegacyIcon],svg[arcticons-symfonium-legacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.616 19.637A9.7 9.7 0 0 1 12 14.261h0c0-5.391 4.37-9.76 9.76-9.76h5.743c4.172 0 7.17 1.159 9.562 4.272M12.772 39.227c2.391 3.113 5.39 4.273 9.562 4.273h5.774c5.373 0 9.729-4.356 9.729-9.729v-.042a9.7 9.7 0 0 0-1.697-5.492"></svg:path><svg:path d="M6.73 22.82h3.355l2.015 3.49l1.898-4.847l2.635 6.309l1.757-7.188l4.073 8.066l2.954-15.732l3.754 22.44l3.035-16.451l2.395 8.066l1.917-6.708l1.515 2.606h3.237"></svg:path></svg:g>`,
})
export class ArcticonsSymfoniumLegacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
