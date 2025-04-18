import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPaydirektIcon],svg[arcticons-paydirekt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.328 22.153a3.375 3.375 0 0 1-3.375 3.375h0a3.375 3.375 0 0 1-3.375-3.375v-2.194a3.375 3.375 0 0 1 3.375-3.375h0a3.375 3.375 0 0 1 3.375 3.375m0 5.569v-8.944m7.017 8.944l-3.595-8.944m6.75 0l-4.286 12.149c-.285.81-.541 1.564-1.91 2.225M11.5 22.153a3.375 3.375 0 0 0 3.375 3.375h0a3.375 3.375 0 0 0 3.375-3.375v-2.194a3.375 3.375 0 0 0-3.375-3.375h0A3.375 3.375 0 0 0 11.5 19.96m0-3.376v13.5"></svg:path><svg:circle cx="23.656" cy="33.509" r="1.907" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.831" cy="32.259" r="1.301" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.604" cy="32.657" r="1.301" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="15.625" cy="30.834" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsPaydirektIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
