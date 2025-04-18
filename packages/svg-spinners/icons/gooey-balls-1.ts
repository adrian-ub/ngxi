import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersGooeyBalls1Icon],svg[svg-spinners-gooey-balls-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter id="svgSpinnersGooeyBalls10"><svg:fegaussianblur in="SourceGraphic" result="y" stdDeviation="1.5"></svg:fegaussianblur><svg:fecolormatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"></svg:fecolormatrix><svg:feblend in="SourceGraphic" in2="z"></svg:feblend></svg:filter></svg:defs><svg:g fill="currentColor" filter="url(#svgSpinnersGooeyBalls10)"><svg:circle cx="4" cy="12" r="3"><svg:animate attributeName="cx" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="4;9;4"></svg:animate><svg:animate attributeName="r" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="3;8;3"></svg:animate></svg:circle><svg:circle cx="15" cy="12" r="8"><svg:animate attributeName="cx" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="15;20;15"></svg:animate><svg:animate attributeName="r" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite" values="8;3;8"></svg:animate></svg:circle></svg:g>`,
})
export class SvgSpinnersGooeyBalls1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
