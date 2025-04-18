import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpensignalIcon],svg[arcticons-opensignal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.109" cy="15.96" r="2.072" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.669 17.985l-3.874 17.846m4.754-17.846l3.874 17.846m.448-15.108a6.735 6.735 0 1 0-9.524 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.213 24.064a11.46 11.46 0 1 0-16.208 0m6.528-.827h3.152m-4.08 4.227h5.008m-6.142 5.273h7.276m-14.924-2.048l7.016-.785l7.468.785l8.044-.392l5.534 12.462l-12.157.741l-11.678-1.743l-9.935 1.482z"></svg:path>`,
})
export class ArcticonsOpensignalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
