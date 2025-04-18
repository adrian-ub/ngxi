import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtAmIcon],svg[circle-flags-et-am-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEtAm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEtAm0)"><svg:path fill="#ffda44" d="M0 0h192l160 64L512 0v512H320l-160-64L0 512Z"></svg:path><svg:path fill="#d80027" d="M0 512L192 0h320L320 512Z"></svg:path><svg:path fill="#ffda44" d="m176 378l208-150H128l208 150l-80-244Z"></svg:path></svg:g>`,
})
export class CircleFlagsEtAmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
