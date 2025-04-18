import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinners3DotsScaleMiddleIcon],svg[svg-spinners-3-dots-scale-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="12" r="1.5" fill="currentColor"><svg:animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor"><svg:animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="3;1.5;3"></svg:animate></svg:circle><svg:circle cx="20" cy="12" r="1.5" fill="currentColor"><svg:animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"></svg:animate></svg:circle>`,
})
export class SvgSpinners3DotsScaleMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
