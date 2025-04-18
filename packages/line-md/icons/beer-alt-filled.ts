import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerAltFilledIcon],svg[line-md-beer-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerAltFilled0"><svg:g><svg:path fill="none" stroke="#fff" stroke-width="2" d="M5 23.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1"></svg:path><svg:path fill="#fff" d="M5 23.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1v16.83h-12Z"></svg:path><svg:animatemotion fill="freeze" begin="0.7s" calcMode="linear" dur="0.3s" path="M0 0v-16"></svg:animatemotion></svg:g></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerAltFilled0)"></svg:path>`,
})
export class LineMdBeerAltFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
