import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSapConcurIcon],svg[arcticons-sap-concur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="28" x="5.5" y="14.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 14.5v-5c0-2.216 1.784-4 4-4h10c2.216 0 4 1.784 4 4v5m-27.5 16c2.12-3.671 9.091-11.432 18.5-6s16.38-2.329 18.5-6M6.056 40.552c2.62-3.873 9.24-10.14 17.944-5.115c9.409 5.433 16.381-2.329 18.5-6"></svg:path>`,
})
export class ArcticonsSapConcurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
