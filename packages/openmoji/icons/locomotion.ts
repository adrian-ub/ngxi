import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLocomotionIcon],svg[openmoji-locomotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-miterlimit="10" stroke-width="2"><svg:path fill="#61B2E4" d="M12.013 16.02c0 7.5 5 13.75 5 13.75s5-6.25 5-13.75"></svg:path><svg:circle cx="17.013" cy="16.019" r="5" fill="#92D3F5"></svg:circle><svg:path fill="#D22F27" d="M50.013 44.02c0 7.5 5 13.75 5 13.75s5-6.25 5-13.75"></svg:path><svg:circle cx="55.013" cy="44.019" r="5" fill="#EA5A47"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.013 16.02c0 7.5 5 13.75 5 13.75s5-6.25 5-13.75"></svg:path><svg:circle cx="17.013" cy="16.019" r="5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M50.013 44.02c0 7.5 5 13.75 5 13.75s5-6.25 5-13.75"></svg:path><svg:circle cx="55.013" cy="44.019" r="5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 33s16 0 17 14s16 14 21 14M31.971 21.741l12.058 10.518m-.482-7.055l.482 7.055m-7.055.481l7.055-.481"></svg:path></svg:g>`,
})
export class OpenmojiLocomotionIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
