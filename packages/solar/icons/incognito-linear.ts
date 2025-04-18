import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoLinearIcon],svg[solar-incognito-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M2 11h20M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635c.814.636 1.086 1.727 1.632 3.91L20 11"></svg:path><svg:path d="M10 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="m10 17.5l.658-.33a3 3 0 0 1 2.684 0l.658.33"></svg:path></svg:g>`,
})
export class SolarIncognitoLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
