import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPanoramaIcon],svg[flat-color-icons-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F57C00" d="M4 9v32s8.4-3 20-3s20 3 20 3V9s-6.7 3-20 3S4 9 4 9"></svg:path><svg:path fill="#942A09" d="M24 34h.4L15 19L6.9 36.2c3.4-.9 9.6-2.2 17.1-2.2"></svg:path><svg:path fill="#BF360C" d="M24 34q4.95 0 9 .6l-8-11.8l-7.8 11.5c2.1-.2 4.4-.3 6.8-.3"></svg:path><svg:path fill="#E65100" d="M40.7 36L35 26.5l-5 7.8c4.5.4 8.2 1.1 10.7 1.7"></svg:path><svg:ellipse cx="36" cy="19.5" fill="#FFF9C4" rx="2" ry="2.5"></svg:ellipse>`,
})
export class FlatColorIconsPanoramaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
