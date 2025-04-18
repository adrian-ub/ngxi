import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionColorWandOutlineIcon],svg[ion-color-wand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="63.03" height="378.2" x="280.48" y="122.9" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="31.52" transform="rotate(-45 312.002 311.994)"></svg:rect><svg:path fill="currentColor" d="M178.38 178.38a31.64 31.64 0 0 0 0 44.75L223.25 268L268 223.25l-44.87-44.87a31.64 31.64 0 0 0-44.75 0"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48m101.82-5.82l-33.94 33.94M124.12 259.88l-33.94 33.94"></svg:path>`,
})
export class IonColorWandOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
