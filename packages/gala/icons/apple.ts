import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaAppleIcon],svg[gala-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.244"><svg:path d="m 33.866666,21.166666 c -4.233333,1e-6 -25.465872,-8.433732 -25.465872,12.732936" transform="translate(.331 .207)scale(3.76975)"></svg:path><svg:path d="m 8.400794,33.899602 c 0,21.166665 12.743914,29.710184 16.977248,29.710184 4.233334,0 4.255291,-4.244312 8.488624,-4.244312" transform="translate(.331 .207)scale(3.76975)"></svg:path><svg:path d="m 33.866665,21.166666 c 4.233334,1e-6 25.465874,-8.433732 25.465874,12.732936" transform="translate(.331 .207)scale(3.76975)"></svg:path><svg:path d="m 59.354497,33.866666 c 0,21.166666 -12.765873,29.74312 -16.999207,29.74312 -4.233334,0 -4.25529,-4.244312 -8.488624,-4.244312" transform="translate(.331 .207)scale(3.76975)"></svg:path><svg:path d="m 33.866666,21.166666 c 0,-12.6999995 -8.488624,-16.9772483 -8.488624,-16.9772483" transform="translate(.331 .207)scale(3.76975)"></svg:path><svg:path d="m 33.866666,21.166666 c 0,-16.9333325 8.499603,-12.7439153 12.732936,-16.9772483" transform="translate(.331 .207)scale(3.76975)"></svg:path><svg:path d="m 33.866666,21.166666 c 12.7,-4.233333 16.966269,-8.510583 12.732936,-16.9772483" transform="translate(.331 .207)scale(3.76975)"></svg:path></svg:g>`,
})
export class GalaAppleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
