import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBqSaIcon],svg[circle-flags-bq-sa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBqSa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBqSa0)"><svg:path fill="#d80027" d="M0 0h512v256H0z"></svg:path><svg:path fill="#0052b4" d="M0 256h512v256H0z"></svg:path><svg:path fill="#eee" d="M0 256L256 0l256 256l-256 256z"></svg:path><svg:path fill="#ffda44" d="m256 133.6l27.6 85H373L300.7 271l27.6 85l-72.3-52.5l-72.3 52.6l27.6-85l-72.3-52.6h89.4z"></svg:path></svg:g>`,
})
export class CircleFlagsBqSaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
