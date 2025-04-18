import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiUnefonIcon],svg[arcticons-mi-unefon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22 22.705v-8l5.3 8v-8m1.775 18.59v-8l5.3 8v-8m-20.75-10.59v5.35a2.65 2.65 0 1 0 5.3 0v-5.35m11.45 4h2.608m1.392 4h-4v-8h4m-20.75 14.59h2.6m-2.6 4v-8h4m5.725 0a2.65 2.65 0 0 1 2.65 2.65v2.7a2.65 2.65 0 0 1-2.65 2.65h0a2.65 2.65 0 0 1-2.65-2.65v-2.7a2.65 2.65 0 0 1 2.65-2.65"></svg:path>`,
})
export class ArcticonsMiUnefonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
