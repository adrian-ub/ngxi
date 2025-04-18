import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCoronavirusIcon],svg[uim-coronavirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.5" cy="10.5" r="1.5" fill="currentColor" opacity=".7"></svg:circle><svg:circle cx="9" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="13.5" r="1.5" fill="currentColor" opacity=".7"></svg:circle><svg:circle cx="15" cy="9" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 8a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 15a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m10-10h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2M6 13H2a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2" opacity=".25"></svg:path><svg:path fill="currentColor" d="M18 13a1 1 0 0 1 0-2h2.941A9.01 9.01 0 0 0 13 3.059V7a1 1 0 0 1-2 0V3.059A9.01 9.01 0 0 0 3.059 11H6a1 1 0 0 1 0 2H3.059A9.01 9.01 0 0 0 11 20.941V17a1 1 0 0 1 2 0v3.941A9.01 9.01 0 0 0 20.941 13Zm-9 3a1 1 0 1 1 1-1a1 1 0 0 1-1 1m.5-4a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9.5 12m5 3a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5m.5-5a1 1 0 1 1 1-1a1 1 0 0 1-1 1" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.979 6.393a9 9 0 0 1 1.414-1.414l-.757-.757a1 1 0 0 0-1.414 1.414zm0 11.214l-.757.757a1 1 0 1 0 1.414 1.414l.757-.757a9 9 0 0 1-1.414-1.414m14.042 0a9 9 0 0 1-1.414 1.414l.757.757a1 1 0 0 0 1.414-1.414zm0-11.214l.757-.757a1 1 0 0 0-1.414-1.414l-.757.757a9 9 0 0 1 1.414 1.414"></svg:path>`,
})
export class UimCoronavirusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
