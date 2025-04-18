import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyalphaMobileIcon],svg[arcticons-myalpha-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.141 32.191L27.45 22.5h11.974a15.4 15.4 0 0 0-2.47-7H22.5V8.576a15.4 15.4 0 0 0-7 2.47V15.5h-4.454a15.4 15.4 0 0 0-2.47 7H15.5v14.454a15.4 15.4 0 0 0 7 2.47V27.45l9.692 9.691a15.55 15.55 0 0 0 4.95-4.95"></svg:path>`,
})
export class ArcticonsMyalphaMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
