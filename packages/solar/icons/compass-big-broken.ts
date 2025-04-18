import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCompassBigBrokenIcon],svg[solar-compass-big-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5.025 9.21c.537-1.342.806-2.013 1.267-2.54q.177-.201.378-.378c.527-.461 1.198-.73 2.54-1.267c6.292-2.517 9.439-3.775 11.236-2.554c.426.29.793.657 1.083 1.083c.951 1.4.398 3.619-1.083 7.506a256 256 0 0 1-1.471 3.73c-.537 1.342-.806 2.013-1.267 2.54q-.177.201-.378.378c-.527.461-1.198.73-2.54 1.267c-6.293 2.515-9.44 3.775-11.236 2.554a4.1 4.1 0 0 1-1.083-1.083c-.946-1.393-.403-3.596 1.06-7.446"></svg:path><svg:path d="M12.5 14.959q-.245.04-.5.041a3 3 0 1 1 2.959-2.5"></svg:path></svg:g>`,
})
export class SolarCompassBigBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
