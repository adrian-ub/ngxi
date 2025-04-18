import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtIcon],svg[circle-flags-et-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEt0)"><svg:path fill="#d80027" d="m0 345l255.7-31L512 345v167H0z"></svg:path><svg:path fill="#ffda44" d="m0 167l258-40.7L512 167v178H0z"></svg:path><svg:path fill="#6da544" d="M0 0h512v167H0z"></svg:path><svg:circle cx="256" cy="256" r="122.4" fill="#0052b4"></svg:circle><svg:g fill="#ffda44"><svg:path d="m256 161.2l22 68h71.7l-58 42l22.3 68.3l-58-42.3l-58 42.2l22.2-68.1l-58-42H234z"></svg:path><svg:path d="m344.1 273l-70-22.9l43.2-59.6l-18-13L256 237l-43.3-59.7l-18 13.1l43.3 59.7l-70.1 22.7l6.9 21.2l70-22.8V345h22.3v-73.7l70.1 22.8z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsEtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
