import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSportsMedalIcon],svg[openmoji-sports-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" stroke="#92d3f5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M54.999 4.022L43 16.021h-7l-5.042-5.042l6.963-6.962h17.078"></svg:path><svg:path fill="#ea5a47" stroke="#ea5a47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23.983 4.004L36 16.021h-7L16.968 3.988h7.015"></svg:path><svg:path fill="#fcea2b" d="M28 22.427V17h16v5.427"></svg:path><svg:circle cx="36" cy="45.021" r="23" fill="#fcea2b"></svg:circle><svg:path fill="#f1b31c" d="m35.986 28l-5.128 10.401l-11.477 1.672l8.308 8.092l-1.956 11.431l10.263-5.4l10.267 5.393l-1.965-11.43l8.302-8.098l-11.477-1.663z"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="45.021" r="23"></svg:circle><svg:circle cx="36" cy="45.021" r="23" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36" cy="45.021" r="23"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 19v-2.979M43 19v-2.979m-14 0h14M25.99 13.01l-9.022-9.022M31.99 12.01l-8.007-8.006M34 8l3.921-3.983M46 13l8.999-8.978m-38.031-.034h7.015m13.938.029h17.078"></svg:path><svg:circle cx="36" cy="45.021" r="23"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m35.986 28l-5.128 10.401l-11.477 1.672l8.308 8.092l-1.956 11.431l10.263-5.4l10.267 5.393l-1.965-11.43l8.302-8.098l-11.477-1.663z"></svg:path></svg:g>`,
})
export class OpenmojiSportsMedalIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
