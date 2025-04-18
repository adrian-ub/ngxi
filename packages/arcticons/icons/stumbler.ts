import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStumblerIcon],svg[arcticons-stumbler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.19 12C9.87 7.35 16.65 4.5 24 4.5S38.13 7.35 41.81 12m-27.92 7c2.11-2.48 5.9-4 10.05-4s8 1.5 10.05 3.95m-10.05 4.51a7.38 7.38 0 0 0-6.06 11.6l6.06 8.44l6-8.44h0a7.38 7.38 0 0 0-6-11.6m0 4.92a2.46 2.46 0 0 1 2.46 2.46h0a2.46 2.46 0 0 1-2.46 2.46h0a2.47 2.47 0 0 1-2.47-2.46h0a2.47 2.47 0 0 1 2.47-2.46"></svg:path>`,
})
export class ArcticonsStumblerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
