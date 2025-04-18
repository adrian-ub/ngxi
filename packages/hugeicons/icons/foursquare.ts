import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFoursquareIcon],svg[hugeicons-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.899 2h-8.18c-1.281 0-1.922 0-2.32.428C5 2.856 5 3.546 5 4.924v11.802c0 3.236 0 4.854.877 5.212c.876.358 1.876-.85 3.875-3.27l1.96-2.369c.266-.322.399-.483.576-.569s.377-.085.778-.085h.077c1.317 0 1.975 0 2.46-.393s.665-1.074 1.027-2.435l1.884-7.09c.454-1.71.681-2.564.273-3.145C18.38 2 17.552 2 15.9 2m1.6 7H12" color="currentColor"></svg:path>`,
})
export class HugeiconsFoursquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
