import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFeastKwgtIcon],svg[arcticons-feast-kwgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M33.43 43.327A21.4 21.4 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24a21.4 21.4 0 0 1-2.174 9.431"></svg:path><svg:circle cx="38.5" cy="38.5" r="7"></svg:circle><svg:path d="M36.654 34.492v8.016m3.692 0v-2.053L38.273 38.5l2.073-1.955v-2.053"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.777 40.445a3.54 3.54 0 0 1-3.184-.974h0a3.547 3.547 0 0 1 0-5.016l4.269-4.269a3.547 3.547 0 0 0 0-5.016h0a3.547 3.547 0 0 0-5.016 0l-4.27 4.27a3.547 3.547 0 0 1-5.015 0h0a3.547 3.547 0 0 1 0-5.017l4.269-4.269a3.547 3.547 0 0 0 0-5.016h0a3.547 3.547 0 0 0-5.016 0l-4.27 4.27a3.547 3.547 0 0 1-5.015 0h0a3.547 3.547 0 0 1 0-5.016l3.814-3.598a3.44 3.44 0 0 0 .087-4.918h0"></svg:path>`,
})
export class ArcticonsFeastKwgtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
