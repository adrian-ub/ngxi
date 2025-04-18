import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCfIcon],svg[circle-flags-cf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCf0)"><svg:path fill="#ffda44" d="m0 378.4l252.9-28.8L512 378.4V512H322.8L256 481l-66.8 31H0z"></svg:path><svg:path fill="#6da544" d="m0 256l249.8-28L512 256v122.4H0z"></svg:path><svg:path fill="#eee" d="m0 133.6l255.3-28.3L512 133.6V256H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h189.2L256 30l66.8-30H512v133.6H0z"></svg:path><svg:path fill="#ffda44" d="m137.7 55.7l6.9 21.2H167L148.9 90l6.9 21.3l-18.1-13.1l-18 13.1l6.8-21.3l-18-13h22.3z"></svg:path><svg:path fill="#d80027" d="M189.2 0h133.6v512H189.2z"></svg:path></svg:g>`,
})
export class CircleFlagsCfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
