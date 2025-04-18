import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangSlIcon],svg[circle-flags-lang-sl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangSl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangSl0)"><svg:path fill="#0052b4" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#eee" d="M0 0h512v167H0z"></svg:path><svg:path fill="#d80027" d="M0 345h512v167H0z"></svg:path><svg:path fill="#0052b4" d="M222.7 167v-66.8H89V167l67 82.6z"></svg:path><svg:path fill="#eee" d="M89 167v22.2c0 51.1 66.8 66.8 66.8 66.8s66.8-15.7 66.8-66.8V167l-22.3 22.2l-44.5-33.4l-44.5 33.4z"></svg:path></svg:g>`,
})
export class CircleFlagsLangSlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
