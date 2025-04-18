import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsDcIcon],svg[circle-flags-us-dc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsDc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsDc0)"><svg:path fill="#eee" d="M0 0h512v186l-64 48l64 48v57l-64 48l64 48v77H0v-77l64-48l-64-48v-57l64-48l-64-48Z"></svg:path><svg:path fill="#d80027" d="M0 186h512v96H0zm0 153h512v96H0zm224-181l83-60H205l83 60l-32-98Zm118 0l83-60H323l83 60l-32-98Zm-236 0l83-60H87l83 60l-32-98Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsDcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
