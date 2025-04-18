import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersPulseRingIcon],svg[svg-spinners-pulse-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" type="translate" values="12 12;0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" type="scale" values="0;1"></svg:animatetransform><svg:animate attributeName="opacity" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="1;0"></svg:animate></svg:path>`,
})
export class SvgSpinnersPulseRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
