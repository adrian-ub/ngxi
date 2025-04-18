import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBlIcon],svg[circle-flags-bl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBl0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#acabb1" d="M167 178a28 28 0 0 0-28 28H55a28 28 0 0 0 28 28a28 28 0 0 0 28 28a28 28 0 0 0 28 28h234a28 28 0 0 0 28-28a28 28 0 0 0 28-28a28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28z"></svg:path><svg:path fill="#ffda44" d="M123 357h44v44h-44zm222 0h44v44h-44zm-178 11h178v44H167zm67-268v33.5L223 145l-12-6v-17h-44v56l89 14l89-14v-56h-44v17l-12 6l-11-11.5V100z"></svg:path><svg:path fill="#0052b4" d="M167 178v112c0 68 89 88.5 89 88.5s89-20.4 89-88.5V178z"></svg:path><svg:path fill="#d80027" d="M167 222.1h178v69H167z"></svg:path></svg:g>`,
})
export class CircleFlagsBlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
