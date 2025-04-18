import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLanciaIcon],svg[arcticons-lancia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.001" cy="22.291" r="12.733" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.348 20.377v4.279h2.14m14.796-4.279v4.279m-8.815 0v-4.279l2.835 4.279v-4.279m4.408 2.844v.018c0 .783-.635 1.418-1.418 1.418h0a1.42 1.42 0 0 1-1.418-1.418v-1.444c0-.783.635-1.418 1.418-1.418h0c.783 0 1.418.635 1.418 1.418v.017M17.06 24.656l1.418-4.28l1.418 4.28m-.47-1.418H17.53m14.327 1.418l1.418-4.28l1.417 4.28m-.47-1.418h-1.895"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.268 12.212c-12.564-8.724-24.78-9.206-36.583.1C4.822 25.786 9.303 36.639 23.973 42.5c13.544-5.422 19.488-15.615 18.295-30.289z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.717 9.624c.835 1.998 1.078 6.336 1.334 6.484c.24-.15.598-5.686 1.253-6.362m.034 25.21c-.882-2.742-1.214-6.416-1.336-6.592c-.112.146-.516 3.842-1.38 6.587"></svg:path>`,
})
export class ArcticonsLanciaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
