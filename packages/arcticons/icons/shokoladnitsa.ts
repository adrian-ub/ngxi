import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShokoladnitsaIcon],svg[arcticons-shokoladnitsa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.276 15.575c1.402 2.979 1.02 6.078.386 8.451s-2.022 5.16-1.437 8.402m-6.107-16.856c1.402 2.986 1.02 6.081.385 8.455s-2.022 5.159-1.436 8.401m-6.108-16.856c1.402 2.986 1.02 6.081.386 8.455s-2.022 5.159-1.437 8.401"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsShokoladnitsaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
