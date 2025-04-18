import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTransmissionIcon],svg[openmoji-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.939" cy="29.281" r="3.15" fill="#3f3f3f"></svg:circle><svg:path fill="#d0cfce" d="M46.439 64.56L36.838 32.3h-1.797l-9.602 32.26"></svg:path><svg:g stroke="#000" stroke-width="2"><svg:path fill="none" stroke-linecap="round" stroke-miterlimit="10" d="M18.863 46.357a24.15 24.15 0 0 1-1.782-32.163m37.717 0a24.15 24.15 0 0 1-1.782 32.163m-4.778-26.916a15.75 15.75 0 0 1-1.162 20.976m-22.274.001A15.75 15.75 0 0 1 23.64 19.44"></svg:path><svg:circle cx="35.939" cy="29.281" r="3.15" fill="none" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28.589 55.477h14.7m-11.55-11.864h8.4"></svg:path><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" d="m35.041 32.3l-9.602 32.26m21 0L36.838 32.3"></svg:path></svg:g>`,
})
export class OpenmojiTransmissionIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
