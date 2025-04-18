import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOfferupIcon],svg[arcticons-offerup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.369 28.832l30.755-5.516l5.376-9.143l-8.245-5.958L4.5 13.73z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.494 28.272l7.997 11.513l23.522-15.73l1.487-9.882"></svg:path><svg:circle cx="39.339" cy="14.912" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsOfferupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
