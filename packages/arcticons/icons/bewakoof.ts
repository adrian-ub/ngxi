import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBewakoofIcon],svg[arcticons-bewakoof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="13.939" cy="26.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.439" ry="7.249"></svg:ellipse><svg:ellipse cx="34.061" cy="26.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.439" ry="7.249"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.017 15.187c4.832-1.175 6.693-.053 9.957 3.106"></svg:path>`,
})
export class ArcticonsBewakoofIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
