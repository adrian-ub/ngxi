import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHobiIcon],svg[arcticons-hobi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-28 13.506V29.59m7.012-10.584V29.59M10.5 24.278h7.012"></svg:path><svg:rect width="5.292" height="7.012" x="20.333" y="22.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.646" ry="2.646"></svg:rect><svg:circle cx="36.574" cy="19.337" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.574 22.578v7.012m-8.111-4.366a2.646 2.646 0 0 1 2.646-2.646h0a2.646 2.646 0 0 1 2.646 2.646v1.72a2.646 2.646 0 0 1-2.646 2.646h0a2.646 2.646 0 0 1-2.646-2.646m0 2.646V19.006"></svg:path>`,
})
export class ArcticonsHobiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
