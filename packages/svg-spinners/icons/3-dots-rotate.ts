import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsRotateIcon],svg[svg-spinners-3-dots-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle><svg:g><svg:circle cx="4" cy="12" r="3" fill="currentColor"></svg:circle><svg:circle cx="20" cy="12" r="3" fill="currentColor"></svg:circle><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".36,.6,.31,1;.36,.6,.31,1" repeatCount="indefinite" type="rotate" values="0 12 12;180 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinners3DotsRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
