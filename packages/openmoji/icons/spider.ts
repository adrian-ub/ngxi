import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSpiderIcon],svg[openmoji-spider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#9b9b9a" stroke-width="1.33"><svg:ellipse cx="36.22" cy="29.93" rx="8.644" ry="11.3"></svg:ellipse><svg:circle cx="36.22" cy="45.89" r="4.654"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M25.98 8.278s-14.61 29.22 9.296 33.2m1.334.002c26.56-3.984 10.62-33.2 10.62-33.2"></svg:path><svg:path d="M61.4 21.34s-3.541 22.13-23.46 19.81M10.6 21.45s5.201 21.36 23.57 20.03"></svg:path><svg:path d="M33.29 41.48s-12.62 9.668-5.976 18.59"></svg:path><svg:path d="M31.3 40.7s-18.59 7.415-13.28 22.02m20.91-21.68s13.61 8.411 6.972 19.03"></svg:path><svg:path d="M42.03 40.92s18.7 7.857 12.62 22.8"></svg:path><svg:ellipse cx="35.94" cy="30.19" rx="8.632" ry="11.29"></svg:ellipse><svg:circle cx="35.94" cy="46.13" r="4.648"></svg:circle></svg:g>`,
})
export class OpenmojiSpiderIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
