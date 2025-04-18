import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1xbitIcon],svg[arcticons-1xbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4zm10.76 2.091l4.618 4.618m0-4.618l-4.618 4.618"></svg:path><svg:circle cx="33.343" cy="19.058" r=".851" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.343 22.035v6.441m3.577-8.446v7.231c0 .671.544 1.215 1.215 1.215h.365m-2.856-6.441h2.552M28.83 24a2.243 2.243 0 1 1 0 4.486h-3.7v-8.972h3.7a2.243 2.243 0 0 1 0 4.486m.001 0H25.13m0-4.486h-1.315m1.315 8.972h-1.315m2.456-8.972v-1.59m1.831 1.59v-1.59m-1.831 12.152v-1.59m1.831 1.59v-1.59M9.5 28.861h4.861M9.5 20.462l2.431-1.323m0 0v9.722"></svg:path>`,
})
export class Arcticons1xbitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
