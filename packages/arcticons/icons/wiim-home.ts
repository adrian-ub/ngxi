import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWiimHomeIcon],svg[arcticons-wiim-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.799 28.49v-8.51l3.43 4.286a1.065 1.065 0 0 0 1.662.001l3.428-4.275V28.5m-16.118-8.511V28.5l-3.43-4.287a1.065 1.065 0 0 0-1.662-.001l-3.428 4.275v-8.508"></svg:path><svg:circle cx="25.259" cy="20.246" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.259 22.855V28.5"></svg:path><svg:circle cx="22.604" cy="20.246" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.604 22.855V28.5"></svg:path>`,
})
export class ArcticonsWiimHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
