import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsKlingonIcon],svg[circle-flags-klingon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsKlingon0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsKlingon0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="277" r="126" fill="#eee"></svg:circle><svg:path fill="#333" d="M256 355c15.1-25.3 28.9-39.7 44-65c-3.5-15.8-17.3-7.1-43-204c-29 198.4-44.5 189.4-46 202c14.8 25.8 30.2 41.2 45 67m-53-51c11.5 17.7 32.5 42.3 44 60c-69.2 4.6-83.4 21.3-107 46c-4.2-81.8 50.6-81.5 63-106m63 59c13.3-19.2 29.7-41.8 43-61c22.6 46.3 52.6 59.7 80 62c-21.4 30.2-76.8 27.2-123-1"></svg:path></svg:g>`,
})
export class CircleFlagsKlingonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
