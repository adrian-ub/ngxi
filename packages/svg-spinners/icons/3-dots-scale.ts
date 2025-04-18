import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsScaleIcon],svg[svg-spinners-3-dots-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="12" r="3" fill="currentColor"><svg:animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor"><svg:animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3"></svg:animate></svg:circle><svg:circle cx="20" cy="12" r="3" fill="currentColor"><svg:animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3"></svg:animate></svg:circle>`,
})
export class SvgSpinners3DotsScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
