import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleLinearIcon],svg[solar-black-hole-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.632 10.696c3.535-3.535 11.737 5.233 6.364 10.607"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.68 13.304C10.144 16.84 1.942 8.07 7.316 2.697"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.851 13.524C7.316 9.99 16.084 1.786 21.458 7.16"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.46 10.476c3.536 3.535-5.232 11.738-10.606 6.364"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3"></svg:path><svg:path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3"></svg:path></svg:g>`,
})
export class SolarBlackHoleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
