import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplexIcon],svg[arcticons-simplex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 42.5L42.5 14.75m-18.5 0l9.25-9.25M5.5 33.25l16-16m2.5 16l9.25 9.25M5.5 14.75l16 16M14.75 5.5L42.5 33.25"></svg:path>`,
})
export class ArcticonsSimplexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
