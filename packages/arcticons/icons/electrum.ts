import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElectrumIcon],svg[arcticons-electrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="19.5" ry="9.5"></svg:ellipse><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="19.5" ry="9.5" transform="rotate(-61.136 24 24)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.369 24a2.215 2.215 0 0 1 0 4.43h-3.654v-8.86h3.654a2.215 2.215 0 0 1 0 4.43m0 0h-3.654m0-4.429h-1.299m1.299 8.858h-1.299m2.425-8.858V18m1.808 1.571V18m-1.808 12v-1.571M24.649 30v-1.571"></svg:path><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.5" ry="19.5" transform="rotate(-28.864 24 24)"></svg:ellipse>`,
})
export class ArcticonsElectrumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
