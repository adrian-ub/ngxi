import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsHtIcon],svg[circle-flags-ht-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsHt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsHt0)"><svg:path fill="#a2001d" d="m0 256l254.8-41.8L512 256v256H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v256H0z"></svg:path><svg:path fill="#eee" d="m345 322.8l-89-11.1l-89 11V189.3h178z"></svg:path><svg:circle cx="256" cy="267.1" r="44.5" fill="#0052b4"></svg:circle><svg:circle cx="256" cy="267.1" r="22.3" fill="#a2001d"></svg:circle><svg:path fill="#6da544" d="M222.6 211.5h66.8L256 244.9z"></svg:path><svg:path fill="#ffda44" d="M244.9 233.7H267v66.8h-22z"></svg:path><svg:path fill="#6da544" d="M291.6 293.8h-71.2l-53.4 29h178z"></svg:path></svg:g>`,
})
export class CircleFlagsHtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
