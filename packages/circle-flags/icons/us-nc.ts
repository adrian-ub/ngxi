import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsNcIcon],svg[circle-flags-us-nc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsNc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsNc0)"><svg:path fill="#0052b4" d="M0 0h232l64 256l-64 256H0Z"></svg:path><svg:path fill="#d80027" d="M232 0h280v256l-140 64l-140-64Z"></svg:path><svg:path fill="#eee" d="M232 256h280v256H232Z"></svg:path><svg:path fill="#0052b4" d="M0 0h232v512H0z"></svg:path><svg:path fill="#eee" d="m91 294l65-47H76l65 47l-25-76z"></svg:path><svg:path fill="#ffda44" d="M24 224h40v64H24zm144 0h40v64h-40zM64 92v16H24v32h40v-16h104v16h40v-32h-40V92zm0 328v-16H24v-32h40v16h104v-16h40v32h-40v16z"></svg:path></svg:g>`,
})
export class CircleFlagsUsNcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
