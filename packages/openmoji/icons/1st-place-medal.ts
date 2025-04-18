import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmoji1stPlaceMedalIcon],svg[openmoji-1st-place-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M28.057 22.427V17h15.858v5.427"></svg:path><svg:path fill="#92d3f5" stroke="#92d3f5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.8" d="M54.999 4.022L43 16.021h-7l-5.042-5.042l6.963-6.962h17.078"></svg:path><svg:path fill="#ea5a47" stroke="#ea5a47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.8" d="M23.983 4.004L36 16.021h-7L16.968 3.988h7.015"></svg:path><svg:circle cx="36" cy="44.975" r="23" fill="#fcea2b"></svg:circle><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="44.975" r="23"></svg:circle><svg:circle cx="36" cy="44.975" r="23" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 19v-2.979M43 19v-2.979m-14 0h14M25.99 13.01l-9.022-9.022M31.99 12.01l-8.007-8.006M34 8l3.921-3.983M46 13l8.999-8.978m-38.031-.034h7.015m13.938.029h17.078m-24.64 33.375L37.557 32v26"></svg:path></svg:g>`,
})
export class Openmoji1stPlaceMedalIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
