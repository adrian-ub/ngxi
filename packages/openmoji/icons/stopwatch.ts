import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStopwatchIcon],svg[openmoji-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" stroke="#d0cfce" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m53.756 19.737l4.586-3.55l3.06 3.954l-4.253 3.291"></svg:path><svg:path fill="#d0cfce" d="M31.313 7h11.008v6.294H31.313z"></svg:path><svg:circle cx="36.821" cy="36.294" r="23" fill="#FFF"></svg:circle><svg:circle cx="36.821" cy="36.294" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m56.366 17.717l1.976-1.53l3.06 3.954l-1.832 1.418M32.321 9.727V7h9v2.893"></svg:path><svg:circle cx="36.347" cy="16.982" r="1"></svg:circle><svg:circle cx="36.347" cy="55.024" r="1"></svg:circle><svg:ellipse cx="49.797" cy="22.553" rx=".988" ry="1.012" transform="rotate(-45.001 49.797 22.553)"></svg:ellipse><svg:ellipse cx="22.898" cy="49.453" rx=".988" ry="1.012" transform="rotate(-45.001 22.897 49.453)"></svg:ellipse><svg:circle cx="55.369" cy="36.003" r="1"></svg:circle><svg:circle cx="17.326" cy="36.003" r="1"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36.84 35.91h-15.4m15.445.015l-10.89 10.89"></svg:path><svg:ellipse cx="49.797" cy="49.453" rx="1.012" ry=".988" transform="rotate(-45.001 49.797 49.454)"></svg:ellipse><svg:ellipse cx="22.898" cy="22.553" rx="1.012" ry=".988" transform="rotate(-45.001 22.897 22.553)"></svg:ellipse>`,
})
export class OpenmojiStopwatchIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
