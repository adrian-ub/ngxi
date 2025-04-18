import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCondicioner2LinearIcon],svg[solar-condicioner-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11c0 3.771 0 5.657-1.172 6.828S17.771 19 14 19h-4c-3.771 0-5.657 0-6.828-1.172S2 14.771 2 11Z"></svg:path><svg:path stroke-linecap="round" d="M18 18.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.607 15 15.904 15 14.5 15h-5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6 16.393 6 17.096 6 18.5m0-7h12M6 9h12"></svg:path></svg:g>`,
})
export class SolarCondicioner2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
