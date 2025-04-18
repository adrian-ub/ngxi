import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRaagIcon],svg[arcticons-raag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="19.558" cy="36.956" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.627" ry="6.544"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.185 36.956V4.5s13.009 5.782 7.542 22.015"></svg:path>`,
})
export class ArcticonsRaagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
