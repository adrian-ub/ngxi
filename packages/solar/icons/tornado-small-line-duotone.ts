import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTornadoSmallLineDuotoneIcon],svg[solar-tornado-small-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 5c-4.97 0-9 .672-9 1.5S7.03 8 12 8s9-.672 9-1.5c0-.52-1.588-.978-4-1.247"></svg:path><svg:path d="M20 10s-2.791 1-8.276 1S4 10 4 10m12 6s-1.258.5-4 .5s-4-.5-4-.5" opacity=".5"></svg:path><svg:path d="M16 18.5c-.748.255-1.648.5-3 .5s-2.342-.121-3-.245M18 13s-.515 1-6 1m-6-1s.219.425 1.892.721"></svg:path></svg:g>`,
})
export class SolarTornadoSmallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
