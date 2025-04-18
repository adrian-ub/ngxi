import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDotjsIcon],svg[material-icon-theme-dotjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2196f3" fill-opacity=".604" transform="translate(-6.66 100.49)"><svg:ellipse cx="37.18" cy="-256.97" rx="110.14" ry="139.47" transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)"></svg:ellipse><svg:ellipse cx="38.835" cy="-197.03" rx="110.14" ry="139.47" transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)"></svg:ellipse><svg:ellipse cx="-224.78" cy="-5.066" rx="110.14" ry="139.47" transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)"></svg:ellipse><svg:ellipse cx="-228.55" cy="-60.291" rx="110.14" ry="139.47" transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)"></svg:ellipse></svg:g>`,
})
export class MaterialIconThemeDotjsIcon {
  readonly viewBox = input("0 0 400 400")
  readonly width = input("1em")
  readonly height = input("1em")
}
