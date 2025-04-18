import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsObiletIcon],svg[arcticons-obilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.11 27.486c-1.16 0-2.11-.95-2.11-2.11v-1.372c0-1.161.95-2.11 2.11-2.11h0c1.161 0 2.111.949 2.111 2.11v1.372c0 1.16-.95 2.11-2.11 2.11"></svg:path><svg:circle cx="23.752" cy="19.255" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.752 21.788v5.698m2.26-8.547v7.387c0 .633.422 1.055 1.055 1.055h.317m8.244-7.281v6.331c0 .633.422 1.055 1.055 1.055H37m-2.533-5.698h2.322m-4.069 4.538c-.317.633-1.056 1.055-1.794 1.055h0c-1.161 0-2.11-.95-2.11-2.11v-1.373c0-1.16.949-2.11 2.11-2.11h0c1.16 0 2.11.95 2.11 2.11v.739h-4.22m-11.476-.739c0-1.16.95-2.11 2.11-2.11h0c1.16 0 2.11.95 2.11 2.11v1.372c0 1.161-.95 2.11-2.11 2.11h0c-1.16 0-2.11-.949-2.11-2.11m-.001 2.216v-8.442"></svg:path>`,
})
export class ArcticonsObiletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
