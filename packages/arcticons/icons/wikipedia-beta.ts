import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWikipediaBetaIcon],svg[arcticons-wikipedia-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.07h7.3m4.99 0h5.52m7.36 0h-2.42m-7.7 0l10.53 25.86l7.431-19.008"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.67 11.07L18.23 36.93L8.15 11.07"></svg:path><svg:circle cx="36.585" cy="11.07" r="6.915" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.585 15.07v-8m-4 4h8m-6.5 2.5l5-5m-5 0l5 5"></svg:path>`,
})
export class ArcticonsWikipediaBetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
