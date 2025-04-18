import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKijijiIcon],svg[arcticons-kijiji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.482 20.09v8.581a2.44 2.44 0 0 1-2.429 2.452h0"></svg:path><svg:circle cx="17.314" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.482" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.65" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.818" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.986" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.314 20.09v6.497M27.65 20.09v6.497m5.168-6.497v8.172a2.44 2.44 0 0 1-2.429 2.452h0m7.597-10.624v6.497m-28.722-9.71v9.807m.001-2.084l4.439-4.417m-3.026 3.012l3.49 3.474"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsKijijiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
