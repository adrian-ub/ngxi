import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCondicioner2BrokenIcon],svg[solar-condicioner-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 5c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11c0 3.771 0 5.657 1.172 6.828S6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5h-4"></svg:path><svg:path d="M18 18.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.607 15 15.904 15 14.5 15h-5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6 16.393 6 17.096 6 18.5m0-7h2m10 0h-6M6 9h6m6 0h-2"></svg:path></svg:g>`,
})
export class SolarCondicioner2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
