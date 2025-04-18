import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppkillerIcon],svg[arcticons-appkiller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24A21.5 21.5 0 1 1 24 2.5"></svg:path><svg:circle cx="30.644" cy="3.552" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.637" cy="6.606" r=".75" fill="currentColor"></svg:circle><svg:circle cx="41.394" cy="11.363" r=".75" fill="currentColor"></svg:circle><svg:circle cx="44.448" cy="17.356" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32 16L16 32m0-16l16 16"></svg:path>`,
})
export class ArcticonsAppkillerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
