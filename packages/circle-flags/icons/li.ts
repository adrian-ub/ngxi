import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLiIcon],svg[circle-flags-li-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLi0)"><svg:path fill="#d80027" d="m0 256l255.2-39.6L512 256v256H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v256H0z"></svg:path><svg:path fill="#ffda44" d="M189.2 178a33.4 33.4 0 0 0-55.6-24.8v-19.6h11.1v-22.3h-11.1v-11.1h-22.3v11.1h-11.1v22.3h11.1v19.6A33.4 33.4 0 0 0 66.8 203v19.6H178V203c6.8-6.1 11.1-15 11.1-25z"></svg:path></svg:g>`,
})
export class CircleFlagsLiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
