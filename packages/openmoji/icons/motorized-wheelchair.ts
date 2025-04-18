import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMotorizedWheelchairIcon],svg[openmoji-motorized-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a57939" d="M53.581 29.472a3.5 3.5 0 0 1-1 .073H35.404a1.003 1.003 0 0 0-1 1v2.008a1.003 1.003 0 0 0 1 1H56.59a1.003 1.003 0 0 0 1-1V11.368a1.003 1.003 0 0 0-1-1h-2.01a1.003 1.003 0 0 0-1 1z"></svg:path><svg:path fill="#ea5a47" d="M41.306 33.553c-7.8 2.828-8.553 11.156-8.553 11.156l-9.29.148a14.9 14.9 0 0 1 1.915 7.055l10.81.146v-.146a12.484 12.484 0 1 1 24.967 0c1.784-10.7-3.566-19.618-3.566-19.618"></svg:path><svg:circle cx="48.196" cy="50.8" r="6.291" fill="#d0cfce"></svg:circle><svg:circle cx="15.176" cy="50.8" r="6.291" fill="#d0cfce"></svg:circle><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23.697 45.72a10.94 10.94 0 0 1 1.681 6.192l10.81.146v-.146a12.484 12.484 0 1 1 24.968 0c1.783-10.7-3.567-19.618-3.567-19.618"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41.306 33.553c-7.8 2.828-8.709 12.14-8.709 12.14l-4.079.012"></svg:path><svg:circle cx="48.196" cy="50.8" r="6.291" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25.378 51.912a12.505 12.505 0 0 0-8.344-11.724m36.547-10.716a3.5 3.5 0 0 1-1 .073H35.404a1.003 1.003 0 0 0-1 1v2.008a1.003 1.003 0 0 0 1 1H56.59a1.003 1.003 0 0 0 1-1V11.368a1.003 1.003 0 0 0-1-1h-2.01a1.003 1.003 0 0 0-1 1z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m21.275 42.528l9.344-21.984l3.786.037l2.896.029m-2.897-2.129v2.1"></svg:path><svg:circle cx="15.176" cy="50.799" r="6.291" stroke-miterlimit="10" transform="rotate(-1.335 15.175 50.796)"></svg:circle></svg:g>`,
})
export class OpenmojiMotorizedWheelchairIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
