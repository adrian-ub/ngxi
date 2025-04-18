import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEtLegacyIcon],svg[arcticons-et-legacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.89 43.5h26.56s-.745-12.366-4.242-12.777"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.209 30.724s2.198 4.482-4.481 4.482H16.25v-4.64h6.231s1.983-1.93 4.492-4.384m3.034-2.976c1.215-1.195 2.463-2.425 3.65-3.602m2.207-2.199a47 47 0 0 0 4.235-4.463l-23.849.008v-1.094a3.683 3.683 0 0 1 4.02-4.021"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.269 7.818S21.477 5.363 7.89 4.5v39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.71 19.55H16.25v-2.138h19.606m-8.882 8.768H16.25v-2.957h13.738"></svg:path>`,
})
export class ArcticonsEtLegacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
