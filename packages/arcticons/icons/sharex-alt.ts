import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSharexAltIcon],svg[arcticons-sharex-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.878 25.235a9.24 9.24 0 0 1 5.458-9.942m12.78 9.941q.116-.727.116-1.463a9.24 9.24 0 0 0-5.574-8.48m1.692 16.013a9.24 9.24 0 0 1-10.695.003"></svg:path><svg:circle cx="24.024" cy="14.483" r="3.495" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="15.838" cy="28.64" r="3.495" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.161" cy="28.675" r="3.495" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.754 34.25v-20.5L24 3.5L6.247 13.75v20.5L24 44.5z"></svg:path><svg:circle cx="24" cy="14.483" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.161" cy="28.675" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.838" cy="28.675" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsSharexAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
