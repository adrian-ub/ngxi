import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinners6DotsRotateIcon],svg[svg-spinners-6-dots-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g><svg:circle cx="12" cy="2.5" r="1.5" fill="currentColor" opacity=".14"></svg:circle><svg:circle cx="16.75" cy="3.77" r="1.5" fill="currentColor" opacity=".29"></svg:circle><svg:circle cx="20.23" cy="7.25" r="1.5" fill="currentColor" opacity=".43"></svg:circle><svg:circle cx="21.5" cy="12" r="1.5" fill="currentColor" opacity=".57"></svg:circle><svg:circle cx="20.23" cy="16.75" r="1.5" fill="currentColor" opacity=".71"></svg:circle><svg:circle cx="16.75" cy="20.23" r="1.5" fill="currentColor" opacity=".86"></svg:circle><svg:circle cx="12" cy="21.5" r="1.5" fill="currentColor"></svg:circle><svg:animatetransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinners6DotsRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
