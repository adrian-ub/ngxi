import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOvermorrowIcon],svg[arcticons-overmorrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="16.524" cy="25.237" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="12.024" ry="12.045"></svg:ellipse><svg:ellipse cx="36.886" cy="17.343" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.614" ry="6.625"></svg:ellipse><svg:ellipse cx="28.735" cy="30.115" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.914" ry="6.926"></svg:ellipse>`,
})
export class ArcticonsOvermorrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
