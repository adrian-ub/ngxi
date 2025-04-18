import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFluffyFallIcon],svg[arcticons-fluffy-fall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.741 24.643c.477 2.208 1.685 2.962 3.259 2.962s2.782-.754 3.259-2.962"></svg:path><svg:ellipse cx="8.68" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.179" ry="5.589"></svg:ellipse><svg:ellipse cx="39.321" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.179" ry="5.589"></svg:ellipse>`,
})
export class ArcticonsFluffyFallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
