import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDicewareIcon],svg[arcticons-diceware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="34" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="34" cy="24" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="34" cy="36" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="14" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="14" cy="24" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="14" cy="36" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle>`,
})
export class ArcticonsDicewareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
