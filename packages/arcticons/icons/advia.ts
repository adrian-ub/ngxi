import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdviaIcon],svg[arcticons-advia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.333 24.513a2.417 2.417 0 0 1-2.416 2.417h0A2.417 2.417 0 0 1 9.5 24.513v-1.57a2.417 2.417 0 0 1 2.417-2.417h0a2.417 2.417 0 0 1 2.416 2.417m0 3.987v-6.404m7.25 2.417a2.417 2.417 0 0 0-2.416-2.417h0a2.417 2.417 0 0 0-2.417 2.417v1.57a2.417 2.417 0 0 0 2.417 2.417h0a2.417 2.417 0 0 0 2.416-2.417m0 2.417v-9.667"></svg:path><svg:circle cx="31.501" cy="17.611" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.492 20.526v6.404m7.008-2.417a2.417 2.417 0 0 1-2.417 2.417h0a2.417 2.417 0 0 1-2.416-2.417v-1.57a2.417 2.417 0 0 1 2.416-2.417h0a2.417 2.417 0 0 1 2.417 2.417m0 3.987v-6.404m-9.667 0l-2.416 6.404L24 20.526"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsAdviaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
