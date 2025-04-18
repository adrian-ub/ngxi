import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFloralKwgtIcon],svg[arcticons-floral-kwgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M33.43 43.327A21.4 21.4 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24a21.4 21.4 0 0 1-2.174 9.431"></svg:path><svg:circle cx="38.5" cy="38.5" r="7"></svg:circle><svg:path d="M36.654 34.492v8.016m3.692 0v-2.053L38.273 38.5l2.073-1.955v-2.053"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20.51 12.485H36.5c0 4.972-4.037 9.01-9.01 9.01H11.5c0-4.973 4.037-9.01 9.01-9.01"></svg:path><svg:path d="M17.547 21.494H28.28a6.05 6.05 0 0 1-6.047 6.047H11.5a6.05 6.05 0 0 1 6.047-6.047"></svg:path><svg:path d="M15.487 27.541a3.987 3.987 0 1 1-3.987 3.987v-3.987z"></svg:path></svg:g>`,
})
export class ArcticonsFloralKwgtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
