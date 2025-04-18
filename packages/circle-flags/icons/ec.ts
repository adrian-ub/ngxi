import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEcIcon],svg[circle-flags-ec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEc0)"><svg:path fill="#d80027" d="m0 384l254.7-32.7L512 383.9V512H0z"></svg:path><svg:path fill="#0052b4" d="m0 256l255-27l257 27v128H0z"></svg:path><svg:path fill="#ffda44" d="M0 0h512v256H0z"></svg:path><svg:circle cx="256" cy="256" r="89" fill="#ffda44"></svg:circle><svg:path fill="#338af3" d="M256 311.6c-30.7 0-55.7-25-55.7-55.6v-33.4a55.7 55.7 0 0 1 111.4 0V256c0 30.6-25 55.6-55.7 55.6"></svg:path><svg:path fill="#333" d="M345 122.4h-66.7a22.3 22.3 0 0 0-44.6 0H167a23 23 0 0 0 23 22.3h-.8c0 12.3 10 22.3 22.3 22.3c0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2c12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0 0 23-22.3"></svg:path></svg:g>`,
})
export class CircleFlagsEcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
