import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmigoIcon],svg[arcticons-amigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.997" cy="23.05" r="5.167" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.516 8.524L6.242 34.578c-3.185 6.252 3.275 10.082 6.87 6.607l3.464-3.347c5.847-5.65 9.229-5.53 14.963.204l2.474 2.474c4.416 4.416 10.917.144 7.773-5.967L28.395 8.523c-2.074-4.031-6.824-4.033-8.879 0"></svg:path>`,
})
export class ArcticonsAmigoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
