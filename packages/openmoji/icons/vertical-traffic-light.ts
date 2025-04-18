import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiVerticalTrafficLightIcon],svg[openmoji-vertical-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M47 15.82v36c0 3.85-3.15 7-7 7h-8c-3.85 0-7-3.15-7-7v-36c0-3.85 3.15-7 7-7h8c3.85 0 7 3.15 7 7"></svg:path><svg:circle cx="36" cy="48.292" r="5" fill="#b1cc33"></svg:circle><svg:circle cx="36" cy="34.292" r="5" fill="#f4aa41"></svg:circle><svg:circle cx="36" cy="19.292" r="5" fill="#ea5a47"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M47 16v36c0 3.85-3.15 7-7 7h-8c-3.85 0-7-3.15-7-7V16c0-3.85 3.15-7 7-7h8c3.85 0 7 3.15 7 7"></svg:path><svg:circle cx="36" cy="48.472" r="5"></svg:circle><svg:circle cx="36" cy="34.472" r="5"></svg:circle><svg:circle cx="36" cy="19.472" r="5"></svg:circle></svg:g>`,
})
export class OpenmojiVerticalTrafficLightIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
