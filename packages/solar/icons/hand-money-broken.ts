import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHandMoneyBrokenIcon],svg[solar-hand-money-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.414 10.414C18 9.828 18 8.886 18 7s0-2.828-.586-3.414m0 6.828C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586m10.828 0Zm0-6.828C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586m10.828 0Zm-10.828 0C6 4.172 6 5.114 6 7s0 2.828.586 3.414m0-6.828Zm0 6.828ZM13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path><svg:path stroke-linecap="round" d="M18 6a3 3 0 0 1-3-3m3 5a3 3 0 0 0-3 3M6 6a3 3 0 0 0 3-3M6 8a3 3 0 0 1 3 3M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118m-.93-3.297q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075m-5.544-1.229l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path></svg:g>`,
})
export class SolarHandMoneyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
