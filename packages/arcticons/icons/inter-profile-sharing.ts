import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterProfileSharingIcon],svg[arcticons-inter-profile-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.058 29.825a7.444 7.444 0 1 1 10.405-.219"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.07 29.747c.476-2.202 2.427-3.736 4.815-3.783c2.388-.048 4.654 1.402 5.591 3.577"></svg:path><svg:circle cx="13.127" cy="22.409" r="2.842" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.683 20.697l7.848-5.503m-6.854 12.109l7.848 5.504m1.11-14.432a7.444 7.444 0 1 1 10.406-.218"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.648 18.297c.475-2.202 2.427-3.736 4.815-3.783c2.387-.047 4.654 1.403 5.59 3.577"></svg:path><svg:circle cx="34.705" cy="10.96" r="2.842" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.76 42.5a7.444 7.444 0 1 1 10.406-.218"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.773 42.422c.475-2.202 2.427-3.736 4.815-3.783c2.387-.048 4.654 1.402 5.591 3.576"></svg:path><svg:circle cx="34.83" cy="35.084" r="2.842" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInterProfileSharingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
