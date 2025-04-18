import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGigsmartGetGigsIcon],svg[arcticons-gigsmart-get-gigs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.65 24c0-11.874 9.626-21.5 21.5-21.5m15.204 36.703A21.5 21.5 0 0 1 26.15 45.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.313 11.838a17.2 17.2 0 1 0 5.037 12.16h-8.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.61 27.34a12.9 12.9 0 1 1-23.63-9.788"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.15 32.6a8.6 8.6 0 0 1-8.6-8.6m8.6-12.9a4.3 4.3 0 0 0 0 8.6a4.3 4.3 0 0 1 0 8.6"></svg:path>`,
})
export class ArcticonsGigsmartGetGigsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
