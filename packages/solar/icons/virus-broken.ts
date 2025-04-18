import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVirusBrokenIcon],svg[solar-virus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056ZM18 6l-1.05 1.05M5 5l2 2m10.05 11.05l-.55-.55M6 19.05L7.05 18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.5 13a2 2 0 1 0 2-2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path><svg:circle cx="9" cy="13" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.56 5.56a1.5 1.5 0 1 1 0-2.12M2 3.5A1.5 1.5 0 1 0 3.5 2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.05 19.55a1.5 1.5 0 1 0-1.5 1.5M3.44 19.44a1.5 1.5 0 1 1 0 2.12"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm6 10a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z"></svg:path></svg:g>`,
})
export class SolarVirusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
