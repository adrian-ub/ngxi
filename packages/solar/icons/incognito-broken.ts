import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoBrokenIcon],svg[solar-incognito-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M2 11h12m8 0h-4M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91c.76-.593 1.79-.632 3.754-.635m10 7l-.614-2.455c-.546-2.183-.818-3.274-1.632-3.91c-.76-.593-1.79-.632-3.754-.635"></svg:path><svg:path d="M10 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="m10 17.5l.658-.33a3 3 0 0 1 2.684 0l.658.33"></svg:path></svg:g>`,
})
export class SolarIncognitoBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
