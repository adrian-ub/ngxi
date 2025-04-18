import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTkidentIcon],svg[arcticons-tkident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 29.998h9.161v3.057h-2.827v4.455H8.327v-4.455H5.5zm10.73 3.045h4.333l-4.395 4.467l4.395 4.472H16.23l-4.396-4.472z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.531 27.587V6.018a9.076 9.076 0 0 0 14.485 0a9.076 9.076 0 0 0 14.484 0v21.57c0 2.576-1.937 4.985-3.866 6.695c-2.88 2.552-10.618 4.53-10.618 4.53s-3.031-.774-6.006-1.98"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.877 29.74H24.45l1.739-7.09a4.45 4.45 0 0 1-2.617-4.061c0-2.461 1.99-4.457 4.445-4.457s4.444 1.996 4.444 4.457h0a4.44 4.44 0 0 1-2.354 3.926z"></svg:path>`,
})
export class ArcticonsTkidentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
