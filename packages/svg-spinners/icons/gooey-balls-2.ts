import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersGooeyBalls2Icon],svg[svg-spinners-gooey-balls-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter id="svgSpinnersGooeyBalls20"><svg:fegaussianblur in="SourceGraphic" result="y" stdDeviation="1"></svg:fegaussianblur><svg:fecolormatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"></svg:fecolormatrix><svg:feblend in="SourceGraphic" in2="z"></svg:feblend></svg:filter></svg:defs><svg:g filter="url(#svgSpinnersGooeyBalls20)"><svg:circle cx="5" cy="12" r="4" fill="currentColor"><svg:animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="5;8;5"></svg:animate></svg:circle><svg:circle cx="19" cy="12" r="4" fill="currentColor"><svg:animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="19;16;19"></svg:animate></svg:circle><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinnersGooeyBalls2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
