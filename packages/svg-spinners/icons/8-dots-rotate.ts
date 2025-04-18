import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinners8DotsRotateIcon],svg[svg-spinners-8-dots-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g><svg:circle cx="3" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="3" r="2" fill="currentColor"></svg:circle><svg:circle cx="5.64" cy="5.64" r="2" fill="currentColor"></svg:circle><svg:circle cx="18.36" cy="18.36" r="2" fill="currentColor"></svg:circle><svg:circle cx="5.64" cy="18.36" r="2" fill="currentColor"></svg:circle><svg:circle cx="18.36" cy="5.64" r="2" fill="currentColor"></svg:circle><svg:animatetransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g>`,
})
export class SvgSpinners8DotsRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
