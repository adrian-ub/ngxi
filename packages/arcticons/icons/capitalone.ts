import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCapitaloneIcon],svg[arcticons-capitalone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 40.26c4.78-4 12.1-10.86 12.1-14.92c0-5.37-8.53-7.64-18.29-8.57A21.39 21.39 0 0 0 10 40.26"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.47 21.47 0 0 0 5.72 12.73c10.26 0 34.63-2.15 34.63 6.48c0 7.38-19.79 20.36-25.75 24.1A21.49 21.49 0 1 0 24 2.5"></svg:path>`,
})
export class ArcticonsCapitaloneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
