import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[svgSpinnersClockIcon],svg[svg-spinners-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"></svg:path><svg:rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:rect><svg:rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><svg:animatetransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:rect>`,
})
export class SvgSpinnersClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
