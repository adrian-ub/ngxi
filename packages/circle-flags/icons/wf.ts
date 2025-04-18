import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsWfIcon],svg[circle-flags-wf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsWf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsWf0)"><svg:path fill="#d80027" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0h256v256H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h75v224H0Z"></svg:path><svg:path fill="#d80027" d="M149 0h75v224h-75z"></svg:path><svg:path fill="#eee" d="m384 232l-72-72h144zm-24 24l-72-72v144zm24 24l-72 72h144zm24-24l72-72v144z"></svg:path></svg:g>`,
})
export class CircleFlagsWfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
